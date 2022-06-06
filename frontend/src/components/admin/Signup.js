import { useState } from "react";
import "./styles/admin.css";
import Axios from "axios";

const Signup = () => {
  const [name, setName] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [description, setDescription] = useState("");
  const [contact, setContact] = useState("");
  const [location, setLoaction] = useState("");

  const submitHandler = (e) => {
    e.preventDefault();
  };
  const submitBloodbank = () => {
    Axios.post("https://blood-bank-g2.herokuapp.com/admin/dashboard/addBd", {
      name: name,
      username: username,
      password: password,
      email: email,
      description: description,
      contact: contact,
      location: location,
    }).then(() => {
      createInventory();
      alert("succesful insert");
    });
  };

  const createInventory = () => {
    Axios.post("https://blood-bank-g2.herokuapp.com/admin/dashboard/addInventory", {
      username: username,
    }).then(() => {});
  };
  return (
    <>
      <div className="container">
        <div className="centerBox">
          <form onSubmit={submitHandler}>
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
                  <label htmlFor="bloodBankUsername">Username</label>
                </div>
                <div className="col-8">
                  <input
                    type="text"
                    className="form-control input"
                    id="username"
                    onChange={(e) => {
                      setUsername(e.target.value);
                    }}
                  />
                </div>
              </div>
            </div>
            <br />
            <div className="form-group">
              <div className="row">
                <div className="col-4">
                  <label htmlFor="bloodBankPassword">Password</label>
                </div>
                <div className="col-8">
                  <input
                    type="text"
                    className="form-control input"
                    id="password"
                    onChange={(e) => {
                      setPassword(e.target.value);
                    }}
                  />
                </div>
              </div>
            </div>
            <br />
            <div className="form-group">
              <div className="row">
                <div className="col-4">
                  <label htmlFor="bloodBankEmail">Email</label>
                </div>
                <div className="col-8">
                  <input
                    type="text"
                    className="form-control input"
                    id="email"
                    onChange={(e) => {
                      setEmail(e.target.value);
                    }}
                  />
                </div>
              </div>
            </div>
            <br />
            <div className="form-group">
              <div className="row">
                <div className="col-4">
                  <label htmlFor="bloodBankDescription">Description</label>
                </div>
                <div className="col-8">
                  <input
                    type="text"
                    className="form-control input"
                    id="description"
                    onChange={(e) => {
                      setDescription(e.target.value);
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
                  onClick={submitBloodbank}
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
