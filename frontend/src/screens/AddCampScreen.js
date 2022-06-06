import React from "react";
import { Row, Col, Card, Button, Form } from "react-bootstrap";
import { useState } from "react";
import { useEffect } from "react";
import Axios from "axios";
import FormContainer from "../components/FormContainer ";
import { useNavigate } from "react-router-dom";

const AddCampScreen = ({ username }) => {
  const [username1, setUsername] = useState(username);
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");
  const [org, setOrg] = useState("");
  const [location, setLocation] = useState("");
  const [bank_ID, setBank_ID] = useState("");

  const submitHandler = (e) => {
    e.preventDefault();
  };
  let navigate = useNavigate();
  useEffect(() => {
    if (!(JSON.parse(localStorage.getItem("type")) === "bloodBank")) {
      navigate("/signIn");
    }
  }, []);
  useEffect(() => {
    return () => {
      setUsername(username);
      Axios.post("https://blood-bank-g2.herokuapp.com/bankID", {
        username: username1,
      }).then((response) => {
        setBank_ID(response.data[0].ID);
      });
    };
  }, []);

  const submitCamp = () => {
    Axios.post("https://blood-bank-g2.herokuapp.com/addCamp", {
      camp_name: name,
      description: description,
      date: date,
      time: time,
      location: location,
      org_name: org,
      bank_ID: bank_ID,
    }).then(() => {
      alert("succesful insert");
    });
  };
  return (
    <FormContainer>
      {/* <h1>{username1}</h1> */}
      <Card>
        <Card.Header>Add Camp</Card.Header>
        <Card.Body>
          <Form onSubmit={submitHandler}>
            <Form.Group className="mb-3">
              <Form.Label htmlFor="disabledTextInput">Camp Name</Form.Label>
              <Form.Control
                type="name"
                placeholder="Name"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label htmlFor="disabledTextInput">Description</Form.Label>
              <Form.Control
                type="text"
                as="textarea"
                rows={2}
                placeholder="Description"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
              />
              <Form.Text muted>Description must be below 200 words</Form.Text>
            </Form.Group>

            <Row>
              <Col md={6}>
                <Form.Group className="mb-3">
                  <Form.Label htmlFor="disabledTextInput">Date</Form.Label>
                  <Form.Control
                    type="date"
                    value={date}
                    onChange={(e) => setDate(e.target.value)}
                  />
                </Form.Group>
              </Col>
              <Col md={6}>
                <Form.Group className="mb-3">
                  <Form.Label htmlFor="disabledTextInput">Time</Form.Label>
                  <Form.Control
                    type="time"
                    placeholder="Last Name"
                    value={time}
                    onChange={(e) => setTime(e.target.value)}
                  />
                </Form.Group>
              </Col>
            </Row>

            <Form.Group className="mb-3">
              <Form.Label htmlFor="disabledTextInput">Location</Form.Label>
              <Form.Control
                placeholder="Location"
                value={location}
                onChange={(e) => setLocation(e.target.value)}
              />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label htmlFor="disabledTextInput">Bank Name</Form.Label>
              <Form.Control
                placeholder="Bank Name"
                value={bank_ID}
                disabled
                onChange={(e) => setBank_ID(e.target.value)}
              />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label htmlFor="disabledTextInput">
                Organization Name
              </Form.Label>
              <Form.Control
                placeholder="Organization Name"
                value={org}
                onChange={(e) => setOrg(e.target.value)}
              />
            </Form.Group>

            <Button
              variant="info"
              className="justify-content-center"
              onClick={submitCamp}
            >
              Add Camp
            </Button>
          </Form>
        </Card.Body>
      </Card>
    </FormContainer>
  );
};

export default AddCampScreen;
