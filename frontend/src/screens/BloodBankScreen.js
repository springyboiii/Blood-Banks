import React from "react";
import { Link } from "react-router-dom";
import { Row, Col, Image, ListGroup, Card, Button } from "react-bootstrap";
import BloodInventory from "../components/BloodInventory";
import bloodbanks from "../bloodbanks";

const BloodBankScreen = ({ match }) => {
  const bloodbank = bloodbanks.find((p) => p._id === match.params.id);

  return (
    <>
      <a className="btn btn-light my-3" href="/">
        Go Back
      </a>

      <Row>
        <Col md={6}>
          <Image src={bloodbank.image} alt={bloodbank.name} fluid />
          <p className="my-3">
            When we receive your donation we separate it into individual
            components by spinning it in a machine called a centrifuge. The
            individual components are red cells, white cells, platelets and
            plasma. These can all be put to different uses. During a whole blood
            donation we aim to take just under a pint (about 470mls) of blood,
            which works out at no more than 13 per cent of your blood volume.
            After donation, your body has an amazing capacity to replace all the
            cells and fluids that have been lost.
          </p>
        </Col>
        <Col md={2}></Col>
        <Col md={4}>
          <ListGroup variant="flush" className="mb-5">
            <ListGroup.Item>
              <h3>{bloodbank.name}</h3>
            </ListGroup.Item>
            <ListGroup.Item><i class="fas fa-location-arrow mx-2"></i>Address: {bloodbank.address}</ListGroup.Item>
            
            <ListGroup.Item><i class="fas fa-envelope mx-2"></i>Email: {bloodbank.email}</ListGroup.Item>
            <ListGroup.Item>
              <i class="fas fa-phone mx-2"></i>Telephone:
              {bloodbank.telephone}
            </ListGroup.Item>
          </ListGroup>

          <BloodInventory />
        </Col>
      </Row>
    </>
  );
};

export default BloodBankScreen;
