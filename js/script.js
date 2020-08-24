console.log('js');

$(document).ready(function(){

  $('.menu-icon').click(function(){
    $('.top-nav').toggleClass('active');
  });


});


  $('#about').click(function(){
    $('html,body').animate({
      scrollTop: $('.intro-para').offset().top + 100}, 2000);
    });

    // $('body').click(function(){
    //   $(this).css('background','gray').css('color','$darkblue');//chaining
    //   $('p').css('border','2px solid red');
    // });

    $('body').click(function(){
    $(this).addClass('bodyClass')
  });
