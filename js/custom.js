jQuery(function($) {
  $(document).ready( function() {

               // owl carousel plugin linking here
    $('.owl-carousel').owlCarousel({
    loop:true,
    margin:40,
    nav:false,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:1
        },
        1000:{
            items:2
        }
    }
})

    // wow plugin linking here
new WOW().init();


                });
              });