import test from "node:test";import assert from "node:assert/strict";import {goalProgress,requiredOrders} from "../src/goals.js";
test("tracks 20m goal",()=>{const g=goalProgress(1000000);assert.equal(g.progress_pct,5);assert.equal(g.next_milestone,5000000);});
test("calculates orders from real unit economics",()=>assert.equal(requiredOrders(20000000,50000),400));
