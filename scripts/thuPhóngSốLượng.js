function ápDụngThuPhóng(element) {
    var giáTrị = parseInt(element.innerHTML, 10);
    if (giáTrị >= 0 && giáTrị < 10) {
        element.style.transform = 'scale(1)';
    } else if (giáTrị >= 10 && giáTrị < 100) {
        element.style.transform = 'scale(0.8)';
    } else {
        element.style.transform = 'scale(0.6)';
    }
}

const sốLượngCvĐếnHạn = document.querySelector('.menu__việcGầnĐếnHạn--sốLượng span');

ápDụngThuPhóng(sốLượngCvĐếnHạn);