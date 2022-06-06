import React, { useState, useEffect } from "react";
import { Card, Col, Row } from "react-bootstrap";
import { useParams } from "react-router-dom";

const BloodInventory = (props) => {
  const params = useParams();
  const [a_pos, setAp] = useState("");
  const [a_neg, setAn] = useState("");
  const [b_pos, setBp] = useState("");
  const [b_neg, setBn] = useState("");
  const [ab_pos, setABp] = useState("");
  const [ab_neg, setABn] = useState("");
  const [o_pos, setOp] = useState("");
  const [o_neg, setOn] = useState("");
  const [bank_ID, setBank_ID] = useState(props.resultValues.bank_ID);

  useEffect(() => {
    return () => {
      getInventory();
    };
  }, []);

  const getInventory = async () => {
    //console.log(bank_ID,"sbdckhszdb");
    let result1 = await fetch(
      `https://blood-bank-g2.herokuapp.com/getInventoryDetails/${bank_ID}`
    );
    result1 = await result1.json();
    //console.log(props.resultValues[0].a_neg);
    setAp(result1[0].a_pos);
    setAn(result1[0].a_neg);
    setBp(result1[0].b_pos);
    setBn(result1[0].b_neg);
    setABp(result1[0].ab_pos);
    setABn(result1[0].ab_neg);
    setOp(result1[0].o_pos);
    setOn(result1[0].o_neg);
  };

  return (
    <>
      <Row className="mx-0 px-0">
        <Col className="px-0" md={3}>
          <Card className={`${a_pos ? "bg-success" : "bg-primary"}`}>
            <Card.Body>
              <Card.Text className="cardttext">A+</Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col className="px-0" md={3}>
          <Card className={`${a_neg ? "bg-success" : "bg-primary"}`}>
            <Card.Body>
              <Card.Text className="cardttext">A-</Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col className="px-0" md={3}>
          <Card className={`${b_pos ? "bg-success" : "bg-primary"}`}>
            <Card.Body>
              <Card.Text className="cardttext">B+</Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col className="px-0" md={3}>
          <Card className={`${b_neg ? "bg-success" : "bg-primary"}`}>
            <Card.Body>
              <Card.Text className="cardttext">B-</Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>

      <Row className="mx-0">
        <Col className="px-0" md={3}>
          <Card className={`${ab_pos ? "bg-success" : "bg-primary"}`}>
            <Card.Body>
              <Card.Text className="cardttext">AB-</Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col className="px-0" md={3}>
          <Card className={`${ab_neg ? "bg-success" : "bg-primary"}`}>
            <Card.Body>
              <Card.Text className="cardttext">AB-</Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col className="px-0" md={3}>
          <Card className={`${o_pos ? "bg-success" : "bg-primary"}`}>
            <Card.Body>
              <Card.Text className="cardttext">O+</Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col className="px-0" md={3}>
          <Card className={`${o_neg ? "bg-success" : "bg-primary"}`}>
            <Card.Body>
              <Card.Text className="cardttext">O-</Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </>
  );
};

export default BloodInventory;
