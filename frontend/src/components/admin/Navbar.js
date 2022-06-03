import { useNavigate } from "react-router-dom";
import logo from "../../image/favicon-32x32.png";
import { Link } from "react-router-dom";
const Navbar = ({ isDash }) => {
  let navigate = useNavigate();
  const logout = () => {
    navigate("/signIn");
    localStorage.removeItem("type");
    localStorage.removeItem("username");
  };
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
          <div className="col-2"></div>
          <div className="col-4 btn-block">
            <Link to="/" className="btn btn-primary" onClick={logout}>
              Log out
            </Link>{" "}
            &#160;
            <Link to="/admin/dashboard/addBd" className="btn btn-primary">
              Add blood bank
            </Link>{" "}
            &#160;
            {!isDash && (
              <Link to="/admin/dashboard" className="btn btn-primary">
                dashboard
              </Link>
            )}{" "}
          </div>
        </nav>
      </div>
    </div>
  );
};

export default Navbar;
