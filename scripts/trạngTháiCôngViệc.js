function trạngTháiCôngViệc(
  hộpTrạngTháiCôngViệc,
  trạngThái,
  đườngDẫnImg,
  nộiDungTrạngThái
) {
  let imgTrạngThái =
    hộpTrạngTháiCôngViệc.children[0].children[0].querySelector("img");
  let nộiDungCủaTrạngThái = hộpTrạngTháiCôngViệc.children[0].children[1];

  //Lấy ra tất cả tên class của trạng thái công việc
  let classList = Array.from(hộpTrạngTháiCôngViệc.classList);

  // Xóa tất cả các class ngoại trừ class "hộpCôngViệc__trạngThái"
  classList.forEach((className) => {
    if (className !== "hộpCôngViệc__trạngThái") {
      hộpTrạngTháiCôngViệc.classList.remove(className);
    }
  });

  hộpTrạngTháiCôngViệc.classList.add(trạngThái);
  imgTrạngThái.src = đườngDẫnImg;
  nộiDungCủaTrạngThái.innerHTML = nộiDungTrạngThái;
}

//Trạng thái đã làm xong
// trạngTháiCôngViệc(
//   document.querySelector(".hộpCôngViệc__trạngThái"),
//   "trạngThái-đãLàmXong",
//   "images/ThanhTrạngThái-XácNhậnCôngViệc.png",
//   "Đã làm xong"
// );

//Trạng thái đang thực hiện
// trạngTháiCôngViệc(
//   document.querySelector(".hộpCôngViệc__trạngThái"),
//   "trạngThái--đangThựcHiện",
//   "images/ThanhTrạngThái-ĐangThựcHiện.png",
//   "Đang thực hiện"
// );

//Trạng thái chờ nhân viên xác nhân
// trạngTháiCôngViệc(
//   document.querySelector(".hộpCôngViệc__trạngThái"),
//   "trạngThái--chờNhânViênXácNhận",
//   "images/ThanhTrạngThái-ChờDuyệt.png",
//   "Chờ nhân viên xác nhận"
// );

//Trạng thái chờ duyệt
// trạngTháiCôngViệc(
//   document.querySelector(".hộpCôngViệc__trạngThái"),
//   "trạngThái-chờDuyệt",
//   "images/ThanhTrạngThái-ChờDuyệt.png",
//   "Chờ duyệt"
// );

//Trạng thái chờ nhập thêm thông tin
// trạngTháiCôngViệc(
//   document.querySelector(".hộpCôngViệc__trạngThái"),
//   "trạngThái-chờNhậpThêmThôngTin",
//   "images/ThanhTrạngThái-ChờNhậpThêmThôngTin.png",
//   "Chờ nhập thêm thông tin"
// );
