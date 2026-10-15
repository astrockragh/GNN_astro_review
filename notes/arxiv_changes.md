# arXiv version — now one keyword

Everything that used to be on this checklist is automated. At the top of main.tex sits the version switch:

    \newif\ifarxiv
    \arxivfalse

**Set `\arxivtrue` and recompile — that is the whole arXiv build.** It switches, in one go: no "Chapter N" line and the full title "Graph Neural Networks for Astrophysics and Cosmology"; article-style numbering (sections 1, 2, 3; Fig. 1; Table 1; Eq. (1)); author–year citations (the Table 2 \citeauthor cells and the \pcite parenthetical citations adapt automatically); and the references placed after the acknowledgements, before the appendices. `\arxivfalse` restores the Springer chapter exactly (Chapter 4, 4.x numbering, short title, numbered citations, references last). Verified on full compiles of both settings, 15 Oct 2026: 0 errors, 0 undefined references either way.

## arXiv upload mechanics (still manual)

- Compile once locally with `\arxivtrue`, then upload: main.tex, **main.bbl** (arXiv does not run bibtex — the .bbl must be the author–year one from that compile), Template/svmult.cls, notes/appendix_symmetries.tex, figures/applications_table.tex, figures/architecture_flowchart.tex, and the 16 figure files actually used.
- No embargo on the submitted version — post any time.
- Comment field: "Invited chapter for the edited book *Machine Learning Techniques for Astrophysics and Cosmology* (Eds. Cosimo Bambi, Vinay Kashyap, Swarnim Shashank, Naoki Yoshida, Springer Singapore, expected in 2026). Submitted version." (Editor list per the sibling chapter arXiv:2608.02573.)
- After publication, add the chapter DOI on the arXiv page.
- First arXiv compile: glance at the running heads, which carry \titlerunning (currently the full title) in both modes.
