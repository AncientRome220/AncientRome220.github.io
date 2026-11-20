---
layout: ../../layouts/ConferenceNotes.astro
title: AI and History Conference 2026 報告要約
reviewed: "2026-11-20"
---

2026年10月15・16日にジョンズ・ホプキンス大学で開かれた大会から、公式の録画一覧に載る全27件を、開閉会の挨拶と記念講演を含めて公式番号順に紹介する。S12「Constructing a Modular Data Pipeline: Cost Tradeoffs at Scale」は大会プログラムに掲載されているが、2026年11月20日時点で公式サイトでは書き起こしが公開されていないため、要約の対象から外した。 [大会プログラムのS12](https://proflouishyman.github.io/ai_conference_2026/#session-12) ／ [大会の録画・書き起こし一覧](https://proflouishyman.github.io/ai_conference_2026/talks/)

本稿は、大会の公式要旨・章立て・公開書き起こしをもとに、Codex（GPT-6.2 Astra）を使用して作成した非公式の日本語要約である。参照した書き起こしは大会側がAIで作成し、発表者による校閲を経ていない。「有効性・正当性の確認」には、発表者が示した比較・実演・史料上の根拠を記した。数値は各報告の対象と条件に限られる。根拠を確認できない欄は空欄とした。時刻のリンクから録画の該当箇所を再生できる。

## S01　開会挨拶――写本が読めるようになったあとに残る問い

Opening Remarks  
Louis Hyman, Chris Celenza

| 観点 | 報告の内容 |
| --- | --- |
| 概要の概要 | Celenzaはラテン語写本の解読例から、Hymanは行政文書の処理から、史料を読めるようにした後に歴史家が何を問うかを論じた。 |
| 先行研究との関係 | ラテン古書体学では、師から弟子へと字形や省略記号の読みを伝えてきた。写本を物として調べる技能は、翻刻結果を得た後にも必要になる。 |
| 手法・技術の要点 | Celenzaはオックスフォード所蔵のベネヴェント体写本の画像を大規模言語モデル（LLM）に渡し、書体の同定と翻刻を順に求めた。 |
| 有効性・正当性の確認 | 一頁の試行で、モデルは書体を同定したが、特徴的な字形を読み違えた。指摘後に訂正し、後日試した別モデルは省略語の展開も再現した。 [録画 3:40](https://www.youtube.com/watch?v=9LXrws_YisA&t=220s) |
| 議論の継続・未解決の課題 | Hymanは、読者が元の文書と処理の各段階をたどれるようにすることを、共同研究の課題として挙げた。 [録画 16:03](https://www.youtube.com/watch?v=9LXrws_YisA&t=963s) |

[公式要旨・章立て・書き起こし](https://proflouishyman.github.io/ai_conference_2026/talks/S01.html)

## S02　アルゴリズムはどの歴史を見えやすくするか

AI and the Misrepresentation of History  
Marnie Hughes-Warrington

| 観点 | 報告の内容 |
| --- | --- |
| 概要の概要 | Hughes-Warringtonは、過去の記録を選び、その人や集団の「履歴」を組み立てるアルゴリズムを「人工の歴史家」と呼ぶ。その選択は、教育・保険・司法へのアクセスにも関わる。 |
| 先行研究との関係 | 著書『Artificial Historians』（2025年）を踏まえ、歴史認識をめぐる人間同士の対立を、個人の意図を特定できないアルゴリズム間の相互作用にまで広げて捉える。経済学のアルゴリズムによる共謀研究も参照した。 |
| 手法・技術の要点 | 複数のAIが第二次世界大戦の動画を大量制作する例と、安全対策が歴史画像の内容や流通を変える例を比較した。 [録画 19:01](https://www.youtube.com/watch?v=4SHukKPFaOE&t=1141s) |
| 有効性・正当性の確認 | 誤情報や共謀に関する研究では、複数のエージェントをどう動かすかによって異なる結果が出ると紹介した。歴史についてどの条件で同じ現象が生じるかは研究段階にある。 |
| 議論の継続・未解決の課題 | 時代・地域ごとの学習資料の偏りと、エージェントの作動順序の影響をどう切り分けるか。英語以外の言語での評価も提案した。 [録画 31:41](https://www.youtube.com/watch?v=4SHukKPFaOE&t=1901s) |

[公式要旨・章立て・書き起こし](https://proflouishyman.github.io/ai_conference_2026/talks/S02.html)

## S03　歴史史料を読む大規模言語モデル

Reading the Machine: What Large Language Models Actually Do to Historical Text  
Mark Humphries

| 観点 | 報告の内容 |
| --- | --- |
| 概要の概要 | Humphriesは、第一次世界大戦の退役軍人年金記録約1,000万頁を扱った経験と、Lianne Leddyとの毛皮交易史研究をもとに、手書き史料の翻刻から人物や場所を追跡する過程を示した。 |
| 先行研究との関係 | 年金記録に散在する同一人物を結び付けた経験を踏まえ、交易日誌に残る先住民とヨーロッパ人が築いた家族を追う。先住民の名前は英語・フランス語の記録者が異なる綴りで書き取っていた。 |
| 手法・技術の要点 | Archive Pearlで、画像からの翻刻、日誌の区切りの認識、メタデータ抽出、地図上への配置を実演した。 |
| 有効性・正当性の確認 | 18～19世紀の英語手稿では、判定の曖昧な大文字・小文字と句読点を除く条件で、単語誤り率は約1.8％だったと報告した。 [録画 29:46](https://www.youtube.com/watch?v=WZS13gSOT2U&t=1786s) |
| 議論の継続・未解決の課題 | 見つかった一例は原頁で確かめられる。「該当例なし」という出力の見落としは検出しにくい。答えが既知の課題を使い、工程ごとに検証する必要がある。 [録画 40:35](https://www.youtube.com/watch?v=WZS13gSOT2U&t=2435s) |

[公式要旨・章立て・書き起こし](https://proflouishyman.github.io/ai_conference_2026/talks/S03.html)

## S04　歴史地名を時代と言語を越えて照合する

The World Historical Gazetteer at Scale  
Ruth Mostern

| 観点 | 報告の内容 |
| --- | --- |
| 概要の概要 | Mosternは、名称や境界が変わった場所を追うための公開地名辞典World Historical Gazetteer（WHG）を紹介した。同じ場所に異なる集団が付けた名前も記録できる。 |
| 先行研究との関係 | John Agnewの場所概念と地名辞典の伝統を手掛かりに、一枚の地図では表しにくい改称・領有の競合を扱う。 |
| 手法・技術の要点 | 提供された地名をWikidataやGeoNamesと照合し、異綴りの検索には発音の類似性も使う。発表時の公開版約220万件と、開発版約4,700万件を区別した。 |
| 有効性・正当性の確認 | 1857年の地名辞典の見出し語をAPIで検索した実験では、アジアの地名で誤った対応が多かった。収録規模だけでは同定能力を評価できない。 [録画 38:14](https://www.youtube.com/watch?v=N1eqESEk5t4&t=2294s) |
| 議論の継続・未解決の課題 | 植民地期の呼称の偏りをどう記述するか。誰が訂正を維持し、どのライセンスで再利用できるかも議論になった。 [録画 44:59](https://www.youtube.com/watch?v=N1eqESEk5t4&t=2699s) |

[公式要旨・章立て・書き起こし](https://proflouishyman.github.io/ai_conference_2026/talks/S04.html)

## S05　歴史家のための研究ソフトウェア入門

Build Your First Software: A Historian's Introduction to Writing Code  
Jeri Wieringa

| 観点 | 報告の内容 |
| --- | --- |
| 概要の概要 | Wieringaは、19世紀の統計報告から表計算用データを作る課題を使い、初めて研究用ソフトウェアを書く手順を実演した。 |
| 先行研究との関係 | 研究ソフトウェア工学で使われてきた作業計画、版管理、再実行可能なスクリプトを、AIとの共同作業に取り入れた。 |
| 手法・技術の要点 | 史料と指示をプロジェクトフォルダに置き、Claudeにまず処理計画を提案させる。採用した手順をPythonに保存し、Gitで変更履歴を管理する。 [録画 31:04](https://www.youtube.com/watch?v=0h-_QTiRDVI&t=1864s) |
| 有効性・正当性の確認 | 同じ作業ファイルを別の開発環境であるVS Codeから開く例を示した。 [録画 56:52](https://www.youtube.com/watch?v=0h-_QTiRDVI&t=3412s) |
| 議論の継続・未解決の課題 | 会話で参照できる情報量には上限がある。次の作業に引き継ぐ指示や判断をどこに保存するかを取り上げた。 |

[公式要旨・章立て](https://proflouishyman.github.io/ai_conference_2026/talks/S05.html)　発表者の希望により書き起こしは非公開。

## S06　初学者にAIを教える授業とTAの育成

Teaching AI to Novices: Experiences from Gateway Computing at JHU  
Mark Spindler

| 観点 | 報告の内容 |
| --- | --- |
| 概要の概要 | Spindlerは、プログラミング入門で初学者を支援する教育補助者（TA）の訓練と、歴史学科が継続的な授業を組むための連携先を紹介した。 |
| 先行研究との関係 | 理工系の授業で教員・学生の行動を記録する既存の観察法COPUSを、指導を振り返るために取り入れた。 |
| 手法・技術の要点 | LLMに初学者役を演じさせ、TAが答えを教えずに助ける対話を練習する。別の用途として、授業中の行動を記録するウェブアプリをAIで作成・改修した。 |
| 有効性・正当性の確認 | 模擬対話と実際のCOPUSの記録例を示した。確認できるのは運用例までで、学習成績への効果は比較していない。 [録画 9:21](https://www.youtube.com/watch?v=dKxNtnloOoM&t=561s) |
| 議論の継続・未解決の課題 | ファイル操作やOSの違いでつまずく受講者に合わせ、演習時間と到達度評価をどう配置するか。学内の教育支援部門との連携を提案した。 [録画 38:59](https://www.youtube.com/watch?v=dKxNtnloOoM&t=2339s) |

[公式要旨・章立て・書き起こし](https://proflouishyman.github.io/ai_conference_2026/talks/S06.html)

## S07　大統領への贈り物を公文書の分類からたどる

Archives in the Age of AI: What Cultural Heritage Institutions Need Historians to Know  
Richard Marciano, Rajesh Gnanasekaran, Linde Brocato

| 観点 | 報告の内容 |
| --- | --- |
| 概要の概要 | Marciano、Brocato、Gnanasekaranは、ルーズヴェルト大統領に寄せられた贈り物と書簡を題材に、当時の職員の整理方法を理解することがデジタル目録の前提になると論じた。 |
| 先行研究との関係 | Marcianoは計算的アーカイブズ学の先例として『モーゲンソー日記』約900巻の目次の画像解析を紹介。Brocatoはホワイトハウスの分類と相互参照票を復元した。 |
| 手法・技術の要点 | Gnanasekaranは文書種別と贈答のやり取りを段階的に抽出し、Neo4jの知識グラフにまとめて問い合わせる6段階の処理を提案した。 [録画 53:01](https://www.youtube.com/watch?v=vErxzhyr4vY&t=3181s) |
| 有効性・正当性の確認 | 贈答関係の約700フォルダのうち、試したのは1フォルダ。全体への適用と館員による検証は今後の作業と説明した。 |
| 議論の継続・未解決の課題 | 回答から根拠文書へ戻る経路をどう残すか。手書きの読み取りや、人手で確認すべき関係の選び方も議論した。 [録画 1:05:21](https://www.youtube.com/watch?v=vErxzhyr4vY&t=3921s) |

[公式要旨・章立て・書き起こし](https://proflouishyman.github.io/ai_conference_2026/talks/S07.html)

## S08　アイルランドの地代をめぐり、誰が数字を証拠にできたか

Who Gets to Argue with the Data? Rent Control and Democratic Knowledge  
Jo Guldi

| 観点 | 報告の内容 |
| --- | --- |
| 概要の概要 | Guldiは1881年以降のアイルランドで、土地評価人が集めた証拠が土地裁判所や議会で使われた過程を追った。数字に異議を唱えられることが地代をめぐる政治を変えたと論じる。 |
| 先行研究との関係 | 近著『The War Over Rent』の研究から、数量化を統治権力と結び付けるフーコー的な見方に、公開データが紛争の修復に使われた事例を加える。 |
| 手法・技術の要点 | 1806～1911年の英国議会議事録Hansardで土地をめぐる議論を数え、報告書との類似検索とトピックモデルで対象を絞り、新聞や監獄記録へ進んだ。 [録画 19:25](https://www.youtube.com/watch?v=2EipOiDEy60&t=1165s) |
| 有効性・正当性の確認 | 議会の語の分布からPatrick Sheridanの名を見いだし、新聞や他の記録で人物の活動をたどった。大規模な探索と個人の史料読解が結び付いた一例である。 |
| 議論の継続・未解決の課題 | 書籍のどこにAIの利用や史料の選択手順を記せば、読者が解釈を吟味できるかが議論になった。 [録画 45:19](https://www.youtube.com/watch?v=2EipOiDEy60&t=2719s) |

[公式要旨・章立て・書き起こし](https://proflouishyman.github.io/ai_conference_2026/talks/S08.html)

## S09　大学院の歴史教育に計算手法をどう組み込むか

What Graduate Training in Computational History Should Look Like  
Christopher Phillips, Jacob Bruggeman, Amanda Regan, Sarah Weicksel

| 観点 | 報告の内容 |
| --- | --- |
| 概要の概要 | BruggemanはAIを個別の作業ごとに評価するよう求め、Reganはクレムソン大学の博士課程を紹介。Phillipsは計算手法と従来の歴史研究の連続性を、Weickselは学位制度の側からの改革を論じた。 |
| 先行研究との関係 | 米国学術団体評議会（ACLS）のDoctoral Futuresが進める博士課程改革と、デジタル・ヒストリーを特論としてきた教育慣行を取り上げた。 |
| 手法・技術の要点 | クレムソンでは学生が自分でコードを書いて説明する。総合試験ではGitHubを使い、史料に手法を適用する力を問う。 [録画 17:48](https://www.youtube.com/watch?v=m1XSFVgxDz0&t=1068s) |
| 有効性・正当性の確認 | 従来の持ち帰り論述試験では手法を使えるか判断しにくかったため、実技を取り入れるまでに試験形式を改めたという実践報告である。 |
| 議論の継続・未解決の課題 | 共同で作ったデータやソフトウェアの貢献を、単著中心の学位審査や採用でどう認めるか。 [録画 49:38](https://www.youtube.com/watch?v=m1XSFVgxDz0&t=2978s) |

[公式要旨・章立て・書き起こし](https://proflouishyman.github.io/ai_conference_2026/talks/S09.html)

## S10　植民地官僚の経歴を人物・地名データにする

Cleaning and Structuring Historical Data: A Working Session  
Jim Clifford

| 観点 | 報告の内容 |
| --- | --- |
| 概要の概要 | CliffordはImperial Careers Atlasを例に、英帝国の官僚名簿の略歴から、一人の人物がどの役職と勤務地を経たかを復元した。 |
| 先行研究との関係 | Colonial Office Listなどの刊行名簿を人物研究に使い、既存の知識ベースWikidataと接続した。 |
| 手法・技術の要点 | OCR（光学文字認識）の出力をPythonで人物別に分け、公開モデルQwenで略歴をJSON形式に変換する。「同上」の展開や重複人物の統合には明示的な規則を使う。 |
| 有効性・正当性の確認 | 発表者によれば地名の86％を既存の識別子に結び付けられた。この値はリンクが付いた割合で、リンク先の正答率は別の指標になる。 [録画 35:16](https://www.youtube.com/watch?v=jZTNWcT6fmo&t=2116s) |
| 議論の継続・未解決の課題 | Victoriaのような同名地をどう区別するか。研究の問いに照らしてどこまで手作業でデータを整えるべきかを議論した。 [録画 46:34](https://www.youtube.com/watch?v=jZTNWcT6fmo&t=2794s) |

[公式要旨・章立て・書き起こし](https://proflouishyman.github.io/ai_conference_2026/talks/S10.html)

## S11　誤りの種類から歴史研究の品質基準を考える

Trust and Error: AI Hallucination, Bias, and Evidentiary Standards in Historical Research  
Edward J. K. Gitre, Samuel Backer

| 観点 | 報告の内容 |
| --- | --- |
| 概要の概要 | Gitreは第二次世界大戦期の米兵調査、Backerは楽譜や劇場の帳簿を用い、どの誤りが結論を変えるかを先に考える必要を示した。 |
| 先行研究との関係 | 市民参加型翻刻プロジェクトThe American Soldier in World War IIと、Lester S. Levy楽譜コレクションのトピック分析を比較の基盤とした。 |
| 手法・技術の要点 | Gitreらは約7,600人からの約25万件の翻刻投稿を、語などの重なりから差を測るJaccard非類似度と目視で照合。BackerはOCR評価で誤った語を混入させるコストに着目した。 |
| 有効性・正当性の確認 | 人種に関する語を自然言語処理ツールが誤って解釈した例と、LLMによる劇場予約帳簿の抽出が失敗した例を示した。全体の翻刻誤差だけでは、こうした分析上の誤りは見えにくい。 [録画 40:04](https://www.youtube.com/watch?v=bmSf8bPI63M&t=2404s) |
| 議論の継続・未解決の課題 | 無作為抽出した史料を人が読み直すとき、どの単位で誤りを数え、どこまで推定を広げられるか。 [録画 46:01](https://www.youtube.com/watch?v=bmSf8bPI63M&t=2761s) |

[公式要旨・章立て・書き起こし](https://proflouishyman.github.io/ai_conference_2026/talks/S11.html)

## S13　歴史家と計算機科学者が共同で解ける問いを作る

Working with Computer Scientists  
Anjalie Field, Daphne Ippolito, Michael Harrower

| 観点 | 報告の内容 |
| --- | --- |
| 概要の概要 | Fieldはボルティモアの警察無線、Harrowerはアラビア半島の青銅器時代の墓を例に、共同研究にするには史料の何が既存手法では読めないかを示す必要があると説いた。 |
| 先行研究との関係 | 無線の事例は社会学者Steve Morganとの研究に、遺跡の事例は考古学的な現地知識と衛星画像解析の協働に基づく。 |
| 手法・技術の要点 | Fieldは音声認識、Harrowerは衛星画像からの遺跡検出を紹介。Ippolitoは、市販モデルでまず試し、専門家が成否を判定できる課題を切り出すよう勧めた。 |
| 有効性・正当性の確認 | 約5年分の警察無線を扱う研究では、一般の音声認識が警察特有の用語を取り違えた。史料分野に固有の評価例が必要になる。 [録画 6:47](https://www.youtube.com/watch?v=MVNLfvDQxW4&t=407s) |
| 議論の継続・未解決の課題 | 歴史家がごく少数の重要文書を探す課題をどう評価するか。また、両分野で意味の違う「サンプル」などの語を共同執筆でどう調整するか。 [録画 46:21](https://www.youtube.com/watch?v=MVNLfvDQxW4&t=2781s) |

[公式要旨・章立て・書き起こし](https://proflouishyman.github.io/ai_conference_2026/talks/S13.html)

## S14　中等・高等教育で歴史的思考を教える

Teaching History with AI  
Nate Sleeter, Kristin Dutcher Mann, Meghan McGlinn Manfra

| 観点 | 報告の内容 |
| --- | --- |
| 概要の概要 | Sleeterは史料について生徒が自分の解釈を作る時間を重視した。Dutcher MannはAIの回答を批評する課題、Manfraは歴史的思考の発達に応じた学習経路を紹介した。 |
| 先行研究との関係 | Dutcher MannはCivics of Technologyの技術と倫理に関する点検課題を応用。Manfraは米国議会図書館の助成による歴史教育研究を土台にした。 |
| 手法・技術の要点 | 学生が同じ問いを英語とスペイン語でAIに尋ね、回答をWikipediaや授業文献と読み比べる。食い違いを説明する作業を学生自身に委ねる。 [録画 11:56](https://www.youtube.com/watch?v=OP9PXNDwnY4&t=716s) |
| 有効性・正当性の確認 |  |
| 議論の継続・未解決の課題 | AI利用の開示、評価対象を知識と技能のどこに置くか、立場の異なる教員が運用できる利用方針をどう作るかが論点になった。 [録画 46:33](https://www.youtube.com/watch?v=OP9PXNDwnY4&t=2793s) |

[公式要旨・章立て・書き起こし](https://proflouishyman.github.io/ai_conference_2026/talks/S14.html)

## S15　中国史の人物・信仰・土地をネットワークとして読む

Network Analysis for Historians  
Song Chen

| 観点 | 報告の内容 |
| --- | --- |
| 概要の概要 | Chenは、宋代の地方官の親族・婚姻と、長江下流域の寺廟信仰という二つの事例から、どの関係を記録するかがネットワーク分析の出発点だと示した。 |
| 先行研究との関係 | 集団の共通属性を調べるプロソポグラフィ（集団伝記研究）を踏まえ、個人を結ぶ関係の構造が時代によってどう変わるかを問う。 |
| 手法・技術の要点 | 1040年代と1210年代の地方官を比較。別の事例では34点の地方志から信仰対象と場所を結ぶ二部ネットワークを構成した。 |
| 有効性・正当性の確認 | 地方志画像の表抽出とGephiによる集団検出をAIに試させたところ、生成コードが集団分割の細かさを決める値を説明なしに1.0に設定していた。 [録画 39:33](https://www.youtube.com/watch?v=ugq9xqk1XIo&t=2373s) |
| 議論の継続・未解決の課題 | 自動で得た集団に歴史的な意味を認めてよいか。集団から外れる事例を含めて史料を精読し、分割の解釈を吟味する必要がある。 [録画 55:10](https://www.youtube.com/watch?v=ugq9xqk1XIo&t=3310s) |

[公式要旨・章立て・書き起こし](https://proflouishyman.github.io/ai_conference_2026/talks/S15.html)

## S16　スコットランドの裁判文書を事件単位で探せるようにする

AI in the Archive: Live Demonstration  
Loren Moulds

| 観点 | 報告の内容 |
| --- | --- |
| 概要の概要 | Mouldsはスコットランド民事上級裁判所の印刷文書約17,500点、約23万頁を、大学の計算資源で7週間かけて処理した。報告された500ドル未満は直接費である。 |
| 先行研究との関係 | 2018年からの目録作成事業を引き継ぎ、整理済みの事件については目録担当者の記述を照合基準に使った。 |
| 手法・技術の要点 | Tesseractで頁上の文字配置を取り、公開モデルで本文を補正する。次に個別文書の境界を見つけ、同一事件にまとめる。機械の候補を人が確認できる仕組みを置いた。 |
| 有効性・正当性の確認 | ダンディーのパン職人の事件で人手の記述を伏せて処理したところ、頁から提出日や当事者を復元できた。典拠の判断が難しい団体名は確認待ちに回った。 [録画 23:51](https://www.youtube.com/watch?v=kvmq8zStRtQ&t=1431s) |
| 議論の継続・未解決の課題 | 人の判断を待つ項目が約1万件残った。人による記述と機械の提案の区別、検索索引の読みやすさ、整理作業の分担が課題となった。 [録画 49:05](https://www.youtube.com/watch?v=kvmq8zStRtQ&t=2945s) |

[公式要旨・章立て・書き起こし](https://proflouishyman.github.io/ai_conference_2026/talks/S16.html)

## S17　計算を用いた歴史研究を支える制度

The Discipline We Need to Build  
Christopher Phillips, Matthew Connelly, Jo Guldi, Sarah Weicksel

| 観点 | 報告の内容 |
| --- | --- |
| 概要の概要 | Weickselが司会を務め、Connelly、Guldi、Phillipsが、データ整備に数年かけた研究者を、採用・研究費・業績評価の仕組みでどう支えるかを議論した。 |
| 先行研究との関係 | 2008年以後の雇用縮小と、デジタル・ヒストリーへの期待に継続的な採用や資金が伴わなかった経験を振り返った。 |
| 手法・技術の要点 | Guldiは気候被害を世界規模で記録する索引を、Connellyは医学研究への公的支援を参照して歴史研究のための全国的機関を提案した。 [録画 46:19](https://www.youtube.com/watch?v=UHxQzDUXyf8&t=2779s) |
| 有効性・正当性の確認 | 参加者へのDiscord投票を紹介し、分野横断の大目標と各地の小規模な講習の両方に意見が出た。会場での反応として読むことができる。 |
| 議論の継続・未解決の課題 | 方法の開発やデータ整備を採用時にどう評価するか。若手がAIの利用をどこまで説明すれば、研究上の貢献を伝えられるか。 [録画 54:11](https://www.youtube.com/watch?v=UHxQzDUXyf8&t=3251s) |

[公式要旨・章立て・書き起こし](https://proflouishyman.github.io/ai_conference_2026/talks/S17.html)

## S18　新聞の検索と地図化を再実行できる道具にする

Searching for Reliability: Using AI to Build Persistent Tools for Research in History  
S. Wright Kennedy

| 観点 | 報告の内容 |
| --- | --- |
| 概要の概要 | Kennedyは、サービス終了後も研究の手順を再現できるように、データ・分析ソフト・処理記録を手元に残す設計を紹介した。 |
| 先行研究との関係 | 終了した研究サービスと長く使われるGeoDaを振り返り、米国の歴史新聞Chronicling AmericaをMelissa Dellらが再OCRしたデータを利用した。 |
| 手法・技術の要点 | ヘイマーケット事件の報道を検索して地図化し、共起語や順位の推移を表示する。検索や書き出しの履歴をプロジェクトに保存した。 [録画 47:24](https://www.youtube.com/watch?v=2P1pKbnvXIc&t=2844s) |
| 有効性・正当性の確認 | トピックモデルで検索結果を調べると、自然現象を示すはずの語が政治家の異名にも使われていた。同じ語で集まった記事を点検する例を示した。 [録画 41:32](https://www.youtube.com/watch?v=2P1pKbnvXIc&t=2492s) |
| 議論の継続・未解決の課題 | 小規模なローカルツールにも保守が要る。元のサービスやモデルを利用できなくなった後に、どの記録を残せば推論を追試できるかを問うた。 |

[公式要旨・章立て・書き起こし](https://proflouishyman.github.io/ai_conference_2026/talks/S18.html)

## S19　画像から文字・人名・概念検索へ

From Ledger to Query: OCR, NER, Search  
Jacob Polay, Keith Pemberton, Bob Pasker

| 観点 | 報告の内容 |
| --- | --- |
| 概要の概要 | Polayは翻刻、Paskerは南北戦争前の裁判記録から黒人証人の証言を探す検索、Pembertonは人名などの固有表現抽出を扱った。最初の読み違いが、後の検索で誰を見つけられるかを左右する。 |
| 先行研究との関係 | 従来型OCRのTesseractと画像・文章を一緒に扱う視覚言語モデルを比較。歴史的な言い回しが現在の検索語と一致しない問題も取り上げた。 |
| 手法・技術の要点 | Polayは複数の読み取り結果を照合し、Paskerは意味から判例を探すRoscoeを作成。Pembertonは不確かな名前を再処理に回し、根拠の頁を保持する手順を示した。 |
| 有効性・正当性の確認 | Paskerの初回評価では、用意した問いで既知の20判例のうち7件を発見できなかった。この7件の原因を調べ、修正後も使える検証例にした。 [録画 29:35](https://www.youtube.com/watch?v=d1FcvfFPhso&t=1775s) |
| 議論の継続・未解決の課題 | Polayの事例では原文の「米」が「ライ麦」に置き換わった。どちらも自然な単語なので、文字誤り率の小ささだけでは商品名や地名の誤読を見抜けない。 [録画 7:30](https://www.youtube.com/watch?v=d1FcvfFPhso&t=450s) |

[公式要旨・章立て・書き起こし](https://proflouishyman.github.io/ai_conference_2026/talks/S19.html)

## S20　市販ゲームと歴史家が自作するゲームの授業

Playable Pasts: Making Classroom Games with AI  
Tore Olsson, Kwok Leong Tang

| 観点 | 報告の内容 |
| --- | --- |
| 概要の概要 | Olssonは市販ゲームの場面を米国史の授業への入口に使う。Tangは歴史家が題材を選び、コード生成を利用して教材そのものを作る実践を示した。 |
| 先行研究との関係 | OlssonはRed Dead Redemption 2を扱った授業を踏まえ、Grand Theft Autoシリーズから1980年以降の米国都市と新自由主義を読む授業を組んだ。 |
| 手法・技術の要点 | Olssonはゲームを短時間の導入に使い、都市の昼と夜を軸にシラバスを構成。Tangは仕様を平易な英語で記し、清代の裁判を舞台にしたゲームを試作した。 |
| 有効性・正当性の確認 | Tangによれば、小説に基づく初版の制作は45分だった。一次史料を使う版も紹介した。この所要時間が示すのは試作の速さである。 [録画 36:07](https://www.youtube.com/watch?v=UlEzhjkHWjM&t=2167s) |
| 議論の継続・未解決の課題 | ゲームが省く郊外や、人種・ジェンダーの描き方を授業でどう扱うか。市販ゲームを参照して教材を作る場合の権利関係も問われた。 [録画 48:44](https://www.youtube.com/watch?v=UlEzhjkHWjM&t=2924s) |

[公式要旨・章立て・書き起こし](https://proflouishyman.github.io/ai_conference_2026/talks/S20.html)

## S21　どの文字に符号を与えるか――Unicodeの政治史

What Machines Can't Read: Unicode and the Politics of Open-Ended Character Sets  
Raja Adal

| 観点 | 報告の内容 |
| --- | --- |
| 概要の概要 | Adalは、検索や文字認識の前提となる文字符号化の歴史をたどり、表記を規格に収める判断に国家と企業がどう関わってきたかを論じた。 |
| 先行研究との関係 | ASCII、東アジア各地の漢字規格、1991年のUnicodeとISO/IEC 10646の統合をたどり、文字を絞る設計から収録範囲を拡大する設計への移行を説明した。 |
| 手法・技術の要点 | 字形と文字の区別、人名に使われる稀少漢字の採否、国内規格と国際規格の関係を、標準化の具体的な事例で比較した。 |
| 有効性・正当性の確認 | 架空のFrederica Wangの名前を入力できないという思考実験と、中国が稀少漢字897字を国内規格に収めた実例を区別して示した。 [録画 24:45](https://www.youtube.com/watch?v=qxwXzd5-ntk&t=1485s) |
| 議論の継続・未解決の課題 | 余白の書き込みや落書きなど、文字として符号を与えにくい痕跡をデジタル史料でどう扱うか。これらを指す「デジタル・ゾミア」という見方を提案した。 [録画 36:59](https://www.youtube.com/watch?v=qxwXzd5-ntk&t=2219s) |

[公式要旨・章立て・書き起こし](https://proflouishyman.github.io/ai_conference_2026/talks/S21.html)

## S22　歴史記録と年輪で気候変動を照合する

Environmental History and AI  
Alexander More

| 観点 | 報告の内容 |
| --- | --- |
| 概要の概要 | Moreは、25人が約10年かけて整備したユーラシアの気候記録約55,000件から、1000～1820年のゆるやかな変化を歴史家がどう記述できるかを論じた。 |
| 先行研究との関係 | 産業化以前の気候をどの期間で代表させるかという問題に、年輪などの自然記録と、日付・場所の分かる歴史記録を突き合わせる方法で取り組んだ。 |
| 手法・技術の要点 | AIを用いた品質点検で欠落していたデータ群を復元し、一つの記述に含まれる複数の現象を分割した。近隣の村の報告が同じ嵐を指す可能性も検討した。 |
| 有効性・正当性の確認 | 史料と年輪記録の時間幅をそろえた比較で、1000～1300年に相関係数が約0.5になったと報告。北大西洋振動との比較ではアルプスの南北で異なる対応が見えた。 [録画 28:02](https://www.youtube.com/watch?v=_wR1dN0Zm0Q&t=1682s) |
| 議論の継続・未解決の課題 | 記録の厚さが地域や時代で異なる。自然記録とのずれをどう説明し、対象地域を広げ、長期の変化を読者に伝えるかを議論した。 [録画 49:40](https://www.youtube.com/watch?v=_wR1dN0Zm0Q&t=2980s) |

[公式要旨・章立て・書き起こし](https://proflouishyman.github.io/ai_conference_2026/talks/S22.html)

## S23　移民の手紙・方言・住所をつなぐ

Migrant Connections: Building Digital Infrastructure for Migration History  
Atiba Pertilla

| 観点 | 報告の内容 |
| --- | --- |
| 概要の概要 | Pertillaは、ドイツ系移民の手紙を市民と翻刻するMigrant Connections、方言音声を再構成するLet the Past Speak、自身のボルティモア移民金融史を紹介した。 |
| 先行研究との関係 | 移民の生活を追うため、既存の手紙コレクションや都市名鑑に加え、国勢調査の個票データIPUMSを地理情報システムQGISで扱ってきた。 |
| 手法・技術の要点 | 手紙の翻刻にはOmeka ClassicとScripto、方言の再構成には音声合成と声質変換を使用。名鑑ではGoogle Document AIとClaudeで1887年の住居番号改定前後の対応を整理した。 |
| 有効性・正当性の確認 | 住所の抽出では、必要な列や括弧・記号の意味を指定すると有用な対応表が得られ、確認範囲では架空の番号は見つからなかったと報告した。 [録画 39:58](https://www.youtube.com/watch?v=QaZc5MmX_k8&t=2398s) |
| 議論の継続・未解決の課題 | 歴史上の方言を誰の声で再現するかという倫理上の問いが残る。翻刻参加者にとっては、難しい手書きを自力で読むこと自体が参加の動機にもなる。 [録画 35:13](https://www.youtube.com/watch?v=QaZc5MmX_k8&t=2113s) |

[公式要旨・章立て・書き起こし](https://proflouishyman.github.io/ai_conference_2026/talks/S23.html)

## S24　史料と計算手順への信頼をどう築くか

Trust: What AI Does and Doesn't Change about Historical Research and Teaching  
Louis Hyman

| 観点 | 報告の内容 |
| --- | --- |
| 概要の概要 | Hymanは、授業では学生に数値の成り立ちを問い返させ、研究ではAIが書いたコードを人が読んで再実行できるようにする、という二つの実践を結び付けた。 |
| 先行研究との関係 | 1850年米国国勢調査でカリフォルニアの書籍数がゼロとされた例を使い、制度が作った数値にも史料批判を適用する授業を紹介した。 |
| 手法・技術の要点 | 作業を小さく分け、Pythonの処理を検査する。鉄道帳票には、人手で修正した訓練例を用い、公開モデルQwenの一部を追加学習するLoRAを用いた。 |
| 有効性・正当性の確認 | ニューオーリンズの公証記録から奴隷商人John McDonoghの取引1,100件余りを見いだしたと報告。帳票の認識については人が訂正した正解例に照らして誤差を測る手順を説明した。 [録画 29:08](https://www.youtube.com/watch?v=NtmusNJMTA0&t=1748s) |
| 議論の継続・未解決の課題 | 誤りをどこまで許容し、精度をどう報告するか。利用できる史料を左右するデジタル化と文書館への資金も議論した。 [録画 54:07](https://www.youtube.com/watch?v=NtmusNJMTA0&t=3247s) |

[公式要旨・章立て・書き起こし](https://proflouishyman.github.io/ai_conference_2026/talks/S24.html)

## S25　MapReaderで歴史地図を分析する

MapReader: Historical Maps as Data  
Katie McDonough

| 観点 | 報告の内容 |
| --- | --- |
| 概要の概要 | McDonoughは、歴史地図に印刷された図像や文字を取り出し、人がどこに住み、その周囲にどんな鉄道空間が広がっていたかを調べる方法を紹介した。 |
| 先行研究との関係 | 英国のLiving with Machinesと、David Rumseyの地図コレクションを使ったMachines Reading Mapsという二つの共同研究に基づく。 |
| 手法・技術の要点 | MapReaderで地図を格子状の小区画に切り、鉄道を表す区画を画像分類する。地図上の文字は位置とともに読み取り、語のまとまりやつながりを調べる。 |
| 有効性・正当性の確認 | 英国陸地測量部の地図から得た区画を1901年国勢調査の街路データと空間的に結び、各街路の周囲の鉄道用地の密度を比較できた。 [録画 24:22](https://www.youtube.com/watch?v=wb670hHQ8Yg&t=1462s) |
| 議論の継続・未解決の課題 | 図像と文字を同時に条件にする検索や、読み取った地図上の文字を図書館システムに位置情報とともに保存する方法が課題である。 [録画 37:33](https://www.youtube.com/watch?v=wb670hHQ8Yg&t=2253s) |

[公式要旨・章立て・書き起こし](https://proflouishyman.github.io/ai_conference_2026/talks/S25.html)

## S26　発掘野帳・文学草稿・近世書簡で手書き認識を試す

Experiments in AI and Handwriting Recognition  
Haley Price, Anya Lewis-Meeks, Ashley Champagne

| 観点 | 報告の内容 |
| --- | --- |
| 概要の概要 | ChampagneはLaurel Bestockのアビュドス発掘野帳、Lewis-Meeksはガイアナの作家Wilson Harrisの推敲過程が残る草稿、Priceは17世紀のMaria Madelena von Habsburgの書簡を取り上げた。 |
| 先行研究との関係 | Dan Cohenによる「手書き認識の問題は解決した」との議論を、筆跡も翻刻規則も異なる三種の史料で検討した。Transkribusなどの手書き認識ツールと汎用モデルを試した。 |
| 手法・技術の要点 | 野帳では遺構・層位などを識別する番号と図形、草稿では重ね書き、書簡では省略・多言語を検討した。原文の綴りを保存する翻刻と、積極的に読みを補う指示も比較した。 |
| 有効性・正当性の確認 | 人手で確認した書簡87頁ではClaude Fableが最良だったと報告。原文に忠実な翻刻を求めると、Opus 5は原文にない補いで順位を落とした。野帳では番号の誤読も残った。 [録画 34:34](https://www.youtube.com/watch?v=MGm5KrzDdas&t=2074s) |
| 議論の継続・未解決の課題 | イタリア語の性の一致は一文字の違いでも意味を左右する。単語誤り率で捉えきれない失敗と、若手が翻刻を通じて技能を身に付ける機会をどう評価するか。 [録画 36:48](https://www.youtube.com/watch?v=MGm5KrzDdas&t=2208s) |

[公式要旨・章立て・書き起こし](https://proflouishyman.github.io/ai_conference_2026/talks/S26.html)

## S27　閉会挨拶――計量史の経験からAIを位置づける

Closing Remarks & Next Steps  
Louis Hyman

| 観点 | 報告の内容 |
| --- | --- |
| 概要の概要 | Hymanは、AIで扱える史料の規模が拡大しても、数値を作った人や分類の根拠を問う歴史家の仕事は続くと総括した。 |
| 先行研究との関係 | 奴隷制を計量分析した『Time on the Cross』が招いた論争と、パンチカードで国勢調査記録を連結したPhiladelphia Social History Projectを対照させた。 [録画 1:41](https://www.youtube.com/watch?v=7YmcKl9Zsn0&t=101s) |
| 手法・技術の要点 | 後者のデータをChatGPTで素朴に集計する例を提示。数値をまず読み、その制度的な偏りを疑い、不完全さを踏まえて何に使えるかを考えるという授業の手順を示した。 [録画 10:24](https://www.youtube.com/watch?v=7YmcKl9Zsn0&t=624s) |
| 有効性・正当性の確認 |  |
| 議論の継続・未解決の課題 | 分析が容易になった後も、史料から結論までの判断を読者がたどれる形で示し、研究への信頼をどう築くかを会議後の課題とした。 |

[公式要旨・章立て・書き起こし](https://proflouishyman.github.io/ai_conference_2026/talks/S27.html)

## S28　シリコンバレーの価値創造と経済的レント

Annual Margaret Levi Lecture in Political Economy: From Value Creation to Value Extraction in Silicon Valley  
Tim O'Reilly

| 観点 | 報告の内容 |
| --- | --- |
| 概要の概要 | O’Reillyは、利用者や取引先に価値を生み出したプラットフォームが、その市場での地位を利用して収益を吸い上げるようになった過程をたどり、AI産業にも同じ問いを向けた。 |
| 先行研究との関係 | 古典派経済学のレント概念と、Milton Friedmanが1970年に示した株主中心の企業観から、資本の評価額と働く人の取り分の開きを考察した。 |
| 手法・技術の要点 | Google検索とAmazonで広告枠が自然な検索結果の見え方を変えた事例を比較。参加のルールを設計する例としてUnixと、AIを外部ツールに接続するMCPを取り上げた。 [録画 11:48](https://www.youtube.com/watch?v=_JiiOzqYik4&t=708s) |
| 有効性・正当性の確認 | 検索結果での広告の位置などを具体例として、注意を配分する権限が収益になる仕組みを説明した。 |
| 議論の継続・未解決の課題 | AIの成功を能力向上に加え、便益がどこまで普及したかで測れるか。大学がデータや計算資源の利用条件にどう関わるかも問われた。 [録画 51:34](https://www.youtube.com/watch?v=_JiiOzqYik4&t=3094s) |

[公式要旨・章立て・書き起こし](https://proflouishyman.github.io/ai_conference_2026/talks/S28.html)
