import React from "react";
import { MenuInfo } from "./MenuInfo";
import { StoreContext } from "../context/context";
import { Plate } from "./Plate";
import { useContext } from "react";

export const Plates = () => {

  const {menuPlates,setMenuPlates} = useContext(StoreContext);


  return (
    <div>
      <MenuInfo />
      <div className="m-5">
        {menuPlates.length > 0 && menuPlates.map(el => <Plate image={el.image} title={el.title} id={el.id}/>)}
      </div>
    </div>
  );
};
