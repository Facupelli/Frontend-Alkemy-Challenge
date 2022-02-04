import React from "react";
import { useFormik } from "formik";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Spinner from "react-bootstrap/Spinner";
import swal from "sweetalert";
import { useState } from "react";
import { searchRecipe } from "../info-api/api";
import { Plate } from "./Plate";
import { NavBar } from "./NavBar";
import { useEffect } from "react";
import Button from "react-bootstrap/esm/Button";

export const Search = () => {
  const [platesSearched, setPlatesSearched] = useState([]);
  const [loading, setLoading] = useState(false);

  const [valueSearched, setValueSearched] = useState({});

  const [count, setCount] = useState(1);

  const handleLoadMore = async () => {
    await searchRecipe(valueSearched, count).then((res) => {
      const newState = [...platesSearched, res].flat();
      setPlatesSearched(newState);
    });
    setCount(count + 1)
  };

  const formik = useFormik({
    initialValues: {
      title: "",
    },
    onSubmit: async (values, { resetForm }) => {
      setLoading(true);
      await searchRecipe(values)
        .then((res) => {
          if (res === "no plates founded") {
            swal({
              text: "No results",
              icon: "error",
            });
          } else {
            setPlatesSearched(res);
          }
        })
        .then(() => {
          setLoading(false);
          setValueSearched(values);
          setCount(0)
          resetForm();
        })
        .catch((e) => console.log(e));
    },
  });

  return (
    <div className="bg-dark  min-vh-100 position-relative ">
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
        <>
          <Container className="mt-5 bg-dark gap-2">
            <Row className="justify-content-center gap-5">
              {platesSearched &&
                platesSearched.length > 0 &&
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
          {platesSearched && platesSearched.length > 0 && (
            <div className="d-flex justify-content-center mt-4 pb-4">
              <Button
                variant="outline-primary"
                size="sm"
                onClick={handleLoadMore}
              >
                Load More
              </Button>
            </div>
          )}
        </>
      )}
    </div>
  );
};
