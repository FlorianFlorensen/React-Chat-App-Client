import React from 'react';

import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

//import ScrollToBottom from 'react-scroll-to-bottom';

import Message from './Message/Message';

import './Messages.css';

export default function Messages({ messages, name }) {
  return (
    <Row className="no-gutters flex-grow-1">
      <Col className="messages">
        {messages.map((message, i) => (
          <div key={i}>
            <Message message={message} name={name} />
          </div>
        ))}
      </Col>
    </Row>
  );

  /* return (
    <div id="messageList" className="flex-grow-1 messages">
      {messages.map((message, i) => (
        <div key={i}>
          <Message message={message} name={name} />
        </div>
      ))}
    </div>
  );
  */
}
