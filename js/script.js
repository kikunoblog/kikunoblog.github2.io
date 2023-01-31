// 横からスライド
//if (window.matchMedia('(max-width: 1024px) and (min-width:320px)').matches) {
/* ウィンドウサイズ320以上、以下の処理を記述 */
$(function () {
  /*.js-menu-buttonをクリックしたらp-sidebarにis-openクラスが付与される*/
  /*.js-menu-buttonをクリックしたらl-containerにis-openクラスが付与される*/
  /*.js-menu-buttonをクリックしたらbodyが固定される*/
  $(".js-menu-button").on("click", function () {
    $(".p-sidebar ").toggleClass("is-open");
    $(".l-container").toggleClass("is-open");
    $("body").toggleClass("fixed");
    
  });

    /*js-menu-close-buttonをクリックしたらis-openクラスを削除 bodyに付与されていたfixedを削除*/
  $(".js-menu-close-button").on("click", function () {
    $(".p-sidebar").removeClass("is-open");
    $(".l-container").removeClass("is-open");
    $("body").toggleClass("fixed");
  });
});
