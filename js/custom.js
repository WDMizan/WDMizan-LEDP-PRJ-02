$(document).ready(function(){
   $navOffset=$('#navigation').offset().top;
            
    // navOffset ends 
        $top_offset=300;
        $('.top_to').click(function(){
            $('html,body').animate({
                scrollTop:0
            },800);
        });
        $(window).scroll(function(){
            $scrolling=$(this).scrollTop();
            
            if($scrolling > $navOffset){
                $("#navigation").addClass('navfixed');
            }else{
                $("#navigation").removeClass('navfixed');
            }
        // navOffset ends
            if($scrolling > $top_offset){
                $('.top_to').fadeIn();
            }else{
                $('.top_to').fadeOut();
            }
        });
    
//      slick js start
    $('.mizan_slide').slick({
  dots: true,
  infinite: true,
  autoplay: true,
  speed: 3000,
  slidesToShow: 4,
  slidesToScroll: 2,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3,
        infinite: true,
        dots: true
      }
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2
      }
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }
    // You can unslick at a given breakpoint now by adding:
    // settings: "unslick"
    // instead of a settings object
  ]
});
    
  $('.miyaad_slide').slick({
  dots: true,
  infinite: true,
  autoplay: true,
  speed: 3000,
  slidesToShow: 6,
  slidesToScroll: 2,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3,
        infinite: true,
        dots: true
      }
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2
      }
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }
    // You can unslick at a given breakpoint now by adding:
    // settings: "unslick"
    // instead of a settings object
  ]
});   
    
    
});