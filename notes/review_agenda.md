# Review agenda — open items only

15 Oct 2026, late. Pruned: everything resolved now lives in git history, not here. GROUND RULE unchanged: items from the Josh/Claude doc and Wu's mail are asks, not tasks — nothing goes in without CKJ's approval of that specific point. Flags: 🟡 partly addressed · ⬜ open · 💬 needs a decision or a rework done together.

## Priority — from the face-to-face with Josh (added 15 Oct)

- **J1 — Gentler on-ramp to the mathematics** ⬜ Josh: "it sets on quite fast." Three remedies on the table, combinable: (a) introduce each new symbol in plain words at first use — the blueprint box currently lands $\Omega$, $G$, $g.x$, $B$, $\sigma$, $P$, $A$ and the composition chain in one go, and $g.x$ (the group action) is never unpacked in the main text; (b) a short bridge where \S4 begins its equations, mapping blueprint symbols to message-passing symbols ($B$ = one round of message passing, assembled from $\psi$, the aggregator, and $\phi$; $P$ = the coarsening/pooling of the practical sections; $A$ = the invariant global readout; $G = \Sigma_n$ on the graph) — the chapter already uses this "plays the role of" device for the force law, so the bridge can mirror it; (c) optionally, a compact notation line-up, though the chapter is already box-heavy. Recommended: (a) + (b).
- **J2 — Best Practices restructure** 💬 CKJ's reorg into General vs Practical, with his in-file note at the Practical subsection asking for input on how to structure the two. Claude's read and recommendation sent 15 Oct (short version: the true split as the content stands is design-time decisions vs working practices, so relabel the pillars to match and shorten their colon-list titles; optionally move "When not to use a GNN" to the front of the first pillar as the gate). Pillar intros remain tabled until the structure settles.

## A. Comments-doc items still open (numbering follows the doc)

None — all 26 are resolved, dismissed, or absorbed (16 Oct). Items 5, 23, 24 closed last: numbers verified against the final survey of 60; Jespersen 2021 thesis entry, Yang & Yu formulation (CKJ), and the Rossi entry completed; every bibtex warning fixed (Ting2026 double pages, Chiang month macro, Pascal editor clash, Thiele2026 editors/publisher added, Iqbal completed to A\&A 704, A334). Residue moved to the endgame bib bullet: preprint-vs-publication year convention.


## B. CKJ's % comments and placeholders in main.tex

- (All stale comments are stripped as of 15 Oct; the Villar line is deleted per CKJ.)
- **L618** CKJ's in-file note asking for input on the two-pillar structure (= J2).
- **L569** "% Some text here" — the "General Considerations" pillar needs its intro paragraph; its sibling "Practical Considerations" intro deserves the same look (CKJ's reorg weigh-in: the general pillar should promise *judgement*, the practical pillar *habits*; "with a eye on pitfalls" typo). Drafting TABLED 15 Oct: first candidates rejected — the intros must sound human, in plain prose, with no constructed one-liners.

## C. Wu round, open

W1. **Fig. 1, grid vs rotation (D8 point)** 💬 Keep SO(2) on the signal, give the domain its honest quarter-turns, and say in caption + prose that the mismatch between the two is where augmentation and equivariant layers (§4.6) live. Panel amendment joins the figure-rerun batch (domain_signal_model.py; signal-column header typo "What liven on it"; unify the figure's $D_4$ with the groups box's $D(4)$).

W5. **Domain vs signal needs clarifying (Wu was confused)** ⬜ Cheapest first: (i) one disambiguating sentence in §2.1 right after the two geometries are introduced, using Wu's own case; (ii) one caption sentence on Fig. 1 naming the same mismatch; (iii) a small svgraybox "The domain and the signal" if the distinction deserves furniture; (iv) the panel-label touch-up with the rerun batch. Recommended: (i)+(ii) now, (iv) with the batch.

## D. Next up (CKJ picks)

1. **Figure rerun remaining (optional)**: domain_signal_model.py — the "What liven on it" typo turned out already fixed (the script reads "What lives on it"); what remains of W1 is only the label question: honest quarter-turns on the grid panel and $D_4$ vs the box's $D(4)$.
3. **Claims sweep**: 23 (+ the end-of-rounds number refresh, item 5).
4. **Pillar intros (tabled)**: General ("% Some text here") and Practical — resume when CKJ wants, in a human voice.

## E. Final clean-up (endgame, after the rounds)

One full-manuscript pass, in order:
- **Strip dead weight**: every commented-out bit (old sentences, stale `%claude` / `%` notes, the commented Villar line once item 15 is decided), and the red `\textcolor` wrappers once each insertion is accepted.
- **Title case in titles**: sections run title case, subsections sentence case — three outliers today: "Cosmology and Large-Scale Structure", and the two §6 pillars "General Considerations: Architectures, Inductive Biases, and When not to use a GNN" (which also breaks its own case on "When not to use") and "Practical Considerations: Tutorials, Pitfalls, and Engaging with the Literature". Decide the convention per level, then sweep.
- **Grammar pass**: full read for grammar, UK spelling, §-spacing, dash conventions, "this chapter" vs "this review" consistency.
- **Bib endgame**: prune or cite the unused entries (34 as of 15 Oct, including reserves: Jespersen2026_environment_assembly, Roper2020_MEGA, PySR, Ting2025 textbook, Lino2021, vanDenEnde2020); fix the bibtex warnings (see item 24).
- **Second opinion**: run the full manuscript through Gemini for an independent language check; its comments get Josh/Wu treatment — asks, not tasks, each needs CKJ's per-point approval.
- **Final compile check** in both modes (`\arxivfalse` and `\arxivtrue`): 0 errors, 0 undefined references, spot-checked page renders, running heads.
