$(function() {

  $('.strip').hover(function(){
    // $(this).fadeOut();
  });

  $("#strip1").hover(function(){
    $('.hidden-strip', this).Toggle();
    $('.shown-strip', this).fadeIn();

  });

});
