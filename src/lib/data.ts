import { parse } from "yaml";
import profileSource from "../data/profile.yaml?raw";
import attachmentsSource from "../data/attachments.yaml?raw";
import type { Locale } from "./i18n";

export type Localized = { ja?: string | null; en?: string | null };
export type LocalizedList = Partial<Record<Locale, string[]>>;

export interface DatedItem {
  date?: string | null;
  from?: string | null;
  to?: string | null;
}

export interface Degree {
  date: string;
  degree: Localized;
  institution: Localized;
}

export interface Education extends DatedItem {
  institution: Localized;
  note?: Localized;
}

export interface ResearchExperience extends DatedItem {
  affiliation: Localized;
  role: Localized;
}

export interface AwardFunding extends DatedItem {
  title: Localized;
  organization?: Localized;
  description?: Localized;
}

export interface CommitteeMembership extends DatedItem {
  organization: Localized;
  role: Localized;
}

export interface AssociationMembership extends DatedItem {
  name: Localized;
}

export interface Publication {
  bibliography_key: string;
  english_title_kind?: string;
  category: string;
  date: string;
  authors: LocalizedList;
  title: Localized;
  venue: Localized;
  series?: string | null;
  volume?: string | null;
  issue?: string | null;
  pages?: string | null;
  language: string;
  peer_reviewed: boolean;
  lead_author?: boolean;
  corresponding_author?: boolean;
  doi?: string | null;
  url?: string | null;
}

export interface Presentation {
  status?: string;
  materials_url?: string;
  date: string;
  event_period?: string | null;
  type: string;
  title: Localized;
  event: Localized;
  co_presenters?: LocalizedList;
  location?: Localized;
}

export interface SocialContribution extends DatedItem {
  role?: string | null;
  title: Localized;
  event: Localized;
  location?: Localized;
}

export interface OtherActivity extends DatedItem {
  title: Localized;
  category?: string;
  description?: Localized;
  completion_status?: string;
}

export interface TeachingEntry extends DatedItem {
  title: Localized;
  institution?: Localized;
  role?: Localized;
  description?: Localized;
}

export interface LanguageEntry {
  language: Localized;
  proficiency?: Localized;
}

export interface TechnicalSkill {
  category: Localized;
  items: LocalizedList;
}

export interface Profile {
  schema_version: number;
  last_reviewed: string;
  identity: {
    name: Localized & { kana?: string | null };
    public_identifiers: {
      researchmap_url: string;
      j_global_id: string;
      j_global_url: string;
      orcid: string;
      orcid_url: string;
      github_url: string;
    };
  };
  public_contact: { email: string };
  profile: Record<Locale, { summary: string; expertise: string[]; current_projects: string[] }>;
  current_affiliation: { organization: Localized; section: Localized; position: Localized };
  degrees: Degree[];
  research_interests: Localized[];
  research_areas: Array<{ discipline: Localized; field: Localized; keyword: Localized }>;
  education: Education[];
  research_experience: ResearchExperience[];
  awards_funding: AwardFunding[];
  teaching: TeachingEntry[];
  languages: LanguageEntry[];
  technical_skills: TechnicalSkill[];
  committee_memberships: CommitteeMembership[];
  publications: Publication[];
  presentations: Presentation[];
  association_memberships: AssociationMembership[];
  social_contributions: SocialContribution[];
  other_activities: OtherActivity[];
}

export interface Attachment {
  related_to: string;
  source_name: string;
  recommended_path: string;
  url: string;
}

export const profile = parse(profileSource) as Profile;
const attachmentData = parse(attachmentsSource) as { files?: Attachment[] };
export const attachments = attachmentData.files ?? [];

export function t(value: Localized | string | null | undefined, locale: Locale): string {
  if (typeof value === "string") return value;
  if (!value) return "";
  return value[locale] || value[locale === "ja" ? "en" : "ja"] || "";
}

export function list(value: LocalizedList | undefined, locale: Locale): string[] {
  if (!value) return [];
  return value[locale] ?? value[locale === "ja" ? "en" : "ja"] ?? [];
}

export function formatDate(value: string | null | undefined, locale: Locale): string {
  if (!value) return "";
  const match = /^(\d{4})(?:-(\d{2}))?(?:-(\d{2}))?$/.exec(value);
  if (!match) return value;
  const [, year, month, day] = match;
  if (!month) return locale === "ja" ? `${year}年` : year;
  const date = new Date(Date.UTC(Number(year), Number(month) - 1, Number(day ?? 1)));
  if (locale === "ja") {
    return day ? `${year}年${Number(month)}月${Number(day)}日` : `${year}年${Number(month)}月`;
  }
  return new Intl.DateTimeFormat("en-GB", {
    year: "numeric",
    month: day ? "long" : "short",
    ...(day ? { day: "numeric" } : {})
  }).format(date);
}

export function period(item: DatedItem, locale: Locale): string {
  if (item.date) return formatDate(item.date, locale);
  const from = formatDate(item.from, locale);
  if (item.from && item.to === item.from) return from;
  const present = locale === "ja" ? "現在" : "Present";
  return `${from}–${item.to ? formatDate(item.to, locale) : present}`;
}

export function publicationDetails(item: Publication, locale: Locale): string {
  const volume = item.volume ? `${locale === "ja" ? "第" : "vol. "}${item.volume}${locale === "ja" ? "巻" : ""}` : null;
  const issue = item.issue ? `${locale === "ja" ? "第" : "no. "}${item.issue}${locale === "ja" ? "号" : ""}` : null;
  const bits = [t(item.venue, locale), item.series, volume, issue, item.pages ? `pp. ${item.pages}` : null];
  return bits.filter(Boolean).join(", ");
}

const publicationTypeLabels: Record<string, Record<Locale, string>> = {
  published_paper: { ja: "論文・研究報告", en: "Articles & Papers" },
  master_thesis: { ja: "学位論文", en: "Theses" },
  book_review: { ja: "書評", en: "Book Reviews" }
};

const presentationTypeLabels: Record<string, Record<Locale, string>> = {
  oral_presentation: { ja: "口頭発表", en: "Oral presentation" },
  poster_presentation: { ja: "ポスター発表", en: "Poster presentation" },
  seminar_presentation: { ja: "ゼミ発表", en: "Seminar presentation" },
  workshop_presentation: { ja: "研究会発表", en: "Workshop presentation" }
};

export function publicationTypeLabel(category: string, locale: Locale): string {
  return publicationTypeLabels[category]?.[locale] ?? category.replaceAll("_", " ");
}

export function presentationTypeLabel(type: string, locale: Locale): string {
  return presentationTypeLabels[type]?.[locale] ?? type.replaceAll("_", " ");
}

export function presentationLabel(item: Presentation, locale: Locale): string {
  const type = presentationTypeLabel(item.type, locale);
  return item.status === "scheduled" ? `${locale === "ja" ? "発表予定" : "Scheduled"} · ${type}` : type;
}

export function publicationNote(item: Publication, locale: Locale): string {
  if (locale !== "en") return "";
  return [item.language === "jpn" || item.language === "ja" ? "In Japanese" : "",
    item.english_title_kind === "descriptive_translation" ? "English title is a descriptive translation" : ""
  ].filter(Boolean).join(". ");
}

export function linksFor(relatedTo: string): Attachment[] {
  return attachments.filter((item) => item.related_to === relatedTo);
}
