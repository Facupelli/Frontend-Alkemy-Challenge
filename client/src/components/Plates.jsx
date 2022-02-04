import React from "react";
import { StoreContext } from "../context/context";
import { Plate } from "./Plate";
import { useContext } from "react";
import Container from "react-bootstrap/esm/Container";
import Row from "react-bootstrap/esm/Row";
import Col from "react-bootstrap/esm/Col";

export const Plates = () => {
  const { menuPlates } = useContext(StoreContext);

  return (
    <>
      {/* {menuPlates.length > 0 &&
          menuPlates.map((el) => (
            <Plate image={el.image} title={el.title} id={el.id} />
          ))} */}
      {menuPlates.length > 0 ? (
        <Container className="mt-5 p-0">
          <Row className="d-flex justify-content-around">
            {menuPlates.length > 0 && (
              <Plate
                image={menuPlates[0].image}
                title={menuPlates[0].title}
                id={menuPlates[0].id}
                vegan={menuPlates[0].vegan}
                pricePerServing={menuPlates[0].pricePerServing}
                readyInMinutes={menuPlates[0].readyInMinutes}
                healthScore={menuPlates[0].healthScore}
                menu={true}
              />
            )}

            {menuPlates.length > 1 && (
              <Plate
                image={menuPlates[1].image}
                title={menuPlates[1].title}
                id={menuPlates[1].id}
                vegan={menuPlates[1].vegan}
                pricePerServing={menuPlates[1].pricePerServing}
                readyInMinutes={menuPlates[1].readyInMinutes}
                healthScore={menuPlates[1].healthScore}
                menu={true}
              />
            )}

            {menuPlates.length > 2 && (
              <Plate
                image={menuPlates[2].image}
                title={menuPlates[2].title}
                id={menuPlates[2].id}
                vegan={menuPlates[2].vegan}
                pricePerServing={menuPlates[2].pricePerServing}
                readyInMinutes={menuPlates[2].readyInMinutes}
                healthScore={menuPlates[2].healthScore}
                menu={true}
              />
            )}

            {menuPlates.length > 3 && (
              <Plate
                image={menuPlates[3].image}
                title={menuPlates[3].title}
                id={menuPlates[3].id}
                vegan={menuPlates[3].vegan}
                pricePerServing={menuPlates[3].pricePerServing}
                readyInMinutes={menuPlates[3].readyInMinutes}
                healthScore={menuPlates[3].healthScore}
                menu={true}
              />
            )}
          </Row>
          {/* <Row className="m-0 p-0">
              
            </Row> */}
        </Container>
      ) : (
        <div className="text-white text-center pt-5  d-flex justify-content-center">
          <div>
            <p className="p-0 m-0 fw-bold fs-4">Menu is empty!</p>
            <p className="p-0 m-0 fs-5">
              Go to /search and add a plate to the menu.
            </p>
          </div>
        </div>
      )}
    </>
  );
};
