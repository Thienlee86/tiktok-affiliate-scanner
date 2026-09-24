export function buildAlerts({health={},run=null,revenue={},previousRevenue={}}={}){
 const alerts=[];
 if(health.status==="degraded") alerts.push({level:"error",code:"SYSTEM_DEGRADED",message:health.last_error||"Scanner execution failed"});
 if(health.status==="waiting") alerts.push({level:"info",code:"WAITING_GATE",message:`Waiting for ${health.next_gate||"external approval"}`});
 if(run?.report?.creator_center_scanned===false) alerts.push({level:"info",code:"NO_CONFIRMED_SCAN",message:"No confirmed Creator Center scan in this run"});
 const now=Number(revenue.net_revenue)||0, before=Number(previousRevenue.net_revenue)||0;
 if(now>before) alerts.push({level:"success",code:"REVENUE_INCREASE",message:`Confirmed net revenue increased by ${now-before}`});
 if((Number(revenue.confirmed_orders)||0)>(Number(previousRevenue.confirmed_orders)||0)) alerts.push({level:"success",code:"NEW_CONFIRMED_ORDER",message:"A new confirmed attributed order was recorded"});
 return alerts;
}
