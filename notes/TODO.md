# TODO — GNN review, 14 Aug 2026

State of play: content-complete, checked, and Springer-compliant: citations are numbered (sorted/compressed) with Table 1.2 exempted via \citeauthor + year, the appendices are headed "Appendix 1/2" (unnumbered, cross-references intact), Table 1.2 carries \svhline, and the permission trail is complete. Compile with real figures: 50 pp, 0 errors, 0 undefined references, rotated table clean, references at the end, UK/§ sweep clean. Abstract fixed ("how the object sits"), the two untracked strays are gitignored, `_to_delete/` is trashed. The overfull-hbox note turned out to be nothing to act on (see chat, 14 Aug): the largest one is absorbed inside the rotated table's \resizebox and the page renders clean.

---

## Remaining

- [ ] **Submission package** (per Template/FAQ): compiled PDF + all source files (main.tex, notes/appendix_symmetries.tex, figures/*.tex, Template/svmult.cls, aasjournal.bst, ref.bib, figure files) + permissions: `figures/ElsevierPermission.pdf` (Veličković figure); EPJ needs no request (journal-wide policy, credit line in caption suffices); AAS figures covered by author exemption; de Santi and Lemos are CC BY.
- [ ] **arXiv version**: follow `notes/arxiv_changes.md` (author–year citations back, bibliography before appendices, optional appendix renumbering, .bbl upload, FAQ comment-field text).

- [ ] Final `git push` (Overleaf primary, GitHub secondary). One note for that commit: your .gitignore now lists `GNN_astro_review_v0.pdf` and `GNN_astro_review_v1.pdf`, but both are already tracked — gitignore alone does not untrack them; `git rm --cached <file>` in your own terminal does, if off-GitHub is the goal.
