# Scanner runbook

A scheduled run must first establish whether an authorized Creator Affiliate source is actually available. If not, it may process previously persisted project data but must set creator_center_scanned=false and must not imply that TikTok Creator Center was scanned.

When access exists:
1. run discovery passes for units_sold, commission, commission_rate;
2. merge and dedupe by product ID;
3. score confirmed API metrics;
4. save a timestamped snapshot;
5. derive momentum from prior snapshots;
6. classify data quality and candidate band;
7. publish only sanitized candidate data and a compact run report.

Candidate eligibility currently requires units_sold, commission and commission_rate plus score >= 50 and inventory not explicitly false. Thresholds are provisional until real conversion/order history exists.

Native rating and native 7-day sales must not be fabricated. If future real API responses expose them, add them only after schema validation and tests.
