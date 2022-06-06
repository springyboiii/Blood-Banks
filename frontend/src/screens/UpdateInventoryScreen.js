import React, { useState, useEffect, useContext } from "react";
import { useParams } from "react-router-dom";
import { Form, Table, Button } from "react-bootstrap";
import Axios from "axios";
import { UserContext } from "../UserContext";
import { useNavigate } from "react-router-dom";

const UpdateInventoryScreen = () => {
  let navigate = useNavigate();
  const { username, setUsernameState } = useContext(UserContext);
  const [username1, setUsername] = useState(username);
  //const params = useParams();
  const [a_pos, setAp] = useState(0);
  const [a_neg, setAn] = useState(0);
  const [b_pos, setBp] = useState(0);
  const [b_neg, setBn] = useState(0);
  const [ab_pos, setABp] = useState(0);
  const [ab_neg, setABn] = useState(0);
  const [o_pos, setOp] = useState(0);
  const [o_neg, setOn] = useState(0);
  //const [bank_ID, setBank_ID] = useState(params.bank_ID);
  const [bank_ID, setBank_ID] = useState(0);

  // useEffect(() => {
  //   return () => {
  //     setUsername(username);
  //     Axios.post("http://localhost:9000/bankID", {
  //       username: username1,
  //     }).then((response) => {
  //       console.log(response.data);
  //       setBank_ID(response.data[0].ID);
  //       console.log(bank_ID);
  //     });
  //     Axios.get("http://localhost:9000/getInventory", {
  //       bank_ID: bank_ID,
  //     }).then((response) => {
  //       console.log(response.data);
  //       setAp(response[0].a_pos);
  //       //setBank_ID(response.data[0].ID);

  //     });
  //   };
  // }, []);
  useEffect(() => {
    getInventory();
    if (!(JSON.parse(localStorage.getItem("type")) === "bloodBank")) {
      navigate("/signIn");
    }
  }, []);

  const getInventory = async () => {
    let result = await fetch(
      `https://blood-bank-g2.herokuapp.com/bank/getInventory/${username}`
    );
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

  // useEffect(() => {
  //   return () => {
  //     Axios.post("http://localhost:9000/getInventory", {
  //       bank_ID: bank_ID,
  //     }).then((result) => {
  //       setAp(result[0].a_pos);
  //       setAn(result[0].a_neg);
  //       setBp(result[0].b_pos);
  //       setBn(result[0].b_neg);
  //       setABp(result[0].ab_pos);
  //       setABn(result[0].ab_neg);
  //       setOp(result[0].o_pos);
  //       setOn(result[0].o_neg);
  //     });
  //   };
  // }, []);

  // useEffect(() => {
  //   getInventory();
  // }, []);

  // const getInventory = async () => {
  //   // let result = await fetch(`http://localhost:9000/getInventory/${bank_ID}`);
  //   let result = await fetch(`http://localhost:9000/getInventory`,{bank_ID});
  //   result = await result.json();
  //   setAp(result[0].a_pos);
  //   setAn(result[0].a_neg);
  //   setBp(result[0].b_pos);
  //   setBn(result[0].b_neg);
  //   setABp(result[0].ab_pos);
  //   setABn(result[0].ab_neg);
  //   setOp(result[0].o_pos);
  //   setOn(result[0].o_neg);
  // };

  const submitHandler = (e) => {
    e.preventDefault();
  };

  const submit = (username) => {
    Axios.post(`https://blood-bank-g2.herokuapp.com/bank/updateInventory/${username}`, {
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
    alert("Successfully updated!!");
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
      <div style={{ textAlign: "center" }}>
        <Button
          variant="info"
          className="justify-content-center my-4"
          onClick={() => submit(username)}
        >
          Update Inventory
        </Button>
      </div>
    </div>
  );
};

export default UpdateInventoryScreen;
