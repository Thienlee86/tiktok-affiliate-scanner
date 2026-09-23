export function buildHealth({readiness={},lastRun=null,lastError=null}={}){
 const status=lastError?"degraded":readiness.ready?"ready":"waiting";
 return {status,ready:Boolean(readiness.ready),next_gate:readiness.next??null,last_run_at:lastRun?.report?.run_at??null,last_scan_confirmed:Boolean(lastRun?.report?.creator_center_scanned),last_error:lastError?String(lastError):null};
}
