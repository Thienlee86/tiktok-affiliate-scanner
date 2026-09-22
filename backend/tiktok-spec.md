# TikTok Creator Affiliate API — verified contract

Verified against TikTok Shop Partner Center documentation.

## Creator OAuth
Creator authorization is OAuth-based. After callback, exchange the authorization code server-side using the TikTok Shop token endpoint.

After token exchange, require:
- response code == 0
- user_type == 1 (Creator)
- granted_scopes contains the minimum required scope

Never expose app_secret, access_token, or refresh_token to browser code.

## Product discovery endpoint
POST /affiliate_creator/202405/open_collaborations/products/search

Required scope:
creator.affiliate_collaboration.read

Required header:
x-tts-access-token: Creator access token

Required query:
- app_key
- sign
- timestamp
- page_size (1..20)

Optional query:
- page_token
- sort_field: commission_rate | product_sales_price | commission | units_sold
- sort_order: ASC | DESC

Optional body filters:
- title_keywords (max 20)
- sales_price_range
- category
- commission_rate_range

## Confirmed response fields
The official example confirms product fields including:
- id
- title
- units_sold
- sale_region
- main_image_url
- detail_link
- shop.name
- has_inventory
- original_price (currency/minimum_amount/maximum_amount)

Do not assume rating or a 7-day sales field until confirmed by the API schema/response.

## Scanner strategy
Initial discovery passes:
1. units_sold DESC
2. commission DESC
3. commission_rate DESC

Merge/dedupe by product id, then score only on fields actually returned by the API.
