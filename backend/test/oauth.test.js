import test from "node:test";
import assert from "node:assert/strict";
import { validateCreatorToken } from "../src/oauth.js";

test("accepts creator token with required scope", () => {
  const x = validateCreatorToken({code:0,data:{user_type:1,granted_scopes:["creator.affiliate_collaboration.read"],access_token:"x"}});
  assert.equal(x.access_token,"x");
});
test("rejects seller identity", () => {
  assert.throws(() => validateCreatorToken({code:0,data:{user_type:0,granted_scopes:["creator.affiliate_collaboration.read"]}}), /Creator/);
});
test("rejects missing scope", () => {
  assert.throws(() => validateCreatorToken({code:0,data:{user_type:1,granted_scopes:[]}}), /scope/);
});
