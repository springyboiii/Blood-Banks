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
 
 
const Campaign = (props) => {
  const rand = Math.floor(1 + Math.random() * (7));
  return (
    <Card className="mb-2">
 
        <Row>
          <Col md={3}>
            <Card.Img
              variant="top"
              src={`/images/blood${rand}.jpg`}
              className="mx-3 my-3"
              style={{ height: '250px', width: '250px', objectFit: "cover" }} />
          </Col>
 
          <Col md={7} className='my-2 px-5'>
            <Card.Title>{props.title}</Card.Title>
            <Card.Text>
              {props.description}
            </Card.Text>
            <ListGroup className="list-group-flush">
              <ListGroupItem>{props.date.slice(0,10)}</ListGroupItem>
              <ListGroupItem>{props.time}</ListGroupItem>
              <ListGroupItem>{props.location}</ListGroupItem>
              <ListGroupItem>{props.org}</ListGroupItem>
            </ListGroup>
          </Col>
        </Row>
      </Card>
  );
};
 
export default Campaign;