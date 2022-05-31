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
  const logout=()=>{
    localStorage.setItem('username', JSON.stringify(""));
    setUsernameState("");
  }
    
    return (
    
    <Navbar className="px-5" bg="primary" expand="lg" variant="dark">
       {/* <h1>{username}</h1>
      <h1>{JSON.parse(localStorage.getItem('username'))}Storage</h1> */}
      <Container fluid>
   
        <Navbar.Brand href="/"></Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: "100px" }}
            navbarScroll
          >
            <Nav.Link ><Link to={username==""?"/":"/bank"} style={linkStyle}>Home</Link></Nav.Link>
            <Nav.Link ><Link to={username==""?"/viewCamp":"/bank/viewCamp"} style={linkStyle}>Campaign</Link></Nav.Link>
            
            
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


<Nav className="me-5 px-5"> <Nav.Link ><Link to="/signIn" style={linkStyle}>{username!=""?username:"Sign up"}</Link><i className="fas fa-user ms-1"></i>{" "}</Nav.Link> 
           
           
{IsLoggedIn &&
//  username != "Context" && 
 <div>
   
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
              <NavDropdown.Item ><Link to="/" onClick={logout}>Log Out</Link></NavDropdown.Item>
            </NavDropdown>
            

          
          </div>}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;
