export type Locale = "ja" | "en";
export type PageKey = "home" | "research" | "publications" | "activities" | "cv";

export const pageRoutes: Record<Locale, Record<PageKey, string>> = {
  ja: { home: "/", research: "/research/", publications: "/publications/", activities: "/activities/", cv: "/cv/" },
  en: { home: "/en/", research: "/en/research/", publications: "/en/publications/", activities: "/en/activities/", cv: "/en/cv/" }
};

export const messages = {
  ja: {
    siteName: "藤本俊哉｜研究者ウェブサイト",
    skip: "本文へ移動",
    language: "English",
    nav: { home: "ホーム", research: "研究内容", publications: "業績", activities: "発表・活動", cv: "CV" },
    footer: "掲載内容の最終確認",
    external: "外部プロフィール",
    currentProjects: "現在の研究課題",
    interests: "研究キーワード",
    areas: "研究分野",
    publications: "刊行物",
    downloadBib: "BibTeXをダウンロード",
    peerReviewed: "査読あり",
    doi: "DOI",
    repository: "本文・リポジトリ",
    presentations: "発表",
    outreach: "社会貢献",
    materials: "関連資料",
    education: "学歴",
    experience: "経歴",
    degrees: "学位",
    memberships: "所属学会",
    committees: "委員歴",
    other: "その他",
    present: "現在",
    print: "このページを印刷・PDF保存",
    titles: {
      home: "ホーム", research: "研究内容", publications: "業績", activities: "発表・活動", cv: "CV"
    },
    descriptions: {
      home: "藤本俊哉の研究者ウェブサイト。古代ローマ史、ローマ帝政期エジプト、経済史、デジタル・ヒューマニティーズを研究しています。",
      research: "藤本俊哉の研究内容、研究課題、研究分野。",
      publications: "藤本俊哉の論文、書評、学位論文。",
      activities: "藤本俊哉の学会発表と社会貢献活動。",
      cv: "藤本俊哉の略歴、学歴、経歴、学位、所属学会。"
    }
  },
  en: {
    siteName: "Shunya Fujimoto | Researcher Website",
    skip: "Skip to main content",
    language: "日本語",
    nav: { home: "Home", research: "Research", publications: "Publications", activities: "Presentations & Activities", cv: "CV" },
    footer: "Content last reviewed",
    external: "External profiles",
    currentProjects: "Current projects",
    interests: "Research interests",
    areas: "Research areas",
    publications: "Publications",
    downloadBib: "Download BibTeX",
    peerReviewed: "Peer reviewed",
    doi: "DOI",
    repository: "Full text / Repository",
    presentations: "Presentations",
    outreach: "Public engagement",
    materials: "Related materials",
    education: "Education",
    experience: "Experience",
    degrees: "Degrees",
    memberships: "Academic memberships",
    committees: "Committee service",
    other: "Other activities",
    present: "Present",
    print: "Print or save this page as PDF",
    titles: {
      home: "Home", research: "Research", publications: "Publications", activities: "Presentations & Activities", cv: "CV"
    },
    descriptions: {
      home: "Researcher website of Shunya Fujimoto, specializing in Roman Egypt, economic history, and Digital Humanities.",
      research: "Research interests, projects, and fields of Shunya Fujimoto.",
      publications: "Publications, reviews, and thesis by Shunya Fujimoto.",
      activities: "Conference presentations and public engagement by Shunya Fujimoto.",
      cv: "Curriculum vitae of Shunya Fujimoto."
    }
  }
} as const;

export function routeFor(locale: Locale, page: PageKey): string {
  return pageRoutes[locale][page];
}
