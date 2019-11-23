(function($) {

  /*
   Start  Script of squire
   'SELECT * WHERE {?s ?p ?o} LIMIT 10'
  */

   var sendDataToServer = (data) => {
     var url = '/sparql-endpoint/endpoint-results';
     $.ajax({
        method: 'POST',
        // dataType: 'json',
        url: url,
        contentType: "application/json; charset=utf-8",
        processData:false,
        data: JSON.stringify(data),
        success: (data) => {
           alert('success: ' + data + ' results');
            console.log(data);
      }
     });
   }

  $('#relax-button').click( () => {
      var url = 'http://opendatacommunities.org/sparql.json';
      var query = $('#query-field').val();
      $.ajax({
        method: 'POST',
        dataType: 'json',
        url: url,
        data: {query: query},
        success: (data) => {
          sendDataToServer(data);
          alert('success: ' + data.results.bindings.length + ' results');
          console.log(data);
        }
      });
  });



  /*
    End Script of squire 
  */

  $(window).scroll(function() {
    if ($(this).scrollTop() > 100) {
      $('.scrollup').fadeIn();
    } else {
      $('.scrollup').fadeOut();
    }
  });

  $('.scrollup').click(function() {
    $("html, body").animate({
      scrollTop: 0
    }, 1000);
    return false;
  });

  // local scroll
  jQuery('.navbar').localScroll({
    hash: true,
    offset: {
      top: 0
    },
    duration: 800,
    easing: 'easeInOutExpo'
  });

  $('.scrollto').on('click', function(e) {
      e.preventDefault();
      var target = $(this.hash);
      $('html, body').animate({
        scrollTop: target.offset().top - 60
      }, 1500, 'easeInOutExpo');
  });


  // portfolio
  if ($('.isotopeWrapper').length) {

    var $container = $('.isotopeWrapper');
    var $resize = $('.isotopeWrapper').attr('id');
    // initialize isotope

    $container.isotope({
      itemSelector: '.isotopeItem',
      resizable: false, // disable normal resizing
      masonry: {
        columnWidth: $container.width() / $resize
      }

    });

    $('#filter a').click(function() {

      $('#filter a').removeClass('current');
      $(this).addClass('current');
      var selector = $(this).attr('data-filter');
      $container.isotope({
        filter: selector,
        animationOptions: {
          duration: 1000,
          easing: 'easeOutQuart',
          queue: false
        }
      });
      return false;
    });


    $(window).smartresize(function() {
      $container.isotope({
        // update columnWidth to a percentage of container width
        masonry: {
          columnWidth: $container.width() / $resize
        }
      });
    });
  }

 

  // fancybox
  jQuery(".fancybox").fancybox();

  //testimonial
  jQuery('.testimonials-slider').flexslider({
    animation: "slide",
    directionNav: true,
    controlNav: true,
    pauseOnHover: true,
    slideshowSpeed: 4000,
    direction: "horizontal" //Direction of slides
  });

  if (Modernizr.mq("screen and (max-width:1024px)")) {
    jQuery("body").toggleClass("body");

  } else {
    var s = skrollr.init({
      mobileDeceleration: 1,
      edgeStrategy: 'set',
      forceHeight: true,
      smoothScrolling: true,
      smoothScrollingDuration: 300,
      easing: {
        WTF: Math.random,
        inverted: function(p) {
          return 1 - p;
        }
      }
    });
  }
  

  

function initNice() {
    if ($(window).innerWidth() <= 960) {
      $('html').niceScroll().remove();
    } else {
      $("html").niceScroll({
        zindex: 999,
        cursorborder: "",
        cursorborderradius: "2px",
        cursorcolor: "#191919",
        cursoropacitymin: 0.5
      });
    }
  }
  $(window).load(initNice);
  $(window).resize(initNice);

})(jQuery);
