import React from "react";
import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import { useNavigate } from "react-router-dom";
import { StoreContext } from "../context/context";
import { useContext } from "react";
import swal from "sweetalert";

export const NavBar = () => {
  const navigate = useNavigate();

  const { token, setToken } = useContext(StoreContext);

  const navigateHome = () => {
    if (!token) {
      swal({
        text: "You have to Log In!",
        icon: "error",
      });
    } else {
      navigate("/");
    }
  };

  const handleLogin = () => {
    navigate("/login");
  };

  const handleLogOut = () => {
    localStorage.removeItem("token");
    setToken(null);
  };

  const navigateSearch = () => {
    if (!token) {
      swal({
        text: "You have to Log In!",
        icon: "error",
      });
    } else {
      navigate("/search");
    }
  };

  return (
    <>
      <Navbar bg="dark" variant="dark">
        <Container className="pt-2 pb-2">
          <Navbar.Brand href="#home">HOTEL MENU APP</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link onClick={navigateHome}>Menu</Nav.Link>
            <Nav.Link onClick={navigateSearch}>Search</Nav.Link>
            {token ? (
              <Nav.Link onClick={handleLogOut}>Log Out</Nav.Link>
            ) : (
              <Nav.Link onClick={handleLogin}>Login</Nav.Link>
            )}
          </Nav>
        </Container>
      </Navbar>
    </>
  );
};
