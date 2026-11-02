# Pratibha & Abhishek — wedding invitation

A small, responsive, static wedding invitation for GitHub Pages. It uses plain HTML, CSS, JavaScript, and three generated couple caricatures in `assets/`, so it needs no build step or paid hosting. Full-resolution originals and unused versions are preserved locally in `artwork-source/`, which is excluded by `.gitignore`. Generation prompts are recorded in `ARTWORK-PROMPTS.md`.

## Publish on GitHub Pages

1. Create a GitHub repository and put `index.html`, `style.css`, `script.js`, and the full `assets` folder in its root (or copy the contents of this folder to the root of an existing repository).
2. In the repository, open **Settings → Pages**.
3. Under **Build and deployment**, choose **Deploy from a branch**, select your publishing branch (`master` for this repository) and `/ (root)`, then save.
4. GitHub will show the public Pages address in that section after it publishes.

## Before publishing

- The year **2026** is inferred from the current date and should be confirmed. If needed, update the date shown in `index.html` and `weddingDate` in `script.js` together.
- The Sangeet is listed for 9 December 2026, 5:00–7:00 PM at Neelambari Ecotourism in Arattupuzha.
- Google Maps embeds were copied from the exact places resolved from the supplied shared links: Neelambari Ecotourism in Thrissur and Alakapuri Convention Center in Thiruvananthapuram. Each map loads only when its "View venue map" panel is opened. Directions buttons remain available without opening the maps.
- The invitation artwork is part of the public site. Anyone who can open the invite can view and download it.
- Google Fonts and the map embeds load over HTTPS from Google. The invitation and caricature files are served from GitHub Pages. Active images use the six `*-480.jpg` and `*-960.jpg` responsive variants (51–189 KB each). The original PNGs remain in the ignored `artwork-source/` folder and are not loaded by the page. Their prompts are saved in the corresponding `*-ART-V2-PROMPT.md` files.

## Theme and loading

The page uses plum, saffron gold, forest green and blush panels, with CSS borders, floral accents and gradients. It has no large background images or animation libraries. The opening image is prioritized, event images are lazy-loaded, and pinned maps are requested on demand. The three 960px JPEGs total about 532 KB, compared with 8.3 MB for the source PNGs.
