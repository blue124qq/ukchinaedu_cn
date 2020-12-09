$(document).ready(function(){

  $("#prices_btn").click(function(){
    ga('send', 'event', 'Prices btn');
  });



  $("#subscribePro").click(function(){
    ga('send', 'event', 'Subscribe PRO');
    });

  $("#subscribeGuru").click(function(){
    ga('send', 'event', 'Subscribe Guru');
  });

  $("#subscribeBusiness").click(function(){
    ga('send', 'event', 'Subscribe Busines');
  });



  $(".next").click(function(){
    ga('send', 'event', 'testimonials next');
  });

  $(".prev").click(function(){
    ga('send', 'event', 'testimonials prev');
  });

  $(".dot").click(function(){
    ga('send', 'event', 'testimonials dots');
  });


});
