# Pipeline status

The backend modules are now wired into one provider-neutral run:

authorized Creator source -> three discovery passes -> dedupe -> score -> snapshot -> momentum -> data-quality gate -> candidate selection -> first-revenue queue -> sanitized output -> truthful run report.

If Creator source access is absent, the pipeline exits safely and reports creator_center_scanned=false.

Still intentionally deferred:
- production TikTok request signing/client, until OAuth/review is usable;
- durable database/storage provider;
- production cron provider;
- frontend replacement of localStorage.

Those choices should be made only after confirming Creator authorization and selecting a zero-cost/free-tier deployment path. No paid dependency is required by this pipeline code.
