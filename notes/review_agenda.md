# Review agenda — open items only

17 Oct 2026. Every review round is now closed: Josh's comments doc, the face-to-face priorities, and Wu's round. What remains is the endgame. GROUND RULE unchanged for any late-arriving comments (Gemini's included): asks, not tasks — nothing goes in without CKJ's approval of that specific point.

## Rounds — all clear

- **Josh, comments doc**: None — all 26 resolved, dismissed, or absorbed (16 Oct). Residue lives in the endgame bib bullet: preprint-vs-publication year convention.
- **Josh, face-to-face**: J1 (gentler maths on-ramp, Eq. 1 recast as blueprint block $B$, $ij$-notation unified with the $u/v$ footnote at the adjacency) ✅ and J2 (pillars "Designing the Model" / "Working with the Model" with co-written intros) ✅, both verified in the compiled file 17 Oct.
- **Wu**: W1–W5 all resolved (17 Oct, CKJ). If the domain_signal_model.py figure ever wants a rerun, the version-matched matplotlib environments stand ready.
- **CKJ's in-file notes**: None — no `%claude` or placeholder comments remain.

## In flight

- **Unsupervised-learning aside for the Frontier** (CKJ, 17 Oct): reworked draft delivered — standalone paragraph after the Frontier list, softer tone, successes first (GRB light-curve clustering, the weirdest SDSS galaxies, contrastive pretraining on images), graph side framed as nearly empty with the VGAE machinery cite. Rewritten 17 Oct per CKJ: shorter, Gemini-voiced, Cranmer dropped entirely (17 Oct), spender and the optical-IR paper added to the pretraining cite block. Awaiting CKJ's paste or veto; all six supporting bib entries (Jespersen2020_GRB_lightcurve_clustering, Baron2017_anomaly_SDSSspectra, Hayat2021_selfsupervised_astroimages, Melchior2023_spender_autoencoder, Parker2024_AstroCLIP_crossmodal, Jespersen2026_optical_infrared) sit in ref.bib, and the paragraph rescues Kipf2016_VGAE_autoencoder from the unused pile. Note for CKJ: spender keyed 2023 (AJ 166, 74) per the year convention, not 2021; Jespersen2026_optical_infrared still wants volume/eid.
- **Commit pending on CKJ's side**: main.tex + ref.bib + notes/appendix_symmetries.tex carry the year/venue sweep (block provided 17 Oct).

## Small catches from the 17 Oct verification pass

- "complimentary" → "complementary", twice: the §3.1 graph-definition paragraph (L249) and the Fig. 2 anatomy caption (L256).
- Same L249 sentence: "a compact description of A" — the A wants math mode, $A$.
- The §3.1 vertex-naming footnote and the new $u/v$ footnote sit two sentences apart in the same paragraph; they read compatibly (one keeps $v$ for the node, the other reports the literature's $u/v$ indices), but worth one glance in context.

## Endgame — one full-manuscript pass, in order

0. **Pull first**: bring any Overleaf edits (W5 sentences etc.) down to disk and level the remotes before the pass starts, so the sweep runs on the real file.
1. **Strip dead weight**: every commented-out bit, and the red `\textcolor` wrappers (15 as of 17 Oct) once each insertion is accepted.
2. **Title case in titles**: sections run title case, subsections sentence case — lone outlier "Cosmology and Large-Scale Structure" (the two long pillar titles vanished with J2). Decide the convention per level, then sweep.
3. **Grammar pass**: full read for grammar, UK spelling, §-spacing, dash conventions, "this chapter" vs "this review" consistency; fold in the small catches above if they haven't been taken earlier.
4. **Bib endgame**: year convention DONE 17 Oct (publication year whenever in doubt: 26 entries rewritten, 8 keys renamed to their publication year, venues filled, Wu2024 and arnaiz completed). Remaining: prune or cite the unused entries (recount after the unsupervised paragraph lands; reserves include Jespersen2026_environment_assembly, Roper2020_MEGA, PySR, Ting2025 textbook, Lino2021, vanDenEnde2020).
5. **Second opinion**: run the full manuscript through Gemini for an independent language check; its comments get the Josh/Wu treatment — asks, not tasks, each needs CKJ's per-point approval.
6. **Final compile check** in both modes (`\arxivfalse` and `\arxivtrue`): 0 errors, 0 undefined references, spot-checked page renders, running heads.
