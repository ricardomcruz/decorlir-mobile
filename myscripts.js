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