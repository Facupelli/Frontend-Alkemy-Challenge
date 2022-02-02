import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { getRecipeById } from "../info-api/api";
import { NavBar } from "./NavBar";

export const PlateDetail = () => {
  let { id } = useParams();

  const [plate, setPlate] = useState({});

  console.log(plate);

//   useEffect(() => {
//     if (id) {
//       getRecipeById(id).then((res) => setPlate(res));
//     }
//   }, [id]);

  return (
    <div>
      <NavBar />
      <div>DETAIL</div>
    </div>
  );
};
