import { Routes, Route, useLocation } from "react-router-dom";
import NotFoundPage from "../NotFoundPage";
import "./styles/admin.css";
import BloodBankTable from "./BloodBankTable";
import Delete from "./Delete";
import Signup from "./Signup";
import Upadate from "./Update";
import Navbar from "./Navbar";
import { useEffect, useState } from "react";
const Dashborad = ({ bloodbanks }) => {
  // let bloodBankList = [
  //   { id: 1, name: "rukshan", location: "xxx", contactNumber: "xxxxxxxxxx" },
  //   { id: 2, name: "supun", location: "xxx", contactNumber: "xxxxxxxxxx" },
  // ];
  const url = useLocation();
  const [isDash, setIsDash] = useState(
    window.location.href === "http://localhost:3000/admin/dashboard"
  );
  function handleIsDash(url) {
    setIsDash(url === "http://localhost:3000/admin/dashboard");
  }
  useEffect(() => {
    handleIsDash(window.location.href);
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
