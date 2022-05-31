import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import PublicLayout from "./LAYOUT/PublicLayout";
import AdminLayout from "./LAYOUT/AdminLayout";
import BankLayout from "./LAYOUT/BankLayout";
import Login from "./components/login/Login";
import bloodbanks from "./bloodbanks";
import React, { useState, useContext, createContext,useEffect } from "react";
import campaigns from "./campaigns";
import { UserContext } from "./UserContext";

const App = () => {
  const [username, setUsernameState] = useState("Context");
  // const username="Context";
  // const setUsername = (username1) => {
  //   setUsernameState(username1);
  // };
  useEffect(() => {
    if(localStorage.getItem('username')) {
      setUsernameState(JSON.parse(localStorage.getItem('username')));
    }
  }, []);

  return (
    <Router>
      <Routes>
        <Route path="/admin/*" element={<AdminLayout />} />

        <Route
          path="*"
          element={
            <UserContext.Provider value={{ username, setUsernameState }}>
              <PublicLayout />
            </UserContext.Provider>
          }
        />

        <Route
          path="/bank/*"
          element={
            <UserContext.Provider value={{ username, setUsernameState }}>
              <BankLayout />
            </UserContext.Provider>
          }
        />
        <Route
          path="/signIn*"
          element={
            <UserContext.Provider value={{ username, setUsernameState }}>
              <Login />
            </UserContext.Provider>
          }
        />
      </Routes>
    </Router>
  );
};

export default App;
