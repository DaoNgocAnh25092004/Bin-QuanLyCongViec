function hỗTrợThiếtBị(check) {
  if (check) {
    let chiềuRộngMànHình = window.innerWidth;
    let thôngBáoHỗTrợThiếtBị = document.getElementById("hộTrợThiếtBị");

    if (chiềuRộngMànHình < 375) {
      thôngBáoHỗTrợThiếtBị.classList.remove("hide");
    }

    if (chiềuRộngMànHình >= 450) {
      thôngBáoHỗTrợThiếtBị.classList.remove("hide");
    }
  }
}
hỗTrợThiếtBị(true);
