## Task: Move configuration to environment variables and update the UI

use sequential-thinking mcp

### Part 1. Environment Variables

Extract the following values into separate environment variables (one variable per value):

1. **Company name** — currently `Cloud Expert`
2. **Header link** — URL for the "Sign In" button
3. **Documentation link** — URL for the "Documentation" button
4. **Number of clients** — value from the IT Solutions block
5. **Network speed** — value from the IT Solutions block
6. **Email addresses for the "Connection Consultation" section** — comma-separated with a space, e.g.: `test@example.com, test2@example.com`
7. **Phone numbers for the "Connection Consultation" section** — comma-separated with or without a space, e.g.: `+375 17 123-12-32, +375 17 212-12-12`
8. **Email addresses for the "Technical Support" section** — same format: `test@example.com, test2@example.com`
9. **Phone numbers for the "Technical Support" section** — same format: `+375 17 123-12-32, +375 17 212-12-12`
10. **Social media links** — comma-separated with or without a space, e.g.: `https://www.linkedin.com/in/pavel-mint, https://t.me/pavel-mint`
11. **Formspree Form ID** — the form identifier for the Formspree service

---

### Part 2. UI Changes

**Variable substitution:**
All variables from Part 1 must be injected into the corresponding places in the UI.

**Contact sections ("Connection Consultation" and "Technical Support"):**
- If no email addresses and no phone numbers are defined for a section — do not render that section.
- If a variable contains multiple values separated by commas (with or without a space) — parse them and render each value on a separate line in a column. Each value must have a corresponding icon on its left (email icon or phone icon).

**Footer:**
- In the line `© 2025 Cloud Expert. All rights reserved.`, the year must be injected dynamically using `new Date().getFullYear()` so that the current year is always displayed.

**Contact form:**
- Integrate the Formspree service using the `@formspree/react` package (`npm i @formspree/react`).
- Use context7 to retrieve the up-to-date integration documentation.
- The Form ID must be passed via an environment variable (see item 11 above).

**Social media icons:**
- If the social media links environment variable is not set or is empty — do not render the icons.
- If the variable is set and contains one or more links (comma-separated with or without a space) — parse them and display them in the contacts section where they currently appear.
- Write a utility function that identifies the social network from a URL and returns the corresponding icon. If the social network is not recognized — use a default link icon.