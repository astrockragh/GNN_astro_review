# TODO — GNN review, 13 Aug 2026, after the polish pass

State of play: the full §1 polish list is applied (typo sweep, "Split the test set." bullet, Abstract "over", §1.7 fractions harmonised with the rerun figure, Acknowledgements in the first person with matched quotes, appendix UK spellings, spectral duplication trimmed), the GarciaSatorras arXiv duplicate is gone from ref.bib, the §1.2.2 rethink block and §1.9 DRAFT marker are dropped as settled, and the stale-comment sweep is done (both figure-placeholder blocks, all fulfilled §1.3.2 banners, the §1.5.5 planning notes including the Wang 2022 wish, the duplicate \hypersetup). Everything committed; compiles clean here at 50 pp, 0 errors, 0 undefined references. Line numbers below match the committed 671-line main.tex.

---

## 1. Sections awaiting your structural intent

- [ ] **§1.2.1 three-geometries rewrite** — your comment (l. 97): fold the model/hypothesis-class geometry from Bronstein into the prose properly. The figure and caption already carry three columns; the text still leads with two geometries and mentions the model's only in passing. Say the word if you want a draft to react to.
- [ ] **§1.3.2.2 lead-in vs. list** — "We may \emph{impose} an edge set from physical knowledge:" promises an impose-list, but the first bullet chooses *no* structure; a neutral lead-in ("Four standard moves offer themselves:") would fix the colon's promise.
- [ ] **§1.4.5 restructure** — your %% comment (l. 359) still calls for two explicit descriptions: the aggregation inside the message-passing layer, and the global graph-level pooling. The current single paragraph blends them.
- [ ] **§1.6.2 worked example** — the commented plan (l. 535): locality + rotational invariance worked example with the infinite-data caveat. Write it or delete the comment.
- [ ] **§1.8 Tutorials** — "three external resources" enumerates two before the full stop and delivers the third in a new sentence; recount or restructure.
- [ ] **Appendix placement** — references currently come *before* the two appendices. Check against the Springer chapter convention (svmult samples put the appendix before the bibliography).

## 2. Small hygiene, whenever you pass by

- [ ] The commented geometry sentence in §1.3.2.1 (l. 213) — its content is absorbed by the cosmic-web paragraphs and the fig:cosmic_web caption; delete when you agree.
- [ ] The `% NOTE (review)` pair on the workflow figure (ll. 348–349: phi/rho notation mismatch; Chuang/Battaglia credit) — keep until a future redraw or accept and delete.
- [ ] Grass-fed em-dash footnote sits mid-dash construction (l. 265); reposition or embrace.
- [ ] `\makeindex` (l. 36) still loaded and unused — use or drop.
- [ ] Appendix header banner in notes/appendix_symmetries.tex — the provenance note is worth keeping, but the TODO half (run-in headings, duplicated subsection title) is partly done; trim on your next appendix pass.

## 3. Before submission (parking lot)

- [ ] tinyurl links → GitHub + Zenodo DOI (%TODO, l. 608).
- [ ] Rerun `figures/papers_per_year.py` one final time and re-check the §1.7 fractions against it (they match as of today: 58 analyses, 13 real = fewer than one in four; instruments 6/16 = more than one in three; science 7/42 = one in six).
- [ ] Overleaf full compile with real figures: float placement end to end (rotated table now at 1.1\textheight width — check it still clears the margins), ToC sanity after the §1.3 restructure.
- [ ] Repo hygiene: gitignore/relocate `TriNguyen.html` + `TriNguyen_files/`; delete `notes/draft_equivariant_subsection.tex` and `notes/annot_scan/` (baseline + page scans, all scratch); final UK/§ sweep after all manual edits.
- [ ] `git diff`, then push (Overleaf primary, GitHub secondary).
