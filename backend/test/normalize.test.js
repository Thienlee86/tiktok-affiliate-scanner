import test from "node:test";import assert from "node:assert/strict";import {normalizeTikTokProduct,normalizeProductSearchResponse} from "../src/normalize.js";
test("keeps unconfirmed metrics null",()=>{const p=normalizeTikTokProduct({id:"1",units_sold:"9",original_price:{currency:"VND",minimum_amount:"100"}});assert.equal(p.units_sold,9);assert.equal(p.rating,null);assert.equal(p.sales_7d,null);});
test("rejects API errors",()=>assert.throws(()=>normalizeProductSearchResponse({code:100,message:"bad"})));
