import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { getRecipeById } from "../info-api/api";
import { NavBar } from "./NavBar";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import { useContext } from "react";
import { StoreContext } from "../context/context";
import { MenuWarning } from "./MenuWarning";

export const PlateDetail = () => {
  let { id } = useParams();

  const [modal, setModal] = useState();
  const [vegModal, setVegModal] = useState();
  const [isPlateInMenu, setIsPlateInMenu] = useState(false);

  const [plate, setPlate] = useState({});
  console.log("PLATE", plate);

  const { menuPlates, setMenuPlates, vegCount, setVegCount } =
    useContext(StoreContext);

  useEffect(() => {
    if (id) {
      getRecipeById(id).then((res) => setPlate(res));
    }
  }, [id]);

  const handleAddToMenu = () => {
    const isPlateInMenu = menuPlates.filter((el) => el.id === plate.id);

    if (isPlateInMenu.length > 0) {
      setIsPlateInMenu(true);
    } else {
      if (plate.vegan === true && vegCount === 2) {
        setVegModal(true);
      }
      if (plate.vegan === true && vegCount < 2) {
        if (menuPlates.length < 4) {
          setMenuPlates([...menuPlates, plate]);
          setVegCount(vegCount + 1);
        } else {
          setModal(true);
        }
      }
      if (plate.vegan === false) {
        if (menuPlates.length < 4) {
          setMenuPlates([...menuPlates, plate]);
        } else {
          setModal(true);
        }
      }
    }
  };

  return (
    <>
      {vegModal && (
        <MenuWarning modal={vegModal} setModal={setVegModal} veg={true} />
      )}
      {modal && <MenuWarning modal={modal} setModal={setModal} />}
      {isPlateInMenu && (
        <MenuWarning
          modal={isPlateInMenu}
          setModal={setIsPlateInMenu}
          isPlate={true}
        />
      )}

      <div className="bg-dark text-white min-vh-100">
        <NavBar />
        {plate && (
          <Card
            style={{ width: "25rem" }}
            className="bg-secondary p-0 mt-5 mx-auto"
          >
            <div>
              <Card.Img variant="top" src={plate.image} alt="palte" />
            </div>

            <Card.Body>
              <div>
                <p className="h3 text-dark">{plate.title}</p>
              </div>

              <div className="d-flex flex-wrap gap-3">
                <div className="d-flex gap-2 align-items-baseline">
                  <p className="h6">Health Score:</p>
                  <p className="text-dark fw-bold">{plate.healthScore}</p>
                </div>
                <div className="d-flex gap-2 align-items-baseline">
                  <p className="h6">Ready in Minutes:</p>
                  <p className="text-dark fw-bold">{plate.readyInMinutes}</p>
                </div>
              </div>

              <div className="d-flex flex-wrap gap-3">
                <div className="d-flex gap-2 align-items-baseline">
                  <p className="h6">Vegan:</p>
                  <p className="text-dark fw-bold">
                    {plate.vegan === false ? "False" : "True"}
                  </p>
                </div>
                <div className="d-flex gap-2 align-items-baseline">
                  <p className="h6">Price:</p>
                  <p className="text-dark fw-bold">${plate.pricePerServing}</p>
                </div>
              </div>

              {/* <div className="d-flex gap-3 align-items-baseline">
              <p className="h6">Cuisines:</p>
              <div className="d-flex gap-3">
                {plate.cuisines &&
                  plate.cuisines.map((el) => <p key={el} className="text-dark fw-bold">{el}</p>)}
              </div>
            </div> */}

              <Button
                variant="primary"
                className="m-0"
                onClick={handleAddToMenu}
              >
                Add to Menu<i className="bi bi-plus"></i>
              </Button>
            </Card.Body>
          </Card>
        )}
      </div>
    </>
  );
};
