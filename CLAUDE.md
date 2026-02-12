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

This is a **Next.js 16 App Router** project with **React 19**, **TypeScript**, and **Tailwind CSS v4**.

- `app/layout.tsx` — Root layout with Geist font setup (CSS variables `--font-geist-sans`, `--font-geist-mono`)
- `app/page.tsx` — Home page (the entry point to build from)
- `app/globals.css` — Global styles; Tailwind is imported here via PostCSS

**Tailwind v4** is used (via `@tailwindcss/postcss`), which differs from v3: no `tailwind.config.js`, configuration lives in CSS using `@theme` directives.

**ESLint** uses `eslint-config-next` with both `core-web-vitals` and `typescript` rule sets (flat config in `eslint.config.mjs`).

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