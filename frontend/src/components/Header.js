import React from "react";
import { useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { Navbar, Nav, Container, NavDropdown } from "react-bootstrap";
import { useContext } from "react";
import { Link } from "react-router-dom";
import { UserContext } from "../UserContext";
const Header = ({ IsLoggedIn }) => {
  // const [username1, setUsername] = useState(username)
  // const [IsLoggedIn, setIsLoggedIn] = useState(isLoggedIn)
  let navigate = useNavigate();
  const url = useLocation();
  const { username, setUsernameState } = useContext(UserContext);
  const linkStyle = {
    margin: "1rem",
    textDecoration: "none",
    color: "white",
  };
  const logout = () => {
    navigate("/signIn");
    localStorage.removeItem("type");
    localStorage.removeItem("username");
    setUsernameState("");
  };
  return (
    <Navbar className="px-5 nav-header" bg="primary" expand="lg" variant="dark">
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
            <Nav.Link>
              <Link to={username === "" ? "/" : "/bank"} style={linkStyle}>
                Home
              </Link>
            </Nav.Link>
            <Nav.Link>
              <Link
                to={username === "" ? "/viewCamp" : "/bank/viewCamp"}
                style={linkStyle}
              >
                Campaign
              </Link>
            </Nav.Link>
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
            {" "}
            <h2>
              {username !== ""
                ? JSON.parse(localStorage.getItem("username"))
                : ""}
            </h2>
            <Nav.Link>
              <Link to="/signIn" style={linkStyle}>
                {localStorage.getItem("username") ? "" : "Login"}
              </Link>
              {JSON.parse(localStorage.getItem("username")) && (
                <i className="fas fa-user ms-1"></i>
              )}
            </Nav.Link>
            {
              //IsLoggedIn &&
              localStorage.getItem("username") && (
                <div>
                  <NavDropdown
                    title=""
                    id="basic-nav-dropdown"
                    className="mx-0"
                  >
                    <NavDropdown.Item>
                      <Link to="/bank/editProfile">Edit Profile</Link>
                    </NavDropdown.Item>
                    <NavDropdown.Item>
                      <Link to="/bank/updateInventory">Update Inventory</Link>
                    </NavDropdown.Item>
                    <NavDropdown.Item>
                      <Link to="/bank/addCamp">Add Camp</Link>
                    </NavDropdown.Item>
                    <NavDropdown.Item>
                      <Link to="/bank/viewDonours">View Donours</Link>
                    </NavDropdown.Item>
                    <NavDropdown.Divider />
                    <NavDropdown.Item>
                      <Link to="/" onClick={logout}>
                        Log Out
                      </Link>
                    </NavDropdown.Item>
                  </NavDropdown>
                </div>
              )
            }
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;
