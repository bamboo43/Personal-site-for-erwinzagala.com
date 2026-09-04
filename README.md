# erwinzagala.com

Personal website draft for **attorney Erwin Zagala** — Filipino lawyer (Legal Access Law Offices), educator/content creator (Legal Guide Philippines), and entrepreneur (Project Gateway / Patient Bridge / Dental Atlas).

Branding target: https://erwinzagala.com (custom domain not purchased yet — used in metadata only for now).

Empty GitHub repo (intended remote, not configured in this draft):
   https://github.com/bamboo43/Personal-site-for-erwizagala.com

## Stack

- Next.js (App Router) + TypeScript
- Tailwind CSS v4
- MDX posts via next-mdx-remote + gray-matter (content/posts)
- Deployable on Vercel

## Getting started
``bash
npm install
npm run dev
```

Open http://localhost:3000

### Production build

```bash
npm run build
npm start
```

## Project structure

- `content/posts/` — MDX blog posts (frontmatter: title, description, date, tags)
- `src/app/` — App Router pages (home, about, blog, contact)
- `src/components/` — UI building blocks
- `src/lib/` — Site config + post helpers

## Notes

- Sample blog posts are clearly marked as draft/placeholder content — not legal advice.
- Featured venture/practice links are placeholders and may point to temporary URLs.
- No analytics IDs or secrets are included.
- Dark mode: simple client toggle with localStorage + system preference.
