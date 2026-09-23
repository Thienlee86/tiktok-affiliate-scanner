const TOKEN_BASE = "https://auth.tiktok-shops.com/api/v2/token";

function qs(params) {
  return new URLSearchParams(Object.entries(params).filter(([,v]) => v !== undefined && v !== null)).toString();
}
function validateCreatorToken(payload, requiredScope = "creator.affiliate_collaboration.read") {
  if (Number(payload?.code) !== 0) throw new Error(payload?.message || "TikTok token exchange failed");
  const data = payload?.data ?? payload;
  if (Number(data?.user_type) !== 1) throw new Error("Authorization is not a Creator identity");
  const scopes = Array.isArray(data?.granted_scopes) ? data.granted_scopes : String(data?.granted_scopes || "").split(",").map(s=>s.trim()).filter(Boolean);
  if (!scopes.includes(requiredScope)) throw new Error("Required Creator scope was not granted");
  return {...data, granted_scopes: scopes};
}
export async function exchangeCreatorCode({appKey, appSecret, authCode, requiredScope, fetchImpl=fetch}) {
  const url = TOKEN_BASE + "/get?" + qs({app_key:appKey,app_secret:appSecret,auth_code:authCode,grant_type:"authorized_code"});
  const res = await fetchImpl(url);
  if (!res.ok) throw new Error("TikTok token endpoint HTTP " + res.status);
  return validateCreatorToken(await res.json(), requiredScope);
}
export async function refreshCreatorToken({appKey, appSecret, refreshToken, requiredScope, fetchImpl=fetch}) {
  const url = TOKEN_BASE + "/refresh?" + qs({app_key:appKey,app_secret:appSecret,refresh_token:refreshToken,grant_type:"refresh_token"});
  const res = await fetchImpl(url);
  if (!res.ok) throw new Error("TikTok refresh endpoint HTTP " + res.status);
  return validateCreatorToken(await res.json(), requiredScope);
}
export { validateCreatorToken };
