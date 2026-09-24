import test from "node:test";import assert from "node:assert/strict";import {buildRunReport} from "../src/report.js";
test("report never claims scan without source access",()=>{const r=buildRunReport({sourceAccess:false});assert.equal(r.creator_center_scanned,false);assert.match(r.note,/not available/);});
