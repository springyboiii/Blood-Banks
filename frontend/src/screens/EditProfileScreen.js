import React from "react";
import { Row, Col, Card, Button, Form } from "react-bootstrap";
//import classes from '../components/EditProfileScreen.css'
import { useState } from "react";
import { useEffect } from "react";
import  Axios  from "axios";
const EditProfileScreen = ({username}) => {
  const [username1, setUsername] = useState(username);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [description, setDescription] = useState("");
  const [contact, setContact] = useState("");
  const [location, setLocation] = useState("");
  useEffect(() => {
    return () => {
      Axios.post("http://localhost:9000/editProfile", {
      
      username: username1,
      
    }).then((response)=>{
      setName(response.data[0].name);
      setContact(response.data[0].contact_no);
      setUsername(response.data[0].username);
      setEmail(response.data[0].email);
      setLocation(response.data[0].address);
      setDescription(response.data[0].about);
      console.log(response.data);
      alert("succesful insert");
      
    });
      Axios.get('http://localhost:9000/editProfile').then((response) => { console.log(response.data) });
    
    };
  }, [])
  return (
    
    <Row>
      {console.log({username1})}
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
                    <Form.Label htmlFor="disabledTextInput">Organization Name</Form.Label>
                    <Form.Control
                      id="disabledTextInput"
                      placeholder={name}

                    />
                  </Form.Group>
                </Col>
                <Col md={6}>
                  <Form.Group className="mb-3">
                    <Form.Label htmlFor="disabledTextInput">Address</Form.Label>
                    <Form.Control
                      id="disabledTextInput"
                      placeholder={location}

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
                      placeholder={contact}

                    />
                  </Form.Group>
                </Col>
                <Col md={6}>
                  <Form.Group className="mb-3">
                    <Form.Label htmlFor="disabledTextInput">Email</Form.Label>
                    <Form.Control
                      id="disabledTextInput"
                      placeholder={email}

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
                  placeholder={description}

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
