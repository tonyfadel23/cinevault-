# CineVault — Personal Movie Catalog & Launcher

CineVault is a cinema-inspired movie catalog and launcher app for personal digital movie collections.

## 🚀 Deploying to Vercel

### Method 1: Git Integration (Recommended)
1. Push this folder to a new repository on **GitHub** (e.g. `cinevault`).
2. Go to [vercel.com/new](https://vercel.com/new).
3. Import the `cinevault` repository.
4. Click **Deploy**. Vercel will automatically recognize the static site and deploy it in seconds with a free `.vercel.app` URL.

### Method 2: Vercel CLI
1. Open your terminal in this project directory.
2. Run:
   ```bash
   npx vercel
   ```
3. Follow the CLI prompts to deploy directly.

## 🛠 Features
- Multi-variable filtering (Genre, Decade, Rating, Runtime, Family Night).
- Movie Roulette ("Pick For Me").
- One-click launch to YouTube / Google TV playback.
- LocalStorage persistence for custom tags, ratings, and notes.
