import { useState } from "react";
import "./styles/bloodBank.css";
const AddDonor = () => {
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
                  <label htmlFor="donorName">Donor Name</label>
                </div>
                <div className="col-8">
                  <input
                    type="text"
                    className="form-control"
                    id="donorName"
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
                  <label htmlFor="donorLocation">Donor Location</label>
                </div>
                <div className="col-8">
                  <input
                    type="text"
                    className="form-control"
                    id="donorLocation"
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
                  <label htmlFor="donorcontactNumber">Donor contact</label>
                </div>
                <div className="col-8">
                  <input
                    type="text"
                    className="form-control"
                    id="donorcontactNumber"
                    onChange={(e) => {
                      setContact(e.target.value);
                    }}
                  />
                </div>
              </div>
            </div>
            <br />
            <div className="row">
              <div className="col-4"></div>
              <div className="col-4">
                <button type="submit" className="btn btn-primary">
                  Creat account
                </button>
              </div>
              <div className="col-4"></div>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default AddDonor;
