import React, { useState, useEffect } from "react";
import { LinkContainer } from "react-router-bootstrap";
import { Table, Button } from "react-bootstrap";
import Axios from "axios";
import { useNavigate } from "react-router-dom";
const ViewDonoursScreen = () => {
  let navigate = useNavigate();
  const [donorList, setDonorList] = useState([]);
  useEffect(() => {
    if (!(JSON.parse(localStorage.getItem("type")) === "bloodBank")) {
      navigate("/signIn");
    }
    async function fetchData() {
      const req = await Axios.get("https://blood-bank-g2.herokuapp.com/viewDonours");
      setDonorList(req.data);
    }
    fetchData();
  }, []);

  return (
    <>
      <div style={{ display: "flex", flexDirection: "row" }} className="mb-3">
        <h1>Donours</h1>
        <LinkContainer to={`/bank/donour/add`}>
          <Button variant="info" className="mx-3 sm">
            <i className="fas fa-plus"></i>
          </Button>
        </LinkContainer>
      </div>

      <Table striped bordered hover responsive className="table-sm">
        <thead>
          <tr>
            <th>ID</th>
            <th>NAME</th>
            <th>Blood</th>
            <th>Address</th>
            <th>Phone</th>
            <th>EMAIL</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {donorList.map((val, key) => (
            <tr key={donorList._id}>
              <td>{val.ID}</td>
              <td>{val.name}</td>
              <td>{val.b_type}</td>
              <td>{val.address}</td>
              <td>{val.contact_no}</td>
              <td>
                <a href={`mailto:${val.email}`}>{val.email}</a>
              </td>

              <td>
                <LinkContainer to={`/bank/donour/edit/${val.ID}`}>
                  <Button variant="light" className="btn-sm">
                    <i className="fas fa-edit"></i>
                  </Button>
                </LinkContainer>
                <LinkContainer to={`/bank/donour/delete/${val.ID}`}>
                  <Button variant="primary" className="btn-sm">
                    <i className="fas fa-trash"></i>
                  </Button>
                </LinkContainer>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </>
  );
};

export default ViewDonoursScreen;
