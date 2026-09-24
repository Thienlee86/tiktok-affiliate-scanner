export function tokenStatus(token={},now=Date.now()){
 const expiresAt=Number(token.expires_at||0), refreshExpiresAt=Number(token.refresh_expires_at||0);
 return {has_access_token:Boolean(token.access_token),has_refresh_token:Boolean(token.refresh_token),access_expired:expiresAt?now>=expiresAt:true,refresh_expired:refreshExpiresAt?now>=refreshExpiresAt:false,expires_at:expiresAt||null,refresh_expires_at:refreshExpiresAt||null};
}
export function shouldRefresh(token={},now=Date.now(),leadMs=15*60*1000){
 const exp=Number(token.expires_at||0);return Boolean(token.refresh_token&&exp&&now>=exp-leadMs);
}
export function publicTokenStatus(token={},now=Date.now()){
 const s=tokenStatus(token,now);return {authorized:s.has_access_token,access_expired:s.access_expired,refresh_available:s.has_refresh_token&&!s.refresh_expired,expires_at:s.expires_at};
}
