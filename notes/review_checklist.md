# Review checklist — morning of 12 Aug 2026

Everything that changed in round 1 (and 1b), everything I authored in your voice, every judgement call I made on your behalf, and everything still waiting on your word. Ordered so the blocking items come first. Nothing here is too small to strike through quickly.

---

## A. Three decisions that block my next round

- [ ] **The p. 24 one-direction rewrite (your 3.3 "I don't understand this criticism").** The paragraph currently says SAGEConv's limited expressivity "makes it suboptimal for many tasks", then "Message-passing is much more expressive and thus well-suited for all tasks", then advises reserving message passing and defaulting to SAGEConv. The middle sentence argues against the section's own advice. Proposed replacement: *"Message-passing is the most expressive of the three and so, when compute and data allow, a safe default for any task. The same expressivity makes it slow to optimise, so reserve it for when messages must depend on edge or receiving-node features, and let SAGEConv serve when they need not."* Yes, no, or your own wording.
- [ ] **The §1.6.3 plan.** Seven items proposed: (i) test the claimed symmetry by permuting/rotating inputs; (ii) baseline ladder (MLP on summaries → Deep Set → GNN); (iii) linking-length sweep, report the curve (now with Fig. GNN-EBM as the exhibit); (iv) leakage-aware splits, split by box/component never by node, your Wu+ 2023/2024 box-subsampling-with-barriers as the recipe, transductive warning from §1.4.3 landing here; (v) performance and feature variance vs depth (the oversmoothing figure is the picture); (vi) pooled-embedding inspection + SBI-style calibration with the Thiele cross-ref; (vii) sim-to-real gates (train suite A, test suite B). Cut/add/reorder, and I write it.
- [ ] **The 13 uncertain sim-vs-real classifications** at the top of `figures/papers_per_year.py` (the script prints them on every run). Defaults follow your rule (in doubt → simulation-only). The ones I guessed *real*: Spina2025, Abbasi2022 (JINST), Soldin2025, Paul2025, Rodriguez2025. The ones I guessed *sim*: Wu2024, Delgado2025, Wang2022, Choma2018, Jespersen2021 (your bachelor's), Sogaard2023, Orsoe2025, Ferriere2025. Edit the list and rerun, or send corrections.

## B. On Overleaf, before reading anything

- [ ] Push and compile. My sandbox build is clean (0 errors, 0 undefined refs, 49 pp) but used grey placeholder images, so float placement there means nothing.
- [ ] **Float placement with the real figures.** Watch especially: the rotated applications table (§1.5 — now a manual `\rotatebox` inside an ordinary `[p]` float, since svmult and `rotating`'s sidewaystable misplace each other; check it lands on a sensible page and reads bottom-up the way you like), the five new figures (linking-length, solar system, IceCube, flowchart, oversmoothing, papers-per-year), and whether anything piles up at the bibliography. A `\clearpage` before §1.6 is the blunt fix if the table blocks the queue.
- [ ] The preamble gained `tikz` (+ `shapes.geometric, arrows.meta, positioning` libraries) and a `\providecommand` block for AAS macros. Both standard on Overleaf, but confirm no clash with svmult.
- [ ] Check the ToC: §1.4 now runs ...1.4.5 pooling → **1.4.6 equivariant message passing (new)** → 1.4.7 sampling → 1.4.8 zoo. All cross-refs are `\ref`-based so numbering should follow, but eyeball it.
- [ ] Figure numbering shifted (linking-length lands ~1.11 and pushes the rest). Confirm no stale hard-coded figure numbers anywhere in your own older text.
- [ ] `git diff` before pushing anywhere: main.tex changed in ~70 places, ref.bib gained 8 entries + 2 edits, the appendix file changed twice. Then your usual push (Overleaf primary, GitHub secondary).

## C. New prose in your voice — read against your ear, in document order

- [ ] **Abstract:** "not through an explosion in data but *through one in* relations"; "when we consider *the object* only in isolation"; "more interpretable than other *deep-learning* architectures".
- [ ] **Intro, inductive-bias grey box:** definition wording, the CNN/GNN example pair, and the closing cross-ref that defuses the bias-vs-learning collision.
- [ ] **Intro, positioning sentences:** "Excellent reviews already cover deep learning across astronomy at large (Huertas-Company & Lanusse 2023; Ting 2025). This chapter claims the complementary ground..." — check you want to claim it this explicitly.
- [ ] **§1.3.1 footnote** (v_i vs x_i; "v for vertex... reserve v for the node itself"). Placement confirmed by you; check wording.
- [ ] **§1.4.1:** the simplest-layer equation now in x_i and named on the spot: "the `SAGEConv` layer of `GraphSAGE` --- one name for the same object". The N-body equation below it still uses v for velocity, as it should.
- [ ] **§1.4.2 expressivity passage:** the WL sentence, "The theory runs deeper, but its depths serve computer science more than astronomy" (your call whether that lands or smirks), the c_vu normalisation pointer, and the spectral-pedigree sentences (Bruna, Defferrard, Kipf).
- [ ] **§1.4.3 transductive grey box + paragraph:** "the sorting is lopsided" claim (astro is nearly all inductive — stated as a finding of the survey), the Gaia partial-labels example, the leakage hand-off to §1.6.3.
- [ ] **§1.4.3 training/UQ paragraph:** "kept short because none of it is specific to the GNN" framing per your instruction, the Gaussian-likelihood → error-bar sentence, the GNN-as-summariser-for-flows/SBI sentence with the Thiele hand-off. Check it doesn't tread on the SBI review's turf more than you want.
- [ ] **§1.4.5:** the size-generalisation sentences ("train on ninety nodes, deploy on a hundred and ten") and the 4·N_lat fix in the concatenated-aggregator sentence.
- [ ] **NEW §1.4.6, the whole subsection.** My draft top to bottom: the three roads (architecture / invariant diet / augmentation), the Satorras description (scalars-and-vectors ledgers — verify against the EGNN paper), "architecture beats diet beats augmentation in the strength of the promise, and the order reverses in the cost", the approximate-symmetry caveat (preferred line of sight, RSD, selection) looping back to soft constraints. Also: does the heading "Equivariant message passing: when rotations matter" fit your register?
- [ ] **§1.4.7 (sampling):** the H100 sentence — numbers as you gave them (10^5 nodes, ⟨N_E⟩~100, ~30 node features, 10 edge features, <1 hr). Check "single modern GPU (an NVIDIA H100)" phrasing.
- [ ] **§1.6.1 normalisation thread:** your argument in my words — "degree measures popularity, and popularity is noise to divide away" vs "degree measures local density, often the very signal the linking length was chosen to record", the richness example, the sampling-variation exception (survey depth, fibre allocation, subsampling). This is the passage most worth your red pen.
- [ ] **§1.6.1 GAT sentence:** I resolved the inverted logic as "saving little compute relative to the full message-passing layer while giving up much of its expressivity" — confirm that matches your empirical experience (it changes the claim's content, not just its grammar).
- [ ] **§1.6.2:** the two concrete examples (merger-tree causality; |x_u − x_v| carrying "much of the robustness" of de Santi — check the attribution strength). Note your old %-comment there ("Worked example of locality and rotational invariance... E(3)-GNNs") is now partly superseded by §1.4.6 — delete or repurpose it.
- [ ] **§1.6.5 thermalisation paragraph:** "every node relaxes to the same temperature, individuality boiled away", over-squashing as "an opposite and rarer failure", the trade-off sentence, and the explicit "oversmoothing remains the clearer and more common issue in practice" per your stance. No Königsberg anywhere.
- [ ] **§1.5.2 transformer sentence** (Iqbal paragraph): "the same kind of machinery: a transformer amounts to an attentional GNN run on a fully connected graph" — your ruling, my sentence.
- [ ] **§1.5.4:** "Related deep-learning machinery predicts the stability..." (reattribution as chosen).
- [ ] **§1.7 caption** of the papers-per-year figure, including "the classification script lives with the chapter's figure code" — decide if you want that sentence in a Springer chapter.
- [ ] **Summary:** "centring the object" (UK), and the rewritten closing-paragraph sentences ("ready to apply GNNs broadly... return on our hard-earned observational data"; "sits under no obligation to be simple, and so demands these advanced methods").
- [ ] **Acknowledgements:** heading now "Acknowledgements", "organisers" ×2, "grateful for... conversations with".
- [ ] **§1.12, the convolution proof — the deepest read of the day.** Re-derive the two index identities yourself ((S_sW)_{mn} = W_{m−s,n} and (WS_s)_{mn} = W_{m,n+s}; I caught and fixed a sign slip in the latter after first committing, so the file you have is the corrected one). Then: circulant → convolution step, the converse, the "weight sharing is not an economy but the unique linear answer" line, the locality-is-a-separate-bias remark, the Fourier/eigenbasis paragraph linking to Appendix 1.11.4, and the Deep Sets companion (aI + b·11ᵀ/n) with the SAGEConv punchline. Also check you're happy for this to be the document's final page.
- [ ] **Appendix 1.11.4:** the new Laplacian/graph-Fourier paragraph (L = D − A as discrete second derivative, eigenvectors as the graph's Fourier modes, spectral GCN as descendant, why the main text keeps the spatial view), and the fixed "(See ... e.g. Mallat ...)" spacing (this was a literal `\Mallat` undefined-command bug).

## D. Captions I authored (every word is mine unless noted)

- [ ] **Fig linking-length (§1.5.2):** opener "What the environment graph knows that no scalar summary holds." Two interpretations of mine to verify: **EBM = explainable boosting machine**, and the axis is **RMSE (dex), not σ_M*** (you'd said sigma_M*; the plot says RMSE — caption follows the plot). Saturation "near L ~ 2–3 Mpc" read off the curve. "Reproduced from Wu et al. (2024)."
- [ ] **Fig solar system (§1.5.4):** 31 bodies, Sun + planets + Pluto + largest moons, NASA HORIZONS, 30-minute cadence, three decades — all taken from the astroautomata page; verify against the paper. A `%TODO` above it asks you to confirm IOP/MLST permission wording.
- [ ] **Fig IceCube (§1.5.5):** your caption text verbatim, plus one lead-in sentence I added ("...the irregular sensor array that graph networks read natively") — cut it if unwanted. Permission line as you dictated ("with kind permission of The European Physical Journal (EPJ)"). Note the paper is CC-BY 4.0, so you could alternatively credit under licence — but EPJ's standard phrase is what you asked for.
- [ ] **Fig flowchart (§1.6.1):** caption + every box label. One logic wrinkle for your eye: the "no" branch of *edges known from physics?* leads to "choose: set, complete, or learned" and then flows into the message-dependence question — but the *deep set* choice properly exits the layer-choice question entirely (no edges, no messages). Decide whether to add a small exit arrow or accept the simplification.
- [ ] **Fig oversmoothing (§1.6.5):** caption says "zero, two, and twelve rounds" (matches the script's L = 0/2/12) and frames the variance panel as "the diagnostic to run when a deep GNN underperforms a shallow one".
- [ ] **Fig papers-per-year (§1.7):** hatching = includes real observations; annotation block (58 / 12 / 7-of-42); "incomplete year" tag on 2026.
- [ ] **Fig 1.9 (workflow):** caption now ends "Figure reproduced from Chuang et al. (2024), itself closely inspired by the graph-network block of Battaglia et al. (2018)." Two `%`-notes above the figure preserve the notation-mismatch observation (φ/ρ in the panel vs your ψ/φ/⊕) for a future redraw.
- [ ] **Table 1.x (applications, rotated):** caption + all ~18 rows are my classification of your literature. Check every row, especially the *Layer* column (e.g. "convolutional" for Kololgi, "attentional" for Iqbal/Spina, "`SAGEConv`" for the trees), the *Graph* column ("Delaunay/proximity", "sequence-as-graph", "conflict graph (imposed)"), and that the *Real data* column agrees with the figure script's classification.

## E. Facts I asserted that deserve verification

- [ ] The IceCube image's source paper: I resolved your EPJ link to **Abbasi et al. 2022, "Low energy event reconstruction in IceCube DeepCore", EPJ C 82, 807** (arXiv:2203.02303) — a *different* paper from the JINST GNN one already cited. Confirm the PNG truly comes from this paper.
- [ ] Ting 2025 → ARA&A: entry now reads `journal = {\araa, in press}` with DOI 10.1146/annurev-astro-051024-021708. Add volume/pages when ARA&A finalises; or if you prefer the arXiv version cited, revert the journal field.
- [ ] The WL sentence's corollary ("the sum aggregator preserves strictly more of the neighbourhood than the mean or the maximum") compresses Xu et al.'s injectivity result — check you accept the compression.
- [ ] The Wilson (2025) sentence I recast (soft bias, annealed penalty) — verify the paper actually supports the annealing claim (flagged in the original critique, never confirmed).
- [ ] "Related deep-learning machinery" (Cranmer 2021 PNAS) — you chose reattribution; confirm the softened phrasing suffices for a referee who checks the paper.

## F. Bibliography

- [ ] Eight new entries: Scarselli2009_GNN_model, Battaglia2016_interaction_network, Alon2021_oversquashing_bottleneck, Defferrard2016_chebnet, SanchezLengeling2021_gentle_GNN, HuertasCompany2023_dawes_review, Abbasi2022_DeepCore_reconstruction, Satorras2021_EGNN_equivariant. Check each renders sanely under aasjournal.bst (the @INPROCEEDINGS ones especially — that .bst is built for journals).
- [ ] **Abbasi2022_DeepCore author field contains a deliberate hack** ("...{Ahlers}, M. and et al. and {IceCube Collaboration}") to avoid pasting 400 names. Check the rendered reference; replace with the full ADS export if it looks wrong.
- [ ] Berni2025: journal field had a **raw &** ("Astronomy & Astrophysics (A&A)") — this was an actual compile error in the .bbl, now `\aap`. 
- [ ] The `\providecommand` macro block: \aj, \apj, \aap, \mnras, \pasj, \jcap, \prd (+ \araa, \pasa). Check the expansions match your preferred abbreviation style (currently "ApJ", "MNRAS", "Phys.~Rev.~D", ...).
- [ ] **Still broken, deliberately untouched (rule when ready):** Rossi 2020 has no identifier at all (arXiv:2006.10637 if it's Temporal Graph Networks); Iqbal 2025 has URL but no arXiv number; Jespersen 2021 has two URLs glued together; "Jespersen et al. 2026, in preparation" (Springer will likely bounce it); Vignac 2023 and Krizhevsky 2012 carry no identifier; Hoogeboom vs Jain format the same venue differently.

## G. Figures to eyeball as images

- [ ] `papers_per_year.png`: five-colour palette (my choice — swap in the CONFIG block if it clashes with house style), hatch legibility at print size, legend order, y-label wording ("Astro-GNN analyses surveyed"), annotation position.
- [ ] `oversmoothing_demo.png`: does the L = 12 panel read as fully thermalised? The equilibrium colour is warm beige rather than neutral (degree-weighted mean under coolwarm) — acceptable, or want it centred? Seed 12, spring layout, SBM parameters all in CONFIG.
- [ ] Flowchart colours: diamonds use your `rowhl` beige; confirm it matches the figures it will sit among.
- [ ] Both scripts follow your convention (all sizes/colours as keywords at the top; physics-comments in the oversmoothing script). `oversmoothing_demo.py` needs `networkx` installed to rerun.

## H. Deliberately untouched — waiting for a ruling (from critique §7.2 and §5, never answered)

- [ ] Appendix `\paragraph`-style headings render as orphaned lines ("Group actions and representations.", "Invariance vs. equivariance.") — svmult's `\runinhead` is the fix.
- [ ] §1.4.5 heading still reads "In- and equi-variant outputs through aggregations/poolings".
- [ ] Footnote 1 (grass-fed em-dashes) still sits mid-clause between two em-dashes.
- [ ] Hyperref links still bright blue/red; Springer usually wants muted.
- [ ] Figure widths overflow margins inconsistently (1.2–1.45× linewidth); Fig 1.5 conversely small at 0.7.
- [ ] §1.11 title still duplicates its first subsection's title; Helvétius appears three times (abstract unattributed, §1.2 epigraph, §1.4.7 paraphrase).
- [ ] Appendix spaced en-dashes vs main-text em-dashes.
- [ ] §-spacing inconsistencies ("§ 1.4.1" vs "§1.4.1").
- [ ] §1.6.3 is still an empty header **on purpose** (awaiting item A2).

## I. Repo hygiene

- [ ] New files in the repo: `figures/{papers_per_year.py,.png,.pdf, oversmoothing_demo.py,.png,.pdf, architecture_flowchart.tex, applications_table.tex}`, `notes/draft_equivariant_subsection.tex` (now redundant — content is pasted into main.tex; keep as record or delete), `notes/review_checklist.md` (this file).
- [ ] Root still holds `TriNguyen.html` + `TriNguyen_files/` + `notes/TriNguyen_ch8_extracted.txt` from the STIG comparison — gitignore or move if you don't want them in the repo history.
- [ ] Nothing was git-committed by me; your working tree holds all changes.

## J. Small print — one-glance skims of fixes where I chose a reading

- [ ] Fig 1.1 caption: "The rows fall from the abstract to two concrete cases." / "At a minimum... At best..." split into two sentences.
- [ ] Fig 1.2 caption: "Both respond to the same symmetry, but the distinction..."
- [ ] §1.4.2 intro sentence: "inherently resemble both communication in a social network and interaction in a physical system".
- [ ] Full message-passing bullet: "people around us changing the expression of their political opinion by taking into account..."
- [ ] "a third kind of input" (was 3rd); "we give some examples" (was example).
- [ ] §1.4.3: "...over all nodes (see §1.4.5)." now ends with a full stop.
- [ ] §1.5.1: "but at present they still rely"; "Given this wide applicability and promise, common benchmarks now appear".
- [ ] §1.5.2: "achieves precision"; the Figure ?? sentence now points only at Fig 1.6 (your ruling: the intended figure *is* the existing cosmic-web figure — confirm the sentence works with one reference).
- [ ] §1.5.3: "GNNs can sort stars and probe..."; tagging clause comma; "directly inferable"; "recently been applied observationally" (hedge dropped, per the give-number-or-drop rule — reinstate with a number if you prefer).
- [ ] §1.5.5: "Each of these has been..."; "beyond reach for any reasonable modern survey"; "GNNs reconstruct IceCube events"; "radio-interferometric calibration also yields to graph-based..." (this one changes the image — check you like "yields to").
- [ ] §1.6.1: "makes it suboptimal"; "The maximum function is"; double full stop after footnote 11 removed; footnote 12 now "Said countless times..." with a capital and a full stop.
- [ ] §1.6.2: "preferences that bias"; "incredibly helpful to our learning algorithm in its search for"; the Wilson sentence recast as infinitive.
- [ ] §1.6.4: "an invariance or equivariance claimed but not held".
- [ ] §1.6.5: "any kind of task" (was "thus").
- [ ] §1.7: "developed further, and well".
- [ ] §1.8: tinyurl `%TODO` note sits above the paragraph; "inductive biases... change the performance and optimisation"; Distill now cited.
- [ ] UK sweep: all optimiz-/normaliz-/organiz- forms now -is- (citation keys and `\centering` untouched); "Neighbourhood Sampling" heading.

## K. And then, when A1–A3 are answered, my next round is

§1.6.3 written to the agreed plan; the p. 24 paragraph rewritten; classification corrections + figure rerun; any caption/wording edits from your read-through; the remaining figures talk (per-section graph panels you approved in principle — what's still wanted beyond solar system, IceCube, linking-length?); and the deferred bibliography repairs if you green-light them.
