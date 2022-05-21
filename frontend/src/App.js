import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import PublicLayout from "./LAYOUT/PublicLayout";
import AdminLayout from "./LAYOUT/AdminLayout";
import Login from "./components/login/Login";
import bloodbanks from "./bloodbanks";
import { useState } from "react";
function App() {
  const [bloodbanksState, setBloodBanks] = useState(bloodbanks);
  return (
    <Router>
      <Routes>
        <Route path="/signIn*" element={<Login />} />
        <Route path="/admin/*" element={<AdminLayout />} />
        <Route path="/*" element={<PublicLayout bloodbanks={bloodbanks}/>} />
      </Routes>
    </Router>
  );
}

export default App;
