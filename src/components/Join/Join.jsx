import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import axios from 'axios';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';

import './Join.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Error from '../Error/Error';

export default function SignIn() {
  const [name, setName] = useState('');
  const [room, setRoom] = useState('');
  const [error, setError] = useState('0');
  const history = useHistory();
  //const SERVER_URL = "http://localhost:5000";
  const SERVER_URL = 'https://dontsnitchonmebackend.herokuapp.com';

  async function handleSubmit(event) {
    event.preventDefault();
    let inputIsValid = false;

    try {
      inputIsValid = await validateInput();
    } catch (e) {
      alert(e.message);
    }
    if (inputIsValid) history.push(`/chat?name=${name}&room=${room}`);
  }

  async function validateInput(event) {
    let isValid = true;
    if (!name || !room) {
      setError('2');
      isValid = false;
    } else {
      const response = await axios.post(`${SERVER_URL}/validateUser`, {
        username: name,
        room: room,
      });
      console.log(response);
      if (response.status === 200) {
        console.log('is Valid should be false now');
        setError('3');
        isValid = false;
      }
    }
    return isValid;
  }

  return (
    <Container fluid className="joinOuterContainer">
      <Row className="justify-content-center flex-column joinRow">
        <Col className="d-flex justify-content-center align-items-center joinUpperColumn">
          <div className="joinWrapperText">
            <h1>Forrest Chat</h1>
            <p>Create a Room or join one with a Room ID</p>
          </div>
        </Col>
        <Col className="d-flex flex-column justify-content-center align-items-center joinLowerColumn">
          <Row className="flex-column">
            <Col>
              {error !== '0' ? <Error errorCode={error} /> : null}
              <div className="joinButtonWrapper">
                <button
                  className="joinButton"
                  onClick={(event) => {
                    handleSubmit(event);
                  }}
                >
                  Create Room
                </button>
              </div>
              <Form className="joinForm">
                <Col className="form-field">
                  <input
                    required
                    className="inputText"
                    type="text"
                    onChange={(event) => setName(event.target.value)}
                  ></input>
                  <label className="inputLabel">
                    <span className="labelText">Username</span>
                  </label>
                </Col>
              </Form>
            </Col>
            <Col>
              {error !== '0' ? <Error errorCode={error} /> : null}
              <div className="joinButtonWrapper">
                <button
                  className="joinButton"
                  onClick={(event) => {
                    handleSubmit(event);
                  }}
                >
                  Join a Room
                </button>
              </div>
              <Form className="joinForm">
                <Col className="form-field">
                  <input
                    required
                    className="inputText"
                    type="text"
                    onChange={(event) => setName(event.target.value)}
                  ></input>
                  <label className="inputLabel">
                    <span className="labelText">Username</span>
                  </label>
                </Col>
                <Col className="form-field">
                  <input
                    required
                    className="inputText"
                    type="text"
                    onChange={(event) => setRoom(event.target.value)}
                  ></input>
                  <label className="inputLabel">
                    <span className="labelText">Room Id</span>
                  </label>
                </Col>
              </Form>
            </Col>
          </Row>
        </Col>
      </Row>
    </Container>
  );
}
