import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Form, Button, Card } from "react-bootstrap";
import FormContainer from "../components/FormContainer ";
import Axios from "axios";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const DonourAddScreen = () => {
  const [name, setName] = useState("");
  const [address, setAddress] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [blood, setBlood] = useState("");

  const submitHandler = (e) => {
    e.preventDefault();
  };
  let navigate = useNavigate();
  useEffect(() => {
    if (!(JSON.parse(localStorage.getItem("type")) === "bloodBank")) {
      navigate("/signIn");
    }
  }, []);
  const submitDonor = () => {
    Axios.post("https://blood-bank-g2.herokuapp.com/donour/add", {
      name: name,
      b_type: blood,
      contact_no: phone,
      address: address,
      email: email,
    }).then(() => {
      window.location.href = "/bank/viewDonours";
    });
  };

  return (
    <>
      <Link to="/bank/viewDonours" className="btn btn-light my-3">
        Go Back
      </Link>
      <FormContainer>
        <Card>
          <Card.Header>Add User</Card.Header>
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

              <Form.Group controlId="blood" className="mb-3">
                <Form.Label>Blood Type</Form.Label>
                <div key={`inline-radio`} className="mb-3">
                  <Form.Check
                    className="mx-2"
                    inline
                    name="g1"
                    id="gr1"
                    label="A+"
                    type="radio"
                    aria-label="radio 1"
                    checked={blood === "A+"}
                    value="A+"
                    onChange={(e) => setBlood(e.target.value)}
                  />
                  <Form.Check
                    inline
                    label="A-"
                    name="g1"
                    id="gr2"
                    type="radio"
                    aria-label="radio 1"
                    checked={blood === "A-"}
                    value="A-"
                    onChange={(e) => setBlood(e.target.value)}
                  />
                  <Form.Check
                    inline
                    label="B+"
                    name="g1"
                    id="gr3"
                    type="radio"
                    aria-label="radio 1"
                    checked={blood === "B+"}
                    value="B+"
                    onChange={(e) => setBlood(e.target.value)}
                  />
                  <Form.Check
                    inline
                    label="B-"
                    name="g1"
                    id="gr4"
                    type="radio"
                    aria-label="radio 1"
                    checked={blood === "B-"}
                    value="B-"
                    onChange={(e) => setBlood(e.target.value)}
                  />
                  <Form.Check
                    inline
                    label="AB+"
                    name="g1"
                    id="gr5"
                    type="radio"
                    aria-label="radio 1"
                    checked={blood === "AB+"}
                    value="AB+"
                    onChange={(e) => setBlood(e.target.value)}
                  />
                  <Form.Check
                    inline
                    label="AB-"
                    name="g1"
                    id="gr6"
                    type="radio"
                    aria-label="radio 1"
                    checked={blood === "AB-"}
                    value="AB-"
                    onChange={(e) => setBlood(e.target.value)}
                  />
                  <Form.Check
                    inline
                    label="O+"
                    name="g1"
                    id="gr7"
                    type="radio"
                    aria-label="radio 1"
                    checked={blood === "O+"}
                    value="O+"
                    onChange={(e) => setBlood(e.target.value)}
                  />
                  <Form.Check
                    inline
                    label="O-"
                    name="g1"
                    id="gr8"
                    type="radio"
                    aria-label="radio 1"
                    checked={blood === "O-"}
                    value="O-"
                    onChange={(e) => setBlood(e.target.value)}
                  />
                </div>
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

              <Button type="submit" variant="info" onClick={submitDonor}>
                Add
              </Button>
            </Form>
          </Card.Body>
        </Card>
      </FormContainer>
    </>
  );
};

export default DonourAddScreen;
