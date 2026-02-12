# Technical Specification (TS)  
## Development of the Cloud Expert Landing Page

---

## 1. General Objective

Develop a modern, responsive landing page for **Cloud Expert**, a company providing cloud services.

The design should have visual stylistic similarity to the homepage of https://ibacloud.by (without copying structure, code, or text).

It is allowed to use Playwright MCP to analyze **only the homepage of ibacloud.by** in order to study its visual approach, composition, and UX patterns.

### Important:
- The content must be original (rewritten or completely new).
- Direct copying of text is strictly prohibited.
- The website must look modern, technological, and aligned with 2025 UI/UX trends.

---

## 2. General Design Requirements

### 2.1 Visual Style

- Minimalistic, technological, corporate style.
- Clean grid layout.
- Sufficient white space.
- Clear visual hierarchy.
- Modern UI patterns.
- Smooth hover effects and micro-animations (without overloading the interface).

---

### 2.2 Color Palette

- Primary background: predominantly white.
- Alternative sections: dark background (deep graphite or dark blue).
- Accent elements: pleasant shades of blue (business blue).

Blue should be used for:
- Buttons,
- Links,
- Active elements,
- Tabs,
- Icons and graphical accents.

Changing the order of light and dark sections is allowed to achieve a more stylish visual result.

---

## 3. Page Structure (UI)

---

### 1. Header

The style should be inspired by https://ibacloud.by (without copying).

**Structure:**
- Left side — placeholder for a logo.
- No navigation menu.
- Right side:
  - “Login” link (leading to an external resource).
  - “Order” button (scrolls to the “Contact Us” form).

The header must NOT be fixed (non-sticky).

---

### 2. Main Block (Hero Section)

Structurally similar to the `intro container` block on https://ibacloud.by.

**Layout:**

**Left side:**
- Heading (H1)
- Subheading
- Short description
- CTA button

**Right side:**
- Image symbolizing a multifunctional cloud platform.
- If a suitable image is not available — create a graphic placeholder.

Block height — approximately 100vh.

---

### 3. Tabs Section (5 Categories)

**Structure:**
- Heading
- Description
- Tabs block (5 items):

1. Compute  
2. Tools  
3. Network  
4. Storage  
5. Support  

**Tab Format:**
- Icon/image
- Tab title
- Active tab highlighted in blue
- The first tab is open by default

**Active Tab Content:**
- Dark background
- White text
- Grid layout
- Each item includes:
  - Title
  - Short description

---

### 4. GPU Virtual Machines Section

- Small height
- Light background
- Marketing-focused text
- Optional visual accent or mini-graphic

---

### 5. Machine Learning Section

- Dark background
- Description of GPU provisioning for ML/AI tasks
- Small infographic (icons, diagram, or GPU cluster visualization)
- Compact height

---

### 6. Benefits of GPU in the Cloud

- Light background
- Grid layout of advantages

Each item includes:
- Icon or image
- Title
- Short description

---

### 7. Modern IT Solutions Section

- Dark background
- Brief description of modern IT solutions provided by the company
- Relatively small section height

---

### 8. Marketing CTA Section

Height — approximately 50% of the screen.

Contains:
- Large headline  
  “Achieve Your Goals With Us”
- Supporting text
- CTA button

---

### 9. Contact Form Section

Light background.

**Form structure:**
- Heading
- Email field (required)
- Comment field (optional)
- Two checkboxes:

1.  
I confirm that I have ознакомлен(а) with the Organization’s Personal Data Protection Policy and the Notice on Personal Data Processing Conditions.

2.  
I give my free, explicit, and informed consent to the processing of my personal data, the list and processing conditions of which are specified in the Notice on Personal Data Processing Conditions.

- “Submit” button

---

### Contact Information (within the same section)

- Connection consultation
- Technical support
- Email addresses
- Phone numbers
- Social media links

---

### 10. Footer

- Dark background
- Logo (placeholder)
- Copyright
- Additional links (if necessary)

---

### 11. Cookie Notification

Upon the user’s first visit, a notification appears at the bottom of the page:

> We use cookies, and your personal data may be processed through our website. The use of cookies ensures efficient operation of the resource and improves user interaction.

The message must include placeholder links to PDF documents:

- Cookie Policy  
- Organization’s Personal Data Protection Policy  
- Notice on Personal Data Processing Conditions  

Add an “Accept” button.

---

## 4. Additional Requirements

### Allowed:

- Changing the order of background colors.
- Adding additional sections if it improves the design.
- Adding modern animations and visual effects.

---

## 5. Internationalization Requirements (i18n)

- Primary language — Russian.
- The website must technically support additional languages.

Mandatory requirements:
- All texts must be stored in a JSON file.
- An i18n mechanism must be used.
- No hardcoded strings in the code.
- Translation structure must be logically organized (hero, tabs, form, etc.).

---

## 6. Content Requirements

- It is allowed to use the semantic basis of ibacloud.by.
- Text must be:
  - Rewritten,
  - Improved,
  - Adapted,
  - Or fully original.

Allowed:
- Strengthening the marketing component.
- Making wording more modern.
- Adding additional content if necessary.

---

## 7. Technical Expectations

- Responsive layout (mobile-first).
- Semantic HTML markup.
- Clean component structure.
- Scalability.
- Production-ready implementation.
- Modern frontend development best practices.

## 8. SEO and Accessibility Requirements

### 8.1 SEO Requirements

The application must be optimized for search engines.

Mandatory SEO requirements:

- Proper semantic structure (`header`, `main`, `section`, `article`, `footer`, etc.).
- Correct heading hierarchy (H1–H6) without skipping levels.
- Unique and meaningful `<title>` and `<meta description>`.
- Open Graph and social sharing meta tags.
- Clean and readable URLs (if applicable).
- Optimized images (modern formats where possible, proper `alt` attributes).
- Fast loading performance (Core Web Vitals optimization).
- Structured data (Schema.org) where applicable.

---