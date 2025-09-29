# BookYourFuture Starter (Next.js 14 + Tailwind)

Minimal starter for BYF: Home, Services, Case Studies, About, Contact (with Tally embed).

## Quick Start (Vercel + GitHub)
1) Create a **GitHub repo** (e.g., `bookyourfuture`).
2) Upload all files from this folder to the repo.
3) In **Vercel**, click **New Project** → import the GitHub repo → Deploy.
4) Test the preview URL (e.g., `https://bookyourfuture.vercel.app`).
5) Add your domain in **Vercel → Project → Settings → Domains** and update DNS.
6) Edit `app/contact/page.js` → replace `TALLY_URL` with your real Tally form link.
7) Customize copy in each page.

## Local dev (optional)
```bash
npm install
npm run dev
```
Open http://localhost:3000

## Notes
- Tailwind config in `tailwind.config.js`, styles in `app/globals.css`.
- Update meta/OG in `app/layout.js`.
- This starter is intentionally simple and easy to extend.
