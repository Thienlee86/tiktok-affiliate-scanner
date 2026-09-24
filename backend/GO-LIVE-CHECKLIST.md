# Go-live gates

Current external gate: TikTok Partner registration review.

After approval, proceed in this order:
1. confirm Partner approval;
2. complete/confirm app review for ThienLee Affiliate Scanner;
3. confirm creator.affiliate_collaboration.read remains enabled/approved;
4. deploy secure backend on an agreed free-tier provider;
5. change TikTok redirect URI from static GitHub callback to backend callback;
6. account owner completes Creator OAuth consent;
7. backend exchanges code and stores tokens server-side;
8. make one real Creator product-search request and inspect response fields;
9. enable durable snapshots and scheduled runs at 08:00, 12:00, 18:00 and 21:00 Asia/Ho_Chi_Minh;
10. expose sanitized candidates/revenue status to dashboard.

Never publish secrets, tokens, identity documents, or raw authorization codes. Do not enable paid infrastructure without explicit owner approval.
