(() => {
  'use strict';
  $(document).ready(() => {
      const element = $('.metamind-bot-container');
      const styleSheetUri = metamindwp.styleSheetUri;
      element.append(`
        <div class="chatbot-container">
          <div class="chatbot-wrap">
            <div class="bubble">
              <span class="close-bubble"><i class="fa fa-close"></i></span>
              Tule juttelemaan!
            </div>
            <div class="chatbot" style="background-image: url(${styleSheetUri}/inc/assets/gfx/robot.png);"></div>
          </div>
        </div>
      `);
      element.append(`
        <div class="chat-window">
          <div class="chat-container">
            <div class="chat-header">
              <h3>Metamind chat <span class="minimize-chat"><i class="fa fa-window-minimize"></i></span></h3>
            </div>
        
            <div class="chat-body">
            </div>
        
            <div class="quick-responses">
            </div>
        
            <div class="bot-typing">
              Metamind kirjoittaa
            </div>
            
            <div class="chat-footer">
              <input type="text" class="message-input" placeholder="Kirjoita jotain..."/>
              <a class="send-msg-btn"><i class="fa fa-paper-plane"></i></a>
            </div>
          </div>
        </div>
      `)
  })
})();