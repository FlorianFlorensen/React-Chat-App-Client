import React from 'react';

import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

//import onlineIcon from '../../../media/icons/onlineIcon.png';
import closeIcon from '../../../media/icons/closeIcon.png';

import './InfoBar.css';

const InfoBar = ({ room }) => (
  <Row className="no-gutters infoBox">
    <Col className="d-flex align-items-center">
      <p className="m-2 room-text">{room}</p>
    </Col>
    <Col className="d-flex justify-content-end align-items-center">
      <img className="m-2" src={closeIcon} alt="close icon" />
    </Col>
  </Row>
);

export default InfoBar;
