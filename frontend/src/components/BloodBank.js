import React from "react";
import { Card } from "react-bootstrap";
import BloodInventory from "./BloodInventory";

const BloodBank = ({ bloodbank }) => {
  return (
    <Card className="my-3 p-3 rounded">
      <a href={`/bloodbank/${bloodbank.name}`}>
        <Card.Img
          src="/images/blood6.jpg"
          variant="top"
          style={{ objectFit: "cover" }}
        />
      </a>

      <Card.Body>
        <a
          href={`/bloodbank/${bloodbank.ID}`}
          style={{ textDecoration: "none", color: "black" }}
        >
          <Card.Title as="div">
            <strong>{bloodbank.name}</strong>
          </Card.Title>
        </a>

        <Card.Text as="div">
          <div className="my-3">{bloodbank.address}</div>
        </Card.Text>
        <Card.Text as="div">
          <div className="my-3">
            <BloodInventory
              resultValues={{
                bank_ID: bloodbank.ID,
                // a_pos: a_pos,
                // a_neg: a_neg,
                // b_pos: b_pos,
                // b_neg: b_neg,
                // ab_pos: ab_pos,
                // ab_neg: ab_neg,
                // o_pos: o_pos,
                // o_neg: o_neg,
              }}
            />
          </div>
        </Card.Text>
      </Card.Body>
    </Card>
  );
};

export default BloodBank;
