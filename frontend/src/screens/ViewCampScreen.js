import React, { useState, useEffect } from "react";
import {
  Card,
  Col,
  Row,
  Form,
  Table,
  ListGroup,
  ListGroupItem,
  Container,
} from "react-bootstrap";
import CampCard from "../components/CampCard";
import campaigns from "../campaigns";
// import { useState } from "react";
import Campaign from "../components/campaign";
import Axios from "axios";

const ViewCampScreen = () => {
  const [campaignsList, setCampaigns] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const req = await Axios.get("https://blood-bank-g2.herokuapp.com/viewCamp");
      setCampaigns(req.data);
    }
    fetchData();
  }, []);

  return (
    <Container>
      <h1>All Campaigns</h1>
      {campaignsList.map((curr, index) => (
        <Campaign
          key={index}
          id={index}
          title={curr.camp_name}
          date={curr.date}
          time={curr.time}
          org={curr.org_name}
          description={curr.description}
          location={curr.location}
          bank_ID={curr.bank_ID}
        />
      ))}
    </Container>
  );
};

export default ViewCampScreen;