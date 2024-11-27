function xửLýTiếnTrình() {
  document.querySelectorAll(".hộpCôngViệc").forEach((hộp) => {
    //xử lý đóng mở tiến trình
    đóngMởTiếnTrình(hộp);

    //xử lý thanh gửi ẩn hiện trong tiến trình
    thanhGửiTiếnTrình(hộp);

    // Xử lý khi nhấn đồng ý hay không
    xácNhậnYêuCầu(hộp);

    //Nhấn nút xem yêu cầu hoặc phản hồi
    nútXemYêuCầuOrPhảnHồi(hộp);

    //Icon xóa nội dung trong thanh gửi tiến trình
    clickIconXóaNộiDungInput(
      hộp.querySelector(".tiếnTrìnhXửLý__côngCụ--ôNhập > div")
    );

    // Xử lý về khoảng cách
    khoảngCáchTiếnTrình(hộp);
  });
}
//Xử lý tiến trình
xửLýTiếnTrình();

//Đóng mở tiến trình
function đóngMởTiếnTrình(hộp) {
  let mànHìnhMờTiếnTrình = hộp.querySelector("#mànHìnhMờTiếnTrình");
  let iconĐóngTiếnTrình = hộp.querySelector(
    ".tiếnTrìnhXửLý__tiêuĐề--thôngTin div:last-child"
  );
  let hộpTiếnTrình = hộp.querySelector("#tiếnTrìnhXửLý");
  let tiêuĐềTiếnTrình = hộp.querySelector(".tiếnTrìnhXửLý__tiêuĐề");
  let tinNhắnTiếnTrình = hộp.querySelector(".tiếnTrìnhXửLý__tinNhắn");
  let chứcNăngTiếnTrình = hộp.querySelector(".tiếnTrìnhXửLý__côngCụ");
  let hộpCôngCụĐồngÝ = hộp.querySelector(".xácNhậnYêuCầuĐồngÝ");

  iconĐóngTiếnTrình.addEventListener("click", () => {
    tiêuĐềTiếnTrình.classList.add("ẩnTiếnTrình");
    tinNhắnTiếnTrình.classList.add("ẩnTiếnTrình");
    chứcNăngTiếnTrình.classList.add("ẩnTiếnTrình");
    hộpCôngCụĐồngÝ.classList.add("ẩnTiếnTrình");
    mànHìnhMờTiếnTrình.classList.add("ẩnMànHìnhMờTiếnTrình");
    setTimeout(() => {
      hộpTiếnTrình.classList.add("hide");
    }, 480);
  });

  mànHìnhMờTiếnTrình.addEventListener("click", () => {
    tiêuĐềTiếnTrình.classList.add("ẩnTiếnTrình");
    tinNhắnTiếnTrình.classList.add("ẩnTiếnTrình");
    chứcNăngTiếnTrình.classList.add("ẩnTiếnTrình");
    hộpCôngCụĐồngÝ.classList.add("ẩnTiếnTrình");
    mànHìnhMờTiếnTrình.classList.add("ẩnMànHìnhMờTiếnTrình");

    setTimeout(() => {
      hộpTiếnTrình.classList.add("hide");
    }, 480);
  });
}

//Xử lý khoảng cách của tiến trình
function khoảngCáchTiếnTrình(hộp) {
  let dsHộpChứaTinNhắn = hộp.querySelectorAll(
    ".tiếnTrìnhXửLý__tinNhắn__danhSách > div"
  );

  dsHộpChứaTinNhắn.forEach((element) => {
    let tinNhắnDữLiệuThêm = element.querySelector(
      ".tiếnTrìnhXửLý__tinNhắn__danhSách--dữLiệuThêm"
    );

    //Xử lý thanh dữ liệu thêm cho sát với box tin nhắn
    if (!tinNhắnDữLiệuThêm.classList.contains("hide")) {
      tinNhắnDữLiệuThêm.style.bottom = "-45px";
    }

    //Khi có thanh dữ liệu thêm và không thêm
    if (tinNhắnDữLiệuThêm.classList.contains("hide")) {
      element.style.marginBottom = "30px";
    } else {
      element.style.marginBottom = "70px";
    }
  });
}

//Xử lý thanh gửi tiến trình
function thanhGửiTiếnTrình(hộp) {
  let nútBaoGồmHaiNút = hộp.querySelectorAll(
    ".hộpCôngViệc__cácChứcNăng__nútTiếnTrình"
  );
  let chứcNăngTiếnTrình = hộp.querySelector(".tiếnTrìnhXửLý__côngCụ");
  let boxChứaYêuCầuXácNhận = hộp.querySelector(
    ".tiếnTrìnhXửLý__tinNhắn__danhSách--yêuCầuXácNhận"
  );
  let nútKhôngĐồngÝTiếnTrình = boxChứaYêuCầuXácNhận.querySelector(
    ".tiếnTrìnhXửLý__tinNhắn__danhSách--nộiDung__xácNhận >  div:first-child"
  );

  nútBaoGồmHaiNút.forEach((nút) => {
    nút.addEventListener("click", () => {
      var nútXemPhảnHồi = nút.querySelector("div:first-child");
      var nútXemYêuCầu = nút.querySelector("div:nth-child(2)");

      if (
        nútXemPhảnHồi.classList.contains("hide") &&
        !nútXemYêuCầu.classList.contains("hide")
      ) {
        chứcNăngTiếnTrình.classList.add("hide");
      }
    });
  });

  if (nútKhôngĐồngÝTiếnTrình.classList.contains("vôHiệuHóa")) {
    chứcNăngTiếnTrình.classList.add("hide");
  }
}

//Xử lý khi nhấn nút xem file của tin nhắn
function xemFileCủaTinNhắnTiếnTrình(hộp) {
  let hộpChứaFileChứaFileThêm = hộp.querySelector(
    ".tiếnTrìnhXửLý__tinNhắn__danhSách--dữLiệuThêm"
  );

  if (!hộpChứaFileChứaFileThêm.classList.contains("hide")) {
    let dsNútXemFileBoxTn = hộp.querySelectorAll(
      ".tiếnTrìnhXửLý__tinNhắn__danhSách--dữLiệuThêm> div> div:first-child"
    );

    dsNútXemFileBoxTn.forEach((nút) => {
      if (nút.getAttribute("data-event-added") !== "true") {
        nút.addEventListener("click", () => {
          let hộpChứaDữLiệu = nút.nextElementSibling;
          let ảnhNútChứa = nút.querySelector("img");
          // Ẩn tất cả các hộp chứa dữ liệu file khác
          hộp
            .querySelectorAll(
              ".tiếnTrìnhXửLý__tinNhắn__danhSách--dữLiệuThêm> div> div:last-child"
            )
            .forEach((box) => {
              if (box !== hộpChứaDữLiệu) {
                box.classList.add("hide");
              }
              let nútHiệuỨng = box.previousElementSibling;
              let ảnhHiệuỨng =
                box.parentElement.children[0].querySelector("img");
              if (nútHiệuỨng !== nút) {
                nútHiệuỨng.classList.remove("fileTrướcKhiGửiChọn");
                ảnhHiệuỨng.src = "images/Điều Hướng Tiến Trình.png";
              }
            });

          //Ẩn hiện nút hiện
          hộpChứaDữLiệu.classList.toggle("hide");

          //Thay đổi trạng thái nút
          nút.classList.toggle("fileTrướcKhiGửiChọn");

          if (nút.classList.contains("fileTrướcKhiGửiChọn")) {
            ảnhNútChứa.src = "images/ĐiềuHướngXemTrướcFile.png";
          } else {
            ảnhNútChứa.src = "images/Điều Hướng Tiến Trình.png";
          }
        });
        nút.setAttribute("data-event-added", "true");
      }
    });
  }
}

//Xác nhận yêu cầu và chức năng gửi tin nhắn và chọn file
function xácNhậnYêuCầu(hộp) {
  let boxChứaYêuCầuXácNhận = hộp.querySelector(
    ".tiếnTrìnhXửLý__tinNhắn__danhSách--yêuCầuXácNhận"
  );
  let nútĐồngÝTiếnTrình = boxChứaYêuCầuXácNhận.querySelector(
    ".tiếnTrìnhXửLý__tinNhắn__danhSách--nộiDung__xácNhận > div:last-child"
  );
  let nútKhôngĐồngÝTiếnTrình = boxChứaYêuCầuXácNhận.querySelector(
    ".tiếnTrìnhXửLý__tinNhắn__danhSách--nộiDung__xácNhận >  div:first-child"
  );
  let tiêuĐềTiếnTrình = hộp.querySelector(".tiếnTrìnhXửLý__tiêuĐề");

  let currentHeight = window.innerHeight;
  //Nút không đồng ý nhận yêu cầu
  nhấnNútKhôngĐồngýNhậnViệcTiếnTrình(
    hộp,
    tiêuĐềTiếnTrình,
    nútĐồngÝTiếnTrình,
    nútKhôngĐồngÝTiếnTrình,
    currentHeight
  );

  //Nút đồng ý nhận yêu cầu
  nhấnNútĐồngýNhậnViệcTiếnTrình(
    hộp,
    tiêuĐềTiếnTrình,
    nútĐồngÝTiếnTrình,
    nútKhôngĐồngÝTiếnTrình,
    currentHeight
  );

  //Chọn file trước khi gửi
  let mảngTàiLiệu = [];
  let mảngẢnh = [];
  let mảngVideo = [];

  //Gọi hàm nếu thêm tin nhắn tiến trình mà chọn file
  chọnFileTrướcKhiGửiTiếnTrình(hộp, mảngTàiLiệu, mảngẢnh, mảngVideo);

  //Nút gửi nội dung
  nhấnNútGửiTinNhắnTiếnTrình(
    hộp,
    mảngTàiLiệu,
    mảngẢnh,
    mảngVideo,
    tiêuĐềTiếnTrình,
    currentHeight
  );
}

//Khi nhấn nút không đồng ý nhận công việc tiến trình
function nhấnNútKhôngĐồngýNhậnViệcTiếnTrình(
  hộp,
  tiêuĐềTiếnTrình,
  nútĐồngÝTiếnTrình,
  nútKhôngĐồngÝTiếnTrình,
  currentHeight
) {
  if (nútKhôngĐồngÝTiếnTrình.getAttribute("data-event-added") !== "true") {
    nútKhôngĐồngÝTiếnTrình.addEventListener("click", () => {
      let chứcNăngTiếnTrình = hộp.querySelector(
        ".tiếnTrìnhXửLý__côngCụ.xácNhậnYêuCầuKhông"
      );
      let ôInputGửiYêuCầu = chứcNăngTiếnTrình.querySelector(
        ".tiếnTrìnhXửLý__côngCụ--ôNhập > input"
      );

      chứcNăngTiếnTrình.classList.remove("hide");

      //Lấy chiều cao box tiến trình hiện tại
      var element = hộp.querySelector(".tiếnTrìnhXửLý__tinNhắn");
      let dsTiếnTrình = hộp.querySelector(".tiếnTrìnhXửLý__tinNhắn__danhSách");
      let thanhCôngcụKhông = hộp.querySelector(
        ".tiếnTrìnhXửLý__côngCụ.xácNhậnYêuCầuKhông"
      );
      let chiềuCaoBoxDsTinNhắn = dsTiếnTrình.offsetHeight;

      //Xử lý vị trí khi click nút không
      if (!thanhCôngcụKhông.classList.contains("hide")) {
        tiêuĐềTiếnTrình.style.top =
          currentHeight - chiềuCaoBoxDsTinNhắn - 105 + "px";
        element.style.top = currentHeight - chiềuCaoBoxDsTinNhắn - 75 + "px";
      }

      //Nhập dữ liệu vào ô input
      let nútGửiTinNhắnTiếnTrình = hộp.querySelector(
        ".tiếnTrìnhXửLý__côngCụ--gửi.nútGửiXácNhậnYêuCầuKhông"
      );
      if (nútGửiTinNhắnTiếnTrình.getAttribute("data-event-added") !== "true") {
        nútGửiTinNhắnTiếnTrình.addEventListener("click", () => {
          //Vô hiệu hóa nút xác nhận
          nútĐồngÝTiếnTrình.classList.add("vôHiệuHóa");

          //Ẩn hộp nút đi
          let hộpNútXácNhận = hộp.querySelector(
            ".tiếnTrìnhXửLý__tinNhắn__danhSách--nộiDung__xácNhận"
          );
          hộpNútXácNhận.classList.add("hide");

          //Tạo tin nhắn mới
          let tinNhắnMới = tinNhắnTiếnTrìnhMới();

          let dsTinNhắnTiếnTrình = hộp.querySelector(
            ".tiếnTrìnhXửLý__tinNhắn__danhSách"
          );
          let boxChứaNộiDung = tinNhắnMới.querySelector(
            ".tiếnTrìnhXửLý__tinNhắn__danhSách--nộiDung > div:first-child"
          );
          let nộiDungTiêuĐề = hộp.querySelector(
            ".hộpCôngViệc__thôngTin--hộp1__tiêuĐề > div:last-child"
          ).innerHTML;

          if (ôInputGửiYêuCầu.value.trim() !== "" && tinNhắnMới) {
            //Thêm phần tử vào danh sách
            dsTinNhắnTiếnTrình.appendChild(tinNhắnMới);

            //update khoảng cách tiến trình
            khoảngCáchTiếnTrình(hộp);

            var element = hộp.querySelector(".tiếnTrìnhXửLý__tinNhắn");
            let dsTiếnTrình = hộp.querySelector(
              ".tiếnTrìnhXửLý__tinNhắn__danhSách"
            );
            let chiềuCaoBoxDsTinNhắn = dsTiếnTrình.offsetHeight;

            //Xử lý các trường hợp còn lại
            if (chiềuCaoBoxDsTinNhắn < currentHeight - 160) {
              tiêuĐềTiếnTrình.style.top =
                currentHeight - chiềuCaoBoxDsTinNhắn - 55 + "px";
              element.style.top =
                currentHeight - chiềuCaoBoxDsTinNhắn + 35 - 55 + "px";
            }

            //Điền nội dung vào ô input
            boxChứaNộiDung.innerHTML = `
                        <span>Nguyễn Thị Anh Tú Minh</span> đã từ chối nhận <span>${nộiDungTiêuĐề}</span>. Vì lí do ${ôInputGửiYêuCầu.value.trim()}
                        `;

            //Xóa dữ liệu trong ô input
            ôInputGửiYêuCầu.value = "";

            // Đếm số lượng tin nhắn
            let sốLượngTinNhắn = dsTinNhắnTiếnTrình.children.length;
            let boxĐiềnSốLượngTinNhắn = hộp.querySelector(
              ".tiếnTrìnhXửLý__tiêuĐề--thôngTin span"
            );
            boxĐiềnSốLượngTinNhắn.innerHTML = sốLượngTinNhắn;

            //Điền số lượng nút bên ngoài
            let hộpChứaNútXemTiếnTrình = hộp.querySelector(
              ".hộpCôngViệc__cácChứcNăng__nútTiếnTrình"
            );

            hộpChứaNútXemTiếnTrình.children[0].classList.remove("hide");
            hộpChứaNútXemTiếnTrình.children[1].classList.add("hide");
            hộpChứaNútXemTiếnTrình.children[0].querySelector("span").innerHTML =
              sốLượngTinNhắn;

            //Ẩn thanh công cự
            chứcNăngTiếnTrình.classList.add("ẩnTiếnTrình");
            setTimeout(() => {
              chứcNăngTiếnTrình.classList.add("hide");
            }, 480);

            //Xóa dữ liệu biến tin nhắn vừa rồi
            tinNhắnMới = null;
          } else {
            let cảnhBáo = document.getElementById("thôngBáoCảnhBáo");
            let nộiDungCảnhBáo = document.querySelector(
              ".nộiDungThôngBáoCảnhBáo"
            );
            nộiDungCảnhBáo.innerHTML = "Vui lòng nhập lí do từ chối";
            cảnhBáo.classList.remove("hide");
            setTimeout(() => {
              cảnhBáo.classList.add("hide");
            }, 2800);
          }
        });

        nútGửiTinNhắnTiếnTrình.setAttribute("data-event-added", "true");
      }
    });
    nútKhôngĐồngÝTiếnTrình.setAttribute("data-event-added", "true");
  }
}

//Khi nhấn nút đồng ý nhận công việc tiến trình
function nhấnNútĐồngýNhậnViệcTiếnTrình(
  hộp,
  tiêuĐềTiếnTrình,
  nútĐồngÝTiếnTrình,
  nútKhôngĐồngÝTiếnTrình,
  currentHeight
) {
  if (nútĐồngÝTiếnTrình.getAttribute("data-event-added") !== "true") {
    nútĐồngÝTiếnTrình.addEventListener("click", () => {
      //Ẩn hộp nút đi
      let hộpNútXácNhận = hộp.querySelector(
        ".tiếnTrìnhXửLý__tinNhắn__danhSách--nộiDung__xácNhận"
      );
      hộpNútXácNhận.classList.add("hide");

      //Nút đồng ý không nhấn được
      nútKhôngĐồngÝTiếnTrình.classList.add("vôHiệuHóa");

      //Đoạn html tin nhắn
      let tinNhắnMới = tinNhắnTiếnTrìnhMới();

      //Thêm phần tử vào danh sách
      let dsTinNhắnTiếnTrình = hộp.querySelector(
        ".tiếnTrìnhXửLý__tinNhắn__danhSách"
      );

      dsTinNhắnTiếnTrình.appendChild(tinNhắnMới);

      //update khoảng cách tiến trình
      khoảngCáchTiếnTrình(hộp);

      let prevHộpCôngViệc = hộp.previousElementSibling;

      if (
        prevHộpCôngViệc &&
        prevHộpCôngViệc.classList.contains("hộpCôngViệc")
      ) {
        prevHộpCôngViệc.style.marginTop = "-50px";
      }

      //Xóa hạn chế quyền báo cáo tiến độ
      let cácChứcNăngPhảnHồiCôngViệcBịHạnChế = hộp.querySelectorAll(
        ".hộpChọnTùyChỉnhCôngViệc__phảnHồiCôngViệc > div:not(:first-child)"
      );

      //Hiên các chức năng khi nhận công việc
      cácChứcNăngPhảnHồiCôngViệcBịHạnChế.forEach((chứcNăng) => {
        chứcNăng.classList.remove("hide");

        //Cập nhật vị trí hộp menu
        hộp
          .querySelector(".hộpChọnTùyChỉnhCôngViệc__phảnHồiCôngViệc")
          .classList.add("nhậnCôngViệc");
      });

      //Ẩn hộp cảnh báo nếu nó hiện
      let hộpCảnhBáoThêm = hộp.querySelector(".hộpCôngViệc__cảnhBáoKhiThêm");

      if (!hộpCảnhBáoThêm.classList.contains("hide")) {
        hộpCảnhBáoThêm.classList.add("hide");
      }
      //Update khoảng cách thanh công cụ
      var element = hộp.querySelector(".tiếnTrìnhXửLý__tinNhắn");
      let dsTiếnTrình = hộp.querySelector(".tiếnTrìnhXửLý__tinNhắn__danhSách");
      let chiềuCaoBoxDsTinNhắn = dsTiếnTrình.offsetHeight;

      //Xử lý các trường hợp còn lại
      if (chiềuCaoBoxDsTinNhắn < currentHeight - 160) {
        tiêuĐềTiếnTrình.style.top =
          currentHeight - chiềuCaoBoxDsTinNhắn - 40 + "px";
        element.style.top =
          currentHeight - chiềuCaoBoxDsTinNhắn + 35 - 40 + "px";
      }

      //Điền nội dung vào ô input
      let boxChứaNộiDung = tinNhắnMới.querySelector(
        ".tiếnTrìnhXửLý__tinNhắn__danhSách--nộiDung > div:first-child"
      );
      let nộiDungTiêuĐề = hộp.querySelector(
        ".hộpCôngViệc__thôngTin--hộp1__tiêuĐề > div:last-child"
      ).innerHTML;

      boxChứaNộiDung.innerHTML = `
            <span>Nguyễn Thị Anh Tú Minh</span> đã xác nhận <span>${nộiDungTiêuĐề}</span>
            `;
      // Đếm số lượng tin nhắn
      let sốLượngTinNhắn = dsTinNhắnTiếnTrình.children.length;
      let boxĐiềnSốLượngTinNhắn = hộp.querySelector(
        ".tiếnTrìnhXửLý__tiêuĐề--thôngTin span"
      );
      boxĐiềnSốLượngTinNhắn.innerHTML = sốLượngTinNhắn;

      //Điền số lượng nút bên ngoài
      let hộpChứaNútXemTiếnTrình = hộp.querySelector(
        ".hộpCôngViệc__cácChứcNăng__nútTiếnTrình"
      );

      hộpChứaNútXemTiếnTrình.children[0].classList.remove("hide");
      hộpChứaNútXemTiếnTrình.children[1].classList.add("hide");
      hộpChứaNútXemTiếnTrình.children[0].querySelector("span").innerHTML =
        sốLượngTinNhắn;
    });
    nútĐồngÝTiếnTrình.setAttribute("data-event-added", "true");
  }
}

//Khi nhấn nút gửi nội dung tin nhắn tiến trình
function nhấnNútGửiTinNhắnTiếnTrình(
  hộp,
  mảngTàiLiệu,
  mảngẢnh,
  mảngVideo,
  tiêuĐềTiếnTrình,
  currentHeight
) {
  let nútGửiTinNhắnTiếnTrình = hộp.querySelector(
    ".tiếnTrìnhXửLý__côngCụ--gửi.nútGửiXácNhậnYêuCầuĐồngÝ"
  );
  // let zIndexCounter = 1; // Biến để theo dõi z-index hiện tại
  if (nútGửiTinNhắnTiếnTrình.getAttribute("data-event-added") !== "true") {
    nútGửiTinNhắnTiếnTrình.addEventListener("click", () => {
      let chứcNăngTiếnTrình = hộp.querySelector(
        ".tiếnTrìnhXửLý__côngCụ.xácNhậnYêuCầuĐồngÝ"
      );
      let ôInputGửiYêuCầu = chứcNăngTiếnTrình.querySelector(
        ".tiếnTrìnhXửLý__côngCụ--ôNhập > input"
      );

      //Tạo tin nhắn mới
      let tinNhắnMới = tinNhắnTiếnTrìnhMới();

      let dsTinNhắnTiếnTrình = hộp.querySelector(
        ".tiếnTrìnhXửLý__tinNhắn__danhSách"
      );
      let boxChứaNộiDung = tinNhắnMới.querySelector(
        ".tiếnTrìnhXửLý__tinNhắn__danhSách--nộiDung > div:first-child"
      );

      if (ôInputGửiYêuCầu.value.trim() !== "" && tinNhắnMới) {
        //Thêm phần tử vào danh sách
        dsTinNhắnTiếnTrình.appendChild(tinNhắnMới);

        //Điền nội dung vào trong ô
        boxChứaNộiDung.innerHTML = ôInputGửiYêuCầu.value.trim();

        // Cập nhật z-index cho tất cả các tin nhắn
        const tinNhắnElements = dsTinNhắnTiếnTrình.children;
        Array.from(tinNhắnElements).forEach((element, index) => {
          element.style.zIndex = tinNhắnElements.length - index;
        });

        let dsTiếnTrình = hộp.querySelector(
          ".tiếnTrìnhXửLý__tinNhắn__danhSách"
        );
        let chiềuCaoBoxDsTinNhắn = dsTiếnTrình.offsetHeight;

        //Xử lý box tin nhắn khi tới chiều cao nhất định
        if (chiềuCaoBoxDsTinNhắn >= currentHeight - 250) {
          dsTiếnTrình.style.maxHeight = currentHeight - 250 + "px";
        }
        // Đếm số lượng tin nhắn
        let sốLượngTinNhắn = dsTinNhắnTiếnTrình.children.length;
        let boxĐiềnSốLượngTinNhắn = hộp.querySelector(
          ".tiếnTrìnhXửLý__tiêuĐề--thôngTin span"
        );
        boxĐiềnSốLượngTinNhắn.innerHTML = sốLượngTinNhắn;

        //Điền số lượng nút bên ngoài
        let hộpChứaNútXemTiếnTrình = hộp.querySelector(
          ".hộpCôngViệc__cácChứcNăng__nútTiếnTrình"
        );

        hộpChứaNútXemTiếnTrình.children[0].classList.remove("hide");
        hộpChứaNútXemTiếnTrình.children[1].classList.add("hide");
        hộpChứaNútXemTiếnTrình.children[0].querySelector("span").innerHTML =
          sốLượngTinNhắn;

        //Xóa dữ liệu trong ô input
        ôInputGửiYêuCầu.value = "";

        //Ô input trở về trạng thái ban đầu
        let chứcNăngTiếnTrìnhNhậpKhiĐồngÝ = hộp.querySelector(
          ".tiếnTrìnhXửLý__côngCụ.xácNhậnYêuCầuĐồngÝ"
        );
        let hộpChứaInput = chứcNăngTiếnTrìnhNhậpKhiĐồngÝ.querySelector(
          ".tiếnTrìnhXửLý__côngCụ--ôNhập"
        );

        let icon = ôInputGửiYêuCầu.nextElementSibling;

        icon.classList.add("hide");
        hộpChứaInput.classList.add("ẩnHiệnGửiKèmFileTiếnTrình");

        //Xử lý khi có dữ liệu file
        if (
          mảngTàiLiệu.length > 0 ||
          mảngẢnh.length > 0 ||
          mảngVideo.length > 0
        ) {
          //Ẩn các thanh
          let thanhHiệnFileXemTrước = hộp.querySelector(
            ".tiếnTrìnhXửLý__fileTrướcKhiGửi"
          );
          thanhHiệnFileXemTrước.classList.add("hide");

          hộp
            .querySelectorAll(
              ".tiếnTrìnhXửLý__fileTrướcKhiGửi > div > div > div > div:last-child"
            )
            .forEach((box) => {
              box.classList.add("hide");
              let nútHiệuỨng = box.previousElementSibling;
              let ảnhHiệuỨng =
                box.parentElement.children[0].querySelector("img");
              nútHiệuỨng.classList.remove("fileTrướcKhiGửiChọn");
              ảnhHiệuỨng.src = "images/Điều Hướng Tiến Trình.png";

              //Ẩn các nút hiển thị các box
              let boxLớn = box.parentElement.parentElement;
              if (!boxLớn.classList.contains("hide")) {
                boxLớn.classList.add("hide");
              }
            });

          //Hiện thanh file của box tin nhắn
          let thanhChứaDữLiệuTinNhắn = tinNhắnMới.querySelector(
            ".tiếnTrìnhXửLý__tinNhắn__danhSách--dữLiệuThêm"
          );
          thanhChứaDữLiệuTinNhắn.classList.remove("hide");

          //Đưa nội dung vào tin nhắn
          //Đối với ảnh
          let hộpChứaẢnhTinNhắn = tinNhắnMới.querySelector(
            ".tiếnTrìnhXửLý__tinNhắn__danhSách--dữLiệuThêm"
          ).children[0];
          if (mảngẢnh.length > 0) {
            hộpChứaẢnhTinNhắn.classList.remove("hide");
            //Điền số lượng file đưa vàoz
            let hộpChứaSốLượng =
              hộpChứaẢnhTinNhắn.children[0].querySelector("span");
            hộpChứaSốLượng.innerHTML = mảngẢnh.length;

            //Đưa ảnh vào
            let hộpChứaHìnhẢnh = hộpChứaẢnhTinNhắn.querySelector(
              ".tiếnTrìnhXửLý__tinNhắn__danhSách--dữLiệuThêm__boxChứaẢnh"
            );
            hộpChứaHìnhẢnh.innerHTML = "";
            mảngẢnh.forEach((file) => {
              let div = document.createElement("div");
              let img = document.createElement("img");
              img.src = URL.createObjectURL(file);
              div.appendChild(img);
              hộpChứaHìnhẢnh.appendChild(div);
            });
          }

          //Đối với video
          let hộpChứaVideoTinNhắn = tinNhắnMới.querySelector(
            ".tiếnTrìnhXửLý__tinNhắn__danhSách--dữLiệuThêm"
          ).children[1];
          if (mảngVideo.length > 0) {
            //Hiện hộp video lên
            hộpChứaVideoTinNhắn.classList.remove("hide");

            //Điền số lượng file đưa vào
            let hộpChứaSốLượng =
              hộpChứaVideoTinNhắn.children[0].querySelector("span");
            hộpChứaSốLượng.innerHTML = mảngVideo.length;

            let hộpChứaVideo = hộpChứaVideoTinNhắn.querySelector(
              ".tiếnTrìnhXửLý__tinNhắn__danhSách--dữLiệuThêm__boxChứaVideo"
            );
            hộpChứaVideo.innerHTML = "";
            mảngVideo.forEach((file) => {
              let div = document.createElement("div");

              let tênDiv = document.createElement("div");
              let đuôiDiv = document.createElement("div");

              let tênFile = file.name;
              let tên = tênFile.slice(0, tênFile.lastIndexOf("."));
              let đuôi = tênFile.slice(tênFile.lastIndexOf("."));

              tênDiv.textContent = tên;
              đuôiDiv.textContent = đuôi;

              div.appendChild(tênDiv);
              div.appendChild(đuôiDiv);
              hộpChứaVideo.appendChild(div);
            });
          }

          //Đối với tài liệu
          let hộpChứaTàiLiệuTinNhắn = tinNhắnMới.querySelector(
            ".tiếnTrìnhXửLý__tinNhắn__danhSách--dữLiệuThêm"
          ).children[2];

          if (mảngTàiLiệu.length > 0) {
            hộpChứaTàiLiệuTinNhắn.classList.remove("hide");
            let hộpChứaTàiLiệu = hộpChứaTàiLiệuTinNhắn.querySelector(
              ".tiếnTrìnhXửLý__tinNhắn__danhSách--dữLiệuThêm__boxChứaTàiLiệu"
            );

            hộpChứaTàiLiệu.innerHTML = "";

            mảngTàiLiệu.forEach((file) => {
              let div = document.createElement("div");

              let tênDiv = document.createElement("div");
              let đuôiDiv = document.createElement("div");

              let tênFile = file.name;
              let tên = tênFile.slice(0, tênFile.lastIndexOf("."));
              let đuôi = tênFile.slice(tênFile.lastIndexOf("."));

              tênDiv.textContent = tên;
              đuôiDiv.textContent = đuôi;

              div.appendChild(tênDiv);
              div.appendChild(đuôiDiv);
              hộpChứaTàiLiệu.appendChild(div);
            });
          }

          // Xóa các mảng để xử lý lần chọn tệp mới
          mảngTàiLiệu.length = 0;
          mảngẢnh.length = 0;
          mảngVideo.length = 0;
        }

        //Xử lý khi nhấn nút xem file của tin nhắn
        xemFileCủaTinNhắnTiếnTrình(tinNhắnMới);

        //update khoảng cách tiến trình
        khoảngCáchTiếnTrình(hộp);

        //Update khoảng cách thanh công cụ
        updateKhoảngCáchCóThanhCôngCụ();

        //Xóa dữ liệu biến tin nhắn vừa rồi
        tinNhắnMới = null;

        // Thêm khoảng trễ trước khi cuộn để không bị mất khoảng trống
        setTimeout(() => {
          // Cuộn tới cuối danh sách
          dsTinNhắnTiếnTrình.scrollTo({
            top: dsTinNhắnTiếnTrình.scrollHeight,
            behavior: "smooth",
          });
        }, 400);
      } else {
        cảnhBáoKhôngCóSpan("Vui lòng nhập nội dung");
      }
    });

    //Hàm update khoảng cách khi thêm dữ liệu
    function updateKhoảngCáchCóThanhCôngCụ() {
      var element = hộp.querySelector(".tiếnTrìnhXửLý__tinNhắn");
      let dsTiếnTrình = hộp.querySelector(".tiếnTrìnhXửLý__tinNhắn__danhSách");
      let chiềuCaoBoxDsTinNhắn = dsTiếnTrình.offsetHeight;

      //Xử lý khi phân tử cuối có hộp file dữ liệu thêm
      let tinNhắnCuối = hộp.querySelector(
        ".tiếnTrìnhXửLý__tinNhắn__danhSách > div:last-child"
      );
      let thanhDữLiệuThêmTinNhắnCuối = tinNhắnCuối.querySelector(
        ".tiếnTrìnhXửLý__tinNhắn__danhSách--dữLiệuThêm"
      );

      //Khi thêm tin nhắn chưa đạt độ cao và không có box dữ liệu thêm
      if (
        thanhDữLiệuThêmTinNhắnCuối.classList.contains("hide") &&
        chiềuCaoBoxDsTinNhắn < currentHeight - 250
      ) {
        tiêuĐềTiếnTrình.style.top =
          currentHeight - chiềuCaoBoxDsTinNhắn - 140 + "px";
        element.style.top =
          currentHeight - chiềuCaoBoxDsTinNhắn + 35 - 140 + "px";
      }

      //Khi thêm tin nhắn  đạt lớn hơn độ cao và không có box dữ liệu thêm
      if (
        thanhDữLiệuThêmTinNhắnCuối.classList.contains("hide") &&
        chiềuCaoBoxDsTinNhắn >= currentHeight - 250
      ) {
        tiêuĐềTiếnTrình.style.top =
          currentHeight - chiềuCaoBoxDsTinNhắn - 117 + "px";
        element.style.top =
          currentHeight - chiềuCaoBoxDsTinNhắn + 35 - 117 + "px";
      }

      //Khi thêm tin nhắn chưa đạt độ cao và có box dữ liệu thêm
      if (
        !thanhDữLiệuThêmTinNhắnCuối.classList.contains("hide") &&
        chiềuCaoBoxDsTinNhắn < currentHeight - 250
      ) {
        tiêuĐềTiếnTrình.style.top =
          currentHeight - chiềuCaoBoxDsTinNhắn - 190 + "px";
        element.style.top =
          currentHeight - chiềuCaoBoxDsTinNhắn + 35 - 190 + "px";
      }

      //Khi thêm tin nhắn đã cao hơn độ cao và box có dữ liệu thêm
      if (
        !thanhDữLiệuThêmTinNhắnCuối.classList.contains("hide") &&
        chiềuCaoBoxDsTinNhắn >= currentHeight - 250
      ) {
        tiêuĐềTiếnTrình.style.top =
          currentHeight - chiềuCaoBoxDsTinNhắn - 117 + "px";
        element.style.top =
          currentHeight - chiềuCaoBoxDsTinNhắn + 35 - 117 + "px";
      }
    }
    nútGửiTinNhắnTiếnTrình.setAttribute("data-event-added", "true");
  }
}

//Khi gửi chọn file
function chọnFileTrướcKhiGửiTiếnTrình(hộp, mảngTàiLiệu, mảngẢnh, mảngVideo) {
  let fileDữLiệuTiếnTrình = hộp.querySelector(
    '.tiếnTrìnhXửLý__côngCụ--đínhKèm input[type="file"]'
  );

  let đuôiFileTàiLiệu = [
    ".txt",
    ".doc",
    ".docx",
    ".xls",
    ".xlsx",
    ".ppt",
    ".pptx",
    ".pdf",
  ];

  let đuôiFileẢnh = [
    ".jpeg",
    ".jpg",
    ".png",
    ".gif",
    ".tiff",
    ".tif",
    ".bmp",
    ".webp",
    ".svg",
  ];

  let đuôiFileVideo = [
    ".mp4",
    ".mp3",
    ".avi",
    ".mkv",
    ".mov",
    ".wmv",
    ".flv",
    ".webm",
    ".mpeg",
    ".mpg",
    ".3gp",
  ];

  fileDữLiệuTiếnTrình.addEventListener("change", function (event) {
    // Lặp qua từng file trong danh sách
    for (let i = 0; i < event.target.files.length; i++) {
      let file = event.target.files[i];
      let tênFile = file.name;
      let đuôiFileĐưaVào = tênFile
        .slice(tênFile.lastIndexOf("."))
        .toLowerCase();

      // Kiểm tra tài liệu
      if (đuôiFileTàiLiệu.includes(đuôiFileĐưaVào)) {
        if (mảngTàiLiệu.length < 3) {
          mảngTàiLiệu.push(file);
        } else {
          cảnhBáoKhôngCóSpan("Chỉ được tối đa 3 tài liệu");
        }
      }
      // Kiểm tra file ảnh
      else if (đuôiFileẢnh.includes(đuôiFileĐưaVào)) {
        if (mảngẢnh.length < 3) {
          mảngẢnh.push(file);
        } else {
          cảnhBáoKhôngCóSpan("Chỉ được tối đa 3 ảnh");
        }
      }
      // Kiểm tra file video
      else if (đuôiFileVideo.includes(đuôiFileĐưaVào)) {
        if (mảngVideo.length < 3) {
          mảngVideo.push(file);
        } else {
          cảnhBáoKhôngCóSpan("Chỉ được tối đa 3 video");
        }
      } else {
        let cảnhBáo = document.getElementById("thôngBáoCảnhBáo");
        let nộiDungCảnhBáo = document.querySelector(".nộiDungThôngBáoCảnhBáo");
        nộiDungCảnhBáo.innerHTML = "Không xác định loại file: " + tênFile;
        cảnhBáo.classList.remove("hide");
        setTimeout(() => {
          cảnhBáo.classList.add("hide");
        }, 2800);
      }
    }

    // Xử lý nếu có file thì hiện thanh công cụ cho xem file trước khi gửi lên
    let thanhHiệnFileXemTrước = hộp.querySelector(
      ".tiếnTrìnhXửLý__fileTrướcKhiGửi"
    );

    let hộpHìnhẢnh = hộp.querySelector(
      ".tiếnTrìnhXửLý__fileTrướcKhiGửi--hìnhẢnh"
    );

    let hộpVideo = hộp.querySelector(".tiếnTrìnhXửLý__fileTrướcKhiGửi--video");

    let hộpTàiLiệu = hộp.querySelector(
      ".tiếnTrìnhXửLý__fileTrướcKhiGửi--tàiLiệu"
    );

    //Xử lý khi có file dữ liệu
    if (mảngTàiLiệu.length > 0 || mảngẢnh.length > 0 || mảngVideo.length > 0) {
      // Hiện thanh xem trước lên
      thanhHiệnFileXemTrước.classList.remove("hide");

      // Hiện các hộp chứa file tương ứng
      if (mảngẢnh.length > 0) {
        hộpHìnhẢnh.classList.remove("hide");
        //Điền số lượng file đưa vào
        let hộpChứaSốLượng = hộpHìnhẢnh.children[0].querySelector("span");
        hộpChứaSốLượng.innerHTML = mảngẢnh.length;

        //Đưa ảnh vào
        let hộpChứaHìnhẢnh = hộpHìnhẢnh.querySelector(
          ".tiếnTrìnhXửLý__fileTrướcKhiGửi--hìnhẢnh__boxChứa"
        );
        hộpChứaHìnhẢnh.innerHTML = "";
        mảngẢnh.forEach((file) => {
          let div = document.createElement("div");
          let img = document.createElement("img");
          img.src = URL.createObjectURL(file);
          div.appendChild(img);
          hộpChứaHìnhẢnh.appendChild(div);
        });

        //Hiện hộp chứa ảnh khi click
        clickHiệnẨnHộpChứaFileXemTrước(hộpHìnhẢnh, hộpChứaHìnhẢnh);
      }

      if (mảngVideo.length > 0) {
        //Hiện hộp video lên
        hộpVideo.classList.remove("hide");

        //Điền số lượng file đưa vào
        let hộpChứaSốLượng = hộpVideo.children[0].querySelector("span");
        hộpChứaSốLượng.innerHTML = mảngVideo.length;

        let hộpChứaVideo = hộpVideo.querySelector(
          ".tiếnTrìnhXửLý__fileTrướcKhiGửi--video__boxChứa"
        );
        hộpChứaVideo.innerHTML = "";
        mảngVideo.forEach((file) => {
          let div = document.createElement("div");

          let tênDiv = document.createElement("div");
          let đuôiDiv = document.createElement("div");

          let tênFile = file.name;
          let tên = tênFile.slice(0, tênFile.lastIndexOf("."));
          let đuôi = tênFile.slice(tênFile.lastIndexOf("."));

          tênDiv.textContent = tên;
          đuôiDiv.textContent = đuôi;

          div.appendChild(tênDiv);
          div.appendChild(đuôiDiv);
          hộpChứaVideo.appendChild(div);
        });

        //Hiện hộp chứa video khi click
        clickHiệnẨnHộpChứaFileXemTrước(hộpVideo, hộpChứaVideo);
      }

      if (mảngTàiLiệu.length > 0) {
        hộpTàiLiệu.classList.remove("hide");

        //Điền số lượng file đưa vào
        let hộpChứaSốLượng = hộpTàiLiệu.children[0].querySelector("span");
        hộpChứaSốLượng.innerHTML = mảngTàiLiệu.length;

        let hộpChứaTàiLiệu = hộpTàiLiệu.querySelector(
          ".tiếnTrìnhXửLý__fileTrướcKhiGửi--tàiLiệu__boxChứa"
        );
        hộpChứaTàiLiệu.innerHTML = "";

        mảngTàiLiệu.forEach((file) => {
          let div = document.createElement("div");

          let tênDiv = document.createElement("div");
          let đuôiDiv = document.createElement("div");

          let tênFile = file.name;
          let tên = tênFile.slice(0, tênFile.lastIndexOf("."));
          let đuôi = tênFile.slice(tênFile.lastIndexOf("."));

          tênDiv.textContent = tên;
          đuôiDiv.textContent = đuôi;

          div.appendChild(tênDiv);
          div.appendChild(đuôiDiv);
          hộpChứaTàiLiệu.appendChild(div);
        });

        //Hiện hộp chứa video khi click
        clickHiệnẨnHộpChứaFileXemTrước(hộpTàiLiệu, hộpChứaTàiLiệu);
      }

      //Hàm xử lý ẩn hiện hộp chứa dữ liệu file xem trước
      function clickHiệnẨnHộpChứaFileXemTrước(hộpLớn, hộpChứaDữLiệu) {
        //Hiện hộp chứa ảnh khi click
        let nútChứa = hộpLớn.children[0].children[0];
        let ảnhNútchứa =
          hộpLớn.children[0].children[0].children[1].querySelector("img");
        if (nútChứa.getAttribute("data-event-added") !== "true") {
          nútChứa.addEventListener("click", () => {
            // Ẩn tất cả các hộp chứa dữ liệu file khác
            hộp
              .querySelectorAll(
                ".tiếnTrìnhXửLý__fileTrướcKhiGửi > div > div > div > div:last-child"
              )
              .forEach((box) => {
                if (box !== hộpChứaDữLiệu) {
                  box.classList.add("hide");
                }
                let nútHiệuỨng = box.previousElementSibling;
                let ảnhHiệuỨng =
                  box.parentElement.children[0].querySelector("img");
                if (nútHiệuỨng !== nútChứa) {
                  nútHiệuỨng.classList.remove("fileTrướcKhiGửiChọn");
                  ảnhHiệuỨng.src = "images/Điều Hướng Tiến Trình.png";
                }
              });

            //Ẩn hiện nút hiện
            hộpChứaDữLiệu.classList.toggle("hide");

            //Thay đổi trạng thái nút
            nútChứa.classList.toggle("fileTrướcKhiGửiChọn");

            if (nútChứa.classList.contains("fileTrướcKhiGửiChọn")) {
              ảnhNútchứa.src = "images/ĐiềuHướngXemTrướcFile.png";
            } else {
              ảnhNútchứa.src = "images/Điều Hướng Tiến Trình.png";
            }
          });
          nútChứa.setAttribute("data-event-added", "true");
        }
      }
    }
  });
}

//Nhấn nút xem yêu cầu hoặc phản hồi
function nútXemYêuCầuOrPhảnHồi(hộp) {
  let nútMởTiếnTrình = hộp.querySelectorAll(
    ".hộpCôngViệc__cácChứcNăng__nútTiếnTrình"
  );
  let mànHìnhMờTiếnTrình = hộp.querySelector("#mànHìnhMờTiếnTrình");
  let hộpTiếnTrình = hộp.querySelector("#tiếnTrìnhXửLý");
  let tiêuĐềTiếnTrình = hộp.querySelector(".tiếnTrìnhXửLý__tiêuĐề");
  let tinNhắnTiếnTrình = hộp.querySelector(".tiếnTrìnhXửLý__tinNhắn");
  let hộpCôngCụĐồngÝ = hộp.querySelector(".xácNhậnYêuCầuĐồngÝ");
  let chứcNăngTiếnTrình = hộp.querySelector(".tiếnTrìnhXửLý__côngCụ");
  let chứcNăngTiếnTrìnhĐồngÝ = hộp.querySelector(
    ".tiếnTrìnhXửLý__côngCụ.xácNhậnYêuCầuĐồngÝ"
  );
  let currentHeight = window.innerHeight;

  nútMởTiếnTrình.forEach((element) => {
    if (element.getAttribute("data-event-added") !== "true") {
      element.addEventListener("click", () => {
        mànHìnhMờTiếnTrình.classList.remove("hide");
        hộpTiếnTrình.classList.remove("hide");
        tiêuĐềTiếnTrình.classList.remove("ẩnTiếnTrình");
        tinNhắnTiếnTrình.classList.remove("ẩnTiếnTrình");
        chứcNăngTiếnTrình.classList.remove("ẩnTiếnTrình");
        hộpCôngCụĐồngÝ.classList.remove("ẩnTiếnTrình");
        mànHìnhMờTiếnTrình.classList.remove("ẩnMànHìnhMờTiếnTrình");

        //Lấy chiều cao box tiến trình hiện tại
        var element = hộp.querySelector(".tiếnTrìnhXửLý__tinNhắn");
        let dsTiếnTrình = hộp.querySelector(
          ".tiếnTrìnhXửLý__tinNhắn__danhSách"
        );
        let thanhCôngcụ = hộp.querySelector(
          ".tiếnTrìnhXửLý__côngCụ.xácNhậnYêuCầuKhông"
        );
        let thanhCôngCụĐồngÝ = hộp.querySelector(
          ".tiếnTrìnhXửLý__côngCụ.xácNhậnYêuCầuĐồngÝ"
        );
        let chiềuCaoBoxDsTinNhắn = dsTiếnTrình.offsetHeight;

        //Ẩn thanh công cụ khi bấm vào nút thêm nếu nó hiện
        if (!chứcNăngTiếnTrìnhĐồngÝ.classList.contains("hide")) {
          chứcNăngTiếnTrìnhĐồngÝ.classList.add("hide");
        }

        //Xử lý các chiều cao của box tin khi nhắn xem phản hồi
        if (chiềuCaoBoxDsTinNhắn < currentHeight - 160) {
          tiêuĐềTiếnTrình.style.top =
            currentHeight - chiềuCaoBoxDsTinNhắn - 55 + "px";
          element.style.top =
            currentHeight - chiềuCaoBoxDsTinNhắn + 35 - 55 + "px";
        } else if (chiềuCaoBoxDsTinNhắn >= currentHeight - 160) {
          dsTiếnTrình.style.maxHeight = currentHeight - 160 + "px";
          tiêuĐềTiếnTrình.style.top =
            currentHeight - chiềuCaoBoxDsTinNhắn - 45 + "px";
          element.style.top =
            currentHeight - chiềuCaoBoxDsTinNhắn + 35 - 45 + "px";
        }

        //Xử lý coi thanh công cụ đồng ý có hiện hay không
        if (!thanhCôngCụĐồngÝ.classList.contains("hide")) {
          tiêuĐềTiếnTrình.style.top =
            currentHeight - chiềuCaoBoxDsTinNhắn - 65 + "px";
          element.style.top =
            currentHeight - chiềuCaoBoxDsTinNhắn + 35 - 65 + "px";
        }

        //Nếu cuối danh sách chứa dữ liệu thêm xử lý để không bị ẩn đi
        let tinNhắnCuối = hộp.querySelector(
          ".tiếnTrìnhXửLý__tinNhắn__danhSách > div:last-child"
        );
        let thanhDữLiệuThêmTinNhắnCuối = tinNhắnCuối.querySelector(
          ".tiếnTrìnhXửLý__tinNhắn__danhSách--dữLiệuThêm"
        );

        if (!thanhDữLiệuThêmTinNhắnCuối.classList.contains("hide")) {
          tiêuĐềTiếnTrình.style.top =
            currentHeight - chiềuCaoBoxDsTinNhắn - 45 + "px";
          element.style.top =
            currentHeight - chiềuCaoBoxDsTinNhắn + 35 - 45 + "px";
        }
      });
      element.setAttribute("data-event-added", "true");
    }
  });
}

//Tạo tin nhắn tiến trình mới HTML
function tinNhắnTiếnTrìnhMới() {
  let tinNhắnTiếnTrìnhMới = document.createElement("div");
  tinNhắnTiếnTrìnhMới.innerHTML = `
  <div>
    <div class="tiếnTrìnhXửLý__tinNhắn__danhSách--thôngTinThêmNgườiThựcHiện">
        <div>
            Cách 1 phút trước
        </div>
        <div>
            <div>
                <p>Người thực hiện</p>
            </div>
            <div>
                <p>Nguyễn Tuấn Tú Hằng</p>
            </div>
        </div>
    </div>
    <div class="tiếnTrìnhXửLý__tinNhắn__danhSách--nộiDung">
        <div>
            <span>Nguyễn Tuấn Tú Hằng</span> đã xác nhận đồng ý nhận <span>Thiết kế
                Logo</span>?
        </div>

        <div class="hide">
            <div>
                KHÔNG
            </div>
            <div>
                ĐỒNG Ý
            </div>
        </div>

    </div>

    <div class="tiếnTrìnhXửLý__tinNhắn__danhSách--dữLiệuThêm hide">
        <div class="hide">
            <div>
                <div>
                    <span>1</span> hình
                </div>
                <div>
                    <img src="images/Điều Hướng Tiến Trình.png" alt="">
                </div>
            </div>
            <div class="tiếnTrìnhXửLý__tinNhắn__danhSách--dữLiệuThêm__boxChứaẢnh hide">
                <div>
                    <img src="images/ảnh.png" alt="">
                </div>
                <div>
                    <img src="images/ảnh.png" alt="">
                </div>
                <div>
                    <img src="images/ảnh.png" alt="">
                </div>
            </div>
        </div>

        <div class="hide">
            <div>
                <div>
                    <span>1</span> video
                </div>
                <div>
                    <img src="images/Điều Hướng Tiến Trình.png" alt="">
                </div>
            </div>
            <div class="tiếnTrìnhXửLý__tinNhắn__danhSách--dữLiệuThêm__boxChứaVideo hide">
                <div>
                    <div>
                        Pssssssssssssshim hay
                    </div>
                    <div>
                        .mp4
                    </div>
                </div>
                <div class="option--màuĐậm">
                    <div>
                        Pssssssssssssshim hay
                    </div>
                    <div>
                        .mp4
                    </div>
                </div>
                <div>
                    <div>
                        Pssssssssssssshim hay
                    </div>
                    <div>
                        .mp4
                    </div>
                </div>
            </div>
        </div>

        <div class="hide">
            <div>
                <div>
                    <span>1</span> tài liệu
                </div>
                <div>
                    <img src="images/Điều Hướng Tiến Trình.png" alt="">
                </div>
            </div>
            <div class="tiếnTrìnhXửLý__tinNhắn__danhSách--dữLiệuThêm__boxChứaTàiLiệu hide">
                <div>
                    <div>
                        Pssssssssssssshim hay
                    </div>
                    <div>
                        .mp4
                    </div>
                </div>
                <div class="option--màuĐậm">
                    <div>
                        Pssssssssssssshim hay
                    </div>
                    <div>
                        .mp4
                    </div>
                </div>
                <div>
                    <div>
                        Pssssssssssssshim hay
                    </div>
                    <div>
                        .mp4
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>    
    `;
  return tinNhắnTiếnTrìnhMới;
}
