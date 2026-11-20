"""Compare both reader's guides with the conference's published catalog."""

import argparse
import re
from functools import lru_cache
from pathlib import Path
from urllib.request import urlopen

from bs4 import BeautifulSoup


BASE = "https://proflouishyman.github.io/ai_conference_2026/talks/"
SITE = Path(__file__).resolve().parents[1]
FIELDS = {
    "ja": ["概要の概要", "先行研究との関係", "手法・技術の要点", "有効性・正当性の確認", "議論の継続・未解決の課題"],
    "en": ["Overview", "Prior Work", "Methods", "Evidence and Validation", "Open Questions"],
}


def verify(source_dir):
    @lru_cache(maxsize=None)
    def source(filename):
        if source_dir:
            raw = (source_dir / filename).read_bytes()
        else:
            with urlopen(BASE + filename, timeout=30) as response:
                raw = response.read()
        return BeautifulSoup(raw, "html.parser", from_encoding="utf-8")

    catalog = source("index.html").select("a.tt")
    if not catalog:
        raise ValueError("公式一覧から報告を取得できませんでした。")
    for locale in FIELDS:
        verify_page(catalog, source, locale)


def verify_page(catalog, source, locale):
    site_root = SITE / "dist"
    locale_root = site_root / "en" if locale == "en" else site_root
    built = locale_root / "notes/ai-history-2026/index.html"
    page = BeautifulSoup(built.read_text(encoding="utf-8"), "html.parser")
    if page.html["lang"] != locale:
        raise ValueError(f"{locale}: wrong document language")
    headings = page.select("main h2")
    official_ids = [link["href"].removesuffix(".html") for link in catalog]
    if [h.get_text(strip=True).split()[0] for h in headings] != official_ids:
        raise ValueError("公式番号・順序・掲載数を照合してください。")
    if [a["href"] for a in page.select("#contents nav a")] != ["#" + h["id"] for h in headings]:
        raise ValueError("目次と本文見出しが一致しません。")

    time_links = 0
    for link, heading in zip(catalog, headings):
        filename = link["href"]
        if not re.fullmatch(r"S\d+\.html", filename):
            raise ValueError(f"公式一覧のリンク形式が変わりました: {filename}")
        talk = source(filename)
        title = re.sub(r"^\d+\.\s*", "", link.get_text(strip=True))
        people = link.parent.select_one(".small").get_text(strip=True)
        people = re.sub(r" \((?:[^()]|\([^()]*\))*\)", "", people)
        byline = heading.find_next_sibling("p")
        # Astro typesets apostrophes in Markdown as curly quotation marks.
        if locale == "en":
            actual_title = heading.get_text(" ", strip=True).split(" ", 1)[1]
            if actual_title.replace("’", "'") != title.replace("’", "'"):
                raise ValueError(f"{filename}: English heading does not match original title")
        expected_byline = people if locale == "en" else title + " " + people
        if byline.get_text(" ", strip=True).replace("’", "'") != expected_byline.replace("’", "'"):
            raise ValueError(f"{filename}: 原題または報告者を照合してください。")
        table = byline.find_next_sibling("table")
        labels = [tr.td.get_text(strip=True) for tr in table.select("tbody tr")]
        if labels != FIELDS[locale]:
            raise ValueError(f"{filename}: 五つの観点を確認してください。")
        credit = table.find_next_sibling("p")
        if credit.a["href"] != BASE + filename:
            raise ValueError(f"{filename}: 出典リンクを確認してください。")
        unpublished = "transcript is unpublished" if locale == "en" else "書き起こしは非公開"
        if bool(talk.select("#transcript p.tp")) == (unpublished in credit.get_text()):
            raise ValueError(f"{filename}: 書き起こしの公開状態を確認してください。")
        chapters = {a["href"]: a.select_one(".ts").get_text(strip=True) for a in talk.select(".chapters a")}
        links = table.select("a")
        if not links:
            raise ValueError(f"{filename}: 時刻付きの根拠を追加してください。")
        for a in links:
            stamp = chapters.get(a["href"])
            expected = stamp if locale == "en" else f"録画 {stamp}"
            if stamp is None or a.get_text(strip=True) != expected:
                raise ValueError(f"{filename}: 録画時刻を照合してください。")
        time_links += len(links)
    print(f"{locale}: 公式一覧と照合済み: {len(headings)}件、各5観点、録画リンク{time_links}件")


if __name__ == "__main__":
    parser = argparse.ArgumentParser(description=__doc__)
    parser.add_argument("--source-dir", type=Path, help="index.htmlと発表別HTMLを置いたフォルダ")
    verify(parser.parse_args().source_dir)
