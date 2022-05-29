import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import PublicLayout from "./LAYOUT/PublicLayout";
import AdminLayout from "./LAYOUT/AdminLayout";
import Login from "./components/login/Login";
import bloodbanks from "./bloodbanks";
import React, { useState } from "react";
import campaigns from "./campaigns";
// import { render } from "../../backend/app";
class App extends React.Component{
  constructor(props){
    super(props);
    this.state={apiResponse:"",bloodbanksState : bloodbanks,campaignsState :campaigns , username:""};
  }
  callAPI(){
    fetch("http://localhost:9000/test")
    .then(res =>res.text())
    .then(res =>this.setState({apiResponse : res}))

  }
  componentWillMount(){
    this.callAPI();
  }
  setUsername=(username1)=>{
    console.log(username1,"hello");
    this.setState({username:username1}, () => {
      console.log(this.state.username, 'App.js username');
    
  })}
  // shouldComponentUpdate() {
  //   console.log('Greeting - shouldComponentUpdate lifecycle');

  //   return false;
  // }

render(){
 
  return (
    
    <Router>
      <Routes>
        <Route path="/signIn*" element={<Login setUsername={this.setUsername}/>} />
        <Route path="/admin/*" element={<AdminLayout bloodbanks={this.state.bloodbanksState} />} />
        <Route path="/" element={<PublicLayout bloodbanks={this.state.bloodbanksState} campaigns={this.state.campaignsState} username={this.state.username}/>} />
      </Routes>
    </Router>
  );
  
}
}

export default App;
