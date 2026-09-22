import crypto from "node:crypto";

export function makeState() {
  return crypto.randomBytes(32).toString("base64url");
}
export function safeEqual(a = "", b = "") {
  const x = Buffer.from(String(a));
  const y = Buffer.from(String(b));
  return x.length === y.length && crypto.timingSafeEqual(x, y);
}
export function requireEnv(env, names) {
  const missing = names.filter((n) => !env[n]);
  if (missing.length) throw new Error("Missing required environment variables: " + missing.join(", "));
}
