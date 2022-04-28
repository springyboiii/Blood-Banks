import { Component } from "react";
import "./Login.css";
import SlideShow from "./SlidesShow";
import Footer from "../Footer";
import logo from "../../image/favicon-32x32.png";
class Login extends Component {
  constructor() {
    super();
    this.state = { userName: "", password: "", isAuthenticated: false };
  }

  render() {
    return (
      <>
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
                    <label className="label" htmlFor="exampleInputEmail1">User Name</label>
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Enter User Name"
                      onChange={(e) => {
                        this.setState({ userName: e.target.value });
                      }}
                    />
                  </div>
                  <br />
                  <div className="form-group">
                    <label  className="label" htmlFor="exampleInputPassword1">Password</label>
                    <input
                      type="password"
                      className="form-control"
                      placeholder="Enter Password"
                      onChange={(e) => {
                        this.setState({ password: e.target.value });
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
                      >
                        LOGIN
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
        <Footer />
      </>
    );
  }
}

export default Login;
