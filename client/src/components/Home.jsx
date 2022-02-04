import React, { useState } from "react";
import { Login } from "./Login";
import { NavBar } from "./NavBar";
import { Plates } from "./Plates";
import { MenuInfo } from "./MenuInfo";
import { useEffect } from "react";

export const Home = () => {
  return (
    <div className="bg-dark min-vh-100 m-0 p-0">
      <NavBar />

      <div className="">
        <MenuInfo />
        <Plates />
      </div>
    </div>
  );
};
