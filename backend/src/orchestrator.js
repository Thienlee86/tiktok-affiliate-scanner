import {runScanner} from "./pipeline.js";
import {revenueByProduct} from "./revenue.js";
import {validateStore} from "./store.js";
export async function executeScheduledRun({store,searchFn,sourceAccess=false,runAt}={}){
 if(!validateStore(store)) throw new Error("Invalid store adapter");
 const [history,revenueEvents]=await Promise.all([store.getSnapshots(),store.getRevenue()]);
 const result=await runScanner({searchFn,history,revenueRows:revenueByProduct(revenueEvents),sourceAccess,runAt});
 if(result.snapshots.length) await store.saveSnapshots(result.snapshots);
 await store.saveRun({report:result.report,candidates:result.candidates,experiment:result.experiment});
 return result;
}
