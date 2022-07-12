/*
input: Mã khách hàng(maKhachHang), loại khách hàng(loaiKhachHang)
, số kết nối(soKetNoi), số kênh cao cấp(soKenhCaoCap)
cao cấp.

Process: Tạo 1 function để tính tiền cáp(tinhTienCap) sau đó cho
người dùng nhập mã khách hàng, loại khách hàng, số kết nối, số 
kênh cao cấp. Nếu người dùng là nhà dân(A) thì không cần nhập
số kết nối còn người dùng là doanh nghiệp (B) thì hiển thị số kết
nối. Sau đó tính tổng hóa đơn.

Output: Tổng hóa đơn (tongHoaDon)
*/

function tinhTienCap() {
 var  maKhachHang = prompt("Nhập mã khách hàng!!");
 var loaiKhachHang = prompt("Nhập loại khách hàng: Nhà dân(A), doanh nghiệp(B)!!");
 var soKenhCaoCap = prompt("Nhập số kênh cao cấp!!");


 if (loaiKhachHang == "A") {
      var tongHoaDon = 4.5 + 20.5 + (soKenhCaoCap * 7.5);
 }else if (loaiKhachHang == "B") {
   soKetNoi = prompt("Nhập số kênh đã kết nối!!");
   if (soKetNoi < 11) {
      var tongHoaDon = 4.5 + 20.5 + (soKenhCaoCap * 50) + 75;
   }else {
      var tongHoaDon = 4.5 + 20.5 + (soKenhCaoCap * 50) + 75 + ((soKetNoi - 10) * 5);
   }
 }

 return tongHoaDon;
}

var tongHoaDon = tinhTienCap();
console.log("Tổng hóa dơn khách hàng phải trả: ", tongHoaDon);

