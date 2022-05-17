import React from "react";
import { LinkContainer } from "react-router-bootstrap";
import { Table, Button } from "react-bootstrap";
import users from "../users";

const ViewDonoursScreen = () => {
  return (
    <>
      <div style={{ display: "flex", flexDirection: "row" }} className="mb-3">
        <h1>Donours</h1>
        <LinkContainer to={`/donour/add`}>
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
          {users.map((user) => (
            <tr key={user._id}>
              <td>{user._id}</td>
              <td>{user.name}</td>
              <td>{user.blood}</td>
              <td>{user.address}</td>
              <td>{user.phone}</td>
              <td>
                <a href={`mailto:${user.email}`}>{user.email}</a>
              </td>

              <td>
                <LinkContainer to={`/donour/edit/${user._id}`}>
                  <Button variant="light" className="btn-sm">
                    <i className="fas fa-edit"></i>
                  </Button>
                </LinkContainer>
                <LinkContainer to={`/donour/delete`}>
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
