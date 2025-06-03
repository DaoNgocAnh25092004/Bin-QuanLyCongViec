function hỗTrợThiếtBị(check) {
  if (check) {
    let chiềuRộngMànHình = window.innerWidth;
    let thôngBáoHỗTrợThiếtBị = document.getElementById("hộTrợThiếtBị");

    if (chiềuRộngMànHình >= 450) {
      thôngBáoHỗTrợThiếtBị.classList.remove("hide"); // Hiện thông báo
    } else {
      thôngBáoHỗTrợThiếtBị.classList.add("hide"); // Ẩn thông báo
    }
  }
}
hỗTrợThiếtBị(true);

window.addEventListener("resize", function () {
  hỗTrợThiếtBị(true);
});
