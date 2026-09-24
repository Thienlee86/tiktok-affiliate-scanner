# Observability

The backend now exposes provider-neutral health/dashboard builders so production can show whether automation is actually working instead of silently failing.

Health states:
- waiting: an external go-live gate is incomplete;
- ready: all configured gates are satisfied;
- degraded: the latest execution has an error.

Dashboard separates:
- confirmed Creator scan status;
- products seen and candidate count;
- current first-revenue experiment;
- confirmed commission, cashback and net revenue;
- progress toward the monthly target.

No secrets or tokens belong in health/dashboard output.
