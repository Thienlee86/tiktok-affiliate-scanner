function n(v){const x=Number(v);return Number.isFinite(x)?x:null;}
export function buildFirstRevenueQueue(candidates=[], revenueRows=[]){
 const rev=new Map(revenueRows.map(r=>[String(r.product_id),r]));
 return candidates.map(p=>{
   const r=rev.get(String(p.id))||{};
   const confirmed=n(r.net_revenue)??0, orders=n(r.confirmed_orders)??0;
   const score=n(p.score)??0;
   const priority=confirmed>0 ? 1000+confirmed : score + (p.momentum==="rising"?10:0);
   return {...p,confirmed_net_revenue:confirmed,confirmed_orders:orders,experiment_priority:priority};
 }).sort((a,b)=>b.experiment_priority-a.experiment_priority);
}
export function nextExperiment(queue=[]){
 const unproven=queue.filter(x=>(Number(x.confirmed_net_revenue)||0)<=0);
 return unproven[0]||queue[0]||null;
}
