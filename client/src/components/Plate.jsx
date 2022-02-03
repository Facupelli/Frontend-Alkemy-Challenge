import React from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import { Link } from "react-router-dom";
import { StoreContext } from "../context/context";
import { useContext } from "react";
import { getRecipeById } from "../info-api/api";
import { useState } from "react";
import { MenuWarning } from "./MenuWarning";

export const Plate = ({ image, title, search, id, menu }) => {
  const { menuPlates, setMenuPlates, vegCount, setVegCount } = useContext(StoreContext);

  const [modal, setModal] = useState(false);
  const [vegModal, setVegModal] = useState(false);

  console.log(vegModal)

  const handleRemove = () => {
    console.log("ENTRE");
    const plates = menuPlates.filter((el) => id !== el.id);
    console.log("REMOVE", plates);
    setMenuPlates(plates);
  };

  const handleAddToMenu = async () => {
    const plate = await getRecipeById(id);
    if (plate.vegetarian === true && vegCount === 2) {
      console.log('entre')
      setVegModal(true);
    }
    if (plate.vegetarian === true && vegCount < 2) {
      if (menuPlates.length < 4) {
        setMenuPlates([...menuPlates, plate]);
        setVegCount(vegCount + 1);
      } else {
        setModal(true);
      }
    }
    if (plate.vegetarian === false) {
      if (menuPlates.length < 4) {
        setMenuPlates([...menuPlates, plate]);
      } else {
        setModal(true);
      }
    }
  };

  return (
    <>
      {modal && <MenuWarning modal={modal} setModal={setModal} />}
      {vegModal && <MenuWarning modal={vegModal} setModal={setVegModal} veg={true} />}

      <Card style={{ width: menu ? "25rem" : "15rem" }} >
        <Link to={`/recipe/${id}`}>
          <Card.Img
            variant="top"
            src={image}
            className="img-fluid"
            alt="Card image"
          />
        </Link>
        <Card.Body>
          <Card.Title className="text-dark">{title}</Card.Title>
          {/* <Button variant="primary" className="">
          See more
        </Button> */}
          {search && (
            <Button variant="primary" onClick={handleAddToMenu}>
              Add to Menu
            </Button>
          )}
          {menu && (
            <Button variant="danger" onClick={handleRemove}>
              Remove
            </Button>
          )}
        </Card.Body>
      </Card>
    </>
  );
};
