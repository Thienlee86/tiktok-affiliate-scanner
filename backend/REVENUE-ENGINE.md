# Revenue Engine v1

Purpose: prove the system with real money before optimizing for scale.

Canonical event chain:
product -> affiliate link -> click -> order -> confirmed commission -> cashback -> net revenue.

Rules:
- Pending/estimated commission is never counted as confirmed revenue.
- Cashback reduces net revenue only when approved or paid.
- Scanner score is a discovery signal, not proof of profitability.
- Product ranking for business decisions should gradually incorporate confirmed net revenue and conversion history.
- Keep platform/source identifiers so TikTok and Shopee can share the same revenue model without mixing attribution.

Milestones: first confirmed revenue, 100k VND, 1m/month, 5m/month, 20m/month.

The engine can compute clicks, confirmed orders, conversion rate, confirmed commission, cashback, net revenue and commission/order. Until tracking APIs are connected, unknown values stay unknown rather than being fabricated.
