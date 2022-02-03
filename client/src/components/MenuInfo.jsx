import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import {StoreContext} from '../context/context'
import { useContext } from "react";
import { useEffect } from "react";


export const MenuInfo = () => {

  const {menuPlates} = useContext(StoreContext);

  const menuPrice = () => {
    if(menuPlates.length > 0){
     const prices = menuPlates.map(el => el.pricePerServing) ;
     return prices.reduce((prevVal, currentVal)=> prevVal + currentVal).toFixed(2)
    } 
  }

  const preparationTime = () => {
    if(menuPlates.length > 0){
      const prices = menuPlates.map(el => el.readyInMinutes) ;
      return prices.reduce((prevVal, currentVal)=> prevVal + currentVal).toFixed(0)
     } 
  }

  const healthScore = () => {
    if(menuPlates.length > 0){
      const prices = menuPlates.map(el => el.healthScore) ;
      return prices.reduce((prevVal, currentVal)=> prevVal + currentVal).toFixed(0)
     } 
  }


  return (
    <Container className="mt-5 text-white">
      <Row>
        <Col className="d-flex gap-2 justify-content-center align-items-baseline">
          <span className="">Menu price:</span>
          <p className="fs-5">
            {new Intl.NumberFormat("es-AR", {
              style: "currency",
              currency: "ARS",
            }).format(menuPlates.length > 0 ? menuPrice() : 0)}
          </p>
        </Col>

        <Col className="d-flex gap-2 justify-content-center align-items-baseline">
          <span>Preparation time average:</span>
          <p className="fs-5">{menuPlates.length > 0 ? preparationTime() : 0} minutes</p>
        </Col>

        <Col className="d-flex gap-2 justify-content-center align-items-baseline">
          <span>Health score average:</span>
          <p className="fs-5">{menuPlates.length > 0 ? healthScore() : 0}</p>
        </Col>
      </Row>
    </Container>
  );
};
