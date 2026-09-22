# TikTok Affiliate Scanner V1

Mobile-first PWA để nhập và chấm điểm ứng viên TikTok Shop affiliate.

## V1
- Nhập tên, giá, hoa hồng, doanh số 7 ngày, rating và affiliate link.
- Tự tính tỷ lệ hoa hồng và Score V1.
- Không tự suy đoán dữ liệu bị thiếu.
- Lưu cục bộ trên điện thoại bằng localStorage.
- Có manifest + service worker để cài như PWA khi được host HTTPS.

## Score V1
Trọng số mục tiêu: sức bán 7 ngày 35%, rating 20%, tỷ lệ hoa hồng 25%, tiền hoa hồng/đơn 20%. Nếu thiếu sales/rating, score được chuẩn hóa trên các trường đã biết và UI cảnh báo chưa đủ dữ liệu.

Dữ liệu thử nghiệm đầu tiên: Bobby Premium Soft, giá 307.000đ, hoa hồng 27.625đ (~9%).

## Lưu ý
Đây là công cụ sàng lọc, không dự đoán chắc chắn chuyển đổi hay thu nhập. V2 sẽ tập trung giảm nhập tay trên điện thoại.
