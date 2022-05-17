import React from "react";
import { Row, Col, Card, Button, Form } from "react-bootstrap";
import FormContainer from "../components/FormContainer ";

const addCampScreen = () => {
  return (
    <FormContainer>
      <Card>
        <Card.Header>Add Camp</Card.Header>
        <Card.Body>
          <Form>
            <Form.Group className="mb-3">
              <Form.Label htmlFor="disabledTextInput">Camp Name</Form.Label>
              <Form.Control placeholder="Name" />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label htmlFor="disabledTextInput">Description</Form.Label>
              <Form.Control
                type="text"
                as="textarea"
                rows={2}
                placeholder="Description"
              />
              <Form.Text muted>Description must be below 200 words</Form.Text>
            </Form.Group>

            <Row>
              <Col md={6}>
                <Form.Group className="mb-3">
                  <Form.Label htmlFor="disabledTextInput">Date</Form.Label>
                  <Form.Control
                    type="date"
                  />
                </Form.Group>
              </Col>
              <Col md={6}>
                <Form.Group className="mb-3">
                  <Form.Label htmlFor="disabledTextInput">Time</Form.Label>
                  <Form.Control type="time" placeholder="Last Name" />
                </Form.Group>
              </Col>
            </Row>

            <Form.Group className="mb-3">
              <Form.Label htmlFor="disabledTextInput">
                Organization Name
              </Form.Label>
              <Form.Control placeholder="Organization Name" />
            </Form.Group>

            <Form.Group controlId="formFile" className="mb-3">
              <Form.Label>Add Flie</Form.Label>
              <Form.Control type="file" />
            </Form.Group>

            <Button variant="info" className="justify-content-center">
              Add Camp
            </Button>
          </Form>
        </Card.Body>
      </Card>
    </FormContainer>
  );
};

export default addCampScreen;
