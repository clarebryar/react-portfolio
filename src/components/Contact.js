import React from "react";
import Navigation from "../components/Navigation";
import Footer from "../components/Footer";
import Project from "../components/Project";

import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';


export default function Contact() {
    return (
        <>
        <Row>
      
        <Col xs={6} md={4}>
        <Form.Label htmlFor="basic-url">Your vanity URL</Form.Label>
        <InputGroup className="mb-3">
          <InputGroup.Text id="basic-addon3">
            https://example.com/users/
          </InputGroup.Text>
          <Form.Control id="basic-url" aria-describedby="basic-addon3" />
        </InputGroup>
        </Col>
        <Col xs={6} md={4}>
        <InputGroup className="mb-3">
          <InputGroup.Text>$</InputGroup.Text>
          <Form.Control aria-label="Amount (to the nearest dollar)" />
          <InputGroup.Text>.00</InputGroup.Text>
        </InputGroup>
        </Col>
        <InputGroup>
          <InputGroup.Text>With textarea</InputGroup.Text>
          <Form.Control as="textarea" aria-label="With textarea" />
        </InputGroup>
        </Row>
      </>
    )
}