import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import PublicLayout from "./LAYOUT/PublicLayout";
import AdminLayout from "./LAYOUT/AdminLayout";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/admin/*" element={<AdminLayout/>} />
        <Route path="/*" element={<PublicLayout />}  />
      </Routes>
    </Router>
  );
}

export default App;
