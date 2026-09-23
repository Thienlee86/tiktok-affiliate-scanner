# TikTok client preparation

Prepared while Partner registration is under review:
- Creator Open Collaboration product-search request builder;
- server-side HMAC signing helper;
- response normalization into Scanner fields;
- rating and native 7-day sales deliberately remain null until an actual Creator API response proves those fields;
- App Secret and Creator access token are runtime-only inputs and must never be committed or sent to the browser.

Before production use, validate signing against the current official TikTok Shop signing specification and a real authorized request. Do not claim live Creator Center access until that succeeds.
