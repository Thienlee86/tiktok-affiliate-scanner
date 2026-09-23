# ThienLee Affiliate System — Architecture

## Nguyên tắc
TikTok Partner API là một connector, không phải dependency duy nhất. Không tuyên bố quét Creator Center khi chưa có token/quyền hợp lệ. Dữ liệu thiếu phải giữ trạng thái missing.

## Pipeline
Data Source -> Adapter -> Normalized Product -> Score -> Candidate Queue -> Content Queue -> Affiliate Link -> Click/Conversion -> Feedback

## Normalized product
- id
- source
- source_url
- name
- price
- commission_amount
- commission_rate
- sold_7d
- rating
- captured_at
- data_quality
- affiliate_url

## Score V1
- sales_7d: 35%
- rating: 20%
- commission_rate: 25%
- commission_per_order: 20%

## Connectors
1. manual_verified: hoạt động ngay.
2. tiktok_creator_api: chỉ bật khi OAuth + scope + approval hợp lệ.
3. future_affiliate_sources: thêm adapter riêng, không sửa scoring core.

## Trạng thái
- VERIFIED: dữ liệu có nguồn/xác minh.
- PARTIAL: thiếu một hoặc nhiều trường.
- UNAVAILABLE: nguồn chưa được cấp quyền.
- STALE: dữ liệu quá cũ theo ngưỡng của connector.

## Automation target
Các lượt 08:00, 12:00, 18:00, 21:00 Asia/Ho_Chi_Minh chỉ được gọi là "scan" khi connector có quyền truy cập thực tế. Nếu không, job chỉ xử lý dữ liệu đã có và báo rõ nguồn nào unavailable.
