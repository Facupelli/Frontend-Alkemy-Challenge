import React, { useState } from "react";
import { Login } from "./Login";

export const Home = () => {
  const [loginModal, setLoginModal] = useState(false);

  console.log(loginModal)

  const handleLoginClick = () => {
    setLoginModal(true);
  };

  return (
    <>
      {loginModal && <Login loginModal={loginModal} setLoginModal={setLoginModal} />}
      <div>
        <div>Home</div>
        <span onClick={handleLoginClick}>Login</span>
      </div>
    </>
  );
};
