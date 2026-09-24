import test from "node:test";
import assert from "node:assert/strict";
import { dedupeProducts, rankProducts } from "../src/scoring.js";

test("dedupes by product id", () => {
  assert.equal(dedupeProducts([{id:1},{id:1},{id:2}]).length, 2);
});
test("ranks without inventing missing metrics", () => {
  const out = rankProducts([
    {id:"a", units_sold:100, commission:10, commission_rate:5},
    {id:"b", units_sold:50, commission:20, commission_rate:10}
  ]);
  assert.equal(out.length,2);
  assert.ok(Number.isFinite(out[0].score));
});
