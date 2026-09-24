import {goalProgress} from "./goals.js";
export function buildDashboard({run=null,revenueSummary={},monthlyTarget=20000000}={}){
 const net=Number(revenueSummary.net_revenue)||0;
 return {generated_at:new Date().toISOString(),scan:{confirmed:Boolean(run?.report?.creator_center_scanned),products_seen:Number(run?.report?.products_seen)||0,candidate_count:Array.isArray(run?.candidates)?run.candidates.length:0,experiment:run?.experiment??null},revenue:{confirmed_commission:Number(revenueSummary.commission)||0,cashback:Number(revenueSummary.cashback)||0,net_revenue:net,confirmed_orders:Number(revenueSummary.confirmed_orders)||0},goal:goalProgress(net,monthlyTarget)};
}
