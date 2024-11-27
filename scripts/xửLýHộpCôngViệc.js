//Xử lí ẩn hiện thông tin thêm
function nútXemThôngTinThêmBoxNộiDung() {
    let dsNútXemThêm = document.querySelectorAll('.hộpCôngViệc__thôngTin--hộp1__nútThôngTinThêm')
    dsNútXemThêm.forEach((nútThôngTinThêm) => {

        if (nútThôngTinThêm.getAttribute('data-event-added') !== 'true') {
            nútThôngTinThêm.addEventListener('click', (event) => {
                event.stopPropagation()

                const hộpHiệnThôngTinThêm = nútThôngTinThêm.parentElement.nextElementSibling;
                const nộiDungNútThôngTinThêm = nútThôngTinThêm.querySelector('div:last-child');

                if (hộpHiệnThôngTinThêm && hộpHiệnThôngTinThêm.classList.contains('hộpCôngViệc__thôngTin--hộp2')) {
                    if (!hộpHiệnThôngTinThêm.classList.contains('hide')) {
                        hộpHiệnThôngTinThêm.classList.add('hide');
                        nộiDungNútThôngTinThêm.innerHTML = 'thông tin thêm';

                        //Gọi hàm update chiều cao
                        updateChiềuCaoBoxChứcNăngCôngViệc()
                    } else {
                        hộpHiệnThôngTinThêm.classList.remove('hide');
                        nộiDungNútThôngTinThêm.innerHTML = 'ẩn thông tin';

                        //Gọi hàm update chiều cao
                        updateChiềuCaoBoxChứcNăngCôngViệc()
                    }
                }
            });
            nútThôngTinThêm.setAttribute('data-event-added', 'true');
        }
    });
}

//Xử lí ẩn hiện thông tin thêm trên box nội dung
nútXemThôngTinThêmBoxNộiDung()

//Khi ẩn thông tin chứa dữ liệu file về khoảng cách
const hộpChứaDữLiệuFile = document.querySelectorAll('.hộpCôngViệc__fileDữLiệu');

hộpChứaDữLiệuFile.forEach(element => {
    if (element.classList.contains('hide')) {
        const hộpCôngViệc = element.closest('.hộpCôngViệc');
        if (hộpCôngViệc) {
            const prevHộpCôngViệc = hộpCôngViệc.previousElementSibling;
            if (prevHộpCôngViệc && prevHộpCôngViệc.classList.contains('hộpCôngViệc')) {
                prevHộpCôngViệc.style.marginTop = '-40px';
            }
        }
    }
});



// khi mà ẩn nút xem thêm khi mà nội dung quá nhiều
const nútXemThêmNộiDung = document.querySelectorAll('.hộpCôngViệc__thôngTin--hộp4')

nútXemThêmNộiDung.forEach(element => {
    if (element.classList.contains('hide')) {
        const previousElement = element.previousElementSibling;
        if (previousElement && previousElement.classList.contains('hộpCôngViệc__thôngTin--hộp3')) {
            previousElement.style.padding = '2px 10px 14px 14px';

        }
    }

})

//update số lượng công việc gần đến hạn
const hộpSốLượngCôngViệcGầnĐếnHạn = document.querySelectorAll('.hộpCôngViệc__thôngTin--hộp1__tiêuĐề > div:first-child')
const giáTrịSlCôngViệcGầnĐếnHạn = document.querySelector('.menu__việcGầnĐếnHạn--sốLượng span')
let sốLượngThậtCvGầnĐếnHạn = 0

hộpSốLượngCôngViệcGầnĐếnHạn.forEach(element => {
    if (!element.classList.contains('hide')) {
        sốLượngThậtCvGầnĐếnHạn++;
    }
})
giáTrịSlCôngViệcGầnĐếnHạn.innerHTML = sốLượngThậtCvGầnĐếnHạn


//Update số lượng công việc cần làm
const hộpTrạngTháiCôngViệc = document.querySelectorAll('.trạngThái--đangThựcHiện')
const ôChứaSốLượngThậtCôngViệcCầnLàm = document.querySelector('.menu__việcCầnLàm > div:first-child > p:last-child span')
let sốLượngThậtCôngViệcCầnLàm = 0;

hộpTrạngTháiCôngViệc.forEach(element => {
    if (!element.classList.contains('hide')) {
        sốLượngThậtCôngViệcCầnLàm++;
    }
})

ôChứaSốLượngThậtCôngViệcCầnLàm.innerHTML = sốLượngThậtCôngViệcCầnLàm

//Xử lý khu chờ duyệt hiện xem thong tin thêm ẩn
const hộpChờDuyệtQuảnLý = document.querySelector('.hộpCôngViệc__thôngTin--hộp5');
const hộpXemNộiDungCvThêm = document.querySelector('.hộpCôngViệc__thôngTin--hộp4');
const hộpChứaHộp5VàHộp4 = document.querySelector('.hộpCôngViệc__thôngTin > div:last-child');

//Thu thọn, xem thêm nội dung công việc
function checkSốLượngNộiDungTrongÔChứa() {
    const nútBấmToNhỏNộiDungCôngViệc = document.querySelectorAll('.hộpCôngViệc__thôngTin--hộp4')

    nútBấmToNhỏNộiDungCôngViệc.forEach(nút => {
        if (nút.getAttribute('data-event-added') !== 'true') {
            nút.addEventListener('click', () => {


                let nộiDungNút = nút.children[0].children[0]
                let hộpNộiDung = nút.parentNode.parentNode.querySelector('.hộpCôngViệc__thôngTin--hộp3');

                if (nộiDungNút.innerHTML === 'Xem thêm') {
                    nộiDungNút.innerHTML = 'Thu gọn'
                    hộpNộiDung.style.display = 'block'
                } else {
                    nộiDungNút.innerHTML = 'Xem thêm'
                    hộpNộiDung.style.display = '-webkit-box'
                }
            })

            nút.setAttribute('data-event-added', 'true');
        }

        let hộpChứaNộiDungCôngViệc = nút.closest('.hộpCôngViệc').querySelector('.hộpCôngViệc__thôngTin--hộp3')

        if (kiểmTraĐộDàiNộiDung(hộpChứaNộiDungCôngViệc)) {
            nút.classList.remove('hide')
            let boxChứaHaiHộp45 = nút.parentNode;
            boxChứaHaiHộp45.classList.remove('ẩnXemThêmThôngTin')
        } else {
            let boxChứaHaiHộp45 = nút.parentNode;
            boxChứaHaiHộp45.classList.add('ẩnXemThêmThôngTin')
        }
    })

    //Nút xem thêm khi có ảnh đi kèm 
    const dsNútXemThêmKhiCóẢnh = document.querySelectorAll('.hộpCôngViệc__thôngTin--img__cóNộiDung--nút')

    dsNútXemThêmKhiCóẢnh.forEach(nút => {
        if (nút.getAttribute('data-event-added') !== 'true') {
            nút.addEventListener('click', () => {
                let nộiDungNút = nút.children[0].children[0]
                let hộpNộiDung = nút.parentNode.querySelector('.hộpCôngViệc__thôngTin--img__cóNộiDung>div:last-child > div:first-child');

                if (nộiDungNút.innerHTML === 'Xem thêm') {
                    nộiDungNút.innerHTML = 'Thu gọn'
                    hộpNộiDung.style.display = 'block'
                } else {
                    nộiDungNút.innerHTML = 'Xem thêm'
                    hộpNộiDung.style.display = '-webkit-box'
                }
            })
            nút.setAttribute('data-event-added', 'true');
        }

        let hộpChứaNộiDungCôngViệc = nút.parentNode.children[0]

        if (kiểmTraĐộDàiNộiDung(hộpChứaNộiDungCôngViệc)) {
            nút.classList.remove('hide')
        }
    })

    //Xem thêm khi là video
    const dsNútXemThêmKhiCóVideo = document.querySelectorAll('.hộpCôngViệc__thôngTin--video__nút')

    dsNútXemThêmKhiCóVideo.forEach(nút => {
        if (nút.getAttribute('data-event-added') !== 'true') {
            nút.addEventListener('click', () => {
                let nộiDungNút = nút.children[0].children[0]
                let hộpNộiDung = nút.parentNode.querySelector('.hộpCôngViệc__thôngTin--video>div:last-child > div:first-child');

                if (nộiDungNút.innerHTML === 'Xem thêm') {
                    nộiDungNút.innerHTML = 'Thu gọn'
                    hộpNộiDung.style.display = 'block'
                } else {
                    nộiDungNút.innerHTML = 'Xem thêm'
                    hộpNộiDung.style.display = '-webkit-box'
                }
            })
            nút.setAttribute('data-event-added', 'true');
        }


        let hộpChứaNộiDungCôngViệc = nút.parentNode.children[0]

        if (kiểmTraĐộDàiNộiDung(hộpChứaNộiDungCôngViệc)) {
            nút.classList.remove('hide')
        }
    })

}

//Hiện nút xem thêm khi nội dung công việc nhiều
checkSốLượngNộiDungTrongÔChứa()

function kiểmTraĐộDàiNộiDung(element) {
    let thuộcTínhCss = window.getComputedStyle(element);

    // Kiểm tra thuộc tính -webkit-line-clamp
    let webkitLineClamp = thuộcTínhCss.getPropertyValue('-webkit-line-clamp');
    if (webkitLineClamp !== 'none') {

        // Tính toán chiều cao tối đa dựa trên -webkit-line-clamp và line-height
        let lineHeight = parseInt(thuộcTínhCss.getPropertyValue('line-height'));
        let maxHeight = parseInt(webkitLineClamp) * (lineHeight + 10);

        return element.scrollHeight > maxHeight;
    }

    // Nếu không có bất kỳ điều kiện nào, trả về false
    return false;
}

//Hiện hộp người cần duyệt 
function hiệnBoxNgườiDuyệt() {
    const nútSốNgườiDuyệt = document.querySelectorAll('.hộpCôngViệc__thôngTin--hộp5 > div:first-child')

    if (nútSốNgườiDuyệt) {
        nútSốNgườiDuyệt.forEach(nút => {
            if (nút.getAttribute('data-event-added') !== 'true') {

                nút.addEventListener('click', (event) => {
                    event.stopPropagation
                    nút.parentNode.querySelector('.boxThôngTinNgườiCầnDuyệt').classList.toggle('hide');
                })


            }
            nút.setAttribute('data-event-added', 'true'); // Đánh dấu đã thêm sự kiện cho nút thêm chủ đề

        })
    }
}

//Hiện số ô người cần duyệt
hiệnBoxNgườiDuyệt()


//Xử lý khi xóa nội dung của các ô video ô hình ảnh 
function XóaNộiDungKhiCóThêmẢnhVideoAudio(nút, hộp) {
    const nútXóaNộiDungCôngViệc = document.querySelectorAll(nút);

    nútXóaNộiDungCôngViệc.forEach(nút => {
        if (nút.getAttribute('data-event-added') !== 'true') {
            nút.addEventListener('click', (event) => {
                event.stopPropagation();

                // Gọi hàm đóng các menu còn lại trừ menu hiện tại
                đóngCácMenuKhácFile(nút);

                let hộpChứaNộiDung = nút.parentNode.parentNode.nextElementSibling;
                if (!hộpChứaNộiDung.classList.contains('hide')) {
                    let boxChứaThôngBáoCóNộiDung = nút.nextElementSibling.nextElementSibling;

                    // Ẩn hiển ô box
                    boxChứaThôngBáoCóNộiDung.classList.toggle('hide');

                    // Lấy nút
                    let nútKhông = boxChứaThôngBáoCóNộiDung.children[1].children[0];
                    let nútĐồngÝ = boxChứaThôngBáoCóNộiDung.children[1].children[1];

                    // Khi click không
                    nútKhông.addEventListener('click', () => {
                        nútKhông.closest('.hộpCôngViệc').remove();
                    });

                    // Khi clicking "Đồng Ý"
                    nútĐồngÝ.addEventListener('click', () => {
                        let boxXóa = nútKhông.closest(hộp);
                        if (boxXóa && boxXóa.children.length >= 2) {
                            boxXóa.children[1].remove();
                            boxXóa.children[0].remove();
                        }

                        // Chỉnh lại vị trí
                        if (hộp === '.hộpCôngViệc__thôngTin--img__cóNộiDung') {
                            boxXóa.parentNode.querySelector(hộp).children[0].style.marginTop = '0px';
                        }
                    });

                } else {
                    let hộpChứaNộiDung2 = nút.nextElementSibling;
                    hộpChứaNộiDung2.classList.toggle('hide');

                    // Get buttons
                    let nútKhông = hộpChứaNộiDung2.children[1].children[0];
                    let nútĐồngÝ = hộpChứaNộiDung2.children[1].children[1];

                    nútKhông.addEventListener('click', () => {
                        hộpChứaNộiDung2.classList.add('hide');
                    });

                    nútĐồngÝ.addEventListener('click', () => {
                        nútĐồngÝ.closest('.hộpCôngViệc').remove();
                    });
                }
            });
            nút.setAttribute('data-event-added', 'true');
        }
    });

    let hộpKhôngCóNộiDung = document.querySelectorAll('.xóaKhiKhôngCóNộiDung');
    document.addEventListener('click', (event) => {
        hộpKhôngCóNộiDung.forEach(hộp => {
            if (!hộp.classList.contains('hide') && !hộp.contains(event.target)) {
                hộp.classList.add('hide');
            }
        });
    });

    let hộpCóNộiDung = document.querySelectorAll('.xoáKhiCóNộiDung');
    document.addEventListener('click', (event) => {
        hộpCóNộiDung.forEach(hộp => {
            if (!hộp.classList.contains('hide') && !hộp.contains(event.target)) {
                hộp.classList.add('hide');
            }
        });
    });
}

function đóngCácMenuKhácFile(nútHiệnTại) {
    // Danh sách các menu cần tắt
    tắtMenuChứcNăngHộpChính();
    tắtMenuChủĐề();
    tắtMenuThêmFile();
    tắtMenuLọcDướiHeader();

    // Tắt các menu xóa khác trừ menu hiện tại
    let hộpKhôngCóNộiDung = document.querySelectorAll('.xóaKhiKhôngCóNộiDung');
    hộpKhôngCóNộiDung.forEach(hộp => {
        if (!hộp.previousElementSibling.contains(nútHiệnTại)) {
            hộp.classList.add('hide');

            
        }
    });

    let hộpCóNộiDung = document.querySelectorAll('.xoáKhiCóNộiDung');
    hộpCóNộiDung.forEach(hộp => {
        if (!hộp.previousElementSibling.previousElementSibling.contains(nútHiệnTại)) {
            hộp.classList.add('hide');
        }
    });
}



//Gọi hàm xóa video
XóaNộiDungKhiCóThêmẢnhVideoAudio('.hộpCôngViệc__thôngTin--video__chứcNăng--nútXóa', '.hộpCôngViệc__thôngTin--video')

//Gọi hàm xóa ảnh
XóaNộiDungKhiCóThêmẢnhVideoAudio('.hộpCôngViệc__thôngTin--img__ChứcNăng--nútXóa', '.hộpCôngViệc__thôngTin--img__cóNộiDung')


function hàmThayĐổiẢnhVideo(nútHTML, hộpBựHTML, hộpChứaHTML) {
    const nútThayĐổiNộiDungCôngViệc = document.querySelectorAll(nútHTML);

    nútThayĐổiNộiDungCôngViệc.forEach(nút => {
        nút.addEventListener('change', (event) => {
            let đuôiFileVideo = [
                '.mp3', '.mp4', '.avi', '.mkv', '.mov',
                '.wmv', '.flv', '.webm', '.mpeg', '.mpg',
                '.3gp'
            ];

            let đuôiFileẢnh = [
                '.jpeg', '.jpg', '.png',
                '.gif', '.tiff', '.tif',
                '.bmp', '.webp', '.svg'
            ];

            let file = event.target.files[0];
            if (file) {
                let tênFile = file.name.toLowerCase();
                let đuôiFileĐưaVào = tênFile.slice(tênFile.lastIndexOf('.')).toLowerCase();

                // Kiểm tra đuôi file và loại hộp để phân loại file ảnh hoặc video
                if (hộpBựHTML.includes('video')) {
                    if (đuôiFileVideo.includes(đuôiFileĐưaVào)) {
                        let video = nút.closest(hộpBựHTML).querySelector(hộpChứaHTML);
                        let videoURL = URL.createObjectURL(file);

                        // Thay đổi nguồn video hiện tại
                        video.src = videoURL;

                        // Nạp lại video mới
                        video.load();


                    } else {
                        let cảnhBáo = document.getElementById('thôngBáoCảnhBáo');
                        let nộiDungCảnhBáo = document.querySelector('.nộiDungThôngBáoCảnhBáo');
                        nộiDungCảnhBáo.innerHTML = 'Vui lòng chọn file video hợp lệ';
                        cảnhBáo.classList.remove('hide');
                        setTimeout(() => {
                            cảnhBáo.classList.add('hide');
                        }, 2800);
                    }
                }

                if (hộpBựHTML.includes('img')) {
                    if (đuôiFileẢnh.includes(đuôiFileĐưaVào)) {
                        let img = nút.closest(hộpBựHTML).querySelector(hộpChứaHTML);
                        let imgURL = URL.createObjectURL(file);

                        // Thay đổi nguồn img hiện tại
                        img.src = imgURL;
                    } else {
                        let cảnhBáo = document.getElementById('thôngBáoCảnhBáo');
                        let nộiDungCảnhBáo = document.querySelector('.nộiDungThôngBáoCảnhBáo');
                        nộiDungCảnhBáo.innerHTML = 'Vui lòng chọn file ảnh hợp lệ';
                        cảnhBáo.classList.remove('hide');
                        setTimeout(() => {
                            cảnhBáo.classList.add('hide');
                        }, 2800);
                    }
                }
            }


        });
    });
}


//Hàm thay đổi thay đổi ảnh video 
hàmThayĐổiẢnhVideo('.hộpCôngViệc__thôngTin--video__chứcNăng--nútThayVideo', '.hộpCôngViệc__thôngTin--video', '.hộpCôngViệc__thôngTin--video__boxChứa video')

hàmThayĐổiẢnhVideo('.hộpCôngViệc__thôngTin--video__chứcNăng--nútThayẢnh', '.hộpCôngViệc__thôngTin--img__cóNộiDung', '.hộpCôngViệc__thôngTin--img__cóNộiDung--boxChứa img')

