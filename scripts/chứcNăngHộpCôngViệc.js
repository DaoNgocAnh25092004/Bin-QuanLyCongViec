// ----------------------- Đóng mở menu -------------------------
// menu lọc theo ngày
const nutMenuTheoNgay = document.querySelector(".menu__ngay div:first-child");
const hopTheoNgay = document.querySelector(".hộpChọnNgày");
const iconMenuTheoNgay = nutMenuTheoNgay.querySelector("img");

// menu lọc theo việc cần làm
const nutMenuViecCanLam = document.querySelector(
  ".menu__việcCầnLàm > div:last-child"
);
const hopMenuViecCanLam = document.querySelector(".hộpViệCầnLàm");
const iconMenuViecCanLam = nutMenuViecCanLam.querySelector("img");

// Danh sách các hộp và nút
const menus = [
  {
    nut: nutMenuTheoNgay,
    hop: hopTheoNgay,
    icon: iconMenuTheoNgay,
    imgOpen: "images/Nút sổ menu.png",
    imgClose: "images/Đóng.png",
  },
  {
    nut: nutMenuViecCanLam,
    hop: hopMenuViecCanLam,
    icon: iconMenuViecCanLam,
    imgOpen: "images/Nút sổ menu.png",
    imgClose: "images/Đóng.png",
  },
];

// Gọi hàm xử lí ẩn hiện menu cho mỗi menu
menus.forEach((menu) => {
  showMenu(menu.nut, menu.hop, menu.icon, menu.imgOpen, menu.imgClose, menus);
});

function showMenu(nutMenu, hopMenu, icon, src1, src2, allMenus) {
  nutMenu.addEventListener("click", (event) => {
    // Ngăn chặn việc đóng menu khi bấm vào nút
    event.stopPropagation();

    allMenus.forEach((menu) => {
      if (menu.hop !== hopMenu) {
        menu.hop.classList.add("hide");
        menu.icon.src = src1;
      }
    });

    //Tắ menu hộp chức năng
    tắtMenuChứcNăngHộpChính();

    //Menu chủ đề
    tắtMenuChủĐề();

    //Tắt menu khi thêm file ảnh công việc
    tắtMenuThêmFile();

    //Tắt menu xóa ảnh trong công việc
    tắtMenuXóaFile();

    // Chuyển trạng thái ẩn/hiện của hộp hiện tại
    hopMenu.classList.toggle("hide");

    thayDoiDongMoMenu(icon, src1, src2);
  });
}

function thayDoiDongMoMenu(icon, src1, src2) {
  if (icon.getAttribute("src") === src1) {
    icon.src = src2;
  } else {
    icon.src = src1;
  }
}

// Đóng tất cả các menu khi bấm ra ngoài
document.addEventListener("click", () => {
  menus.forEach((menu) => {
    menu.hop.classList.add("hide");
    menu.icon.src = menu.imgOpen;
  });
});

// Ngăn chặn việc đóng menu khi bấm vào bên trong menu
menus.forEach((menu) => {
  menu.hop.addEventListener("click", (event) => {
    event.stopPropagation();
  });
});

//menu chức năng cho công việc
function XửLýMenuChứcNăngCôngViệc() {
  let nútMenuCôngViệcChính = document.querySelectorAll(
    ".hộpCôngViệc__nútChứcNăngChính"
  );
  let hộpCácChứcNăngCôngViệc = document.querySelectorAll(
    ".hộpChọnTùyChỉnhCôngViệc"
  );
  let ảnhNútMenuCôngViệcChính = document.querySelectorAll(
    ".hộpCôngViệc__nútChứcNăngChính img"
  );

  // Thêm sự kiện cho nút menu công việc chính nếu chưa có sự kiện
  nútMenuCôngViệcChính.forEach((element) => {
    if (element.getAttribute("data-event-added") !== "true") {
      element.addEventListener("click", (event) => {
        event.stopPropagation();

        //Menu chủ đề
        tắtMenuChủĐề();

        //Tắt menu khi thêm file ảnh công việc
        tắtMenuThêmFile();

        //Tắt menu xóa ảnh trong công việc
        tắtMenuXóaFile();

        //Tắt menu lọc dưới header
        tắtMenuLọcDướiHeader();

        let parentElement = element.parentElement;
        let hộpThôngTin = parentElement.querySelector(
          ".hộpChọnTùyChỉnhCôngViệc"
        );
        let img = element.querySelector("img");

        //Xóa màn hình mờ
        hộpThôngTin.classList.remove("làmMờChứcNăngChính");

        // Đóng tất cả các hộp chức năng khác và đổi lại hình ảnh
        hộpCácChứcNăngCôngViệc.forEach((hộp) => {
          if (hộp !== hộpThôngTin) {
            hộp.classList.add("hide");
          }
        });

        ảnhNútMenuCôngViệcChính.forEach((img) => {
          img.setAttribute("src", "images/MởChứcNăng.png");
        });

        // Đổi trạng thái ẩn/hiện của hộp thông tin
        if (hộpThôngTin.classList.contains("hide")) {
          hộpThôngTin.classList.remove("hide");
          img.setAttribute("src", "images/Đóng hộp chức năng.png");
        } else {
          hộpThôngTin.classList.add("hide");
          img.setAttribute("src", "images/MởChứcNăng.png");
        }

        // Ẩn hiện các hộp menu con
        let hộpQuảnLýCôngViệc = hộpThôngTin.querySelector(
          ".hộpChọnTùyChỉnhCôngViệc__quảnLýCôngViệc"
        );
        let quảnLýCôngViệc = parentElement.querySelector(
          ".hộpChọnTùyChỉnhCôngViệc > div:first-child > div:first-child"
        );

        let hộpTươngTácNhânSự = hộpThôngTin.querySelector(
          ".hộpChọnTùyChỉnhCôngViệc__tươngTácNhânSự"
        );
        let tươngTácNhânSự = parentElement.querySelector(
          ".hộpChọnTùyChỉnhCôngViệc > div:nth-child(2) > div:first-child"
        );
        let bịHạnChế = tươngTácNhânSự.querySelector(".chứcNăngĐangHạnChế");

        let hộpHỗTrợTheoDõi = hộpThôngTin.querySelector(
          ".hộpChọnTùyChỉnhCôngViệc__hỗTrợTheoDõi"
        );
        let hỗTrợTheoDõi = parentElement.querySelector(
          ".hộpChọnTùyChỉnhCôngViệc > div:nth-child(3) > div:first-child"
        );

        let hộpPhảnHồiCôngViệc = hộpThôngTin.querySelector(
          ".hộpChọnTùyChỉnhCôngViệc__phảnHồiCôngViệc"
        );
        let phảnHồiCôngViệc = parentElement.querySelector(
          ".hộpChọnTùyChỉnhCôngViệc > div:nth-child(4) > div:first-child"
        );

        let hộpKhenThưởng = hộpThôngTin.querySelector(
          ".hộpChọnTùyChỉnhCôngViệc__khenThưởng"
        );
        let khenThưởng = parentElement.querySelector(
          ".hộpChọnTùyChỉnhCôngViệc > div:nth-child(5) > div:first-child"
        );

        let boxNhómChính = [
          hộpQuảnLýCôngViệc,
          hộpTươngTácNhânSự,
          hộpHỗTrợTheoDõi,
          hộpPhảnHồiCôngViệc,
          hộpKhenThưởng,
        ];

        // Xử lý chức năng đặt ưu tiên
        hàmĐặtHủyƯuTiên(hộpHỗTrợTheoDõi, parentElement);
        //Xử lý các chức năng sẽ hiện đối với từng trạng thái
        //Trạng thái 1: Chờ nhập thêm thông tin (Khi thêm công việc)
        let trạngTháiChờNhậpThêmThôngTin = element.parentNode.querySelector(
          ".trạngThái-chờNhậpThêmThôngTin"
        );

        if (
          trạngTháiChờNhậpThêmThôngTin &&
          !trạngTháiChờNhậpThêmThôngTin.classList.contains("hide") &&
          !hộpQuảnLýCôngViệc.children[0].children[0].classList.contains("hide")
        ) {
          //Hạn chế quyền tương tác nhân sự
          tươngTácNhânSự.classList.add("khôngClick");
          let chứcNăngQuyềnTươngTácNhânSự = tươngTácNhânSự.children[1];
          chứcNăngQuyềnTươngTácNhânSự.classList.add("chứcNăngĐangHạnChế");
          chứcNăngQuyềnTươngTácNhânSự.children[1].classList.remove("hide");
        }

        //Đóng tất cả menu con khi bật menu lớn
        boxNhómChính.forEach((box) => {
          if (!box.classList.contains("hide")) {
            box.classList.add("hide");
          }
        });

        function xửLýĐóngMởMenuCon(menuCon) {
          menuCon.classList.toggle("hide");
          boxNhómChính.forEach((box) => {
            if (box !== menuCon) {
              box.classList.add("hide");
            }
          });
        }

        //Nhóm quản lý công việc
        if (
          quảnLýCôngViệc &&
          hộpQuảnLýCôngViệc &&
          quảnLýCôngViệc.getAttribute("data-event-added") !== "true"
        ) {
          quảnLýCôngViệc.addEventListener("click", (event) => {
            event.stopPropagation();
            xửLýĐóngMởMenuCon(hộpQuảnLýCôngViệc);

            // Xử lý chức năng thêm tiêu đề / sửa tiêu đề
            ThêmSửaTiêuĐềCôngViệc(
              hộpQuảnLýCôngViệc,
              hộpThôngTin,
              img,
              parentElement,
              tươngTácNhânSự
            );

            //Cập nhật trang thái ô chỉnh sửa
            trạngTháiNútSửaNộiDung(parentElement);

            // Xử lý chức năng chỉnh sửa nội dung
            if (
              hộpQuảnLýCôngViệc.children[1].innerText == "Chỉnh sửa nội dung"
            ) {
              ChỉnhSửaNộiDungCôngViệc(
                hộpQuảnLýCôngViệc,
                hộpThôngTin,
                img,
                parentElement
              );
            } else if (
              hộpQuảnLýCôngViệc.children[1].innerText == "Thêm mô tả" ||
              hộpQuảnLýCôngViệc.children[1].innerText == "Chỉnh sửa mô tả"
            ) {
              thêmMôTảẢnhVideoAudio(
                hộpQuảnLýCôngViệc,
                hộpThôngTin,
                img,
                parentElement
              );
            }

            // Xử lý khi gửi tài liệu đính kèm
            GửiTàiLiệuĐínhKèm(hộpQuảnLýCôngViệc, img, hộpThôngTin);

            // Xử lý chức năng xóa công việc
            xóaCôngViệc(hộpQuảnLýCôngViệc, parentElement);
          });
          quảnLýCôngViệc.setAttribute("data-event-added", "true");
        }

        //Nhóm tương tác với nhân sự
        if (
          tươngTácNhânSự &&
          hộpTươngTácNhânSự &&
          !bịHạnChế &&
          tươngTácNhânSự.getAttribute("data-event-added") !== "true"
        ) {
          tươngTácNhânSự.addEventListener("click", (event) => {
            event.stopPropagation();
            xửLýĐóngMởMenuCon(hộpTươngTácNhânSự);

            //Xử lý hiện menu con gửi ai duyệt
            let nútConGửiAiDuyệt = hộpTươngTácNhânSự.querySelector(
              ".hộpChọnTùyChỉnhCôngViệc__tươngTácNhânSự--box1 > div:first-child"
            );
            let menuConGửiAiDuyệt = hộpTươngTácNhânSự.querySelector(
              ".hộpChọnTùyChỉnhCôngViệc__tươngTácNhânSự--gửiAiDuyệt"
            );

            let nútConGiaoViệcChoAi = hộpTươngTácNhânSự.querySelector(
              ".hộpChọnTùyChỉnhCôngViệc__tươngTácNhânSự--box2 > div:first-child"
            );
            let menuConGiaoViệcChoAi = hộpTươngTácNhânSự.querySelector(
              ".hộpChọnTùyChỉnhCôngViệc__tươngTácNhânSự--giaoViệcChoAi"
            );

            let nútConGửiAiXem = hộpTươngTácNhânSự.querySelector(
              ".hộpChọnTùyChỉnhCôngViệc__tươngTácNhânSự--box3 > div:first-child"
            );
            let menuConGửiAiXem = hộpTươngTácNhânSự.querySelector(
              ".hộpChọnTùyChỉnhCôngViệc__tươngTácNhânSự--gửiAiXem"
            );

            let nútConGửiGiámSát = hộpTươngTácNhânSự.querySelector(
              ".hộpChọnTùyChỉnhCôngViệc__tươngTácNhânSự--box4 > div:first-child"
            );
            let menuConGửiGiámSát = hộpTươngTácNhânSự.querySelector(
              ".hộpChọnTùyChỉnhCôngViệc__tươngTácNhânSự--gửiAiGiámSát"
            );

            let boxMenuConTươngTácNhânSự = [
              menuConGửiAiDuyệt,
              menuConGiaoViệcChoAi,
              menuConGửiAiXem,
              menuConGửiGiámSát,
            ];

            //Đóng tất cả menu con khi bật menu lớn
            boxMenuConTươngTácNhânSự.forEach((box) => {
              if (!box.classList.contains("hide")) {
                box.classList.add("hide");
              }
            });

            function xửLýĐóngMởMenuConTươngTácNhânSự(menuCon) {
              menuCon.classList.toggle("hide");
              boxMenuConTươngTácNhânSự.forEach((box) => {
                if (box !== menuCon) {
                  box.classList.add("hide");
                }
              });
              kiểmTraVàCậpNhậtLàmMờChứcNăngChính();
            }

            function kiểmTraVàCậpNhậtLàmMờChứcNăngChính() {
              let anyMenuOpen = boxMenuConTươngTácNhânSự.some(
                (box) => !box.classList.contains("hide")
              );
              if (anyMenuOpen) {
                hộpThôngTin.classList.add("làmMờChứcNăngChính");
              } else {
                hộpThôngTin.classList.remove("làmMờChứcNăngChính");
              }
            }

            // Xử lý hiện menu con gửi ai duyệt
            if (
              nútConGửiAiDuyệt &&
              menuConGửiAiDuyệt &&
              nútConGửiAiDuyệt.getAttribute("data-event-added") !== "true"
            ) {
              nútConGửiAiDuyệt.addEventListener("click", (event) => {
                event.stopPropagation();
                xửLýĐóngMởMenuConTươngTácNhânSự(menuConGửiAiDuyệt);

                //Chọn menu con
                xửLýMenuChọnNgườiDuyệt(menuConGửiAiDuyệt, hộpTươngTácNhânSự);
              });
              nútConGửiAiDuyệt.setAttribute("data-event-added", "true");
            }

            //Xử lý hiện menu con giao việc cho ai
            if (
              nútConGiaoViệcChoAi &&
              menuConGiaoViệcChoAi &&
              nútConGiaoViệcChoAi.getAttribute("data-event-added") !== "true"
            ) {
              nútConGiaoViệcChoAi.addEventListener("click", (event) => {
                event.stopPropagation();
                xửLýĐóngMởMenuConTươngTácNhânSự(menuConGiaoViệcChoAi);

                //Xứ lý chức năng giao việc ai
                chứcNăngGiaoViệcChoAi(hộpTươngTácNhânSự, parentElement);
              });
              nútConGiaoViệcChoAi.setAttribute("data-event-added", "true");
            }

            //Xử lý hiện menu con gửi ai xem
            if (
              nútConGửiAiXem &&
              menuConGửiAiXem &&
              nútConGửiAiXem.getAttribute("data-event-added") !== "true"
            ) {
              nútConGửiAiXem.addEventListener("click", (event) => {
                event.stopPropagation();
                xửLýĐóngMởMenuConTươngTácNhânSự(menuConGửiAiXem);

                //Xử lý chức năng gửi ai xem
                chứcNăngGửiAiXem(hộpTươngTácNhânSự);
              });
              nútConGửiAiXem.setAttribute("data-event-added", "true");
            }
            //Xử lý menu con gửi ai giám sát
            if (
              nútConGửiGiámSát &&
              menuConGửiGiámSát &&
              nútConGửiGiámSát.getAttribute("data-event-added") !== "true"
            ) {
              nútConGửiGiámSát.addEventListener("click", (event) => {
                event.stopPropagation();
                xửLýĐóngMởMenuConTươngTácNhânSự(menuConGửiGiámSát);

                //xử lý chức năng guiwr ai giám sát
                chứcNăngGửiAiGiámSát(hộpTươngTácNhânSự);
              });

              nútConGửiGiámSát.setAttribute("data-event-added", "true");
            }
          });

          tươngTácNhânSự.setAttribute("data-event-added", "true");
        }

        //Nhóm hỗ trợ theo dõi
        if (
          hỗTrợTheoDõi &&
          hộpHỗTrợTheoDõi &&
          hỗTrợTheoDõi.getAttribute("data-event-added") !== "true"
        ) {
          hỗTrợTheoDõi.addEventListener("click", (event) => {
            event.stopPropagation();
            xửLýĐóngMởMenuCon(hộpHỗTrợTheoDõi);

            //Hiện menu con chủ đề
            let nútConChủĐề = hộpHỗTrợTheoDõi.querySelector(
              ".hộpChọnTùyChỉnhCôngViệc__hỗTrợTheoDõi--box2 > div:first-child"
            );
            let menuConChủĐề = hộpHỗTrợTheoDõi.querySelector(
              ".hộpChọnTùyChỉnhCôngViệc__hỗTrợTheoDõi--chủĐềCôngViệc"
            );

            //Đóng tất cả menu con khi bật menu lớn
            if (!menuConChủĐề.classList.contains("hide")) {
              menuConChủĐề.classList.add("hide");
            }

            // Xử lý chức năng đặt ưu tiên
            hàmĐặtHủyƯuTiên(hộpHỗTrợTheoDõi, parentElement);

            // Xử lý chức năng chủ đề công việc
            chứcNăngChủĐềCôngViệc(nútConChủĐề, menuConChủĐề, hộpThôngTin, img);

            //Xử lý chức năng theo dõi
          });
          hỗTrợTheoDõi.setAttribute("data-event-added", "true");
        }

        //Nhóm phản hồi công việc
        if (
          phảnHồiCôngViệc &&
          hộpPhảnHồiCôngViệc &&
          phảnHồiCôngViệc.getAttribute("data-event-added") !== "true"
        ) {
          phảnHồiCôngViệc.addEventListener("click", (event) => {
            event.stopPropagation();
            xửLýĐóngMởMenuCon(hộpPhảnHồiCôngViệc);

            //Xử lý chức năng duyệt đề xuất
            chứcNăngDuyệtĐềXuất(
              hộpPhảnHồiCôngViệc,
              hộpThôngTin,
              img,
              parentElement
            );

            //Xử lý chức năng báo cáo tiến độ
            chứcNắngBáoCáoTiếnĐộ(parentElement, hộpPhảnHồiCôngViệc);

            //Xử lý chức năng yêu cầu gia hạn
            chứcNăngYêuCầuGiaHạn(
              hộpPhảnHồiCôngViệc,
              hộpThôngTin,
              img,
              parentElement
            );

            //Xử lý chức năng gửi phản hồi
            chứcNắngPhảnHồiCôngViệc(parentElement, hộpPhảnHồiCôngViệc);

            //Xử lý chức năng hoàn thành công việc
            chứcNăngHoànThànhCôngViệc(
              hộpPhảnHồiCôngViệc,
              hộpThôngTin,
              img,
              parentElement
            );
          });
          phảnHồiCôngViệc.setAttribute("data-event-added", "true");
        }

        //Nhóm Khen thưởng
        if (
          khenThưởng &&
          hộpKhenThưởng &&
          khenThưởng.getAttribute("data-event-added") !== "true"
        ) {
          khenThưởng.addEventListener("click", (event) => {
            event.stopPropagation();
            xửLýĐóngMởMenuCon(hộpKhenThưởng);

            //Xử lý chức năng quản lý bảng điểm thành tích
            chứcNăngQuảnLýBảngĐiểmThànhTích(hộpKhenThưởng);
          });
          khenThưởng.setAttribute("data-event-added", "true");
        }
      });

      //Add biến kiểm tra đã click
      element.setAttribute("data-event-added", "true");
    }
  });
  // Đóng các hộp khi click bên ngoài
  document.addEventListener("click", (event) => {
    hộpCácChứcNăngCôngViệc.forEach((hộp) => {
      if (!hộp.classList.contains("hide") && !hộp.contains(event.target)) {
        hộp.classList.add("hide");
        nútMenuCôngViệcChính.forEach((element) => {
          let img = element.querySelector("img");
          img.setAttribute("src", "images/MởChứcNăng.png");
        });
      }
    });
  });
}

// Xử lý menu chức năng chính lớn nhất bao gồm các chức năng con
XửLýMenuChứcNăngCôngViệc();

// ------------------------------------------ Nhóm quản lý công việc --------------------------------------------

//Chức năng thêm sủa tiêu đề của nhóm quản lý công việc
function ThêmSửaTiêuĐềCôngViệc(
  hộpQuảnLýCôngViệc,
  hộpThôngTin,
  img,
  parentElement,
  tươngTácNhânSự
) {
  hộpQuảnLýCôngViệc.children[0].addEventListener("click", (event) => {
    event.stopPropagation();

    // Hiện ô nhập tiêu đề lên
    let thanhNhậpTiêuĐề = document.querySelector(".thanhGửiNộiDungTiêuĐề");
    //Hiện thanh nhập tiêu đề
    ẩnHiệnTrườngHợpFooter(true, thanhNhậpTiêuĐề);
    //Ẩn box công việc chính
    hộpThôngTin.classList.add("hide");
    img.setAttribute("src", "images/MởChứcNăng.png");

    let ôNhậpDữLiệuKhiThêmViệc = document.querySelector(".input-TiêuĐề input");
    let nútGửiNộiDungCôngViệc = document.querySelector(
      ".gửi-TiêuĐề > div:first-child"
    );

    ôNhậpDữLiệuKhiThêmViệc.placeholder = "Nhập nội dung tiêu đề...";

    // Chuyển chế độ khi thêm tiêu đề
    ôNhậpDữLiệuKhiThêmViệc.value = "";

    // Nhấn nút gửi khi thêm tiêu đề
    nútGửiNộiDungCôngViệc.addEventListener(
      "click",
      function submitHandler(event) {
        event.stopPropagation();

        if (ôNhậpDữLiệuKhiThêmViệc.value.trim() !== "") {
          if (
            hộpQuảnLýCôngViệc.children[0].children[0].classList.contains("hide")
          ) {
            thôngBáoThựcHiệnChứcNăng("Sửa tiêu để", parentElement, false);
          } else {
            thôngBáoThựcHiệnChứcNăng("Thêm tiêu để", parentElement, false);
          }

          let boxChứaHộpTiêuĐềLớn = parentElement.querySelector(
            ".hộpCôngViệc__thôngTin--hộp1"
          );
          boxChứaHộpTiêuĐềLớn.classList.remove("hide");

          let boxChứaHộpTiêuĐềNhỏ = boxChứaHộpTiêuĐềLớn.children[0];
          boxChứaHộpTiêuĐềNhỏ.classList.remove("hide");

          let nộiDungTiêuĐề = boxChứaHộpTiêuĐềNhỏ.children[2];
          nộiDungTiêuĐề.innerHTML = ôNhậpDữLiệuKhiThêmViệc.value.trim();

          ẩnHiệnTrườngHợpFooter(false, thanhNhậpTiêuĐề);

          // Quản lý thành sửa tiêu đề
          hộpQuảnLýCôngViệc.children[0].children[0].classList.add("hide");
          hộpQuảnLýCôngViệc.children[0].children[1].classList.remove("hide");

          // Sửa lại quyền tương tác nhân sự
          tươngTácNhânSự.classList.remove("khôngClick");
          let chứcNăngQuyềnTươngTácNhânSự = tươngTácNhânSự.children[1];
          chứcNăngQuyềnTươngTácNhânSự.classList.remove("chứcNăngĐangHạnChế");
          chứcNăngQuyềnTươngTácNhânSự.children[1].classList.add("hide");

          // Ẩn hộp cảnh báo thêm tiêu đề
          let hộpCôngViệc = hộpQuảnLýCôngViệc.closest(".hộpCôngViệc");
          let cảnhBáoThêm = hộpCôngViệc.querySelector(
            ".hộpCôngViệc__cảnhBáoKhiThêm"
          );
          if (!cảnhBáoThêm.classList.contains("hide")) {
            cảnhBáoThêm.classList.add("hide");

            // Chỉnh lại khoảng cách khi mất ô box hộp cảnh báo
            let prevHộpCôngViệc = hộpCôngViệc.previousElementSibling;
            if (
              prevHộpCôngViệc &&
              prevHộpCôngViệc.classList.contains("hộpCôngViệc")
            ) {
              prevHộpCôngViệc.style.marginTop = "-45px";
            }
          }

          // Xóa sự kiện cũ
          nútGửiNộiDungCôngViệc.removeEventListener("click", submitHandler);
        } else {
          let cảnhBáo = document.getElementById("thôngBáoCảnhBáo");
          let nộiDungCảnhBáo = document.querySelector(
            ".nộiDungThôngBáoCảnhBáo"
          );
          nộiDungCảnhBáo.innerHTML = "Vui lòng nhập nội dung tiêu đề";
          cảnhBáo.classList.remove("hide");
          setTimeout(() => {
            cảnhBáo.classList.add("hide");
          }, 2800);
        }
      }
    );

    // Nhấn nút quay lại
    clickNútQuayLạiKhôngNhậpNộiDung(
      document.querySelector(".gửi-TiêuĐề > div:last-child")
    );

    // Xóa toàn bộ nội dung trong ô input
    clickIconXóaNộiDungInput(document.querySelector(".input-TiêuĐề > div"));
  });
}

//Chức năng chỉnh sủa nội dung của nhóm quản lý công việc
function ChỉnhSửaNộiDungCôngViệc(
  hộpQuảnLýCôngViệc,
  hộpThôngTin,
  img,
  parentElement
) {
  if (hộpQuảnLýCôngViệc.getAttribute("data-event-added") !== "true") {
    hộpQuảnLýCôngViệc.children[1].addEventListener("click", function (event) {
      event.stopPropagation();

      ẩnHiệnTrườngHợpFooter(
        true,
        document.querySelector(".thanhGửiNộiDungNộiDung")
      );
      hộpThôngTin.classList.add("hide");
      img.setAttribute("src", "images/MởChứcNăng.png");

      let inputNhậpChỉnhSửaNộiDung = document.querySelector(
        ".input-NộiDung input"
      );
      let nútGửiNộiDungCôngViệc = document.querySelector(
        ".gửi-NộiDung > div:first-child "
      );

      inputNhậpChỉnhSửaNộiDung.placeholder = "Nhập nội dung cần chỉnh sửa...";

      inputNhậpChỉnhSửaNộiDung.value = "";

      //Điền nội dung vào ô input khi có nội dung
      let boxChứaNộiDungCóSẵn = parentElement.querySelector(
        ".hộpCôngViệc__thôngTin--hộp3"
      );

      if (boxChứaNộiDungCóSẵn.innerHTML !== "") {
        let nộiDung = boxChứaNộiDungCóSẵn.innerHTML.trim();
        nộiDung = nộiDung.replace(/\s+/g, " ");

        inputNhậpChỉnhSửaNộiDung.value = nộiDung;
        inputNhậpChỉnhSửaNộiDung.parentNode.children[1].classList.remove(
          "hide"
        );
      }

      // Nhấn nút quay lại
      clickNútQuayLạiKhôngNhậpNộiDung(
        document.querySelector(".gửi-NộiDung > div:last-child")
      );

      // Xóa toàn bộ nội dung trong ô input
      clickIconXóaNộiDungInput(document.querySelector(".input-NộiDung > div"));

      nútGửiNộiDungCôngViệc.addEventListener(
        "click",
        function submitHandler(event) {
          event.stopPropagation();

          let check = false;
          if (inputNhậpChỉnhSửaNộiDung.value.trim() !== "") {
            check = true;
          }

          if (check) {
            let boxChứaNộiDung = parentElement.querySelector(
              ".hộpCôngViệc__thôngTin--hộp3"
            );
            boxChứaNộiDung.innerHTML = inputNhậpChỉnhSửaNộiDung.value.trim();

            // Ẩn sau khi sửa nội dung
            ẩnHiệnTrườngHợpFooter(
              false,
              document.querySelector(".thanhGửiNộiDungNộiDung")
            );

            // Hiện nút xem thêm khi nội dung công việc nhiều
            let nútXemThêmNộiDung = parentElement.querySelector(
              ".hộpCôngViệc__thôngTin--hộp4"
            );
            if (kiểmTraĐộDàiNộiDung(boxChứaNộiDung)) {
              nútXemThêmNộiDung.classList.remove("hide");
              let boxChứaHaiHộp45 = nútXemThêmNộiDung.parentNode;
              boxChứaHaiHộp45.classList.remove("ẩnXemThêmThôngTin");
            } else {
              nútXemThêmNộiDung.classList.add("hide");
              let boxChứaHaiHộp45 = nútXemThêmNộiDung.parentNode;
              boxChứaHaiHộp45.classList.add("ẩnXemThêmThôngTin");
            }

            // Hiển thị thông báo khi sửa thành công
            thôngBáoThựcHiệnChứcNăng("Sửa nội dung", parentElement, true);

            // Update chiều cao công việc
            updateChiềuCaoBoxChứcNăngCôngViệc();
          } else {
            let cảnhBáo = document.getElementById("thôngBáoCảnhBáo");
            let nộiDungCảnhBáo = document.querySelector(
              ".nộiDungThôngBáoCảnhBáo"
            );
            nộiDungCảnhBáo.innerHTML = "Vui lòng nhập nội dung công việc";
            cảnhBáo.classList.remove("hide");
            setTimeout(() => {
              cảnhBáo.classList.add("hide");
            }, 2800);
          }

          // xóa sự kiện click cũ
          nútGửiNộiDungCôngViệc.removeEventListener("click", submitHandler);
        }
      );

      hộpQuảnLýCôngViệc.setAttribute("data-event-added", "true");
    });
  }
}

//Chức năng thêm mô tả khi nội dung có ảnh video
function thêmMôTảẢnhVideoAudio(
  hộpQuảnLýCôngViệc,
  hộpThôngTin,
  img,
  parentElement
) {
  if (hộpQuảnLýCôngViệc.getAttribute("data-event-added") !== "true") {
    hộpQuảnLýCôngViệc.children[1].addEventListener("click", function (event) {
      event.stopPropagation();

      ẩnHiệnTrườngHợpFooter(
        true,
        document.querySelector(".thanhGửiNộiDungNộiDung")
      );
      hộpThôngTin.classList.add("hide");
      img.setAttribute("src", "images/MởChứcNăng.png");

      let nútGửiNộiDungCôngViệc = document.querySelector(
        ".gửi-NộiDung > div:first-child"
      );

      let inputNhậpChỉnhSửaNộiDung = document.querySelector(
        ".input-NộiDung input"
      );
      inputNhậpChỉnhSửaNộiDung.value = "";
      inputNhậpChỉnhSửaNộiDung.placeholder = "Nhập nội dung mô tả...";

      //Điền nội dung vào ô input khi có nội dung
      let boxChứaNộiDungCóSẵnImg = parentElement.querySelector(
        ".hộpCôngViệc__thôngTin--img__cóNộiDung"
      ).children[2].children[0];
      let boxChứaNộiDungCóSẵnVideo = parentElement.querySelector(
        ".hộpCôngViệc__thôngTin--video"
      ).children[2].children[0];

      //Nếu chỉnh sủa có nội dung ô img
      if (boxChứaNộiDungCóSẵnImg) {
        if (boxChứaNộiDungCóSẵnImg.innerHTML !== "") {
          let nộiDung = boxChứaNộiDungCóSẵnImg.innerHTML.trim();
          nộiDung = nộiDung.replace(/\s+/g, " ");

          inputNhậpChỉnhSửaNộiDung.value = nộiDung;
          inputNhậpChỉnhSửaNộiDung.parentNode.children[1].classList.remove(
            "hide"
          );
        }
      }

      //Nếu chỉnh sửa có nội dung video
      if (boxChứaNộiDungCóSẵnVideo) {
        if (boxChứaNộiDungCóSẵnVideo.innerHTML !== "") {
          let nộiDung = boxChứaNộiDungCóSẵnVideo.innerHTML.trim();
          nộiDung = nộiDung.replace(/\s+/g, " ");

          inputNhậpChỉnhSửaNộiDung.value = nộiDung;
          inputNhậpChỉnhSửaNộiDung.parentNode.children[1].classList.remove(
            "hide"
          );
        }
      }

      // Nhấn nút quay lại
      clickNútQuayLạiKhôngNhậpNộiDung(
        document.querySelector(".gửi-NộiDung > div:last-child ")
      );

      // Xóa toàn bộ nội dung trong ô input
      clickIconXóaNộiDungInput(document.querySelector(".input-NộiDung > div"));

      nútGửiNộiDungCôngViệc.addEventListener(
        "click",
        function submitHandler(event) {
          event.stopPropagation();

          let check = false;
          if (inputNhậpChỉnhSửaNộiDung.value.trim() !== "") {
            check = true;
          }

          if (check) {
            let boxChứaNộiDungKhôngCóẢnhVideoAudio =
              parentElement.querySelector(".hộpCôngViệc__thôngTin--hộp3");
            boxChứaNộiDungKhôngCóẢnhVideoAudio.classList.add("hide");

            let boxVideo = parentElement.querySelector(
              ".hộpCôngViệc__thôngTin--video"
            );
            if (!boxVideo.classList.contains("hide")) {
              boxVideo.children[2].classList.remove("hide");
              boxVideo.children[2].children[0].innerHTML =
                inputNhậpChỉnhSửaNộiDung.value.trim();
            }

            //Ẩn hiện nút xem thêm của box video
            tắtHệnNútXemThêmCVFileCóNộiDung(boxVideo);

            let boxImg = parentElement.querySelector(
              ".hộpCôngViệc__thôngTin--img__cóNộiDung"
            );
            if (!boxImg.classList.contains("hide")) {
              boxImg.children[2].classList.remove("hide");
              boxImg.children[2].children[0].innerHTML =
                inputNhậpChỉnhSửaNộiDung.value.trim();
            }

            //Ẩn hiện nút xem thêm của box img
            tắtHệnNútXemThêmCVFileCóNộiDung(boxImg);

            //Chỉnh lại khoảng các ô người duyệt
            let nútXemNgườiĐãDuyệt = parentElement.querySelector(
              ".hộpCôngViệc__thôngTin--hộp5"
            );

            // Hiện nút xem thêm khi nội dung công việc nhiều
            function tắtHệnNútXemThêmCVFileCóNộiDung(hộpChứaNộiDung) {
              let boxChứaNộiDungMôTảThêm =
                hộpChứaNộiDung.children[2].children[0];

              if (kiểmTraĐộDàiNộiDung(boxChứaNộiDungMôTảThêm)) {
                boxChứaNộiDungMôTảThêm.nextElementSibling.classList.remove(
                  "hide"
                );
              } else {
                boxChứaNộiDungMôTảThêm.nextElementSibling.classList.add("hide");
              }
            }

            //Chỉnh lại vị trí ô người duyệt khi ô công việc có nội dung và không nội dung
            function vịTríÔNgườiDuyệt(box) {
              if (!box.classList.contains("hide")) {
                let boxChứaNộiDungMôTảThêm = box.children[2].children[0];

                if (kiểmTraĐộDàiNộiDung(boxChứaNộiDungMôTảThêm)) {
                  nútXemNgườiĐãDuyệt.classList.add(
                    "nútHiểnThịNộiDungCóHìnhẢnh"
                  );
                } else if (!kiểmTraĐộDàiNộiDung(boxChứaNộiDungMôTảThêm)) {
                  nútXemNgườiĐãDuyệt.classList.remove(
                    "nútHiểnThịNộiDungCóHìnhẢnh"
                  );
                }
              }
            }

            vịTríÔNgườiDuyệt(boxImg); // ô box có img
            vịTríÔNgườiDuyệt(boxVideo); // ô box có video

            // // Ẩn sau khi sửa nội dung
            ẩnHiệnTrườngHợpFooter(
              false,
              document.querySelector(".thanhGửiNộiDungNộiDung")
            );

            // Hiện nút xem thêm khi nội dung công việc nhiều
            checkSốLượngNộiDungTrongÔChứa();

            // Hiển thị thông báo khi sửa thành công
            thôngBáoThựcHiệnChứcNăng("Thêm mô tả", parentElement, true);

            // Update chiều cao công việc
            updateChiềuCaoBoxChứcNăngCôngViệc();
          } else {
            let cảnhBáo = document.getElementById("thôngBáoCảnhBáo");
            let nộiDungCảnhBáo = document.querySelector(
              ".nộiDungThôngBáoCảnhBáo"
            );
            nộiDungCảnhBáo.innerHTML = "Vui lòng nhập nội dung công việc";
            cảnhBáo.classList.remove("hide");
            setTimeout(() => {
              cảnhBáo.classList.add("hide");
            }, 2800);
          }

          // xóa sự kiện click cũ
          nútGửiNộiDungCôngViệc.removeEventListener("click", submitHandler);
        }
      );

      hộpQuảnLýCôngViệc.setAttribute("data-event-added", "true");
    });
  }
}

//Chức năng gửi tài liệu đính kèm của nhóm quản lý công việc
function GửiTàiLiệuĐínhKèm(hộpQuảnLýCôngViệc, img, hộpThôngTin) {
  hộpQuảnLýCôngViệc.children[2].addEventListener("click", (event) => {
    event.stopPropagation();

    hộpThôngTin.classList.add("hide");
    img.setAttribute("src", "images/MởChứcNăng.png");

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

    let fileDữLiệu = hộpQuảnLýCôngViệc.querySelector('input[type="file"]');

    fileDữLiệu.addEventListener("change", function (event) {
      // Lặp qua từng file trong danh sách
      for (let i = 0; i < event.target.files.length; i++) {
        let tênFile = event.target.files[i].name;
        let đuôiFileĐưaVào = tênFile
          .slice(tênFile.lastIndexOf("."))
          .toLowerCase();

        // Kiểm tra tài liệu
        if (đuôiFileTàiLiệu.includes(đuôiFileĐưaVào)) {
          // Xử lý khi là file tài liệu
        }

        // Kiểm tra file ảnh
        if (đuôiFileẢnh.includes(đuôiFileĐưaVào)) {
          // Xử lý khi là file ảnh
        }

        // Kiểm tra file video
        if (đuôiFileVideo.includes(đuôiFileĐưaVào)) {
          // Xử lý khi là file video
        }
      }
    });
  });
}

//Chức năng xóa công việc của nhóm quản lý công việc
function xóaCôngViệc(hộpQuảnLýCôngViệc, parentElement) {
  hộpQuảnLýCôngViệc.children[3].addEventListener("click", () => {
    let hộpCôngViệc = hộpQuảnLýCôngViệc.closest(".hộpCôngViệc");

    //Xóa khoảng cách margin top 45px
    let hộpCôngViệcTrướcĐó = hộpCôngViệc.previousElementSibling;
    if (hộpCôngViệcTrướcĐó) {
      hộpCôngViệcTrướcĐó.style.marginTop = "0px";
    }
    hộpCôngViệc.remove();

    //Hiển thị thông báo khi xóa thành công
    thôngBáoThựcHiệnChứcNăng("Xóa thành công", parentElement, true);
  });
}

//------------------------------------------ Nhóm tương tác nhân sự ---------------------------------------------
//Chức năng gửi ai duyệt của nhóm tương tác nhân sự
function xửLýMenuChọnNgườiDuyệt(menuConGửiAiDuyệt, hộpTươngTácNhânSự) {
  let select = hộpTươngTácNhânSự.querySelectorAll(
    ".hộpChọnTùyChỉnhCôngViệc__tươngTácNhânSự--gửiAiDuyệt > div"
  );

  select.forEach((nútGửiAiDuyệt) => {
    if (nútGửiAiDuyệt.getAttribute("data-event-added") !== "true") {
      nútGửiAiDuyệt.addEventListener("click", (event) => {
        event.stopPropagation();

        let hộpCôngViệc = nútGửiAiDuyệt.closest(".hộpCôngViệc");
        let nútXemNgườiĐãDuyệt = hộpCôngViệc.querySelector(
          ".hộpCôngViệc__thôngTin--hộp5"
        );
        let hộpChứaNútNgườiDuyệt = hộpCôngViệc.querySelector(
          ".hộpCôngViệc__thôngTin--hộp45"
        );
        let img = nútGửiAiDuyệt.querySelector("img");
        let ngườiDuyệt =
          nútGửiAiDuyệt.querySelector("div:nth-child(2)").innerText;
        let thôngTinNgườiDuyệt = hộpCôngViệc.querySelectorAll(
          ".boxThôngTinNgườiCầnDuyệt > div"
        );

        //Chỉnh lại vị trí nếu hiện ô ảnh có nội dung
        let hộpNộiDungImg = hộpCôngViệc.querySelector(
          ".hộpCôngViệc__thôngTin--img__cóNộiDung"
        );
        let hộpNộiDungVideo = hộpCôngViệc.querySelector(
          ".hộpCôngViệc__thôngTin--video"
        );

        //Hàm xử lý hiện ô người duyệt
        function vịTríÔNgườiDuyệt(box) {
          if (!box.classList.contains("hide")) {
            let boxChứaNộiDungMôTảThêm = box.children[2].children[0];

            if (kiểmTraĐộDàiNộiDung(boxChứaNộiDungMôTảThêm)) {
              nútXemNgườiĐãDuyệt.classList.add("nútHiểnThịNộiDungCóHìnhẢnh");
            } else if (!kiểmTraĐộDàiNộiDung(boxChứaNộiDungMôTảThêm)) {
              nútXemNgườiĐãDuyệt.classList.remove("nútHiểnThịNộiDungCóHìnhẢnh");
            }

            if (
              box.children[2].classList.contains("hide") &&
              nútXemNgườiĐãDuyệt.classList.contains("hide")
            ) {
              hộpChứaNútNgườiDuyệt.classList.add("ẩnXemThêmThôngTin");
            }
          }
        }

        vịTríÔNgườiDuyệt(hộpNộiDungImg); // ô box có img
        vịTríÔNgườiDuyệt(hộpNộiDungVideo); // ô box có video

        if (img.getAttribute("src") === "images/KhôngChọnMenu.png") {
          img.src = "images/ChọnMenu.png";
          nútXemNgườiĐãDuyệt.classList.remove("hide");
          thôngTinNgườiDuyệt.forEach((thôngTin) => {
            if (
              thôngTin.querySelector("div:nth-child(1)").innerText ===
              ngườiDuyệt
            ) {
              thôngTin.classList.remove("hide");
            }
          });
        } else {
          img.src = "images/KhôngChọnMenu.png";
          thôngTinNgườiDuyệt.forEach((thôngTin) => {
            if (
              thôngTin.querySelector("div:nth-child(1)").innerText ===
              ngườiDuyệt
            ) {
              thôngTin.classList.add("hide");
            }
          });
        }

        // Tính lại số lượng người cần duyệt
        let sốLượngNgườiDuyệt = 0;
        select.forEach((nút) => {
          let img = nút.querySelector("img");
          if (img.getAttribute("src") === "images/ChọnMenu.png") {
            sốLượngNgườiDuyệt++;
          }
        });

        //Điền số lượng người cần duyệt
        nútXemNgườiĐãDuyệt.children[0].children[0].querySelector(
          "span"
        ).innerHTML = sốLượngNgườiDuyệt;

        //Sửa lại nội dung gửi ai duyệt thành chờ duyệt
        if (sốLượngNgườiDuyệt > 0) {
          menuConGửiAiDuyệt.parentNode.children[0].children[0].innerHTML =
            "Chờ duyệt";
        } else {
          menuConGửiAiDuyệt.parentNode.children[0].children[0].innerHTML =
            "Gửi ai duyệt";
        }

        // Ẩn nút nếu không có ai chọn duyệt
        let tấtCảKhôngChọnMenu = true;
        select.forEach((nút) => {
          let img = nút.querySelector("img");
          if (img.getAttribute("src") !== "images/KhôngChọnMenu.png") {
            tấtCảKhôngChọnMenu = false;
          }
        });

        if (tấtCảKhôngChọnMenu) {
          nútXemNgườiĐãDuyệt.classList.add("hide");
        }
      });

      nútGửiAiDuyệt.setAttribute("data-event-added", "true"); // Đánh dấu đã thêm sự kiện
    }
  });
}

//Chức năng giao việc cho ai
function chứcNăngGiaoViệcChoAi(hộpTươngTácNhânSự, parentElement) {
  let tấtCảCácLựaChọn = hộpTươngTácNhânSự.querySelectorAll(
    ".hộpChọnTùyChỉnhCôngViệc__tươngTácNhânSự--giaoViệcChoAi > div"
  );
  let select = hộpTươngTácNhânSự.querySelectorAll(
    ".hộpChọnTùyChỉnhCôngViệc__tươngTácNhânSự--giaoViệcChoAi > div:not(div:last-child)"
  );
  let selectAll = hộpTươngTácNhânSự.querySelector(
    ".hộpChọnTùyChỉnhCôngViệc__tươngTácNhânSự--giaoViệcChoAi--all"
  );
  let nútXemTiếnTrìnhBênNgoàiBox = parentElement.querySelector(
    ".hộpCôngViệc__cácChứcNăng__nútTiếnTrình"
  );

  // Hàm kiểm tra xem có phần tử nào được chọn không
  function kiểmTraPhầnTửĐượcChọn() {
    let cóPhầnTửĐượcChọn = false;
    tấtCảCácLựaChọn.forEach((element) => {
      let img = element.querySelector("img");
      if (img.getAttribute("src") === "images/ChọnMenu.png") {
        cóPhầnTửĐượcChọn = true;
      }
    });
    if (cóPhầnTửĐượcChọn) {
      nútXemTiếnTrìnhBênNgoàiBox.classList.remove("hide");
    } else {
      nútXemTiếnTrìnhBênNgoàiBox.classList.add("hide");
    }
  }

  //Chọn nút  tất cả
  if (selectAll.getAttribute("data-event-added") !== "true") {
    selectAll.addEventListener("click", () => {
      let imgSelectAll = selectAll.querySelector("img");

      if (imgSelectAll.getAttribute("src") === "images/KhôngChọnMenu.png") {
        select.forEach((element) => {
          let img = element.querySelector("img");
          img.src = "images/KhôngChọnMenu.png";
        });
        imgSelectAll.src = "images/ChọnMenu.png";
      } else {
        select.forEach((element) => {
          let img = element.querySelector("img");
          img.src = "images/KhôngChọnMenu.png";
        });
        imgSelectAll.src = "images/KhôngChọnMenu.png";
      }

      // Kiểm tra sau khi chọn tất cả/hủy chọn tất cả
      kiểmTraPhầnTửĐượcChọn();
    });

    selectAll.setAttribute("data-event-added", "true");
  }

  //Chọn các nút còn lại
  select.forEach((element) => {
    if (element.getAttribute("data-event-added") !== "true") {
      element.addEventListener("click", (event) => {
        event.stopPropagation();
        let imgSelectAll = selectAll.querySelector("img");
        let img = element.querySelector("img");

        if (img.getAttribute("src") === "images/KhôngChọnMenu.png") {
          img.src = "images/ChọnMenu.png";
          imgSelectAll.src = "images/KhôngChọnMenu.png";
        } else {
          img.src = "images/KhôngChọnMenu.png";
        }

        // Kiểm tra sau khi chọn/hủy chọn
        kiểmTraPhầnTửĐượcChọn();
      });
      element.setAttribute("data-event-added", "true");
    }
  });
}

//Chức năng gửi ai xem
function chứcNăngGửiAiXem(hộpTươngTácNhânSự) {
  let select = hộpTươngTácNhânSự.querySelectorAll(
    ".hộpChọnTùyChỉnhCôngViệc__tươngTácNhânSự--gửiAiXem > div"
  );
  let selectAll = hộpTươngTácNhânSự.querySelector(
    ".hộpChọnTùyChỉnhCôngViệc__tươngTácNhânSự--gửiAiXem--all"
  );

  //Khi chọn nút all
  if (selectAll.getAttribute("data-event-added") !== "true") {
    selectAll.addEventListener("click", () => {
      let imgSelectAll = selectAll.querySelector("img");

      if (imgSelectAll.getAttribute("src") === "images/KhôngChọnMenu.png") {
        select.forEach((element) => {
          let img = element.querySelector("img");
          img.src = "images/KhôngChọnMenu.png";
        });
        imgSelectAll.src = "images/ChọnMenu.png";
      } else {
        select.forEach((element) => {
          let img = element.querySelector("img");
          img.src = "images/KhôngChọnMenu.png";
        });
        imgSelectAll.src = "images/KhôngChọnMenu.png";
      }
    });

    selectAll.setAttribute("data-event-added", "true");
  }

  //Chọn các nút còn lại
  select.forEach((element) => {
    if (element.getAttribute("data-event-added") !== "true") {
      element.addEventListener("click", (event) => {
        event.stopPropagation();
        let imgSelectAll = selectAll.querySelector("img");
        let img = element.querySelector("img");

        if (img.getAttribute("src") === "images/KhôngChọnMenu.png") {
          img.src = "images/ChọnMenu.png";
          imgSelectAll.src = "images/KhôngChọnMenu.png";
        } else {
          img.src = "images/KhôngChọnMenu.png";
        }
      });
      element.setAttribute("data-event-added", "true");
    }
  });
}

//Chức năng gửi ai giám sát
function chứcNăngGửiAiGiámSát(hộpTươngTácNhânSự) {
  let select = hộpTươngTácNhânSự.querySelectorAll(
    ".hộpChọnTùyChỉnhCôngViệc__tươngTácNhânSự--gửiAiGiámSát > div"
  );

  //Chọn menu con
  select.forEach((element) => {
    if (element.getAttribute("data-event-added") !== "true") {
      element.addEventListener("click", (event) => {
        event.stopPropagation(); // Ngăn chặn sự kiện lan ra ngoài

        let img = element.querySelector("img");
        if (img.getAttribute("src") === "images/KhôngChọnMenu.png") {
          img.src = "images/ChọnMenu.png";
        } else {
          img.src = "images/KhôngChọnMenu.png";
        }
      });

      element.setAttribute("data-event-added", "true"); // Đánh dấu đã thêm sự kiện
    }
  });
}

//------------------------------------------ Nhóm hỗ trợ theo dõi -----------------------------------------------
//Chức năng đặt ưu tiên của nhóm hỗ trợ theo dõi
function hàmĐặtHủyƯuTiên(hộpHỗTrợTheoDõi, parentElement) {
  let nútĐặtƯuTiên = hộpHỗTrợTheoDõi.querySelector(
    ".hộpChọnTùyChỉnhCôngViệc__hỗTrợTheoDõi--box1"
  );
  if (nútĐặtƯuTiên.getAttribute("data-event-added") !== "true") {
    nútĐặtƯuTiên.addEventListener("click", (event) => {
      event.stopPropagation();

      // Biến ngôi sao ưu tiên
      let ngôiSao = nútĐặtƯuTiên
        .closest(".hộpCôngViệc")
        .querySelector(".hộpCôngViệc__thôngTin--hộp1__tiêuĐề").children[1];

      // Đặt bỏ ưu tiên
      if (!nútĐặtƯuTiên.children[0].classList.contains("hide")) {
        nútĐặtƯuTiên.children[0].classList.add("hide");
        nútĐặtƯuTiên.children[1].classList.remove("hide");
        ngôiSao.classList.remove("hide");
        if (
          nútĐặtƯuTiên
            .closest(".hộpCôngViệc")
            .querySelector(".hộpCôngViệc__thôngTin--hộp1")
            .classList.contains("hide")
        ) {
          nútĐặtƯuTiên
            .closest(".hộpCôngViệc")
            .querySelector(".hộpCôngViệc__thôngTin--hộp1")
            .classList.remove("hide");
        }
        thôngBáoThựcHiệnChứcNăng("Đặt ưu tiên", parentElement, true);
      } else {
        nútĐặtƯuTiên.children[0].classList.remove("hide");
        nútĐặtƯuTiên.children[1].classList.add("hide");
        ngôiSao.classList.add("hide");
        if (
          !nútĐặtƯuTiên
            .closest(".hộpCôngViệc")
            .querySelector(".hộpCôngViệc__thôngTin--hộp1")
            .classList.contains("hide") &&
          nútĐặtƯuTiên
            .closest(".hộpCôngViệc")
            .querySelector(".hộpCôngViệc__thôngTin--hộp1__tiêuĐề")
            .children[1].children[0].classList.contains("hide") &&
          nútĐặtƯuTiên
            .closest(".hộpCôngViệc")
            .querySelector(".hộpCôngViệc__thôngTin--hộp1__tiêuĐề").children[1]
            .children[2] == ""
        ) {
          nútĐặtƯuTiên
            .closest(".hộpCôngViệc")
            .querySelector(".hộpCôngViệc__thôngTin--hộp1")
            .classList.add("hide");
        }
        thôngBáoThựcHiệnChứcNăng("Hủy ưu tiên", parentElement, true);
      }
    });

    nútĐặtƯuTiên.setAttribute("data-event-added", "true"); // Đánh dấu đã thêm sự kiện cho nút thêm chủ đề
  }
}

//Chức năng chủ đề công việc
function chứcNăngChủĐềCôngViệc(nútConChủĐề, menuConChủĐề, hộpThôngTin, img) {
  if (
    nútConChủĐề &&
    menuConChủĐề &&
    nútConChủĐề.getAttribute("data-event-added") !== "true"
  ) {
    nútConChủĐề.addEventListener("click", (event) => {
      event.stopPropagation();
      menuConChủĐề.classList.toggle("hide");
      hộpThôngTin.classList.toggle("làmMờChứcNăngChính");

      var chiềuCaoMànHình = window.innerHeight;
      let bottomOfHộpChủĐề = menuConChủĐề.getBoundingClientRect().bottom;
      let khoảngCáchĐếnChânTrangÔThêmChủĐề = chiềuCaoMànHình - bottomOfHộpChủĐề;

      if (khoảngCáchĐếnChânTrangÔThêmChủĐề <= 0) {
        menuConChủĐề.style.top = -215 + "px";
      } else {
        menuConChủĐề.style.top = 0 + "px";
      }

      // Đảm bảo rằng sự kiện click cho menuConChủĐề chỉ được thêm một lần

      let nútThêmChủĐề = menuConChủĐề.querySelector(
        ".hộpChọnTùyChỉnhCôngViệc__hỗTrợTheoDõi--chủĐềCôngViệc__thêmCôngViệc"
      );

      // Thêm sự kiện cho nút thêm chủ đề chỉ một lần
      if (nútThêmChủĐề.getAttribute("data-event-added") !== "true") {
        nútThêmChủĐề.addEventListener("click", () => {
          //tắt ô chức năng
          hộpThôngTin.classList.add("hide");
          img.setAttribute("src", "images/MởChứcNăng.png");

          let thanhNhậpChủĐề = document.querySelector(".thanhGửiNộiDungChủĐề");
          ẩnHiệnTrườngHợpFooter(true, thanhNhậpChủĐề);

          clickNútQuayLạiKhôngNhậpNộiDung(
            document.querySelector(".gửi-chủĐề> div:last-child")
          );

          // Xóa toàn bộ nội dung trong ô input
          clickIconXóaNộiDungInput(
            document.querySelector(".input-chủĐề > div")
          );
        });

        nútThêmChủĐề.setAttribute("data-event-added", "true");
      }
    });

    nútConChủĐề.setAttribute("data-event-added", "true");
  }
}

//Chức năng theo dõi

//------------------------------------------ Nhóm phản hồi công việc ------------------------------------------

//Chức năng duyệt đề xuất
function chứcNăngDuyệtĐềXuất(
  hộpPhảnHồiCôngViệc,
  hộpThôngTin,
  img,
  parentElement
) {
  let nútConDuyệtĐềXuất = hộpPhảnHồiCôngViệc.children[0];
  if (nútConDuyệtĐềXuất.getAttribute("data-event-added") !== "true") {
    nútConDuyệtĐềXuất.addEventListener("click", () => {
      //Ẩn box công việc chính
      hộpThôngTin.classList.add("hide");
      img.setAttribute("src", "images/MởChứcNăng.png");

      //Thông báo duyệt đề xuất thành công
      thôngBáoThựcHiệnChứcNăng("Duyệt đề xuất", parentElement, false);
    });
    nútConDuyệtĐềXuất.setAttribute("data-event-added", "true");
  }
}

//Chức năng báo cáo tiến độ
function chứcNắngBáoCáoTiếnĐộ(parentElement, hộpPhảnHồiCôngViệc) {
  //Xử lý khoảng cách chiều cao
  var chiềuCaoMànHình = window.innerHeight;
  let bottomOfHộpChủĐề = hộpPhảnHồiCôngViệc.getBoundingClientRect().bottom;
  let khoảngCáchĐếnChânTrangÔThêmChủĐề = chiềuCaoMànHình - bottomOfHộpChủĐề;
  if (khoảngCáchĐếnChânTrangÔThêmChủĐề <= 10) {
    hộpPhảnHồiCôngViệc.style.top = -135 + "px";
  } else {
    hộpPhảnHồiCôngViệc.style.top = 0 + "px";
  }

  //Chức năng báo cáo tiến độ
  let nútConBáoCáoTiếnĐộ = hộpPhảnHồiCôngViệc.children[1];

  if (
    nútConBáoCáoTiếnĐộ &&
    nútConBáoCáoTiếnĐộ.getAttribute("data-event-added") !== "true"
  ) {
    nútConBáoCáoTiếnĐộ.addEventListener("click", () => {
      //Khi đã nhấn đông ý nhận việc thì hiện tiến trình lên
      let mànHìnhMờTiếnTrình = parentElement.querySelector(
        "#mànHìnhMờTiếnTrình"
      );
      let hộpTiếnTrình = parentElement.querySelector("#tiếnTrìnhXửLý");
      let tiêuĐềTiếnTrình = parentElement.querySelector(
        ".tiếnTrìnhXửLý__tiêuĐề"
      );
      let tinNhắnTiếnTrình = parentElement.querySelector(
        ".tiếnTrìnhXửLý__tinNhắn"
      );
      let chứcNăngTiếnTrình = parentElement.querySelector(
        ".tiếnTrìnhXửLý__côngCụ"
      );
      let hộpCôngCụĐồngÝ = parentElement.querySelector(".xácNhậnYêuCầuĐồngÝ");

      mànHìnhMờTiếnTrình.classList.remove("hide");
      hộpTiếnTrình.classList.remove("hide");
      tiêuĐềTiếnTrình.classList.remove("ẩnTiếnTrình");
      tinNhắnTiếnTrình.classList.remove("ẩnTiếnTrình");
      chứcNăngTiếnTrình.classList.remove("ẩnTiếnTrình");
      hộpCôngCụĐồngÝ.classList.remove("ẩnTiếnTrình");
      mànHìnhMờTiếnTrình.classList.remove("ẩnMànHìnhMờTiếnTrình");

      //Biến công cụ nhập lên
      let chứcNăngTiếnTrìnhNhậpKhiĐồngÝ = parentElement.querySelector(
        ".tiếnTrìnhXửLý__côngCụ.xácNhậnYêuCầuĐồngÝ"
      );
      let ôInputGửiYêuCầu = chứcNăngTiếnTrìnhNhậpKhiĐồngÝ.querySelector(
        ".tiếnTrìnhXửLý__côngCụ--ôNhập > input"
      );
      let hộpChứaInput = chứcNăngTiếnTrìnhNhậpKhiĐồngÝ.querySelector(
        ".tiếnTrìnhXửLý__côngCụ--ôNhập"
      );

      //Hiện công cụ nhập lên
      chứcNăngTiếnTrìnhNhậpKhiĐồngÝ.classList.remove("hide");
      ôInputGửiYêuCầu.placeholder = "Nhập nội dung báo cáo tiến độ...";

      let ôNhập = ôInputGửiYêuCầu;
      let icon = ôInputGửiYêuCầu.nextElementSibling;

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
          hộpChứaInput.classList.add("ẩnHiệnGửiKèmFileTiếnTrình");
        });
      }

      //Xử lý ẩn hiện nút gửi file đính kèm
      ôInputGửiYêuCầu.addEventListener("input", () => {
        if (ôInputGửiYêuCầu.value.trim() !== "") {
          hộpChứaInput.classList.remove("ẩnHiệnGửiKèmFileTiếnTrình");
        } else {
          hộpChứaInput.classList.add("ẩnHiệnGửiKèmFileTiếnTrình");
        }
      });

      //Update khoảng cách khi có thanh công cụ hiện lên của box chat tiến trình
      let currentHeight = window.innerHeight;
      var element = parentElement.querySelector(".tiếnTrìnhXửLý__tinNhắn");
      let dsTiếnTrình = parentElement.querySelector(
        ".tiếnTrìnhXửLý__tinNhắn__danhSách"
      );
      let chiềuCaoBoxDsTinNhắn = dsTiếnTrình.offsetHeight;

      tiêuĐềTiếnTrình.style.top =
        currentHeight - chiềuCaoBoxDsTinNhắn - 45 - 65 + "px";
      element.style.top =
        currentHeight - chiềuCaoBoxDsTinNhắn + 35 - 45 - 65 + "px";
    });
    nútConBáoCáoTiếnĐộ.setAttribute("data-event-added", "true");
  }
}

//Chức năng yêu cầu gia hạn
function chứcNăngYêuCầuGiaHạn(
  hộpPhảnHồiCôngViệc,
  hộpThôngTin,
  img,
  parentElement
) {
  let nútConYêuCầuGiaHạn = hộpPhảnHồiCôngViệc.children[2];
  if (nútConYêuCầuGiaHạn.getAttribute("data-event-added") !== "true") {
    nútConYêuCầuGiaHạn.addEventListener("click", () => {
      //Ẩn box công việc chính
      hộpThôngTin.classList.add("hide");
      img.setAttribute("src", "images/MởChứcNăng.png");

      //Thông báo duyệt đề xuất thành công
      thôngBáoThựcHiệnChứcNăng("Yêu cầu gia hạn", parentElement, false);
    });
    nútConYêuCầuGiaHạn.setAttribute("data-event-added", "true");
  }
}

//Chức năng phản hồi công việc
function chứcNắngPhảnHồiCôngViệc(parentElement, hộpPhảnHồiCôngViệc) {
  //Xử lý khoảng cách chiều cao
  var chiềuCaoMànHình = window.innerHeight;
  let bottomOfHộpChủĐề = hộpPhảnHồiCôngViệc.getBoundingClientRect().bottom;
  let khoảngCáchĐếnChânTrangÔThêmChủĐề = chiềuCaoMànHình - bottomOfHộpChủĐề;
  if (khoảngCáchĐếnChânTrangÔThêmChủĐề <= 10) {
    hộpPhảnHồiCôngViệc.style.top = -135 + "px";
  } else {
    hộpPhảnHồiCôngViệc.style.top = 0 + "px";
  }

  //Chức năng báo cáo tiến độ
  let nútConPhảnHồiCôngViệc = hộpPhảnHồiCôngViệc.children[3];

  if (
    nútConPhảnHồiCôngViệc &&
    nútConPhảnHồiCôngViệc.getAttribute("data-event-added") !== "true"
  ) {
    nútConPhảnHồiCôngViệc.addEventListener("click", () => {
      //Xử lý nút khi nó bị hạn chế
      if (nútConPhảnHồiCôngViệc.classList.contains("đangBịHạnChế")) {
        cảnhBáoKhôngCóSpan("Vui lòng đồng ý xác nhận công việc");
      } else {
        //Khi đã nhấn đông ý nhận việc thì hiện tiến trình lên
        let mànHìnhMờTiếnTrình = parentElement.querySelector(
          "#mànHìnhMờTiếnTrình"
        );
        let hộpTiếnTrình = parentElement.querySelector("#tiếnTrìnhXửLý");
        let tiêuĐềTiếnTrình = parentElement.querySelector(
          ".tiếnTrìnhXửLý__tiêuĐề"
        );
        let tinNhắnTiếnTrình = parentElement.querySelector(
          ".tiếnTrìnhXửLý__tinNhắn"
        );
        let chứcNăngTiếnTrình = parentElement.querySelector(
          ".tiếnTrìnhXửLý__côngCụ"
        );
        let hộpCôngCụĐồngÝ = parentElement.querySelector(".xácNhậnYêuCầuĐồngÝ");

        mànHìnhMờTiếnTrình.classList.remove("hide");
        hộpTiếnTrình.classList.remove("hide");
        tiêuĐềTiếnTrình.classList.remove("ẩnTiếnTrình");
        tinNhắnTiếnTrình.classList.remove("ẩnTiếnTrình");
        chứcNăngTiếnTrình.classList.remove("ẩnTiếnTrình");
        hộpCôngCụĐồngÝ.classList.remove("ẩnTiếnTrình");
        mànHìnhMờTiếnTrình.classList.remove("ẩnMànHìnhMờTiếnTrình");

        //Biến công cụ nhập lên
        let chứcNăngTiếnTrìnhNhậpKhiĐồngÝ = parentElement.querySelector(
          ".tiếnTrìnhXửLý__côngCụ.xácNhậnYêuCầuĐồngÝ"
        );
        let ôInputGửiYêuCầu = chứcNăngTiếnTrìnhNhậpKhiĐồngÝ.querySelector(
          ".tiếnTrìnhXửLý__côngCụ--ôNhập > input"
        );
        let hộpChứaInput = chứcNăngTiếnTrìnhNhậpKhiĐồngÝ.querySelector(
          ".tiếnTrìnhXửLý__côngCụ--ôNhập"
        );

        //Hiện công cụ nhập lên
        chứcNăngTiếnTrìnhNhậpKhiĐồngÝ.classList.remove("hide");
        ôInputGửiYêuCầu.placeholder = "Nhập nội dung phản hồi...";

        let ôNhập = ôInputGửiYêuCầu;
        let icon = ôInputGửiYêuCầu.nextElementSibling;

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
            hộpChứaInput.classList.add("ẩnHiệnGửiKèmFileTiếnTrình");
          });
        }

        //Xử lý ẩn hiện nút gửi file đính kèm
        ôInputGửiYêuCầu.addEventListener("input", () => {
          if (ôInputGửiYêuCầu.value.trim() !== "") {
            hộpChứaInput.classList.remove("ẩnHiệnGửiKèmFileTiếnTrình");
          } else {
            hộpChứaInput.classList.add("ẩnHiệnGửiKèmFileTiếnTrình");
          }
        });

        //Update khoảng cách khi có thanh công cụ hiện lên của box chat tiến trình
        let currentHeight = window.innerHeight;
        var element = parentElement.querySelector(".tiếnTrìnhXửLý__tinNhắn");
        let dsTiếnTrình = parentElement.querySelector(
          ".tiếnTrìnhXửLý__tinNhắn__danhSách"
        );
        let chiềuCaoBoxDsTinNhắn = dsTiếnTrình.offsetHeight;

        tiêuĐềTiếnTrình.style.top =
          currentHeight - chiềuCaoBoxDsTinNhắn - 45 - 65 + "px";
        element.style.top =
          currentHeight - chiềuCaoBoxDsTinNhắn + 35 - 45 - 65 + "px";
      }
    });
    nútConPhảnHồiCôngViệc.setAttribute("data-event-added", "true");
  }
}

//Chức năng hoàn thành công việc
function chứcNăngHoànThànhCôngViệc(
  hộpPhảnHồiCôngViệc,
  hộpThôngTin,
  img,
  parentElement
) {
  let nútConHoànThànhCôngViệc = hộpPhảnHồiCôngViệc.children[4];
  if (nútConHoànThànhCôngViệc.getAttribute("data-event-added") !== "true") {
    nútConHoànThànhCôngViệc.addEventListener("click", () => {
      //Ẩn box công việc chính
      hộpThôngTin.classList.add("hide");
      img.setAttribute("src", "images/MởChứcNăng.png");

      //Chuyển sang trạng thái hoàn thành công việc
      trạngTháiCôngViệc(
        document.querySelector(".hộpCôngViệc__trạngThái"),
        "trạngThái-đãLàmXong",
        "images/ThanhTrạngThái-XácNhậnCôngViệc.png",
        "Đã làm xong"
      );

      //Thông báo duyệt đề xuất thành công
      thôngBáoThựcHiệnChứcNăng("Hoàn thành công việc", parentElement, false);
    });
    nútConHoànThànhCôngViệc.setAttribute("data-event-added", "true");
  }
}

//------------------------------------------ Nhóm khen thưởng --------------------------------------------------
// Chức năng quản lý bảng điểm khen thưởng
function chứcNăngQuảnLýBảngĐiểmThànhTích(hộpKhenThưởng) {
  let nútQuảnLýBảngĐiểm = hộpKhenThưởng.children[0];
  if (nútQuảnLýBảngĐiểm.getAttribute("data-event-added") !== "true") {
    nútQuảnLýBảngĐiểm.addEventListener("click", () => {
      //Thông báo chức năng chưa cập nhật
      let cảnhBáo = document.getElementById("thôngBáoCảnhBáo");
      let nộiDungCảnhBáo = document.querySelector(".nộiDungThôngBáoCảnhBáo");
      nộiDungCảnhBáo.innerHTML = "Chức năng đang được cập nhật";
      cảnhBáo.classList.remove("hide");
      setTimeout(() => {
        cảnhBáo.classList.add("hide");
      }, 2800);
    });
    nútQuảnLýBảngĐiểm.setAttribute("data-event-added", "true");
  }
}

//------------------------------------------ Các chức năng thêm ------------------------------------------------

//Xử lý khoảng cách ô hiện chức năng công việc
function updateChiềuCaoBoxChứcNăngCôngViệc() {
  const nútChứcNăngCôngViệc = document.querySelectorAll(
    ".hộpCôngViệc__nútChứcNăngChính"
  );
  nútChứcNăngCôngViệc.forEach((nút) => {
    nút.addEventListener("click", (event) => {
      event.stopPropagation();
      let hộpChứaChứcNăngCôngViệc = nút.nextElementSibling.querySelector(
        ".hộpChọnTùyChỉnhCôngViệc"
      );

      let chiềuCaoBoxThôngTin = nút
        .closest(".hộpCôngViệc")
        .querySelector(".hộpCôngViệc__thôngTin").offsetHeight;
      let giáTrịMargin = chiềuCaoBoxThôngTin + 20;
      hộpChứaChứcNăngCôngViệc.style.marginTop = giáTrịMargin + "px";

      let bottomOfChứcNăng =
        hộpChứaChứcNăngCôngViệc.getBoundingClientRect().bottom;
      var chiềuCaoMànHình = window.innerHeight;
      var khoảngCáchTừÔĐếnChânTrang = chiềuCaoMànHình - bottomOfChứcNăng;

      // Nếu hộp chứa chức năng bị lấn lên bởi phần dưới chân
      if (khoảngCáchTừÔĐếnChânTrang <= 0) {
        hộpChứaChứcNăngCôngViệc.style.marginTop = giáTrịMargin - 275 + "px";
      } else {
        hộpChứaChứcNăngCôngViệc.style.marginTop = giáTrịMargin + "px";
      }
    });
  });
}

//Gọi hàm update chiều cao
updateChiềuCaoBoxChứcNăngCôngViệc();

// Click vào icon x xóa dưới bên cạnh ô input nhập nội dung
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

//Gọi hàm ngày tim kiếm
clickIconXóaNộiDungInput(document.querySelector(".chânTrang__tìmKiếm > div"));

// Click vào icon quay lại cạnh ô input nhập nội dung
function clickNútQuayLạiKhôngNhậpNộiDung(nút) {
  nút.addEventListener("click", () => {
    //Xóa dữ liệu trong ô nhập
    let ôNhâp = nút
      .closest(".chânTrang__boxThêmViệc")
      .querySelector(".chânTrang__boxThêmViệc--input input");
    ôNhâp.value = "";

    //Tắt ô nhập tiêu đề
    ẩnHiệnTrườngHợpFooter(false, nút.closest(".thanhGửiNộiDung"));
  });
}

//Hàm thông báo khi thực hiện chức năng
let timeoutId;
function thôngBáoThựcHiệnChứcNăng(nộiDungChứcNăng, parentElement, checkSpan) {
  //Hiển thị thông báo khi sửa thành công
  let cảnhBáo = document.getElementById("thôngBáoCảnhBáo");
  let nộiDungThôngBáo = document.querySelector(".nộiDungThôngBáoCảnhBáo");
  let nộiDungTiêuĐề = parentElement.querySelector(
    ".hộpCôngViệc__thôngTin--hộp1__tiêuĐề > div:nth-child(3)"
  ).innerHTML;

  if (checkSpan) {
    nộiDungThôngBáo.innerHTML =
      nộiDungChứcNăng + ` <span>${nộiDungTiêuĐề}</span> thành công`;
  } else {
    nộiDungThôngBáo.innerHTML = nộiDungChứcNăng + ` thành công`;
  }

  // Xóa bộ đếm thời gian trước đó nếu có
  if (timeoutId) {
    clearTimeout(timeoutId);
  }

  cảnhBáo.classList.remove("hide");

  // Đặt bộ đếm thời gian mới
  timeoutId = setTimeout(() => {
    cảnhBáo.classList.add("hide");
    timeoutId = null; // Đặt lại biến sau khi hoàn thành
  }, 2800);
}

//Kiểm tra trạng thái của nút nội dung
function trạngTháiNútSửaNộiDung(parentElement) {
  let hộpCóNộiDungKhôngFile = parentElement.querySelector(
    ".hộpCôngViệc__thôngTin--hộp3"
  );
  let hộpCóẢnh = parentElement.querySelector(
    ".hộpCôngViệc__thôngTin--img__cóNộiDung"
  );
  let hộpCóVideo = parentElement.querySelector(".hộpCôngViệc__thôngTin--video");
  let nộiDungChứcNăng = parentElement.querySelector(
    ".hộpChọnTùyChỉnhCôngViệc__quảnLýCôngViệc > div:nth-child(2)"
  );

  // Trạng thái chỉnh sửa nội dung
  if (
    !hộpCóNộiDungKhôngFile.classList.contains("hide") &&
    hộpCóVideo.classList.contains("hide") &&
    hộpCóẢnh.classList.contains("hide")
  ) {
    nộiDungChứcNăng.innerHTML = "Chỉnh sửa nội dung";
  }

  //Trạng thái có ảnh
  if (
    hộpCóNộiDungKhôngFile.classList.contains("hide") &&
    !hộpCóẢnh.classList.contains("hide")
  ) {
    if (hộpCóẢnh.children[2].classList.contains("hide")) {
      nộiDungChứcNăng.innerHTML = "Thêm mô tả";
    } else {
      nộiDungChứcNăng.innerHTML = "Chỉnh sửa mô tả";
    }
  }

  //Trạng thái có video
  if (
    hộpCóNộiDungKhôngFile.classList.contains("hide") &&
    !hộpCóVideo.classList.contains("hide")
  ) {
    if (hộpCóVideo.children[2].classList.contains("hide")) {
      nộiDungChứcNăng.innerHTML = "Thêm mô tả";
    } else {
      nộiDungChứcNăng.innerHTML = "Chỉnh sửa mô tả";
    }
  }
}

//xử lý khoảng cách tiêu đề với box có ảnh và video
function updateKhoảngCáchTiêuĐề() {
  let hộpCôngViệc = document.querySelectorAll(".hộpCôngViệc");

  hộpCôngViệc.forEach((hộp) => {
    let boxTiêuĐề = hộp.querySelector(".hộpCôngViệc__thôngTin--hộp1");
    let hộpChứaẢnh = hộp.querySelector(
      ".hộpCôngViệc__thôngTin--img__cóNộiDung"
    );
    let hộpChứaVideo = hộp.querySelector(".hộpCôngViệc__thôngTin--video");

    if (
      !hộpChứaVideo.classList.contains("hide") ||
      !hộpChứaẢnh.classList.contains("hide")
    ) {
      boxTiêuĐề.style.paddingBottom = "15px"; // khoảng cách padding xuống dưới
    }

    if (!hộpChứaẢnh.classList.contains("hide")) {
      let nútXemThêmThôngTin = hộp.querySelector(
        ".hộpCôngViệc__thôngTin--img__ChứcNăng--nútXemThêm"
      );
      let hộpThôngTinThêm = hộp.querySelector(".hộpCôngViệc__thôngTin--hộp2");
      let hộpMột = hộp.querySelector(".hộpCôngViệc__thôngTin--hộp1");
      let nútXemThêmCóMỗiNộiDUng = hộpMột.children[1];

      //Ẩn hộp tiêu để
      if (!hộpMột.classList.contains("hide")) {
        hộpMột.classList.add("hide");
      }

      //Ẩn nút xem thêm
      if (!nútXemThêmCóMỗiNộiDUng.classList.contains("hide")) {
        nútXemThêmCóMỗiNộiDUng.classList.add("hide");
      }

      if (nútXemThêmThôngTin.getAttribute("data-event-added") !== "true") {
        nútXemThêmThôngTin.addEventListener("click", () => {
          hộpThôngTinThêm.classList.toggle("hide");

          //Gọi hàm update chiều cao
          hộpThôngTinThêm.style.paddingBottom = "10px";

          if (
            !hộpThôngTinThêm.previousElementSibling.classList.contains("hide")
          ) {
            hộpThôngTinThêm.style.paddingTop = "0px";
          }
        });
        nútXemThêmThôngTin.setAttribute("data-event-added", "true");
      }
    }

    if (!hộpChứaVideo.classList.contains("hide")) {
      let nútXemThêmThôngTin = hộp.querySelector(
        ".hộpCôngViệc__thôngTin--video__chứcNăng--nútXemThêm"
      );
      let hộpThôngTinThêm = hộp.querySelector(".hộpCôngViệc__thôngTin--hộp2");
      let hộpMột = hộp.querySelector(".hộpCôngViệc__thôngTin--hộp1");
      let nútXemThêmCóMỗiNộiDUng = hộpMột.children[1];

      //Ẩn hộp tiêu để
      if (!hộpMột.classList.contains("hide")) {
        hộpMột.classList.add("hide");
      }

      //Ẩn nút xem thêm
      if (!nútXemThêmCóMỗiNộiDUng.classList.contains("hide")) {
        nútXemThêmCóMỗiNộiDUng.classList.add("hide");
      }

      if (nútXemThêmThôngTin) {
        if (nútXemThêmThôngTin.getAttribute("data-event-added") !== "true") {
          nútXemThêmThôngTin.addEventListener("click", () => {
            hộpThôngTinThêm.classList.toggle("hide");
            //Gọi hàm update chiều cao
            hộpThôngTinThêm.style.paddingBottom = "10px";

            if (
              !hộpThôngTinThêm.previousElementSibling.classList.contains("hide")
            ) {
              hộpThôngTinThêm.style.paddingTop = "0px";
            }
          });

          nútXemThêmThôngTin.setAttribute("data-event-added", "true");
        }
      }
    }
  });
}
updateKhoảngCáchTiêuĐề();

//Hàm hiện thông báo không có spam
function cảnhBáoKhôngCóSpan(nộiDung) {
  let cảnhBáo = document.getElementById("thôngBáoCảnhBáo");
  let nộiDungCảnhBáo = document.querySelector(".nộiDungThôngBáoCảnhBáo");
  nộiDungCảnhBáo.innerHTML = nộiDung;
  cảnhBáo.classList.remove("hide");
  setTimeout(() => {
    cảnhBáo.classList.add("hide");
  }, 2800);
}
