import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Form, Table, Button } from "react-bootstrap";
import Axios from "axios";

const UpdateInventoryScreen = () => {
  const params = useParams();
  const [a_pos, setAp] = useState(0);
  const [a_neg, setAn] = useState(0);
  const [b_pos, setBp] = useState(0);
  const [b_neg, setBn] = useState(0);
  const [ab_pos, setABp] = useState(0);
  const [ab_neg, setABn] = useState(0);
  const [o_pos, setOp] = useState(0);
  const [o_neg, setOn] = useState(0);
  const [bank_ID, setBank_ID] = useState(params.bank_ID);

  useEffect(() => {
    getInventory();
  }, []);

  const getInventory = async () => {
    let result = await fetch(`http://localhost:9000/getInventory/${bank_ID}`);
    result = await result.json();
    setAp(result[0].a_pos);
    setAn(result[0].a_neg);
    setBp(result[0].b_pos);
    setBn(result[0].b_neg);
    setABp(result[0].ab_pos);
    setABn(result[0].ab_neg);
    setOp(result[0].o_pos);
    setOn(result[0].o_neg);
  };

  const submitHandler = (e) => {
    e.preventDefault();
  };

  const submit = (bank_ID) => {
    Axios.post(`http://localhost:9000/updateInventory/${bank_ID}`, {
      a_pos: a_pos,
      a_neg: a_neg,
      b_pos: b_pos,
      b_neg: b_neg,
      ab_pos: ab_pos,
      ab_neg: ab_neg,
      o_pos: o_pos,
      o_neg: o_neg,
      bank_ID: bank_ID,
    }).catch((error) => {
      console.log(error.response.data);
    });
    window.location.href = "/dashboard";
  };

  return (
    <div onSubmit={submitHandler}>
      <Table striped bordered hover variant="primary" className="mt-4">
        <thead>
          <tr className="text-center">
            <th>Blood Type</th>
            <th>Availability</th>
          </tr>
        </thead>
        <tbody>
          <tr className="text-center">
            <td>A+</td>
            <td>
              <div style={{ textAlign: "center" }}>
                <input
                  type="checkbox"
                  name="A+"
                  id="defaultcheckbox"
                  checked={a_pos ? 1 : 0}
                  //value={a_pos}
                  onChange={(e) => setAp(e.target.checked ? 1 : 0)}
                />
              </div>
            </td>
          </tr>
          <tr className="text-center">
            <td>A-</td>
            <td>
              <div style={{ textAlign: "center" }}>
                <input
                  type="checkbox"
                  name="A-"
                  id="defaultcheckbox"
                  checked={a_neg ? 1 : 0}
                  //value={a_neg}
                  onChange={(e) => setAn(e.target.checked ? 1 : 0)}
                />
              </div>
            </td>
          </tr>
          <tr className="text-center">
            <td>B+</td>
            <td>
              <input
                type="checkbox"
                name="B+"
                id="defaultcheckbox"
                checked={b_pos ? 1 : 0}
                // value={b_pos}
                onChange={(e) => setBp(e.target.checked ? 1 : 0)}
              />
            </td>
          </tr>
          <tr className="text-center">
            <td>B-</td>
            <td>
              <input
                type="checkbox"
                name="B-"
                id="defaultcheckbox"
                checked={b_neg ? 1 : 0}
                // value={b_neg}
                onChange={(e) => setBn(e.target.checked ? 1 : 0)}
              />
            </td>
          </tr>
          <tr className="text-center">
            <td>AB+</td>
            <td>
              <input
                type="checkbox"
                name="AB+"
                id="defaultcheckbox"
                checked={ab_pos ? 1 : 0}
                // value={ab_pos}
                onChange={(e) => setABp(e.target.checked ? 1 : 0)}
              />
            </td>
          </tr>
          <tr className="text-center">
            <td>AB-</td>
            <td>
              <input
                type="checkbox"
                name="AB-"
                id="defaultcheckbox"
                checked={ab_neg ? true : false}
                //value={ab_neg}
                onChange={(e) => setABn(e.target.checked ? 1 : 0)}
              />
            </td>
          </tr>
          <tr className="text-center">
            <td>O+</td>
            <td>
              <input
                type="checkbox"
                name="O+"
                id="defaultcheckbox"
                checked={o_pos ? 1 : 0}
                // value={o_pos}
                onChange={(e) => setOp(e.target.checked ? 1 : 0)}
              />
            </td>
          </tr>
          <tr className="text-center">
            <td>O-</td>
            <td>
              <input
                type="checkbox"
                name="O-"
                id="defaultcheckbox"
                checked={o_neg ? 1 : 0}
                // value={o_neg}
                onChange={(e) => setOn(e.target.checked ? 1 : 0)}
              />
            </td>
          </tr>
        </tbody>
      </Table>
      <Button
        variant="info"
        className="justify-content-center"
        onClick={() => submit(bank_ID)}
      >
        Update Inventory
      </Button>
    </div>
  );
};

export default UpdateInventoryScreen;