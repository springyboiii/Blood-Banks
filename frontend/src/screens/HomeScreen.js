import React from "react";
import { Row, Col } from "react-bootstrap";
import BloodBank from "../components/BloodBank";
import { useEffect } from "react";
import Axios from "axios";
// import bloodbanks from "../bloodbanks";
import { useState } from "react";

const HomeScreen = () => {
  const [bloodbanksnew, setBloodBanksnew] = useState([]);

  useEffect(() => {
    return () => {
      Axios.get("http://localhost:9000/dashboard").then((response) => {
        setBloodBanksnew(response.data);
      });
    };
  }, []);

  return (
    <>
      <div style={{ display: "flex", flexDirection: "row" }}>
        <h1>All BloodBanks</h1>
      </div>

      <Row>
        {bloodbanksnew &&
          bloodbanksnew.map((bloodbank) => (
            <Col sm={12} md={6} lg={4} xl={3}>
              <BloodBank bloodbank={bloodbank} />
            </Col>
          ))}
      </Row>
    </>
  );
};

export default HomeScreen;
