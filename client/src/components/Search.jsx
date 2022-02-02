import React from "react";
import { useFormik } from "formik";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import { useState } from "react";
import { searchRecipe } from "../info-api/api";
import { Plate } from "./Plate";

export const Search = () => {
  const [platesSearched, setPlatesSearched] = useState([]);

  console.log("state", platesSearched);

  const formik = useFormik({
    initialValues: {
      title: "",
    },
    onSubmit: async (values) => {
      console.log(values);
      await searchRecipe(values).then((res) => setPlatesSearched(res));
    },
  });

  return (
    <div className="bg-dark text-white m-5 ">
      <div>
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

      <Container className="mt-5 bg-dark gap-2">
        <Row className="justify-content-center gap-5">
          {platesSearched.length > 0 &&
            platesSearched.map((el) => (
              <Plate key={el.id} image={el.image} title={el.title} />
            ))}
        </Row>
      </Container>
    </div>
  );
};
