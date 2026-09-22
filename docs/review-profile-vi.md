# Hồ sơ xét duyệt — ThienLee Affiliate Scanner

## Mô tả
ThienLee Affiliate Scanner là công cụ hỗ trợ TikTok Shop Creator phân tích và lựa chọn sản phẩm trong Affiliate Product Marketplace. Ứng dụng sử dụng dữ liệu Creator Affiliate được người dùng ủy quyền để tìm kiếm sản phẩm Open Collaboration, lọc và xếp hạng theo các chỉ số sản phẩm được TikTok Shop API cung cấp, nhằm hỗ trợ Creator lựa chọn sản phẩm phù hợp để quảng bá.

Ứng dụng không thực hiện giao dịch mua hàng và không thay mặt người dùng thực hiện các hành động ngoài phạm vi được ủy quyền.

## Luồng sử dụng
Creator cấp quyền → hệ thống nhận dữ liệu được phép qua TikTok Shop API → tìm/lọc sản phẩm Open Collaboration → phân tích/xếp hạng → hiển thị kết quả cho Creator.

## Nguyên tắc quyền truy cập
Chỉ yêu cầu quyền đọc Creator Affiliate tối thiểu cần thiết cho chức năng tìm kiếm và phân tích sản phẩm. Không yêu cầu quyền Seller không phục vụ chức năng Scanner.

## Bảo mật
Authorization code được xử lý ở backend. App Secret, access token và refresh token không được lưu trong GitHub Pages hoặc mã nguồn công khai.
