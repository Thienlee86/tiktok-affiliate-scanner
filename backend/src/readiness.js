export function readiness({partnerApproved=false,appApproved=false,creatorScope=false,oauthAuthorized=false,backendUrl=false}={}){
 const checks={partnerApproved,appApproved,creatorScope,oauthAuthorized,backendUrl};
 const next=Object.entries(checks).find(([,ok])=>!ok)?.[0]??"ready";
 return {ready:Object.values(checks).every(Boolean),checks,next};
}
