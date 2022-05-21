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


const Campaign = ({campaign}) => {
 
  return (
    <Card className="mb-2">

        <Row>
          <Col md={3}>
            <Card.Img
              variant="top"
              src="/images/blood1.jpg"
              className="mx-3 my-3"
              style={{ height: '250px', width: '250px', objectFit: "cover" }} />
          </Col>

          <Col md={7} className='my-2 px-5'>
            <Card.Title>{campaign.title}</Card.Title>
            <Card.Text>
              {campaign.description}
            </Card.Text>
            <ListGroup className="list-group-flush">
              <ListGroupItem>{campaign.date}</ListGroupItem>
              <ListGroupItem>{campaign.time}</ListGroupItem>
              <ListGroupItem>{campaign.venue}</ListGroupItem>
              <ListGroupItem>{campaign.organizer}</ListGroupItem>
            </ListGroup>
          </Col>
        </Row>



      </Card>
  );
};

export default Campaign;
