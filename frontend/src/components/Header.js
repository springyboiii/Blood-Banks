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
import { useState,useContext } from "react";
import { Link } from "react-router-dom";
import {UserContext} from "../UserContext"
const Header = ({IsLoggedIn}) => {
  // const [username1, setUsername] = useState(username)
  // const [IsLoggedIn, setIsLoggedIn] = useState(isLoggedIn)
  const {username,setUsernameState} = useContext(UserContext);
    const linkStyle = {
      margin: "1rem",
      textDecoration: "none",
      color: 'white'
    };
    
    return (
    
    <Navbar className="px-5" bg="primary" expand="lg" variant="dark">
      <h1>{username}</h1>
      <Container fluid>
   
        <Navbar.Brand href="/"></Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: "100px" }}
            navbarScroll
          >
            <Nav.Link ><Link to="/" style={linkStyle}>Home</Link></Nav.Link>
            <Nav.Link ><Link to="viewCamp" style={linkStyle}>Campaign</Link></Nav.Link>
            
            
          </Nav>

          {/* <Form className="d-flex me-auto">
            <FormControl
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
            />
            <Button variant="btn btn-success">Search</Button>
          </Form> */}

          <Nav className="me-5 px-5">
          {/* {username=="Context"&&  */}
          {!IsLoggedIn &&
          <div>
            <Nav.Link href="/signIn">SignIn
              {/* {IsLoggedIn ? (username):("Sign in")} */}
              <i className="fas fa-user ms-1"></i>{" "}
            </Nav.Link>
            </div>}
           {console.log(username)}
           </Nav>
           
           
{IsLoggedIn &&
//  username != "Context" && 
 <div>
   <Nav className="me-5 px-5">
   <Nav> <Nav.Link ><Link to=" " style={linkStyle}>{username}</Link><i className="fas fa-user ms-1"></i>{" "}</Nav.Link> </Nav>
            <NavDropdown title="" id="basic-nav-dropdown" className="mx-0"> 
            
              <NavDropdown.Item >
                <Link to="/bank/editProfile">Edit Profile</Link>

              </NavDropdown.Item>
              <NavDropdown.Item >
                <Link to="/bank/updateInventory">Update Inventory</Link>
              </NavDropdown.Item>
              <NavDropdown.Item ><Link to="/bank/addCamp">Add Camp</Link></NavDropdown.Item>
              <NavDropdown.Item >
                <Link to="/bank/viewDonours">View Donours</Link>
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="/">Logout</NavDropdown.Item>
            </NavDropdown>
            

          </Nav>
          </div>}
          <Nav></Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;
