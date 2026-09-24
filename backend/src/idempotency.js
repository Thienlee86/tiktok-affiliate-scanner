import crypto from "node:crypto";
export function eventKey(e={}){
 const stable=[e.platform,e.type,e.order_id,e.product_id,e.status,e.amount,e.occurred_at].map(v=>v??"").join("|");
 return crypto.createHash("sha256").update(stable).digest("hex");
}
export function dedupeEvents(events=[]){
 const seen=new Set();return events.filter(e=>{const k=e.event_id||eventKey(e);if(seen.has(k))return false;seen.add(k);return true;});
}
