import { Routes, Route, Link } from "react-router-dom";
import NotFoundPage from "../NotFoundPage";
import "./styles/admin.css";
import logo from "../../image/favicon-32x32.png";
import BloodBankTable from "./BloodBankTable";
import Delete from "./Delete";
import Signup from "./Signup";
import Upadate from "./Update";
import bloodbanks from "../../bloodbanks";
const Dashborad = ({bloodbanks}) => {
  // let bloodBankList = [
  //   { id: 1, name: "rukshan", location: "xxx", contactNumber: "xxxxxxxxxx" },
  //   { id: 2, name: "supun", location: "xxx", contactNumber: "xxxxxxxxxx" },
  // ];
  
  return (
    <>
      <div className="nav-header">
        <div className="row">
          <nav
            className="navbar"
            style={{
              backgroundColor: "#880808",
              color: "white",
              border: "2px solid black",
            }}
          >
            <div className="col-4">
              <h2 className="navbar-brand" style={{ marginLeft: "5%" }}>
                <img src={logo} alt="logo" /> Donating blood
              </h2>
            </div>
            <div className="col-3"></div>
            <div className="col-3 btn-block">
              <Link to="/" className="btn btn-primary">
                Log out
              </Link>{" "}
              &#160;
              <Link to="/admin/dashboard/addBd" className="btn btn-primary">
                Add blood bank
              </Link>
            </div>
          </nav>
        </div>
      </div>
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
