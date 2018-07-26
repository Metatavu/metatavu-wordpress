(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
'use strict';

jQuery(function ($) {
  'use strict';

  $('.custom-page-scroller > *').on('click', function (e) {
    var elem = $(this).find('a:first');
    var target = elem.length > 0 ? elem.hash : this.hash;
    if ($('.custom-page-scroller').hasClass('root')) {
      e.preventDefault();
    }
    if ($('#navigation').hasClass('closed')) {
      scroll(target);
    } else {
      closeNavigation();
      scroll(target);
    }
  });

  function scroll(target) {
    var $target = $(target);
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

    $('.chatbot-wrap').animate({
      'bottom': '3'
    }, {
      duration: 400,
      complete: function complete() {
        $('.chatbot-wrap').animate({
          bottom: '8'
        }, {
          duration: 400,
          complete: loop
        });
      }
    });
  }
  loop();

  $(document).on('click', '.more-products', function (event) {
    event.preventDefault();
    $('.type-page').slideDown({
      start: function start() {
        $(this).css({
          display: "flex"
        });
      },
      done: function done() {
        $('.more-products').hide();
      }
    });
  });

  $(document).on('click', '.more-projects', function (event) {
    event.preventDefault();
    $('.category-projekti').slideDown({
      start: function start() {
        $(this).css({
          display: "block"
        });
      },
      done: function done() {
        $('.more-projects').hide();
      }
    });
  });
});

},{}]},{},[1])
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJhc3NldHMvanMvdGhlbWUtc2NyaXB0LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzs7QUNBQSxPQUFPLFVBQVMsQ0FBVCxFQUFZO0FBQ2pCOztBQUVBLElBQUUsMkJBQUYsRUFBK0IsRUFBL0IsQ0FBa0MsT0FBbEMsRUFBMkMsVUFBUyxDQUFULEVBQVk7QUFDckQsUUFBSSxPQUFPLEVBQUUsSUFBRixFQUFRLElBQVIsQ0FBYSxTQUFiLENBQVg7QUFDQSxRQUFJLFNBQVMsS0FBSyxNQUFMLEdBQWMsQ0FBZCxHQUFrQixLQUFLLElBQXZCLEdBQThCLEtBQUssSUFBaEQ7QUFDQSxRQUFJLEVBQUUsdUJBQUYsRUFBMkIsUUFBM0IsQ0FBb0MsTUFBcEMsQ0FBSixFQUFpRDtBQUMvQyxRQUFFLGNBQUY7QUFDRDtBQUNELFFBQUksRUFBRSxhQUFGLEVBQWlCLFFBQWpCLENBQTBCLFFBQTFCLENBQUosRUFBeUM7QUFDdkMsYUFBTyxNQUFQO0FBQ0QsS0FGRCxNQUVPO0FBQ0w7QUFDQSxhQUFPLE1BQVA7QUFDRDtBQUNGLEdBWkQ7O0FBY0EsV0FBUyxNQUFULENBQWdCLE1BQWhCLEVBQXdCO0FBQ3RCLFFBQUksVUFBVSxFQUFFLE1BQUYsQ0FBZDtBQUNBLE1BQUUsWUFBRixFQUFnQixPQUFoQixDQUF3QjtBQUN0QixtQkFBYSxRQUFRLE1BQVIsR0FBaUIsR0FBakIsR0FBdUI7QUFEZCxLQUF4QixFQUVHLEdBRkgsRUFFUSxPQUZSO0FBR0Q7O0FBRUQsSUFBRSxRQUFGLEVBQVksRUFBWixDQUFlLE9BQWYsRUFBd0Isb0JBQXhCLEVBQThDLFVBQVMsQ0FBVCxFQUFZO0FBQ3hELE1BQUUsY0FBRjtBQUNBLFFBQUksRUFBRSxhQUFGLEVBQWlCLFFBQWpCLENBQTBCLFFBQTFCLENBQUosRUFBeUM7QUFDdkM7QUFDRCxLQUZELE1BRU87QUFDTDtBQUNEO0FBQ0YsR0FQRDs7QUFTQSxXQUFTLGNBQVQsR0FBMEI7QUFDeEIsTUFBRSxhQUFGLEVBQWlCLFNBQWpCLENBQTJCLEtBQTNCO0FBQ0EsTUFBRSxhQUFGLEVBQWlCLFdBQWpCLENBQTZCLFFBQTdCO0FBQ0Q7O0FBRUQsV0FBUyxlQUFULEdBQTJCO0FBQ3pCLE1BQUUsYUFBRixFQUFpQixPQUFqQixDQUF5QixLQUF6QjtBQUNBLE1BQUUsYUFBRixFQUFpQixRQUFqQixDQUEwQixRQUExQjtBQUNEOztBQUVELFdBQVMsSUFBVCxHQUFnQjs7QUFFZCxNQUFFLGVBQUYsRUFBbUIsT0FBbkIsQ0FBMkI7QUFDekIsZ0JBQVU7QUFEZSxLQUEzQixFQUVHO0FBQ0QsZ0JBQVUsR0FEVDtBQUVELGdCQUFVLG9CQUFNO0FBQ2QsVUFBRSxlQUFGLEVBQW1CLE9BQW5CLENBQTJCO0FBQ3pCLGtCQUFRO0FBRGlCLFNBQTNCLEVBRUc7QUFDRCxvQkFBVSxHQURUO0FBRUQsb0JBQVU7QUFGVCxTQUZIO0FBTUQ7QUFUQSxLQUZIO0FBYUQ7QUFDRDs7QUFFQSxJQUFFLFFBQUYsRUFBWSxFQUFaLENBQWUsT0FBZixFQUF3QixnQkFBeEIsRUFBMEMsVUFBVSxLQUFWLEVBQWlCO0FBQ3pELFVBQU0sY0FBTjtBQUNBLE1BQUUsWUFBRixFQUFnQixTQUFoQixDQUEwQjtBQUN4QixhQUFPLGlCQUFZO0FBQ2pCLFVBQUUsSUFBRixFQUFRLEdBQVIsQ0FBWTtBQUNWLG1CQUFTO0FBREMsU0FBWjtBQUdELE9BTHVCO0FBTXhCLFlBQU0sZ0JBQVk7QUFDaEIsVUFBRSxnQkFBRixFQUFvQixJQUFwQjtBQUNEO0FBUnVCLEtBQTFCO0FBVUQsR0FaRDs7QUFjQSxJQUFFLFFBQUYsRUFBWSxFQUFaLENBQWUsT0FBZixFQUF3QixnQkFBeEIsRUFBMEMsVUFBVSxLQUFWLEVBQWlCO0FBQ3pELFVBQU0sY0FBTjtBQUNBLE1BQUUsb0JBQUYsRUFBd0IsU0FBeEIsQ0FBa0M7QUFDaEMsYUFBTyxpQkFBWTtBQUNqQixVQUFFLElBQUYsRUFBUSxHQUFSLENBQVk7QUFDVixtQkFBUztBQURDLFNBQVo7QUFHRCxPQUwrQjtBQU1oQyxZQUFNLGdCQUFZO0FBQ2hCLFVBQUUsZ0JBQUYsRUFBb0IsSUFBcEI7QUFDRDtBQVIrQixLQUFsQztBQVVELEdBWkQ7QUFjRCxDQXpGRCIsImZpbGUiOiJnZW5lcmF0ZWQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uKCl7ZnVuY3Rpb24gcihlLG4sdCl7ZnVuY3Rpb24gbyhpLGYpe2lmKCFuW2ldKXtpZighZVtpXSl7dmFyIGM9XCJmdW5jdGlvblwiPT10eXBlb2YgcmVxdWlyZSYmcmVxdWlyZTtpZighZiYmYylyZXR1cm4gYyhpLCEwKTtpZih1KXJldHVybiB1KGksITApO3ZhciBhPW5ldyBFcnJvcihcIkNhbm5vdCBmaW5kIG1vZHVsZSAnXCIraStcIidcIik7dGhyb3cgYS5jb2RlPVwiTU9EVUxFX05PVF9GT1VORFwiLGF9dmFyIHA9bltpXT17ZXhwb3J0czp7fX07ZVtpXVswXS5jYWxsKHAuZXhwb3J0cyxmdW5jdGlvbihyKXt2YXIgbj1lW2ldWzFdW3JdO3JldHVybiBvKG58fHIpfSxwLHAuZXhwb3J0cyxyLGUsbix0KX1yZXR1cm4gbltpXS5leHBvcnRzfWZvcih2YXIgdT1cImZ1bmN0aW9uXCI9PXR5cGVvZiByZXF1aXJlJiZyZXF1aXJlLGk9MDtpPHQubGVuZ3RoO2krKylvKHRbaV0pO3JldHVybiBvfXJldHVybiByfSkoKSIsImpRdWVyeShmdW5jdGlvbigkKSB7XG4gICd1c2Ugc3RyaWN0JztcblxuICAkKCcuY3VzdG9tLXBhZ2Utc2Nyb2xsZXIgPiAqJykub24oJ2NsaWNrJywgZnVuY3Rpb24oZSkge1xuICAgIHZhciBlbGVtID0gJCh0aGlzKS5maW5kKCdhOmZpcnN0Jyk7XG4gICAgdmFyIHRhcmdldCA9IGVsZW0ubGVuZ3RoID4gMCA/IGVsZW0uaGFzaCA6IHRoaXMuaGFzaDtcbiAgICBpZiAoJCgnLmN1c3RvbS1wYWdlLXNjcm9sbGVyJykuaGFzQ2xhc3MoJ3Jvb3QnKSkge1xuICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpXG4gICAgfVxuICAgIGlmICgkKCcjbmF2aWdhdGlvbicpLmhhc0NsYXNzKCdjbG9zZWQnKSkge1xuICAgICAgc2Nyb2xsKHRhcmdldClcbiAgICB9IGVsc2Uge1xuICAgICAgY2xvc2VOYXZpZ2F0aW9uKCk7XG4gICAgICBzY3JvbGwodGFyZ2V0KVxuICAgIH1cbiAgfSk7XG5cbiAgZnVuY3Rpb24gc2Nyb2xsKHRhcmdldCkge1xuICAgIHZhciAkdGFyZ2V0ID0gJCh0YXJnZXQpO1xuICAgICQoJ2h0bWwsIGJvZHknKS5hbmltYXRlKHtcbiAgICAgICdzY3JvbGxUb3AnOiAkdGFyZ2V0Lm9mZnNldCgpLnRvcCAtIDcwXG4gICAgfSwgOTAwLCAnc3dpbmcnKVxuICB9XG4gIFxuICAkKGRvY3VtZW50KS5vbignY2xpY2snLCAnLm5hdmlnYXRpb24tdG9nZ2xlJywgZnVuY3Rpb24oZSkge1xuICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICBpZiAoJCgnI25hdmlnYXRpb24nKS5oYXNDbGFzcygnY2xvc2VkJykpIHtcbiAgICAgIG9wZW5OYXZpZ2F0aW9uKClcbiAgICB9IGVsc2Uge1xuICAgICAgY2xvc2VOYXZpZ2F0aW9uKClcbiAgICB9XG4gIH0pO1xuXG4gIGZ1bmN0aW9uIG9wZW5OYXZpZ2F0aW9uKCkge1xuICAgICQoJyNuYXZpZ2F0aW9uJykuc2xpZGVEb3duKCcyMDAnKTtcbiAgICAkKCcjbmF2aWdhdGlvbicpLnJlbW92ZUNsYXNzKCdjbG9zZWQnKVxuICB9XG5cbiAgZnVuY3Rpb24gY2xvc2VOYXZpZ2F0aW9uKCkge1xuICAgICQoJyNuYXZpZ2F0aW9uJykuc2xpZGVVcCgnMjAwJyk7XG4gICAgJCgnI25hdmlnYXRpb24nKS5hZGRDbGFzcygnY2xvc2VkJylcbiAgfVxuXG4gIGZ1bmN0aW9uIGxvb3AoKSB7XG5cbiAgICAkKCcuY2hhdGJvdC13cmFwJykuYW5pbWF0ZSh7XG4gICAgICAnYm90dG9tJzogJzMnXG4gICAgfSwge1xuICAgICAgZHVyYXRpb246IDQwMCxcbiAgICAgIGNvbXBsZXRlOiAoKSA9PiB7XG4gICAgICAgICQoJy5jaGF0Ym90LXdyYXAnKS5hbmltYXRlKHtcbiAgICAgICAgICBib3R0b206ICc4J1xuICAgICAgICB9LCB7XG4gICAgICAgICAgZHVyYXRpb246IDQwMCxcbiAgICAgICAgICBjb21wbGV0ZTogbG9vcFxuICAgICAgICB9KVxuICAgICAgfVxuICAgIH0pXG4gIH1cbiAgbG9vcCgpO1xuXG4gICQoZG9jdW1lbnQpLm9uKCdjbGljaycsICcubW9yZS1wcm9kdWN0cycsIGZ1bmN0aW9uIChldmVudCkge1xuICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgJCgnLnR5cGUtcGFnZScpLnNsaWRlRG93bih7XG4gICAgICBzdGFydDogZnVuY3Rpb24gKCkge1xuICAgICAgICAkKHRoaXMpLmNzcyh7XG4gICAgICAgICAgZGlzcGxheTogXCJmbGV4XCJcbiAgICAgICAgfSlcbiAgICAgIH0sXG4gICAgICBkb25lOiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICQoJy5tb3JlLXByb2R1Y3RzJykuaGlkZSgpO1xuICAgICAgfVxuICAgIH0pO1xuICB9KTtcblxuICAkKGRvY3VtZW50KS5vbignY2xpY2snLCAnLm1vcmUtcHJvamVjdHMnLCBmdW5jdGlvbiAoZXZlbnQpIHtcbiAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICQoJy5jYXRlZ29yeS1wcm9qZWt0aScpLnNsaWRlRG93bih7XG4gICAgICBzdGFydDogZnVuY3Rpb24gKCkge1xuICAgICAgICAkKHRoaXMpLmNzcyh7XG4gICAgICAgICAgZGlzcGxheTogXCJibG9ja1wiXG4gICAgICAgIH0pXG4gICAgICB9LFxuICAgICAgZG9uZTogZnVuY3Rpb24gKCkge1xuICAgICAgICAkKCcubW9yZS1wcm9qZWN0cycpLmhpZGUoKTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfSk7XG4gIFxufSk7Il19
