// 슬라이더 박스 1
let SliderBox1__i = 0;

setInterval(function () {
    $('.slider-box-1').attr('data-index', ++SliderBox1__i % 3);
}, 3000);

// 공지사항 팝업1
$('.notice-list > ul > li:first-child > a').click(function () {
    $('.notice-1-popup').show();
});

$('.notice-1-popup .btn-close, .notice-1-popup .btn-close-2').click(function () {
    $('.notice-1-popup').hide();
});

