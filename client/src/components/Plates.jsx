import React from "react";
import { MenuInfo } from "./MenuInfo";
import { StoreContext } from "../context/context";
import { Plate } from "./Plate";
import { useContext } from "react";
import Container from "react-bootstrap/esm/Container";
import Row from "react-bootstrap/esm/Row";
import Col from "react-bootstrap/esm/Col";

export const Plates = () => {
  const { menuPlates, setMenuPlates } = useContext(StoreContext);

  return (
    <div>
      <MenuInfo />
      <div className="m-5">
        {/* {menuPlates.length > 0 &&
          menuPlates.map((el) => (
            <Plate image={el.image} title={el.title} id={el.id} />
          ))} */}
        {menuPlates.length > 0 && (
          <Container className="m-0 p-0">
            <Row className="m-0 p-0">
              <Col className="m-0 p-0">
                {menuPlates.length > 0 && (
                  <Plate
                    image={menuPlates[0].image}
                    title={menuPlates[0].title}
                    id={menuPlates[0].id}
                    menu={true}
                  />
                )}
              </Col>
              <Col className="m-0 p-0">
                {menuPlates.length > 1 && (
                  <Plate
                    image={menuPlates[1].image}
                    title={menuPlates[1].title}
                    id={menuPlates[1].id}
                    menu={true}
                  />
                )}
              </Col>
            </Row>
            <Row className="m-0 p-0">
              <Col className="m-0 p-0">
                {menuPlates.length > 2 && (
                  <Plate
                    image={menuPlates[2].image}
                    title={menuPlates[2].title}
                    id={menuPlates[2].id}
                    menu={true}
                  />
                )}
              </Col>
              <Col className="m-0 p-0">
                {menuPlates.length > 3 && (
                  <Plate
                    image={menuPlates[3].image}
                    title={menuPlates[3].title}
                    id={menuPlates[3].id}
                    menu={true}
                  />
                )}
              </Col>
            </Row>
          </Container>
        )}
      </div>
    </div>
  );
};
