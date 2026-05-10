(function($) {
 
  if ($('#back-to-top').length) {
    $('#back-to-top').on('click', function (e) {
       $.fn.fullpage.moveTo(1,0);
    });
  }
  'use strict';
  
  // variables
  if($(window).width()>768){

  var $isAnimatedSecond = $('.second .is-animated'),
      $isAnimatedSecondSingle = $('.second .is-animated__single'),
      $isAnimatedThird = $('.third .is-animated'),
      $isAnimatedThirdSingle = $('.third .is-animated__single'),
      $isAnimatedFourth = $('.fourth .is-animated'),
      $isAnimatedFourthSingle = $('.fourth .is-animated__single'),
      $isAnimatedFooter = $('.footer .is-animated'),
      $isAnimatedFooterSingle = $('.footer .is-animated__single');
     
  // initialize fullPage
  $('#fullpage').fullpage({
    onLeave: function(index, nextIndex, direction) {
    
      // first animation
      $('.logo').css('display', 'block');
      $('.logo-color').css('display', 'none');
      if(nextIndex>1) {
         $('#back-to-top').addClass('show');
        // từ 1 chuyển sang 2
        $('.logo-color').css('display', 'block');
        $('.logo').css('display', 'none');   
        if( index == 1 && nextIndex == 2 ) { 

         $isAnimatedThird.eq(0).addClass('animated fadeInLeft').css('animation-delay', '.3s'); 
          $isAnimatedThird.eq(1).addClass('animated fadeInDown').css('animation-delay', '.9s');
          $isAnimatedThird.eq(2).addClass('animated fadeInRight').css('animation-delay', '.6s'); 
        }

        else if( ( index == 1 || index == 2) && nextIndex == 3 ) {
          $isAnimatedSecond.addClass('animated zoomIn').css('animation-delay', '.3s'); 
        }
        // từ 1,2,3 chuyển sang 4
        else if( ( index == 1 || index == 2 || index == 3) && nextIndex == 4 ) {
          
         
        }
        
        // từ 1,2,3,4 chuyển sang 5
        else if( ( index == 1 || index == 2 || index == 3 || index == 4) && nextIndex == 5 ) {
          $isAnimatedFourth.addClass('animated zoomIn').css('animation-delay', '.6s');
          $isAnimatedFourthSingle.addClass('animated lightSpeedIn').css('animation-delay', '1.2s');
        }
        else if( ( index == 1 || index == 2 || index == 3 || index == 4 || index == 5) && nextIndex == 6 ) {
            $isAnimatedFooter.addClass('animated zoomIn').css('animation-delay', '.6s');
            $isAnimatedFooterSingle.addClass('animated fadeInUp').css('animation-delay', '1.2s');
        } 
      } else {
         $('#back-to-top').removeClass('show');
      }
      
    }
  });
  }
  else{
    $('section').addClass('animated');
    if ($('#back-to-top').length) {
        var scrollTrigger = 100, // px
            backToTop = function () {
                var scrollTop = $(window).scrollTop();
                if (scrollTop > scrollTrigger) {
                    $('#back-to-top').addClass('show');
                } else {
                    $('#back-to-top').removeClass('show');
                }
            };
        backToTop();
        $(window).on('scroll', function () {
            backToTop();
        });
        $('#back-to-top').on('click', function (e) {
            e.preventDefault();
            $('html,body').animate({
                scrollTop: 0
            }, 700);
        });
    }
  }


})(jQuery);
