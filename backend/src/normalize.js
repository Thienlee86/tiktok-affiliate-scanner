function amount(v){if(v==null)return null;if(typeof v==="number")return v;const n=Number(v);return Number.isFinite(n)?n:null;}
export function normalizeTikTokProduct(p={}){
 const price=p.original_price||{};
 return {id:p.id??null,title:p.title??null,units_sold:amount(p.units_sold),commission:amount(p.commission),commission_rate:amount(p.commission_rate),sale_region:p.sale_region??null,main_image_url:p.main_image_url??null,detail_link:p.detail_link??null,shop_name:p.shop?.name??null,has_inventory:p.has_inventory??null,currency:price.currency??null,minimum_price:amount(price.minimum_amount),maximum_price:amount(price.maximum_amount),rating:null,sales_7d:null};
}
export function normalizeProductSearchResponse(payload={}){
 if(payload.code!==0) throw new Error(`TikTok API error ${payload.code}: ${payload.message||"unknown"}`);
 const data=payload.data||{}; const raw=data.products||data.product_list||[];
 return {products:raw.map(normalizeTikTokProduct),next_page_token:data.next_page_token??data.page_token??null,request_id:payload.request_id??null};
}
