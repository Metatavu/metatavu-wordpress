(() => {
  'use strict';

  const MetamindClient = require('metamind-client');
  const queryString = require('query-string');

  class Metamind {
    constructor(options) {
      this.apiUrl = options.apiUrl;
      this.apiKey = options.apiKey;
      this.story = options.story;
      this.listeners = {};
      this.locale = 'fi';
      this.timeZone = 'Europe/Helsinki';
      this.sessionId = options.sessionId || null;
      this.maxRetryCount = 5;
      this.retries = 0;
      this.visitor = 'Unknown';
      this.ajaxurl = metamindmwp.ajaxurl
    }
    
    on(eventName, listener) {
      if (typeof listener === 'function') {
        if (!this.listeners[eventName]) {
          this.listeners[eventName] = []
        }
        this.listeners[eventName].push(listener)
      } else {
        throw new Error('Invalid metamind message listener')
      }
    }

    sendMessage(message, action) {
      const content = {
        locale: this.locale,
        timeZone: this.timeZone,
        story: this.story,
        visitor: this.visitor,
        sessionId: this.sessionId ? this.sessionId : '',
        content: message
      };

      $.post(this.ajaxurl, {
        'action': 'send_message',
        'data': content
      }, response => {
        const botResponse = JSON.parse(response);
        this.sessionId = botResponse.sessionId;
        this.trigger('response', botResponse)
      }).fail(response => {
        console.log(response.responseText || response.statusText || 'Unknown error occurred')
      })
    }

    getSessionId() {
      if (this.sessionId) {
        return Promise.resolve(this.sessionId)
      } else {
        return Promise.resolve('')
      }
    }

    trigger(eventName, data) {
      if (this.listeners[eventName]) {
        this.listeners[eventName].forEach(listener => {
          listener(data)
        })
      }
    }
    
    log(message) {
      if (typeof console.log === 'function') {
        console.log(message)
      }
    }
  }
  const options = queryString.parse(location.search);
  window.Metamind = Metamind;
  window.metamind = new Metamind(options);
})();