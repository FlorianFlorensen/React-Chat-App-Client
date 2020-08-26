import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';

import './Join.css';
import 'bootstrap/dist/css/bootstrap.min.css';

export default function SignIn() {
  const [name, setName] = useState('');
  const [room, setRoom] = useState('');

  return (
    <Container className="joinOuterContainer">
      <Row className="justify-content-center joinInnerContainer">
        <Col md={3} className="align-self-center joinColumn">
          <div><Link
            onClick={(event) =>
              !name || !room ? event.preventDefault() : null
            }
            to={`/chat?name=${name}&room=${room}`}
          >
            <h1 className="heading">Join</h1>
          </Link>
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
