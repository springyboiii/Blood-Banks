import React from "react";
import { Card, Col, Row } from "react-bootstrap";

const BloodInventory = () => {
  return (
    <>
      <Row className="mx-0 px-0">
        <Col className="px-0" md={3}>
          <Card className="bg-primary">
            <Card.Body>
              <Card.Text className="cardttext">A+</Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col className="px-0" md={3}>
          <Card className="bg-success">
            <Card.Body>
              <Card.Text className="cardttext">A-</Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col className="px-0" md={3}>
          <Card className="bg-primary">
            <Card.Body>
              <Card.Text className="cardttext">B+</Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col className="px-0" md={3}>
          <Card className="bg-success">
            <Card.Body>
              <Card.Text className="cardttext">B-</Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>

      <Row className="mx-0">
        <Col className="px-0" md={3}>
          <Card className="bg-primary">
            <Card.Body>
              <Card.Text className="cardttext">AB-</Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col className="px-0" md={3}>
          <Card className="bg-success">
            <Card.Body>
              <Card.Text className="cardttext">AB-</Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col className="px-0" md={3}>
          <Card className="bg-primary">
            <Card.Body>
              <Card.Text className="cardttext">O+</Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col className="px-0" md={3}>
          <Card className="bg-success">
            <Card.Body>
              <Card.Text className="cardttext">O-</Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </>
  );
};

export default BloodInventory;
