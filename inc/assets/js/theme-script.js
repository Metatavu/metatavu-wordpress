jQuery(function($) {
  'use strict';

  $('.custom-page-scroller > *').on('click', function(e) {
    var elem = $(this).find('a:first');
    var target = elem.length > 0 ? elem.hash : this.hash;
    if ($('.custom-page-scroller').hasClass('root')) {
      e.preventDefault()
    }
    if ($('#navigation').hasClass('closed')) {
      scroll(target)
    } else {
      closeNavigation();
      scroll(target)
    }
  });

  function scroll(target) {
    var $target = $(target);
    $('html, body').animate({
      'scrollTop': $target.offset().top - 70
    }, 900, 'swing')
  }
  
  $(document).on('click', '.navigation-toggle', function(e) {
    e.preventDefault();
    if ($('#navigation').hasClass('closed')) {
      openNavigation()
    } else {
      closeNavigation()
    }
  });

  function openNavigation() {
    $('#navigation').slideDown('200');
    $('#navigation').removeClass('closed')
  }

  function closeNavigation() {
    $('#navigation').slideUp('200');
    $('#navigation').addClass('closed')
  }

  function loop() {

    $('.chatbot-wrap').animate({
      'bottom': '3'
    }, {
      duration: 400,
      complete: () => {
        $('.chatbot-wrap').animate({
          bottom: '8'
        }, {
          duration: 400,
          complete: loop
        })
      }
    })
  }
  loop();

  $(document).on('click', '.more-products', function (event) {
    event.preventDefault();
    $('.type-page').slideDown({
      start: function () {
        $(this).css({
          display: "flex"
        })
      },
      done: function () {
        $('.more-products').hide();
      }
    });
  });

  $(document).on('click', '.more-projects', function (event) {
    event.preventDefault();
    $('.category-projekti').slideDown({
      start: function () {
        $(this).css({
          display: "block"
        })
      },
      done: function () {
        $('.more-projects').hide();
      }
    });
  });
  
});