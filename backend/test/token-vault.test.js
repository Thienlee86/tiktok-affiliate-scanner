import test from "node:test";import assert from "node:assert/strict";import {shouldRefresh,publicTokenStatus} from "../src/token-vault.js";
test("refreshes shortly before expiry",()=>assert.equal(shouldRefresh({refresh_token:"r",expires_at:1000},500,600),true));
test("public status never exposes token values",()=>{const s=publicTokenStatus({access_token:"SECRET",refresh_token:"REFRESH",expires_at:1000},0);assert.equal(JSON.stringify(s).includes("SECRET"),false);});
