# Deployment checklist

## Can be completed without account-owner action
- Backend OAuth exchange/refresh implementation
- Creator identity and scope validation
- Product merge/ranking logic
- Secure environment-variable contract
- Tests and deployment-neutral structure

## Requires account owner
1. Partner Center: confirm/enable `creator.affiliate_collaboration.read` under Manage API.
2. Complete any pending partner registration/review required by TikTok.
3. Copy the Creator authorization link from Partner Center.
4. Approve Creator authorization while signed in to the TikTok Shop Creator account.
5. Add deployment secrets directly in the chosen backend provider UI. Never paste secrets into chat.

## Production gate
Do not publish or switch the Redirect URL away from the current test callback until a secure backend URL exists and its callback is verified.
