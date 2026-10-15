# Review agenda — open items only

15 Oct 2026, late. Pruned: everything resolved now lives in git history, not here. GROUND RULE unchanged: items from the Josh/Claude doc and Wu's mail are asks, not tasks — nothing goes in without CKJ's approval of that specific point. Flags: 🟡 partly addressed · ⬜ open · 💬 needs a decision or a rework done together.

## A. Comments-doc items still open (numbering follows the doc)

- **Item 2 —** **Sim-to-real bullet + Fig. 1.11 caption (§1.7)** 🟡 "The domain shift typically stays small" still sits oddly beside "the single most consequential gap"; the de Santi caption still asserts "carefully invariantised inputs buy this robustness" as fact — soften to attribution unless they ran that ablation.
- **Item 5 —** **Abstract/§1.9 numbers** ⬜ Update the numbers (the 1-in-6 stat and the paper counts) once the review rounds are done.
- **Item 6 —** **Causality and receiver-dependence (§1.4.2, §1.6.1)** ⬜💬 Both passages argue the receiver is barred by the arrow of time. My read: the reviewer is right — directedness already enforces causality, and a progenitor→descendant message may legally read the descendant's state. The uniform-time-step argument carries the SAGEConv choice alone. Reword both spots; five minutes of discussion first.
- **Item 7 —** **The permutation half of the blueprint pointer (§1.2.3)** ⬜ The appendix pointer covers a translation-only proof. Smallest fix: cite Zaheer et al. Lemma 3 and reword. Fuller fix: an Appendix 2.2 with the permutation derivation — CKJ's call.
- **Item 9 —** **Attention advice vs Table 1.2** ⬜ "Tends to train unstably" unscoped against the three attentional successes in the table (Kololgi, Iqbal, Spina). Scope it to the tested tasks or say what differs.
- **Item 11 —** **Lensing ≠ attention (§1.4.2)** 💬 CKJ's own note; rework agreed in principle. The a(x_u, x_v, e_uv) edit half-rescues lensing via edge features, but receiver-dependence stays absent. Candidates: the driven oscillator (same forcing, response set by the receiver's eigenfrequency), or Doppler-selective absorption (the receiver's velocity decides how loudly the line lands).
- **Item 21 —** **Fig. 1.17 reproducibility** 💬 Criteria stated, per-paper classification published, counts consistent. Proposal: papers_per_year.py already holds the classification — have it emit an appendix table (one row per analysis) so figure, table, and text draw from one source. Folds in CKJ's rerun note.
- **Item 23 —** **Wrong-kind sources** ⬜ Jespersen 2021 (project webpage) cited twice; Yang & Yu among the Ω_m/σ₈ GNNs; Rossi entry bare. Decisions, then mechanics.
- **Item 24 —** **Bibliography mechanics** ⬜ Residue after the round-3 dedup and ampersand fixes: Iqbal entry completion (A&A 704, A334), preprint-vs-publication year convention, and the bibtex warnings (Ting2026 extra pages field, undefined month string "july", pascal_pensees author+editor clash, Thiele2026 empty publisher/pages).

## B. CKJ's % comments and placeholders in main.tex

- (All stale comments are stripped as of 15 Oct; the Villar line is deleted per CKJ.)
- **L570** "% Some text here" — the "General Considerations" pillar needs its intro paragraph; its sibling "Practical Considerations" intro deserves the same look (CKJ's reorg weigh-in: the general pillar should promise *judgement*, the practical pillar *habits*; "with a eye on pitfalls" typo). Drafting TABLED 15 Oct: first candidates rejected — the intros must sound human, in plain prose, with no constructed one-liners.

## C. Wu round, open

W1. **Fig. 1, grid vs rotation (D8 point)** 💬 Keep SO(2) on the signal, give the domain its honest quarter-turns, and say in caption + prose that the mismatch between the two is where augmentation and equivariant layers (§4.6) live. Panel amendment joins the figure-rerun batch (domain_signal_model.py; signal-column header typo "What liven on it"; unify the figure's $D_4$ with the groups box's $D(4)$).

W3. **LLM-isms** 🟡 Remaining counts in the current text: "must earn its place" (§6.4) — kill per CKJ's verdict; "makes the point" ×1; "deserves emphasis" ×1 ("state it once and plainly" already died in round 2). Sentence-by-sentence discussion, a short list, not a purge.

W5. **Domain vs signal needs clarifying (Wu was confused)** ⬜ Cheapest first: (i) one disambiguating sentence in §2.1 right after the two geometries are introduced, using Wu's own case; (ii) one caption sentence on Fig. 1 naming the same mismatch; (iii) a small svgraybox "The domain and the signal" if the distinction deserves furniture; (iv) the panel-label touch-up with the rerun batch. Recommended: (i)+(ii) now, (iv) with the batch.

## D. Next up (CKJ picks)

1. **Figure-rerun batch**: papers_per_year.py with stated criteria + the appendix classification table (item 21), and domain_signal_model.py with the typo, quarter-turns, and $D(4)$ fixes (W1, W5-iv).
2. **Talking sessions**: causality/receiver-dependence (6), the attention metaphor (11, in discussion), attention-instability scoping (9).
3. **Claims sweep**: 2, 7, 23 (+ the end-of-rounds number refresh, item 5).
4. **Pillar intros (tabled)**: General ("% Some text here") and Practical — resume when CKJ wants, in a human voice.

## E. Final clean-up (endgame, after the rounds)

One full-manuscript pass, in order:
- **Strip dead weight**: every commented-out bit (old sentences, stale `%claude` / `%` notes, the commented Villar line once item 15 is decided), and the red `\textcolor` wrappers once each insertion is accepted.
- **Title case in titles**: sections run title case, subsections sentence case — three outliers today: "Cosmology and Large-Scale Structure", and the two §6 pillars "General Considerations: Architectures, Inductive Biases, and When not to use a GNN" (which also breaks its own case on "When not to use") and "Practical Considerations: Tutorials, Pitfalls, and Engaging with the Literature". Decide the convention per level, then sweep.
- **Grammar pass**: full read for grammar, UK spelling, §-spacing, dash conventions, "this chapter" vs "this review" consistency.
- **Bib endgame**: prune or cite the unused entries (34 as of 15 Oct, including reserves: Jespersen2026_environment_assembly, Roper2020_MEGA, PySR, Ting2025 textbook, Lino2021, vanDenEnde2020); fix the bibtex warnings (see item 24).
- **Second opinion**: run the full manuscript through Gemini for an independent language check; its comments get Josh/Wu treatment — asks, not tasks, each needs CKJ's per-point approval.
- **Final compile check** in both modes (`\arxivfalse` and `\arxivtrue`): 0 errors, 0 undefined references, spot-checked page renders, running heads.
