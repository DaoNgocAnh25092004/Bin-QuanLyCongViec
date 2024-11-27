//Xử lý đóng mở hộp giờ tùy chọn
const iconĐóngGiờ = document.querySelector('.giờ--hộp>div:first-child>div:nth-child(2)')
const nútMởHộpChọnGiờ = document.querySelector('.hộpChọnNgày > div:last-child')
const hộpGiờ = document.getElementById('giờ')
const giờHộp = document.querySelector('.giờ--hộp');
const giờChứcNăng = document.querySelector('.giờ--chứcNăng');
const hộpHiệuỨngGiờ = document.querySelector('#giờ > div')

iconĐóngGiờ.addEventListener('click', () => {
    hộpHiệuỨngGiờ.classList.remove('hiệnHộpGiờ')
    hộpHiệuỨngGiờ.classList.add('ẩnHộpGiờ')
    setTimeout(() => {
        hộpGiờ.classList.add('hide')
    }, 480);
})

nútMởHộpChọnGiờ.addEventListener('click', () => {
    hộpHiệuỨngGiờ.classList.add('hiệnHộpGiờ')
    hộpHiệuỨngGiờ.classList.remove('ẩnHộpGiờ')
    hộpGiờ.classList.remove('hide')
})

hộpGiờ.addEventListener('click', function (event) {
    if (event.target.closest('.giờ--hộp') === null && event.target.closest('.giờ--chứcNăng') === null) {
        hộpHiệuỨngGiờ.classList.remove('hiệnHộpGiờ')
        hộpHiệuỨngGiờ.classList.add('ẩnHộpGiờ')
        setTimeout(() => {
            hộpGiờ.classList.add('hide')
        }, 480);
    }
});

//Update thời gian thực 
function updateNgàyHiệnTạiMenuDướiHeader() {
    const ôChứaNgàyHômNay = document.querySelector('.menu__ngay--chiTiết');
    let currentDate = new Date();

    // Lấy ngày, tháng và năm hiện tại
    let day = String(currentDate.getDate()).padStart(2, '0');
    let month = String(currentDate.getMonth() + 1).padStart(2, '0');
    let year = currentDate.getFullYear();

    // Định dạng ngày thành chuỗi "dd/MM/yyyy"
    let formattedDate = `${day}/${month}/${year}`

    // Cập nhật nội dung phần tử với ngày hiện tại
    ôChứaNgàyHômNay.textContent = formattedDate;
}

//Gọi hàm update ngày hiện tại menu dưới header
updateNgàyHiệnTạiMenuDướiHeader()

//Xử lý chọn chứ năng trong menu hộp
function thayNộiDungChọnMenuHộp() {
    let nútMenuTheoNgay = document.querySelector('.menu__ngay div:first-child');
    let nộiDungMenuLịch = document.querySelector('.menu__ngay--tên')
    let chứcNăngChọnLịchLàmViệc = document.querySelectorAll('.hộpChọnNgày > div')
    
    chứcNăngChọnLịchLàmViệc.forEach ((item, index) => {
        item.addEventListener('click', () => {
            if(index == 0) {
                nộiDungMenuLịch.innerHTML = 'Hôm nay' 
            }
            if(index == 1) {
                nộiDungMenuLịch.innerHTML = 'Tuần nay' 
            }
            if(index == 2) {
                nộiDungMenuLịch.innerHTML = 'Tháng nay' 
            }
            if(index == 3) {
                nộiDungMenuLịch.innerHTML = 'Tùy chọn' 
            }
        })
    })
   
}
thayNộiDungChọnMenuHộp() 