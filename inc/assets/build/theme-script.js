(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
'use strict';

jQuery(function ($) {
  'use strict';

  $('.custom-page-scroller > *').on('click', function (e) {
    var elem = $(this).find('a:first');
    var target = elem.length > 0 ? elem.hash : this.hash;
    if ($('.custom-page-scroller').hasClass('root')) {
      console.log("aaa");
      e.preventDefault();
    }
    if ($('#navigation').hasClass('closed')) {
      console.log("uuu");
      scroll(target);
    } else {
      closeNavigation();
      console.log("gggg");
      scroll(target);
    }
  });

  function scroll(target) {
    var $target = $(target);
    console.log(target);
    $('html, body').animate({
      'scrollTop': $target.offset().top - 70
    }, 900, 'swing');
  }

  $(document).on('click', '.navigation-toggle', function (e) {
    e.preventDefault();
    if ($('#navigation').hasClass('closed')) {
      openNavigation();
    } else {
      closeNavigation();
    }
  });

  function openNavigation() {
    $('#navigation').slideDown('200');
    $('#navigation').removeClass('closed');
  }

  function closeNavigation() {
    $('#navigation').slideUp('200');
    $('#navigation').addClass('closed');
  }

  function loop() {
    $('.chatbot-container').animate({
      'bottom': '8'
    }, {
      duration: 400,
      complete: function complete() {
        $('.chatbot-container').animate({
          bottom: 5
        }, {
          duration: 400,
          complete: loop
        });
      }
    });
  }
  loop();
});

},{}]},{},[1])
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJhc3NldHMvanMvdGhlbWUtc2NyaXB0LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzs7QUNBQSxPQUFPLFVBQVMsQ0FBVCxFQUFZO0FBQ2pCOztBQUVBLElBQUUsMkJBQUYsRUFBK0IsRUFBL0IsQ0FBa0MsT0FBbEMsRUFBMkMsVUFBUyxDQUFULEVBQVk7QUFDckQsUUFBSSxPQUFPLEVBQUUsSUFBRixFQUFRLElBQVIsQ0FBYSxTQUFiLENBQVg7QUFDQSxRQUFJLFNBQVMsS0FBSyxNQUFMLEdBQWMsQ0FBZCxHQUFrQixLQUFLLElBQXZCLEdBQThCLEtBQUssSUFBaEQ7QUFDQSxRQUFJLEVBQUUsdUJBQUYsRUFBMkIsUUFBM0IsQ0FBb0MsTUFBcEMsQ0FBSixFQUFpRDtBQUMvQyxjQUFRLEdBQVIsQ0FBWSxLQUFaO0FBQ0EsUUFBRSxjQUFGO0FBQ0Q7QUFDRCxRQUFJLEVBQUUsYUFBRixFQUFpQixRQUFqQixDQUEwQixRQUExQixDQUFKLEVBQXlDO0FBQ3ZDLGNBQVEsR0FBUixDQUFZLEtBQVo7QUFDQSxhQUFPLE1BQVA7QUFDRCxLQUhELE1BR087QUFDTDtBQUNBLGNBQVEsR0FBUixDQUFZLE1BQVo7QUFDQSxhQUFPLE1BQVA7QUFDRDtBQUNGLEdBZkQ7O0FBaUJBLFdBQVMsTUFBVCxDQUFnQixNQUFoQixFQUF3QjtBQUN0QixRQUFJLFVBQVUsRUFBRSxNQUFGLENBQWQ7QUFDQSxZQUFRLEdBQVIsQ0FBWSxNQUFaO0FBQ0EsTUFBRSxZQUFGLEVBQWdCLE9BQWhCLENBQXdCO0FBQ3RCLG1CQUFhLFFBQVEsTUFBUixHQUFpQixHQUFqQixHQUF1QjtBQURkLEtBQXhCLEVBRUcsR0FGSCxFQUVRLE9BRlI7QUFHRDs7QUFFRCxJQUFFLFFBQUYsRUFBWSxFQUFaLENBQWUsT0FBZixFQUF3QixvQkFBeEIsRUFBOEMsVUFBUyxDQUFULEVBQVk7QUFDeEQsTUFBRSxjQUFGO0FBQ0EsUUFBSSxFQUFFLGFBQUYsRUFBaUIsUUFBakIsQ0FBMEIsUUFBMUIsQ0FBSixFQUF5QztBQUN2QztBQUNELEtBRkQsTUFFTztBQUNMO0FBQ0Q7QUFDRixHQVBEOztBQVNBLFdBQVMsY0FBVCxHQUEwQjtBQUN4QixNQUFFLGFBQUYsRUFBaUIsU0FBakIsQ0FBMkIsS0FBM0I7QUFDQSxNQUFFLGFBQUYsRUFBaUIsV0FBakIsQ0FBNkIsUUFBN0I7QUFDRDs7QUFFRCxXQUFTLGVBQVQsR0FBMkI7QUFDekIsTUFBRSxhQUFGLEVBQWlCLE9BQWpCLENBQXlCLEtBQXpCO0FBQ0EsTUFBRSxhQUFGLEVBQWlCLFFBQWpCLENBQTBCLFFBQTFCO0FBQ0Q7O0FBRUQsV0FBUyxJQUFULEdBQWdCO0FBQ2QsTUFBRSxvQkFBRixFQUF3QixPQUF4QixDQUFnQztBQUM5QixnQkFBVTtBQURvQixLQUFoQyxFQUVHO0FBQ0QsZ0JBQVUsR0FEVDtBQUVELGdCQUFVLG9CQUFNO0FBQ2QsVUFBRSxvQkFBRixFQUF3QixPQUF4QixDQUFnQztBQUM5QixrQkFBUTtBQURzQixTQUFoQyxFQUVHO0FBQ0Qsb0JBQVUsR0FEVDtBQUVELG9CQUFVO0FBRlQsU0FGSDtBQU1EO0FBVEEsS0FGSDtBQWFEO0FBQ0Q7QUFDRCxDQS9ERCIsImZpbGUiOiJnZW5lcmF0ZWQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uKCl7ZnVuY3Rpb24gcihlLG4sdCl7ZnVuY3Rpb24gbyhpLGYpe2lmKCFuW2ldKXtpZighZVtpXSl7dmFyIGM9XCJmdW5jdGlvblwiPT10eXBlb2YgcmVxdWlyZSYmcmVxdWlyZTtpZighZiYmYylyZXR1cm4gYyhpLCEwKTtpZih1KXJldHVybiB1KGksITApO3ZhciBhPW5ldyBFcnJvcihcIkNhbm5vdCBmaW5kIG1vZHVsZSAnXCIraStcIidcIik7dGhyb3cgYS5jb2RlPVwiTU9EVUxFX05PVF9GT1VORFwiLGF9dmFyIHA9bltpXT17ZXhwb3J0czp7fX07ZVtpXVswXS5jYWxsKHAuZXhwb3J0cyxmdW5jdGlvbihyKXt2YXIgbj1lW2ldWzFdW3JdO3JldHVybiBvKG58fHIpfSxwLHAuZXhwb3J0cyxyLGUsbix0KX1yZXR1cm4gbltpXS5leHBvcnRzfWZvcih2YXIgdT1cImZ1bmN0aW9uXCI9PXR5cGVvZiByZXF1aXJlJiZyZXF1aXJlLGk9MDtpPHQubGVuZ3RoO2krKylvKHRbaV0pO3JldHVybiBvfXJldHVybiByfSkoKSIsImpRdWVyeShmdW5jdGlvbigkKSB7XG4gICd1c2Ugc3RyaWN0JztcblxuICAkKCcuY3VzdG9tLXBhZ2Utc2Nyb2xsZXIgPiAqJykub24oJ2NsaWNrJywgZnVuY3Rpb24oZSkge1xuICAgIHZhciBlbGVtID0gJCh0aGlzKS5maW5kKCdhOmZpcnN0Jyk7XG4gICAgdmFyIHRhcmdldCA9IGVsZW0ubGVuZ3RoID4gMCA/IGVsZW0uaGFzaCA6IHRoaXMuaGFzaDtcbiAgICBpZiAoJCgnLmN1c3RvbS1wYWdlLXNjcm9sbGVyJykuaGFzQ2xhc3MoJ3Jvb3QnKSkge1xuICAgICAgY29uc29sZS5sb2coXCJhYWFcIik7XG4gICAgICBlLnByZXZlbnREZWZhdWx0KClcbiAgICB9XG4gICAgaWYgKCQoJyNuYXZpZ2F0aW9uJykuaGFzQ2xhc3MoJ2Nsb3NlZCcpKSB7XG4gICAgICBjb25zb2xlLmxvZyhcInV1dVwiKTtcbiAgICAgIHNjcm9sbCh0YXJnZXQpXG4gICAgfSBlbHNlIHtcbiAgICAgIGNsb3NlTmF2aWdhdGlvbigpO1xuICAgICAgY29uc29sZS5sb2coXCJnZ2dnXCIpO1xuICAgICAgc2Nyb2xsKHRhcmdldClcbiAgICB9XG4gIH0pO1xuXG4gIGZ1bmN0aW9uIHNjcm9sbCh0YXJnZXQpIHtcbiAgICB2YXIgJHRhcmdldCA9ICQodGFyZ2V0KTtcbiAgICBjb25zb2xlLmxvZyh0YXJnZXQpO1xuICAgICQoJ2h0bWwsIGJvZHknKS5hbmltYXRlKHtcbiAgICAgICdzY3JvbGxUb3AnOiAkdGFyZ2V0Lm9mZnNldCgpLnRvcCAtIDcwXG4gICAgfSwgOTAwLCAnc3dpbmcnKVxuICB9XG4gIFxuICAkKGRvY3VtZW50KS5vbignY2xpY2snLCAnLm5hdmlnYXRpb24tdG9nZ2xlJywgZnVuY3Rpb24oZSkge1xuICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICBpZiAoJCgnI25hdmlnYXRpb24nKS5oYXNDbGFzcygnY2xvc2VkJykpIHtcbiAgICAgIG9wZW5OYXZpZ2F0aW9uKClcbiAgICB9IGVsc2Uge1xuICAgICAgY2xvc2VOYXZpZ2F0aW9uKClcbiAgICB9XG4gIH0pO1xuXG4gIGZ1bmN0aW9uIG9wZW5OYXZpZ2F0aW9uKCkge1xuICAgICQoJyNuYXZpZ2F0aW9uJykuc2xpZGVEb3duKCcyMDAnKTtcbiAgICAkKCcjbmF2aWdhdGlvbicpLnJlbW92ZUNsYXNzKCdjbG9zZWQnKVxuICB9XG5cbiAgZnVuY3Rpb24gY2xvc2VOYXZpZ2F0aW9uKCkge1xuICAgICQoJyNuYXZpZ2F0aW9uJykuc2xpZGVVcCgnMjAwJyk7XG4gICAgJCgnI25hdmlnYXRpb24nKS5hZGRDbGFzcygnY2xvc2VkJylcbiAgfVxuXG4gIGZ1bmN0aW9uIGxvb3AoKSB7XG4gICAgJCgnLmNoYXRib3QtY29udGFpbmVyJykuYW5pbWF0ZSh7XG4gICAgICAnYm90dG9tJzogJzgnXG4gICAgfSwge1xuICAgICAgZHVyYXRpb246IDQwMCxcbiAgICAgIGNvbXBsZXRlOiAoKSA9PiB7XG4gICAgICAgICQoJy5jaGF0Ym90LWNvbnRhaW5lcicpLmFuaW1hdGUoe1xuICAgICAgICAgIGJvdHRvbTogNVxuICAgICAgICB9LCB7XG4gICAgICAgICAgZHVyYXRpb246IDQwMCxcbiAgICAgICAgICBjb21wbGV0ZTogbG9vcFxuICAgICAgICB9KVxuICAgICAgfVxuICAgIH0pXG4gIH1cbiAgbG9vcCgpXG59KTsiXX0=
