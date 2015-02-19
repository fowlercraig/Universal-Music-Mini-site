$( document ).ready(function() {

  $(function($) {
    var scrollElement = 'html, body';
    $('html, body').each(function () {
      var initScrollTop = $(this).attr('scrollTop');
      $(this).attr('scrollTop', initScrollTop + 1);
      if ($(this).attr('scrollTop') == initScrollTop + 1) {
        scrollElement = this.nodeName.toLowerCase();
        $(this).attr('scrollTop', initScrollTop);
        return false;
      }    
    });
  
    // Smooth scrolling for internal links
    $("a[href^='#']").click(function(event) {
      event.preventDefault();
  
      var $this = $(this),
      target = this.hash,
      $target = $(target);
  
      $(scrollElement).stop().animate({
        'scrollTop': $target.offset().top - 50
      }, 300, 'swing', function() {
        window.location.hash = target;
      });
  
    });
  });

  $window = $(window);

  $('.page-head').each(function(){
    var $bgobj = $(this);
    $(window).scroll(function() {
      var yPos = ($window.scrollTop() / $bgobj.data('speed')); 
      var coords = '50% '+ yPos + 'px';
      $bgobj.css({ backgroundPosition: coords });
    });

  }); 

  $('#carousel').slick({
    dots: true,
    infinite: true,
    speed: 1000,
    cssEase: 'ease',
    slidesToShow: 6,
    slidesToScroll: 6,
    //autoplay: true,
    autoplaySpeed: 2000,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 4,
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

  $("#form-wrapper").sizer();
  $("#youtube").sizer();
  $("#youtube").fitVids();

});