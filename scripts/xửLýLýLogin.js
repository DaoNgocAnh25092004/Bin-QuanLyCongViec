//Click icon xóa nội dung trong ô input
function clickIconXóaNộiDungInput(icon) {
  let ôNhập = icon.previousElementSibling;

  if (ôNhập) {
    ôNhập.addEventListener("input", () => {
      if (ôNhập.value.trim() !== "") {
        icon.classList.remove("hide");
      } else {
        icon.classList.add("hide");
      }
    });
    icon.addEventListener("click", () => {
      ôNhập.value = "";
      ôNhập.focus();
      icon.classList.add("hide");
    });
  }
}

//Icon xóa nội dung trong ô tên đăng nhập
clickIconXóaNộiDungInput(
  document.querySelector(".form--login__tênĐăngNhập").nextElementSibling
);

//Icon xóa nội dung trong ô mật khẩu
clickIconXóaNộiDungInput(
  document.querySelector(".form--login__mậtKhẩu").nextElementSibling
);

// Click nút đăng nhập
const nútĐăngNhập = document.querySelector(".nútĐăngNhập");

nútĐăngNhập.addEventListener("click", () => {
  window.location.href = "home.html";
});
