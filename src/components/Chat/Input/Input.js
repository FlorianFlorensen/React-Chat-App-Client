import React from 'react';

import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

import './Input.css';

const Input = ({ setMessage, sendMessage, message }) => (
  <Form inline className="p-1 justify-content-center align-items-center">
    <Form.Control
      className="flex-grow-1"
      id="inlineFormInputMessage"
      placeholder="Type a message"
      value={message}
      onChange={({ target: { value } }) => setMessage(value)}
      onKeyPress={(event) =>
        event.key === 'Enter' ? sendMessage(event) : null
      }
    />
    <Button
      type="submit"
      className="ml-2 mr-2 rounded-circle"
      onSubmit={(event) => sendMessage(event)}
    >
      Submit
    </Button>
  </Form>

  /*
  <form className="form">
    <input
      className="input"
      type="text"
      placeholder="Type a message..."
      value={message}
      onChange={({ target: { value } }) => setMessage(value)}
      onKeyPress={(event) =>
        event.key === 'Enter' ? sendMessage(event) : null
      }
    />
    <button className="sendButton" onClick={(event) => sendMessage(event)}>
      Send
    </button>
  </form>
  */
);

export default Input;
