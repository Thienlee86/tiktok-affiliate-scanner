import test from "node:test";import assert from "node:assert/strict";import {dedupeEvents} from "../src/idempotency.js";
test("duplicate revenue events count once",()=>{const e={platform:"tiktok",type:"commission",order_id:"o1",product_id:"p1",status:"confirmed",amount:10,occurred_at:"x"};assert.equal(dedupeEvents([e,{...e}]).length,1);});
