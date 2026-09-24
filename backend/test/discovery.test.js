import test from "node:test"; import assert from "node:assert/strict";
import {discoverProducts,DISCOVERY_SORTS} from "../src/discovery.js";
test("runs three discovery passes and dedupes",async()=>{const seen=[];const out=await discoverProducts(async q=>{seen.push(q.sort_field);return [{id:"1",units_sold:10,commission:2,commission_rate:3},{id:"1",units_sold:10,commission:2,commission_rate:3}]});assert.deepEqual(seen,DISCOVERY_SORTS);assert.equal(out.length,1);});
