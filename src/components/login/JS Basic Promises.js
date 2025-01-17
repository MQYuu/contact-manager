const div = document.getElementById("root");

// Hàm hiển thị thông báo
function hienThi(some) {
    if (div) {
        div.innerHTML += some + "<br>"; // Thêm nội dung mới vào, không thay thế
    } else {
        console.error("Element 'root' không tồn tại.");
    }
}

// Promise kiểm tra giá trị x
let ketQua = new Promise(function (myResolve, myReject) {
    
    let x = true; // Thay đổi giá trị x để kiểm tra kết quả
    if (x) {
        myResolve("Thành công");
    } else {
        myReject("Lỗi");
    }
});

// Xử lý Promise
ketQua.then(
    function (value) {
        hienThi(value);
    },
    function (err) {
        hienThi(err);
    }
);

// Arrow function kiểm tra đăng nhập
const login = (username, password) => {
    return new Promise((resolve, reject) => {
        // Kiểm tra giả lập tài khoản và mật khẩu
        if (username === "admin" && password === "1234") {
            resolve("Đăng nhập thành công!");
        } else {
            reject("Đăng nhập thất bại");
        }
    });
};

// Khai báo giá trị username và password để kiểm tra
const username = "admin"; // Thay đổi để kiểm tra
const password = "1234";

// Kiểm tra đăng nhập
login(username, password)
    .then(
        (value) => {
            console.log(value);
            hienThi(value); // Hiển thị kết quả đăng nhập
        },
        (err) => {
            console.error(err);
            hienThi(err); // Hiển thị lỗi đăng nhập
        }
    )
    .catch((error) => {
        console.error("Có lỗi xảy ra:", error);
        hienThi("Có lỗi xảy ra: " + error); // Xử lý lỗi chung
    });
