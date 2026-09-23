import crypto from "node:crypto";
function qs(params={}){return Object.entries(params).filter(([,v])=>v!==undefined&&v!==null).sort(([a],[b])=>a.localeCompare(b)).map(([k,v])=>`${k}=${v}`).join("&");}
export function signTikTokRequest({path,query={},body="",appSecret}){
 if(!appSecret) throw new Error("Missing app secret");
 const filtered=Object.fromEntries(Object.entries(query).filter(([k])=>!["sign","access_token"].includes(k)));
 const base=path+qs(filtered)+(body||"");
 return crypto.createHmac("sha256",appSecret).update(appSecret+base+appSecret).digest("hex");
}
export function buildProductSearchRequest({appKey,appSecret,accessToken,timestamp=Math.floor(Date.now()/1000),pageSize=20,pageToken,sortField="units_sold",sortOrder="DESC",body={}}){
 const path="/affiliate_creator/202405/open_collaborations/products/search";
 const query={app_key:appKey,timestamp,page_size:Math.min(20,pageSize),sort_field:sortField,sort_order:sortOrder,...(pageToken?{page_token:pageToken}:{})};
 const bodyText=JSON.stringify(body);
 query.sign=signTikTokRequest({path,query,body:bodyText,appSecret});
 return {method:"POST",path,query,headers:{"content-type":"application/json","x-tts-access-token":accessToken},body:bodyText};
}
