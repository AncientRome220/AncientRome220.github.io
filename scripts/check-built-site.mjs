import { readFile, stat } from "node:fs/promises";
import { resolve } from "node:path";
import { parse } from "yaml";

const root = resolve(import.meta.dirname, "..");
const dist = resolve(root, "dist");
const pages = [
  "index.html", "research/index.html", "publications/index.html", "activities/index.html", "cv/index.html",
  "en/index.html", "en/research/index.html", "en/publications/index.html", "en/activities/index.html", "en/cv/index.html", "404.html"
];
const privatePatterns = [/rm_researchers/i, /\.jsonl/i, /contact_point/i, /internal_id/i, /exports[\\/]/i];
const emailPattern = /[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}/gi;
const profile = parse(await readFile(resolve(root, "src/data/profile.yaml"), "utf8"));
const publicEmail = profile?.public_contact?.email;
const emailPages = new Set(["index.html", "en/index.html", "cv/index.html", "en/cv/index.html"]);

/** @param {string} path */
async function exists(path) {
  try { return (await stat(path)).isFile(); } catch { return false; }
}

/** @param {string} href */
function internalTarget(href) {
  if (!href.startsWith("/") || href.startsWith("//")) return null;
  const path = href.split(/[?#]/)[0];
  if (path.startsWith("/downloads/")) return path.slice(1);
  if (/\.[a-z0-9]+$/i.test(path)) return path.slice(1);
  if (path === "/") return "index.html";
  return `${path.slice(1).replace(/\/$/, "")}/index.html`;
}

const failures = [];
const htmlFiles = [];
for (const page of pages) {
  const file = resolve(dist, page);
  if (!(await exists(file))) { failures.push(`missing page: ${page}`); continue; }
  htmlFiles.push([page, await readFile(file, "utf8")]);
}
for (const required of ["robots.txt", "sitemap-index.xml", "downloads/publications.bib"]) {
  if (!(await exists(resolve(dist, required)))) failures.push(`missing output: ${required}`);
}
for (const [page, html] of htmlFiles) {
  for (const pattern of privatePatterns) if (pattern.test(html)) failures.push(`private pattern ${pattern} in ${page}`);
  const emails = html.match(emailPattern) ?? [];
  if (emailPages.has(page)) {
    if (typeof publicEmail !== "string" || emails.length !== 2 || emails.some((email) => email !== publicEmail)) {
      failures.push(`expected only the approved public email link in ${page}`);
    }
    if (!html.includes(`href="mailto:${publicEmail}"`) || !html.includes(`>${publicEmail}<`)) {
      failures.push(`missing visible mailto link in ${page}`);
    }
  } else if (emails.length > 0) {
    failures.push(`email address found outside a homepage in ${page}`);
  }
  if (!/<html lang="(?:ja|en)">/.test(html)) failures.push(`missing lang in ${page}`);
  if (!/<link rel="canonical"/.test(html)) failures.push(`missing canonical in ${page}`);
  if (!/<link rel="alternate" hreflang="ja"/.test(html)) failures.push(`missing ja hreflang in ${page}`);
  if (!/<link rel="alternate" hreflang="en"/.test(html)) failures.push(`missing en hreflang in ${page}`);
  if (!/application\/ld\+json/.test(html)) failures.push(`missing JSON-LD in ${page}`);
  const h1Count = (html.match(/<h1(?:\s|>)/g) ?? []).length;
  if (h1Count !== 1) failures.push(`expected one h1 in ${page}, found ${h1Count}`);
  for (const match of html.matchAll(/href="([^"]+)"/g)) {
    const target = internalTarget(match[1]);
    if (target && !(await exists(resolve(dist, target)))) failures.push(`broken internal link in ${page}: ${match[1]}`);
  }
}
const builtText = htmlFiles.map(([, html]) => html).join("\n") + await readFile(resolve(dist, "downloads/publications.bib"), "utf8");
for (const pattern of privatePatterns) if (pattern.test(builtText)) failures.push(`private pattern found in built site: ${pattern}`);
const jaCount = (htmlFiles.find(([page]) => page === "publications/index.html")?.[1].match(/<article>/g) ?? []).length;
const enCount = (htmlFiles.find(([page]) => page === "en/publications/index.html")?.[1].match(/<article>/g) ?? []).length;
if (jaCount !== enCount || jaCount !== 5) failures.push(`publication count mismatch: ja=${jaCount}, en=${enCount}`);
const cvPages = htmlFiles.filter(([page]) => page === "cv/index.html" || page === "en/cv/index.html");
for (const [page, html] of cvPages) {
  const publicationCount = (html.match(/data-cv-record="publication"/g) ?? []).length;
  const presentationCount = (html.match(/data-cv-record="presentation"/g) ?? []).length;
  if (publicationCount !== profile.publications.length) failures.push(`CV publication count mismatch in ${page}: ${publicationCount}`);
  if (presentationCount !== profile.presentations.length) failures.push(`CV presentation count mismatch in ${page}: ${presentationCount}`);
  for (const required of ["profile", "education", "appointments", "awards", "publications", "presentations", "service", "engagement", "memberships", "other"]) {
    if (!html.includes(`data-cv-section="${required}"`)) failures.push(`missing CV section ${required} in ${page}`);
  }
  for (const empty of ["teaching", "languages", "skills"]) {
    if (html.includes(`data-cv-section="${empty}"`)) failures.push(`empty CV section rendered: ${empty} in ${page}`);
  }
}
if (failures.length) { console.error(failures.join("\n")); process.exit(1); }
console.log(`Verified ${pages.length} HTML files, bilingual parity, internal links, metadata, and privacy guards.`);
