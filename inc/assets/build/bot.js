(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
'use strict';

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

(function () {
  'use strict';

  var ajaxurl = metamindmwp.ajaxurl;

  if (useOldConversation()) {
    window.metamind = new window.Metamind({
      sessionId: getBotStatus().sessionId,
      apiUrl: 'http://dev-metamind.com:8080/v1',
      'story': 'metatavu-bot'
    });
  } else {
    window.metamind = new window.Metamind({
      apiUrl: 'http://dev-metamind.com:8080/v1',
      'story': 'metatavu-bot'
    });
  }

  $(document).on('click', '.quick-message-btn', function (e) {
    sendMessage($(this).text());
  });
  $(document).on('click', '.send-msg-btn', function (e) {
    sendMessage();
  });
  $(document).on('click', '.chatbot', function () {
    openChat();
  });
  $(document).on('click', '.minimize-chat', function () {
    closeChat();
  });
  $(document).on('click', '.close-bubble', function () {
    $('.bubble').addClass('d-none');
  });

  function closeChat() {
    window.metamind.getSessionId().then(function (sessionId) {
      updateBotStatus(sessionId, false, $('.chat-container').get(0).outerHTML);
      $('.chat-window').hide();
      $('.chatbot-container').show();
    });
  }

  function openChat() {
    window.metamind.getSessionId().then(function (sessionId) {
      updateBotStatus(sessionId, true, $('.chat-container').get(0).outerHTML);
      if (!$('.bubble').hasClass('d-none')) {
        $('.bubble').addClass('d-none');
      }
      $('.chat-window').show();
      $('.chatbot-container').hide();
      scrollChatBody();
    });
  }

  function sendMessage(text) {
    window.metamind.getSessionId().then(function (sessionId) {
      var disabled = $('.send-msg-btn').attr('disabled');
      var message = text || $('.message-input').val() || $('.user-date-input').val();

      if (!message.trim()) {
        return;
      }
      if ((typeof disabled === 'undefined' ? 'undefined' : _typeof(disabled)) !== (typeof undefined === 'undefined' ? 'undefined' : _typeof(undefined)) && disabled !== false) {
        return;
      }
      $('.bot-typing').show();
      $('.message-input').val('');
      $('.send-msg-btn').attr('disabled', 'disabled');
      $('#botHintText').text('');
      $('.quick-responses').empty();
      $('.chat-body').append('<div class="message-container">\n          <img src="/wp-content/themes/metatavu-wordpress/inc/assets/gfx/user-icon.png" class="user-avatar" />\n          <div class="message message-received">\n            <p class="message-content">\n              ' + message + '\n            </p>\n          </div>\n        </div>');

      window.metamind.sendMessage(message, 'send_message');
      scrollChatBody();
      updateBotStatus(sessionId, true, $('.chat-container').get(0).outerHTML);
    });
  }

  function replaceLineBreaks(text) {
    return (text || '').replace(/\n/g, '<br/>');
  }

  function scrollChatBody() {
    $('.chat-body').scrollTop($('.chat-body')[0].scrollHeight);
  }

  function updateBotStatus(sessionId, open, messages) {
    if (sessionId.length > 0) {
      var botStatus = {
        'sessionId': sessionId,
        'open': open,
        'messages': messages,
        'lastUpdate': Date.now()
      };
      localStorage.removeItem('botStatus');
      localStorage.setItem('botStatus', JSON.stringify(botStatus));
    }
  }

  function getBotStatus() {
    var botStatus = JSON.parse(localStorage.getItem('botStatus'));
    return botStatus;
  }

  function appendChatContentFromLocalStorage() {
    var botStatus = getBotStatus();
    $('.chat-window').html(botStatus.messages);
  }

  function useOldConversation() {
    var botStatus = getBotStatus();
    var hourPassed = false;

    if (botStatus) {
      hourPassed = botStatus.lastUpdate + 3600000 < Date.now();
    }

    if (hourPassed || !botStatus) {
      return false;
    } else {
      return true;
    }
  }

  function checkChatOpenStatus() {
    var botStatus = getBotStatus();
    if (botStatus.open) {
      console.log('open');
      $('.chat-window').show();
      $('.chatbot-container').hide();
      scrollChatBody();
    }
  }
  window.metamind.on('response', function (data) {
    window.metamind.getSessionId().then(function (sessionId) {
      $('.bot-typing').hide();
      $('.send-msg-btn').removeAttr('disabled');
      $('.message-input').val('');

      for (var i = 0; i < data.quickResponses.length; i++) {
        $('.quick-responses').append('<button class="btn btn-info btn-sm quick-message-btn">' + data.quickResponses[i] + '</button>');
      }

      var parsedResponse = $('<pre>').html(data.response);
      var type = parsedResponse.find('input[name="metamind-hint-type"]').val() || 'text';

      if (type === 'date') {
        var dateAfterParam = parsedResponse.find('input[name="metamind-hint-date-after"]').val();
        var dateAfter = null;

        if (dateAfterParam) {
          var dateAfterParts = dateAfterParam.split(' ');

          if (dateAfterParts.length === 3) {
            if (dateAfterParts[0] === 'add') {
              dateAfter = moment().add(dateAfterParts[1], dateAfterParts[2]).toDate();
            } else if (dateAfterParam[0] === 'subtract') {
              dateAfter = moment().subtract(dateAfterParts[1], dateAfterParts[2]).toDate();
            }
          }
        }
        var flatpickrInstance = $('.user-date-input')[0]._flatpickr;
        flatpickrInstance.set('minDate', dateAfter ? dateAfter : null);
      };
      switch (type) {
        case 'text':
          $('.user-text-input').show();
          break;
        case 'date':
          $('.user-date-input').show();
          break;
      }

      $('#botHintText').text(data.hint || '');
      $('.chat-body').append('<div class="message-container">\n          <img src="/wp-content/themes/metatavu-wordpress/inc/assets/gfx/robot-head.png" class="robot-avatar" />\n          <div class="message message-received">\n            <p class="message-content">\n              ' + data.response + '\n            </p>\n          </div>\n        </div>');
      scrollChatBody();
      updateBotStatus(sessionId, $('.chat-window').is(':visible'), $('.chat-container').get(0).outerHTML);
    });
  });

  $(document).ready(function () {
    $('.bot-typing').hide();
    $('.user-date-input').flatpickr({
      'locale': 'fi',
      'dateFormat': 'd.m.Y',
      'allowInput': false
    });

    if (useOldConversation()) {
      appendChatContentFromLocalStorage();
      checkChatOpenStatus();
    } else {
      $('.send-msg-btn').attr('disabled', 'disabled');
      window.metamind.sendMessage('INIT', 'send_message');
    }
  });

  $(document).on('keydown', function (event) {
    if (event.keyCode === 13) {
      sendMessage();
    }
  });
})();

},{}]},{},[1])
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJhc3NldHMvanMvYm90LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzs7OztBQ0FBLENBQUMsWUFBTTtBQUNMOztBQUVBLE1BQUksVUFBVSxZQUFZLE9BQTFCOztBQUVBLE1BQUksb0JBQUosRUFBMEI7QUFDeEIsV0FBTyxRQUFQLEdBQWtCLElBQUksT0FBTyxRQUFYLENBQW9CO0FBQ3BDLGlCQUFXLGVBQWUsU0FEVTtBQUVwQyxjQUFRLGlDQUY0QjtBQUdwQyxlQUFTO0FBSDJCLEtBQXBCLENBQWxCO0FBS0QsR0FORCxNQU1PO0FBQ0wsV0FBTyxRQUFQLEdBQWtCLElBQUksT0FBTyxRQUFYLENBQW9CO0FBQ3BDLGNBQVEsaUNBRDRCO0FBRXBDLGVBQVM7QUFGMkIsS0FBcEIsQ0FBbEI7QUFJRDs7QUFFRCxJQUFFLFFBQUYsRUFBWSxFQUFaLENBQWUsT0FBZixFQUF3QixvQkFBeEIsRUFBOEMsVUFBUyxDQUFULEVBQVk7QUFDeEQsZ0JBQVksRUFBRSxJQUFGLEVBQVEsSUFBUixFQUFaO0FBQ0QsR0FGRDtBQUdBLElBQUUsUUFBRixFQUFZLEVBQVosQ0FBZSxPQUFmLEVBQXdCLGVBQXhCLEVBQXlDLFVBQVMsQ0FBVCxFQUFZO0FBQ25EO0FBQ0QsR0FGRDtBQUdBLElBQUUsUUFBRixFQUFZLEVBQVosQ0FBZSxPQUFmLEVBQXdCLFVBQXhCLEVBQW9DLFlBQVc7QUFDN0M7QUFDRCxHQUZEO0FBR0EsSUFBRSxRQUFGLEVBQVksRUFBWixDQUFlLE9BQWYsRUFBd0IsZ0JBQXhCLEVBQTBDLFlBQVc7QUFDbkQ7QUFDRCxHQUZEO0FBR0EsSUFBRSxRQUFGLEVBQVksRUFBWixDQUFlLE9BQWYsRUFBd0IsZUFBeEIsRUFBeUMsWUFBVztBQUNsRCxNQUFFLFNBQUYsRUFBYSxRQUFiLENBQXNCLFFBQXRCO0FBQ0QsR0FGRDs7QUFJQSxXQUFTLFNBQVQsR0FBcUI7QUFDbkIsV0FBTyxRQUFQ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S0FBSyxJQUFMLElBQWEsRUFBcEM7QUFDQSxRQUFFLFlBQUYsRUFBZ0IsTUFBaEIsa1FBSVUsS0FBSyxRQUpmO0FBUUE7QUFDQSxzQkFBZ0IsU0FBaEIsRUFBMkIsRUFBRSxjQUFGLEVBQWtCLEVBQWxCLENBQXFCLFVBQXJCLENBQTNCLEVBQTZELEVBQUUsaUJBQUYsRUFBcUIsR0FBckIsQ0FBeUIsQ0FBekIsRUFBNEIsU0FBekY7QUFDRCxLQWxERDtBQW1ERCxHQXBERDs7QUFzREEsSUFBRSxRQUFGLEVBQVksS0FBWixDQUFrQixZQUFNO0FBQ3RCLE1BQUUsYUFBRixFQUFpQixJQUFqQjtBQUNBLE1BQUUsa0JBQUYsRUFBc0IsU0FBdEIsQ0FBZ0M7QUFDOUIsZ0JBQVUsSUFEb0I7QUFFOUIsb0JBQWMsT0FGZ0I7QUFHOUIsb0JBQWM7QUFIZ0IsS0FBaEM7O0FBTUEsUUFBSSxvQkFBSixFQUEwQjtBQUN4QjtBQUNBO0FBQ0QsS0FIRCxNQUdPO0FBQ0wsUUFBRSxlQUFGLEVBQW1CLElBQW5CLENBQXdCLFVBQXhCLEVBQW9DLFVBQXBDO0FBQ0EsYUFBTyxRQUFQLENBQWdCLFdBQWhCLENBQTRCLE1BQTVCLEVBQW9DLGNBQXBDO0FBQ0Q7QUFDRixHQWZEOztBQWlCQSxJQUFFLFFBQUYsRUFBWSxFQUFaLENBQWUsU0FBZixFQUEwQixpQkFBUztBQUNqQyxRQUFJLE1BQU0sT0FBTixLQUFrQixFQUF0QixFQUEwQjtBQUN4QjtBQUNEO0FBQ0YsR0FKRDtBQUtELENBeE5EIiwiZmlsZSI6ImdlbmVyYXRlZC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzQ29udGVudCI6WyIoZnVuY3Rpb24oKXtmdW5jdGlvbiByKGUsbix0KXtmdW5jdGlvbiBvKGksZil7aWYoIW5baV0pe2lmKCFlW2ldKXt2YXIgYz1cImZ1bmN0aW9uXCI9PXR5cGVvZiByZXF1aXJlJiZyZXF1aXJlO2lmKCFmJiZjKXJldHVybiBjKGksITApO2lmKHUpcmV0dXJuIHUoaSwhMCk7dmFyIGE9bmV3IEVycm9yKFwiQ2Fubm90IGZpbmQgbW9kdWxlICdcIitpK1wiJ1wiKTt0aHJvdyBhLmNvZGU9XCJNT0RVTEVfTk9UX0ZPVU5EXCIsYX12YXIgcD1uW2ldPXtleHBvcnRzOnt9fTtlW2ldWzBdLmNhbGwocC5leHBvcnRzLGZ1bmN0aW9uKHIpe3ZhciBuPWVbaV1bMV1bcl07cmV0dXJuIG8obnx8cil9LHAscC5leHBvcnRzLHIsZSxuLHQpfXJldHVybiBuW2ldLmV4cG9ydHN9Zm9yKHZhciB1PVwiZnVuY3Rpb25cIj09dHlwZW9mIHJlcXVpcmUmJnJlcXVpcmUsaT0wO2k8dC5sZW5ndGg7aSsrKW8odFtpXSk7cmV0dXJuIG99cmV0dXJuIHJ9KSgpIiwiKCgpID0+IHtcbiAgJ3VzZSBzdHJpY3QnO1xuXG4gIHZhciBhamF4dXJsID0gbWV0YW1pbmRtd3AuYWpheHVybDtcblxuICBpZiAodXNlT2xkQ29udmVyc2F0aW9uKCkpIHtcbiAgICB3aW5kb3cubWV0YW1pbmQgPSBuZXcgd2luZG93Lk1ldGFtaW5kKHtcbiAgICAgIHNlc3Npb25JZDogZ2V0Qm90U3RhdHVzKCkuc2Vzc2lvbklkLFxuICAgICAgYXBpVXJsOiAnaHR0cDovL2Rldi1tZXRhbWluZC5jb206ODA4MC92MScsXG4gICAgICAnc3RvcnknOiAnbWV0YXRhdnUtYm90J1xuICAgIH0pXG4gIH0gZWxzZSB7XG4gICAgd2luZG93Lm1ldGFtaW5kID0gbmV3IHdpbmRvdy5NZXRhbWluZCh7XG4gICAgICBhcGlVcmw6ICdodHRwOi8vZGV2LW1ldGFtaW5kLmNvbTo4MDgwL3YxJyxcbiAgICAgICdzdG9yeSc6ICdtZXRhdGF2dS1ib3QnXG4gICAgfSlcbiAgfVxuXG4gICQoZG9jdW1lbnQpLm9uKCdjbGljaycsICcucXVpY2stbWVzc2FnZS1idG4nLCBmdW5jdGlvbihlKSB7XG4gICAgc2VuZE1lc3NhZ2UoJCh0aGlzKS50ZXh0KCkpXG4gIH0pO1xuICAkKGRvY3VtZW50KS5vbignY2xpY2snLCAnLnNlbmQtbXNnLWJ0bicsIGZ1bmN0aW9uKGUpIHtcbiAgICBzZW5kTWVzc2FnZSgpXG4gIH0pO1xuICAkKGRvY3VtZW50KS5vbignY2xpY2snLCAnLmNoYXRib3QnLCBmdW5jdGlvbigpIHtcbiAgICBvcGVuQ2hhdCgpXG4gIH0pO1xuICAkKGRvY3VtZW50KS5vbignY2xpY2snLCAnLm1pbmltaXplLWNoYXQnLCBmdW5jdGlvbigpIHtcbiAgICBjbG9zZUNoYXQoKVxuICB9KTtcbiAgJChkb2N1bWVudCkub24oJ2NsaWNrJywgJy5jbG9zZS1idWJibGUnLCBmdW5jdGlvbigpIHtcbiAgICAkKCcuYnViYmxlJykuYWRkQ2xhc3MoJ2Qtbm9uZScpXG4gIH0pO1xuXG4gIGZ1bmN0aW9uIGNsb3NlQ2hhdCgpIHtcbiAgICB3aW5kb3cubWV0YW1pbmQuZ2V0U2Vzc2lvbklkKCkudGhlbihzZXNzaW9uSWQgPT4ge1xuICAgICAgdXBkYXRlQm90U3RhdHVzKHNlc3Npb25JZCwgZmFsc2UsICQoJy5jaGF0LWNvbnRhaW5lcicpLmdldCgwKS5vdXRlckhUTUwpO1xuICAgICAgJCgnLmNoYXQtd2luZG93JykuaGlkZSgpO1xuICAgICAgJCgnLmNoYXRib3QtY29udGFpbmVyJykuc2hvdygpXG4gICAgfSlcbiAgfVxuXG4gIGZ1bmN0aW9uIG9wZW5DaGF0KCkge1xuICAgIHdpbmRvdy5tZXRhbWluZC5nZXRTZXNzaW9uSWQoKS50aGVuKHNlc3Npb25JZCA9PiB7XG4gICAgICB1cGRhdGVCb3RTdGF0dXMoc2Vzc2lvbklkLCB0cnVlLCAkKCcuY2hhdC1jb250YWluZXInKS5nZXQoMCkub3V0ZXJIVE1MKTtcbiAgICAgIGlmICghJCgnLmJ1YmJsZScpLmhhc0NsYXNzKCdkLW5vbmUnKSkge1xuICAgICAgICAkKCcuYnViYmxlJykuYWRkQ2xhc3MoJ2Qtbm9uZScpXG4gICAgICB9XG4gICAgICAkKCcuY2hhdC13aW5kb3cnKS5zaG93KCk7XG4gICAgICAkKCcuY2hhdGJvdC1jb250YWluZXInKS5oaWRlKCk7XG4gICAgICBzY3JvbGxDaGF0Qm9keSgpXG4gICAgfSlcbiAgfVxuXG4gIGZ1bmN0aW9uIHNlbmRNZXNzYWdlKHRleHQpIHtcbiAgICB3aW5kb3cubWV0YW1pbmQuZ2V0U2Vzc2lvbklkKCkudGhlbihzZXNzaW9uSWQgPT4ge1xuICAgICAgY29uc3QgZGlzYWJsZWQgPSAkKCcuc2VuZC1tc2ctYnRuJykuYXR0cignZGlzYWJsZWQnKTtcbiAgICAgIGNvbnN0IG1lc3NhZ2UgPSB0ZXh0IHx8ICQoJy5tZXNzYWdlLWlucHV0JykudmFsKCkgfHwgJCgnLnVzZXItZGF0ZS1pbnB1dCcpLnZhbCgpO1xuXG4gICAgICBpZiAoIW1lc3NhZ2UudHJpbSgpKSB7XG4gICAgICAgIHJldHVyblxuICAgICAgfVxuICAgICAgaWYgKHR5cGVvZiBkaXNhYmxlZCAhPT0gdHlwZW9mIHVuZGVmaW5lZCAmJiBkaXNhYmxlZCAhPT0gZmFsc2UpIHtcbiAgICAgICAgcmV0dXJuXG4gICAgICB9XG4gICAgICAkKCcuYm90LXR5cGluZycpLnNob3coKTtcbiAgICAgICQoJy5tZXNzYWdlLWlucHV0JykudmFsKCcnKTtcbiAgICAgICQoJy5zZW5kLW1zZy1idG4nKS5hdHRyKCdkaXNhYmxlZCcsICdkaXNhYmxlZCcpO1xuICAgICAgJCgnI2JvdEhpbnRUZXh0JykudGV4dCgnJyk7XG4gICAgICAkKCcucXVpY2stcmVzcG9uc2VzJykuZW1wdHkoKTtcbiAgICAgICQoJy5jaGF0LWJvZHknKS5hcHBlbmQoYDxkaXYgY2xhc3M9XCJtZXNzYWdlLWNvbnRhaW5lclwiPlxuICAgICAgICAgIDxpbWcgc3JjPVwiL3dwLWNvbnRlbnQvdGhlbWVzL21ldGF0YXZ1LXdvcmRwcmVzcy9pbmMvYXNzZXRzL2dmeC91c2VyLWljb24ucG5nXCIgY2xhc3M9XCJ1c2VyLWF2YXRhclwiIC8+XG4gICAgICAgICAgPGRpdiBjbGFzcz1cIm1lc3NhZ2UgbWVzc2FnZS1yZWNlaXZlZFwiPlxuICAgICAgICAgICAgPHAgY2xhc3M9XCJtZXNzYWdlLWNvbnRlbnRcIj5cbiAgICAgICAgICAgICAgJHttZXNzYWdlfVxuICAgICAgICAgICAgPC9wPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5gKTtcblxuICAgICAgd2luZG93Lm1ldGFtaW5kLnNlbmRNZXNzYWdlKG1lc3NhZ2UsICdzZW5kX21lc3NhZ2UnKTtcbiAgICAgIHNjcm9sbENoYXRCb2R5KCk7XG4gICAgICB1cGRhdGVCb3RTdGF0dXMoc2Vzc2lvbklkLCB0cnVlLCAkKCcuY2hhdC1jb250YWluZXInKS5nZXQoMCkub3V0ZXJIVE1MKVxuICAgIH0pXG4gIH1cblxuICBmdW5jdGlvbiByZXBsYWNlTGluZUJyZWFrcyh0ZXh0KSB7XG4gICAgcmV0dXJuICh0ZXh0IHx8ICcnKS5yZXBsYWNlKC9cXG4vZywgJzxici8+JylcbiAgfVxuXG4gIGZ1bmN0aW9uIHNjcm9sbENoYXRCb2R5KCkge1xuICAgICQoJy5jaGF0LWJvZHknKS5zY3JvbGxUb3AoJCgnLmNoYXQtYm9keScpWzBdLnNjcm9sbEhlaWdodClcbiAgfVxuXG4gIGZ1bmN0aW9uIHVwZGF0ZUJvdFN0YXR1cyhzZXNzaW9uSWQsIG9wZW4sIG1lc3NhZ2VzKSB7XG4gICAgaWYgKHNlc3Npb25JZC5sZW5ndGggPiAwKSB7XG4gICAgICBjb25zdCBib3RTdGF0dXMgPSB7XG4gICAgICAgICdzZXNzaW9uSWQnOiBzZXNzaW9uSWQsXG4gICAgICAgICdvcGVuJzogb3BlbixcbiAgICAgICAgJ21lc3NhZ2VzJzogbWVzc2FnZXMsXG4gICAgICAgICdsYXN0VXBkYXRlJzogRGF0ZS5ub3coKVxuICAgICAgfTtcbiAgICAgIGxvY2FsU3RvcmFnZS5yZW1vdmVJdGVtKCdib3RTdGF0dXMnKTtcbiAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKCdib3RTdGF0dXMnLCBKU09OLnN0cmluZ2lmeShib3RTdGF0dXMpKTtcbiAgICB9XG4gIH1cblxuICBmdW5jdGlvbiBnZXRCb3RTdGF0dXMoKSB7XG4gICAgY29uc3QgYm90U3RhdHVzID0gSlNPTi5wYXJzZShsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgnYm90U3RhdHVzJykpO1xuICAgIHJldHVybiBib3RTdGF0dXNcbiAgfVxuXG4gIGZ1bmN0aW9uIGFwcGVuZENoYXRDb250ZW50RnJvbUxvY2FsU3RvcmFnZSgpIHtcbiAgICBjb25zdCBib3RTdGF0dXMgPSBnZXRCb3RTdGF0dXMoKTtcbiAgICAkKCcuY2hhdC13aW5kb3cnKS5odG1sKGJvdFN0YXR1cy5tZXNzYWdlcylcbiAgfVxuXG4gIGZ1bmN0aW9uIHVzZU9sZENvbnZlcnNhdGlvbigpIHtcbiAgICBjb25zdCBib3RTdGF0dXMgPSBnZXRCb3RTdGF0dXMoKTtcbiAgICBsZXQgaG91clBhc3NlZCA9IGZhbHNlO1xuXG4gICAgaWYgKGJvdFN0YXR1cykge1xuICAgICAgaG91clBhc3NlZCA9IGJvdFN0YXR1cy5sYXN0VXBkYXRlICsgMzYwMDAwMCA8IERhdGUubm93KClcbiAgICB9XG5cbiAgICBpZiAoaG91clBhc3NlZCB8fCAhYm90U3RhdHVzKSB7XG4gICAgICByZXR1cm4gZmFsc2VcbiAgICB9IGVsc2Uge1xuICAgICAgcmV0dXJuIHRydWVcbiAgICB9XG4gIH1cblxuICBmdW5jdGlvbiBjaGVja0NoYXRPcGVuU3RhdHVzKCkge1xuICAgIGNvbnN0IGJvdFN0YXR1cyA9IGdldEJvdFN0YXR1cygpO1xuICAgIGlmIChib3RTdGF0dXMub3Blbikge1xuICAgICAgY29uc29sZS5sb2coJ29wZW4nKTtcbiAgICAgICQoJy5jaGF0LXdpbmRvdycpLnNob3coKTtcbiAgICAgICQoJy5jaGF0Ym90LWNvbnRhaW5lcicpLmhpZGUoKTtcbiAgICAgIHNjcm9sbENoYXRCb2R5KClcbiAgICB9XG4gIH1cbiAgd2luZG93Lm1ldGFtaW5kLm9uKCdyZXNwb25zZScsIGZ1bmN0aW9uKGRhdGEpIHtcbiAgICB3aW5kb3cubWV0YW1pbmQuZ2V0U2Vzc2lvbklkKCkudGhlbihzZXNzaW9uSWQgPT4ge1xuICAgICAgJCgnLmJvdC10eXBpbmcnKS5oaWRlKCk7XG4gICAgICAkKCcuc2VuZC1tc2ctYnRuJykucmVtb3ZlQXR0cignZGlzYWJsZWQnKTtcbiAgICAgICQoJy5tZXNzYWdlLWlucHV0JykudmFsKCcnKTtcblxuICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBkYXRhLnF1aWNrUmVzcG9uc2VzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICQoJy5xdWljay1yZXNwb25zZXMnKS5hcHBlbmQoYDxidXR0b24gY2xhc3M9XCJidG4gYnRuLWluZm8gYnRuLXNtIHF1aWNrLW1lc3NhZ2UtYnRuXCI+JHtkYXRhLnF1aWNrUmVzcG9uc2VzW2ldfTwvYnV0dG9uPmApXG4gICAgICB9XG5cbiAgICAgIGNvbnN0IHBhcnNlZFJlc3BvbnNlID0gJCgnPHByZT4nKS5odG1sKGRhdGEucmVzcG9uc2UpO1xuICAgICAgY29uc3QgdHlwZSA9IHBhcnNlZFJlc3BvbnNlLmZpbmQoJ2lucHV0W25hbWU9XCJtZXRhbWluZC1oaW50LXR5cGVcIl0nKS52YWwoKSB8fCAndGV4dCc7XG5cbiAgICAgIGlmICh0eXBlID09PSAnZGF0ZScpIHtcbiAgICAgICAgY29uc3QgZGF0ZUFmdGVyUGFyYW0gPSBwYXJzZWRSZXNwb25zZS5maW5kKCdpbnB1dFtuYW1lPVwibWV0YW1pbmQtaGludC1kYXRlLWFmdGVyXCJdJykudmFsKCk7XG4gICAgICAgIGxldCBkYXRlQWZ0ZXIgPSBudWxsO1xuXG4gICAgICAgIGlmIChkYXRlQWZ0ZXJQYXJhbSkge1xuICAgICAgICAgIGNvbnN0IGRhdGVBZnRlclBhcnRzID0gZGF0ZUFmdGVyUGFyYW0uc3BsaXQoJyAnKTtcbiAgICAgICAgICBcbiAgICAgICAgICBpZiAoZGF0ZUFmdGVyUGFydHMubGVuZ3RoID09PSAzKSB7XG4gICAgICAgICAgICBpZiAoZGF0ZUFmdGVyUGFydHNbMF0gPT09ICdhZGQnKSB7XG4gICAgICAgICAgICAgIGRhdGVBZnRlciA9IG1vbWVudCgpLmFkZChkYXRlQWZ0ZXJQYXJ0c1sxXSwgZGF0ZUFmdGVyUGFydHNbMl0pLnRvRGF0ZSgpXG4gICAgICAgICAgICB9IGVsc2UgaWYgKGRhdGVBZnRlclBhcmFtWzBdID09PSAnc3VidHJhY3QnKSB7XG4gICAgICAgICAgICAgIGRhdGVBZnRlciA9IG1vbWVudCgpLnN1YnRyYWN0KGRhdGVBZnRlclBhcnRzWzFdLCBkYXRlQWZ0ZXJQYXJ0c1syXSkudG9EYXRlKClcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgY29uc3QgZmxhdHBpY2tySW5zdGFuY2UgPSAkKCcudXNlci1kYXRlLWlucHV0JylbMF0uX2ZsYXRwaWNrcjtcbiAgICAgICAgZmxhdHBpY2tySW5zdGFuY2Uuc2V0KCdtaW5EYXRlJywgZGF0ZUFmdGVyID8gZGF0ZUFmdGVyIDogbnVsbClcbiAgICAgIH07XG4gICAgICBzd2l0Y2ggKHR5cGUpIHtcbiAgICAgICAgY2FzZSAndGV4dCc6XG4gICAgICAgICAgJCgnLnVzZXItdGV4dC1pbnB1dCcpLnNob3coKTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSAnZGF0ZSc6XG4gICAgICAgICAgJCgnLnVzZXItZGF0ZS1pbnB1dCcpLnNob3coKTtcbiAgICAgICAgICBicmVhaztcbiAgICAgIH1cblxuICAgICAgJCgnI2JvdEhpbnRUZXh0JykudGV4dChkYXRhLmhpbnQgfHwgJycpO1xuICAgICAgJCgnLmNoYXQtYm9keScpLmFwcGVuZChgPGRpdiBjbGFzcz1cIm1lc3NhZ2UtY29udGFpbmVyXCI+XG4gICAgICAgICAgPGltZyBzcmM9XCIvd3AtY29udGVudC90aGVtZXMvbWV0YXRhdnUtd29yZHByZXNzL2luYy9hc3NldHMvZ2Z4L3JvYm90LWhlYWQucG5nXCIgY2xhc3M9XCJyb2JvdC1hdmF0YXJcIiAvPlxuICAgICAgICAgIDxkaXYgY2xhc3M9XCJtZXNzYWdlIG1lc3NhZ2UtcmVjZWl2ZWRcIj5cbiAgICAgICAgICAgIDxwIGNsYXNzPVwibWVzc2FnZS1jb250ZW50XCI+XG4gICAgICAgICAgICAgICR7ZGF0YS5yZXNwb25zZX1cbiAgICAgICAgICAgIDwvcD5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+YCk7XG4gICAgICBzY3JvbGxDaGF0Qm9keSgpO1xuICAgICAgdXBkYXRlQm90U3RhdHVzKHNlc3Npb25JZCwgJCgnLmNoYXQtd2luZG93JykuaXMoJzp2aXNpYmxlJyksICQoJy5jaGF0LWNvbnRhaW5lcicpLmdldCgwKS5vdXRlckhUTUwpXG4gICAgfSlcbiAgfSk7XG5cbiAgJChkb2N1bWVudCkucmVhZHkoKCkgPT4ge1xuICAgICQoJy5ib3QtdHlwaW5nJykuaGlkZSgpO1xuICAgICQoJy51c2VyLWRhdGUtaW5wdXQnKS5mbGF0cGlja3Ioe1xuICAgICAgJ2xvY2FsZSc6ICdmaScsXG4gICAgICAnZGF0ZUZvcm1hdCc6ICdkLm0uWScsXG4gICAgICAnYWxsb3dJbnB1dCc6IGZhbHNlXG4gICAgfSk7XG5cbiAgICBpZiAodXNlT2xkQ29udmVyc2F0aW9uKCkpIHtcbiAgICAgIGFwcGVuZENoYXRDb250ZW50RnJvbUxvY2FsU3RvcmFnZSgpO1xuICAgICAgY2hlY2tDaGF0T3BlblN0YXR1cygpO1xuICAgIH0gZWxzZSB7XG4gICAgICAkKCcuc2VuZC1tc2ctYnRuJykuYXR0cignZGlzYWJsZWQnLCAnZGlzYWJsZWQnKTtcbiAgICAgIHdpbmRvdy5tZXRhbWluZC5zZW5kTWVzc2FnZSgnSU5JVCcsICdzZW5kX21lc3NhZ2UnKVxuICAgIH1cbiAgfSk7XG5cbiAgJChkb2N1bWVudCkub24oJ2tleWRvd24nLCBldmVudCA9PiB7XG4gICAgaWYgKGV2ZW50LmtleUNvZGUgPT09IDEzKSB7XG4gICAgICBzZW5kTWVzc2FnZSgpO1xuICAgIH1cbiAgfSlcbn0pKCk7Il19
