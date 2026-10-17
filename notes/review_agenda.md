# Review agenda — open items only

17 Oct 2026, evening. Every review round is closed and the red-text review is done: CKJ went through all insertions on Overleaf, 0 red wrappers remain, the unsupervised paragraph stands in his wording, and the small catches (complimentary ×2, math-mode $A$, the stale box comment) are all fixed. Remotes level, compile clean (0 errors, 0 undefined, 0 bibtex warnings). GROUND RULE unchanged for late-arriving comments (Gemini's included): asks, not tasks — nothing goes in without CKJ's approval of that specific point.

## Rounds — all clear

- **Josh, comments doc** (26/26), **Josh face-to-face** (J1 maths on-ramp, J2 pillar restructure), **Wu** (W1–W5), **CKJ's in-file notes**: all resolved and verified in the compiled file, 16–17 Oct.
- **Red-text review**: DONE 17 Oct by CKJ on Overleaf — every `\textcolor{red}` insertion accepted, edited, or struck; file now carries zero wrappers.

## Endgame — one full-manuscript pass, in order

1. **Strip dead weight**: reds are gone; 22 plain `%` commented-out lines remain (figure-rerun note included) — list ready for a keep/kill pass whenever CKJ wants.
2. **Bib prune** (decision pending with CKJ): 200 entries, 168 cited, **32 unused** — grouped list sent in chat 17 Oct: (i) named reserves (Jespersen2026_environment_assembly, Ting2025 textbook, PySR, Lino2021, vanDenEnde2020), (ii) the representation-theory/equivariance library (17 entries: Serre, Fulton–Harris, Folland, Bröcker–tom Dieck, Cohen ×2, Weiler ×2, Kondor ×2, Lang–Weiler, Villar ×2, Deng, Yao, Hainje, Blum-Smith), (iii) graph-ML odds and ends (Dai2018, Liu2019, Qu2019, Shuman2013, You2018, Chatterjee2025, Velickovic2018_DGI — DGI has a natural home in the unsupervised paragraph's "contrastive objectives" clause), (iv) colour (Galileo1623, Sousbie2011, ThorneBlandford2017). Also: Jespersen2026_optical_infrared still wants volume/eid.
3. **Title case in titles**: sections title case, subsections sentence case — lone outlier "Cosmology and Large-Scale Structure". Decide the convention per level, then sweep.
4. **Grammar pass**: full read for grammar, UK spelling, §-spacing, dash conventions, "this chapter" vs "this review" consistency.
5. **Second opinion**: full manuscript through Gemini for an independent language check; its comments get the Josh/Wu treatment — asks, not tasks, per-point CKJ approval.
6. **Placement pass** (CKJ): every svgraybox, figure, and table in the final render — floats near their first reference, no graybox split across a page break (the framed colour-stack trap), nothing stranded at the chapter end, the sideways table on a sane page.
7. **Final compile check** in both modes (`\arxivfalse` and `\arxivtrue`): 0 errors, 0 undefined references, spot-checked page renders, running heads.
