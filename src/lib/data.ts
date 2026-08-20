import { parse } from "yaml";
import profileSource from "../data/profile.yaml?raw";
import attachmentsSource from "../data/attachments.yaml?raw";
import type { Locale } from "./i18n";

export type Localized = { ja?: string | null; en?: string | null };
export type Profile = Record<string, any>;
export type Attachment = { related_to: string; source_name: string; recommended_path: string; url: string };

export const profile = parse(profileSource) as Profile;
const attachmentData = parse(attachmentsSource) as { files?: Attachment[] };
export const attachments = attachmentData.files ?? [];

export function t(value: Localized | string | null | undefined, locale: Locale): string {
  if (typeof value === "string") return value;
  if (!value) return "";
  return value[locale] || value[locale === "ja" ? "en" : "ja"] || "";
}

export function list(value: Record<Locale, string[]> | undefined, locale: Locale): string[] {
  if (!value) return [];
  return value[locale] ?? value[locale === "ja" ? "en" : "ja"] ?? [];
}

export function period(item: { from?: string | null; to?: string | null; date?: string | null }, locale: Locale): string {
  if (item.date) return item.date;
  const present = locale === "ja" ? "現在" : "Present";
  return `${item.from ?? ""}–${item.to ?? present}`;
}

export function publicationDetails(item: Profile, locale: Locale): string {
  const volume = item.volume ? `${locale === "ja" ? "第" : "vol. "}${item.volume}${locale === "ja" ? "巻" : ""}` : null;
  const issue = item.issue ? `${locale === "ja" ? "第" : "no. "}${item.issue}${locale === "ja" ? "号" : ""}` : null;
  const bits = [t(item.venue, locale), item.series, volume, issue, item.pages ? `pp. ${item.pages}` : null];
  return bits.filter(Boolean).join(", ");
}

export function linksFor(relatedTo: string): Attachment[] {
  return attachments.filter((item) => item.related_to === relatedTo);
}
