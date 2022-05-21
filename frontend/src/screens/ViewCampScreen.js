import React from 'react'
import { Card, Col, Row ,Form,Table,ListGroup,ListGroupItem, Container} from "react-bootstrap";
import CampCard from '../components/CampCard';
import campaigns from "../campaigns";
import { useState } from 'react';
import Campaign from '../components/campaign';
const ViewCampScreen = () => {
  const [campaignsState,setCampaigns]=useState(campaigns);
  return (
    <Container>
      <h1>All Campaigns</h1>
      {campaignsState.map((campaign) => (
        
          <Campaign campaign={campaign} />
        
      ))}
        
    </Container>
  )
}

export default ViewCampScreen