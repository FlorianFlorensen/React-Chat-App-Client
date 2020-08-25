import React from "react";

import onlineIcon from "../../../icons/onlineIcon.png";
import closeIcon from "../../../icons/closeIcon.png";

import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import "./InfoBar.css";

const InfoBar = ({ room }) => (
  <Row className="infoBar">
    <Col className="d-flex leftInfoBoxColumn">
      <img className="onlineIcon" src={onlineIcon} alt="online icon" />
      <h3>{room}</h3>
    </Col>
    <Col className="d-flex rightInfoBoxColumn">
      <a href="/">
        <img src={closeIcon} alt="close icon" />
      </a>
    </Col>
  </Row>

  /*
    <div className="infoBar">
      <div className="leftInnerContainer">
        <img className="onlineIcon" src={onlineIcon} alt="online icon" />
        <h3>{room}</h3>
      </div>
      <div className="rightInnerContainer">
        <a href="/"><img src={closeIcon} alt="close icon" /></a>
      </div>
    </div>*/
);

export default InfoBar;
