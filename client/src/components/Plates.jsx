import React from "react";
import { MenuInfo } from "./MenuInfo";

import { Plate } from "./Plate";

export const Plates = () => {
  return (
    <div>
      <MenuInfo />
      <div className="m-5">
        <Plate />
      </div>
    </div>
  );
};
