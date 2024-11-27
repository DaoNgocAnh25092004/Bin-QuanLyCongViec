const chânTrangTìmKiếm = document.querySelector("footer");
const chânTrangThêmViệc = document.querySelector(".thanhGửiNộiDungKhiThêmViệc");
const nútThêmViệc = document.querySelector(".chânTrang__btnThêmViệc");
const danhSáchCôngViệc = document.querySelector("#listCôngViệc > div");
const nútGửiNộiDungCôngViệc = document.querySelector(
  ".gửi-ThêmViệc > div:first-child "
);
const nútQuayLạiTừĐầu = document.querySelector(
  ".gửi-ThêmViệc > div:last-child "
);
let ôNhậpDữLiệuKhiThêmViệc = document.querySelector(".input-ThêmViệc input");

nútThêmViệc.addEventListener("click", () => {
  //Gọi hàm ẩn hiện trường hơp footer
  ẩnHiệnTrườngHợpFooter(true, chânTrangThêmViệc);

  //Xóa toàn bộ nội dung trong ô input
  clickIconXóaNộiDungInput(document.querySelector(".input-ThêmViệc > div"));

  //Hàm thêm việc bằng file
  thêmViệcBằngFile(chânTrangThêmViệc);

  //hàm thêm việc bằng txt
  thêmViệcBằngTxt();

  //Khi nhấn nút quay lại thao tác
  quayLạiThaoTác();
});

//Hàm cập nhận khoảng trống bị lệch
function updateKhoảngCáchCôngViệcMới(côngViệcMới) {
  var hộpChứaCảnhBáoKhiThêm = côngViệcMới.querySelector(
    ".hộpCôngViệc__cảnhBáoKhiThêm"
  );
  if (hộpChứaCảnhBáoKhiThêm) {
    if (!hộpChứaCảnhBáoKhiThêm.classList.contains("hide")) {
      let hộpCôngViệc = hộpChứaCảnhBáoKhiThêm.closest(".hộpCôngViệc");

      if (hộpCôngViệc) {
        const prevHộpCôngViệc = hộpCôngViệc.previousElementSibling;
        if (
          prevHộpCôngViệc &&
          prevHộpCôngViệc.classList.contains("hộpCôngViệc")
        ) {
          prevHộpCôngViệc.style.marginTop = "0px";
        }
      }
    } else {
      let hộpCôngViệc = hộpChứaCảnhBáoKhiThêm.closest(".hộpCôngViệc");

      if (hộpCôngViệc) {
        const prevHộpCôngViệc = hộpCôngViệc.previousElementSibling;
        if (
          prevHộpCôngViệc &&
          prevHộpCôngViệc.classList.contains("hộpCôngViệc")
        ) {
          prevHộpCôngViệc.style.marginTop = "-50px";
        }
      }
    }
  }
}

//Hàm quay lại thao tác từ đầu
function ẩnHiệnTrườngHợpFooter(check, thanhThêmViệc) {
  let tấtCảCácThanh = document.querySelectorAll(".thanhGửiNộiDung");

  if (check) {
    chânTrangTìmKiếm.classList.remove("thêmViệcBắtĐầu");
    chânTrangTìmKiếm.classList.add("thêmViệcOut");

    //Tắt tất cả các thanh gửi nội dung khác
    tấtCảCácThanh.forEach((form) => form.classList.add("hide"));

    setTimeout(() => {
      chânTrangTìmKiếm.classList.add("hide");
      thanhThêmViệc.classList.remove("hide");
    }, 180);

    // Focus input
    setTimeout(() => {
      let input = thanhThêmViệc.querySelector("input");
      if (input) input.focus();
    }, 181);

    thanhThêmViệc.classList.add("thêmViệcBắtĐầu");
    thanhThêmViệc.classList.remove("thêmViệcOut");
  } else {
    thanhThêmViệc.classList.remove("thêmViệcBắtĐầu");
    thanhThêmViệc.classList.add("thêmViệcOut");
    setTimeout(() => {
      chânTrangTìmKiếm.classList.remove("hide");
      thanhThêmViệc.classList.add("hide");
    }, 180);
    chânTrangTìmKiếm.classList.remove("thêmViệcOut");
    chânTrangTìmKiếm.classList.add("thêmViệcBắtĐầu");
  }
}

//Hàm cập nhật thời gian thực box vừa tạo
function cậpNhậtThờiGianThật(côngViệcMới) {
  let thờiGianHiệnTại = new Date();
  let ngày = thờiGianHiệnTại.getDate().toString().padStart(2, "0");
  let tháng = (thờiGianHiệnTại.getMonth() + 1).toString().padStart(2, "0");
  let năm = thờiGianHiệnTại.getFullYear();
  let giờ = thờiGianHiệnTại.getHours().toString().padStart(2, "0");
  let phút = thờiGianHiệnTại.getMinutes().toString().padStart(2, "0");
  let thờiGianHTML = `
    <div>
        <img src="images/Time.png" alt="">
    </div>
    <div>
        <div>Thời gian tạo</div>
        <div>
            <p>${giờ}:${phút}</p>
            <p>-</p>
            <p>${ngày}/${tháng}/${năm}</p>
        </div>
    </div>`;
  var thờiGianTạoElement = côngViệcMới.querySelector(
    ".hộpCôngViệc__cácChứcNăng__thờiGian"
  );
  thờiGianTạoElement.innerHTML = thờiGianHTML;
}

//Hàm quay lại khi nhấn nút quay lai thao tác
function quayLạiThaoTác() {
  nútQuayLạiTừĐầu.addEventListener("click", () => {
    let ôNhậpDữLiệuKhiThêmViệc = document.querySelector(
      ".input-ThêmViệc input"
    );
    ôNhậpDữLiệuKhiThêmViệc.value = "";

    // Công việc mởi rỗng
    côngViệcMới = null;

    //Gọi hàm ẩn hiện trường hơp footer
    ẩnHiệnTrườngHợpFooter(false, chânTrangThêmViệc);

    //Ẩn file đưa ảnh video vào
    let menu = document.querySelector(".menu__gửiFileKhiThêmCôngViệc");
    if (!menu.classList.contains("hide")) {
      menu.classList.add("hide");
    }
  });
}

//Hàm tạo công việc
function tạoCôngViệc() {
  let côngViệcMới = document.createElement("div");
  côngViệcMới.classList.add("hộpCôngViệc");
  côngViệcMới.innerHTML = `
     <div>
    <div id="tiếnTrìnhXửLý" class="hide">
        <div id="mànHìnhMờTiếnTrình" class="hide"></div>
        <div class="tiếnTrìnhXửLý__tiêuĐề">
            <div>
                <div class="tiếnTrìnhXửLý__tiêuĐề--tên">
                    <div>
                        <img src="images/Icon-Tiến Trình.png" alt="">
                    </div>
                    <div>
                        Tiến trình xử lý
                    </div>
                </div>
                <div class="tiếnTrìnhXửLý__tiêuĐề--thôngTin">
                    <div>
                        Có <span>1</span> phản hồi
                    </div>
                    <div>
                        <img src="images/Đóng Tiến Trình.png" alt="">
                    </div>
                </div>
            </div>
        </div>
        <div class="tiếnTrìnhXửLý__tinNhắn">
            <div>
                <div class="tiếnTrìnhXửLý__tinNhắn__danhSách">
                    <div class="tiếnTrìnhXửLý__tinNhắn__danhSách--yêuCầuXácNhận">
                        <div class="tiếnTrìnhXửLý__tinNhắn__danhSách--thôngTinThêmNgườiĐềXuất">
                            <div>
                                <div>
                                    <p>Nguyễn Thị Anh Tú Minh</p>
                                </div>
                                <div>
                                    <p>Người đề xuất</p>
                                </div>
                            </div>
                            <div>
                                Cách 1 phút trước
                            </div>
                        </div>
                        <div class="tiếnTrìnhXửLý__tinNhắn__danhSách--nộiDung">
                            <div>
                                <span>Nguyễn Thị Anh Tú Minh</span> yêu cầu bạn xác nhận <span>Thiết
                                    kế Logo</span>?
                            </div>
                            <div class="tiếnTrìnhXửLý__tinNhắn__danhSách--nộiDung__xácNhận">
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
                                <div class="">
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
                                        <span>2</span> hình
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
                                        <span>2</span> tài liệu
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

                </div>

            </div>
        </div>
        <div class="tiếnTrìnhXửLý__côngCụ xácNhậnYêuCầuKhông hide">
            <div>
                <div class="tiếnTrìnhXửLý__côngCụ--ôNhập">
                    <input type="text" placeholder="Lý do từ chối công việc này...">
                    <div class="hide">
                        <img src="images/Đóng.png" alt="">
                    </div>
                </div>
                <div class="tiếnTrìnhXửLý__côngCụ--gửi nútGửiXácNhậnYêuCầuKhông">
                    <img src="images/Gửi tiến trình.png" alt="">
                </div>
            </div>
        </div>

        <div class="tiếnTrìnhXửLý__fileTrướcKhiGửi hide">
            <div>
                <div class="tiếnTrìnhXửLý__fileTrướcKhiGửi--hìnhẢnh hide">
                    <div>
                        <div>
                            <div>
                                <span>2</span> hình
                            </div>
                            <div>
                                <img src="images/Điều Hướng Tiến Trình.png" alt="">
                            </div>
                        </div>
                        <div class="tiếnTrìnhXửLý__fileTrướcKhiGửi--hìnhẢnh__boxChứa hide">
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
                </div>
                <div class="tiếnTrìnhXửLý__fileTrướcKhiGửi--video hide">
                    <div>
                        <div>
                            <div>
                                <span>2</span> video
                            </div>
                            <div>
                                <img src="images/Điều Hướng Tiến Trình.png" alt="">
                            </div>
                        </div>
                        <div class="tiếnTrìnhXửLý__fileTrướcKhiGửi--video__boxChứa hide">
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
                <div class="tiếnTrìnhXửLý__fileTrướcKhiGửi--tàiLiệu hide">
                    <div>
                        <div>
                            <div>
                                <span>2</span> tài liệu
                            </div>
                            <div>
                                <img src="images/Điều Hướng Tiến Trình.png" alt="">
                            </div>
                        </div>
                        <div class="tiếnTrìnhXửLý__fileTrướcKhiGửi--tàiLiệu__boxChứa hide">
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
        </div>

        <div class="tiếnTrìnhXửLý__côngCụ xácNhậnYêuCầuĐồngÝ hide">
            <div>
                <div class="tiếnTrìnhXửLý__côngCụ--ôNhập ẩnHiệnGửiKèmFileTiếnTrình">
                    <input type="text" placeholder="Nhập nội dung...">
                    <div class="hide">
                        <img src="images/Đóng.png" alt="">
                    </div>
                </div>
                <div class="tiếnTrìnhXửLý__côngCụ--đínhKèm">
                    <img src="images/Đính kèm tiến trình .png" alt="">
                    <input type="file" multiple class="tiếnTrìnhXửLý__côngCụ--đínhKèm__file">
                </div>
                <div class="tiếnTrìnhXửLý__côngCụ--gửi nútGửiXácNhậnYêuCầuĐồngÝ">
                    <img src="images/Gửi tiến trình.png" alt="">
                </div>
            </div>
        </div>
    </div>

    <div class="hộpCôngViệc__trạngThái trạngThái-chờNhậpThêmThôngTin ">
        <div>
            <div>
                <img src="images/ThanhTrạngThái-ChờNhậpThêmThôngTin.png" alt="">
            </div>
            <div>
                Chờ nhập thêm thông tin
            </div>
        </div>
    </div>

    <div class="hộpCôngViệc__cảnhBáoKhiThêm">
        <div>
            Cần thêm tiêu đề cho công việc
        </div>
        <div>
            để không bị hạn chế quyền thao tác
        </div>
    </div>

    <div class="hộpCôngViệc__fileDữLiệu hide">
        <div>
            <img src="images/Nút-XemFile.png" alt="">
            <div class="hộpCôngViệc__fileDữLiệu--tàiLiệu">
                <p>2</p>
                <p>Tài liệu</p>
            </div>
        </div>
        <div>
            <img src="images/Nút-XemFile.png" alt="">
            <div class="hộpCôngViệc__fileDữLiệu--hình">
                <p>1</p>
                <p>hình</p>
            </div>
        </div>
        <div>
            <img src="images/Nút-XemFile.png" alt="">
            <div class="hộpCôngViệc__fileDữLiệu--video">
                <p>1</p>
                <p>video</p>
            </div>
        </div>
        <div>
            <img src="images/Nút-XemFile.png" alt="">
            <div class="hộpCôngViệc__fileDữLiệu--tàiLiệuBáoCáo">
                <p>2 <span>tài liệu</span></p>
                <p>báo cáo</p>
            </div>
        </div>
    </div>

    <div class="hộpCôngViệc__cácChứcNăng">
        <div class="hộpCôngViệc__cácChứcNăng__thờiGian">
            <div>
                <img src="images/Time.png" alt="">
            </div>
            <div>
                <div>Thời gian tạo</div>
                <div>
                    <p>13:30</p>
                    <p>-</p>
                    <p>25/09/2024</p>
                </div>
            </div>
        </div>
        <div class="hộpCôngViệc__cácChứcNăng__deadline">
            Đã mất <span>1</span> phút
        </div>

        <div class="hộpCôngViệc__cácChứcNăng__nútTiếnTrình hide">
            <div class="hide"><span>2</span> phản hồi</div>
            <div>Xem yêu cầu</div>
            <div>
                <img src="images/icon-ĐiềuHướng.png" alt="">
            </div>
        </div>
    </div>
    <div class="hộpCôngViệc__nútChứcNăngChính">
        <div>
            <img src="images/MởChứcNăng.png" alt="">
        </div>
    </div>
    <div class="hộpCôngViệc__thôngTin">
        <div class="hộpChọnTùyChỉnhCôngViệc hide">
            <div>
                <div>
                    <div><img src="images/MởRộngMenuCôngViệc.png" alt=""></div>
                    <div>Quản lý công việc</div>
                </div>
                <div class="hộpChọnTùyChỉnhCôngViệc__quảnLýCôngViệc hide">
                    <div>
                        <div class="">Thêm tiêu đề</div>
                        <div class="hide">Sửa tiêu đề</div>
                    </div>
                    <div class="option--màuĐậm">
                        Chỉnh sửa nội dung
                    </div>
                    <div>
                        Gửi tài liệu đính kèm
                        <input type="file" multiple>
                    </div>
                    <div class="option--màuĐậm2">
                        Xóa công việc
                    </div>
                </div>
            </div>
            <div class="option--màuĐậm">
                <div>
                    <div><img src="images/MởRộngMenuCôngViệc.png" alt=""></div>

                    <div class="chứcNăngĐangHạnChế">
                        <div>Tương tác nhân sự</div>
                        <div class="">đang hạn chế</div>
                    </div>
                </div>

                <div class="hộpChọnTùyChỉnhCôngViệc__tươngTácNhânSự hide">
                    <div class="hộpChọnTùyChỉnhCôngViệc__tươngTácNhânSự--box1">
                        <div>
                            <div> Gửi ai duyệt</div>
                            <div>
                                <img src="images/MởRộngMenuCôngViệc2.png" alt="">
                            </div>
                        </div>

                        <div class="hộpChọnTùyChỉnhCôngViệc__tươngTácNhânSự--gửiAiDuyệt hide">
                            <div>
                                <div>
                                    <img src="images/KhôngChọnMenu.png" alt="">
                                </div>
                                <div>Bùi Tuấn Tú</div>
                            </div>
                            <div class="option--màuĐậm">
                                <div>
                                    <img src="images/KhôngChọnMenu.png" alt="">
                                </div>
                                <div>Cô Ngọc</div>
                            </div>
                        </div>
                    </div>

                    <div class="option--màuĐậm hộpChọnTùyChỉnhCôngViệc__tươngTácNhânSự--box2">
                        <div>
                            <div>Giao việc cho ai</div>
                            <div>
                                <img src="images/MởRộngMenuCôngViệc2.png" alt="">
                            </div>
                        </div>

                        <div class="hộpChọnTùyChỉnhCôngViệc__tươngTácNhânSự--giaoViệcChoAi hide">
                            <div>
                                <div>
                                    <img src="images/KhôngChọnMenu.png" alt="">
                                </div>
                                <div>Bùi Tuấn Tú</div>
                            </div>
                            <div class="option--màuĐậm">
                                <div>
                                    <img src="images/KhôngChọnMenu.png" alt="">
                                </div>
                                <div>Cô Ngọc</div>
                            </div>
                            <div class="hộpChọnTùyChỉnhCôngViệc__tươngTácNhânSự--giaoViệcChoAi--all">
                                <div>
                                    <img src="images/KhôngChọnMenu.png" alt="">
                                </div>
                                <div>Tất cả</div>
                            </div>
                        </div>
                    </div>

                    <div class="hộpChọnTùyChỉnhCôngViệc__tươngTácNhânSự--box3">
                        <div>
                            <div>Gửi ai xem</div>
                            <div>
                                <img src="images/MởRộngMenuCôngViệc2.png" alt="">
                            </div>
                        </div>
                        <div class="hộpChọnTùyChỉnhCôngViệc__tươngTácNhânSự--gửiAiXem hide">
                            <div>
                                <div>
                                    <img src="images/KhôngChọnMenu.png" alt="">
                                </div>
                                <div>Bùi Tuấn Tú</div>
                            </div>
                            <div class="option--màuĐậm">
                                <div>
                                    <img src="images/KhôngChọnMenu.png" alt="">
                                </div>
                                <div>Cô Ngọc</div>
                            </div>
                            <div class="hộpChọnTùyChỉnhCôngViệc__tươngTácNhânSự--gửiAiXem--all">
                                <div>
                                    <img src="images/ChọnMenu.png" alt="">
                                </div>
                                <div>Tất cả</div>
                            </div>
                        </div>
                    </div>

                    <div class="option--màuĐậm2 hộpChọnTùyChỉnhCôngViệc__tươngTácNhânSự--box4">
                        <div>
                            <div>Gửi ai giám sát</div>
                            <div>
                                <img src="images/MởRộngMenuCôngViệc2.png" alt="">
                            </div>
                        </div>
                        <div class="hộpChọnTùyChỉnhCôngViệc__tươngTácNhânSự--gửiAiGiámSát hide">
                            <div>
                                <div>
                                    <img src="images/KhôngChọnMenu.png" alt="">
                                </div>
                                <div>Bùi Tuấn Tú</div>
                            </div>
                            <div class="option--màuĐậm">
                                <div>
                                    <img src="images/KhôngChọnMenu.png" alt="">
                                </div>
                                <div>Cô Ngọc</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div>
                <div>
                    <div><img src="images/MởRộngMenuCôngViệc.png" alt=""></div>
                    <div>Hỗ trợ theo dõi</div>
                </div>
                <div class="hộpChọnTùyChỉnhCôngViệc__hỗTrợTheoDõi hide">
                    <div class="hộpChọnTùyChỉnhCôngViệc__hỗTrợTheoDõi--box1">
                        <div>Đặt ưu tiên</div>
                        <div class="hide">Bỏ ưu tiên</div>
                    </div>
                    <div class="option--màuĐậm hộpChọnTùyChỉnhCôngViệc__hỗTrợTheoDõi--box2">
                        <div>
                            <div>Chủ đề công việc</div>
                            <div>
                                <img src="images/MởRộngMenuCôngViệc2.png" alt="">
                            </div>
                        </div>
                        <div class="hộpChọnTùyChỉnhCôngViệc__hỗTrợTheoDõi--chủĐềCôngViệc hide">
                            <div>
                                <div>
                                    <div>20</div>
                                    <div>chủ đề</div>
                                </div>
                                <div>
                                    <input type="text" placeholder="Tìm chủ đề ...">
                                </div>
                            </div>

                            <div class="hộpChọnTùyChỉnhCôngViệc__hỗTrợTheoDõi--chủĐềCôngViệc--boder">
                            </div>

                            <div class="hộpChọnTùyChỉnhCôngViệc__hỗTrợTheoDõi--chủĐềCôngViệc__list">
                                <div>
                                    <div>
                                        101
                                    </div>
                                    <div>Việc quan trọng</div>
                                </div>
                                <div class="option--màuĐậm">
                                    <div>
                                        100
                                    </div>
                                    <div>Quản lí nhân sự</div>
                                </div>
                                <div>
                                    <div>
                                        10
                                    </div>
                                    <div>Tiếp thị sản phẩm</div>
                                </div>
                                <div class="option--màuĐậm">
                                    <div>
                                        1
                                    </div>
                                    <div>Thiết kế thương hiệu</div>
                                </div>
                                <div>
                                    <div>
                                        103
                                    </div>
                                    <div>Tiếp thị sản phẩm</div>
                                </div>
                                <div class="option--màuĐậm">
                                    <div>
                                        1
                                    </div>
                                    <div>Thiết kế thương hiệu</div>
                                </div>
                            </div>

                            <div class="hộpChọnTùyChỉnhCôngViệc__hỗTrợTheoDõi--chủĐềCôngViệc__thêmCôngViệc">
                                <div>
                                    Thêm chủ đề
                                </div>
                                <div>
                                    <img src="images/IconThêmChủĐề.png" alt="">
                                </div>
                                <div>
                                    <img src="images/BackGroundThêmChủĐề.png" alt="">
                                </div>
                            </div>
                        </div>
                    </div>
                    <div>
                        <div>Theo dõi</div>
                        <div class="hide">Bỏ theo dõi</div>
                    </div>
                </div>
            </div>

            <div class="option--màuĐậm">
                <div>
                    <div><img src="images/MởRộngMenuCôngViệc.png" alt=""></div>
                    <div>Phản hồi công việc</div>
                </div>
                <div class="hộpChọnTùyChỉnhCôngViệc__phảnHồiCôngViệc hide">
                                    <div>
                                        Duyệt đề xuất
                                    </div>
                                    <div class="option--màuĐậm hide">
                                        Báo cáo tiến độ
                                    </div>
                                    <div class="hide">
                                        Yêu cầu gia hạn
                                    </div>
                                    <div class="option--màuĐậm hide">
                                        Gửi phản hồi
                                    </div>
                                    <div class="hide">
                                        Hoàn tất công việc
                                    </div>
                                </div>
            </div>
            <div>
                <div>
                    <div><img src="images/MởRộngMenuCôngViệc.png" alt=""></div>
                    <div>Khen thưởng</div>
                </div>
                <div class="hộpChọnTùyChỉnhCôngViệc__khenThưởng hide">
                    <div>
                        Quản lý bảng điểm thành tích
                    </div>
                </div>
            </div>
        </div>

        <div class="hộpCôngViệc__thôngTin--hộp1">
            <div class="hộpCôngViệc__thôngTin--hộp1__tiêuĐề">
                <div class="hide">
                    <img src="images/Hạn-1 ngày.png" alt="">
                </div>
                <div class="hide">
                    <img src="images/NgôiSao.png" alt="">
                </div>
                <div></div>
            </div>
            <div class="hộpCôngViệc__thôngTin--hộp1__nútThôngTinThêm">
                <div>
                    <img src="images/icon-thôngBáo.png" alt="">
                </div>
                <div>
                    thông tin thêm
                </div>
            </div>
        </div>
        <div class="hộpCôngViệc__thôngTin--hộp2 hide">
            <div>
                <div>Tuấn tú</div>
                <div>đề xuất</div>
            </div>
            <div class="hide">
                <div>Ngọc Anh</div>
                <div>thực hiện</div>
            </div>
            <div class="hide">
                <div>
                    <img src="images/NgôiSaoNhỏ.png" alt="">
                    <span>Đạt</span>
                </div>
                <p></p>
                <div>1 điểm</div>
            </div>
        </div>
        <div class="hộpCôngViệc__thôngTin--hộp3 hộpCôngViệc__thôngTin--hộp3--thêmViệc"></div>
        <div class="hộpCôngViệc__thôngTin--video  hide">
            <div class="hộpCôngViệc__thôngTin--video__boxChứa">
                <video src="videos/Background Trang Chủ.mp4" controls></video>
            </div>
            <div class="hộpCôngViệc__thôngTin--video__chứcNăng">
                <div>
                    <img class="hộpCôngViệc__thôngTin--video__chứcNăng--nútXóa" src="images/XóaCôngViệcFile.png" alt="">
                    <div class="hộpCôngViệc__thôngTin--video__chứcNăng--boxXóa xóaKhiKhôngCóNộiDung hide">
                        <div>
                            Bạn muốn xóa công việc này?
                        </div>
                        <div>
                            <div>
                                <img src="images/KhôngĐồngÝXóa.png" alt="">
                            </div>
                            <div>
                                <img src="images/ĐồngÝXóa.png" alt="">
                            </div>
                        </div>
                    </div>
                    <div class="hộpCôngViệc__thôngTin--video__chứcNăng--boxXóa xoáKhiCóNộiDung hide">
                        <div>
                            Bạn muốn giữ lại mô tả của công việc không?
                        </div>
                        <div>
                            <div>
                                <img src="images/KhôngĐồngÝXóa.png" alt="">
                            </div>
                            <div>
                                <img src="images/ĐồngÝXóa.png" alt="">
                            </div>
                        </div>
                    </div>
                </div>
                <div>
                    <img src="images/ThayNộiDung.png">
                    <input type="file" class="hộpCôngViệc__thôngTin--video__chứcNăng--nútThayVideo">
                </div>
                <div>
                    <img src="images/NútThôngTinThêmFile.png" alt=""
                        class="hộpCôngViệc__thôngTin--video__chứcNăng--nútXemThêm">
                </div>
            </div>
            <div class="hide">
                <div></div>
                <div class="hộpCôngViệc__thôngTin--video__nút hide">
                    <div>
                        <div>Xem thêm</div>
                        <div>
                            <img src="images/Điều Hướng Tiến Trình.png" alt="">
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="hộpCôngViệc__thôngTin--img__cóNộiDung hide">
            <div class="hộpCôngViệc__thôngTin--img__cóNộiDung--boxChứa">
                <img src="images/ảnh.png" alt="">

            </div>
            <div class="hộpCôngViệc__thôngTin--img__ChứcNăng">
                <div>
                    <img class="hộpCôngViệc__thôngTin--img__ChứcNăng--nútXóa" src="images/XóaCôngViệcFile.png" alt="">
                    <div class="hộpCôngViệc__thôngTin--img__ChứcNăng--boxXóa xóaKhiKhôngCóNộiDung hide">
                        <div>
                            Bạn muốn xóa công việc này?
                        </div>
                        <div>
                            <div>
                                <img src="images/KhôngĐồngÝXóa.png" alt="">
                            </div>
                            <div>
                                <img src="images/ĐồngÝXóa.png" alt="">
                            </div>
                        </div>
                    </div>
                    <div class="hộpCôngViệc__thôngTin--img__ChứcNăng--boxXóa xoáKhiCóNộiDung hide">
                        <div>
                            Bạn muốn giữ lại mô tả của công việc không?
                        </div>
                        <div>
                            <div>
                                <img src="images/KhôngĐồngÝXóa.png" alt="">
                            </div>
                            <div>
                                <img src="images/ĐồngÝXóa.png" alt="">
                            </div>
                        </div>
                    </div>
                </div>
                <div>
                    <img src="images/ThayNộiDung.png" alt="">
                    <input type="file" class="hộpCôngViệc__thôngTin--video__chứcNăng--nútThayẢnh">
                </div>
                <div>
                    <img src="images/NútThôngTinThêmFile.png" alt=""
                        class="hộpCôngViệc__thôngTin--img__ChứcNăng--nútXemThêm">
                </div>
            </div>
            <div class="hide">
                <div></div>
                <div class="hộpCôngViệc__thôngTin--img__cóNộiDung--nút hide">
                    <div>
                        <div>Xem thêm</div>
                        <div>
                            <img src="images/Điều Hướng Tiến Trình.png" alt="">
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="hộpCôngViệc__thôngTin--hộp45">
            <div class="hộpCôngViệc__thôngTin--hộp4 hide">
                <div>
                    <div>Xem thêm</div>
                    <div>
                        <img src="images/Điều Hướng Tiến Trình.png" alt="">
                    </div>
                </div>
            </div>
            <div class="hộpCôngViệc__thôngTin--hộp5 hide">
                <div>
                    <div>Cần <span>2</span> người duyệt</div>
                    <div>
                        <img src="images/Điều Hướng Tiến Trình.png" alt="">
                    </div>
                </div>
                <div class="boxThôngTinNgườiCầnDuyệt hide">
                    <div class="hide">
                        <div>Bùi Tuấn Tú</div>
                        <div>
                            <div>
                                <img src="images/User.png" alt="">
                            </div>
                            <div class="hide">
                                <img src="images/Icon-Xác Nhận.png" alt="">
                            </div>
                            <div class="icon-KhôngXácNhận">
                                <img src="images/Icon-Không Xác Nhận.png" alt="">
                            </div>
                        </div>
                    </div>
                    <div class="option--màuĐậm hide">
                        <div>Cô Ngọc</div>
                        <div>
                            <div>
                                <img src="images/User2.png" alt="">
                            </div>
                            <div class="hide">
                                <img src="images/Icon-Xác Nhận.png" alt="">
                            </div>
                            <div class="icon-KhôngXácNhận">
                                <img src="images/Icon-Không Xác Nhận.png" alt="">
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>          
    `;
  return côngViệcMới;
}

//Thêm việc bằng txt
function thêmViệcBằngTxt() {
  if (nútGửiNộiDungCôngViệc.getAttribute("data-event-added") !== "true") {
    nútGửiNộiDungCôngViệc.addEventListener("click", (event) => {
      event.stopPropagation();

      //Gọi hàm tạo công việc
      let côngViệcMới = tạoCôngViệc();

      let ôNhậpDữLiệuKhiThêmViệc = document.querySelector(
        ".input-ThêmViệc input"
      );

      if (ôNhậpDữLiệuKhiThêmViệc.value.trim() !== "" && côngViệcMới) {
        // Thêm vào danh sách
        danhSáchCôngViệc.appendChild(côngViệcMới);

        // Hiệu ứng scroll lên chỗ công việc đang làm
        window.scrollTo({ top: 0, behavior: "smooth" });

        // Xử lý khoảng cách khi thêm công việc mới
        updateKhoảngCáchCôngViệcMới(côngViệcMới);

        // Xử lý khi click vô menu
        XửLýMenuChứcNăngCôngViệc();

        // Gọi hàm update chiều cao
        updateChiềuCaoBoxChứcNăngCôngViệc();

        // Cập nhật thời gian thực
        cậpNhậtThờiGianThật(côngViệcMới);

        //Hiện số ô người cần duyệt
        hiệnBoxNgườiDuyệt();

        //Xử lí ẩn hiện thông tin thêm trên box nội dung
        nútXemThôngTinThêmBoxNộiDung();

        // Điền nội dung vào ô công việc
        let hộpChứaNộiDungCôngViệcMới = côngViệcMới.querySelector(
          ".hộpCôngViệc__thôngTin--hộp3--thêmViệc"
        );
        hộpChứaNộiDungCôngViệcMới.innerHTML = ôNhậpDữLiệuKhiThêmViệc.value;

        //Xóa rỗng ô nhập khi gửi nội dung
        ôNhậpDữLiệuKhiThêmViệc.value = "";

        //Hiện nút xem thêm khi nội dung công việc nhiều
        checkSốLượngNộiDungTrongÔChứa();

        //Xử lý tiến trình
        xửLýTiếnTrình();

        //Gọi hàm ẩn hiện trường hơp footer
        ẩnHiệnTrườngHợpFooter(false, chânTrangThêmViệc);

        //Hiện thông báo khi thêm thành công công việc
        let thànhCông = document.getElementById("thôngBáoThànhCông");

        thànhCông.classList.remove("hide");
        setTimeout(() => {
          thànhCông.classList.add("hide");
        }, 2800);

        // Xóa biến côngViệcMới đi
        côngViệcMới = null;
      } else if (ôNhậpDữLiệuKhiThêmViệc.value.trim() === "") {
        let cảnhBáo = document.getElementById("thôngBáoCảnhBáo");
        let nộiDungCảnhBáo = document.querySelector(".nộiDungThôngBáoCảnhBáo");
        nộiDungCảnhBáo.innerHTML = "Vui lòng nhập nội dung công việc";
        cảnhBáo.classList.remove("hide");
        setTimeout(() => {
          cảnhBáo.classList.add("hide");
        }, 2800);
      }
    });
    nútGửiNộiDungCôngViệc.setAttribute("data-event-added", "true");
  }
}

//Hàm thêm Việc bằng file
function thêmViệcBằngFile(thanhThêmViệc) {
  let nút = thanhThêmViệc.querySelector(
    ".chânTrang__boxThêmViệc--menuFile img"
  );
  let menu = thanhThêmViệc.querySelector(".menu__gửiFileKhiThêmCôngViệc");

  if (nút.getAttribute("data-event-added") !== "true") {
    nút.addEventListener("click", (event) => {
      event.stopPropagation();
      menu.classList.toggle("hide");

      //Tắ menu hộp chức năng
      tắtMenuChứcNăngHộpChính();

      //Menu chủ đề
      tắtMenuChủĐề();

      //Tắt menu xóa ảnh trong công việc
      tắtMenuXóaFile();

      //Tắt menu lọc dưới header
      tắtMenuLọcDướiHeader();
    });
    nút.setAttribute("data-event-added", "true");
  }

  document.addEventListener("click", (event) => {
    if (!menu.classList.contains("hide") && !menu.contains(event.target)) {
      menu.classList.add("hide");
    }
  });

  //Thêm việc bằng ảnh
  let nútThêmCôngViệcẢnh = menu.querySelector(
    ".menu__gửiFileKhiThêmCôngViệc--ảnh"
  );
  nútThêmCôngViệcẢnh.addEventListener("input", (event) => {
    //Gọi hàm tạo công việc
    let côngViệcMới = tạoCôngViệc();

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

    let file = event.target.files[0];
    if (file) {
      let tênFile = file.name.toLowerCase();
      let đuôiFileĐưaVào = tênFile
        .slice(tênFile.lastIndexOf("."))
        .toLowerCase();

      if (đuôiFileẢnh.includes(đuôiFileĐưaVào) && côngViệcMới) {
        let imgURL = URL.createObjectURL(file);

        danhSáchCôngViệc.appendChild(côngViệcMới);

        // Hiệu ứng scroll lên chỗ công việc đang làm
        window.scrollTo({ top: 0, behavior: "smooth" });

        // Xử lý khoảng cách khi thêm công việc mới
        updateKhoảngCáchCôngViệcMới(côngViệcMới);

        // Xử lý khi click vô menu
        XửLýMenuChứcNăngCôngViệc();

        // Gọi hàm update chiều cao
        updateChiềuCaoBoxChứcNăngCôngViệc();

        // Cập nhật thời gian thực
        cậpNhậtThờiGianThật(côngViệcMới);

        // Hiện số ô người cần duyệt
        hiệnBoxNgườiDuyệt();

        //Update khoảng các tiêu đề nội dung thêm
        updateKhoảngCáchTiêuĐề();

        //Xử lý tiến trình
        xửLýTiếnTrình();

        //Sửa chỉnh sửa nội dung khi thêm ảnh thành thêm mô tả
        let boxChỉnhSửaNộiDung = côngViệcMới.querySelector(
          ".hộpChọnTùyChỉnhCôngViệc__quảnLýCôngViệc >div:nth-child(2)"
        );

        let boxImgChứaNộiDung = côngViệcMới.querySelector(
          ".hộpCôngViệc__thôngTin--img__cóNộiDung"
        ).children[2];
        if (boxImgChứaNộiDung.classList.contains("hide")) {
          boxChỉnhSửaNộiDung.innerHTML = "Thêm mô tả";
        } else if (!boxImgChứaNộiDung.classList.contains("hide")) {
          boxChỉnhSửaNộiDung.innerHTML = "Chỉnh sửa mô tả";
        }

        // Ẩn hộp chứa nội dung txt công việc
        let hộpChứaNộiDungCôngViệcMới = côngViệcMới.querySelector(
          ".hộpCôngViệc__thôngTin--hộp3--thêmViệc"
        );
        hộpChứaNộiDungCôngViệcMới.classList.add("hide");

        // Hiển hộp ảnh mới đưa vào
        let hộpChứaẢnh = côngViệcMới.querySelector(
          ".hộpCôngViệc__thôngTin--img__cóNộiDung"
        );
        hộpChứaẢnh.classList.remove("hide");

        // Gắn ảnh mới đưa vào
        hộpChứaẢnh.children[0].querySelector("img").src = imgURL;

        // Loại bỏ file cũ
        imgURL = null;

        // Ẩn menu thêm bằng file ảnh
        menu.classList.add("hide");

        // Gọi hàm ẩn hiện trường hợp footer
        ẩnHiệnTrườngHợpFooter(false, chânTrangThêmViệc);

        // Hiện thông báo khi thêm thành công công việc
        let thànhCông = document.getElementById("thôngBáoThànhCông");
        thànhCông.classList.remove("hide");
        setTimeout(() => {
          thànhCông.classList.add("hide");
        }, 2800);

        // Reset input file để có thể chọn lại cùng một file
        nútThêmCôngViệcẢnh.value = "";

        // Đặt côngViệcMới lại thành null chỉ khi công việc đã được xử lý
        côngViệcMới = null;
      }
      if (!đuôiFileẢnh.includes(đuôiFileĐưaVào)) {
        let cảnhBáo = document.getElementById("thôngBáoCảnhBáo");
        let nộiDungCảnhBáo = document.querySelector(".nộiDungThôngBáoCảnhBáo");
        nộiDungCảnhBáo.innerHTML = "Vui lòng chọn file ảnh hợp lệ";
        cảnhBáo.classList.remove("hide");
        setTimeout(() => {
          cảnhBáo.classList.add("hide");
        }, 2800);
      }

      //Gọi hàm xóa ảnh
      XóaNộiDungKhiCóThêmẢnhVideoAudio(
        ".hộpCôngViệc__thôngTin--img__ChứcNăng--nútXóa",
        ".hộpCôngViệc__thôngTin--img__cóNộiDung"
      );

      //Gọi hàm thay đổi ảnh
      hàmThayĐổiẢnhVideo(
        ".hộpCôngViệc__thôngTin--video__chứcNăng--nútThayẢnh",
        ".hộpCôngViệc__thôngTin--img__cóNộiDung",
        ".hộpCôngViệc__thôngTin--img__cóNộiDung--boxChứa img"
      );

      //Update khoảng các tiêu đề nội dung thêm
      updateKhoảngCáchTiêuĐề();
    }
  });

  //Thêm việc bằng video
  let nútThêmCôngViệcVideo = menu.querySelector(
    ".menu__gửiFileKhiThêmCôngViệc--video"
  );

  nútThêmCôngViệcVideo.addEventListener("input", (event) => {
    //Gọi hàm tạo công việc
    let côngViệcMới = tạoCôngViệc();

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

    let file = event.target.files[0];
    if (file) {
      let tênFile = file.name.toLowerCase();
      let đuôiFileĐưaVào = tênFile
        .slice(tênFile.lastIndexOf("."))
        .toLowerCase();

      if (đuôiFileVideo.includes(đuôiFileĐưaVào) && côngViệcMới) {
        let videoURL = URL.createObjectURL(file);

        danhSáchCôngViệc.appendChild(côngViệcMới);

        // Hiệu ứng scroll lên chỗ công việc đang làm
        window.scrollTo({ top: 0, behavior: "smooth" });

        // Xử lý khoảng cách khi thêm công việc mới
        updateKhoảngCáchCôngViệcMới(côngViệcMới);

        // Xử lý khi click vô menu
        XửLýMenuChứcNăngCôngViệc();

        // Gọi hàm update chiều cao
        updateChiềuCaoBoxChứcNăngCôngViệc();

        // Cập nhật thời gian thực
        cậpNhậtThờiGianThật(côngViệcMới);

        // Hiện số ô người cần duyệt
        hiệnBoxNgườiDuyệt();

        //Xử lý tiến trình
        xửLýTiếnTrình();

        //Sửa chỉnh sửa nội dung khi thêm ảnh thành thêm mô tả
        let boxChỉnhSửaNộiDung = côngViệcMới.querySelector(
          ".hộpChọnTùyChỉnhCôngViệc__quảnLýCôngViệc >div:nth-child(2)"
        );

        let boxImgChứaNộiDung = côngViệcMới.querySelector(
          ".hộpCôngViệc__thôngTin--video"
        ).children[2];
        if (boxImgChứaNộiDung.classList.contains("hide")) {
          boxChỉnhSửaNộiDung.innerHTML = "Thêm mô tả";
        } else if (!boxImgChứaNộiDung.classList.contains("hide")) {
          boxChỉnhSửaNộiDung.innerHTML = "Chỉnh sửa mô tả";
        }

        // Ẩn hộp chứa nội dung txt công việc
        let hộpChứaNộiDungCôngViệcMới = côngViệcMới.querySelector(
          ".hộpCôngViệc__thôngTin--hộp3--thêmViệc"
        );
        hộpChứaNộiDungCôngViệcMới.classList.add("hide");

        // Hiển hộp ảnh mới đưa vào
        let hộpChứaVideo = côngViệcMới.querySelector(
          ".hộpCôngViệc__thôngTin--video"
        );
        hộpChứaVideo.classList.remove("hide");

        // Gắn ảnh mới đưa vào
        hộpChứaVideo.children[0].querySelector("video").src = videoURL;

        // Nạp lại video mới
        hộpChứaVideo.children[0].querySelector("video").load();

        // Dừng tất cả các video đang phát
        let tấtCảVideo = document.querySelectorAll(
          ".hộpCôngViệc__thôngTin--video__boxChứa video"
        );
        tấtCảVideo.forEach((video) => {
          video.pause();
          video.currentTime = 0;
        });

        // Phát video khi thêm vào
        let video = côngViệcMới.querySelector(
          ".hộpCôngViệc__thôngTin--video__boxChứa video"
        );
        video.play();

        // Ẩn menu thêm bằng file video
        menu.classList.add("hide");

        // Gọi hàm ẩn hiện trường hợp footer
        ẩnHiệnTrườngHợpFooter(false, chânTrangThêmViệc);

        // Hiện thông báo khi thêm thành công công việc
        let thànhCông = document.getElementById("thôngBáoThànhCông");
        thànhCông.classList.remove("hide");
        setTimeout(() => {
          thànhCông.classList.add("hide");
        }, 2800);

        // Reset input file để có thể chọn lại cùng một file
        nútThêmCôngViệcVideo.value = "";

        // Đặt côngViệcMới lại thành null chỉ khi công việc đã được xử lý
        côngViệcMới = null;
      }
      if (!đuôiFileVideo.includes(đuôiFileĐưaVào)) {
        let cảnhBáo = document.getElementById("thôngBáoCảnhBáo");
        let nộiDungCảnhBáo = document.querySelector(".nộiDungThôngBáoCảnhBáo");
        nộiDungCảnhBáo.innerHTML = "Vui lòng chọn file video hợp lệ";
        cảnhBáo.classList.remove("hide");
        setTimeout(() => {
          cảnhBáo.classList.add("hide");
        }, 2800);
      }

      //Gọi hàm xóa ảnh
      XóaNộiDungKhiCóThêmẢnhVideoAudio(
        ".hộpCôngViệc__thôngTin--video__chứcNăng--nútXóa",
        ".hộpCôngViệc__thôngTin--video"
      );

      //Gọi hàm thay đổi ảnh
      hàmThayĐổiẢnhVideo(
        ".hộpCôngViệc__thôngTin--video__chứcNăng--nútThayVideo",
        ".hộpCôngViệc__thôngTin--video",
        ".hộpCôngViệc__thôngTin--video__boxChứa video"
      );

      //Update khoảng các tiêu đề nội dung thêm
      updateKhoảngCáchTiêuĐề();
    }
  });
}
