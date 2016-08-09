$(function() {

  $('.strip').hover(function(){
    // $(this).fadeOut();
  });

  $("#strip1").hover(function(){
    $('.shown-strip').fadeToggle(0,function(){
      $('.hidden-strip').fadeToggle();
    });

  });

  $("#fire").click(function() {
   $("body").toggleClass("shaded-background");
  });

  $(".strip").hover(function() {
    $(this).toggleClass("highlighter");
  });




});
