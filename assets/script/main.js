var hamburger = $('.hamburger-menu');

// OPEN/CLOSEボタンをクリックしたら
$('.hamburger-button').on('click', function () {

    // .hamburgerの表示・非表示を繰り返す
    hamburger.toggleClass('hamburger-menu-active');

});

// 画面幅のサイズが変わったら
$(window).on('resize', function () {

    // ハンバーガーメニューを閉じる
    hamburger.removeClass('hamburger-menu-active');
});

// 3つの特色の表示（左方向）
$('.js-fadein-left').waypoint({
    handler: function (direction) {
        // 要素が画面中央に来るとここが実行される
        if (direction === 'down') {
            /**
             * 下方向のスクロール
             * イベント発生元の要素に
             * fadeInLeftアニメーションを付けることで
             * アニメーションを開始
             */
            $(this.element)
                .addClass('animate__fadeInLeft');
        }
    },

    // 要素が画面中央に来たらhandlerを実行
    offset: '50%',
});

// 3つの特色の表示（右方向）
$('.js-fadein-right').waypoint({
    handler: function (direction) {
        // 要素が画面中央に来るとここが実行される
        if (direction === 'down') {
            /**
             * 下方向のスクロール
             * イベント発生元の要素に
             * fadeInrightアニメーションを付けることで
             * アニメーションを開始
             */
            $(this.element)
                .addClass('animate__fadeInRight');
        }
    },

    // 要素が画面中央に来たらhandlerを実行
    offset: '50%',
});

// タブ
$('#smarttab').smartTab({
    enableUrlHash: false, // タブidにもとづいたURLハッシュの付与を無効
    autoAdjustHeight: false
});

//アンカーリンク スムーズスクロール
$(function () {
    $('a[href^="#"]').click(function () {
        var speed = 500; // スクロール速度(ミリ秒)
        var href = $(this).attr("href");
        var target = $(href == "#" || href == "" ? 'html' : href);
        var position = target.offset().top;
        $('html').animate({ scrollTop: position }, speed, 'swing');
        return false;
    });
});

$('a[href^="#"]').click(function () {
    hamburger.removeClass('hamburger-menu-active');
});