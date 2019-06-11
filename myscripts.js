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


class Slideshow {

   constructor() {
     this.initSlides();
     this.initSlideshow();
   }
 
   // Set a `data-slide` index on each slide for easier slide control.
   initSlides() {
     this.container = $('[data-slideshow]');
     this.slides = this.container.find('img');
     this.slides.each((idx, slide) => $(slide).attr('data-slide', idx));
   }
 
   // Pseudo-preload images so the slideshow doesn't start before all the images
   // are available.
   initSlideshow() {
     this.imagesLoaded = 0;
     this.currentIndex = 0;
     this.setNextSlide();
     this.slides.each((idx, slide) => {
       $('<img>').on('load', $.proxy(this.loadImage, this)).attr('src', $(slide).attr('src'));
     });
   }
 
   // When one image has loaded, check to see if all images have loaded, and if
   // so, start the slideshow.
   loadImage() {
     this.imagesLoaded++;
     if (this.imagesLoaded >= this.slides.length) { this.playSlideshow() }
   }
 
   // Start the slideshow.
   playSlideshow() {
     this.slideshow = window.setInterval(() => { this.performSlide() }, 3500);
   }
 
   // 1. Previous slide is unset.
   // 2. What was the next slide becomes the previous slide.
   // 3. New index and appropriate next slide are set.
   // 4. Fade out action.
   performSlide() {
     if (this.prevSlide) { this.prevSlide.removeClass('prev fade-out') }
 
     this.nextSlide.removeClass('next');
     this.prevSlide = this.nextSlide;
     this.prevSlide.addClass('prev');
 
     this.currentIndex++;
     if (this.currentIndex >= this.slides.length) { this.currentIndex = 0 }
 
     this.setNextSlide();
 
     this.prevSlide.addClass('fade-out');
   }
 
   setNextSlide() {
     this.nextSlide = this.container.find(`[data-slide="${this.currentIndex}"]`).first();
     this.nextSlide.addClass('next');
   }
 
 }
 
 $(document).ready(function() {
   new Slideshow;
 });
 




