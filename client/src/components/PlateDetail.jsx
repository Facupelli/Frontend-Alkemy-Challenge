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
import Spinner from "react-bootstrap/esm/Spinner";

export const PlateDetail = () => {
  let { id } = useParams();

  const [loading, setLoading] = useState(true);
  const [modal, setModal] = useState();
  const [vegModal, setVegModal] = useState();
  const [isPlateInMenu, setIsPlateInMenu] = useState(false);

  const [plate, setPlate] = useState({});
  console.log("PLATE", plate);

  const { menuPlates, setMenuPlates, vegCount, setVegCount } =
    useContext(StoreContext);

  useEffect(() => {
    if (id) {
      getRecipeById(id)
        .then((res) => setPlate(res))
        .then(() => setLoading(false));
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
    <div className="position-relative bg-dark min-vh-100 min-vw-100">
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

      {loading ? (
        <div className="position-absolute top-50 start-50 translate-middle ">
          <Spinner animation="border" variant="primary" />
        </div>
      ) : (
        <div className="bg-dark text-white min-vh-100">
          <NavBar />
          {plate && (
            <Card
              style={{ width: "50rem" }}
              className="bg-secondary p-0 mt-5 mx-auto"
            >
              <div className="d-flex">
                <div>
                  <div>
                    <Card.Img variant="top" src={plate.image} alt="palte" />
                  </div>
                </div>

                <Card.Body className="position-relative ps-3 pt-1 ">
                  <p className="h3 text-dark">{plate.title}</p>

                  <div className="d-flex gap-2 align-items-baseline pt-2 pb-2">
                    <p className="h6 m-0">Health Score:</p>
                    <p className="text-dark fw-bold m-0">{plate.healthScore}</p>
                  </div>
                  <div className="d-flex gap-2 align-items-baseline pb-2">
                    <p className="h6 m-0">Ready in Minutes:</p>
                    <p className="text-dark fw-bold m-0">
                      {plate.readyInMinutes}
                    </p>
                  </div>

                  <div className="d-flex gap-2 align-items-baseline pb-2">
                    <p className="h6 m-0">Vegan:</p>
                    <p className="text-dark fw-bold m-0">
                      {plate.vegan === false ? "False" : "True"}
                    </p>
                  </div>
                  <div className="d-flex gap-2 align-items-baseline pb-2">
                    <p className="h6 m-0">Price:</p>
                    <p className="text-dark fw-bold m-0">
                      ${plate.pricePerServing}
                    </p>
                  </div>

                  <div className="position-absolute bottom-0 pb-3 mt-1">
                    <Button
                      variant="primary"
                      onClick={handleAddToMenu}
                      className="m-0"
                    >
                      Add to Menu<i className="bi bi-plus"></i>
                    </Button>
                  </div>
                </Card.Body>
              </div>
            </Card>
          )}
        </div>
      )}
    </div>
  );
};
