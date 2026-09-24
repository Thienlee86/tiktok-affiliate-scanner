import test from "node:test";import assert from "node:assert/strict";import {buildHealth} from "../src/health.js";
test("waiting while external gate is pending",()=>{const h=buildHealth({readiness:{ready:false,next:"partnerApproved"}});assert.equal(h.status,"waiting");assert.equal(h.next_gate,"partnerApproved");});
test("error makes health degraded",()=>assert.equal(buildHealth({readiness:{ready:true},lastError:"boom"}).status,"degraded"));
