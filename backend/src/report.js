export function buildRunReport({runAt, sourceAccess=false, products=[], candidates=[]}={}) {
  const missing={};
  for(const p of products) for(const f of (p.missing_fields||[])) missing[f]=(missing[f]||0)+1;
  return {
    run_at:runAt||new Date().toISOString(),
    creator_center_scanned:Boolean(sourceAccess),
    products_seen:products.length,
    candidates:candidates.length,
    missing_fields:missing,
    note:sourceAccess?"Creator Affiliate source was available for this run.":"Creator Affiliate source was not available; no claim of Creator Center scanning is made."
  };
}
