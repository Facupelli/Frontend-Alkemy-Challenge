import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { StoreContext } from "../context/context";
import { useContext } from "react";
import { useEffect } from "react";

export const MenuInfo = () => {
  const { menuPlates } = useContext(StoreContext);

  const menuPrice = () => {
    if (menuPlates.length > 0) {
      const prices = menuPlates.map((el) => el.pricePerServing);
      return prices
        .reduce((prevVal, currentVal) => prevVal + currentVal)
        .toFixed(2);
    }
  };

  const preparationTime = () => {
    if (menuPlates.length > 0) {
      const prices = menuPlates.map((el) => el.readyInMinutes);
      return prices
        .reduce((prevVal, currentVal) => prevVal + currentVal)
        .toFixed(0);
    }
  };

  const healthScore = () => {
    if (menuPlates.length > 0) {
      const prices = menuPlates.map((el) => el.healthScore);
      return prices
        .reduce((prevVal, currentVal) => prevVal + currentVal)
        .toFixed(0);
    }
  };

  return (
    <Container className="mt-3 pt-2 text-white  border border-warning border-1 rounded">
      <Row className="align-items-baseline">
        <Col className="d-flex gap-2 justify-content-center align-items-baseline">
          <span className="">MENU PRICE:</span>
          <p className="fs-5">
            {new Intl.NumberFormat("es-AR", {
              style: "currency",
              currency: "ARS",
            }).format(menuPlates.length > 0 ? menuPrice() : 0)}
          </p>
        </Col>

        <Col className="d-flex gap-2 justify-content-center align-items-baseline">
          <div className="d-flex align-items-baseline gap-2">
            <span>PREPARATION</span>
            <i className="bi bi-clock-history" style={{fontSize: "1.5rem"}}></i>:
          </div>

          <p className="fs-5">
            {menuPlates.length > 0 ? preparationTime() : 0} min
          </p>
        </Col>

        <Col className="d-flex gap-2 justify-content-center align-items-baseline">
          <span>HEALTH SCORE:</span>
          <p className="fs-5">{menuPlates.length > 0 ? healthScore() : 0}</p>
        </Col>
      </Row>
    </Container>
  );
};
