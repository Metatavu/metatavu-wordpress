(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
'use strict';

jQuery(function ($) {
  'use strict';

  $('.custom-page-scroller').on('click', function (e) {
    var target = this.hash;
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJhc3NldHMvanMvdGhlbWUtc2NyaXB0LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzs7QUNBQSxPQUFPLFVBQVMsQ0FBVCxFQUFZO0FBQ2pCOztBQUVBLElBQUUsdUJBQUYsRUFBMkIsRUFBM0IsQ0FBOEIsT0FBOUIsRUFBdUMsVUFBUyxDQUFULEVBQVk7QUFDakQsUUFBSSxTQUFTLEtBQUssSUFBbEI7QUFDQSxRQUFJLEVBQUUsdUJBQUYsRUFBMkIsUUFBM0IsQ0FBb0MsTUFBcEMsQ0FBSixFQUFpRDtBQUMvQyxRQUFFLGNBQUY7QUFDRDtBQUNELFFBQUksRUFBRSxhQUFGLEVBQWlCLFFBQWpCLENBQTBCLFFBQTFCLENBQUosRUFBeUM7QUFDdkMsYUFBTyxNQUFQO0FBQ0QsS0FGRCxNQUVPO0FBQ0w7QUFDQSxhQUFPLE1BQVA7QUFDRDtBQUNGLEdBWEQ7O0FBYUEsV0FBUyxNQUFULENBQWdCLE1BQWhCLEVBQXdCO0FBQ3RCLFFBQUksVUFBVSxFQUFFLE1BQUYsQ0FBZDtBQUNBLE1BQUUsWUFBRixFQUFnQixPQUFoQixDQUF3QjtBQUN0QixtQkFBYSxRQUFRLE1BQVIsR0FBaUIsR0FBakIsR0FBdUI7QUFEZCxLQUF4QixFQUVHLEdBRkgsRUFFUSxPQUZSO0FBR0Q7O0FBRUQsSUFBRSxRQUFGLEVBQVksRUFBWixDQUFlLE9BQWYsRUFBd0Isb0JBQXhCLEVBQThDLFVBQVMsQ0FBVCxFQUFZO0FBQ3hELE1BQUUsY0FBRjtBQUNBLFFBQUksRUFBRSxhQUFGLEVBQWlCLFFBQWpCLENBQTBCLFFBQTFCLENBQUosRUFBeUM7QUFDdkM7QUFDRCxLQUZELE1BRU87QUFDTDtBQUNEO0FBQ0YsR0FQRDs7QUFTQSxXQUFTLGNBQVQsR0FBMEI7QUFDeEIsTUFBRSxhQUFGLEVBQWlCLFNBQWpCLENBQTJCLEtBQTNCO0FBQ0EsTUFBRSxhQUFGLEVBQWlCLFdBQWpCLENBQTZCLFFBQTdCO0FBQ0Q7O0FBRUQsV0FBUyxlQUFULEdBQTJCO0FBQ3pCLE1BQUUsYUFBRixFQUFpQixPQUFqQixDQUF5QixLQUF6QjtBQUNBLE1BQUUsYUFBRixFQUFpQixRQUFqQixDQUEwQixRQUExQjtBQUNEOztBQUVELFdBQVMsSUFBVCxHQUFnQjtBQUNkLE1BQUUsb0JBQUYsRUFBd0IsT0FBeEIsQ0FBZ0M7QUFDOUIsZ0JBQVU7QUFEb0IsS0FBaEMsRUFFRztBQUNELGdCQUFVLEdBRFQ7QUFFRCxnQkFBVSxvQkFBTTtBQUNkLFVBQUUsb0JBQUYsRUFBd0IsT0FBeEIsQ0FBZ0M7QUFDOUIsa0JBQVE7QUFEc0IsU0FBaEMsRUFFRztBQUNELG9CQUFVLEdBRFQ7QUFFRCxvQkFBVTtBQUZULFNBRkg7QUFNRDtBQVRBLEtBRkg7QUFhRDtBQUNEO0FBQ0QsQ0ExREQiLCJmaWxlIjoiZ2VuZXJhdGVkLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbigpe2Z1bmN0aW9uIHIoZSxuLHQpe2Z1bmN0aW9uIG8oaSxmKXtpZighbltpXSl7aWYoIWVbaV0pe3ZhciBjPVwiZnVuY3Rpb25cIj09dHlwZW9mIHJlcXVpcmUmJnJlcXVpcmU7aWYoIWYmJmMpcmV0dXJuIGMoaSwhMCk7aWYodSlyZXR1cm4gdShpLCEwKTt2YXIgYT1uZXcgRXJyb3IoXCJDYW5ub3QgZmluZCBtb2R1bGUgJ1wiK2krXCInXCIpO3Rocm93IGEuY29kZT1cIk1PRFVMRV9OT1RfRk9VTkRcIixhfXZhciBwPW5baV09e2V4cG9ydHM6e319O2VbaV1bMF0uY2FsbChwLmV4cG9ydHMsZnVuY3Rpb24ocil7dmFyIG49ZVtpXVsxXVtyXTtyZXR1cm4gbyhufHxyKX0scCxwLmV4cG9ydHMscixlLG4sdCl9cmV0dXJuIG5baV0uZXhwb3J0c31mb3IodmFyIHU9XCJmdW5jdGlvblwiPT10eXBlb2YgcmVxdWlyZSYmcmVxdWlyZSxpPTA7aTx0Lmxlbmd0aDtpKyspbyh0W2ldKTtyZXR1cm4gb31yZXR1cm4gcn0pKCkiLCJqUXVlcnkoZnVuY3Rpb24oJCkge1xuICAndXNlIHN0cmljdCc7XG5cbiAgJCgnLmN1c3RvbS1wYWdlLXNjcm9sbGVyJykub24oJ2NsaWNrJywgZnVuY3Rpb24oZSkge1xuICAgIHZhciB0YXJnZXQgPSB0aGlzLmhhc2g7XG4gICAgaWYgKCQoJy5jdXN0b20tcGFnZS1zY3JvbGxlcicpLmhhc0NsYXNzKCdyb290JykpIHtcbiAgICAgIGUucHJldmVudERlZmF1bHQoKVxuICAgIH1cbiAgICBpZiAoJCgnI25hdmlnYXRpb24nKS5oYXNDbGFzcygnY2xvc2VkJykpIHtcbiAgICAgIHNjcm9sbCh0YXJnZXQpXG4gICAgfSBlbHNlIHtcbiAgICAgIGNsb3NlTmF2aWdhdGlvbigpO1xuICAgICAgc2Nyb2xsKHRhcmdldClcbiAgICB9XG4gIH0pO1xuXG4gIGZ1bmN0aW9uIHNjcm9sbCh0YXJnZXQpIHtcbiAgICB2YXIgJHRhcmdldCA9ICQodGFyZ2V0KTtcbiAgICAkKCdodG1sLCBib2R5JykuYW5pbWF0ZSh7XG4gICAgICAnc2Nyb2xsVG9wJzogJHRhcmdldC5vZmZzZXQoKS50b3AgLSA3MFxuICAgIH0sIDkwMCwgJ3N3aW5nJylcbiAgfVxuICBcbiAgJChkb2N1bWVudCkub24oJ2NsaWNrJywgJy5uYXZpZ2F0aW9uLXRvZ2dsZScsIGZ1bmN0aW9uKGUpIHtcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgaWYgKCQoJyNuYXZpZ2F0aW9uJykuaGFzQ2xhc3MoJ2Nsb3NlZCcpKSB7XG4gICAgICBvcGVuTmF2aWdhdGlvbigpXG4gICAgfSBlbHNlIHtcbiAgICAgIGNsb3NlTmF2aWdhdGlvbigpXG4gICAgfVxuICB9KTtcblxuICBmdW5jdGlvbiBvcGVuTmF2aWdhdGlvbigpIHtcbiAgICAkKCcjbmF2aWdhdGlvbicpLnNsaWRlRG93bignMjAwJyk7XG4gICAgJCgnI25hdmlnYXRpb24nKS5yZW1vdmVDbGFzcygnY2xvc2VkJylcbiAgfVxuXG4gIGZ1bmN0aW9uIGNsb3NlTmF2aWdhdGlvbigpIHtcbiAgICAkKCcjbmF2aWdhdGlvbicpLnNsaWRlVXAoJzIwMCcpO1xuICAgICQoJyNuYXZpZ2F0aW9uJykuYWRkQ2xhc3MoJ2Nsb3NlZCcpXG4gIH1cblxuICBmdW5jdGlvbiBsb29wKCkge1xuICAgICQoJy5jaGF0Ym90LWNvbnRhaW5lcicpLmFuaW1hdGUoe1xuICAgICAgJ2JvdHRvbSc6ICc4J1xuICAgIH0sIHtcbiAgICAgIGR1cmF0aW9uOiA0MDAsXG4gICAgICBjb21wbGV0ZTogKCkgPT4ge1xuICAgICAgICAkKCcuY2hhdGJvdC1jb250YWluZXInKS5hbmltYXRlKHtcbiAgICAgICAgICBib3R0b206IDVcbiAgICAgICAgfSwge1xuICAgICAgICAgIGR1cmF0aW9uOiA0MDAsXG4gICAgICAgICAgY29tcGxldGU6IGxvb3BcbiAgICAgICAgfSlcbiAgICAgIH1cbiAgICB9KVxuICB9XG4gIGxvb3AoKVxufSk7Il19
