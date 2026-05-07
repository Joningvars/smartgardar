---
inclusion: always
---

# Technical Stack

Smartgarðar is a marketing website for an Icelandic gardening company. The stack should stay simple, fast, maintainable, and suitable for a small business website.

## Pre-Implementation Checklist

Before writing code, answer these in order:

1. **Does this belong on a marketing website?** → Prioritise homepage, services, trust, and contact flow.
2. **Which module?** → Check `03-structure.md` for file placement.
3. **Is this a component, page section, or utility?** → Keep files small and easy to understand.
4. **Existing solution?** → Search the codebase before adding new utilities or components.
5. **Is a new dependency necessary?** → Avoid adding packages unless they clearly improve the site.

## Core Stack

| Layer | Technology | Key Constraint |
| ----- | ---------- | -------------- |
| Build Tool | Vite | Keep config minimal |
| UI | React | Use functional components |
| Language | TypeScript | Avoid `any`; use clear types where useful |
| Styling | TailwindCSS | Use responsive, mobile-first layouts |
| Components | Local React components | Prefer simple custom components over heavy libraries |
| Icons | Lucide React, if already installed | Do not add icon libraries without approval |
| Forms | Native HTML forms or existing form setup | Keep contact forms simple |
| Images | Static assets in `src/assets/` or `public/` | Optimise image sizes before use |
| Routing | React Router only if needed | Avoid routing for a simple one-page site unless requested |
| Deployment | Existing Vite-compatible hosting | Do not change hosting/deployment without approval |

## Architecture Rules

| Pattern | Required | Prohibited |
| ------- | -------- | ---------- |
| Components | Small, focused functional components | Large all-in-one components |
| State | Local component state only when needed | Global state unless clearly justified |
| Styling | Tailwind utility classes and shared layout patterns | Large one-off CSS files unless needed |
| Content | Icelandic copy by default | English placeholders in final UI |
| Forms | Validate required fields | Asking for unnecessary customer data |
| Accessibility | Semantic HTML, labels, alt text, keyboard support | Click-only interactions without accessible labels |
| SEO | Clear title, meta description, headings, and service copy | Generic titles like “Vite + React” |
| Dependencies | Use existing dependencies first | Adding packages for simple UI behavior |

## Utility Commands

Use the package manager already used by this project. Check for `pnpm-lock.yaml`, `package-lock.json`, or `yarn.lock` before installing dependencies.

| Command | When |
| ------- | ---- |
| `npm run dev` / `pnpm dev` | Start local development |
| `npm run build` / `pnpm build` | Check production build |
| `npm run preview` / `pnpm preview` | Preview production build locally |
| `npm run lint` / `pnpm lint` | Run linting if configured |
| `npm run format` / `pnpm format` | Format code if configured |

## Environment

- Never commit secrets.
- Use `.env` or `.env.local` only if the project actually needs environment variables.
- Vite client-side environment variables must start with `VITE_`.
- Do not add databases, authentication, payments, or external services unless explicitly requested.
- For a simple contact form, prefer a lightweight approach that fits a static/marketing website.

## Approved Integrations

Anything not listed here requires user approval.

| Category | Approved |
| -------- | -------- |
| Build Tool | Vite |
| Framework/UI | React |
| Language | TypeScript |
| Styling | TailwindCSS |
| Routing | React Router, only if needed |
| Icons | Lucide React, if already present |
| Forms | Native forms, existing project form setup |
| Images | Static assets in `src/assets/` or `public/` |
| Deployment | Existing Vite-compatible hosting |

## Not Approved Without Explicit Approval

- Next.js
- Database: Supabase, Firebase, MongoDB, PostgreSQL, Prisma, Drizzle
- Authentication: Clerk, Auth0, NextAuth, Supabase Auth
- Payments: Stripe or other payment providers
- CMS: Sanity, Contentful, Strapi, WordPress
- Analytics: Google Analytics, Plausible, PostHog
- Email providers: Resend, SendGrid, Mailchimp
- UI libraries: shadcn/ui, Radix UI, MUI, Chakra UI
- Infrastructure changes: Docker, Cloudflare Workers, custom backend services
- Global state libraries: Redux, Zustand, Jotai, MobX

## Project Priorities

1. Fast loading
2. Mobile-friendly layout
3. Clear Icelandic content
4. Easy contact flow
5. Professional and trustworthy visual design
6. Simple, maintainable React code