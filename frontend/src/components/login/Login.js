import { Component } from "react";
import "./Login.css";
import SlideShow from "./SlidesShow";
import Footer from "../Footer";
import logo from "../../image/favicon-32x32.png";
import Axios from "axios";
import { Navigate } from 'react-router-dom';
import EditProfileScreen from "../../screens/EditProfileScreen";
import Header from "../Header";
// import Footer from "../Footer";
class Login extends Component {
  constructor(props) {
    super(props);
    this.state = { userName: "", password: "", isAuthenticated: false};
  }
  
  //  submitHandler = (e) => {
  //   e.preventDefault();
  // };
  
   submitCredentials=(e)=>{
    e.preventDefault();
    
    Axios.post("http://localhost:9000/signIn", {
      
      userName: this.state.userName,
      password: this.state.password,
      
    }).then((response)=>{
      if (response.data.message){
        this.setState({isAuthenticated:false},() => {
          console.log(this.state.isAuthenticated, 'isAuthenticated');
        
      });
        // console.log(this.state.isAuthenticated);
      }else{
        // this.setState({isAuthenticated:response.data[0].username});
        this.props.setUsername(this.state.userName);
        // console.log(this.state.userName);
        this.setState({isAuthenticated:true});
        
        alert("logged in")
        // console.log(response);
        // window.open("/editProfile","_self");
        
      
      }
      
    });
    
  };



  render() {
    return (
      
      <>
             {this.state.isAuthenticated && <div><Header username={this.state.userName} isLoggedIn={true}/> <EditProfileScreen username={this.state.userName}/></div>}

        {!this.state.isAuthenticated &&<div style={{ backgroundColor: "#be847a", height: "100vh" }}>
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
                <form onSubmit={this.submitHandler}>
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
                        // console.log(e.target.value);
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
                        onClick={this.submitCredentials}
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
        </div>}
        <Footer />
       
      </>
    );
  }
}

export default Login;
