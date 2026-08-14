# TODO — GNN review, 14 Aug 2026

State of play: content-complete and checked. Compile with real figures: 50 pp, 0 errors, 0 undefined references, rotated table clean, references at the end, UK/§ sweep clean. Abstract fixed ("how the object sits"), the two untracked strays are gitignored, `_to_delete/` is trashed. The overfull-hbox note turned out to be nothing to act on (see chat, 14 Aug): the largest one is absorbed inside the rotated table's \resizebox and the page renders clean.

---

## Remaining

- [ ] Final `git push` (Overleaf primary, GitHub secondary). One note for that commit: your .gitignore now lists `GNN_astro_review_v0.pdf` and `GNN_astro_review_v1.pdf`, but both are already tracked — gitignore alone does not untrack them; `git rm --cached <file>` in your own terminal does, if off-GitHub is the goal.
