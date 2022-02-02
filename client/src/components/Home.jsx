import React, { useState } from "react";
import { searchRecipe } from "../info-api/api";
import { Login } from "./Login";
import { NavBar } from "./NavBar";
import { Plates } from "./Plates";
const  API_KEY  = process.env.REACT_APP_API_KEY;

console.log('apikey', process.env.REACT_APP_API_KEY, process.env.REACT_APP_NAME)
export const Home = () => {
  const [loginModal, setLoginModal] = useState(false);

  const handleLoginClick = () => {
    setLoginModal(true);
  };

  // console.log(searchRecipe())

  return (
    <div className="bg-dark">
      {loginModal && <Login loginModal={loginModal} setLoginModal={setLoginModal} />}
      <NavBar loginModal={loginModal} setLoginModal={setLoginModal}/>
      <div >
        <Plates />
      </div>
    </div>
  );
};
