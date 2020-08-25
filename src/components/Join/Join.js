import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
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
          <div>
            <h1 className="heading">Join</h1>
          </div>
          <Form>
            <Form.Group controlId="formName">
              <Form.Control
                type="text"
                placeholder="Username"
                onChange={(event) => setName(event.target.value)}
              />
            </Form.Group>
            <Form.Group controlId="formRoom">
              <Form.Control
                type="text"
                placeholder="Room"
                onChange={(event) => setRoom(event.target.value)}
              />
            </Form.Group>
          </Form>
          <Link
            onClick={(event) =>
              !name || !room ? event.preventDefault() : null
            }
            to={`/chat?name=${name}&room=${room}`}
          >
            <Button variant="primary" type="submit" className="">
              Join
            </Button>
          </Link>
        </Col>
      </Row>
    </Container>
  );
}
