import "./Login.css";
import SlideShow from "./SlidesShow";
import Footer from "../Footer";
import logo from "../../image/favicon-32x32.png";
import Axios from "axios";
import EditProfileScreen from "../../screens/EditProfileScreen";
// import Footer from "../Footer";
import React, { useState, useContext, createContext } from "react";
import { UserContext } from "../../UserContext";

const Login = () => {
  const { username, setUsernameState } = useContext(UserContext);

  const [Username, setUsername] = useState("");
  const [Password, setPassword] = useState("");
  const [IsLoggedIn, setIsLoggedIn] = useState(false);
  const submitCredentials = (e) => {
    // setUsernameContext(Username);
    e.preventDefault();
    if (Username === "admin" && Password === "admin") {
      localStorage.setItem("username", JSON.stringify(Username));
      localStorage.setItem("type", JSON.stringify("admin"));
      window.open("/admin/dashboard", "_self");
    }
    Axios.post("https://blood-bank-g2.herokuapp.com/signIn", {
      userName: Username,
      password: Password,
    }).then((response) => {
      if (response.data.message) {
        setIsLoggedIn(false);
      } else {
        // this.setState({isAuthenticated:response.data[0].username});
        // this.props.setUsername(this.state.userName);
        // setUsernameContext(Username);
        setIsLoggedIn(true);
        setUsernameState(Username);
        localStorage.setItem("username", JSON.stringify(Username));
        localStorage.setItem("type", JSON.stringify("bloodBank"));
        //alert("logged in");

        window.open("/bank/welcome", "_self");
      }
    });
  };

  return (
    <>
      {/* {IsLoggedIn && <div><Header  isLoggedIn={true}/> <EditProfileScreen username={Username}/></div>} */}

      {/* {!IsLoggedIn && */}
      <div style={{ backgroundColor: "#be847a", height: "100vh" }}>
        <div className="nav-header">
          <nav
            className="navbar"
            style={{
              backgroundColor: "#880808",
              color: "white",
              border: "2px solid black",
            }}
          >
            <h2 className="navbar-brand" style={{ marginLeft: "1%" }}>
              <img className="img" src={logo} alt="logo" /> Donating blood
            </h2>
          </nav>
        </div>
        <div className="box container" style={{ backgroundColor: "#be847a" }}>
          <div className="row">
            <div
              className="col-4 form"
              style={{ backgroundColor: "#880808", color: "white" }}
            >
              <form>
                <h2 style={{ textAlign: "center" }}>Login</h2>
                <br />
                <br />
                <div className="form-group">
                  <label className="label" htmlFor="exampleInputEmail1">
                    User Name
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Enter User Name"
                    onChange={(e) => {
                      setUsername(e.target.value);
                    }}
                  />
                </div>
                <br />
                <div className="form-group">
                  <label className="label" htmlFor="exampleInputPassword1">
                    Password
                  </label>
                  <input
                    type="password"
                    className="form-control"
                    placeholder="Enter Password"
                    onChange={(e) => {
                      setPassword(e.target.value);
                    }}
                  />
                </div>
                <br />
                <div className="row">
                  <div className="col-2"></div>
                  <div className="col-5">
                    <button
                      type="submit"
                      className="btn btn-info"
                      style={{ width: "150%" }}
                      onClick={submitCredentials}
                    >
                      {
                        //<Link to= {username!=""?("/bank/editProfile"):("")}>LOGIN</Link>
                      }
                      Login
                    </button>
                  </div>
                  <div className="col-5"></div>
                </div>
              </form>
            </div>
            <div className="col-8">
              <SlideShow />
            </div>
          </div>
        </div>
      </div>
      {/* }  */}
      <Footer />
    </>
  );
};

export default Login;
