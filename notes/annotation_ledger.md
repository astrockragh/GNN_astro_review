# Annotation ledger — GNN_astro_review_v1_annotated.pdf (processed 13 Aug 2026)

Every mark found, page by page, with its disposition:
**APPLIED** = change made in main.tex/appendix/table as marked (read it back in context).
**APPLIED\*** = applied with interpretation — flagged in the questions list in chat.
**Q** = ambiguous, awaiting your answer. **TODO** = larger write, parked with a %TODO in the source and an entry in notes/TODO.md.

## p.1 — Abstract
- Strike "Modern astrophysics will advance ... relations, as" → abstract now opens "We seldom make breakthroughs..." — APPLIED
- "Neighbours, spatial, temporal, or otherwise" → "among its neighbours, spatial, temporal, or otherwise" — APPLIED
- Insert "presents the use of GNNs for astrophysics and cosmology and argues" → "This chapter presents the use of GNNs for astrophysics and cosmology, and argues that..." — APPLIED
- "enable the incorporation of" → "they enable the incorporation of the symmetries and prior knowledge" — APPLIED
- Strike "abstract" (mathematical machinery) — APPLIED
- Strike closing Helvétius sentence — APPLIED

## p.2 — Introduction
- "often advances" → "physics often advances less by the collection of facts" — APPLIED
- "furthermore" → "The natural sciences furthermore run, at heart, on relations" — APPLIED
- IceCube → "neutrino observatories scatter their sensors through large volumes of ice or water" — APPLIED
- Footnote 1: "the stroll is not impossible" → now "proved that no stroll crosses each bridge exactly once" — APPLIED

## p.3 — Roadmap and §1.2
- Strike "from the ground up"; "practical end" note → roadmap movement three now reads "and the practical end: the astrophysical applications..., the best practices..., and the frontier" — APPLIED\* (Q1)
- §1.2 opener: strikes + we/us → "When we master a few foundational principles, we can always derive, rather than memorise, the right architecture for the problem before us." — APPLIED
- "move footnote here" — Q2 (footnote 4 kept at sentence end for now)
- "the problem we pose, the signal we aim to measure" — APPLIED
- "any modern deep-learning architecture, be it the CNN, the Transformer, or the GNN, descends" — APPLIED
- §1.2.1 "hides → contains" + capital T → "contains three geometries: that of..." — APPLIED
- "These are shown in Fig 1.1" → sentence added — APPLIED
- "grid → space", "sample → observe" — APPLIED
- "necessarily" → "must necessarily first voxelise" — APPLIED
- Strike "genuinely"; "offers → is often" — APPLIED

## p.5 — §1.2.2
- "This does not include equivariance / rethink" + margin note on symmetry as two sub-cases — TODO (%TODO in tex; draft on request)
- "two words → two definitions suffice" — APPLIED
- Strike "linear" (maps we call representations) — APPLIED
- "see Fig 1.2" + "add permutation in/equivariance example and refer to Fig 1.3" → sentence added with both figure refs — APPLIED
- "Invariance, note, amounts to..." → footnote — APPLIED
- §1.2.3 title → "The geometric blueprint, and the CNN and GNN it implies" — APPLIED
- "block → blocks" — APPLIED

## p.6 — Fig 1.3, blueprint box, CNN derivation
- Fig 1.3 caption: strike "so that each halo keeps its prediction whatever index it happens to wear" — APPLIED
- Blueprint box "missing signal / signal defines in/equivariant readout" → premise now includes the signal; finish sentence carries the equivariant caveat — APPLIED
- "Not always, sometimes we finish equivariant" — folded into the same caveat — APPLIED
- Strike "linear" in "local linear operation" — **kept** pending Q3; added "that is, to insist on translational equivariance" — APPLIED\*

## p.7
- "and that difference matters → making it a special case" — APPLIED
- "The graph is the general substrate..." — APPLIED
- "After this, we need a similar 'derivation' of the GNN" → new paragraph derives the GNN from permutation equivariance + locality, referencing Appendix 1.12 — APPLIED (read it)
- "This is not good as its own section" (five Gs) → heading removed, paragraph merged into §1.2.3 — APPLIED
- §1.3 intro: "define", strike "when we have no choice" + section-plan sentence, keep graph-without-NN point — APPLIED

## p.8 — Table 1.1, §1.3.1
- Deep Sets astro example "Not sure this is right? Rather Thiele" — Q4
- "Check" (Transformer example) — Donoso-Oliva 2023 is ASTROMER, a transformer for light curves; checks out, kept — APPLIED
- "often" → "The real graph often runs sparse" — APPLIED
- "These are shown in Figure 1.4" → sentence added — APPLIED

## p.10 — §1.3.2 restructure
- New structure 1.3.2 / 1.3.2.1 given / 1.3.2.2 chosen → headings + intro split implemented — APPLIED
- "This needs a rewrite. A lot is wrong. big TODO" → %TODO in tex + notes/TODO.md — TODO
- "Case study cosmic web: Deep Sets, k-NN, radius, delaunay" → %TODO under 1.3.2.2 — TODO
- "Again, case study, merger tree, what can and cannot be changed" → %TODO in §1.3.3 — TODO

## p.11
- Fig 1.5 caption: "Adapted from Jespersen et al. 2022" + "expand causality" → both added — APPLIED\* (Q11)
- §1.4 intro: strikes + "how it can be intuitively understood as a physical interaction network" — APPLIED

## p.12
- Fig 1.6 caption "Expand how to build the graph + alternatives" → construction (10^11 M⊙, 3 Mpc linking length) + k-NN/Delaunay alternatives added — APPLIED
- Equation sentence split: "...x_j. This is the SAGEConv layer..." — APPLIED
- "hides → is similar to" (N-body update) — APPLIED
- "reads → can be read" back as a physical force — APPLIED

## p.13 — §1.4.2
- WL passage bracketed "Appendix" ×2 → moved to new Appendix 1.11.4 (app:sym:wl), main text keeps two-sentence pointer + sum-aggregator corollary — APPLIED

## p.15 — flavour bullets
- "GNN equivalent of non-existent social skills..." → sentence added to Convolutional bullet — APPLIED
- "unfiltered" → added to Attentional bullet — APPLIED
- Strike "a little" — APPLIED
- "I don't like this" (line absorption) — Q5 + %TODO in tex

## p.16 — §1.4.3
- "runs → is quiescent", "holds → has" — APPLIED
- "Introduce inductive/transductive in plain text first" → lead-in sentence added before the grey box — APPLIED

## p.17
- "Move up to end of 1.4.2" → training note moved to end of §1.4.2 — APPLIED\* (Q6)
- "possible" → "a possible pitfall" — APPLIED
- §1.4.5 heading strike + "scalar" + "as is the case in e.g. cosmology" → "Invariant outputs through aggregations/poolings" + "graph-level, scalar answer, as is so often the case in cosmology" — APPLIED\* (Q7)
- "There is a good Villar + Hogg potential citation in here" → Villar et al. 2021 (Scalars are universal, NeurIPS) added at the closing summary sentence — APPLIED

## p.18 — §1.4.6
- Title strike + "Symmetries in Message Passing" → "Symmetries in message passing" — APPLIED
- "rotational → geometric structure" — APPLIED
- "To illustrate we will look at rotation" → sentence added — APPLIED
- "E(3) is not just rotation" → E(3) now spelled out as rotations+translations+reflections — APPLIED

## p.19
- "This loses the distinction between in/equivariant messages" → EGNN description now keeps the two ledgers explicitly distinct (invariant scalar messages vs equivariant vector updates) — APPLIED
- "For E(3), make it clear what breaks the symmetry. Stretches or shear for example" → sentence added — APPLIED
- "Also move computationally costly" → compute-cost sentence added to the first road — APPLIED
- "This needs more of an example, like tidal force" → tidal-force sentence added to the second road — APPLIED
- Strike "diet beats" → "architecture beats augmentation in the strength of the promise" — APPLIED
- "This connected — move to 1.6.2" → approximate-symmetry sentence moved into §1.6.2's soft-constraint discussion (with the Appendix 1.11 deformation reference) — APPLIED
- Strike "and" before Satorras → sentence split — APPLIED
- §1.4.7 "no one can → we cannot" — APPLIED

## p.20
- "at times" → "Since at times the number of nodes stays fixed" — APPLIED
- "Although N_total may be high," → prepended — APPLIED
- "In general" struck, "are → have been used" — APPLIED
- "an astrophysically useful subset" — APPLIED
- Strike "will" (§1.5 intro) — APPLIED

## p.22 — Table 1.2
- "Mixed usually covers convolutional + message passing" → caption note added — APPLIED
- Strikes: "(linking length)", "(imposed)" ×2, "(causal)" — APPLIED
- "Make this column wider" → Task column widened (4.1→5.1cm) — APPLIED
- "Merge?" first two Cosmology rows — Q8a
- Word above Graph column ("Type"?) — Q8b
- Unreadable mark near "Fibre assignment, resource allocation" — Q8c
- "Check" on Kololgi "Convolutional" — Q8d
- Marks near trees row Level/Layer — Q8e

## p.24
- Fig 1.11 caption "Rewrite a bit here" → rewritten — APPLIED (read it)
- "No bold, ref to figure with merger tree" → bold removed, Figure 1.5 reference added — APPLIED

## p.25
- Fig 1.12 caption "Rewrite" → rewritten — APPLIED (read it)
- "Need to get rid of this ref" → Jespersen 2026 citation removed — APPLIED
- "+ Fig 1.6" → "(Figure 1.12, built on the graph of Figure 1.6)" — APPLIED

## p.29-30 — §1.6.1
- "and → or ... makes" — APPLIED
- "This (multiple layers) needs a sentence of explanation / repetitions of this layer" → depth-as-repetitions sentence added — APPLIED

## p.32 — §1.6.2 / §1.6.3
- "+ the choices in Jespersen or Chuang for shrinking the graph" → graph-shrinking example added — APPLIED (read it)
- §1.6.3 intro: "Any model that runs will return an answer..." + "focus on strong inductive bias + flexibility" → intro rewritten with your sentences — APPLIED
- Strike "astrophysical"; "seven" removed — APPLIED
- Reorder 0–4 + "Just for show" + "Perturb the adjacency" + "Perturb the architecture" + "Change and isolate the test set" + "+ Perturb the input features / drop single features" → list now runs: Split (opens "Change and isolate the test set"), Baseline ladder, Perturb the architecture (depth first, then width/aggregator/layer), Perturb the adjacency, Test the claimed symmetry, Perturb the input features (new), Calibrate, Gate — APPLIED\* (Q9 for Gate)

## p.33
- "First part doesn't work" + strike "Inspect the embeddings," → bullet is now "Calibrate the posteriors" only; embedding-inspection content deleted — APPLIED
- "No →" + strikes on the Gate bullet → "bounds the optimism" claim replaced by "gives a first estimate of how much trust any claim on observations deserves"; §1.5.1 clause dropped — APPLIED\* (Q9)
- "In short — there is no one way but a structure of heuristic validation. Calibrate calibrate" → closing line added — APPLIED
- §1.6.4: strike "or a sequence" — APPLIED
- §1.6.5: "almost" → "can suit almost any kind of task" — APPLIED

## p.34
- Quotes around "thermalises" — APPLIED

## p.35 — §1.7
- "+ Jagvaral" → added to the generative citation group — APPLIED
- "ideally" replacing "and well" — APPLIED
- Unreadable caret near "the nature of the Universe" — Q10
- "or potentially" (transient sky) — APPLIED
- "+ Ivezic" → Ivezić et al. 2019 (LSST) added — APPLIED

## p.37 — §1.9
- Strike "the one from which any other major deep learning algorithm can be derived" — APPLIED
- "A little too over the top — rewrite" → closing paragraph toned down (read it; the couplet is gone) — APPLIED (read it)

## p.45-47 — Appendix 1.11
- Strike "abstract" (same group) — APPLIED
- "Bold" ×2 → run-in headings now \runinhead — APPLIED
- Zee parenthetical → footnote — APPLIED
- "Delete this section" → §1.11.2 (isomorphisms/automorphisms) deleted — APPLIED
- Strike the video example — APPLIED
- "can make" → "a demand we can make" — APPLIED
- Strike social/follow-graph example — APPLIED
- "This section should be referenced in the main text / contains effects that break the symmetry" → referenced from §1.6.2 — APPLIED
- "Introduce wavelets — no good GNN solution yet" → sentence added — APPLIED
- "This should be condensed" (1.11.4) → three paragraphs condensed to one — APPLIED (read it)
- New: Appendix "The Weisfeiler–Lehman ceiling" (moved from §1.4.2) — APPLIED

## p.48-49 — Appendix 1.12
- Title → "Why a convolution is implied by translation equivariance" — APPLIED
- "→ direct reference" → §1.2.3 now cites the appendix at the convolution claim — APPLIED
- "Here we prove it"; "in higher dimension the mathematics are the same" — APPLIED
- "Operator T_s" → shift operator renamed S→T throughout — APPLIED
- "Aggregation of neighbours" + "This equation is not convincing / Message passing" + "We instead of the Reader" → Deep Sets paragraph reworked: aI + b11ᵀ/n read as "itself plus one shared aggregation over the others", named "message passing in embryo", locality bridge to SAGEConv added, "We have met this layer before" — APPLIED (read it)
