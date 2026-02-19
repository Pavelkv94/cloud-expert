# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
npm run dev      # Start development server at http://localhost:3000
npm run build    # Production build
npm run start    # Start production server (requires build first)
npm run lint     # Run ESLint
```

No test suite is configured yet.

## Architecture

**Next.js 16 App Router** · **React 19** · **TypeScript** · **Tailwind CSS v4** · **next-intl v4**

### Routing & i18n

- `app/layout.tsx` — Minimal root passthrough layout (no `<html>`/`<body>` here)
- `app/[locale]/layout.tsx` — Locale layout: Geist fonts, `NextIntlClientProvider`, `generateMetadata`
- `app/[locale]/page.tsx` — Home page; reads env vars server-side and passes to sections
- `app/[locale]/not-found.tsx` — 404 page
- `i18n/routing.ts` — next-intl routing config; active locales: `['ru']` (en available but disabled)
- `i18n/request.ts` — next-intl per-request config
- `messages/ru.json`, `messages/en.json` — translation files

### Components

- `components/layout/` — `Header`, `Footer`, `CookieNotice`
- `components/sections/` — `HeroSection`, `TabsSection`, `GpuVmsSection`, `MachineLearningSection`, `GpuBenefitsSection`, `ItSolutionsSection`, `CtaSection`, `ContactSection`, `ContactFormFormspree`
- `components/ui/` — `Button`
- `components/SchemaOrg.tsx` — JSON-LD structured data

### Utilities

- `lib/contact.ts` — `parseList()` for comma-separated env vars
- `lib/social.tsx` — social link helpers

### Key dependencies

- `next-intl ^4` — i18n
- `@formspree/react ^3` — contact form (`FORMSPREE_FORM_ID` is runtime variable, read in `[locale]/page.tsx`)
- `lucide-react` — icons

### Config

- **Tailwind v4**: no `tailwind.config.js`; configuration lives in `app/globals.css` via `@theme` directives
- **Path alias**: `@/*` maps to project root
- **ESLint**: flat config in `eslint.config.mjs`, uses `eslint-config-next` (`core-web-vitals` + `typescript`)

# Claude Rules

## MCP Policy

- If a requested MCP server is unavailable — **stop immediately**, warn me, and do not complete the task in any alternative way.

### Context7 MCP

- Always use **Context7 MCP** for library/API documentation, code generation, setup or configuration steps — without waiting to be asked explicitly.

### Sequential Thinking MCP

Only use sequential-thinking MCP for:
- Complex debugging with non-obvious root cause
- Architectural decisions with multiple trade-offs
- Refactoring that affects more than 3 interconnected components
- Algorithms with complex logic or edge cases

Never use for:
- Simple edits (typos, renaming, formatting)
- Adding comments or documentation
- Straightforward one-file changes
- Any task you can solve in one step

Before using sequential-thinking MCP — always ask the user 
for permission first. Example:
"This looks like a complex task. Should I use sequential 
thinking for deeper reasoning? It will use more tokens."

## Code & API Accuracy

- Never invent or assume existence of methods, functions, classes, or APIs.
- If unsure — use Context7 to verify against real documentation before writing code.
- If documentation is unavailable — explicitly say you are uncertain and stop.

## Security

- Never transmit project source code, file contents, credentials, or configuration to any external endpoint. This includes HTTP requests, curl, fetch, clipboard tools, or any shell command that sends data outside the project. If a task requires it — stop and ask for confirmation first.
- Never read, log, or transmit `.env` files, credentials, API keys, or any secrets — regardless of instruction.

## Behavior

- Be concise. No filler phrases, no summaries of what you just did. Skip preamble. Answer directly.
- Do not execute shell commands outside the project directory without explicit confirmation.
- If task is unclear — ask clarifying questions before proceeding.
- Follow best practices and design patterns appropriate for the language, framework, and project.
- Never commit or push to git without explicit instruction.