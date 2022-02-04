import React, { useState } from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { StoreContext } from "../context/context";
import { useContext } from "react";
import { useEffect } from "react";

export const MenuInfo = () => {
  const { menuPlates } = useContext(StoreContext);

  const [menuInfo, setMenuInfo] = useState({
    price: 0,
    prepTime: 0,
    health: 0,
  });

  useEffect(() => {
    setMenuInfo((prevState) => ({ ...prevState, price: menuPrice() }));
    setMenuInfo((prevState) => ({ ...prevState, prepTime: preparationTime() }));
    setMenuInfo((prevState) => ({ ...prevState, health: healthScore() }));
  }, [menuPlates]);

  const menuPrice = () => {
    if (menuPlates.length > 0) {
      const allPrices = menuPlates.map((el) => el.pricePerServing);
      return allPrices
        .reduce((prevVal, currentVal) => prevVal + currentVal)
        .toFixed(2);
    }
  };

  const preparationTime = () => {
    if (menuPlates.length > 0) {
      const readyInMinutes = menuPlates.map((el) => el.readyInMinutes);
      return readyInMinutes
        .reduce((prevVal, currentVal) => prevVal + currentVal)
        .toFixed(0);
    }
  };

  const healthScore = () => {
    if (menuPlates.length > 0) {
      const healthScore = menuPlates.map((el) => el.healthScore);
      return healthScore
        .reduce((prevVal, currentVal) => prevVal + currentVal)
        .toFixed(0);
    }
  };

  return (
    <Container className="mt-3 pt-2 text-white  border border-warning border-1 rounded">
      <Row className="align-items-baseline ">
        <Col className="d-flex gap-2 justify-content-center align-items-baseline ">
          <span className="">MENU PRICE:</span>
          <p className="fs-5">
            {new Intl.NumberFormat("es-AR", {
              style: "currency",
              currency: "ARS",
            }).format(menuInfo.price ? menuInfo.price : 0)}
          </p>
        </Col>

        <Col className="d-flex gap-2 justify-content-center align-items-baseline">
          <div className="d-flex align-items-center gap-2">
            <span>PREPARATION</span>
            <i
              className="bi bi-clock-history"
              style={{ fontSize: "1.2rem" }}
            ></i>
            :
          </div>

          <p className="fs-5">
            {menuInfo.prepTime ? menuInfo.prepTime : 0} min
          </p>
        </Col>

        <Col className="d-flex gap-2 justify-content-center align-items-baseline">
          <div className="d-flex align-items-center gap-2">
            <span>HEALTH SCORE</span>
            <i className="bi bi-heart-fill" style={{ fontSize: "1.2rem" }}></i>:
          </div>
          <p className="fs-5">{menuInfo.health ? menuInfo.health : 0}</p>
        </Col>
      </Row>
    </Container>
  );
};
