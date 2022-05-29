import React from "react";
import {
  Navbar,
  Nav,
  Container,
  NavDropdown,
  Form,
  Button,
  FormControl,
} from "react-bootstrap";
import { useState } from "react";
const Header = ({username,isLoggedIn}) => {
  const [username1, setUsername] = useState(username)
  const [IsLoggedIn, setIsLoggedIn] = useState(isLoggedIn)
  return (
    
    <Navbar className="px-5" bg="primary" expand="lg" variant="dark">
      <Container fluid>
      {/* {console.log({username1},"Header")} */}
        <Navbar.Brand href="/"></Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: "100px" }}
            navbarScroll
          >
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="/viewCamp">Campaigns</Nav.Link>
          </Nav>

          <Form className="d-flex me-auto">
            <FormControl
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
            />
            <Button variant="btn btn-success">Search</Button>
          </Form>

          <Nav className="me-5 px-5">
            <Nav.Link href={IsLoggedIn ? (""):("/signIn")}>
              {IsLoggedIn ? (username):("Sign in")}
              <i className="fas fa-user ms-1"></i>{" "}
            </Nav.Link>
            {/* {console.log(IsLoggedIn)} */}
{IsLoggedIn &&<div>
            <NavDropdown title="" id="basic-nav-dropdown" className="mx-0">
              <NavDropdown.Item href="">
                Edit Profile
              </NavDropdown.Item>
              <NavDropdown.Item href="/updateInventory">
                Update Inventory
              </NavDropdown.Item>
              <NavDropdown.Item href="/addCamp">Add Camp</NavDropdown.Item>
              <NavDropdown.Item href="/viewDonours">
                View Donours
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action5">Logout</NavDropdown.Item>
            </NavDropdown></div>
}
          </Nav>
          <Nav></Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;
