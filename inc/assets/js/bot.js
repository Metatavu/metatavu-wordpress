(() => {
  'use strict';

  var ajaxurl = metamindmwp.ajaxurl;

  if (useOldConversation()) {
    window.metamind = new window.Metamind({
      sessionId: getBotStatus().sessionId,
      apiUrl: 'http://dev-metamind.com:8080/v1',
      'story': 'metatavu-bot'
    })
  } else {
    window.metamind = new window.Metamind({
      apiUrl: 'http://dev-metamind.com:8080/v1',
      'story': 'metatavu-bot'
    })
  }

  $(document).on('click', '.quick-message-btn', function(e) {
    sendMessage($(this).text())
  });
  $(document).on('click', '.send-msg-btn', function(e) {
    sendMessage()
  });
  $(document).on('click', '.chatbot', function() {
    openChat()
  });
  $(document).on('click', '.minimize-chat', function() {
    closeChat()
  });
  $(document).on('click', '.close-bubble', function() {
    $('.bubble').addClass('d-none')
  });

  function closeChat() {
    window.metamind.getSessionId().then(sessionId => {
      updateBotStatus(sessionId, false, $('.chat-container').get(0).outerHTML);
      $('.chat-window').hide();
      $('.chatbot-container').show()
    })
  }

  function openChat() {
    window.metamind.getSessionId().then(sessionId => {
      updateBotStatus(sessionId, true, $('.chat-container').get(0).outerHTML);
      if (!$('.bubble').hasClass('d-none')) {
        $('.bubble').addClass('d-none')
      }
      $('.chat-window').show();
      $('.chatbot-container').hide();
      scrollChatBody()
    })
  }

  function sendMessage(text) {
    window.metamind.getSessionId().then(sessionId => {
      const disabled = $('.send-msg-btn').attr('disabled');
      const message = text || $('.message-input').val() || $('.user-date-input').val();

      if (!message.trim()) {
        return
      }
      if (typeof disabled !== typeof undefined && disabled !== false) {
        return
      }
      $('.bot-typing').show();
      $('.message-input').val('');
      $('.send-msg-btn').attr('disabled', 'disabled');
      $('#botHintText').text('');
      $('.quick-responses').empty();
      $('.chat-body').append(`<div class="message-container">
          <img src="/wp-content/themes/metatavu-wordpress/inc/assets/gfx/user-icon.png" class="user-avatar" />
          <div class="message message-received">
            <p class="message-content">
              ${message}
            </p>
          </div>
        </div>`);

      window.metamind.sendMessage(message, 'send_message');
      scrollChatBody();
      updateBotStatus(sessionId, true, $('.chat-container').get(0).outerHTML)
    })
  }

  function replaceLineBreaks(text) {
    return (text || '').replace(/\n/g, '<br/>')
  }

  function scrollChatBody() {
    $('.chat-body').scrollTop($('.chat-body')[0].scrollHeight)
  }

  function updateBotStatus(sessionId, open, messages) {
    const botStatus = {
      'sessionId': sessionId,
      'open': open,
      'messages': messages,
      'lastUpdate': Date.now()
    };
    localStorage.removeItem('botStatus');
    localStorage.setItem('botStatus', JSON.stringify(botStatus))
  }

  function getBotStatus() {
    const botStatus = JSON.parse(localStorage.getItem('botStatus'));
    return botStatus
  }

  function appendChatContentFromLocalStorage() {
    const botStatus = getBotStatus();
    $('.chat-window').html(botStatus.messages)
  }

  function useOldConversation() {
    const botStatus = getBotStatus();
    let hourPassed = false;

    if (botStatus) {
      hourPassed = botStatus.lastUpdate + 3600000 < Date.now()
    }

    if (hourPassed || !botStatus) {
      return false
    } else {
      return true
    }
  }

  function checkChatOpenStatus() {
    const botStatus = getBotStatus();
    if (botStatus.open) {
      console.log('open');
      $('.chat-window').show();
      $('.chatbot-container').hide();
      scrollChatBody()
    }
  }
  window.metamind.on('response', function(data) {
    window.metamind.getSessionId().then(sessionId => {
      $('.bot-typing').hide();
      $('.send-msg-btn').removeAttr('disabled');
      $('.message-input').val('');

      for (var i = 0; i < data.quickResponses.length; i++) {
        $('.quick-responses').append(`<button class="btn btn-info btn-sm quick-message-btn">${data.quickResponses[i]}</button>`)
      }

      const parsedResponse = $('<pre>').html(data.response);
      const type = parsedResponse.find('input[name="metamind-hint-type"]').val() || 'text';

      if (type === 'date') {
        const dateAfterParam = parsedResponse.find('input[name="metamind-hint-date-after"]').val();
        let dateAfter = null;

        if (dateAfterParam) {
          const dateAfterParts = dateAfterParam.split(' ');
          
          if (dateAfterParts.length === 3) {
            if (dateAfterParts[0] === 'add') {
              dateAfter = moment().add(dateAfterParts[1], dateAfterParts[2]).toDate()
            } else if (dateAfterParam[0] === 'subtract') {
              dateAfter = moment().subtract(dateAfterParts[1], dateAfterParts[2]).toDate()
            }
          }
        }
        const flatpickrInstance = $('.user-date-input')[0]._flatpickr;
        flatpickrInstance.set('minDate', dateAfter ? dateAfter : null)
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
      $('.chat-body').append(`<div class="message-container">
          <img src="/wp-content/themes/metatavu-wordpress/inc/assets/gfx/robot-head.png" class="robot-avatar" />
          <div class="message message-received">
            <p class="message-content">
              ${data.response}
            </p>
          </div>
        </div>`);
      scrollChatBody();
      updateBotStatus(sessionId, $('.chat-window').is(':visible'), $('.chat-container').get(0).outerHTML)
    })
  });

  $(document).ready(() => {
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
      window.metamind.sendMessage('INIT', 'send_message')
    }
  });

  $(document).on('keydown', event => {
    if (event.keyCode === 13) {
      sendMessage();
    }
  })
})();