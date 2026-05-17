# Partner logos

The TrustStrip section on the homepage currently hot-links university logos from
Wikimedia Commons. Hot-linking is fragile (rate-limited, cross-origin, can break
when files are renamed upstream). To self-host:

1. Download each logo from the URLs in `src/routes/index.tsx` (the `partners` array).
2. Convert to SVG where licensing allows; otherwise PNG at 320 px wide.
3. Save into this folder as `utoronto.svg`, `ucl.svg`, `mcgill.svg`,
   `manchester.svg`, `ubc.svg`, `edinburgh.svg`.
4. Update the `logo:` URLs in the `partners` array to `/partners/<file>`.
5. Most coats-of-arms on Commons are CC-BY-SA — attribute the source here:

| File | Source | Licence |
| --- | --- | --- |
| utoronto.svg | https://commons.wikimedia.org/wiki/File:Utoronto_coa.svg | Public domain / fair use |
| ucl.svg | https://commons.wikimedia.org/wiki/File:University_College_London_logo.svg | Trademark — fair-use only |
| mcgill.svg | https://commons.wikimedia.org/wiki/File:McGill_University_CoA.svg | Public domain / fair use |
| manchester.svg | https://commons.wikimedia.org/wiki/File:University_of_Manchester_logo.svg | Trademark — fair-use only |
| ubc.svg | https://commons.wikimedia.org/wiki/File:The_University_of_British_Columbia-Logo.svg | Trademark — fair-use only |
| edinburgh.svg | https://commons.wikimedia.org/wiki/File:University_of_Edinburgh_ceremonial_roundel.svg | Public domain / fair use |

If you're claiming a real partnership with these universities, prefer their
official media-kit assets and confirm permission with their marketing teams.
