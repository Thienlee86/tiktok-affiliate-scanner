# Security rules

- Never expose TIKTOK_APP_SECRET to browser JavaScript.
- Never commit access or refresh tokens.
- OAuth code exchange must happen server-side.
- Request the minimum Creator scope required.
- Validate OAuth state before accepting a callback.
- Persist only data required by the Scanner.
- Public dashboard data must never contain credentials or tokens.
