# arXiv version — what to change back (from the Springer-compliant source)

The Springer-specific changes live in three places. Everything else (svhline, the acknowledgement environment, figure captions, content) works identically on arXiv and needs no touch.

## 1. Citations back to author–year

In main.tex line ~4, change

    \usepackage[numbers,sort&compress]{natbib}

back to

    \usepackage{natbib}

That single line restores every `\citet`/`\citep` to "Makinen et al. (2022)" style. Table 1.2 needs **no** change — its `\citeauthor{key} (year)` cells render identically in both modes. Optional cosmetic revert: in §1.4.2 the two layer definitions read "(GCN, \citep{...})" and "(GAT, \citep{...})" so the number keeps its brackets; for author–year you may prefer the original "(GCN; \citealp{...})".

## 2. Bibliography back in front of the appendices

Springer wants references last; arXiv/astro convention puts them right after the acknowledgements. Move this block (currently at the very end of main.tex, just before \end{document}):

    \clearpage
    \bibliographystyle{aasjournal}
    \bibliography{ref}

to just after \end{acknowledgement} and before the appendix inputs (where the "APPENDICES" banner comment sits).

## 3. Appendix headings (optional)

The unnumbered "Appendix 1: …" / "Appendix 2: …" headings are Springer style but perfectly fine on arXiv — keeping them costs nothing. To restore numbered sections instead: in notes/appendix_symmetries.tex and main.tex change the two `\section*{Appendix N: …}` back to `\section{Appendix: …}`, delete the two `\addcontentsline` lines that follow them, restore the four `\subsection*` → `\subsection` in the symmetries appendix, and change the five in-text `\hyperref[app:...]{Appendix~N}` back to `Appendix~\ref{app:...}`.

## 4. arXiv submission mechanics

- arXiv does not run bibtex: upload `main.bbl` (compiled AFTER the author–year switch) alongside the sources, plus `Template/svmult.cls`, `notes/appendix_symmetries.tex`, and the `figures/` files actually used.
- No embargo applies to the submitted version — post any time.
- Comment field, per the publisher FAQ: "Invited chapter for the edited book *[Title of the book]* (Eds. [Names of the Editors], Springer Singapore, expected in [year])".
- After publication, add the chapter DOI on the arXiv page.

## 5. Chapter heading and numbering for the standalone (arXiv) version

The arXiv version is fully standalone: no "Chapter N" line, and article-style numbering throughout — sections 1, 2, 3, Fig. 1, Table 1, equations (1). Both steps verified against Template/svmult.cls; placement matters, since svmult resets these switches at \begin{document}.

**Step 0.** Restore the full standalone title: swap the comment markers on lines 48-49 of main.tex, so \title{Machine Learning Techniques for Astrophysics and Cosmology: Graph Neural Networks} is active and the short book-chapter title \title{Graph Neural Networks} is commented out. (Delete this step if the short title is wanted on arXiv too.)

**Step 1.** Delete the Springer line `\setcounter{chapter}{3}` before \maketitle and put in its place:

    \makeatletter\@numarttrue\makeatother
    \setcounter{chapter}{1}

**Step 2.** Immediately after \maketitle add:

    \makeatletter
    \def\thesection{\@arabic\c@section}
    \def\thefigure{\@arabic\c@figure}
    \def\thetable{\@arabic\c@table}
    \def\theequation{\arabic{equation}}
    \makeatother

Subsections follow automatically (1.1, 1.1.1), every \S cross-reference prints the new numbers, and the unnumbered "Appendix 1/2" headings already fit this standalone look — keep them. One thing to eyeball on the first arXiv compile: the running heads, which svmult builds from the chapter title in book mode.
