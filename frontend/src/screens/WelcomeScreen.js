import React from "react";
import { Image, Row, Col, Card, Button, Form } from "react-bootstrap";
import { Link } from "react-router-dom";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const WelcomeScreen = ({ username }) => {
  let navigate = useNavigate();
  useEffect(() => {
    if (!(JSON.parse(localStorage.getItem("type")) === "bloodBank")) {
      navigate("/signIn");
    }
  }, []);
  return (
    <>
      <Row>
        <Col
          md={8}
          className="d-flex align-items-center justify-content-center"
        >
          <Image style={{ height: "500px" }} src="/images/welcome.jpg"></Image>
        </Col>
        <Col
          md={4}
          className="d-flex align-items-center justify-content-center"
        >
          <div className="mt-4" style={{ textAlign: "center" }}>
            <h1>Welcome {username}</h1>

            <Button
              href="/bank"
              variant="info"
              className="justify-content-center my-4"
            >
              Getting Started
            </Button>
          </div>
        </Col>
      </Row>
    </>
  );
};

export default WelcomeScreen;
