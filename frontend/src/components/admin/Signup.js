import { useState } from "react";
import "./styles/admin.css";
const Signup = () => {
  const [name, setName] = useState("");
  const [contact, setContact] = useState("");
  const [location, setLoaction] = useState("");
  return (
    <>
      <div className="container">
        <div className="centerBox">
          <form>
            <div className="form-group">
              <div className="row">
                <div className="col-4">
                  <label htmlFor="bloodBankName">Blood Bank Name</label>
                </div>
                <div className="col-8">
                  <input
                    type="text"
                    className="form-control input"
                    id="bloodBankName"
                    onChange={(e) => {
                      setName(e.target.value);
                    }}
                  />
                </div>
              </div>
            </div>
            <br />
            <div className="form-group">
              <div className="row">
                <div className="col-4">
                  <label htmlFor="bloodBankLocation">Blood Bank Location</label>
                </div>
                <div className="col-8">
                  <input
                    type="text"
                    className="form-control input"
                    id="bloodBankLocation"
                    onChange={(e) => {
                      setLoaction(e.target.value);
                    }}
                  />
                </div>
              </div>
            </div>
            <br />
            <div className="form-group">
              <div className="row">
                <div className="col-4">
                  <label htmlFor="bloodBankcontactNumber">
                    Blood Bank contact
                  </label>
                </div>
                <div className="col-8">
                  <input
                    type="text"
                    className="form-control input"
                    id="bloodBankcontactNumber"
                    onChange={(e) => {
                      setContact(e.target.value);
                    }}
                  />
                </div>
              </div>
            </div>
            <br />
            <div className="row">
              <div className="col-2"></div>
              <div className="col-6">
                <button
                  type="submit"
                  className="btn btn-primary"
                  style={{ width: "150%" }}
                >
                  Creat account
                </button>
              </div>
              <div className="col-3"></div>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default Signup;
