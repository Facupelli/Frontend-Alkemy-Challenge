import React, { useState } from "react";
import { Login } from "./Login";
import { NavBar } from "./NavBar";
import { Plates } from "./Plates";

export const Home = () => {
  const [loginModal, setLoginModal] = useState(false);

  const handleLoginClick = () => {
    setLoginModal(true);
  };

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
