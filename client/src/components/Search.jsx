import React from "react";
import { useFormik } from "formik";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Spinner from "react-bootstrap/Spinner";

import { useState } from "react";
import { searchRecipe } from "../info-api/api";
import { Plate } from "./Plate";
import { NavBar } from "./NavBar";
import { useEffect } from "react";
import { Login } from "./Login";

export const Search = () => {
  const [platesSearched, setPlatesSearched] = useState([]);
  const [loading, setLoading] = useState(false);
  const [loginModal, setLoginModal] = useState(false);

  console.log("state", platesSearched);

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (!token) {
      setLoginModal(true);
    }
  }, []);

  const formik = useFormik({
    initialValues: {
      title: "",
    },
    onSubmit: async (values) => {
      console.log(values);
      setLoading(true);
      await searchRecipe(values)
        .then((res) => setPlatesSearched(res))
        .then(() => setLoading(false));
    },
  });

  return (
    <div className="bg-dark  min-vh-100 position-relative ">
      {loginModal && (
        <Login
          loginModal={loginModal}
          setLoginModal={setLoginModal}
          noClose={true}
        />
      )}
      <NavBar />
      <div className="text-white m-5">
        <form onSubmit={formik.handleSubmit}>
          <div className="input-group w-50 mx-auto">
            <input
              type="text"
              name="title"
              id="title"
              onChange={formik.handleChange}
              value={formik.values.title}
              className="form-control"
              placeholder="Search"
            />
            <button type="submit" className="btn btn-primary px-4">
              <i className="bi bi-search"></i>
            </button>
          </div>
        </form>
      </div>

      {loading ? (
        <div className="position-absolute top-50 start-50 translate-middle">
          <Spinner animation="border" variant="primary" />
        </div>
      ) : (
        <Container className="mt-5 bg-dark gap-2">
          <Row className="justify-content-center gap-5">
            {platesSearched.length > 0 &&
              platesSearched.map((el) => (
                <Plate
                  key={el.id}
                  image={el.image}
                  title={el.title}
                  search={true}
                  id={el.id}
                />
              ))}
          </Row>
        </Container>
      )}
    </div>
  );
};
