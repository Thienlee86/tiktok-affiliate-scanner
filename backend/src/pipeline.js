import {discoverProducts,sanitizeProduct} from "./discovery.js";
import {snapshotProducts,deriveMomentum} from "./history.js";
import {classifyCandidate,selectCandidates} from "./candidates.js";
import {buildRunReport} from "./report.js";
import {buildFirstRevenueQueue,nextExperiment} from "./experiment.js";

export async function runScanner({searchFn,history=[],revenueRows=[],runAt=new Date().toISOString(),sourceAccess=false}={}){
 if(!sourceAccess || typeof searchFn!=="function"){
   const report=buildRunReport({runAt,sourceAccess:false,products:[],candidates:[]});
   return {snapshots:[],products:[],candidates:[],experiment:null,report};
 }
 const ranked=await discoverProducts(searchFn);
 const snapshots=snapshotProducts(ranked,runAt);
 const classified=ranked.map(p=>classifyCandidate(p,deriveMomentum([...history,...snapshots],p.id)));
 const candidates=selectCandidates(classified);
 const queue=buildFirstRevenueQueue(candidates,revenueRows);
 const experiment=nextExperiment(queue);
 const report=buildRunReport({runAt,sourceAccess:true,products:classified,candidates});
 return {snapshots,products:classified.map(sanitizeProduct),candidates:candidates.map(sanitizeProduct),experiment:experiment?sanitizeProduct(experiment):null,report};
}
