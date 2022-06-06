import { Routes, Route, useLocation, useNavigate } from "react-router-dom";
import NotFoundPage from "../NotFoundPage";
import "./styles/admin.css";
import BloodBankTable from "./BloodBankTable";
import Delete from "./Delete";
import Signup from "./Signup";
import Upadate from "./Update";
import Navbar from "./Navbar";
import { useEffect, useState } from "react";
const Dashborad = ({ bloodbanks }) => {
  let navigate = useNavigate();
  const url = useLocation();
  const [isDash, setIsDash] = useState(
    window.location.href === "https://blood-bank-g2.herokuapp.com/admin/dashboard"
  );
  function handleIsDash(url) {
    setIsDash(url === "https://blood-bank-g2.herokuapp.com/admin/dashboard");
  }
  useEffect(() => {
    handleIsDash(window.location.href);
    if (
      !(
        JSON.parse(localStorage.getItem("type")) === "admin" &&
        JSON.parse(localStorage.getItem("username")) === "admin"
      )
    ) {
      navigate("/signIn");
    }
  }, [url]);
  return (
    <>
      <Navbar isDash={isDash} />
      <br />
      <div className="container">
        <Routes>
          <Route
            path=""
            element={<BloodBankTable bloodBankList={bloodbanks} />}
          ></Route>
          <Route path="addBd" element={<Signup />}></Route>
          <Route
            path=":id/edit"
            element={<Upadate bloodBankList={bloodbanks} />}
          ></Route>
          <Route
            path=":id/delete"
            element={<Delete bloodBankList={bloodbanks} />}
          ></Route>
          <Route path="*" element={<NotFoundPage />}></Route>
        </Routes>
      </div>
    </>
  );
};

export default Dashborad;
