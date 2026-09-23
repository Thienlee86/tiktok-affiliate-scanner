# Data pipeline v1

Each scheduled run performs three Creator Affiliate discovery passes: units_sold DESC, commission DESC, and commission_rate DESC. Results are merged by product ID and scored only from API-confirmed metrics.

Every run should persist a timestamped snapshot. Repeated snapshots allow momentum to be derived without pretending cumulative units_sold is a native 7-day metric. Native rating or 7-day sales remain null until a real API response proves those fields exist.

The public dashboard receives only sanitized product fields; tokens, app secret and raw authorization data never enter frontend JSON.

Target schedule: 08:00, 12:00, 18:00, 21:00 Asia/Ho_Chi_Minh. Provider-specific cron and storage remain deferred until a free-tier backend is selected and Creator OAuth is approved.
