function kiểmTraVịTrí(el) {
    const rect = el.getBoundingClientRect();
    return (
        rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
        rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
}

function xửLýScroll() {
    const videos = document.querySelectorAll('video');

    const visibleVideos = [];

    videos.forEach((video, index) => {
        if (kiểmTraVịTrí(video)) {
            visibleVideos.push(index);
        }
    });

    videos.forEach((video, index) => {
        if (!video.parentElement.parentElement.classList.contains('hide')) {
            if (visibleVideos.includes(index)) {
                video.play();
                video.muted = true;
            } else {
                video.pause();
            }
        }
    });
}

// Gọi xử lý scroll khi trang được tải hoàn toàn
document.addEventListener('DOMContentLoaded', xửLýScroll);

// Gọi xử lý scroll khi thực hiện scroll trên trang
window.addEventListener('scroll', xửLýScroll);

document.addEventListener('play', function(e){
    var videos = document.getElementsByTagName('video');
    for(var i = 0; i < videos.length; i++){
        if(videos[i] != e.target){
            videos[i].pause();
        }
    }
}, true);
