import { safeEqual } from "./security.js";
import { exchangeCreatorCode } from "./oauth.js";

export async function handleCreatorCallback({url, expectedState, config, fetchImpl=fetch}) {
  const u = new URL(url);
  const error = u.searchParams.get("error");
  if (error) throw new Error("Creator denied/failed authorization: " + error);
  const code = u.searchParams.get("code");
  const state = u.searchParams.get("state");
  if (!code) throw new Error("Missing Creator authorization code");
  if (!state || !safeEqual(state, expectedState)) throw new Error("Invalid OAuth state");
  return exchangeCreatorCode({
    appKey: config.appKey,
    appSecret: config.appSecret,
    authCode: code,
    requiredScope: config.requiredScope,
    fetchImpl
  });
}
