import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import PublicLayout from "./LAYOUT/PublicLayout";
import AdminLayout from "./LAYOUT/AdminLayout";
import Login from "./components/login/Login";
import bloodbanks from "./bloodbanks";
import React, { useState, useContext, createContext } from "react";
import campaigns from "./campaigns";
import { UserContext } from "./UserContext";

const App = () => {
  const [username, setUsernameState] = useState("Context");
  // const username="Context";
  // const setUsername = (username1) => {
  //   setUsernameState(username1);
  // };
  return (
    <Router>
      <Routes>
        

        <Route
          path="/admin/*"
          element={<AdminLayout />}
        />

        <Route
          path="*"
          element={
            <UserContext.Provider value={{username,setUsernameState}}>
              <PublicLayout/>
             </UserContext.Provider> 
          }
        />
        <Route
          path="/signIn*"
          element={
            <UserContext.Provider value={{username,setUsernameState}}>
              <Login />
            </UserContext.Provider>
          }
        />
      </Routes>
    </Router>
  );
};

export default App;
