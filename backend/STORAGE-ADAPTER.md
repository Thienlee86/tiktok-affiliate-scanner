# Storage adapter

The core scanner no longer needs to know which database provider is used. It talks to a small store interface for snapshots, run reports and revenue events.

A MemoryStore exists only for local/testing use. Production can later plug in a free-tier database without rewriting discovery, scoring, candidate selection or revenue logic.

Persisted domains:
- product snapshots for momentum/history;
- run reports and selected candidates;
- revenue events for click/order/commission/cashback attribution.

Secrets and Creator access/refresh tokens are deliberately outside this public data adapter and require encrypted/server-side secret storage in production.
