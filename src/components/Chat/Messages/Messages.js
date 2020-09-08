import React, { useEffect } from 'react';

//import ScrollToBottom from 'react-scroll-to-bottom';

import Message from './Message/Message';

import './Messages.css';

export default function Messages({ messages, name }) {
  return (
    <div id="messageList" className="flex-grow-1 messages">
      {messages.map((message, i) => (
        <div key={i}>
          <Message message={message} name={name} />
        </div>
      ))}
    </div>
  );
}
