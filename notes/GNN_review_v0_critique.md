# Critical read of *GNN_astro_review_v0.pdf*

Two readers went through the chapter: a senior astrophysics graduate student who knows some ML (your target audience), and a professor of GNN/ML-in-astronomy (your likely referee). Their complaints differ, and both are recorded below. Page numbers refer to v0 of the PDF; `main.tex` line numbers are given where they help.

**The one-paragraph verdict.** The chapter has a genuinely distinctive voice and an excellent spine: geometry → graph → GNN → applications → practice → frontier is the right order, and §1.1–1.4 read like a polished lecture. The quality then drops in a way any referee will notice: the last figure appears on p. 18, so §1.5–§1.12 (twenty pages, ten of them main text) carry no figures at all; §1.5 flattens into citation lists; roughly a dozen sentences are broken mid-edit; two sections are empty stubs; and the PDF currently *ends* on an empty section header. The skeleton is strong — v1 needs flesh on the back half and a hard line-edit pass.

---

## 1. Ten highest-priority items

1. **Fix the ~12 garbled sentences** (§6.1 below) — several are unparseable ("GNNs can sort and stars and probe", "a GNN can suit any kind of thus", "makes in suboptimal"). These read as find-and-replace accidents and will dominate any reader's impression.
2. **Fill or cut the two stubs**: §1.6.3 *Pitfalls, diagnostics, and validation* (empty; your TODO list for it is exactly right) and §1.12 *Appendix: convolution proof* (empty header ends the document).
3. **Fix "Figure ??" on p. 20** (`\ref{fig:full_box_web_graph}`, main.tex:407 — the figure doesn't exist yet; this is your planned sketch-graphs figure).
4. **Add figures to the back half** — concrete proposals in §4. Minimum viable set: an applications "atlas" figure opening §1.5, one results plot reproduced with permission, a decision flowchart in §1.6, and the papers-per-year / sim-vs-real bar chart in §1.7.
5. **Replace or credit Fig 1.9** (`figures/workflow`): it is visually the Battaglia et al. (2018) GN-block diagram, its φ/ρ notation is never defined and clashes with your ψ/φ/⊕, and the caption claims no permission. Redraw in house style with your own notation.
6. **Add the missing canonical ML content**: equivariant message passing (EGNN/e3nn family), the Weisfeiler–Lehman expressivity ceiling, and over-squashing. A GNN review that leans on "expressivity" ten times but never mentions WL will get a sharp referee note (§3.1).
7. **Cite the architectures you name.** GCN, GAT, and GIN-style expressivity arguments are invoked without their source papers — and three of the sources are already sitting uncited in `ref.bib` (`Kipf2016_GCN_semisupervised`, `Velickovic2017_GAT_attention`, `Xu2018_GIN_expressiveness`); Scarselli et al. (2009) needs adding (§3.2).
8. **Soften five overclaims** that a referee will bounce: "more interpretable than other architectures" (abstract), "better than any other method", "no information discarded", "inherently robust to any changes in galaxy formation physics", "GNNs and Transformers … are equivalent" (§3.3).
9. **Standardise UK spelling**: the file currently mixes *optimize* (×8) with *optimise* (×3), *normalized* with *normalisation*, *organized* with *organised*, plus "Neighborhood Sampling" (heading, p. 17), "centering" (Summary), "Acknowledgments". Pick -ise and sweep (§6.3).
10. **Repair the bibliography**: nine entries render with no journal name ("Blanton et al. 2003, , 125, 2276") because the AAS journal macros are undefined; Rossi et al. (2020) has no identifier at all; one entry has two URLs glued together (§7.1).

---

## 2. The graduate student's read

This reader is the chapter's friend. The geometry-first framing lands; the force-law derivation of message passing (§1.4.1) is the best two paragraphs in the chapter for this audience; the social-network and physical-system triptychs for the three layer flavours are exactly the right pedagogy; the nested-boxes Fig 1.7 teaches the subset relation between layers at a glance; and the honesty of §1.6.5 (*When not to use a GNN*) builds trust. But this reader hits four walls.

**Wall 1: training is never explained.** The chapter tells the reader what a GNN *is* in loving detail and never says how one *learns*. There is no mention of a loss function, of end-to-end differentiability, of what supervision looks like for node- vs graph-level tasks, or of how long training takes on what hardware. One subsection (or even one page in §1.4) would do: the loss, the optimiser in one sentence, and — crucially for astronomers — **how to get error bars**. Uncertainty quantification is entirely absent: moment networks, Gaussian/mixture heads, normalising-flow heads on the graph embedding, and the handoff to simulation-based inference. SBI is name-dropped in §1.5.1 and §1.7 but never connected to the machinery. Your astro reader's first question after "it predicts Ωm" is "with what posterior?" — answer it once, properly.

**Wall 2: §1.5 is a wall of citations.** Most application paragraphs have the shape "X can be done with GNNs (cite, cite); Y is also done (cite)". The reader cannot *see* any one analysis. Pick one exemplar per subsection and walk it end-to-end in four sentences — data → graph construction (what is a node, an edge, the features) → architecture → headline number. E.g. for §1.5.1: CosmoGraphNet, catalogue → linking length → invariant edge features → Ωm to X%. For §1.5.2: Mangrove, tree → SAGEConv → stellar masses at simulation noise floor, 10⁴–10⁶× faster than the SAM. The remaining citations then organise naturally into a table (see §4, figure proposal F2).

**Wall 3: undefined jargon arrives before its definition.** "Inductive bias" is used from §1.2 but defined in §1.6.2; "expressivity" is leaned on repeatedly (§1.4.2, §1.6.1) and never defined; "amortises" (§1.5.5) will lose most astronomers; `SAGEConv` appears in §1.6.1 as if introduced, but its defining equation appeared *anonymously* in §1.4.1 ("v′ = W₁v + W₂ mean…") — connect the two and the reader feels clever rather than lost. Consider a half-page glossary box (Springer lecture-notes style) or at minimum first-use definitions.
**Also notation:** in Eq. (1.4)–(1.6), ⟨N_E⟩ is "edges per node" while N_E is total edges — the same symbol denotes two quantities; use mean degree ⟨k⟩. In §1.3.1 nodes carry **v**ᵢ, but from §1.4 onward they carry **x**ᵢ (Fig 1.4 also uses xᵢ) — unify. In §1.4.5, "4·N-dimensional" should be 4·N_lat.

**Wall 4: the practical questions of someone about to start.** Where do I get training data (CAMELS, Quijote, IllustrisTNG, EAGLE, Gaia mocks)? Which library (PyG vs DGL vs jraph; GraphNeT for neutrino work; e3nn for equivariance)? How do I split graphs without leakage (a train/test split that cuts across one connected cosmic-web graph is *not* independent — this belongs in §1.6.3)? How many graphs is enough? A half-page "data and tooling" table in §1.8 would make the chapter the standard on-ramp. The tutorials themselves are a great asset — but `tinyurl.com` links in a Springer volume will rot and look unserious; use the GitHub URL + a Zenodo DOI, and name the repo in the text.

---

## 3. The professor's audit

### 3.1 Canonical content that is missing

- **Equivariant message passing.** This is the largest content gap. Astro signals are drenched in rotational structure — velocities, shears, spins, intrinsic alignments — and the chapter's own Fig 1.1 promises "O(3)-equivariant" handling in the halos row, yet the equivariant-GNN literature (EGNN/Satorras et al. 2021; Tensor Field Networks; SE(3)-Transformer; e3nn/NequIP; SEGNN) never appears. The two astro results you lean on hardest actually *live* on this axis: de Santi et al.'s robustness uses invariant velocity moduli, and Jagvaral et al.'s intrinsic alignments use E(3) equivariance. Add a subsection to §1.4 (e.g. "1.4.x Equivariant message passing: when rotations matter") covering the practical trilemma: equivariant architecture vs invariant hand-built edge features (the CosmoGraphNet route) vs data augmentation — cost, guarantees, and when each wins. This also gives §1.6.2 a concrete spine.
- **Expressivity has a theory and the chapter needs one paragraph of it.** Message passing is bounded by the 1-Weisfeiler–Lehman test (Xu et al. 2019; Morris et al. 2019): there exist non-isomorphic graphs no MPNN can distinguish. This matters practically — it is *why* sum aggregation beats mean/max in distinguishing multisets (§1.6.1 asserts the sum preference as folklore; WL is its justification), and it motivates positional/structural encodings and graph transformers. One paragraph plus two citations converts "more expressive" from a vibe into a claim.
- **Over-squashing.** §1.6.5 covers oversmoothing but not its sibling: long-range information crushed through bottleneck edges (Alon & Yahav 2021; Topping et al. 2022). You *already cite* a paper titled "Oversmoothing, Oversquashing…" (Arnaiz-Rodríguez & Errica 2026) and discuss multi-scale/topological GNNs as the fix for long-range coupling (§1.5.1, §1.7) without ever naming the disease. Bonus: your chapter opens with Euler's bridges of Königsberg (footnote 2) — over-squashing is literally too much traffic over too few bridges. That callback writes itself.
- **The spectral lineage.** GCN descends from spectral graph convolution (Bruna 2014; Defferrard 2016; Kipf & Welling 2017). Fig 1.10 has a leaf labelled "GCN — Spectral" citing *Solin et al. 2025* (?), which is not a spectral-GNN origin. Two sentences in §1.4.2 and correct leaf citations suffice; the Laplacian tease in Fig 1.4's caption ("the spectrum of A … reveals communities, diffusion and scale") currently dangles with no follow-up.
- **Positioning among reviews.** No prior review is acknowledged — neither ML-in-astro surveys (e.g. Huertas-Company & Lanusse 2023; Smith & Geach 2023) nor GNN surveys (Wu et al. 2020; Hamilton's book; Zhou et al. 2018 appears only inside a figure caption). One intro paragraph: what exists, what this chapter adds (the geometry-first pedagogy + astro best practices — a real gap, so claim it).

### 3.2 Missing canonical citations

The chapter uses PyG layer names as if they were citations. Never cited in the text: **Kipf & Welling** (GCN — named in §1.4.2 and §1.6.1), **Veličković et al. 2018** (GAT — named repeatedly; only the 2022/2023 essays are cited), **Xu et al.** (GIN/WL). The good news: all three already sit in your `ref.bib` uncited (`Kipf2016_GCN_semisupervised`, `Velickovic2017_GAT_attention`, `Xu2018_GIN_expressiveness`) — one `\citep` each. Genuinely absent and worth adding: **Scarselli et al. 2009** (+ Gori 2005; Sperduti & Starita 1997 — you say "recursive and recurrent precursors reach back to the late 1990s" (p. 2) with no citation), **Battaglia et al. 2016** (interaction networks — §1.5.4 credits the concept to the 2018 paper), **Alon & Yahav 2021** (over-squashing), and the Distill "Gentle Introduction" (Sánchez-Lengeling et al. 2021) which §1.8 recommends by name but never references.

### 3.3 Overclaims to soften (each will draw a referee comment)

- **Abstract:** "GNNs' physically intuitive workings also render them more interpretable than other architectures." As stated, false-by-counterexample (linear models; symbolic regression). You have the honest version already in §1.5.4 — vector messages that read back as forces. Say *that*: "whose learned messages can be read back as physical laws".
- **p. 19:** "constrain Ωm and σ8 better than any other method" → "better than the standard summary statistics, on like-for-like simulated catalogues". Field-level CNN/SBI competitors exist and the comparison is simulation-bound so far.
- **p. 19:** "the graph framing enables optimal field-level inference, with no information discarded" — the catalogue is itself a lossy compression (mass cut, linking length, halo finder). "Discards far less" is defensible; "no information" is not.
- **p. 19:** "inherently robust to any changes in galaxy formation physics" — de Santi et al. show robustness across specific subgrid suites with carefully invariantised inputs. Drop "inherently" and "any".
- **p. 21:** "GNNs and Transformers on sequences the same way and thus are equivalent" — besides the missing verb, the claim is too strong. The precise statement (Veličković 2023): a transformer is an attentional GNN on the complete graph, with positional encodings breaking permutation symmetry. Table 1.1's transformer row (symmetry: Σₙ) deserves the same caveat as a footnote — the main text already makes it (§1.2.3), the table contradicts it.
- **p. 22:** "The same machinery predicts the stability of the compact planetary system (Cranmer et al., 2021c)" — verify: the PNAS 2021 stability paper is, to my knowledge, a Bayesian neural network over orbital-element time series, not an interaction network. If so, either drop or reattribute.
- **p. 17, footnote 6:** GraphSAGE "developed to train on the full graph of all Twitter users" — wrong provenance. The paper's experiments were citation graphs, Reddit, and PPI; the industrial-scale sibling was PinSAGE at Pinterest. 
- **p. 24:** "Message-passing is much more expressive and thus well-suited for all tasks" — contradicts the section's own thesis (and §1.6.5). You mean "the most expressive, hence the safest default when compute allows" — but you then argue the opposite for SAGEConv. Rewrite the paragraph's logic in one direction.

### 3.4 Balance

The applications survey is strongest exactly where the author's own work sits (merger trees, environment, IceCube, fibre assignment) and thinnest elsewhere: transients/time-domain (only an LSST aside in §1.7), gravitational waves, exoplanets (one dynamics citation), ISM/molecular clouds, solar physics. Either add a "further afield" paragraph or scope the chapter explicitly ("we focus on structure formation and instrumentation…") in §1.5's preamble. Related: eight-ish self-citations is defensible for an invited chapter, but each subsection should name at least one non-self exemplar first where possible — §1.5.2 currently opens and closes on your own line of work.

### 3.5 What §1.6.3 should contain (your TODO list, expanded)

Your comment block (main.tex:468) already names the right topics. Concretely, as a checklist the reader can run: (i) *test the claimed symmetry* — permute/rotate inputs and measure output drift (catches silent symmetry breaking via feature engineering); (ii) *baseline ladder* — MLP on hand summaries → Deep Set → GNN, so the graph must pay rent (this operationalises §1.6.4's "the GNN must earn its place"); (iii) *adjacency sensitivity* — sweep the linking length, report the curve, not the best point (connects to Wu & Jespersen); (iv) *leakage-aware splits* — split by simulation box/connected component, never by node; (v) *oversmoothing diagnostic* — performance and feature variance vs depth; (vi) *calibration* — coverage tests in the SBI spirit (Thiele 2026 is your intended cite); (vii) *sim-to-real gates* — train A, test B across subgrid suites before touching data. Each item is one to three sentences plus a citation; the section becomes the most-photocopied page of the chapter.

---

## 4. Figures — audit and proposals

Current census: Figs 1.1–1.3 (§1.2), 1.4–1.6 (§1.3), 1.7–1.10 (§1.4), Table 1.1 — everything lives on pp. 4–18. After p. 18: nothing. §1.5 (5 pages), §1.6 (3.5), §1.7 (2), §1.8–1.9 (1.5), appendices (4) are unillustrated. Proposals, in priority order:

**F1. §1.5 opener — "An atlas of astrophysical graphs."** One full-page multi-panel figure, one panel per subsection: cosmic-web proximity graph; merger tree; Milky Way stream/phase-space graph; planetary-system interaction graph; fibre conflict graph; IceCube sensor graph. Each panel labelled with the same triple as Fig 1.1 — domain / signal / model (+ node, edge definition). This makes §1.5 skimmable, rhymes with Fig 1.1 (the chapter's thesis figure), and you already own most of the assets (Figs 1.5, 1.6, the animations cache). *Highest value per hour of work.*

**F2. A results table-figure for §1.5.** The survey's citations organised as a table: subfield × task × graph construction × layer type × real-data? × representative reference. One glance answers "has anyone done X?" — the question every grad student brings to a review. (Could be a `table*` rather than a figure; either way it breaks the citation-wall problem of §2.)

**F3. One or two reproduced headline results (with permission).** A review with zero quantitative panels undersells its own evidence. Candidates: truth-vs-predicted Ωm from CosmoGraphNet (Villanueva-Domingo & Villaescusa-Navarro 2022); Mangrove galaxy properties vs SAM at fixed tree; IceCube angular-resolution GNN vs likelihood. One composite figure, two or three panels.

**F4. §1.6 — the decision flowchart.** The whole of Best Practices begs to be one diagram: *Data on a grid/sequence? → CNN/RNN/transformer. Irregular? → edges known from physics? → sparse or complete? → messages need edge/receiver info? → SAGEConv / GAT / full MP; depth ≤ 3; sum aggregation first…* This becomes the page people pin above their desks, and it is the natural place to encode §1.6.1's advice, which currently lives in a dense paragraph. (Pairs with F1 the way Fig 1.1 pairs with Table 1.1.)

**F5. §1.7 — the sim-to-real gap, quantified.** You already did the counting ("one in four includes real observations; one in six beyond instrumentation"): plot it. Stacked bars of astro-GNN papers per year, coloured by subfield, hatched by simulation-only vs real data. It is the only figure in the literature that would be *of* this review rather than reproduced by it, it substantiates the frontier argument, and it is cheap (you have the bibliography).

**F6. §1.6.2/§1.6.3 — a toy experiment.** Same task, three models: correct graph, wrong graph (Bechler-Speicher), no graph (Deep Set); learning curves vs training-set size showing the data-efficiency gap and the wrong-prior trap. Generate it from the companion notebook so it doubles as tutorial content — the figure then advertises §1.8.

**F7. §1.6.5 — oversmoothing/-squashing cartoon.** Node colours homogenising with depth; a bottleneck edge choking long-range information (Königsberg callback). Half-width, schematic, house style.

**F8. Restyle Fig 1.5 (merger tree).** It reads as a raw matplotlib export amid hand-crafted neighbours: default fonts, a redshift axis listing ~25 tick labels, no annotation. Match the house style (CM fonts, config block per your plotting conventions), thin the ticks, annotate "main branch", "merger", "leaf", and consider log-spaced redshift. Caption should tell the reader what to see, not just what it is.

**F9. Replace Fig 1.9** (see item 5 of the top-ten): redraw the E→V→U composition in your own visual language and notation (ψᵉ, ψᵛ, ψᵘ with ⊕), or formally obtain and state permission for the Battaglia block. Also fix the notation mismatch either way — the text explains φ-then-ρ composition with symbols the figure doesn't use.

**F10. Fig 1.10 legibility.** Leaf citations are ~4 pt and unreadable in print; enlarge, verify each leaf's citation (the "GCN — Spectral — Solin et al. 2025" leaf looks wrong; "Multi-Scale GNN — Lino et al. 2021" is fluid dynamics, not astro — fine if the column means "representative reference" but the caption says "astro use"), and align the palette with Figs 1.1/1.7.

**F11. Appendix 1.11.** A commutative-diagram square for equivariance (x → ρ(g)x; f down both sides) and a three-panel deformation-stability cartoon (exact symmetry / small warp / large warp). Cheap, and the appendix currently reads as text-only theory.

Also: Fig 1.6's caption should name the simulation and box size; Fig 1.7's top-to-bottom order (MP → conv) is the reverse of Eqs (1.1)–(1.3) (conv → MP) — flip one so they scan in parallel.

---

## 5. Missing sections and structure

- **§1.6.3** — write it (§3.5). Highest-leverage unwritten page in the chapter.
- **§1.12** — write the convolution ⇔ translation-equivariance derivation (with the Deep Sets characterisation as companion, per your TODO), or cut the header for v1 and reinstate later. An empty section must not be the last thing in the PDF.
- **"Equivariant message passing"** subsection in §1.4 (§3.1).
- **"What a GNN cannot see"** — a short subsection (or box) on WL expressivity + oversmoothing + over-squashing, unifying content currently scattered/absent (§3.1). Placing all three pathologies together is a pedagogical win no existing astro review has.
- **"From point estimate to posterior"** — losses and uncertainty quantification, bridging §1.4 to the SBI mentions (§2, Wall 1).
- **Data & software half-page** in §1.8 (§2, Wall 4).
- **Intro positioning paragraph** (§3.1, last bullet).
- Small: §1.11's title duplicates its first subsection's title nearly verbatim; retitle the subsection (e.g. "Groups and their actions"). The Helvétius quote appears three times (abstract — unattributed, §1.2 epigraph, §1.4.7 paraphrase); twice is a leitmotif, three times risks dilution — consider cutting the abstract instance or making the echo explicit ("once more…" already does this in §1.4.7, which is the charming one).
- Given the draft is shorter than intended, note that the additions above (§1.6.3, equivariance, expressivity/UQ subsections, figures F1–F5, Appendix B) organically add ~8–12 pages without padding.

---

## 6. Language

### 6.1 Broken/garbled sentences — must fix

| Where | Current | Problem |
|---|---|---|
| Fig 1.1 caption (p. 4; tex:99) | "the *signal* that exists upon it, and the one of the *model*" | → "and that of the *model*" |
| Fig 1.1 caption | "The first row represents the rows fall from the abstract to two concrete cases." | Sentence collapsed mid-edit |
| Fig 1.1 caption | "As a minimum, it must not outlaw the true solution, at best, it matches it exactly." | Comma splice; "At a minimum … ; at best …" |
| Fig 1.2 caption (p. 5; tex:113) | "meaning that that they transform" | Double "that" |
| Fig 1.2 caption | "Both are symmetries, but the distinction…" | Invariance/equivariance are *responses to* a symmetry, not symmetries |
| p. 12 (tex:285) | "inherently similar to both communication in social networks as well as physical system" | "both … as well as" + number; → "to communication in a social network and to interaction in a physical system" |
| p. 12 (tex:287) | "The way that others may choose communicate" | Missing "to" |
| p. 14 (tex:292) | "people around us changing expressing their a political opinion" | Collapsed |
| p. 14 ×2 | "without regards to" | → "without regard to" |
| Fig 1.8 caption (p. 15) | "across the all possible tasks" | Stray "the" |
| p. 15 (tex:308) | "The former is achieved with …, and the latter being achieved through …" (+ no full stop before "(see §1.4.5)") | Parallelism + punctuation |
| p. 16 | "Richer, distribution-aware pooling function are rarer" | → functions |
| p. 17 heading | "Neighborhood Sampling" | UK: Neighbourhood |
| p. 19 | "inference of cosmological parameter" | → parameters |
| p. 20 (tex:407) | "Figure ??" | Undefined `fig:full_box_web_graph` |
| p. 20 | "a GNN inferring galaxy properties … achieve precision" | → achieves |
| p. 21 (tex:418) | "GNNs can sort and stars and probe the dark matter substructure" | Collapsed; → "sort stars and probe" |
| p. 21 | "Different clusters have different number of observed points … necessitating the flexibility" | → numbers; comma before "necessitating" (or recast to kill the -ing) |
| p. 21 | "Chemical and kinematic tagging, a method to reunite stars with a common origin can be recast" | Missing comma after "origin" |
| p. 21 | "This use shows how GNNs and Transformers on sequences the same way and thus are equivalent" | Verb missing; claim too strong (§3.3) |
| p. 22 | "Each of these have been widely applied" | → has |
| p. 22 | "beyond reach as for any reasonable modern survey" | Stray "as" |
| p. 22 | "awaits its turn for being applied" | → "to be applied" |
| p. 23 | "GNNs reconstruct the IceCube event" | → "IceCube events" |
| p. 23 | "the radio interferometer can also be solved" | Instruments aren't solved; → "radio-interferometric calibration yields to the same treatment" |
| p. 24 (tex:451) | "makes in suboptimal for many tasks" | → "makes it" |
| p. 24 | "we have found them to be unstable" (antecedent: *a GAT*) | → it |
| p. 24 | "The maximum functions is often a good second choice" | → "The maximum function is" |
| p. 24 | "physics.\footnote{…}." | Double full stop |
| p. 24 | "offering very little computational efficiency relative to the full message-passing, but with significantly limited expressivity" | Logic inverted as written; → "saving little compute relative to full message passing while giving up much of its expressivity" |
| p. 24 (§1.6.2) | "preferences that biases our learning algorithms" | → bias |
| p. 24 | "can be incredibly helpful for helping our learning algorithm" | helpful-for-helping |
| p. 25 | "optimization starting from a soft inductive biases" | Number + spelling; recast sentence (and verify Wilson 2025 supports the annealed-penalty claim) |
| p. 25 (§1.6.4) | "Beware two red flags: the claimed invariance or equivariance the model does not hold, and…" | Garden path; → "an invariance or equivariance claimed but not held" |
| p. 25 (tex:481) | "While a GNN can suit any kind of thus" | → "any kind of task" |
| p. 27 | "to be developed further and developed well" | Doubling |
| p. 27 (§1.8) | "inductive biases … changes the performance and optimization" | → change; optimisation |
| p. 28 | "ready for broadly applying GNNs to real data and improve the return" | → "ready to apply … and to improve" |
| p. 28 | "our hard earned observational data" | hard-earned |
| p. 28 | "requiring the implementation of these advanced methods" | Dangling -ing; → "and so demands these advanced methods" |
| p. 28–29 | "grateful to many useful and illuminating conversations … had with" | → "grateful for … conversations with" |
| p. 38 | "matching the physics of its inputs.(See … e.g.on wavelets" | Missing spaces ×2 |

Also: "3rd" → "third" (p. 14); "at this moment" → "at present" (p. 19); "Due to the wide applicability and significant upside" → recast ("upside" is trading-floor register, p. 20); "applied observationally with reasonable success" (p. 21) — faint praise; give the number or drop the hedge; abstract, first sentence: "will advance not through an explosion in data but in *relations*" — repeat the preposition ("but through one in relations") to keep the parallelism.

### 6.2 Voice and Wheeler-compliance

§§1.1–1.4 keep the Wheeler register admirably (present tense, active, key word early: "The history of physics is a story of geometry", "Point a telescope towards the sky…"). §1.5 is where the voice flattens: "is captured … is captured" (p. 20, twice in one sentence), "is usually done through", "are being developed", "is also captured through the use of", "can also be inferred", "can also be used". The applications section has roughly two dozen passive/is-constructions, more than the rest of the chapter combined — and it is also the section with no figures; the reader feels the sag twice over. A pass converting even half to Wheeler-active would restore the register. Two worked examples:

- p. 20: "The temporal dimension is captured in **merger tree**s, and the spatial dimension is captured in local neighbourhood graphs." → "The **merger tree** carries the bond through time; the local neighbourhood graph carries it through space."
- p. 19: "Inferring cosmological parameters from this enormous point cloud is usually done through N-point correlation functions that heavily compress the information content." → "To infer cosmological parameters from this enormous point cloud, the standard analysis compresses it into N-point correlation functions — and throws most of the information away."

Section openers: §1.5.5's "Point a telescope towards the sky, and the combinatorial and geometric trouble starts before the first photon" is the best sentence in the applications survey. Give §1.5.1–1.5.4 openers of the same species (a command or a scene, not a topic sentence): e.g. §1.5.2 could open on the tree rather than on "The bond … is deep and extends in both time and space."

Metaphor opportunities (flagging per your standing request — take or leave, and tell me if any misses your intent):

- **Over-squashing as Königsberg traffic** (if you add it per §3.1): "too many messages over too few bridges" — closes the loop with footnote 2's Euler opening. I am confident this one captures the mechanism.
- **Oversmoothing as thermalisation** (§1.6.5): repeated neighbourhood averaging is a diffusion step; too many rounds and the features reach thermal equilibrium — every node the same temperature, individuality boiled away. Physically exact (graph convolution ↔ heat kernel), and your audience will feel it.
- **The adjacency as map, not territory** (§1.3.2): "An adjacency is a map, not the territory: drawn to a purpose, and wrong only when trusted blindly." This would sharpen the section's thesis sentence ("the adjacency matrix … makes a design choice, not a fixed input"). Less sure this earns its place — your call.
- p. 8's "To learn the latent structure rewards the ambition but, absent physical priors, defeats it" — the intended paradox doesn't quite parse; if you want the trap image, something like "learning the wiring tempts the ambitious and then defeats them: the space of adjacencies runs vast…" keeps it.

Tone judgement calls, flagged not prescribed: the grass-fed em-dash footnote (p. 1) is funny, but it is the chapter's *first* footnote and sits mid-sentence between two em-dashes that typeset oddly ("— from first principles —¹ that"); "With great power comes great responsibility" (§1.6.2) is the one cliché in an otherwise fresh chapter; "no one can pass every message everywhere all at once" (§1.4.6) — keep, it's earning its wink. Footnote 11 "said countless times by Professor Peter Melchior" — capitalise "Said".

### 6.3 UK-English sweep

Counts in `main.tex`: optimiz- ×8 vs optimis- ×3; normaliz- ×3 vs normalis- ×1; organiz- ×3 (two of them "organizers" in the Acknowledgements) vs organis- ×4; "Neighborhood" (heading, tex:363); "centering" (prose, Summary — → centring); "Acknowledgments" (heading, tex:531 — → Acknowledgements); "inferrable" → "inferable". You already have the UK forms *amortises*, *distil*, *whilst*, *modelling*, *neighbourhood* (×9) — so standardise on -ise throughout. Watch also the appendix's spaced en-dashes ("– e.g. the symmetries") vs the main text's em-dashes — one convention, everywhere (the em-dash footnote raises the stakes on getting this right).

---

## 7. Mechanics

### 7.1 Bibliography

- **Missing journal names** (AAS macros like `\aj`, `\mnras`, `\pasj`, `\aap`, `\jcap` undefined under svmult, so they render as ", ,"): Blanton 2003, Gunn 2006, York 2000, Jin 2024, Takada 2014, Tempel 2020, DESI Collaboration 2022, Krishnaraj 2026, Krywonos 2026. Fix once in the preamble (`\newcommand{\aj}{AJ}` etc.) or expand the fields in `ref.bib`.
- **Berni et al. 2025**: journal renders as "Astronomy Astrophysics (AA)" — mangled ampersand.
- **Rossi et al. 2020**: no arXiv number, no DOI, nothing (it's arXiv:2006.10637 if this is Temporal Graph Networks).
- **Iqbal et al. 2025**: "arXiv e-prints." with no number, URL only.
- **Jespersen et al. 2021**: two URLs concatenated ("…neutrino_ml/.https://…").
- **"Jespersen, C. K., et al. 2026, in preparation"**: Springer typically disallows; swap for an arXiv ID by submission or cut.
- Style consistency: some conference entries carry arXiv URLs, some DOIs, some neither (Vignac 2023, Krizhevsky 2012 have nothing; Hoogeboom vs Jain format the same venue differently).

### 7.2 LaTeX/typesetting

- Appendix 1.11: "Group actions and representations." and "Invariance vs. equivariance." render as orphaned plain-text lines with blank space around them — broken `\paragraph`-style headings under svmult; use `\runinhead{}` (svmult's run-in heading) or `\subsubsection`.
- §1.4.5 heading "In- and equi-variant outputs through aggregations/poolings" — hyphen-chopped words in a heading; → "Invariant and equivariant outputs through pooling".
- Footnote 1 sits directly after an em-dash mid-clause; move the marker after "principles" or to the sentence end.
- Fig 1.5 is `[width=0.7\textwidth]` and centred oddly small relative to the full-bleed figures around it; Figs 1.1/1.4/1.6/1.7 overflow margins (1.2–1.45× linewidth) — Springer production may push back; at minimum make overflow consistent.
- Hyperref colours are default bright blue/red; Springer volumes usually want muted or black links.
- "§ 1.4.1 literal" (p. 22) — check the spacing of `\S~`; several "§ " vs "§" inconsistencies.

---

## 8. What is already strong — keep and protect

The three-geometries thesis and Fig 1.1 (the chapter in one page). The force-law reading of message passing, and its punchline that learned messages read back as forces. Fig 1.3's permutation figure — the ΩM,0 invariant vs M⋆ equivariant contrast is the clearest such illustration I have seen (genuinely better than the ones in the ML literature). Fig 1.7's nested boxes encoding the subset relation between layer flavours. The four-moves taxonomy of graph construction (§1.3.2). The three physical realisations of the three layers (merger tree / line absorption / tidal interaction, §1.4.2) — this is the chapter's most original pedagogy; consider promoting it to a small table or figure. §1.5.5 end to end — motivated, concrete, honest about NP-hardness, and footnote 9 (the social contract no optimiser adjudicates) is quietly excellent. The quantified sim-vs-real gap in §1.7 — a real finding of this review; give it its figure (F5). The closing couplet ("The Universe speaks its physics in geometry, objects, and relations. The GNN is how we faithfully listen.") — earned.

---

*Suggested triage: (1) garbled sentences + stubs + Figure ?? (a day); (2) bibliography + UK sweep (half a day, mostly mechanical); (3) figures F1, F4, F5, F8 (the high-yield set); (4) new content — §1.6.3, equivariance, expressivity/UQ (the real writing); (5) overclaim softening + citation additions alongside.*

---

## 9. Addendum: comparison against the NASA STIG textbook chapter (Tri Nguyen, *Deep Learning for Astrophysics*, Ch. 8)

Scope first, so the comparison is fair: Nguyen's chapter is a hands-on tutorial built around two notebooks (transductive node classification on Cora; inductive graph regression of dark-matter subhalo mass and impact velocity from perturbed stellar streams, StreamSculptor simulations of Nibauer et al. 2024). Your chapter is a review with an order of magnitude more conceptual and bibliographic ground. Most differences are scope, not gaps — but a handful are real gaps, and several independently confirm items already in this critique.

### 9.1 Things v0 genuinely misses (in priority order)

1. **The transductive vs inductive distinction — the one real conceptual miss.** Nguyen structures his whole chapter around it; v0 never mentions it (`grep` confirms zero occurrences — "inductive *bias*" appears throughout, which makes the absence of inductive *learning* easier to overlook and slightly confusing for a reader who meets both terms elsewhere). The distinction is not pedantry: transductive = train and predict within one fixed graph (Cora; realistic astro analogue — label propagation across one observed catalogue, e.g. Gaia stars with partial spectroscopic follow-up, exactly the scenario Nguyen uses as motivation); inductive = train on many graphs, deploy on unseen ones (nearly all astro-GNN work: merger trees, cosmic-web boxes, IceCube events). One paragraph in §1.4.3 naming the axis, noting that astrophysics lives almost entirely on the inductive side (worth stating as a *finding* of the survey), and flagging the split-design consequence — transductive settings make train/test leakage through edges the default, which feeds directly into the §1.6.3 diagnostics — closes it.
2. **The GCN normalisation, and the matrix form of propagation.** Nguyen gives H^(l+1) = σ(D̂^(-1/2) Â D̂^(-1/2) H^(l) W^(l)) with the self-loop trick Â = A + I and the degree-normalisation rationale (an unnormalised sum lets a high-degree node dominate training). Your Eq. (1.1) keeps c_vu abstract and never says what the canonical c_vu *is*. Adding the matrix form (a footnote or three sentences) pays twice: it is the form every reader will meet in code, and it is the bridge to the spectral view — A**X** appears in your Fig 1.4 caption already.
3. **Named graph constructions: k-NN vs radius graph.** Nguyen names both as *the* two standard point-cloud→graph moves (PyG `KNNGraph`/`RadiusGraph`). §1.3.2's four moves cover the design space at a higher level, but never name these workhorse constructions, and the physics-flavoured trade-off between them is exactly your kind of point: the radius (linking-length) graph fixes a physical scale and lets degree trace density; the k-NN graph fixes degree and lets the scale float — two different inductive biases, and the linking-length sensitivity you discuss in §1.5.2 is the empirical face of that choice. Two or three sentences in §1.3.2.
4. **Size generalisation, stated plainly.** Nguyen makes a point of subsampling streams to 90–110 nodes precisely to show that shared local weights make a GNN indifferent to graph size — train at one N, deploy at another. v0 relies on this property implicitly everywhere and never states it. One sentence in §1.4.1 (it is one of the three or four headline selling points for survey-scale astronomy).
5. **The stellar-stream/subhalo use case itself.** §1.5.3 covers streams as *tracers to classify* (Berni et al.) and dwarf-galaxy profiles (Nguyen et al.), but not the stream-perturbation inverse problem — inferring the mass and velocity of an impacting subhalo from gaps and spurs — which is the STIG chapter's flagship example and a very natural dark-matter-physics hook. One sentence plus a citation (and note the mass–velocity degeneracy Nguyen flags, which motivates the posterior/SBI machinery of item 7 below).
6. **HEALPix-as-graph.** A single clause opportunity: the pixelised sphere is also a graph (nodes = pixels, edges = adjacency) — a practical alternative to spherical CNNs in Table 1.1's sphere row, and the trick behind graph-based weather/climate emulators. Optional but cheap.

### 9.2 Where the STIG chapter independently confirms this critique

- **Over-squashing**: Nguyen names it alongside over-smoothing in a *first-contact tutorial* ("Caveats" subsection); a review cannot omit it (§3.1 of this critique stands, with more force).
- **Spectral view**: he gives the Laplacian a dedicated subsection (L = D − A, smoothness, eigenmodes as graph frequencies); your Fig 1.4 caption teases exactly this and the text never follows through (§3.1).
- **Losses and uncertainty**: his closing caveat is nearly verbatim the critique's Wall 1 — MSE gives no uncertainties; use SBI or BNNs, with the GNN as the embedding network. (His book's Ch. 14 is SBI; your chapter has the same natural handoff to make.)
- **Canonical citations**: his Further Reading is precisely the four papers flagged as uncited in v0 — Kipf & Welling, Veličković et al. 2018, Xu et al. 2019, Hamilton et al. 2017 (§3.2).
- **Interpretability**: he writes that GNN interpretability is "notoriously tricky" — gradients do not map back to inputs the way CNN saliency does; one falls back on ablations or pooled-embedding inspection. This is the *opposite* framing to your abstract's "more interpretable than other architectures", from a sibling textbook. It does not make your claim wrong — the symbolic-regression-of-messages result is a real and strong form of interpretability — but it confirms the claim must be stated in that specific sense, not as a blanket comparative (§3.3, first bullet). His embedding-inspection remark (t-SNE of node latents) is also worth adopting as a diagnostic in §1.6.3.
- **Depth guidance**: his "roughly 3–5 layers" vs your "two or three" — same ballpark; consider "two to five" so the numbers in circulation don't collide.

### 9.3 What v0 has that the STIG chapter doesn't (no action; reassurance)

The geometric blueprint and the derivation of architectures from symmetry; the graph-as-design-choice thesis and the four moves; full message passing with edge features and the E/V/U composed layer (Nguyen stops at GAT and states it needs no edge features); aggregator design and pooling theory; sampling and complexity scaling; the entire application survey; best practices, when-not-to-use, and the sim-to-real frontier; the appendices. Notably, Nguyen's conference-collaborator analogy is essentially your social-communication analogy — but he has no counterpart to your physics triptych (merger tree / line absorption / tidal interaction), which remains the most distinctive pedagogy on offer in either text. Your review also does what his tutorial cannot: it tells the reader *which* layer to reach for and why. The comparison overall flatters v0 — the gaps above are additive, not structural.

*(Working note: the chapter text used for this comparison is saved at `notes/TriNguyen_ch8_extracted.txt`, extracted from the saved page `TriNguyen.html`; the live source is `deeplearning4astro.com/content/Chapter08.ipynb`.)*

### 9.4 Decisions (CKJ, 11 Aug 2026) — the plan of record for these items

- **Transductive vs inductive: in.** A paragraph in §1.4.3, plus the leakage consequence in §1.6.3. At first use, explicitly disentangle *inductive learning* from *inductive bias* — the chapter uses "inductive bias" throughout, so the collision must be defused in one sentence.
- **Equation budget stays low; adjacency normalisation discussed in words, critically.** CKJ's take: degree normalisation often does *not* serve physics — and the argument writes itself. In a social graph, degree is a nuisance (the celebrity effect) and D̂^(−1/2)ÂD̂^(−1/2) divides it away; in a proximity graph, degree *is* local density — often the very signal the linking length was chosen to record. The canonical normalisation is thus itself an inductive bias, imported from a domain where popularity is noise. This unifies with the existing mean-vs-sum advice (§1.6.1 + footnote 10): mean is the normalised aggregator, sum the unnormalised one — the same normalise-or-not choice at two levels, and the physics answer is usually "density is data; don't divide it away".
- **Size generalisation moves to the aggregation discussion (§1.4.5/§1.6.1), not §1.4.1.** The honest statement: shared local weights make the GNN run at any N, but *comparability* across very different node counts is an aggregator property — mean gives invariance to N when N varies for non-physical reasons (subsampling, survey depth, fibre limits); sum retains N when the count itself is physics (richness). The exception clarifies the rule above.
- **Graph creation: CKJ already holds a note to expand §1.3.2.** The ladder of standard constructions, each with its inductive bias: k-NN (fixed degree, density-adaptive scale) · radius/linking length (fixed physical scale, density-tracking degree) · Delaunay (parameter-free, tessellation-defined adjacency — as used by Kololgi et al. 2025) · complete · learned. Candidate for a small table or half-width figure.
- **Over-squashing: in, but folded into one paragraph with oversmoothing under one metaphor (thermalisation), not presented as a second disease.** Message passing is a step of diffusion — heat flow on the graph. Run too many rounds through too well-connected a graph and the system thermalises: every node relaxes to the same temperature, individuality boils away (oversmoothing). Choke the flow through a bottleneck and the opposite failure appears: distant regions never exchange heat at all (over-squashing). One diffusion picture, two opposite failure modes — which is exactly why cures trade off (densifying/rewiring to fix squashing accelerates smoothing, and vice versa; Arnaiz-Rodríguez & Errica 2026 already in ref.bib covers both, and the formal trade-off literature can be cited if wanted). Optional garnish: the bottleneck is Königsberg with too few bridges, closing the loop with footnote 2.
- **UQ/SBI: mention only.** One paragraph — MSE-style training yields point estimates; posteriors come from bolting the GNN in as the embedding network of an SBI pipeline — then hand off with a cross-reference (Thiele 2026b, same series). No methods detail in this chapter.
- **Laplacian: brief, and not in the main flow.** CKJ finds spectral intros less helpful than the message-passing one. Two or three sentences suffice, and the natural home is Appendix 1.11.4, which already speaks Fourier: one line noting that the Laplacian's eigenvectors *are* the graph's Fourier modes closes the tease in Fig 1.4's caption at zero main-text cost.
- **Interpretability: keep the claim, reframe it comparatively.** All deep-learning interpretability is hard; the honest version of the claim is that *among* deep architectures the GNN comes closest to showing its work — its learned messages read back as forces (symbolic regression makes this literal). Adjust the abstract accordingly, echo in §1.5.4, and let ablations + pooled-embedding inspection stand as the practical toolbox in §1.6.3.
