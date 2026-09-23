function n(v){const x=Number(v);return Number.isFinite(x)?x:0;}
export function summarizeRevenue(events=[]){
  const s={clicks:0,orders:0,confirmed_orders:0,commission:0,cashback:0,net_revenue:0};
  for(const e of events){
    if(e.type==="click") s.clicks++;
    if(e.type==="order"){s.orders++;if(e.status==="confirmed")s.confirmed_orders++;}
    if(e.type==="commission" && e.status==="confirmed") s.commission+=n(e.amount);
    if(e.type==="cashback" && ["approved","paid"].includes(e.status)) s.cashback+=n(e.amount);
  }
  s.net_revenue=s.commission-s.cashback;
  s.conversion_rate=s.clicks?s.confirmed_orders/s.clicks:null;
  s.commission_per_order=s.confirmed_orders?s.commission/s.confirmed_orders:null;
  return s;
}
export function revenueByProduct(events=[]){
  const groups=new Map();
  for(const e of events){const id=String(e.product_id||"unknown");if(!groups.has(id))groups.set(id,[]);groups.get(id).push(e);}
  return [...groups].map(([product_id,rows])=>({product_id,...summarizeRevenue(rows)})).sort((a,b)=>b.net_revenue-a.net_revenue);
}
