export const REVENUE_MILESTONES=[1,100000,1000000,5000000,20000000];
export function goalProgress(netRevenue=0,target=20000000){
 const value=Math.max(0,Number(netRevenue)||0), t=Math.max(1,Number(target)||20000000);
 const next=REVENUE_MILESTONES.find(x=>x>value)??t;
 return {value,target:t,progress_pct:Math.min(100,Math.round(value/t*10000)/100),next_milestone:next,remaining_to_target:Math.max(0,t-value)};
}
export function requiredOrders(targetNet,netPerOrder){
 const t=Number(targetNet)||0,n=Number(netPerOrder)||0;
 return n>0?Math.ceil(t/n):null;
}
