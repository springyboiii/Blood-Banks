import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Form, Button, Card } from "react-bootstrap";
import FormContainer from "../components/FormContainer ";
import users from "../users";

const DonourEditScreen = () => {
  const user1 = users[0];

  const [name, setName] = useState(user1.name);
  const [address, setAddress] = useState(user1.address);
  const [email, setEmail] = useState(user1.email);
  const [phone, setPhone] = useState(user1.phone);

  const submitHandler = (e) => {
    e.preventDefault();
  };

  return (
    <>
      <Link to="/viewDonours" className="btn btn-light my-3">
        Go Back
      </Link>
      <FormContainer>
        <Card>
          <Card.Header>Edit User</Card.Header>
          <Card.Body>
            <Form onSubmit={submitHandler}>
              <Form.Group controlId="name" className="mb-3">
                <Form.Label>Name</Form.Label>
                <Form.Control
                  type="name"
                  placeholder="Enter name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                ></Form.Control>
              </Form.Group>

              <Form.Group controlId="Phone" className="mb-3">
                <Form.Label>Phone Number</Form.Label>
                <Form.Control
                  placeholder="Enter Phone"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                ></Form.Control>
              </Form.Group>

              <Form.Group controlId="address" className="mb-3">
                <Form.Label>Address</Form.Label>
                <Form.Control
                  placeholder="Enter address"
                  value={address}
                  onChange={(e) => setAddress(e.target.value)}
                ></Form.Control>
              </Form.Group>

              <Form.Group controlId="email" className="mb-3">
                <Form.Label>Email Address</Form.Label>
                <Form.Control
                  type="email"
                  placeholder="Enter email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                ></Form.Control>
              </Form.Group>

              <Button type="submit" variant="info">
                Update
              </Button>
            </Form>
          </Card.Body>
        </Card>
      </FormContainer>
    </>
  );
};

export default DonourEditScreen;
