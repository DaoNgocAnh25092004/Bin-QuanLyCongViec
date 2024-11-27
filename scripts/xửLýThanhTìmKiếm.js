const nútHiểnChủĐềCôngViệc = document.querySelector('.chânTrang__dsXemSau img')

nútHiểnChủĐềCôngViệc.addEventListener('click', (event) => {
    event.stopPropagation();
    nútHiểnChủĐềCôngViệc.nextElementSibling.classList.toggle('hide')

     //Tắ menu hộp chức năng
     tắtMenuChứcNăngHộpChính()

     //Tắt menu khi thêm file ảnh công việc
     tắtMenuThêmFile()


     //Tắt menu xóa ảnh trong công việc
     tắtMenuXóaFile()

     //Tắt menu lọc dưới header
     tắtMenuLọcDướiHeader()
})

document.addEventListener('click', (event) => {
    if (!nútHiểnChủĐềCôngViệc.nextElementSibling.classList.contains('hide') && !nútHiểnChủĐềCôngViệc.nextElementSibling.contains(event.target)) {
        nútHiểnChủĐềCôngViệc.nextElementSibling.classList.add('hide');
    }
});