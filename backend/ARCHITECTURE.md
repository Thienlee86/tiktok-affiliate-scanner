# Architecture v1

TikTok Creator OAuth -> secure backend -> Creator Affiliate product search -> merge/dedupe -> score -> sanitized JSON -> Scanner dashboard.

Scheduled discovery runs are designed for 08:00, 12:00, 18:00 and 21:00 Asia/Ho_Chi_Minh.

The scoring model is intentionally provisional and uses only confirmed API metrics:
- units_sold: 45%
- commission: 30%
- commission_rate: 25%

Rating and 7-day sales are excluded until the API proves those fields exist.

Deployment provider is deliberately not locked in yet. The backend is kept portable so a free tier can be selected without exposing secrets.
