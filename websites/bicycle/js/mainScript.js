$(document).ready(function(){

    $(".dropdown").hover(            
        function() {
            $('.dropdown-menu', this).stop( true, true ).slideDown("fast");
            $(this).toggleClass('open');        
        },
        function() {
            $('.dropdown-menu', this).stop( true, true ).slideUp("fast");
            $(this).toggleClass('open');       
        }
    );
    // SEARCH
    (function(){

      $('#itemslider').carousel({ interval: 3000 });
    }());

    (function(){
      $('.carousel-showmanymoveone .item').each(function(){
        var itemToClone = $(this);

        for (var i=1;i<3;i++) {
          itemToClone = itemToClone.next();


          if (!itemToClone.length) {
            itemToClone = $(this).siblings(':first');
          }

          itemToClone.children(':first-child').clone()
            .addClass("cloneditem-"+(i))
            .appendTo($(this));
        }
      });
    }());
    var offcanvas = function() {

    var $clone = $('#fh5co-menu-wrap').clone();
    $clone.attr({
      'id' : 'offcanvas-menu'
    });
    $clone.find('> ul').attr({
      'class' : '',
      'id' : ''
    });

    $('#fh5co-page').prepend($clone);

    // click the burger
    $('.js-fh5co-nav-toggle').on('click', function(){

      if ( $('body').hasClass('fh5co-offcanvas') ) {
        $('body').removeClass('fh5co-offcanvas');
      } else {
        $('body').addClass('fh5co-offcanvas');
      }
      // $('body').toggleClass('fh5co-offcanvas');

    });

    $(window).resize(function(){
      var w = $(window);

      if ( w.width() > 769 ) {
        if ( $('body').hasClass('fh5co-offcanvas') ) {
          $('body').removeClass('fh5co-offcanvas');
        }
      }

    }); 

  }
  // Animations
  var contentWayPoint = function() {
    var i = 0;
    $('.animate-box').waypoint( function( direction ) {

      if( direction === 'down' && !$(this.element).hasClass('animated') ) {
        
        i++;

        $(this.element).addClass('item-animate');
        setTimeout(function(){

          $('body .animate-box.item-animate').each(function(k){
            var el = $(this);
            setTimeout( function () {
              el.addClass('fadeInUp animated');
              el.removeClass('item-animate');
            },  k * 200, 'easeInOutExpo' );
          });
          
        }, 100);
        
      }

    } , { offset: '85%' } );
  };
  // Document on load.
  $(function(){

    offcanvas();
    contentWayPoint();
  });
  $('.brand-logo li').hover(function(){
    $(this).find(".brand-hover").removeClass("less-opacity");
    $(this).find(".brand-f").addClass('less-opacity');
  },function(){
    $(this).find(".brand-hover").addClass("less-opacity");
    $(this).find(".brand-f").removeClass('less-opacity');
  })
});