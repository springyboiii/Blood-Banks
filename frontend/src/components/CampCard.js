import React from "react";
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

const CampCard = () => {
  return (
    <Card className="mb-2">
      <Row>
        <Col md={3}>
          <Card.Img
            variant="top"
            src="/images/blood1.jpg"
            className="mx-3 my-3"
            style={{height:'250px',width:'250px', objectFit: "cover" }}
          />
        </Col>

        <Col md={7} className='my-2 px-5'>
          <Card.Title>Lion Blood Camp</Card.Title>
          <Card.Text>
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </Card.Text>
          <ListGroup className="list-group-flush">
            <ListGroupItem>Date : 12/09/2022</ListGroupItem>
            <ListGroupItem>Time : 09.00pm</ListGroupItem>
            <ListGroupItem>Venue : Colombo 07</ListGroupItem>
            <ListGroupItem>Organizer : Colombo North Hospital</ListGroupItem>
          </ListGroup>
        </Col>
      </Row>

      
    </Card>
  );
};

export default CampCard;
