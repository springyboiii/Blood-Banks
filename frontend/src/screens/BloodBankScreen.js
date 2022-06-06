import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Row, Col, Image, ListGroup, Card, Button } from "react-bootstrap";
import BloodInventory from "../components/BloodInventory";
import bloodbanks from "../bloodbanks";
import { useParams } from "react-router-dom";
import Axios from "axios";
import { UserContext } from "../UserContext";


const BloodBankScreen = () => {
  const params = useParams();
  const [a_pos, setAp] = useState("");
  const [a_neg, setAn] = useState("");
  const [b_pos, setBp] = useState("");
  const [b_neg, setBn] = useState("");
  const [ab_pos, setABp] = useState("");
  const [ab_neg, setABn] = useState("");
  const [o_pos, setOp] = useState("");
  const [o_neg, setOn] = useState("");
  const [bank_ID, setBank_ID] = useState(params.bank_ID);
  const [name, setName] = useState("");
  const [address, setAddress] = useState("");
  const [email, setEmail] = useState("");
  const [contact_no, setContact_no] = useState("");
  const [about, setAbout] = useState("");

  //const bloodbank = bloodbanks.find((p) => p._id === "1");

  useEffect(() => {
    return ()=>{
      getInventory();
      getBank();
    }
  }, []);

  const getInventory = async () => {
    let result1 = await fetch(
      `https://blood-bank-g2.herokuapp.com/getInventoryDetails/${bank_ID}`
    );
    //console.log(bank_ID);
    result1 = await result1.json();
    //console.log(result1);
    setAp(result1[0].a_pos);
    setAn(result1[0].a_neg);
    setBp(result1[0].b_pos);
    setBn(result1[0].b_neg);
    setABp(result1[0].ab_pos);
    setABn(result1[0].ab_neg);
    setOp(result1[0].o_pos);
    setOn(result1[0].o_neg);
    //console.log(result1,"jedbhe");
  };

  const getBank = async () => {
    let result2 = await fetch(`https://blood-bank-g2.herokuapp.com/getBank/${bank_ID}`);
    result2 = await result2.json();
     //console.log(result2);
    setName(result2[0].name);
    setAddress(result2[0].address);
    setEmail(result2[0].email);
    setContact_no(result2[0].contact_no);
    setAbout(result2[0].about);
  };

  return (
    <>
      <a className="btn btn-light my-3" href="/">
        Go Back
      </a>

      <Row>
        <Col md={6}>
          <Image src="/images/blood1.jpg" alt={name} fluid />
          <p className="my-3">{about}</p>
        </Col>
        <Col md={2}></Col>
        <Col md={4}>
          <ListGroup variant="flush" className="mb-5">
            <ListGroup.Item>
              <h3>{name}</h3>
            </ListGroup.Item>
            <ListGroup.Item>
              <i class="fas fa-location-arrow mx-2"></i>Address: {address}
            </ListGroup.Item>

            <ListGroup.Item>
              <i class="fas fa-envelope mx-2"></i>Email: {email}
            </ListGroup.Item>
            <ListGroup.Item>
              <i class="fas fa-phone mx-2"></i>Telephone:
              {contact_no}
            </ListGroup.Item>
          </ListGroup>

          <BloodInventory
            resultValues={{
              bank_ID:bank_ID,
              // a_pos: a_pos,
              // a_neg: a_neg,
              // b_pos: b_pos,
              // b_neg: b_neg,
              // ab_pos: ab_pos,
              // ab_neg: ab_neg,
              // o_pos: o_pos,
              // o_neg: o_neg,
            }}
          />
        </Col>
      </Row>
    </>
  );
};

export default BloodBankScreen;