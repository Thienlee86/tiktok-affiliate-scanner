import test from "node:test";import assert from "node:assert/strict";import {readiness} from "../src/readiness.js";
test("partner approval is first external gate",()=>assert.equal(readiness({}).next,"partnerApproved"));
test("reports ready only when all gates pass",()=>assert.equal(readiness({partnerApproved:true,appApproved:true,creatorScope:true,oauthAuthorized:true,backendUrl:true}).ready,true));
