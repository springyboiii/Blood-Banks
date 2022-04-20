import React from "react";
import { Card, Col, Row, Form, Table, Container } from "react-bootstrap";

const UpdateInventoryScreen = () => {
  return (
    <>
      <Table striped bordered hover variant="primary" className="mt-4" >
        <thead>
          <tr className="text-center">
            <th >Blood Type</th>
            <th>Availability</th>
          </tr>
        </thead>
        <tbody>
          <tr className="text-center">
            <td>A+</td>
            <td >
            <div style={{textAlign:"center"}}>
            <Form.Check
                type="checkbox"
                id="defaultcheckbox"
                label=""
                checked
              />
                </div>
             
            </td>
          </tr>
          <tr className="text-center">
            <td>A-</td>
            <td>
              {" "}
              <Form.Check type="checkbox" id="defaultcheckbox" label="" />
            </td>
          </tr>
          <tr className="text-center">
            <td>B+</td>
            <td>
              {" "}
              <Form.Check type="checkbox" id="defaultcheckbox" label="" />
            </td>
          </tr>
          <tr className="text-center">
            <td>B-</td>
            <td>
              {" "}
              <Form.Check
                type="checkbox"
                id="defaultcheckbox"
                label=""
                checked
              />
            </td>
          </tr>
          <tr className="text-center">
            <td>AB+</td>
            <td>
              {" "}
              <Form.Check type="checkbox" id="defaultcheckbox" label="" />
            </td>
          </tr>
          <tr className="text-center">
            <td>AB-</td>
            <td>
              {" "}
              <Form.Check type="checkbox" id="defaultcheckbox" label="" />
            </td>
          </tr>
          <tr className="text-center">
            <td>O+</td>
            <td>
              {" "}
              <Form.Check type="checkbox" id="defaultcheckbox" label="" />
            </td>
          </tr>
          <tr className="text-center">
            <td>O-</td>
            <td>
              {" "}
              <Form.Check type="checkbox" id="defaultcheckbox" label="" />
            </td>
          </tr>
        </tbody>
      </Table>
    </>
  );
};

export default UpdateInventoryScreen;
