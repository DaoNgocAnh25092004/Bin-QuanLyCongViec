document.addEventListener('DOMContentLoaded', () => {
    const nútChọnNgàyTừ = document.querySelector('.nútChọnNgàyTừ')
    const nútChọnThángTừ = document.querySelector('.nútChọnThángTừ')
    const nútChọnNămTừ = document.querySelector('.nútChọnNămTừ')

    const hộpChứaDsNgàyTừ = document.getElementById('hộpChứaDsNgàyTừ');
    const hộpChứaDsThángTừ = document.getElementById('hộpChứaDsThángTừ');
    const hộpChứaDsNămTừ = document.getElementById('hộpChứaDsNămTừ');

    const dsNgàyTừ = document.getElementById('dsNgàyTừ');
    const dsThángTừ = document.getElementById('dsThángTừ');
    const dsNămTừ = document.getElementById('dsNămTừ');

    // Các biến cho "tới"
    const nútChọnNgàyTới = document.querySelector('.nútChọnNgàyTới')
    const nútChọnThángTới = document.querySelector('.nútChọnThángTới')
    const nútChọnNămTới = document.querySelector('.nútChọnNămTới')

    const hộpChứaDsNgàyTới = document.getElementById('hộpChứaDsNgàyTới');
    const hộpChứaDsThángTới = document.getElementById('hộpChứaDsThángTới');
    const hộpChứaDsNămTới = document.getElementById('hộpChứaDsNămTới');

    const dsNgàyTới = document.getElementById('dsNgàyTới');
    const dsThángTới = document.getElementById('dsThángTới');
    const dsNămTới = document.getElementById('dsNămTới');

    function lấySốNgàyCủaTháng(month, year) {
        return new Date(year, month, 0).getDate();
    }

    function updateNgàyTừ() {
        let ngàyĐượcChọn = nútChọnNgàyTừ.children[0];
        let thángTrongÔChứa = document.querySelector('.thángTừĐượcChọn').innerHTML;
        let nămTrongÔChứa = document.querySelector('.nămTừĐượcChọn').innerHTML;

        let sốNgàyTrongTháng = lấySốNgàyCủaTháng(thángTrongÔChứa, nămTrongÔChứa);

        if (parseInt(ngàyĐượcChọn.innerHTML) > sốNgàyTrongTháng) {
            ngàyĐượcChọn.innerHTML = sốNgàyTrongTháng;
        }

        dsNgàyTừ.innerHTML = '';

        for (let i = 1; i <= sốNgàyTrongTháng; i++) {
            const ngày = document.createElement('div');
            if (i % 2 == 0) {
                ngày.classList.add('option--màuĐậm--ngày');
            }
            ngày.textContent = i < 10 ? '0' + i : i;
            ngày.classList.add('day-option');

            ngày.addEventListener('click', function () {
                ngàyĐượcChọn.innerHTML = ngày.textContent;
                ẩnÔChọnLịch(hộpChứaDsNgàyTừ);
                updateNgàyTới();
            });

            dsNgàyTừ.appendChild(ngày);
        }
    }

    function updateThángTừ() {
        let thángĐượcChọn = nútChọnThángTừ.children[0];

        dsThángTừ.innerHTML = '';
        for (let i = 1; i <= 12; i++) {
            let tháng = document.createElement('div');
            tháng.textContent = i < 10 ? '0' + i : i;
            tháng.classList.add('month-option');

            if (i % 2 == 0) {
                tháng.classList.add('option--màuĐậm--ngày');
            }

            tháng.addEventListener('click', function () {
                thángĐượcChọn.innerHTML = tháng.textContent;
                ẩnÔChọnLịch(hộpChứaDsThángTừ);
                updateNgàyTừ();
                updateThángTới();
            });

            dsThángTừ.appendChild(tháng);
        }
    }

    function updateNămTừ() {
        let nămĐượcChọn = nútChọnNămTừ.children[0];

        dsNămTừ.innerHTML = '';

        const currentYear = new Date().getFullYear();
        for (let i = currentYear - 50; i <= currentYear; i++) {
            const năm = document.createElement('div');
            năm.textContent = i;
            năm.classList.add('year-option');

            if (i % 2 !== 0) {
                năm.classList.add('option--màuĐậm--ngày');
            }

            năm.addEventListener('click', function () {
                nămĐượcChọn.innerHTML = năm.textContent;
                ẩnÔChọnLịch(hộpChứaDsNămTừ);
                updateNgàyTừ();
                updateNămTới();
            });

            dsNămTừ.appendChild(năm);
        }
    }

    function updateNgàyTới() {
        let ngàyTừĐượcChọn = parseInt(nútChọnNgàyTừ.children[0].innerHTML);
        let thángTừĐượcChọn = parseInt(nútChọnThángTừ.children[0].innerHTML);
        let nămTừĐượcChọn = parseInt(nútChọnNămTừ.children[0].innerHTML);

        let ngàyĐượcChọn = nútChọnNgàyTới.children[0];
        let thángTrongÔChứa = nútChọnThángTới.children[0].innerHTML;
        let nămTrongÔChứa = nútChọnNămTới.children[0].innerHTML;

        let sốNgàyTrongTháng = lấySốNgàyCủaTháng(thángTrongÔChứa, nămTrongÔChứa);

        if (parseInt(ngàyĐượcChọn.innerHTML) > sốNgàyTrongTháng) {
            ngàyĐượcChọn.innerHTML = sốNgàyTrongTháng;
        }

        dsNgàyTới.innerHTML = '';

        for (let i = 1; i <= sốNgàyTrongTháng; i++) {
            if (nămTrongÔChứa == nămTừĐượcChọn && thángTrongÔChứa == thángTừĐượcChọn && i < ngàyTừĐượcChọn) {
                continue;
            }
            const ngày = document.createElement('div');
            if (i % 2 == 0) {
                ngày.classList.add('option--màuĐậm--ngày');
            }
            ngày.textContent = i < 10 ? '0' + i : i;
            ngày.classList.add('day-option');

            ngày.addEventListener('click', function () {
                ngàyĐượcChọn.innerHTML = ngày.textContent;
                ẩnÔChọnLịch(hộpChứaDsNgàyTới);
            });

            dsNgàyTới.appendChild(ngày);
        }
    }

    function updateThángTới() {
        let thángTừĐượcChọn = parseInt(nútChọnThángTừ.children[0].innerHTML);
        let nămTừĐượcChọn = parseInt(nútChọnNămTừ.children[0].innerHTML);

        let thángĐượcChọn = nútChọnThángTới.children[0];

        dsThángTới.innerHTML = '';
        for (let i = 1; i <= 12; i++) {
            if (nămTừĐượcChọn == nútChọnNămTới.children[0].innerHTML && i < thángTừĐượcChọn) {
                continue;
            }
            let tháng = document.createElement('div');
            tháng.textContent = i < 10 ? '0' + i : i;
            tháng.classList.add('month-option');

            if (i % 2 == 0) {
                tháng.classList.add('option--màuĐậm--ngày');
            }

            tháng.addEventListener('click', function () {
                thángĐượcChọn.innerHTML = tháng.textContent;
                ẩnÔChọnLịch(hộpChứaDsThángTới);
                updateNgàyTới();
            });

            dsThángTới.appendChild(tháng);
        }
    }

    function updateNămTới() {
        let nămTừĐượcChọn = parseInt(nútChọnNămTừ.children[0].innerHTML);

        let nămĐượcChọn = nútChọnNămTới.children[0];

        dsNămTới.innerHTML = '';

        const currentYear = new Date().getFullYear();
        for (let i = currentYear - 50; i <= currentYear; i++) {
            if (i < nămTừĐượcChọn) {
                continue;
            }
            const năm = document.createElement('div');
            năm.textContent = i;
            năm.classList.add('year-option');

            if (i % 2 !== 0) {
                năm.classList.add('option--màuĐậm--ngày');
            }

            năm.addEventListener('click', function () {
                nămĐượcChọn.innerHTML = năm.textContent;
                ẩnÔChọnLịch(hộpChứaDsNămTới);
                updateThángTới();
                updateNgàyTới();
            });

            dsNămTới.appendChild(năm);
        }
    }

    // Nút chọn lịch từ
    nútChọnNgàyTừ.addEventListener('click', () => {
        updateNgàyTừ();
        hiệnÔChọnLịch(hộpChứaDsNgàyTừ);
        ẩnÔChọnLịch(hộpChứaDsThángTừ);
        ẩnÔChọnLịch(hộpChứaDsNămTừ);

        //Ẩn bên lịch chọn tới
        ẩnÔChọnLịch(hộpChứaDsNgàyTới);
        ẩnÔChọnLịch(hộpChứaDsThángTới);
        ẩnÔChọnLịch(hộpChứaDsNămTới);
    });

    nútChọnThángTừ.addEventListener('click', () => {
        updateThángTừ();
        hiệnÔChọnLịch(hộpChứaDsThángTừ);
        ẩnÔChọnLịch(hộpChứaDsNgàyTừ);
        ẩnÔChọnLịch(hộpChứaDsNămTừ);

        //Ẩn bên lịch chọn tới
        ẩnÔChọnLịch(hộpChứaDsNgàyTới);
        ẩnÔChọnLịch(hộpChứaDsThángTới);
        ẩnÔChọnLịch(hộpChứaDsNămTới);
    });

    nútChọnNămTừ.addEventListener('click', () => {
        updateNămTừ();
        hiệnÔChọnLịch(hộpChứaDsNămTừ);
        ẩnÔChọnLịch(hộpChứaDsNgàyTừ);
        ẩnÔChọnLịch(hộpChứaDsThángTừ);

        //Ẩn bên lịch chọn tới
        ẩnÔChọnLịch(hộpChứaDsNgàyTới);
        ẩnÔChọnLịch(hộpChứaDsThángTới);
        ẩnÔChọnLịch(hộpChứaDsNămTới);
    });

    //Nút chọn lịch tới
    nútChọnNgàyTới.addEventListener('click', () => {
        updateNgàyTới();
        hiệnÔChọnLịch(hộpChứaDsNgàyTới);
        ẩnÔChọnLịch(hộpChứaDsThángTới);
        ẩnÔChọnLịch(hộpChứaDsNămTới);

        //Ẩn bên chọn ngày từ
        ẩnÔChọnLịch(hộpChứaDsNgàyTừ);
        ẩnÔChọnLịch(hộpChứaDsThángTừ);
        ẩnÔChọnLịch(hộpChứaDsNămTừ);
    });

    nútChọnThángTới.addEventListener('click', () => {
        updateThángTới();
        hiệnÔChọnLịch(hộpChứaDsThángTới);
        ẩnÔChọnLịch(hộpChứaDsNgàyTới);
        ẩnÔChọnLịch(hộpChứaDsNămTới);

        //Ẩn bên chọn ngày từ
        ẩnÔChọnLịch(hộpChứaDsNgàyTừ);
        ẩnÔChọnLịch(hộpChứaDsThángTừ);
        ẩnÔChọnLịch(hộpChứaDsNămTừ);
    });

    nútChọnNămTới.addEventListener('click', () => {
        updateNămTới();
        hiệnÔChọnLịch(hộpChứaDsNămTới);
        ẩnÔChọnLịch(hộpChứaDsNgàyTới);
        ẩnÔChọnLịch(hộpChứaDsThángTới);

        //Ẩn bên chọn ngày từ
        ẩnÔChọnLịch(hộpChứaDsNgàyTừ);
        ẩnÔChọnLịch(hộpChứaDsThángTừ);
        ẩnÔChọnLịch(hộpChứaDsNămTừ);
    });

    function hiệnÔChọnLịch(box) {
        box.classList.add('active');
    }

    function ẩnÔChọnLịch(box) {
        box.classList.remove('active');
    }

    updateNgàyTừ();
    updateThángTừ();
    updateNămTừ();
    updateNgàyTới();
    updateThángTới();
    updateNămTới();
});
