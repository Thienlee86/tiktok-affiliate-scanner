import test from "node:test";import assert from "node:assert/strict";
import {classifyCandidate,selectCandidates} from "../src/candidates.js";
test("incomplete metrics cannot become candidate",()=>{const x=classifyCandidate({id:"1",score:90,units_sold:100,commission:10});assert.equal(selectCandidates([x]).length,0);assert.deepEqual(x.missing_fields,["commission_rate"]);});
test("confirmed stocked product can become candidate",()=>{const x=classifyCandidate({id:"1",score:75,units_sold:100,commission:10,commission_rate:5,has_inventory:true});assert.equal(selectCandidates([x]).length,1);});
