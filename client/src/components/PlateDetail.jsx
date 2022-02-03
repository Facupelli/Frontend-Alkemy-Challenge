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

export const PlateDetail = () => {
  let { id } = useParams();

  const [plate, setPlate] = useState({});
  console.log("PLATE", plate);

  const {menuPlates,setMenuPlates} = useContext(StoreContext);


  useEffect(() => {
    if (id) {
      getRecipeById(id).then((res) => setPlate(res));
    }
  }, [id]);

  const handleAddToMenu = () => {
    setMenuPlates([...menuPlates, plate])
  }

  return (
    <div className="bg-dark text-white min-vh-100">
      <NavBar />
      {plate && (
        <Card style={{ width: "35rem" }} className="bg-secondary p-0 mt-5 mx-auto">
          <div>
            <Card.Img variant="top" src={plate.image} alt="palte" />
          </div>

          <Card.Body>
            <div>
              <p className="h3 text-dark">{plate.title}</p>
            </div>

            <div className="d-flex gap-3">
              <div className="d-flex gap-2 align-items-baseline">
                <p className="h6">Health Score:</p>
                <p className="text-dark fw-bold">{plate.healthScore}</p>
              </div>
              <div className="d-flex gap-2 align-items-baseline">
                <p className="h6">Ready in Minutes:</p>
                <p className="text-dark fw-bold">{plate.readyInMinutes}</p>
              </div>
              <div className="d-flex gap-2 align-items-baseline">
                <p className="h6">Vegetarian:</p>
                <p className="text-dark fw-bold">
                  {plate.vegetarian === false ? "False" : "True"}
                </p>
              </div>
            </div>

            {/* <div className="d-flex gap-3 align-items-baseline">
              <p className="h6">Cuisines:</p>
              <div className="d-flex gap-3">
                {plate.cuisines &&
                  plate.cuisines.map((el) => <p key={el} className="text-dark fw-bold">{el}</p>)}
              </div>
            </div> */}

            <Button variant="primary" className="m-0" onClick={handleAddToMenu}>
              Add to Menu<i className="bi bi-plus"></i>
            </Button>
          </Card.Body>
        </Card>
      )}
    </div>
  );
};
