$(document).ready(function(){

  $('.scroll-top').hide();
  /*--------------- Navbar Toggler ---------------*/
  $('#menu').click(function(){
    $(this).toggleClass('fa-times');
    $('header').toggleClass('active');
  });

  /*--------------- Scroll-Top ---------------*/
  // On Load/Scroll
  $(window).on('load scroll',function(){

    $('#menu').removeClass('fa-times');
    $('header').removeClass('active');

    $(window).scroll(function () {
      if ($(this).scrollTop() > 100) {
        $('.scroll-top').fadeIn();
      } else {
        $('.scroll-top').fadeOut();
      }
    });
  
  });

});


