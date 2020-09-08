import React, { useState, useEffect, StrictMode } from 'react';
import queryString from 'query-string';
import io from 'socket.io-client';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import Messages from './Messages/Messages';
import InfoBar from './InfoBar/InfoBar';
import Input from './Input/Input';

import './Chat.css';

let socket;

const Chat = ({ location }) => {
  const [name, setName] = useState('');
  const [room, setRoom] = useState('');
  // eslint-disable-next-line
  const [users, setUsers] = useState('');
  const [message, setMessage] = useState('');
  const [messages, setMessages] = useState([]);
  //const ENDPOINT = "http://localhost:5000"
  const ENDPOINT = 'https://dontsnitchonmebackend.herokuapp.com';

  useEffect(() => {
    const { name, room } = queryString.parse(location.search);
    setRoom(room);
    setName(name);

    socket = io(ENDPOINT);

    socket.emit('join', { name, room }, (error) => {
      if (error) {
        console.log('Error when joining the Socket');
      }
    });
  }, [ENDPOINT, location.search]);

  useEffect(() => {
    socket.on('message', (message) => {
      setMessages((messages) => [...messages, message]);
    });
    socket.on('roomData', ({ users }) => {
      setUsers(users);
    });
  }, []);

  const sendMessage = (event) => {
    event.preventDefault();

    if (message) {
      socket.emit('sendMessage', message, () => setMessage(''));
    }
  };

  return (
    <StrictMode>
      <Container className="contentContainer">
        <Row className="contentRow">
          <Col className="p-0 d-flex flex-column">
            <InfoBar room={room} />
            <Messages messages={messages} name={name} />
            <Input
              message={message}
              setMessage={setMessage}
              sendMessage={sendMessage}
            />
          </Col>
        </Row>
      </Container>
    </StrictMode>
  );
};

export default Chat;
