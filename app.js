$(function () {
  let header = $("#header");
  let headerH = header.innerHeight();
  let scrollPos = $(window).scrollTop();
  $(window).on("scroll load resize", function () {
    headerH = header.innerHeight();
    scrollPos = $(this).scrollTop();
    console.log(headerH);
    if (scrollPos > headerH) {
      header.addClass("fixed");
    } else {
      header.removeClass("fixed");
    }
  });
});
