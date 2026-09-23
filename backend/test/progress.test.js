import test from "node:test";import assert from "node:assert/strict";import {projectProgress} from "../src/progress.js";
test("progress is evidence weighted",()=>{const p=projectProgress();assert.equal(p.percent,63);assert.equal(p.next_gate,"partner_review");});
