# Cloud Expert

## Environment Variables

Copy `.env.local.example` to `.env.local` and fill in the values.

| Variable | Description |
|---|---|
| `NEXT_PUBLIC_COMPANY_NAME` | Company name displayed on the site |
| `NEXT_PUBLIC_HEADER_LOGIN_URL` | URL for the login button in the header |
| `NEXT_PUBLIC_DOCS_URL` | URL for the documentation link |
| `NEXT_PUBLIC_CLIENTS_COUNT` | Number of clients shown in IT Solutions stats |
| `NEXT_PUBLIC_NETWORK_SPEED` | Network speed value shown in IT Solutions stats |
| `NEXT_PUBLIC_CONSULTATION_EMAILS` | Email(s) for connection consultation contact block |
| `NEXT_PUBLIC_CONSULTATION_PHONES` | Phone(s) for connection consultation contact block |
| `NEXT_PUBLIC_SUPPORT_EMAILS` | Email(s) for technical support contact block |
| `NEXT_PUBLIC_SUPPORT_PHONES` | Phone(s) for technical support contact block |
| `NEXT_PUBLIC_SOCIAL_LINKS` | Comma-separated social media URLs |
| `FORMSPREE_FORM_ID` | Formspree form ID for the contact form (server-only, no `NEXT_PUBLIC_` prefix) |

## Development

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Production

```bash
npm install
npm run build
npm run start
```

### Docker

```bash
docker build -t cloud-expert .
docker run -p 3000:3000 --env-file .env.local cloud-expert
```
