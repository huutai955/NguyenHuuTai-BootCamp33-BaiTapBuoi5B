/*
Bài 1: TÍNH THUẾ THU NHẬP CÁ NHÂN
Input: Họ tên (hoTen), tổng thu nhập (tongThuNhap)
số người phụ thuộc (soNguoiPhuThuoc)

Process: Tạo function sau đó truyền các biến đã cho
vào function sau đó tính thu nhập chịu thế và dùng 
if else để tính thuế thu nhập cá nhân mà người dùng 
phải trả theo đề bài.

Output:Thuế thu nhập cá nhân.
*/


function thueThuNhap(tongThuNhap, soNguoiPhuThuoc) {
    var thuNhapChiuThue = tongThuNhap - 4 - soNguoiPhuThuoc * 1.6;
    if (thuNhapChiuThue < 61) {
        var thueThuNhapCaNhan = thuNhapChiuThue * 0.05;
    }else if (60 < thuNhapChiuThue < 121) {
        var thueThuNhapCaNhan = thuNhapChiuThue * 0.1;
    }else if (120 < thuNhapChiuThue < 211) {
        var thueThuNhapCaNhan = thuNhapChiuThue * 0.15;
    }else if (210 < thuNhapChiuThue < 385) {
        var thueThuNhapCaNhan = thuNhapChiuThue * 0.2;
    }else if (384 < thuNhapChiuThue < 625) {
        var thueThuNhapCaNhan = thuNhapChiuThue * 0.25;
    }else if (624 < thuNhapChiuThue < 961) {
        var thueThuNhapCaNhan = thuNhapChiuThue * 0.3;
    }else {
        var thueThuNhapCaNhan = thuNhapChiuThue * 0.35;
    }

    return thueThuNhapCaNhan;
}
var hoTen = "Nguyễn Nhân";
var thue = thueThuNhap(70, 2);
console.log(`Thuế thu nhập cá nhân mà ông(bà) ${hoTen} phải trả là: ${thue} triệu đồng`)



