function finite(v) { const n=Number(v); return Number.isFinite(n)?n:null; }
export function snapshotProducts(products=[], capturedAt=new Date().toISOString()) {
  return products.filter(p=>p?.id).map(p=>({
    id:String(p.id), title:p.title||"", captured_at:capturedAt,
    units_sold:finite(p.units_sold), commission:finite(p.commission),
    commission_rate:finite(p.commission_rate), rating:finite(p.rating),
    sales_7d:finite(p.sales_7d)
  }));
}
export function deriveMomentum(history=[], productId) {
  const rows=history.filter(x=>String(x.id)===String(productId) && Number.isFinite(x.units_sold))
    .sort((a,b)=>String(a.captured_at).localeCompare(String(b.captured_at)));
  if(rows.length<2) return {delta_units:null, status:"insufficient_history"};
  const delta=rows.at(-1).units_sold-rows[0].units_sold;
  return {delta_units:delta, status:delta>0?"rising":delta<0?"falling":"flat"};
}
