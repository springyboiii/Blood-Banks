import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { Form, Button, Card } from "react-bootstrap";
import FormContainer from "../components/FormContainer ";
import Axios from "axios";
import { useNavigate } from "react-router-dom";

const DonourEditScreen = () => {
  const [name, setName] = useState("");
  const [address, setAddress] = useState("");
  const [email, setEmail] = useState("");
  const [contact_no, setPhone] = useState("");

  const submitHandler = (e) => {
    e.preventDefault();
  };

  const params = useParams();

  let navigate = useNavigate();
  useEffect(() => {
    getDonorDetails();
    if (!(JSON.parse(localStorage.getItem("type")) === "bloodBank")) {
      navigate("/signIn");
    }
  }, []);
  const getDonorDetails = async () => {
    let result = await fetch(`https://blood-bank-g2.herokuapp.com/viewDonourID/${params.id}`);
    result = await result.json();
    setName(result[0].name);
    setAddress(result[0].address);
    setEmail(result[0].email);
    setPhone(result[0].contact_no);
  };

  const updateDonor = async () => {
    let result = await Axios.put(
      `https://blood-bank-g2.herokuapp.com/donour/edit/${params.id}`,
      {
        name: name,
        address: address,
        email: email,
        phone: contact_no,
      }
    );
    window.location.href = "/bank/viewDonours";
  };

  return (
    <>
      <Link to="/bank/viewDonours" className="btn btn-light my-3">
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
                  placeholder="Enter Name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                ></Form.Control>
              </Form.Group>

              <Form.Group controlId="phone" className="mb-3">
                <Form.Label>Phone Number</Form.Label>
                <Form.Control
                  placeholder="Enter Phone"
                  value={contact_no}
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
              <Button type="submit" variant="info" onClick={updateDonor}>
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
