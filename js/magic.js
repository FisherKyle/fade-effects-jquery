$(function() {

  $('.strip').hover(function(){
    // $(this).fadeOut();
  });

  $("#strip1").hover(function(){
    $('.hidden-strip', this).fadeToggle();
    $('.shown-strip', this).fadeToggle();

  });

  $("#fire").click(function() {
   $("body").toggleClass("shaded-background");
  });

});
