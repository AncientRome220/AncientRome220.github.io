---
layout: ../../../layouts/ConferenceNotes.astro
title: A Reader’s Guide to the AI and History Conference 2026
reviewed: "2026-11-20"
---

*An independent guide prepared with Codex (GPT-6.2 Astra).*

At Johns Hopkins University on October 15–16, 2026, historians asked what evidence would justify trusting a machine-assisted reading of the past. These notes follow the 27 sessions in the conference’s recording catalog. Session 12, *Constructing a Modular Data Pipeline: Cost Tradeoffs at Scale*, appears in the program. As of November 20, the conference has published no transcript for it, so it has no entry here. [Conference recording catalog](https://proflouishyman.github.io/ai_conference_2026/talks/index.html) · [Session 12 in the program](https://proflouishyman.github.io/ai_conference_2026/#session-12)

The entries draw directly on the conference’s English abstracts, chapter guides, and available transcripts. The organizers used AI to transcribe and clean the recordings. Speakers did not edit those transcripts. Figures below describe what the speakers reported for their own material. An empty field means the sources provide no distinct example for that category. Follow the timestamps to hear a claim in context.

## S01 Opening Remarks

Louis Hyman, Chris Celenza

| Perspective | Session notes |
| --- | --- |
| Overview | Chris Celenza opened with a test drawn from his own teaching. If a model can read a manuscript that students spend a semester learning to decipher, what should the seminar teach them to see? Louis Hyman connected that question to the work of making large archives usable. |
| Prior Work | Celenza described how Latin paleographers learn to recognize local hands and conventional abbreviations through practice with an experienced reader. |
| Methods | He gave a model an image from an Oxford manuscript, asked it to identify the script, and then requested a transcription. Hyman described using optical character recognition (OCR) and Python to turn administrative records into data whose origins a reader could trace. |
| Evidence and Validation | The model recognized Beneventan script but stumbled over its distinctive broken *c*. In a later trial, another model even marked expanded abbreviations in the conventional manner. Celenza reported this as an encounter with one manuscript. [3:40](https://www.youtube.com/watch?v=9LXrws_YisA&t=220s) |
| Open Questions | A bird-shaped initial is evidence about the people and materials that produced a book. How should paleographers teach students to ask those questions once decipherment becomes easier? [7:06](https://www.youtube.com/watch?v=9LXrws_YisA&t=426s) |

[Official recording, chapters, and transcript](https://proflouishyman.github.io/ai_conference_2026/talks/S01.html)

## S02 AI and the Misrepresentation of History

Marnie Hughes-Warrington

| Perspective | Session notes |
| --- | --- |
| Overview | Marnie Hughes-Warrington asked who receives historical attention when software can commission, produce, and distribute accounts of the past. An individual author’s motives explain only part of what an audience eventually sees. |
| Prior Work | Her book *Artificial Historians* extends the study of history wars to systems that assemble past records and shape decisions about people. Research on automated price setting supplied a comparison for interactions among such systems. |
| Methods | She examined the mass production of Second World War videos, then considered how moderation and image-generation safeguards influence which depictions of history reach the public. |
| Evidence and Validation | Two bodies of research pointed in different directions. In pricing experiments, varying the number and timing of agents could disrupt coordination. In a study of misinformation, adding interacting agents could increase its spread. She presented the comparison as a reason to test the dynamics for historical material. [24:56](https://www.youtube.com/watch?v=4SHukKPFaOE&t=1496s) |
| Open Questions | How could researchers distinguish a gap in the training material from a bias introduced when several agents act in sequence? Would tests in different languages reveal the same pattern? [31:41](https://www.youtube.com/watch?v=4SHukKPFaOE&t=1901s) |

[Official recording, chapters, and transcript](https://proflouishyman.github.io/ai_conference_2026/talks/S02.html)

## S03 Reading the Machine: What Large Language Models Actually Do to Historical Text

Mark Humphries

| Perspective | Session notes |
| --- | --- |
| Overview | Mark Humphries follows families across fur-trade records in which English- and French-speaking clerks spelled Indigenous names differently. A researcher needs to find a person again even when the spelling, the document, and the recorder all change. |
| Prior Work | Linking Canadian veterans’ pension files had already taught Humphries how much staff time goes into indexing digitized pages. His work with Lianne Leddy brings that experience to the histories of fur-trade families. [23:15](https://www.youtube.com/watch?v=WZS13gSOT2U&t=1395s) |
| Methods | In Archive Pearl he demonstrated how a manuscript image becomes a transcription, how a journal is divided into entries, and how extracted place information can be inspected on a map. |
| Evidence and Validation | For eighteenth- and nineteenth-century English handwriting, he reported about 1.8% word error after excluding ambiguous capitalization and punctuation. That figure describes transcription under a particular scoring rule. [29:46](https://www.youtube.com/watch?v=WZS13gSOT2U&t=1786s) |
| Open Questions | A researcher can open the page behind a positive match. A claim that an entire file contains nothing relevant is harder to check. Humphries urged researchers to test searches on material whose contents they already know. [40:35](https://www.youtube.com/watch?v=WZS13gSOT2U&t=2435s) |

[Official recording, chapters, and transcript](https://proflouishyman.github.io/ai_conference_2026/talks/S03.html)

## S04 The World Historical Gazetteer at Scale

Ruth Mostern

| Perspective | Session notes |
| --- | --- |
| Overview | Ruth Mostern’s World Historical Gazetteer lets researchers follow a place through changes of name, language, and political authority. Several communities may have good historical reasons for assigning different names to the same location. |
| Prior Work | Drawing on John Agnew’s account of place, Mostern treated an act of naming or renaming as something a gazetteer should preserve. Wikidata and GeoNames provide points of reference for linking records from different collections. |
| Methods | The team reconciles contributed records and uses sound-based matching to retrieve variant names. Mostern showed how to submit the headwords from a printed gazetteer through the project’s public interface. |
| Evidence and Validation | Testing an 1857 gazetteer against the index gave an instructive failure in Asia. A result near modern Seoul referred to a place the source located in Chinese Tartary. Plotting a point had made an uncertain phonetic match look precise. [38:14](https://www.youtube.com/watch?v=N1eqESEk5t4&t=2294s) |
| Open Questions | Whose naming practices become easiest to retrieve when colonial gazetteers supply the headwords? Participants also asked how licensing affects the reuse of contributed datasets. [44:59](https://www.youtube.com/watch?v=N1eqESEk5t4&t=2699s) |

[Official recording, chapters, and transcript](https://proflouishyman.github.io/ai_conference_2026/talks/S04.html)

## S05 Build Your First Software: A Historian's Introduction to Writing Code

Jeri Wieringa

| Perspective | Session notes |
| --- | --- |
| Overview | Jeri Wieringa followed a piece of research software from an initial question about nineteenth-century statistical reports to files a historian could reopen and run. |
| Prior Work | The session applies research software engineering practices to a first coding project. Written plans, project folders, and version control give a researcher a record of decisions made during the work. |
| Methods | The demonstration moves from organizing the source material to asking Claude for a plan, saving the procedure as Python scripts, and tracking changes with Git. [31:04](https://www.youtube.com/watch?v=0h-_QTiRDVI&t=1864s) [40:40](https://www.youtube.com/watch?v=0h-_QTiRDVI&t=2440s) |
| Evidence and Validation | Wieringa showed how the same project files could be opened in VS Code. This demonstrates portability of the work. The public abstract and chapter list give no accuracy result for the extracted statistics. [56:52](https://www.youtube.com/watch?v=0h-_QTiRDVI&t=3412s) |
| Open Questions | How much context can a coding assistant retain as a project grows? The session addresses the limits of conversational memory and ends with questions about connecting Zotero to other tools. [51:44](https://www.youtube.com/watch?v=0h-_QTiRDVI&t=3104s) |

[Official recording and chapters](https://proflouishyman.github.io/ai_conference_2026/talks/S05.html) · The transcript is unpublished at the speaker’s request. This entry uses the official abstract and chapter list.

## S06 Teaching AI to Novices: Experiences from Gateway Computing at JHU

Mark Spindler

| Perspective | Session notes |
| --- | --- |
| Overview | Mark Spindler put the teaching assistant in the learner’s seat. Before helping a novice debug code, a TA can rehearse how to ask a useful question when a student gives an incomplete account of the problem. |
| Prior Work | Johns Hopkins’ Gateway Computing program draws on TA training and on COPUS, an observation protocol that records what teachers and students do during a class. |
| Methods | A language model plays a student and comments on the TA’s approach. A separate web app helps observers record classroom activity in real time. Spindler showed a sample tutoring exchange and an observation record. [5:55](https://www.youtube.com/watch?v=dKxNtnloOoM&t=355s) [9:21](https://www.youtube.com/watch?v=dKxNtnloOoM&t=561s) |
| Evidence and Validation | Spindler described a participant who could not install software on a preferred computer used for sensitive research. Even a successful rehearsal on the instructor’s machine can miss a barrier that keeps a learner from beginning the exercise. [18:12](https://www.youtube.com/watch?v=dKxNtnloOoM&t=1092s) |
| Open Questions | How should a department sequence practice and assessment after the first workshop? Spindler suggested working with staff who already teach novices and understand where they get stuck. [38:59](https://www.youtube.com/watch?v=dKxNtnloOoM&t=2339s) |

[Official recording, chapters, and transcript](https://proflouishyman.github.io/ai_conference_2026/talks/S06.html)

## S07 Archives in the Age of AI: What Cultural Heritage Institutions Need Historians to Know

Richard Marciano, Rajesh Gnanasekaran, Linde Brocato

| Perspective | Session notes |
| --- | --- |
| Overview | A gift sent to Franklin D. Roosevelt could generate a letter, an acknowledgment, a filing note, and a cross-reference. Richard Marciano, Linde Brocato, and Rajesh Gnanasekaran asked how an archive might recover the transaction linking those pieces. |
| Prior Work | Marciano described computational work on the contents pages of the Morgenthau Diaries. Brocato reconstructed the White House filing system that gives the gift papers their present arrangement. [28:21](https://www.youtube.com/watch?v=vErxzhyr4vY&t=1701s) |
| Methods | Gnanasekaran used Brocato’s document categories to distinguish letters from copies and staff notes. His proposed six-stage procedure turns the resulting transactions into a Neo4j graph that can be queried using Cypher. |
| Evidence and Validation | The team tried the procedure on one folder from a collection of roughly 700. Brocato’s annotations supplied an initial vocabulary of document types. Testing across the collection and validation with library staff were still ahead. [53:01](https://www.youtube.com/watch?v=vErxzhyr4vY&t=3181s) [1:00:02](https://www.youtube.com/watch?v=vErxzhyr4vY&t=3602s) |
| Open Questions | Can an answer drawn from the graph point the reader back to the document that supports each relationship? Handwriting and the need for archival judgment complicate that chain of evidence. [1:05:21](https://www.youtube.com/watch?v=vErxzhyr4vY&t=3921s) |

[Official recording, chapters, and transcript](https://proflouishyman.github.io/ai_conference_2026/talks/S07.html)

## S08 Who Gets to Argue with the Data? Rent Control and Democratic Knowledge

Jo Guldi

| Perspective | Session notes |
| --- | --- |
| Overview | Jo Guldi traced an argument about Irish rents from valuations submitted to the Land Court to debates in Parliament. People who could produce and challenge a valuation gained a new way to intervene in a political dispute. |
| Prior Work | In *The War Over Rent*, Guldi revisits a familiar critique of bureaucratic measurement. She asks under what historical conditions the public availability of numbers helped people contest the terms of a tenancy. |
| Methods | She counted debates in Hansard, searched for debates resembling known reports, selected relevant material by hand, and modeled topics within the smaller collection. She also ran a topic model across Hansard as a whole. [19:25](https://www.youtube.com/watch?v=2EipOiDEy60&t=1165s) |
| Evidence and Validation | One result surfaced Patrick Sheridan, whom Guldi had barely encountered in the secondary literature. His name gave her a way into newspaper accounts of his activities. The initial computational result was a lead she could investigate in other sources. [22:55](https://www.youtube.com/watch?v=2EipOiDEy60&t=1375s) |
| Open Questions | How much of this route through the evidence belongs in a published book? The discussion considered how to explain the role of AI and the researcher’s successive choices. [45:19](https://www.youtube.com/watch?v=2EipOiDEy60&t=2719s) |

[Official recording, chapters, and transcript](https://proflouishyman.github.io/ai_conference_2026/talks/S08.html)

## S09 What Graduate Training in Computational History Should Look Like

Christopher Phillips, Jacob Bruggeman, Amanda Regan, Sarah Weicksel

| Perspective | Session notes |
| --- | --- |
| Overview | What should a doctoral examiner ask a historian who submits code as part of an argument? Amanda Regan offered a concrete answer from Clemson. Jacob Bruggeman, Christopher Phillips, and Sarah Weicksel placed it in a wider discussion of training and recognition. |
| Prior Work | Phillips related computational work to ordinary historical practice. Weicksel described the American Council of Learned Societies’ Doctoral Futures project and its effort to widen what can count as scholarship. |
| Methods | Bruggeman proposed judging an AI tool against a particular task. Regan described a GitHub-based examination in which candidates analyze supplied primary sources and write essays that situate their results in the field. [17:48](https://www.youtube.com/watch?v=m1XSFVgxDz0&t=1068s) |
| Evidence and Validation | Clemson had tried take-home historiography essays and then a technical test. Regan explained why both left something out and reported experience administering the combined assessment. This was a curriculum revision within one program. [17:48](https://www.youtube.com/watch?v=m1XSFVgxDz0&t=1068s) |
| Open Questions | How can a candidate demonstrate an individual contribution to collaborative work when departments and hiring committees expect sole authorship? [49:38](https://www.youtube.com/watch?v=m1XSFVgxDz0&t=2978s) |

[Official recording, chapters, and transcript](https://proflouishyman.github.io/ai_conference_2026/talks/S09.html)

## S10 Cleaning and Structuring Historical Data: A Working Session

Jim Clifford

| Perspective | Session notes |
| --- | --- |
| Overview | Jim Clifford reconstructed postings from the published biographies of British colonial officials for the Imperial Careers Atlas. A career can look geographically coherent on a map even when one appointment has been assigned to the wrong continent. |
| Prior Work | The Colonial Office List and Indian Office List record careers in compressed prose. Wikidata supplies identifiers against which the extracted people and places can be checked. |
| Methods | Clifford split the OCR text into biographies with Python, used Qwen to extract structured records, then wrote rules for repeated entries and people split into multiple records by reading errors. [28:50](https://www.youtube.com/watch?v=jZTNWcT6fmo&t=1730s) |
| Evidence and Validation | He reported matching 86% of places to Wikidata. That measures coverage. Three officials placed in Prince Albert, Saskatchewan, had worked elsewhere in southern Africa, prompting him to investigate the South African town of the same name and correct the match. [35:16](https://www.youtube.com/watch?v=jZTNWcT6fmo&t=2116s) |
| Open Questions | How much cleaning does a particular historical claim require? Place ambiguity and the low visibility of obscure officials in reference databases complicate any single stopping rule. [46:34](https://www.youtube.com/watch?v=jZTNWcT6fmo&t=2794s) |

[Official recording, chapters, and transcript](https://proflouishyman.github.io/ai_conference_2026/talks/S10.html)

## S11 Trust and Error: AI Hallucination, Bias, and Evidentiary Standards in Historical Research

Edward J. K. Gitre, Samuel Backer

| Perspective | Session notes |
| --- | --- |
| Overview | Edward Gitre and Samuel Backer examined errors at different stages of historical work. Volunteers can disagree while reading a page, software can misclassify a term everyone read correctly, and a small error in an account book can change a historical inference. |
| Prior Work | Gitre drew on the American Soldier in World War II survey project. Backer worked with the Lester S. Levy sheet music collection and drew on OCR research with Louis Hyman. |
| Methods | Gitre compared independent volunteer transcriptions using a Jaccard dissimilarity score, followed by manual review. Backer assessed which errors mattered for a given task, from topic modeling to extracting bookings from a ledger. |
| Evidence and Validation | After roughly 250,000 volunteer submissions, Gitre still called on about 30 experienced transcribers for review. Backer described an unsuccessful attempt to extract ledger entries from theater booking records. The two cases expose different weaknesses in a seemingly usable dataset. [8:15](https://www.youtube.com/watch?v=bmSf8bPI63M&t=495s) [40:04](https://www.youtube.com/watch?v=bmSf8bPI63M&t=2404s) |
| Open Questions | How should a historian sample pages for checking and report the resulting uncertainty? The panel also asked how sensitive vocabulary affects automated interpretation. [46:01](https://www.youtube.com/watch?v=bmSf8bPI63M&t=2761s) |

[Official recording, chapters, and transcript](https://proflouishyman.github.io/ai_conference_2026/talks/S11.html)

## S13 Working with Computer Scientists

Anjalie Field, Daphne Ippolito, Michael Harrower

| Perspective | Session notes |
| --- | --- |
| Overview | A data collection can interest two disciplines for different reasons. Anjalie Field wanted to know which police-radio transcription errors would compromise a study of policing. Michael Harrower needed archaeological expertise to interpret patterns visible in satellite imagery. |
| Prior Work | Field’s project grew out of Steve Morgan’s collection of Baltimore police transmissions. Harrower drew on work locating Bronze Age tombs on the Arabian Peninsula. [6:47](https://www.youtube.com/watch?v=MVNLfvDQxW4&t=407s) [17:35](https://www.youtube.com/watch?v=MVNLfvDQxW4&t=1055s) |
| Methods | Daphne Ippolito recommended trying an existing model first, then identifying a remaining problem with an answer that collaborators could check. Harrower described what it takes to supply meaningful archaeological benchmarks. |
| Evidence and Validation | Field’s team found off-the-shelf speech recognition struggled with the radio channel and police vocabulary. They examined both word-level errors and how uneven transcription quality could affect the downstream analysis. [6:47](https://www.youtube.com/watch?v=MVNLfvDQxW4&t=407s) |
| Open Questions | A diplomatic historian in the audience needed a handful of crucial documents from a large collection. What would count as a convincing test of a system meant to find such rare material? [54:57](https://www.youtube.com/watch?v=MVNLfvDQxW4&t=3297s) |

[Official recording, chapters, and transcript](https://proflouishyman.github.io/ai_conference_2026/talks/S13.html)

## S14 Teaching History with AI

Nate Sleeter, Kristin Dutcher Mann, Meghan McGlinn Manfra

| Perspective | Session notes |
| --- | --- |
| Overview | Nate Sleeter, Kristin Dutcher Mann, and Meghan McGlinn Manfra approached classroom AI through a shared teaching problem. How can an instructor see the student’s historical reasoning when the student can produce a fluent answer almost instantly? |
| Prior Work | Dutcher Mann adapted a technology-ethics exercise from Civics of Technology. Manfra drew on research into historical thinking and a Library of Congress–funded project on how those skills develop. |
| Methods | Sleeter emphasized giving students time to interpret evidence. Dutcher Mann had students annotate model answers against a rubric and compare English and Spanish responses with Wikipedia and course readings. [11:56](https://www.youtube.com/watch?v=OP9PXNDwnY4&t=716s) |
| Evidence and Validation | Manfra described classroom testing of proficiency indicators. For a skill such as using evidence, the team specified what different levels of performance look like. Using a pre-assessment to choose a personalized learning path was a further proposal. [21:57](https://www.youtube.com/watch?v=OP9PXNDwnY4&t=1317s) |
| Open Questions | How should AI policies work across instructors with different contractual authority, and how should assessments weigh knowledge of the past against the skills used to investigate it? [46:33](https://www.youtube.com/watch?v=OP9PXNDwnY4&t=2793s) |

[Official recording, chapters, and transcript](https://proflouishyman.github.io/ai_conference_2026/talks/S14.html)

## S15 Network Analysis for Historians

Song Chen

| Perspective | Session notes |
| --- | --- |
| Overview | Song Chen showed why a map of officials’ birthplaces can miss a change in political society. The question he asked of two cohorts of Song prefects was who could reach whom through marriage or kinship. |
| Prior Work | Chen placed this question within prosopography, the collective study of historical lives. A second example used local gazetteers to connect temple cults with places in the Lower Yangtze Delta. |
| Methods | He compared kinship ties among prefects in office in the 1040s and 1210s. For the cult example he used two kinds of nodes, cults and places. He also tested AI assistance with extracting tables and running community detection in Gephi. [16:15](https://www.youtube.com/watch?v=ugq9xqk1XIo&t=975s) |
| Evidence and Validation | Chen showed an extensive web of kinship among the earlier prefects that had fragmented in the later cohort. In the software demonstration, the assistant silently chose a resolution of 1.0, a setting that changes the groups a community-detection algorithm finds. [1:44](https://www.youtube.com/watch?v=ugq9xqk1XIo&t=104s) [39:33](https://www.youtube.com/watch?v=ugq9xqk1XIo&t=2373s) |
| Open Questions | What warrants treating a cluster as a historical group? Chen discussed returning to particular cases, including people whose position fits the pattern poorly. [55:10](https://www.youtube.com/watch?v=ugq9xqk1XIo&t=3310s) |

[Official recording, chapters, and transcript](https://proflouishyman.github.io/ai_conference_2026/talks/S15.html)

## S16 AI in the Archive: Live Demonstration

Loren Moulds

| Perspective | Session notes |
| --- | --- |
| Overview | Loren Moulds asked whether individually cataloged items could be reunited into Scottish Court of Session cases. A researcher looking for Dundee bakers in a dispute about milling rights needs evidence spread across several printed documents. |
| Prior Work | Earlier hand cataloging had produced descriptions the team could hold back for comparison. It also established how documents had been bound and why a single volume could conceal several distinct cases. |
| Methods | Tesseract supplied page layout, an open model corrected the text, and later steps identified document boundaries and grouped items by case. Moulds described processing about 17,500 documents in seven weeks for under $500 in direct costs, with university computing available. [16:06](https://www.youtube.com/watch?v=kvmq8zStRtQ&t=966s) |
| Evidence and Validation | For the Dundee case he withheld the catalogers’ work and ran the procedure from the pages. It recovered details including the filing date and printer’s imprint. Uncertain corporate identities went into a queue for curatorial review. [23:51](https://www.youtube.com/watch?v=kvmq8zStRtQ&t=1431s) |
| Open Questions | Which decisions should a cataloger take first when thousands await review? The discussion addressed attribution and what a user can actually inspect behind a search result. [49:05](https://www.youtube.com/watch?v=kvmq8zStRtQ&t=2945s) |

[Official recording, chapters, and transcript](https://proflouishyman.github.io/ai_conference_2026/talks/S16.html)

## S17 The Discipline We Need to Build

Christopher Phillips, Matthew Connelly, Jo Guldi, Sarah Weicksel

| Perspective | Session notes |
| --- | --- |
| Overview | Sarah Weicksel moderated a discussion about what a discipline rewards. Matthew Connelly raised the professional risk of spending years preparing data, Jo Guldi examined hiring and funding, and Christopher Phillips stressed the time historical arguments take to mature. |
| Prior Work | The panel returned to the promises of the digital turn and the contraction of the academic labor market after 2008. These experiences informed the speakers’ different expectations for institutional reform. |
| Methods | Guldi proposed a shared index of climate harms. Connelly proposed a national institute for history and used federal support for medical research as a comparison. Both were proposals for organizing future work. [36:47](https://www.youtube.com/watch?v=UHxQzDUXyf8&t=2207s) [46:19](https://www.youtube.com/watch?v=UHxQzDUXyf8&t=2779s) |
| Evidence and Validation | Loren Moulds relayed responses gathered through the conference Discord. Participants questioned whether one topic could unite the field and pointed to summer workshops as a feasible way to build shared archival skills. These were responses from attendees. [50:42](https://www.youtube.com/watch?v=UHxQzDUXyf8&t=3042s) |
| Open Questions | What evidence of methodological work will a hiring committee recognize, and how can junior scholars present AI-assisted research when departments disagree about its value? [54:11](https://www.youtube.com/watch?v=UHxQzDUXyf8&t=3251s) |

[Official recording, chapters, and transcript](https://proflouishyman.github.io/ai_conference_2026/talks/S17.html)

## S18 Searching for Reliability: Using AI to Build Persistent Tools for Research in History

S. Wright Kennedy

| Perspective | Session notes |
| --- | --- |
| Overview | S. Wright Kennedy considered what a future reader would need to reproduce a newspaper search after a commercial platform closes. His answer began with keeping a local copy of the data, the tool, and the choices made during the search. |
| Prior Work | The disappearance of services such as Constellate provided a cautionary case. Kennedy built his newspaper tool using the text of Chronicling America newspapers reprocessed by Melissa Dell’s team. |
| Methods | In a search for coverage of the Haymarket affair, he varied the words examined around a search term, grouped related terms, and mapped results. A saved project preserves the log and exports. [35:00](https://www.youtube.com/watch?v=2P1pKbnvXIc&t=2100s) [47:24](https://www.youtube.com/watch?v=2P1pKbnvXIc&t=2844s) |
| Evidence and Validation | Exploring articles with a topic model exposed a false lead. Language that looked like a reference to a natural phenomenon also appeared in a Texas politician’s nickname. Reading the retrieved articles changed how that group of hits could be used. [41:32](https://www.youtube.com/watch?v=2P1pKbnvXIc&t=2492s) |
| Open Questions | Who will maintain a locally built tool as software environments change? Kennedy discussed longevity in the context of tools that a researcher can inspect and repair. [59:38](https://www.youtube.com/watch?v=2P1pKbnvXIc&t=3578s) |

[Official recording, chapters, and transcript](https://proflouishyman.github.io/ai_conference_2026/talks/S18.html)

## S19 From Ledger to Query: OCR, NER, Search

Jacob Polay, Keith Pemberton, Bob Pasker

| Perspective | Session notes |
| --- | --- |
| Overview | Jacob Polay read the page image, Bob Pasker searched for concepts across court opinions, and Keith Pemberton considered how to identify named entities in imperfect transcriptions. Each stage can hide a different kind of absence from the historian. |
| Prior Work | Polay compared vision-language models with the older Tesseract OCR engine. Pasker started from a difficulty in searching for testimony. The terms a researcher uses for Black testimony may never appear in an antebellum judicial opinion. |
| Methods | Polay compared readings of the same pages. Pasker built Roscoe to return cases and their source references for conceptual queries. Pemberton proposed routing uncertain names for further processing with a trail back to the page. [47:32](https://www.youtube.com/watch?v=d1FcvfFPhso&t=2852s) |
| Evidence and Validation | Pasker separated authentic results from successful discovery. In his initial test, the queries missed seven of twenty known cases. He investigated all seven and kept them as tests for later changes. [29:35](https://www.youtube.com/watch?v=d1FcvfFPhso&t=1775s) |
| Open Questions | Polay showed a model reading a reference to rice as rye. Both are plausible commodities, yet substituting one changes what a researcher can count. Which words deserve extra checking depends on the historical question. [7:30](https://www.youtube.com/watch?v=d1FcvfFPhso&t=450s) |

[Official recording, chapters, and transcript](https://proflouishyman.github.io/ai_conference_2026/talks/S19.html)

## S20 Playable Pasts: Making Classroom Games with AI

Tore Olsson, Kwok Leong Tang

| Perspective | Session notes |
| --- | --- |
| Overview | Tore Olsson and Kwok Leong Tang gave games different jobs in a history course. Olsson used a familiar commercial setting to open an inquiry into an American city. Tang asked students to work through a historical case in a game he had designed. |
| Prior Work | Olsson’s courses build on *Red Dead Redemption 2* and the *Grand Theft Auto* series. Tang drew on the courtroom mechanics of *Ace Attorney* for a game set in Qing China. |
| Methods | Olsson organized his syllabus around the city by day and by night, including police stations as a route into the history of militarized policing. Tang described a game in plain English and used a coding agent to implement it. [17:20](https://www.youtube.com/watch?v=UlEzhjkHWjM&t=1040s) |
| Evidence and Validation | Tang reported spending 45 minutes on a first, Chinese-language prototype drawn from one novel. He also showed a version built around reading primary documents. The reported time applies to building that first prototype. [36:07](https://www.youtube.com/watch?v=UlEzhjkHWjM&t=2167s) |
| Open Questions | Students encounter the places and people a game makes available to them. The discussion considered absent suburbs and how to teach through depictions of race and gender. [48:44](https://www.youtube.com/watch?v=UlEzhjkHWjM&t=2924s) [51:41](https://www.youtube.com/watch?v=UlEzhjkHWjM&t=3101s) |

[Official recording, chapters, and transcript](https://proflouishyman.github.io/ai_conference_2026/talks/S20.html)

## S21 What Machines Can't Read: Unicode and the Politics of Open-Ended Character Sets

Raja Adal

| Perspective | Session notes |
| --- | --- |
| Overview | Raja Adal asked what happens to a historical name before a scholar ever types it into a search box. Someone has to decide that the character has an identity a computer can encode. |
| Prior Work | Adal followed national encoding standards into the 1991 convergence of Unicode and ISO/IEC 10646. Decisions about whether two forms count as the same character helped set the terms of that convergence. [15:44](https://www.youtube.com/watch?v=qxwXzd5-ntk&t=944s) |
| Methods | He set a hypothetical naming problem alongside a documented standards dispute. The fictional Frederica Wang illustrated how a rare character in a person’s name could fall outside the available repertoire. [24:45](https://www.youtube.com/watch?v=qxwXzd5-ntk&t=1485s) |
| Evidence and Validation | In Adal’s account, China’s decision to encode 897 rare sinographs domestically accelerated international review. After vetting and revision, the set he described contained 622 characters. The difference between the two counts records a negotiation over the repertoire. [28:44](https://www.youtube.com/watch?v=qxwXzd5-ntk&t=1724s) |
| Open Questions | Marginal marks and graffiti can matter to historians even when no standard assigns them characters. Adal asked how much of this material remains practically invisible to indexing and machine reading. [36:59](https://www.youtube.com/watch?v=qxwXzd5-ntk&t=2219s) |

[Official recording, chapters, and transcript](https://proflouishyman.github.io/ai_conference_2026/talks/S21.html)

## S22 Environmental History and AI

Alexander More

| Perspective | Session notes |
| --- | --- |
| Overview | Alexander More asked whether accounts of drought, flood, and other events in written records register a climate signal that can also be observed in natural archives. |
| Prior Work | His geodatabase drew together roughly 55,000 geolocated Eurasian climate records assembled by 25 scholars. Its continuous series from 1000 to 1820 offered a historical perspective on the choice of preindustrial baselines. [5:54](https://www.youtube.com/watch?v=_wR1dN0Zm0Q&t=354s) |
| Methods | More described recovering a missing component dataset and splitting accounts that mentioned several phenomena. He also considered how far apart two reports should be before a storm counts as two events. [11:02](https://www.youtube.com/watch?v=_wR1dN0Zm0Q&t=662s) [18:32](https://www.youtube.com/watch?v=_wR1dN0Zm0Q&t=1112s) |
| Evidence and Validation | More compared the written reports with tree-ring series at comparable temporal resolutions. For 1000–1300 he reported a correlation near 0.5. He stressed the importance of well-documented intervals and showed that the result varied with period and region. [28:02](https://www.youtube.com/watch?v=_wR1dN0Zm0Q&t=1682s) |
| Open Questions | Where the two kinds of record disagree, how much is due to climate and how much to the distribution of observations? Participants discussed regional coverage and the value of extending the collection. [49:40](https://www.youtube.com/watch?v=_wR1dN0Zm0Q&t=2980s) |

[Official recording, chapters, and transcript](https://proflouishyman.github.io/ai_conference_2026/talks/S22.html)

## S23 Migrant Connections: Building Digital Infrastructure for Migration History

Atiba Pertilla

| Perspective | Session notes |
| --- | --- |
| Overview | Atiba Pertilla pursued three questions about migration. What draws volunteers to immigrant letters? How might a reader hear a historical dialect? And how can a historian follow households when a city changes its street numbers? |
| Prior Work | The German Historical Institute’s Migrant Connections project uses Omeka and Scripto for collaborative transcription. Pertilla’s research on immigrant finance also draws on city directories and geographically located census records. |
| Methods | A speech project combined text-to-speech with voice conversion to model historical German dialects. For Baltimore directories, Pertilla used Document AI to extract entries and Claude to restructure the old and new house numbers after the 1887 renumbering. [11:07](https://www.youtube.com/watch?v=QaZc5MmX_k8&t=667s) [25:34](https://www.youtube.com/watch?v=QaZc5MmX_k8&t=1534s) |
| Evidence and Validation | Pertilla specified the desired fields and explained the printed asterisks and parentheses. On inspection he found flagged irregularities and reported seeing no invented house numbers in the output he checked. [39:58](https://www.youtube.com/watch?v=QaZc5MmX_k8&t=2398s) |
| Open Questions | Volunteers he consulted enjoyed deciphering difficult letters themselves. How might automated transcription change their reasons for participating? The voice project raised a separate question about whose voice represents a past community. [7:28](https://www.youtube.com/watch?v=QaZc5MmX_k8&t=448s) [35:13](https://www.youtube.com/watch?v=QaZc5MmX_k8&t=2113s) |

[Official recording, chapters, and transcript](https://proflouishyman.github.io/ai_conference_2026/talks/S23.html)

## S24 Trust: What AI Does and Doesn't Change about Historical Research and Teaching

Louis Hyman

| Perspective | Session notes |
| --- | --- |
| Overview | Louis Hyman used a census zero to teach a habit of historical reading. When California appears to have had no books in 1850, students must examine what the return actually counted before calculating with it. [10:46](https://www.youtube.com/watch?v=NtmusNJMTA0&t=646s) |
| Prior Work | His computational history teaching extends source criticism to numerical records. His research drew on New Orleans notarial archives, whose indexing by seller made buyers difficult to follow. |
| Methods | He broke archival tasks into steps for which a model could write inspectable code. For railroad forms, he described adapting an open-weight Qwen model with a small set of corrected examples. [54:07](https://www.youtube.com/watch?v=NtmusNJMTA0&t=3247s) |
| Evidence and Validation | Searching records associated with slave trader John McDonogh yielded just over 1,100 transactions, Hyman reported. For a separate probate document, he wrote software to reconcile individual entries with running totals, giving him a check internal to the source. [29:08](https://www.youtube.com/watch?v=NtmusNJMTA0&t=1748s) |
| Open Questions | How should errors be measured against hand-corrected examples? Participants also asked who pays for the digitization that makes these methods possible. [42:21](https://www.youtube.com/watch?v=NtmusNJMTA0&t=2541s) [54:07](https://www.youtube.com/watch?v=NtmusNJMTA0&t=3247s) |

[Official recording, chapters, and transcript](https://proflouishyman.github.io/ai_conference_2026/talks/S24.html)

## S25 MapReader: Historical Maps as Data

Katie McDonough

| Perspective | Session notes |
| --- | --- |
| Overview | Katie McDonough used a map to ask what it meant to live beside a railway. Tracks drawn as lines reveal routes. A station yard or a dense stretch of railway land also has a footprint that matters to residents of nearby streets. |
| Prior Work | The Living with Machines project connected British Ordnance Survey maps with census records. Machines Reading Maps pursued a related question about words printed across sheets in the David Rumsey collection. |
| Methods | MapReader divides a sheet into image patches for classification and locates text on the map. For the railway study the team used patches representing 100 metres on each side. [21:21](https://www.youtube.com/watch?v=wb670hHQ8Yg&t=1281s) |
| Evidence and Validation | Combining the classified patches with geolocated residential streets in the 1901 census made it possible to distinguish streets near different densities of railway space. In another example, clusters of map words picked out docks along the Thames. [24:22](https://www.youtube.com/watch?v=wb670hHQ8Yg&t=1462s) [32:11](https://www.youtube.com/watch?v=wb670hHQ8Yg&t=1931s) |
| Open Questions | How can a researcher query symbols and words together, or deposit recognized text in a library system while preserving its position on the sheet? [37:33](https://www.youtube.com/watch?v=wb670hHQ8Yg&t=2253s) [56:19](https://www.youtube.com/watch?v=wb670hHQ8Yg&t=3379s) |

[Official recording, chapters, and transcript](https://proflouishyman.github.io/ai_conference_2026/talks/S25.html)

## S26 Experiments in AI and Handwriting Recognition

Haley Price, Anya Lewis-Meeks, Ashley Champagne

| Perspective | Session notes |
| --- | --- |
| Overview | Ashley Champagne discussed Laurel Bestock’s Abydos excavation notebooks, Anya Lewis-Meeks examined Wilson Harris’s heavily revised drafts, and Haley Price tested early modern Habsburg correspondence. The three collections require different definitions of a correct reading. |
| Prior Work | The team tested a published claim that handwriting recognition had been solved. Earlier experience with specialist tools such as Transkribus informed the comparison with general-purpose models. [1:06](https://www.youtube.com/watch?v=MGm5KrzDdas&t=66s) |
| Methods | For the field notebooks, a number or geometric sign could encode an archaeological distinction. For Harris, the order and placement of revisions mattered. For the letters, the team compared model readings with manually verified pages and varied how strictly the prompt required fidelity to the original. |
| Evidence and Validation | Models struggled with archaeological identifiers. On 87 verified pages of the Habsburg letters, Price reported that Claude Fable performed best. Under instructions to preserve the writing exactly, Opus 5 fell from first to last because it supplied material absent from the page. [12:08](https://www.youtube.com/watch?v=MGm5KrzDdas&t=728s) [34:34](https://www.youtube.com/watch?v=MGm5KrzDdas&t=2074s) |
| Open Questions | A change in Italian grammatical gender can alter an interpretation while barely moving a word-error score. What would an evaluation measure if that single change were the historian’s chief concern? [36:48](https://www.youtube.com/watch?v=MGm5KrzDdas&t=2208s) |

[Official recording, chapters, and transcript](https://proflouishyman.github.io/ai_conference_2026/talks/S26.html)

## S27 Closing Remarks & Next Steps

Louis Hyman

| Perspective | Session notes |
| --- | --- |
| Overview | Louis Hyman closed by asking why an earlier generation’s ambitious computational projects had proved so expensive, and which of those costs an AI assistant could plausibly reduce. |
| Prior Work | He set the controversy over *Time on the Cross* alongside the work of the Philadelphia Social History Project. In Philadelphia, researchers and machine operators encoded census entries on punch cards to trace where people lived and worked. [2:35](https://www.youtube.com/watch?v=7YmcKl9Zsn0&t=155s) |
| Methods | Hyman revisited a 1965 conference review that itemized the work of punching, proofreading, and debugging. He then showed a quick ChatGPT analysis of Philadelphia data to ask what intellectual work remains after the computation runs. [6:02](https://www.youtube.com/watch?v=7YmcKl9Zsn0&t=362s) [8:14](https://www.youtube.com/watch?v=7YmcKl9Zsn0&t=494s) |
| Evidence and Validation |  |
| Open Questions | How does one teach students to use an incomplete number responsibly? Hyman described moving among an initial reading, an inquiry into how the number was made, and a judgment about what it can still support. [10:24](https://www.youtube.com/watch?v=7YmcKl9Zsn0&t=624s) |

[Official recording, chapters, and transcript](https://proflouishyman.github.io/ai_conference_2026/talks/S27.html)

## S28 Annual Margaret Levi Lecture in Political Economy: From Value Creation to Value Extraction in Silicon Valley

Tim O'Reilly

| Perspective | Session notes |
| --- | --- |
| Overview | Tim O’Reilly asked what an AI industry would look like if its investors profited chiefly by controlling access to a market. He approached the question through earlier changes in search and online retail. |
| Prior Work | O’Reilly traced shareholder-centered arguments back to Milton Friedman’s 1970 statement and used the economic concept of rent to examine payments made possible by control over a platform. [13:51](https://www.youtube.com/watch?v=_JiiOzqYik4&t=831s) [16:23](https://www.youtube.com/watch?v=_JiiOzqYik4&t=983s) |
| Methods | He examined where paid listings appear relative to organic search results. Unix and the Model Context Protocol supplied examples of technical rules through which outside developers can participate in a system. |
| Evidence and Validation | In the Amazon research he described, a shopper could encounter many paid placements before the first organic result. Its position on the page gave him an observable way to examine how selling visibility had changed the service. [11:48](https://www.youtube.com/watch?v=_JiiOzqYik4&t=708s) |
| Open Questions | O’Reilly proposed judging AI by how widely its benefits spread. In discussion, Matthew Connelly asked what universities could build using the knowledge and data they already hold, given the cost and concentration of computing power. [38:10](https://www.youtube.com/watch?v=_JiiOzqYik4&t=2290s) [51:34](https://www.youtube.com/watch?v=_JiiOzqYik4&t=3094s) |

[Official recording, chapters, and transcript](https://proflouishyman.github.io/ai_conference_2026/talks/S28.html)
