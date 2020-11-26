$(function() {
    var nav = $(".navbar");
    $(window).scroll(function() {
        var scroll = $(window).scrollTop();
        if (scroll >= 500) {
            nav.addClass("fixed-top");
        } else {
            nav.removeClass("fixed-top");
        }
    });
});
$(function (){
    new WOW().init();
});
$(document).ready(function() {
 
    $("#owl-demo").owlCarousel({
   
      loop: true,
      center: true,
      items: 1,
      margin: 0,
     // autoplay: true,
      autoplayTimeout: 3000,
      smartSpeed: 450,
      
   
    });
   
  });
  $(window).on('load', function () { 
    $('#status').fadeOut();
    $('#preloader').delay(350).fadeOut('slow');
    $('#navbarNav').removeClass('show');
  });
  