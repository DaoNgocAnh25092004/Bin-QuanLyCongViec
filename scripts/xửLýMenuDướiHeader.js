window.addEventListener('scroll', function() {
    var menu = document.getElementById('menu');
    if (window.scrollY > 20) {
        menu.classList.add('shadow');
    } else {
        menu.classList.remove('shadow');
    }
});