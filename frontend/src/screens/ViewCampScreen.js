import React from 'react'
import { Card, Col, Row ,Form,Table,ListGroup,ListGroupItem, Container} from "react-bootstrap";
import CampCard from '../components/CampCard';

const ViewCampScreen = () => {
  return (
    <Container>
      <h1>All Campaigns</h1>
        <CampCard/>
        <CampCard/>
        <CampCard/>
        <CampCard/>
        <CampCard/>
        <CampCard/>
        <CampCard/>
        <CampCard/>
        <CampCard/>
        <CampCard/>
        <CampCard/>
    </Container>
  )
}

export default ViewCampScreen