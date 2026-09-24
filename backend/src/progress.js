export const PROJECT_STAGES=[
 {id:"frontend",weight:15,status:"done"},
 {id:"backend_core",weight:20,status:"done"},
 {id:"revenue_engine",weight:10,status:"done"},
 {id:"security_observability",weight:10,status:"done"},
 {id:"partner_review",weight:10,status:"waiting"},
 {id:"creator_oauth_live_api",weight:15,status:"blocked"},
 {id:"durable_storage_cron",weight:10,status:"prepared"},
 {id:"dashboard_live_data",weight:5,status:"prepared"},
 {id:"first_revenue_validation",weight:5,status:"blocked"}
];
export function projectProgress(stages=PROJECT_STAGES){
 const earned=stages.reduce((s,x)=>s+x.weight*(x.status==="done"?1:x.status==="prepared"?0.5:0),0);
 return {percent:Math.round(earned),stages,next_gate:"partner_review"};
}
