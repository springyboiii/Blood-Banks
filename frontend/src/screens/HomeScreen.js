import React from "react";
import { Row, Col, DropdownButton, Dropdown } from "react-bootstrap";
import BloodBank from "../components/BloodBank";
import { useEffect } from "react";
import Axios from "axios";
// import bloodbanks from "../bloodbanks";
import { useState } from "react";

const HomeScreen = () => {
  const [bloodbanksnew, setBloodBanksnew] = useState([]);

  useEffect(() => {
    return () => {
      Axios.get("https://blood-bank-g2.herokuapp.com/dashboard").then((response) => {
        setBloodBanksnew(response.data);
      });
    };
  }, []);
  
  return (
    <>
      <div style={{ display: "flex", flexDirection: "row" }}>
        <h1>All BloodBanks</h1>
        {/* <h2>name :{bloodbanksnew.name}</h2> */}
        {/* <h1>{bloodbanks.map()}</h1> */}

        {/* <DropdownButton
          id="dropdown-basic-button"
          title="Sort by"
          className="mx-3"
        >
          <Dropdown.Item href="#/action-1">A+</Dropdown.Item>
          <Dropdown.Item href="#/action-2">A-</Dropdown.Item>
          <Dropdown.Divider />
          <Dropdown.Item href="#/action-1">B+</Dropdown.Item>
          <Dropdown.Item href="#/action-2">B-</Dropdown.Item>
          <Dropdown.Divider />
          <Dropdown.Item href="#/action-1">AB+</Dropdown.Item>
          <Dropdown.Item href="#/action-2">AB-</Dropdown.Item>
          <Dropdown.Divider />
          <Dropdown.Item href="#/action-1">O+</Dropdown.Item>
          <Dropdown.Item href="#/action-2">O-</Dropdown.Item>
        </DropdownButton> */}
        {/* <Row>
       {bloodbanksnew.map((val)=>{
          return <h1 key={val}>name :{val.name}</h1>
       })}
</Row> */}
      </div>

      <Row>
        {bloodbanksnew.map((bloodbank) => (
          <Col sm={12} md={6} lg={4} xl={3}>
            <BloodBank bloodbank = {bloodbank} />
          </Col>
        ))}
      </Row>
    </>
  );
};

export default HomeScreen;
