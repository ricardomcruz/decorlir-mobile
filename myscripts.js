$(window).scroll(function() {

  if ($(this).scrollTop()>200)
   {
      $('nav').css("background-color","rgba(197, 197, 197,1");
   }
  else
   {
    $('nav').css("background-color","rgba(197, 197, 197,0");
   }
});


$(window).scroll(function() {

  if ($(this).scrollTop()>200)
   {
      $("#logo img").attr("src","img/estudonovologo.png");
   }
  else
   {
    $("#logo img").attr("src","img/logo.png");
   }
});


$(window).scroll(function() {

  if ($(this).scrollTop()>200)
   {
      $('footer').css("background-color","rgba(197, 197, 197,1");
   }
  else
   {
    $('footer').css("background-color","rgba(197, 197, 197,0");
   }
});



