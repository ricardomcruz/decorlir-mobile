$(window).scroll(function() {

  if ($(this).scrollTop()>400)
   {
      $('nav').css("background-color","rgba(220, 220, 220,1");
   }
  else
   {
    $('nav').css("background-color","rgba(220, 220, 220,0");
   }
});


$(window).scroll(function() {

  if ($(this).scrollTop()>400)
   {
      $("#logo img").attr("src","img/estudonovologo.png");
   }
  else
   {
    $("#logo img").attr("src","img/logo.png");
   }
});


$(window).scroll(function() {

  if ($(this).scrollTop()>400)
   {
      $('footer').css("background-color","rgba(197, 197, 197,1");
   }
  else
   {
    $('footer').css("background-color","rgba(197, 197, 197,0");
   }
});





