import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { Palte } from "./Plate";

export const Plates = () => {
  return (
    <div>
      <Container className="mt-5 text-white">
        <Row>
          <Col className="d-flex gap-2 justify-content-center align-items-baseline">
            <span className="">Menu price:</span>
            <p className="fs-5">
              {new Intl.NumberFormat("es-AR", {
                style: "currency",
                currency: "ARS",
              }).format(1000)}
            </p>
          </Col>

          <Col className="d-flex gap-2 justify-content-center align-items-baseline">
            <span>Preparation time average:</span>
            <p className="fs-5">125 minutes</p>
          </Col>

          <Col className="d-flex gap-2 justify-content-center align-items-baseline">
            <span>Health score average:</span>
            <p className="fs-5">50</p>
          </Col>
        </Row>
      </Container>
      <div className="m-5">
        <Palte />
      </div>
    </div>
  );
};
