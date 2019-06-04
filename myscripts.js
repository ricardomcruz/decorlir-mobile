$(window).scroll(function() {

  if ($(this).scrollTop()>400)
   {
      $('nav').css("background-color","rgba(255, 255, 255,1");
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
      $('footer').css("background-color","rgb(255, 255, 255");
   }
  else
   {
    $('footer').css("background-color","transparent");
   }
});



function openMenu() {
   var x = document.getElementsById("navigation");
   if (x.style.display === "flex") {
       x.style.display = "block";
   } else {
       x.style.display = "block";
   }
}








