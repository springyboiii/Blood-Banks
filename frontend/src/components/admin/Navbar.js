import logo from "../../image/favicon-32x32.png";
import { Link } from "react-router-dom";
const Navbar = ({ isDash }) => {
  return (
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
            {!isDash && (
              <Link to="/admin/dashboard" className="btn btn-primary">
                dashboard
              </Link>
            )}{" "}
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
  );
};

export default Navbar;
