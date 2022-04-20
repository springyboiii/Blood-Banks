import { Component } from "react";
import "./Login.css";
import SlideShow from "./SlidesShow";
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
              style={{ backgroundColor: "#880808", color: "white" }}
            >
              <h2 className="navbar-brand" style={{ marginLeft: "1%" }}>
                 <img src={logo} alt="logo" /> Donating blood
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
                  <h3 style={{ textAlign: "center" }}>Login</h3>
                  <div className="form-group">
                    <label htmlFor="exampleInputEmail1">User Name</label>
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Enter User Name"
                      onChange={(e) => {
                        this.setState({ userName: e.target.value });
                      }}
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="exampleInputPassword1">Password</label>
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
                  <br />
                  <div className="row">
                    <div className="col-2"></div>
                    <div className="col-6">
                      <button type="submit" className="btn btn-info">
                        LOGIN
                      </button>
                    </div>
                    <div className="col-4"></div>
                  </div>
                </form>
              </div>
              <div className="col-8">
                <SlideShow />
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default Login;
