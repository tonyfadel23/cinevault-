# CineVault — Personal Movie Catalog & Launcher

CineVault is a cinema-inspired catalog and launcher for a personal digital movie
collection. It is a single static page: no build step, no server, no account.
Your library lives in your browser's local storage.

## 🎨 Artwork

Most personal libraries have no poster files, and this one shipped with a single
stock photo repeated across 40 of its 57 titles. CineVault now draws its own
poster and backdrop for any title without artwork — a deterministic SVG built
from the title, year, runtime and genre, so the same film always gets the same
distinctive art and nothing has to load from the network for the grid to look
right. Remote posters that fail to load fall back to the same generated art, so
the catalog can never show a broken image.

To pull in the real thing, open **Settings**, paste a free
[TMDB API key](https://www.themoviedb.org/settings/api) and hit **Fetch from
TMDB**. That fills in posters, backdrops, synopses, directors, cast and trailer
links for every title that is missing them (or all of them, if you tick the
overwrite box). The key is stored in your browser and sent only to TMDB.

## 🛠 Features

- Filter by category, genre, collection, decade and minimum rating, with active
  filters shown as chips you can clear individually.
- Poster grid or detail list view, both sortable six ways.
- Search across titles, directors, cast, collections, synopses and your tags.
- Movie Roulette ("Pick For Me") that respects the filters you have applied.
- One-click launch to YouTube or Google Play / TV, plus trailer playback.
- Per-title favourites, watched state, custom tags and personal notes.
- Library stats: how much you have watched and how many hours of backlog remain.
- Import / export the whole catalog as JSON, merging or replacing.
- Keyboard shortcuts: `/` search, `R` roulette, `V` view, `C` clear, `?` help.

## 📚 Editing the catalog

`cinevault_catalog.json` is the catalog, and the same data is embedded in
`index.html` so the page works when opened straight from disk. Keep the two in
sync with the build script rather than editing `index.html` by hand:

```bash
python3 tools/build_catalog.py
```

Editorial metadata (director, cast, synopsis, franchise) lives in
`tools/enrichment.py`; the script merges it into the catalog, regenerates the
launch URLs and writes both copies.

## 🚀 Deploying to Vercel

### Method 1: Git integration (recommended)
1. Push this folder to a repository on **GitHub**.
2. Go to [vercel.com/new](https://vercel.com/new) and import it.
3. Click **Deploy** — Vercel serves it as a static site.

### Method 2: Vercel CLI

```bash
npx vercel
```

## 💻 Running locally

```bash
npm start   # serves the folder on http://localhost:3000
```

Or just open `index.html` in a browser.
