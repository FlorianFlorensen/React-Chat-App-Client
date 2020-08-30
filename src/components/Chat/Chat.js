import React, { useState, useEffect } from 'react';
import queryString from 'query-string';
import io from 'socket.io-client';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';

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
  const ENDPOINT = process.env.BACKEND_SERVER_URL || "http://localhost:5000"

  useEffect(() => {
    const { name, room } = queryString.parse(location.search);

    socket = io(ENDPOINT);

    setRoom(room);
    setName(name);

    socket.emit('join', { name, room }, (error) => {
      if (error) {

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
    <Container fluid className="chatOuterContainer">
      <Row className="justify-content-md-center align-items-center chatInnerContainer">
        <Col md={6} className="h-75 align-self-center">
          <Card className="h-100">
            <Card.Header>
              <InfoBar room={room} />
            </Card.Header>
            <Card.Body>
              <Messages messages={messages} name={name} />
            </Card.Body>
            <Card.Footer>
              <Input
                message={message}
                setMessage={setMessage}
                sendMessage={sendMessage}
              />
            </Card.Footer>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default Chat;
