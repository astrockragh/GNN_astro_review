# TODO — GNN review, 13 Aug 2026, ranked by importance

All eleven annotation questions are resolved and applied (ledger: `notes/annotation_ledger.md`). What remains, most important first. The top band is read-throughs of whole sections that have been heavily rewritten or restructured — these carry the most risk of not sounding like you, or of a subtle error surviving.

---

## 1. Full-section read-throughs, in priority order

- [ ] **§1.3.2 Building the graph** — *the* priority, because it is not yet written: the structure stands (intro; 1.3.2.1 When the graph structure is given; 1.3.2.2 When we must choose), the content awaits your rewrite ("A lot is wrong. big TODO"), with the cosmic-web case study (Deep Sets / k-NN / radius / Delaunay, Kololgi et al. 2025) and the merger-tree case study (§1.3.3, what can and cannot be changed) planned. Say the word if you want a draft to react to rather than a blank page.
- [ ] **§1.4.6 Symmetries in message passing** — most heavily reworked section of the annotation pass: E(3) spelled out with what breaks it (stretch, shear), the two-ledger EGNN description, the tidal-force example, the compute-cost sentence, "diet" removed from the promise ordering, the approximate-symmetry sentence emigrated to §1.6.2. The physics claims deserve your eye sentence by sentence.
- [ ] **§1.6.3 Pitfalls, diagnostics, and validation** — rewritten twice over: your intro sentences ("Any model that runs will return an answer..."), your bullet order, the new Perturb-the-input-features bullet, Calibrate stripped to calibration only, Gate deleted, the "Calibrate, calibrate" close. This is the page readers will photocopy; it should sound exactly like you.
- [ ] **§1.2.3 The geometric blueprint, and the CNN and GNN it implies** — new GNN-derivation paragraph (permutation equivariance + locality → message passing, leaning on Appendix 1.12), the five Gs absorbed as a closing paragraph, the blueprint box now carrying the signal and the equivariant-finish caveat. Check the derivation paragraph's logic carries your voice and your standards.
- [ ] **Abstract** — rebuilt from your marginal fragments; it is the most-read paragraph of the chapter and currently entirely my assembly of your words.
- [ ] **§1.12 Appendix (convolution proof)** — retitled, operator renamed to $T_s$, and the Deep-Sets ending reworked into "message passing in embryo" with the locality bridge to SAGEConv. Re-derive the two index identities once more in the new notation, and judge whether the ending now convinces where it did not before.
- [ ] **Appendix 1.11** — §1.11.2 deleted (check nothing referenced it), §1.11.3 trimmed, §1.11.4 condensed to one paragraph plus the "no good graph wavelet yet" caveat, new §1.11.4 WL-ceiling subsection carrying the material that left §1.4.2. Verify the flow survives the surgery.
- [ ] **§1.2.2 opening** — still awaiting your rethink (symmetry as two sub-cases, invariance and equivariance); %TODO sits in the tex. Draft available on request.
- [ ] **New and rewritten captions** — Fig 1.5 (causality sentence), Fig 1.6 (construction + alternatives), Fig 1.11 and Fig 1.12 (both rewritten to your "rewrite" marks), Table 1.2 (expanded this round: five-sentence caption defining every column).
- [ ] **§1.9 ending** — the toned-down closing paragraph; the couplet is gone, judge what took its place.

## 2. Content still to write (beyond §1.3.2)

- [ ] **Attentional physical example** — line absorption to be replaced; lensing draft paragraph is in the chat for your judgement, with nodes and edges spelled out.
- [ ] **Cross-references** — suggestions list in chat; tick the ones you want and I apply them in one pass.

## 3. Consistency checks that follow from this round's decisions

- [ ] Lee et al. 2024 is now flagged in §1.5.1 as a deep set, not a GNN proper, and removed from Table 1.2 — decide whether it should also leave the papers-per-year count in `figures/papers_per_year.py` (currently counted, real-data, Cosmology; removing it makes the counts 57 analyses, 12 real).
- [ ] Kololgi's layer corrected to Attentional in Table 1.2 — Fig 1.10 (your modules2 figure) shows GAT under Attention already; confirm the leaf reference there agrees.
- [ ] The Gate bullet is gone from §1.6.3; its sim-to-real content survives only in §1.7. Check you are happy with that division of labour.

## 4. On Overleaf (next compile)

- [ ] Full compile with real figures; float placement end to end (rotated table, seven figures, nothing piling at the bibliography).
- [ ] ToC sanity after the restructures (§1.2.3 absorbed the five Gs; §1.3.2 subsubsections; §1.4.5/§1.4.6/§1.12 retitled; Appendix 1.11.2 gone).
- [ ] `git diff`, then push (Overleaf primary, GitHub secondary).

## 5. Bibliography debts (yours, manual)

- [ ] Complete the author list of the new `Thiele2022_tSZ_deepsets` entry (I stopped at Spergel + et al.; grab the ADS export).
- [ ] Rossi 2020 identifier; Jespersen 2021 glued URLs; "Jespersen et al. 2026, in preparation" now uncited — cut?; Vignac 2023 / Krizhevsky 2012 identifiers; venue-format consistency.
- [ ] Verify Wilson (2025) supports the annealed-penalty claim in §1.6.2.

## 6. Before submission (parking lot)

- [ ] tinyurl links → GitHub + Zenodo DOI (%TODO in §1.8).
- [ ] Rerun `figures/papers_per_year.py` near submission; percentages update themselves.
- [ ] Typography: hyperref colours, figure-width consistency, grass-fed footnote position (§1.4.1).
- [ ] `\makeindex` unused — use or drop.
- [ ] Repo hygiene: gitignore/relocate `TriNguyen.html` + `TriNguyen_files/`; delete `notes/draft_equivariant_subsection.tex`, `notes/annot_scan/`; final UK/§ sweep after all manual edits.
