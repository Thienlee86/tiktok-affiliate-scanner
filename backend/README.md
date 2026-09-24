# Secure backend scaffold

This folder is a provider-neutral scaffold for the TikTok Shop Creator OAuth/backend.

## Security
Never commit TikTok App Secret, access_token or refresh_token. Store them only as deployment environment secrets.

## Environment variables
- TIKTOK_APP_KEY
- TIKTOK_APP_SECRET
- TIKTOK_REDIRECT_URI
- TOKEN_ENCRYPTION_KEY (when persistent token storage is enabled)

## Intended flow
1. Creator authorizes the app.
2. TikTok redirects to the backend callback with an authorization code.
3. Backend exchanges the code server-side.
4. Backend verifies Creator user type and granted scopes.
5. Tokens are stored securely and refreshed server-side.
6. Scheduled jobs call Creator Affiliate APIs and publish sanitized product data to the Scanner.

No production credentials are required to keep developing this scaffold.
