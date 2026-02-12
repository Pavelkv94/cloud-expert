# Development Plan — Cloud Expert Landing Page

Generated using Sequential Thinking MCP + Context7 MCP.

---

## Stack

- **Framework:** Next.js 16 (App Router)
- **Language:** TypeScript
- **Styling:** Tailwind CSS v4 (via `@tailwindcss/postcss`, no `tailwind.config.js`)
- **i18n:** `next-intl` (locale routing, Server Component support, type-safe)
- **Icons:** `lucide-react` (tree-shakable SVG icons)
- **Animations:** CSS transitions only (no extra animation libraries)
- **SEO:** Next.js Metadata API + Schema.org JSON-LD

---

## New Dependencies to Install

```bash
npm install next-intl lucide-react
```

---

## Final Directory Structure

```
cloud-expert/
├── app/
│   ├── [locale]/
│   │   ├── layout.tsx          # Locale layout: setRequestLocale, NextIntlClientProvider, metadata
│   │   └── page.tsx            # Page: assembles all sections
│   ├── globals.css             # Tailwind v4 @theme, CSS variables, base styles
│   ├── layout.tsx              # Root layout: <html lang> shell only
│   └── favicon.ico
├── components/
│   ├── layout/
│   │   ├── Header.tsx          # Server: logo placeholder, Login link, Order button
│   │   ├── Footer.tsx          # Server: dark bg, logo, copyright
│   │   └── CookieNotice.tsx    # Client: localStorage-based cookie banner
│   ├── sections/
│   │   ├── HeroSection.tsx     # Server: 100vh, left text + right SVG illustration
│   │   ├── TabsSection.tsx     # Client: 5 tabs (Compute/Tools/Network/Storage/Support)
│   │   ├── GpuVmsSection.tsx   # Server: light bg, GPU VM marketing text
│   │   ├── MachineLearningSection.tsx  # Server: dark bg, ML/AI GPU description
│   │   ├── GpuBenefitsSection.tsx      # Server: light bg, grid of benefits
│   │   ├── ItSolutionsSection.tsx      # Server: dark bg, modern IT solutions
│   │   ├── CtaSection.tsx      # Server: 50vh, "Достигайте целей вместе с нами"
│   │   └── ContactSection.tsx  # Client: form + contact info side-by-side
│   ├── ui/
│   │   ├── Button.tsx          # Reusable button (primary/secondary/outline)
│   │   └── SectionWrapper.tsx  # Consistent section padding + container
│   └── SchemaOrg.tsx           # JSON-LD structured data (Organization schema)
├── i18n/
│   ├── routing.ts              # defineRouting: locales ['ru', 'en'], defaultLocale 'ru'
│   └── request.ts              # getRequestConfig: loads messages/[locale].json
├── messages/
│   ├── ru.json                 # Primary language (Russian) — complete content
│   └── en.json                 # English placeholder (same keys, English text)
├── public/
│   ├── docs/
│   │   ├── cookie-policy.pdf   # Placeholder PDF
│   │   ├── privacy-policy.pdf  # Placeholder PDF
│   │   └── data-processing.pdf # Placeholder PDF
│   └── images/
│       └── hero-cloud.svg      # Hero section SVG illustration
├── middleware.ts               # next-intl locale detection & routing
├── next.config.ts              # Add next-intl plugin
└── tsconfig.json               # Ensure path aliases (@/* → root)
```

---

## Implementation Phases

### Phase 1 — Foundation & i18n Setup

**Files to create/modify:**

1. **`middleware.ts`** (new)
   ```typescript
   import createMiddleware from 'next-intl/middleware';
   import { routing } from './i18n/routing';
   export default createMiddleware(routing);
   export const config = {
     matcher: '/((?!api|_next|_vercel|.*\\..*).*)'
   };
   ```

2. **`i18n/routing.ts`** (new)
   ```typescript
   import { defineRouting } from 'next-intl/routing';
   export const routing = defineRouting({
     locales: ['ru', 'en'],
     defaultLocale: 'ru'
   });
   ```

3. **`i18n/request.ts`** (new)
   ```typescript
   import { getRequestConfig } from 'next-intl/server';
   import { hasLocale } from 'next-intl';
   import { routing } from './routing';
   export default getRequestConfig(async ({ requestLocale }) => {
     const requested = await requestLocale;
     const locale = hasLocale(routing.locales, requested) ? requested : routing.defaultLocale;
     return { locale, messages: (await import(`../messages/${locale}.json`)).default };
   });
   ```

4. **`next.config.ts`** (modify)
   - Wrap existing config with `createNextIntlPlugin('./i18n/request.ts')`

5. **`app/layout.tsx`** (modify)
   - Minimal root layout: just `<html>` and `<body>` shell (locale layout handles the rest)

---

### Phase 2 — Translation Files

**`messages/ru.json`** — complete structure:
```json
{
  "meta": {
    "title": "Cloud Expert — Облачные сервисы нового поколения",
    "description": "Cloud Expert — надёжная облачная платформа для бизнеса. Виртуальные машины, GPU, хранилище и поддержка 24/7."
  },
  "header": {
    "login": "Войти",
    "order": "Заказать"
  },
  "hero": {
    "title": "Облачная платформа нового поколения",
    "subtitle": "Инфраструктура без ограничений",
    "description": "Масштабируемые облачные ресурсы для вашего бизнеса — от виртуальных машин до GPU-кластеров для ИИ.",
    "cta": "Начать работу"
  },
  "tabs": {
    "heading": "Полный спектр облачных сервисов",
    "description": "Выберите подходящие инструменты для вашей инфраструктуры",
    "items": {
      "compute": { "label": "Вычисления", "items": [...] },
      "tools": { "label": "Инструменты", "items": [...] },
      "network": { "label": "Сеть", "items": [...] },
      "storage": { "label": "Хранилище", "items": [...] },
      "support": { "label": "Поддержка", "items": [...] }
    }
  },
  "gpuVms": { ... },
  "machineLearning": { ... },
  "gpuBenefits": { "heading": "...", "items": [...] },
  "itSolutions": { ... },
  "cta": {
    "heading": "Достигайте целей вместе с нами",
    "description": "...",
    "button": "Связаться с нами"
  },
  "contact": {
    "heading": "Связаться с нами",
    "form": {
      "email": "Email *",
      "comment": "Комментарий",
      "consent1": "...",
      "consent2": "...",
      "submit": "Отправить"
    },
    "info": { "consultation": "...", "support": "...", "email": "...", "phone": "..." }
  },
  "footer": { "copyright": "© 2025 Cloud Expert. Все права защищены." },
  "cookie": {
    "text": "Мы используем файлы cookie...",
    "accept": "Принять",
    "links": {
      "cookiePolicy": "Политика cookie",
      "privacyPolicy": "Политика защиты персональных данных",
      "dataProcessing": "Уведомление об обработке персональных данных"
    }
  }
}
```

**`messages/en.json`** — same keys with English placeholder text.

---

### Phase 3 — Global Styles

**`app/globals.css`** (modify)

Add Tailwind v4 `@theme` block:
```css
@import "tailwindcss";

@theme {
  --color-brand-blue: #2563eb;
  --color-brand-blue-dark: #1d4ed8;
  --color-brand-dark: #0f172a;
  --color-brand-graphite: #1e293b;
  --color-brand-light: #f8fafc;
  --font-sans: 'Geist', var(--font-geist-sans), system-ui, sans-serif;
}

/* Smooth scrolling */
html { scroll-behavior: smooth; }

/* Section transitions */
.section-fade-in {
  opacity: 0;
  transform: translateY(20px);
  transition: opacity 0.6s ease, transform 0.6s ease;
}
```

---

### Phase 4 — Layout Components

#### `app/[locale]/layout.tsx`
- `setRequestLocale(locale)` for static rendering
- `NextIntlClientProvider` wrapping children
- Full SEO `metadata` export (title, description, OG, Twitter card)
- Schema.org `<SchemaOrg />` component

#### `components/layout/Header.tsx` (Server Component)
- White background, no sticky
- Left: `<div>` with logo placeholder (company name or SVG)
- Right: Login anchor + Order button (scrolls to `#contact`)
- Responsive: mobile hamburger not needed (no nav menu)

#### `components/layout/Footer.tsx` (Server Component)
- `bg-brand-dark` (dark background)
- Logo placeholder
- Copyright text from translations
- Optional social links

#### `components/layout/CookieNotice.tsx` (`'use client'`)
- Check `localStorage.getItem('cookie-accepted')` on mount
- If not accepted: render fixed bottom banner
- Links to `/docs/cookie-policy.pdf`, etc.
- "Accept" button: sets localStorage, hides banner

---

### Phase 5 — Section Components

#### `HeroSection.tsx` (Server Component)
- `min-h-screen` (100vh)
- Two-column layout: `grid grid-cols-1 lg:grid-cols-2`
- Left: `<h1>` + subtitle `<p>` + description `<p>` + `<Button>` (blue, links to `#contact`)
- Right: `<Image>` SVG cloud illustration
- Light/gradient background

#### `TabsSection.tsx` (`'use client'`)
- `useState` for active tab (default: 'compute')
- Tab bar: 5 buttons with icon + label
- Active tab button: blue underline/border, blue text
- Content area: dark background, white text, CSS grid
- Each grid item: bold title + description paragraph
- Icons: lucide-react (Server, Wrench, Network, HardDrive, Headphones)

#### `GpuVmsSection.tsx` (Server Component)
- Light background
- Compact height (py-16)
- Left text: marketing headline + description
- Right: small GPU graphic/icon (lucide `Cpu` or custom SVG)

#### `MachineLearningSection.tsx` (Server Component)
- Dark background (`bg-brand-dark`)
- GPU provisioning for ML/AI description
- Small infographic row: icons with labels (GPU, Speed, Scale, etc.)

#### `GpuBenefitsSection.tsx` (Server Component)
- Light background
- `grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4` — 8 benefit cards
- Each card: icon (lucide) + title + short description

#### `ItSolutionsSection.tsx` (Server Component)
- Dark background
- Compact height
- Brief description of modern IT solutions

#### `CtaSection.tsx` (Server Component)
- `min-h-[50vh]` centered content
- Large `<h2>` headline
- Supporting text
- Blue CTA button → scrolls to `#contact`
- Gradient or blue background

#### `ContactSection.tsx` (`'use client'`)
- `id="contact"` for scroll targeting
- Light background
- Two columns: form (left) + contact info (right)
- Form state: email, comment, consent1, consent2
- Submit: `preventDefault`, show success message (no backend)
- Contact info: consultation/support labels, email, phone, social icon links

---

### Phase 6 — UI Primitives

#### `components/ui/Button.tsx`
```typescript
type ButtonProps = {
  variant?: 'primary' | 'outline';
  href?: string;
  onClick?: () => void;
  children: React.ReactNode;
  className?: string;
};
```
- `primary`: `bg-brand-blue text-white hover:bg-brand-blue-dark`
- `outline`: `border border-brand-blue text-brand-blue hover:bg-brand-blue hover:text-white`
- Renders `<a>` if `href` provided, `<button>` otherwise

#### `components/ui/SectionWrapper.tsx`
```typescript
// Consistent max-width container + vertical padding
<section className={`py-20 ${bgClass}`}>
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    {children}
  </div>
</section>
```

---

### Phase 7 — Page Assembly

**`app/[locale]/page.tsx`**
```typescript
import Header from '@/components/layout/Header';
import HeroSection from '@/components/sections/HeroSection';
// ... all section imports
import Footer from '@/components/layout/Footer';
import CookieNotice from '@/components/layout/CookieNotice';

export default function HomePage() {
  return (
    <>
      <Header />
      <main>
        <HeroSection />
        <TabsSection />
        <GpuVmsSection />
        <MachineLearningSection />
        <GpuBenefitsSection />
        <ItSolutionsSection />
        <CtaSection />
        <ContactSection />
      </main>
      <Footer />
      <CookieNotice />
    </>
  );
}
```

---

### Phase 8 — SEO & Structured Data

**`app/[locale]/layout.tsx` — metadata export:**
```typescript
export const metadata: Metadata = {
  title: t('meta.title'),
  description: t('meta.description'),
  openGraph: {
    title: '...',
    description: '...',
    type: 'website',
    locale: 'ru_RU',
    siteName: 'Cloud Expert',
  },
  twitter: { card: 'summary_large_image' },
  robots: { index: true, follow: true },
};
```

**`components/SchemaOrg.tsx`** — JSON-LD script tag:
```json
{
  "@context": "https://schema.org",
  "@type": "Organization",
  "name": "Cloud Expert",
  "description": "...",
  "url": "https://cloud-expert.by",
  "contactPoint": { "@type": "ContactPoint", ... }
}
```

---

### Phase 9 — Hero SVG Illustration

Create `public/images/hero-cloud.svg`:
- Abstract cloud infrastructure visualization
- Server nodes connected to cloud with data flow lines
- Blue accent colors matching brand palette
- Clean, minimal, corporate style

---

### Phase 10 — Public PDF Placeholders

Create empty placeholder files:
- `public/docs/cookie-policy.pdf`
- `public/docs/privacy-policy.pdf`
- `public/docs/data-processing.pdf`

---

## Responsive Breakpoints (Tailwind v4)

| Breakpoint | Usage |
|------------|-------|
| `sm` (640px) | 2-column grids |
| `md` (768px) | Navigation adjustments |
| `lg` (1024px) | Full 2-column hero, side-by-side contact |
| `xl` (1280px) | Max content width, generous whitespace |

---

## Color Palette

| Token | Hex | Usage |
|-------|-----|-------|
| `brand-blue` | `#2563eb` | Buttons, links, active tabs, icons |
| `brand-blue-dark` | `#1d4ed8` | Button hover states |
| `brand-dark` | `#0f172a` | Dark section backgrounds |
| `brand-graphite` | `#1e293b` | Tab content backgrounds |
| `brand-light` | `#f8fafc` | Light section backgrounds |

---

## Component Type Reference

| Component | Type | Reason |
|-----------|------|--------|
| Header | Server | Static content only |
| HeroSection | Server | Static content only |
| TabsSection | **Client** | Tab switching state |
| GpuVmsSection | Server | Static |
| MachineLearningSection | Server | Static |
| GpuBenefitsSection | Server | Static |
| ItSolutionsSection | Server | Static |
| CtaSection | Server | Static |
| ContactSection | **Client** | Form state + validation |
| Footer | Server | Static |
| CookieNotice | **Client** | localStorage access |

---

## Implementation Order

1. `npm install next-intl lucide-react`
2. `next.config.ts` — add next-intl plugin
3. `i18n/routing.ts` + `i18n/request.ts`
4. `middleware.ts`
5. `messages/ru.json` (complete) + `messages/en.json` (placeholder)
6. `app/globals.css` — Tailwind v4 @theme tokens
7. `app/layout.tsx` (root, minimal)
8. `app/[locale]/layout.tsx` (locale, metadata, providers)
9. `components/ui/Button.tsx` + `SectionWrapper.tsx`
10. `components/layout/Header.tsx`
11. `components/layout/Footer.tsx`
12. `components/layout/CookieNotice.tsx`
13. `public/images/hero-cloud.svg`
14. `components/sections/HeroSection.tsx`
15. `components/sections/TabsSection.tsx`
16. `components/sections/GpuVmsSection.tsx`
17. `components/sections/MachineLearningSection.tsx`
18. `components/sections/GpuBenefitsSection.tsx`
19. `components/sections/ItSolutionsSection.tsx`
20. `components/sections/CtaSection.tsx`
21. `components/sections/ContactSection.tsx`
22. `components/SchemaOrg.tsx`
23. `app/[locale]/page.tsx` (assembly)
24. `public/docs/` placeholder PDFs
25. Final responsive + accessibility review
