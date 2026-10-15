# Review-round agenda — Speagle/Claude comments × your % notes × the current text
15 Oct 2026. Status read against the post-pull main.tex. GROUND RULE (16 Oct): no change based on a Josh/Claude-doc item goes in until CKJ has approved that specific point; the items below are asks, not tasks. Item 20's numbers were declined; the still-information-at-10-Mpc note was kept. Item 17: Minkowski-PointNet kept, the rest declined. Flags: ✅ done · 🟡 partly · ⬜ open · 💬 needs a decision or a rework we do together. Rounds 1–2 are in (see the Round 2 ledger below); every remaining A/E item still waits for CKJ's per-point approval.

## A. The comments document, item by item

The doc's three praise points (blueprint derivation §1.2.3, N-body mapping §1.4.1, validation battery §1.6.3) match what the sibling-chapter comparison found — your load-bearing walls. The numbered items (numbering follows the comments doc; 3, 4, 8, 12, 16, 19, 25, 26 removed as resolved/dismissed, CKJ's call, 15 Oct):

1. **Positioning (§1.1)** 🟡 You now cite Shlomi et al. and claim the specialised ground. Open: whether to name Duarte & Vlimant (graph construction on detector hits overlaps §1.3.2.2/§1.5.5), Thais et al., Farsian et al. (GNNs in cosmology), and whether to say outright that no dedicated astro-GNN review exists.
2. **Sim-to-real bullet + Fig. 1.11 caption (§1.7)** 🟡 The frontier bullet now names the observational shift (survey masks, fibre collisions, RSD) ✅. Still open: "the domain shift typically stays small" sits oddly beside "the single most consequential gap", and the de Santi caption still asserts "carefully invariantised inputs buy this robustness" as fact — soften to attribution unless they ran that ablation.
5. **Abstract/§1.9 content** 🟡 1-in-6 stat now in the abstract ✅; §1.9 now points at best practices + practical guidelines ✅. Decide: is the validation battery itself visible enough in both.
6. **Causality and receiver-dependence (§1.4.2, §1.6.1)** ⬜💬 Both passages still argue the receiver is barred by the arrow of time. My read: the reviewer is right — directedness already enforces causality, and a progenitor→descendant message may legally read the descendant's state. The uniform-time-step argument carries the SAGEConv choice alone. Suggest rewording both spots; worth five minutes of discussion first.
7. **The permutation half of the blueprint pointer (§1.2.3)** ⬜ "(Appendix proves it)" still points at a translation-only proof. Smallest fix: cite Zaheer et al. Lemma 3 and reword. Fuller fix: I draft an Appendix 2.2 with the permutation derivation in the style of Appendix 2 — your call.
9. **Attention advice vs Table 1.2** ⬜ "Tends to train unstably" still unscoped against the three attentional successes in the table (Kololgi, Iqbal, Spina). Scope it to your tested tasks or say what differs.
10. **σ₈ as anisotropy (§1.4.6)** ⬜ Still there; σ₈ is isotropic amplitude. Swap to RSD or intrinsic alignments — two-word fix once agreed.
11. **Lensing ≠ attention (§1.4.2)** 💬 = your L342 note; you've already agreed it needs rework. Note: your Eq. 1.2 edit (weight now a(x_u, x_v, e_uv)) half-rescues lensing via the edge features, but the receiver-dependence is still absent. Replacement candidates to discuss: the driven oscillator (same forcing, response set by the receiver's eigenfrequency — rescaled, never rewritten), or Doppler-selective absorption (the receiver's velocity decides how loudly the line lands).
13. **Sources for the practical advice** 🟡 Corso/PNA now cited ✅. Staged in ref.bib but not yet in text: GraphSAINT (Zeng). Still absent: Oono & Suzuki (oversmoothing), Topping et al. + Di Giovanni et al. (over-squashing), Morris et al. (k-WL), Cluster-GCN (Chiang). Weave-in session.
14. **Learned adjacency (§1.3.2.2)** 🟡 Kipf (NRI) and Kazi (DGM) now in ref.bib, uncited; EdgeConv/DynEdge absent. "Otherwise rare in the literature" needs softening once these are named.
15. **Villar sentence (§1.4.5)** 💬 = your L386: currently commented out. Decide: delete, or recast pointing at Zaheer/Xu for pooling sufficiency.
17. **Phrase-level descriptions of cited papers** ⬜ Eight micro-fixes, mostly unapplied: Berni (Creek pipeline, OPTICS clusters), Lee 2024 (Minkowski-PointNet), Lee & V-N (combinatorial complex), Kololgi (now RASTI 2026), Sun ("up to" 99.71%), Bechler-Speicher (weaker claim, ICML 2024), Finzi (RPP framing), Spina (abundances = nodes, orbits+age = edges). One sitting.
18. **Equivariant family (§1.4.6)** 💬 = your L390: TFN, SEGNN, e3nn, SE(3)-Transformer, NequIP, MACE, Balla are ALL in ref.bib now, none cited. The work is composing the short paragraph — Balla's long-range-information result also feeds §1.6's oversmoothing discussion.
20. **Fig. 1.12 caption** ⬜ Still says the figure "reveals how much of the connection lives at each scale"; the curve hasn't flattened by 10 Mpc and the GNN loses below 0.5 Mpc. Recaption with the numbers.
21. **Fig. 1.17 reproducibility** 💬 = your L641 "needs rerun". Reviewer wants: criteria stated, per-paper classification published, counts consistent ("roughly sixty" vs 58). Proposal: papers_per_year.py already holds the classification — have it emit an appendix table (one row per analysis) so figure, table and text all draw from one source.
22. **Table 1.2 sideways** 💬 Still rotated. Options: keep (editors may reset it anyway), split by subfield, or full-width appendix.
23. **Wrong-kind sources** ⬜ Jespersen 2021 (project webpage) still cited twice; Yang & Yu still among the Ω_m/σ₈ GNNs; Rossi entry still bare. Decisions, then mechanics.
24. **Bibliography mechanics** ⬜ Iqbal entry completion (A&A 704, A334), bib entries for the works named inside Fig. 1.10, preprint-vs-publication year convention — one final-pass job.

## B. Your % comments not covered above

a. **L222** — change "who links to whom" → "what links to what" under the adjacency-matrix infobox. ✅ Figure rerun, committed, pushed (round 2). Residue: the now-stale `%claude` comment above the figure (currently L249) — delete on CKJ's word.
e. **L542** — "% Some text here": the new "General Considerations" subsection needs its intro paragraph. Draft together.
f. **L591** — the §1.6 reorganisation (general vs practical). My take, short version: the two-pillar split is right and mirrors the chapter's theory→practice arc; the risks are the "General Considerations" title shadowing §1.2's territory and the two intros needing to do real work (the general pillar should promise *judgement*, the practical pillar *habits*). Also "with a eye on pitfalls" typo in the practical intro. Full discussion when we get there.
g. **L641** — figure rerun: fold into item 21 so one rerun fixes counts, caption, criteria and the appendix table at once.

## C. What changed since the submitted draft (so we're looking at the same object)

Beyond my version switch: §1.6 and old §1.8 merged into a two-pillar Best Practices (general / practical), with "When not to use a GNN" moved before the pitfalls and now hosting the graph-kernel result, and Tutorials demoted to a subsubsection; the Mangrove paragraph rewritten; ⟨k⟩ notation adopted; Eq. 1.2 attention weight extended with e_uv; new §1.5.5 opening framing; the intro's positioning sentence rewritten; abstract gains the 1-in-6 stat; acknowledgements gain Wu, Speagle, and the AI-assistance disclosure; KM3NeT + gamma-ray coverage added; and a dozen reviewer-suggested references staged in ref.bib awaiting citation.

## D. Proposed order of attack

1. One batch of unanimous micro-fixes: 10 (σ₈), 17's eight phrases, 20 (caption numbers).
2. The two argument reworks: 11 (attention metaphor) and 6 (causality wording), plus 9 (attention advice scope).
3. Reference weaving: 18 (equivariant paragraph), 13 + 14 (practical-advice credits, learned adjacency), 1 (positioning).
4. Figure/table session: 21 + g (rerun with criteria + appendix classification), 22 (table layout), 2's caption.
5. Claims sweep: 2, 5, 7, 23.
6. Structure: e + f (the two pillar intros and the §1.6 architecture).
7. Mechanics endgame: 24.


## E. The Wu round (16 Oct)

W1. **Fig. 1.1, grid vs rotation (D8 point)** 💬 Wu is technically right that the pixel grid supports only quarter-turn rotations exactly — but his comment lands on the *signal* column, which claims SO(2) for the physical answer, not the grid. That misreading is itself the evidence for W5 below. Resolution that teaches: keep SO(2) on the signal, give the domain its honest D8/quarter-turns, and say in caption + prose that the mismatch between the two is exactly where augmentation and equivariant layers (§1.4.6) live. Panel-text amendment joins the figure-rerun batch (domain_signal_model.py is rerunnable; its signal-column header also carries a typo, "What liven on it").

W2. **Data-rich caveat + the Smidt citation** 💬 Decision needed. The linked paper (s41467-022-29939-5) is **NequIP — Batzner et al. 2022**, already sitting in ref.bib from the Josh batch (Batzner2022_E3GNN_InteratomicPotentials). But it argues the *data-efficiency* half of Wu's sentence, and in fact the opposite of his data-rich half: its learning curves have the equivariant networks winning at every training-set size, with a steeper slope ("challenging the widely held belief that deep neural networks require massive training sets"). So: cite Batzner as the data-efficiency exemplar in §1.6.2 ✓ uncontroversial. For the "unconstrained models win when data are rich and noisy" claim, we need a different source — the on-point study is Brehmer et al. 2024, "Does equivariance matter at scale?" (arXiv:2410.23179); Balla et al. (already in the bib) adds the point-cloud-specific limits. Optional garnish: one cross-reference to the sibling foundation-models chapter (Zhao & Ting), whose scale-vs-structure discussion is this same tension.

W3. **LLM-isms** 🟡 Counts in the current text: "earns/earn its place" ×1 (the graph-anatomy caption instance already died in your caption rewrite; the §1.6.4 "must earn its place" survives — kill it per your verdict), "makes the point" ×1, "state it once and plainly" ×1, "deserves emphasis" ×1. The "amortises an optimisation the exact solver cannot afford" sentence I would keep: the opponent exists (the exact solver, and the problem is NP-hard) and the claim is concrete. To be discussed sentence by sentence — a short list, not a purge.

W4. **"must" ×44 (recount 15 Oct pm)** 🟡 Wu counted 47; two died in the round-1/2 edits. Densest: §1.3.2.2 (7), §1.7 (6), §1.6.1 (4). Proposal: triage into (a) logical/mathematical necessity — keep; (b) genuine best-practice force — keep sparingly; (c) rhetorical filler — swap for "should", "it pays to", or restructure. Target roughly 46 → low 30s. Wheeler himself licenses the trim: "use commands to stir the blood — but sparingly... not so much as to seem bossy."

W5. **Domain vs signal needs clarifying (Wu was confused)** ⬜ Suggestions, cheapest first:
  (i) One disambiguating sentence in §1.2.1 right after the two geometries are introduced, using Wu's own case as the example: the galaxy image lives on a grid whose exact symmetries are shifts and quarter-turns, while the time since last merger ignores any rotation of the sky — domain and signal need not share a symmetry, and the gap between them is where §1.4.6 operates.
  (ii) One caption sentence on Fig. 1.1 naming the same mismatch, so the figure can't be read as claiming SO(2) for the grid.
  (iii) A small svgraybox "The domain and the signal" — the chapter already teaches by grey box (inductive bias, blueprint, inductive/transductive); a fourth fits the house style and gives the distinction a findable home.
  (iv) Bundle the panel-label touch-up into the figure rerun.
  Recommended: (i)+(ii) now, (iii) if you want the distinction promoted to furniture, (iv) with the rerun batch.

## Round 2 ledger (15 Oct, afternoon)

Done, committed, on Overleaf:
- Fig `graph_anatomy` rerun: "Who links to whom" → "What links to what" (matplotlib 3.7.2 pinned so the render matches the original pixel-for-pixel; item B.a ✅).
- §2.1 trim (dictated): "…, so we state it once and plainly:" → "The lesson repeats throughout this chapter:" — also kills one W3 LLM-ism.
- svgraybox symmetric padding, now 6pt/6pt list margins (class default was 0pt left / 24pt right); preamble redefinition, applies to every box.
- NEW symmetry-groups box before §2.1 (CKJ-approved): physicist's definition of a group, the letter/number naming key (T, S, O, U, E, D), seven common astro groups ending on Σ_n, closing Lorentz/Galilean/dilations sentence. Inserted in red; CKJ polishes wording on Overleaf.

Superseded by the box:
- The separate fig-1 group-definitions sentence (draft A): recommend dropping — the box defines all five panel symbols just above the figure. Optional residue for the figure rerun: honest quarter-turns label on the grid panel (W1) and unifying the figure's $D_4$ with the box's $D(4)$.

Process notes (today's conventions):
- Insertions wrapped in \textcolor{red}{…}, per-element so the colour survives svgraybox page splits; accept by stripping the wrappers (I can do it).
- A stale editor buffer once overwrote a committed change — reload main.tex in local editors before saving.
- Overleaf lays "Update on Overleaf." commits on top while the project is open; plain `git pull` locally before new work.

## F. Suggested round 3 (CKJ to pick)

1. **W2 weave (already approved)**: Batzner/NequIP into §1.6.2 as the data-efficiency exemplar; decide the data-rich counter-source (Brehmer et al. 2024 — needs CKJ's nod; Balla already in bib).
2. **Funding + data-availability statements**: Springer requires them; CKJ supplies grant numbers and data links, I draft. Mechanical, zero controversy.
3. **"must" triage (W4)**: 44 → low 30s; I table every instance with a keep/soften mark, CKJ vetoes line by line.
4. **Figure-rerun batch (21 + g + W1 + W5-iv)**: papers_per_year.py emitting the appendix classification table; domain_signal_model.py fixing the "What liven on it" typo, the grid panel's quarter-turn honesty, and $D_4$→$D(4)$.
5. **Ten-second item**: delete the stale %claude comment at L249.
6. Then the two argument reworks as a talking session: 6 (causality/receiver) and 11 (attention metaphor: driven oscillator vs Doppler-selective absorption).

## G. Final clean-up (endgame, after the rounds)

One full-manuscript pass, in order:
- **Strip dead weight**: every commented-out bit (old sentences, stale `%claude` / `%` notes, the commented Villar line once item 15 is decided), and the red `\textcolor` wrappers once each insertion is accepted.
- **Title case in titles**: sections run title case, subsections sentence case — three outliers today: "Cosmology and Large-Scale Structure", and the two §6 pillars "General Considerations: Architectures, Inductive Biases, and When not to use a GNN" (which also breaks its own case on "When not to use") and "Practical Considerations: Tutorials, Pitfalls, and Engaging with the Literature". Decide the convention per level, then sweep.
- **Grammar pass**: full read for grammar, UK spelling, §-spacing, dash conventions, "this chapter" vs "this review" consistency.
- **Second opinion**: run the full manuscript through Gemini for an independent language check; its comments get Josh/Wu treatment — asks, not tasks, each needs CKJ's per-point approval.
- **Final compile check** in both modes (`\arxivfalse` and `\arxivtrue`): 0 errors, 0 undefined references, spot-checked page renders, running heads.
