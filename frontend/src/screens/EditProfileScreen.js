import React from "react";
import { Row, Col, Card, Button, Form } from "react-bootstrap";
//import classes from '../components/EditProfileScreen.css'
const EditProfileScreen = () => {
  return (
    <Row>
      <Col md={4}>
        <Card>
          <Card.Header>Profile Picture</Card.Header>
          <Card.Body className="text-center">
            <Card.Img
              src="/images/blood1.jpg"
              className="mb-2"
              style={{ width: "10rem", height: "10rem", borderRadius: "50%" }}
            ></Card.Img>
          </Card.Body>
          <Card.Body className="text-center">
            <Button variant="info" className="justify-content-center">
              Upload New
            </Button>
          </Card.Body>
        </Card>
      </Col>
      <Col md={8}>
        <Card>
          <Card.Header>Account Details</Card.Header>
          <Card.Body>
            <Form>
              <Form.Group className="mb-3">
                <Form.Label htmlFor="disabledTextInput">Username</Form.Label>
                <Form.Control
                  id="disabledTextInput"
                  placeholder="colombo1254"
                  disabled
                />
              </Form.Group>

              <Row>
                <Col md={6}>
                <Form.Group className="mb-3">
                  <Form.Label htmlFor="disabledTextInput">Executive's First Name</Form.Label>
                  <Form.Control
                    id="disabledTextInput"
                    placeholder="First Name"
                  
                  />
                  </Form.Group>
                </Col>
                <Col md={6}>
                <Form.Group className="mb-3">
                  <Form.Label htmlFor="disabledTextInput">Executive's Last Name</Form.Label>
                  <Form.Control
                    id="disabledTextInput"
                    placeholder="Last Name"
                    
                  />
                   </Form.Group>
                </Col>
              </Row>

              <Row>
                <Col md={6}>
                <Form.Group className="mb-3">
                  <Form.Label htmlFor="disabledTextInput">Organization Name</Form.Label>
                  <Form.Control
                    id="disabledTextInput"
                    placeholder="Organization Name"
                  
                  />
                   </Form.Group>
                </Col>
                <Col md={6}>
                <Form.Group className="mb-3">
                  <Form.Label htmlFor="disabledTextInput">Address</Form.Label>
                  <Form.Control
                    id="disabledTextInput"
                    placeholder="Address"
                    
                  />
                   </Form.Group>
                </Col>
              </Row>

              <Row>
                <Col md={6}>
                <Form.Group className="mb-3">
                  <Form.Label htmlFor="disabledTextInput">Telephone</Form.Label>
                  <Form.Control
                    id="disabledTextInput"
                    placeholder="Organization Name"
                  
                  />
                   </Form.Group>
                </Col>
                <Col md={6}>
                    <Form.Group className="mb-3">
                  <Form.Label htmlFor="disabledTextInput">Email</Form.Label>
                  <Form.Control
                    id="disabledTextInput"
                    placeholder="Address"
                    
                  />
                   </Form.Group>
                </Col>
              </Row>

              <Form.Group className="mb-3">
                <Form.Label htmlFor="disabledTextInput">About</Form.Label>
                <Form.Control
                type="text"
                as="textarea" rows={3}
                  id="disabledTextInput"
                  placeholder="About"
                
                />
              </Form.Group>
              <Button variant="info" className="justify-content-center">Update</Button>
            </Form>
          </Card.Body>
        </Card>
      </Col>
    </Row>
  );
};

export default EditProfileScreen;
