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
    $('.chatbot-container').animate({
      'bottom': '8'
    }, {
      duration: 400,
      complete: () => {
        $('.chatbot-container').animate({
          bottom: 5
        }, {
          duration: 400,
          complete: loop
        })
      }
    })
  }
  loop()
});