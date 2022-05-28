import React, { useState, useEffect   } from "react";
import { Link, useParams} from "react-router-dom";
import { Form, Button, Card } from "react-bootstrap";
import FormContainer from "../components/FormContainer ";
import Axios from "axios";

const DonourEditScreen = () => {
  const [name, setName] = useState('');
  const [address, setAddress] = useState('');
  const [email, setEmail] = useState('');
  const [contact_no, setPhone] = useState('');

  const submitHandler = (e) => {
    e.preventDefault();
  };

  const params = useParams()

  useEffect(()=>{
    getDonorDetails();
  },[])

  const getDonorDetails = async ()=>{
    let result = await fetch(`http://localhost:9000/viewDonourID/${params.id}`);
    result = await result.json();
    setName(result[0].name)
    setAddress(result[0].address)
    setEmail(result[0].email)
    setPhone(result[0].contact_no)
  }

  const updateDonor = async () =>{
    console.log(name, address, contact_no, email)
    let result = await Axios.put(`http://localhost:9000/donour/edit/${params.id}`, {
      name: name,
      address: address,
      email: email,
      phone: contact_no
    });
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
