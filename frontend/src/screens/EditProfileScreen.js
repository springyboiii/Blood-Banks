import React from "react";
import { Row, Col, Card, Button, Form } from "react-bootstrap";
//import classes from '../components/EditProfileScreen.css'
import { useState, useContext } from "react";
import { useEffect } from "react";
import Axios from "axios";
import { UserContext } from "../UserContext";
import { useNavigate } from "react-router-dom";

const EditProfileScreen = () => {
  const { username, setUsernameState } = useContext(UserContext);
  let navigate = useNavigate();
  const [username1, setUsername] = useState(username);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [description, setDescription] = useState("");
  const [contact, setContact] = useState("");
  const [location, setLocation] = useState("");
  useEffect(() => {
    if (!(JSON.parse(localStorage.getItem("type")) === "bloodBank")) {
      navigate("/signIn");
    }
    return () => {
      Axios.post("https://blood-bank-g2.herokuapp.com/editProfile", {
        username: username1,
      }).then((response) => {
        setName(response.data[0].name);
        setContact(response.data[0].contact_no);
        setUsername(response.data[0].username);
        setEmail(response.data[0].email);
        setLocation(response.data[0].address);
        setDescription(response.data[0].about);

        // alert("succesful insert");
      });
      // Axios.get('http://localhost:9000/editProfile').then((response) => { console.log(response.data) });
    };
  }, []);
  const updateBloodbank = () => {
    Axios.post("https://blood-bank-g2.herokuapp.com/updateBloodBank", {
      name: name,
      username: username,

      email: email,
      description: description,
      contact: contact,
      location: location,
    }).then(() => {
      // alert("succesful update");
    });
  };
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
            {/* <Button variant="info" className="justify-content-center">
              Upload New
            </Button> */}
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
                  placeholder={username1}
                  disabled
                />
              </Form.Group>

              {/* <Row>
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
              </Row> */}

              <Row>
                <Col md={6}>
                  <Form.Group className="mb-3">
                    <Form.Label htmlFor="disabledTextInput">
                      Organization Name
                    </Form.Label>
                    <Form.Control
                      id="disabledTextInput"
                      placeholder={name}
                      onChange={(e) => {
                        setName(e.target.value);
                      }}
                    />
                  </Form.Group>
                </Col>
                <Col md={6}>
                  <Form.Group className="mb-3">
                    <Form.Label htmlFor="disabledTextInput">Address</Form.Label>
                    <Form.Control
                      id="disabledTextInput"
                      placeholder={location}
                      onChange={(e) => {
                        setLocation(e.target.value);
                      }}
                    />
                  </Form.Group>
                </Col>
              </Row>

              <Row>
                <Col md={6}>
                  <Form.Group className="mb-3">
                    <Form.Label htmlFor="disabledTextInput">
                      Telephone
                    </Form.Label>
                    <Form.Control
                      id="disabledTextInput"
                      placeholder={contact}
                      onChange={(e) => {
                        setContact(e.target.value);
                      }}
                    />
                  </Form.Group>
                </Col>
                <Col md={6}>
                  <Form.Group className="mb-3">
                    <Form.Label htmlFor="disabledTextInput">Email</Form.Label>
                    <Form.Control
                      id="disabledTextInput"
                      placeholder={email}
                      onChange={(e) => {
                        setEmail(e.target.value);
                      }}
                    />
                  </Form.Group>
                </Col>
              </Row>

              <Form.Group className="mb-3">
                <Form.Label htmlFor="disabledTextInput">About</Form.Label>
                <Form.Control
                  type="text"
                  as="textarea"
                  rows={3}
                  id="disabledTextInput"
                  placeholder={description}
                  onChange={(e) => {
                    setDescription(e.target.value);
                  }}
                />
              </Form.Group>
              {/* <button
                  type="submit"
                  className="btn btn-primary"
                  style={{ width: "150%" }}
                  onClick={updateBloodbank}
                >
                  Update
                </button> */}
              <Button
                variant="info"
                className="justify-content-center"
                onClick={updateBloodbank}
              >
                Update
              </Button>
            </Form>
          </Card.Body>
        </Card>
      </Col>
    </Row>
  );
};

export default EditProfileScreen;
