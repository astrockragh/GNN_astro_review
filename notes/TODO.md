# TODO — GNN review, as of 12 Aug 2026

Forward work plan. Supersedes the review checklist in `notes/review_checklist.md` (most of that is now done or ruled on); this is what remains, sorted by whose move it is.

---

## 1. Your reading queue (sign-off still outstanding)

- [ ] **§1.6.3 as written** — the seven-item battery, now ending on the sim-to-real gate. Your red pen on wording; structure was approved.
- [ ] **§1.12, the convolution proof** — re-derive the two index identities independently, check the Deep Sets → SAGEConv punchline, and confirm you want it as the document's final page.
- [ ] **§1.4.6 equivariant subsection, full read** — retitled and case-study-framed per your note; the Satorras description (scalar/vector ledgers) deserves a check against the EGNN paper.
- [ ] **The reworked WL passage** (§1.4.2) — now introduced as the CS yardstick with the why-it-matters-less-in-astro argument. Does it land this time?
- [ ] **Appendix 1.11.4 Laplacian paragraph** and the §1.12 ↔ appendix cross-links.
- [ ] **All authored captions**: de Santi (residual framing + CC BY line), solar system, IceCube, linking-length (EBM = explainable boosting machine — still my inference), flowchart, oversmoothing (now four panels), papers-per-year, and the table rows (Layer/Graph columns especially).
- [ ] **The training/UQ paragraph** (§1.4.3) and the two grey boxes, post your own edits.

## 2. Decisions parked with you (small, non-blocking)

- [ ] k-NN cells in the table stay lowercase (math symbol) while every other cell is capitalised — accept or overrule.
- [ ] Flowchart wrinkle: the "set / complete / learned" branch flows into the message-dependence question, but a Deep Set properly exits the layer choice entirely. Add an exit arrow, or accept the simplification.
- [ ] §1.4.5 heading still reads "In- and equi-variant outputs through aggregations/poolings" — keep or retitle (e.g. "Invariant and equivariant outputs through pooling").
- [ ] The old %-comment in §1.6.2 ("Worked example of locality and rotational invariance... E(3)-GNNs") is superseded by §1.4.6 — delete or repurpose.
- [ ] `velickovic_tasks` caption claims "reproduced ... with permission" — confirm that permission exists in writing somewhere.
- [ ] Fig 1.10 (your new `computational_modules2`): verify the leaf citations, in particular the "GCN — Spectral — Solin et al. 2025" leaf flagged in the original critique.
- [ ] Depth guidance: chapter says "two or three layers"; the STIG chapter circulates "3–5". Harmonise to "two to five", or let them differ.
- [ ] Never ruled on, from the STIG comparison: a HEALPix-as-graph clause (sphere row of Table 1.1) and a stream-perturbation/subhalo sentence for §1.5.3. In or out.
- [ ] Never ruled on, from the critique's voice audit (§6.2): the passive-voice flattening of §1.5 and the two Wheeler-active rewrites offered as examples. Want that pass?

## 3. Content still to write or build

- [ ] **Your graph-creation expansion of §1.3.2** (your own note): the ladder k-NN (fixed degree) / radius (fixed scale) / Delaunay (parameter-free, Kololgi et al. 2025) / complete / learned, each with its inductive bias. Say the word if you want a draft to react to instead.
- [ ] **A figure for §1.5.3** (Milky Way & substructure) — the one applications subsection still without a panel. Candidates: a stream/phase-space graph, or a dwarf-galaxy kinematics graph from the Nguyen line of work.
- [ ] **Remaining figures conversation** — you wanted to talk figures once the dust settled; what remains beyond §1.5.3 is only polish (F8/F10/F11 were ruled out).

## 4. On Overleaf (mechanical, next time you compile)

- [ ] Full compile with real figures; check float placement end to end — the rotated table's page, the six new figures, no pile-up at the bibliography (`\clearpage` before §1.6 is the blunt fix).
- [ ] Rotated table legibility: the resizebox scales footnotesize down ~10–15%; loosen column widths or the 0.95 factor if it runs small.
- [ ] ToC and numbering after the §1.4 restructure (pooling 1.4.5, equivariant 1.4.6, sampling 1.4.7, zoo 1.4.8).
- [ ] New bibliography entries render sanely under aasjournal.bst — the @INPROCEEDINGS ones and the "et al." author hack in `Abbasi2022_DeepCore_reconstruction`.
- [ ] `git diff`, then your usual push (Overleaf primary, GitHub secondary).

## 5. Bibliography debts (yours, in progress manually)

- [ ] Rossi 2020: no identifier (arXiv:2006.10637 if Temporal Graph Networks).
- [ ] Iqbal 2025: URL but no arXiv number.
- [ ] Jespersen 2021: two URLs glued together.
- [ ] "Jespersen et al. 2026, in preparation" — swap for an arXiv ID by submission or cut.
- [ ] Vignac 2023, Krizhevsky 2012: no identifiers; Hoogeboom vs Jain format the same venue differently.
- [ ] Verify Wilson (2025) actually supports the annealed-penalty claim in §1.6.2 (flagged twice, never confirmed).

## 6. Before submission (park until v1 settles)

- [ ] tinyurl links → GitHub URL + Zenodo DOI (%TODO sits above the paragraph in §1.8).
- [ ] Rerun `figures/papers_per_year.py` near submission: 2026 completes, new papers land, percentages update themselves.
- [ ] Appendix 1.11 revisit (%TODO at top of the file): run-in headings, the subsection title duplicating the section title, spaced en-dashes.
- [ ] Typography never ruled on: footnote 1 mid-clause between two em-dashes, bright hyperref colours vs Springer taste, figure-width consistency (1.2–1.45× overflow vs Fig 1.5 at 0.7).
- [ ] Helvétius appears three times (abstract unattributed, §1.2 epigraph, §1.4.7 paraphrase) — cut one or make the echo explicit.
- [ ] Length check against Springer's expectation: additions so far run roughly +13 pages over v0 (sandbox count; real build will differ).
- [ ] `\makeindex` is loaded but no index entries exist — use it or drop it.
- [ ] Repo hygiene: gitignore or relocate `TriNguyen.html` + `TriNguyen_files/`; delete `notes/draft_equivariant_subsection.tex` (content now lives in main.tex).
- [ ] Final sweeps: one more UK/§/spacing pass after all manual edits, and a fresh read of the abstract against the finished chapter.
