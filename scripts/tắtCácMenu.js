//Tắt menu chức năng hộp chính
function tắtMenuChứcNăngHộpChính() {
    let nútMenuCôngViệcChính = document.querySelectorAll('.hộpCôngViệc__nútChứcNăngChính');
    nútMenuCôngViệcChính.forEach(element => {
        let parentElement = element.parentElement;
        let hộpThôngTin = parentElement.querySelector('.hộpChọnTùyChỉnhCôngViệc');
        let img = element.querySelector('img');

        hộpThôngTin.classList.add('hide');
        img.setAttribute('src', 'images/MởChứcNăng.png');
    })
}

//Tắt menu chức năng chủ đê
function tắtMenuChủĐề() {
    let nútHiểnChủĐềCôngViệc = document.querySelector('.chânTrang__dsXemSau img').nextElementSibling
    nútHiểnChủĐềCôngViệc.classList.add('hide')
}

//Tắt menu chức năng thêm file
function tắtMenuThêmFile() {
    let menuFile = document.querySelector('.menu__gửiFileKhiThêmCôngViệc');
    menuFile.classList.add('hide')
}

//Tắt menu xóa file 
function tắtMenuXóaFile() {
    let nútXóaNộiDungCôngViệcImg = document.querySelectorAll('.hộpCôngViệc__thôngTin--img__ChứcNăng--nútXóa')

    nútXóaNộiDungCôngViệcImg.forEach(nút => {
        let boxChứaThôngBáoCóNộiDung = nút.nextElementSibling.nextElementSibling

        let hộpChứaNộiDung = nút.parentNode.parentNode.nextElementSibling;
        if (!hộpChứaNộiDung.classList.contains('hide')) {

            boxChứaThôngBáoCóNộiDung.classList.add('hide')
        } else {
            let hộpChứaNộiDung = nút.nextElementSibling;
            hộpChứaNộiDung.classList.add('hide')
        }
    })

    let nútXóaNộiDungCôngViệcVideo = document.querySelectorAll('.hộpCôngViệc__thôngTin--video__chứcNăng--nútXóa')
    nútXóaNộiDungCôngViệcVideo.forEach(nút => {
        let boxChứaThôngBáoCóNộiDung = nút.nextElementSibling.nextElementSibling

        let hộpChứaNộiDung = nút.parentNode.parentNode.nextElementSibling;
        if (!hộpChứaNộiDung.classList.contains('hide')) {

            boxChứaThôngBáoCóNộiDung.classList.add('hide')
        } else {
            let hộpChứaNộiDung = nút.nextElementSibling;
            hộpChứaNộiDung.classList.add('hide')
        }
    })
}

//Tắt menu dưới lọc tìm kiếm dưới header
function tắtMenuLọcDướiHeader() {
    menus.forEach(menu => {
        menu.hop.classList.add('hide');
        menu.icon.src = menu.imgOpen;
    });
}