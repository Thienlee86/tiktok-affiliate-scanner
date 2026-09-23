import test from "node:test"; import assert from "node:assert/strict";
import {snapshotProducts,deriveMomentum} from "../src/history.js";
test("snapshot keeps unknown metrics null",()=>{const [x]=snapshotProducts([{id:1,title:"A"}],"2026-09-23T01:00:00Z");assert.equal(x.rating,null);assert.equal(x.sales_7d,null);});
test("momentum needs history",()=>assert.equal(deriveMomentum([{id:"1",units_sold:5,captured_at:"a"}],"1").status,"insufficient_history"));
test("momentum detects rise",()=>assert.deepEqual(deriveMomentum([{id:"1",units_sold:5,captured_at:"a"},{id:"1",units_sold:9,captured_at:"b"}],"1"),{delta_units:4,status:"rising"}));
