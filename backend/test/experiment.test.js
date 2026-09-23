import test from "node:test";import assert from "node:assert/strict";import {buildFirstRevenueQueue,nextExperiment} from "../src/experiment.js";
test("rising candidate gets experiment boost",()=>{const q=buildFirstRevenueQueue([{id:"a",score:60,momentum:"rising"},{id:"b",score:65,momentum:"flat"}],[]);assert.equal(q[0].id,"a");});
test("next experiment prefers unproven candidate",()=>{const q=buildFirstRevenueQueue([{id:"a",score:80},{id:"b",score:70}],[{product_id:"a",net_revenue:10,confirmed_orders:1}]);assert.equal(nextExperiment(q).id,"b");});
