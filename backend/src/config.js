import { requireEnv } from "./security.js";

export function getConfig(env = process.env) {
  requireEnv(env, ["TIKTOK_APP_KEY","TIKTOK_APP_SECRET","TIKTOK_REDIRECT_URI"]);
  return {
    appKey: env.TIKTOK_APP_KEY,
    appSecret: env.TIKTOK_APP_SECRET,
    redirectUri: env.TIKTOK_REDIRECT_URI,
    requiredScope: "creator.affiliate_collaboration.read",
    productSearchPath: "/affiliate_creator/202405/open_collaborations/products/search",
    scanSorts: ["units_sold","commission","commission_rate"]
  };
}
