# Deploy Portfolio to GitHub Pages (Shareable URL)

Your portfolio will be live at:

## Your live URL (share this)

**https://ipedirisinghe2003-byte.github.io/portfolio/**

Anyone with this link can view your portfolio.

---

## Steps to launch (do this once)

### 1. Build the project (so `dist/` is up to date)

In the project folder, run:

```bash
npm run build
```

### 2. Push your code to GitHub

If you haven’t linked this folder to your repo yet:

```bash
git init
git add .
git commit -m "Portfolio ready for GitHub Pages"
git branch -M main
git remote add origin https://github.com/ipedirisinghe2003-byte/portfolio.git
git push -u origin main
```

If the repo is already connected, just commit and push:

```bash
git add .
git commit -m "Update portfolio for GitHub Pages"
git push origin main
```

**Important:** Make sure `dist/`, `src/`, `images/`, and `index.html` are committed (not in `.gitignore`). GitHub Pages will serve these files as-is.

### 3. Turn on GitHub Pages

1. Open: **https://github.com/ipedirisinghe2003-byte/portfolio**
2. Click **Settings**
3. In the left sidebar, click **Pages** (under “Code and automation”)
4. Under **Build and deployment**:
   - **Source:** choose **Deploy from a branch**
   - **Branch:** select **main** and **/ (root)**
5. Click **Save**

### 4. Wait 1–2 minutes

GitHub will build and publish your site. When it’s ready, the same **Pages** settings page will show: “Your site is live at **https://ipedirisinghe2003-byte.github.io/portfolio/**”.

---

## Sharing your portfolio

Send this link to anyone:

**https://ipedirisinghe2003-byte.github.io/portfolio/**

No login or special access is needed; it’s a public page.

---

## After you change the site

1. Run `npm run build` if you changed TypeScript/CSS.
2. Commit and push to `main`:
   ```bash
   git add .
   git commit -m "Update portfolio"
   git push origin main
   ```
3. GitHub Pages will update automatically (usually within a couple of minutes).
