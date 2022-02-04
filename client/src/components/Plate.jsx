import React from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import { Link } from "react-router-dom";
import { StoreContext } from "../context/context";
import { useContext } from "react";
import { getRecipeById } from "../info-api/api";
import { useState } from "react";
import { MenuWarning } from "./MenuWarning";

export const Plate = ({
  image,
  title,
  search,
  id,
  menu,
  vegetarian,
  pricePerServing,
  readyInMinutes,
  healthScore,
}) => {
  const { menuPlates, setMenuPlates, vegCount, setVegCount } =
    useContext(StoreContext);

  console.log("COUNT", vegCount);

  const [modal, setModal] = useState(false);
  const [vegModal, setVegModal] = useState(false);

  const handleRemove = () => {
    const plates = menuPlates.filter((el) => id !== el.id);
    const plateRemoved = menuPlates.filter((el) => id === el.id);
    if (plateRemoved[0].vegetarian === true) {
      setVegCount({
        veg: vegCount.veg - 1,
        meat: vegCount.meat,
      });
    } else {
      setVegCount({
        veg: vegCount.veg,
        meat: vegCount.meat - 1,
      });
    }
    setMenuPlates(plates);
  };

  const handleAddToMenu = async () => {
    const plate = await getRecipeById(id);
    if (plate.vegetarian === true && vegCount.veg === 2) {
      setVegModal(true);
    }
    if (plate.vegetarian === true && vegCount.veg < 2) {
      if (menuPlates.length < 4) {
        setMenuPlates([...menuPlates, plate]);
        setVegCount({
          veg: vegCount.veg + 1,
          meat: vegCount.meat,
        });
      } else {
        setModal(true);
      }
    }
    if (plate.vegetarian === false && vegCount.meat === 2) {
      setVegModal(true);
    }
    if (plate.vegetarian === false && vegCount.meat < 2) {
      if (menuPlates.length < 4) {
        setMenuPlates([...menuPlates, plate]);
        setVegCount({
          veg: vegCount.veg,
          meat: vegCount.meat + 1,
        });
      } else {
        setModal(true);
      }
    }
  };

  return (
    <>
      {modal && <MenuWarning modal={modal} setModal={setModal} />}
      {vegModal && (
        <MenuWarning modal={vegModal} setModal={setVegModal} veg={true} />
      )}

      <Card
        style={{
          width: menu ? "16rem" : "15rem",
          minHeight: menu ? "27rem" : "20rem",
        }}
        className=""
      >
        <Link to={`/recipe/${id}`}>
          <Card.Img
            variant="top"
            src={image}
            className="img-fluid"
            alt="Card image"
          />
        </Link>
        <Card.Body className="pt-2 position-relative ">
          <Card.Title className="text-dark ">{title.length > 40 ? title.slice(0,40) + '...' : title}</Card.Title>
          <hr className="mt-0 mb-2 text-primary " />
          {/* <Button variant="primary" className="">
          See more
        </Button> */}
          {menu && (
            <div>
              <div className="d-flex gap-2 align-items-baseline">
                <p className="h6 ">Health Score:</p>
                <p className="text-dark fw-bold m-0 p-0">{healthScore}</p>
              </div>
              <div className="d-flex gap-2 align-items-baseline">
                <p className="h6">Ready in Minutes:</p>
                <p className="text-dark fw-bold m-0 p-0">{readyInMinutes}</p>
              </div>

              <div className="d-flex gap-2 align-items-baseline">
                <p className="h6">Vegetarian:</p>
                <p
                  className={`fw-bold m-0 p-0 ${
                    vegetarian ? "text-success" : "text-dark"
                  }`}
                >
                  {vegetarian === false ? "No" : "Yes"}
                </p>
              </div>
              <div className="d-flex gap-2 align-items-baseline">
                <p className="h6">Price:</p>
                <p className="text-dark fw-bold m-0 p-0">${pricePerServing}</p>
              </div>
            </div>
          )}
          <div className="position-absolute bottom-0 pb-3">
            {search && (
              <Button variant="primary" onClick={handleAddToMenu}>
                Add to Menu
              </Button>
            )}
          </div>
          <div className="position-absolute bottom-0 pb-3">
            {menu && (
              <Button variant="outline-danger" size="sm" onClick={handleRemove}>
                Remove
              </Button>
            )}
          </div>
        </Card.Body>
      </Card>
    </>
  );
};
