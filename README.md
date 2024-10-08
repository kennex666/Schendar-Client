# Schendar-Client
Class Schedule for Google Calendar

## Tác giả
Dương Thái Bảo - Là sinh viên Khoá 17, trường Đại Học Công nghiệp TP.HCM

## Mục đích
Là dự án cá nhân với mục đích giáo dục, cung cấp dự án miễn phí hỗ trợ cho các bạn sinh viên.

Hỗ trợ sinh viên cập nhật thông tin về lịch học một cách tự động thông qua Google Calender.

Trước đây cũng có ứng dụng báo lịch IUH của tác giả Tran Hong Nhuat trên Google Play nhưng có vẻ không sử dụng được nữa nên mình quyết định viết ra một api hỗ trợ cập nhật thông qua Google Calendar, giúp lịch dễ sử dụng và linh động hơn trong quá trình sử dụng.

## CÁC VẤN ĐỀ LIÊN QUAN ĐẾN THÔNG TIN, ĐIỀU KHOẢN SỬ DỤNG
1. Lịch học IUH không lưu trữ dữ liệu của bạn trên máy chủ. Dữ liệu được cập nhật thông qua *key và không lưu trữ trên máy chủ nhằm bảo mật thông tin và tiết kiệm không gian lưu trữ dữ liệu.
2. **[Cũ - Không áp dụng với sản phẩm mới]** Việc cung cấp khoá (key) trên page là tự nguyện. Chúng tôi không thu thập dữ liệu này, tuy nhiên nếu có lỗi trong một số trường hợp cụ thể và bạn yêu cầu hỗ trợ kiểm tra, chúng tôi được phép truy cập để lấy mẫu dữ liệu nhằm mục đích cải tiến sản phẩm.
3. **[Mới - Thay đổi cho điều 2]** Việc cung cấp khoá (key) của trang sinh viên là tự nguyện. Website không chủ động thu thập thông tin này (bao gồm lưu trữ lâu dài, sử dụng thông tin trái phép, tuy nhiên không bao gồm: các bên thứ ba cung cấp dịch vụ như Hosting, CDN, Cloudflare,...), Schendar không sử dụng thông tin này với mục đích cải tiến sản phẩm, thu thập thông tin trái phép. Chính sách ở điều 2 là điều khoản cũ do bản trước gửi qua Messenger để bot setup.
4. Bạn có quyền từ chối cung cấp thông tin nếu cảm thấy không an toàn.
5. Chúng tôi không đảm bảo dữ liệu được cập nhật theo thời gian thực và sản phẩm có thể bị tạm ngưng nếu trường yêu cầu hoặc vì lí do khác như trường thay đổi phương thức cập nhật lịch.
6. Page này hỗ trợ thiết lập lịch học cho sinh viên trường Đại học Công nghiệp (và các trường khác) nhằm hỗ trợ các bạn muốn chủ động sắp xếp lịch trình dễ dàng hơn.
7. Mặc dù không lưu trữ thông tin trên máy chủ, nhưng chúng tôi không đảm bảo việc máy chủ có thể bị hack dẫn đến lịch trình bị sai hoặc các trường hợp ngoài ý muốn. Trong trường hợp này, chúng tôi không chịu trách nhiệm dưới mọi hình thức.
8. Lịch học IUH hoàn toàn không yêu cầu cung cấp thông tin cá nhân (tài khoản và mật khẩu). Nếu bạn vô tình phát hiện một trang có chức năng tương tự, hãy cẩn trọng khi cung cấp các thông tin nhạy cảm.
9. Các domain được xác nhận có trong dự án **Schendar**: `1boxstudios.cf` (bị xoá từ tháng 02/2024), `1boxstudios.com`, `dtbao.io.vn`
10. Bổ sung điều khoản (2024):

  * Từ đầu năm 2024, lịch học IUH mở rộng thêm các trường khác. Vì mỗi trường có thể sẽ mỗi khác, chúng tôi không đảm bảo lịch sẽ luôn ổn định với mọi trường, nhưng sẽ cố gắng sửa nếu xảy ra vấn đề, xin hãy báo cáo lại đến schendar@1boxstudios.com

  * Lịch học IUH (Hay tên gọi mới - Schendar) luôn cố gắng cập nhật và sửa các lỗi, tuy nhiên sẽ không đảm bảo các lỗi được giải quyết. Với các lịch quan trọng như thi, vui lòng kiểm tra thủ công để đảm bảo tính chính xác.
  
  * Sản phẩm chỉ hỗ trợ quản lý lịch trình, và được thử nghiệm từ giai đoạn 2022, và vẫn ổn định cho đến 12/09/2024. Trước đến hiện tại mình chưa bị sai lịch, nhưng nếu nhà trường/bên ASC thay đổi thì có thể gây ra sự cố không mong muốn.

  * Sản phẩm ban đầu sử dụng cho mục đích cá nhân, nhưng vì thấy hữu ích nên chia sẻ cho cộng đồng sinh viên - và không thương mại. Vì vậy, với mọi trường hợp, Schendar không chịu trách nhiệm liên quan.

  * Mã nguồn mở, vui lòng xem tại: https://github.com/kennex666/IUH-Calendar-FullSource

