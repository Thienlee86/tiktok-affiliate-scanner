# Alerting and idempotency

Automation must surface meaningful state changes without creating false income signals.

Alerts are generated for:
- degraded execution;
- waiting external gate;
- no confirmed Creator scan;
- increase in confirmed net revenue;
- new confirmed attributed order.

Revenue events receive deterministic keys when the source does not provide a stable event ID. Duplicate imports are removed before aggregation so repeated polling cannot inflate revenue.

Future notification delivery can plug into this module. No paid messaging provider is required at this stage.
