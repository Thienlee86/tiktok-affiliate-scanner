import {dedupeProducts, rankProducts} from "./scoring.js";
export const DISCOVERY_SORTS=["units_sold","commission","commission_rate"];
export async function discoverProducts(searchFn, base={}) {
  const batches=[];
  for (const sort_field of DISCOVERY_SORTS) {
    const rows=await searchFn({...base,sort_field,sort_order:"DESC"});
    batches.push(...(Array.isArray(rows)?rows:[]));
  }
  return rankProducts(dedupeProducts(batches));
}
export function sanitizeProduct(p={}) {
  const allowed=["id","title","units_sold","commission","commission_rate","sale_region","main_image_url","detail_link","has_inventory","score"];
  return Object.fromEntries(allowed.filter(k=>p[k]!==undefined).map(k=>[k,p[k]]));
}
