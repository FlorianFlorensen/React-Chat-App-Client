import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import axios from "axios";

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';

import './Join.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Error from "../Error/Error";

export default function SignIn() {
  const [name, setName] = useState('');
  const [room, setRoom] = useState('');
  const [error, setError] = useState('0');
  const history = useHistory();
  const SERVER_URL = process.env.BACKEND_SERVER_URL || "http://localhost:5000"


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
      setError("2");
      isValid = false;
    }
    else {
      const response = await axios.post(`${SERVER_URL}/validateUser`, {
        username: name,
        room: room,
      })
      console.log(response);
      if (response.status === 200) {
        console.log("is Valid should be false now")
        setError("3");
        isValid = false;
      }
    };
    return isValid;
  }

  return (
    <Container className="joinOuterContainer">
      <Row className="justify-content-center joinInnerContainer">
        <Col md={3} className="align-self-center joinColumn">
          {error !== "0" ? <Error errorCode={error} /> : null}
          <div className="joinButtonWrapper">
            <button
              className="joinButton"
              onClick={event => { handleSubmit(event) }}>
              Join
            </button>
          </div>
          <Form className="joinForm">
            <Col className="form-field">
              <input
                required
                className="inputText"
                type="text"
                onChange={(event) => setName(event.target.value)}>
              </input>
              <label className="inputLabel"><span className="labelText">Username</span></label>
            </Col>
            <Col className="form-field" >
              <input
                required
                className="inputText"
                type="text"
                onChange={(event) => setRoom(event.target.value)}>
              </input>
              <label className="inputLabel"><span className="labelText">Room</span></label>
            </Col>
          </Form>
        </Col>
      </Row>
    </Container >
  );
}
