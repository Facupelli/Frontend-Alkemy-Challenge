import React from "react";
import { useForm } from "react-hook-form";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import axios from "axios";
import swal from "sweetalert";
import { useNavigate } from "react-router-dom";

export const Login = ({ loginModal, setLoginModal, noClose }) => {
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  console.log("ERRORS:", errors);

  const handleClose = () => {
    setLoginModal(false);
  };

  const onSubmit = async (data) => {
    try {
      console.log("ENTRE", data);

      const response = await axios.post(
        "http://challenge-react.alkemy.org/",
        data
      );
      const { token } = response.data;
      console.log(token);
      localStorage.setItem("token", token);
      reset();
      setLoginModal(false);
      navigate("/");
    } catch (e) {
      swal({
        text: e.response.data.error,
        icon: "error",
      });
      console.log("SERVER RESPONSE", e.response?.data);
    }
  };

  return (
    <Modal
      show={loginModal}
      onHide={noClose ? "" : handleClose}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
      size="sm"
    >
      <Modal.Header>
        <Modal.Title>Hotel Login</Modal.Title>
      </Modal.Header>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Modal.Body>
          <div className="form-floating mb-3">
            <input
              type="email"
              className="form-control"
              id="floatingInput"
              placeholder="name@example.com"
              {...register("email", {
                required: true,
              })}
            />
            <label htmlFor="floatingInput">Email address</label>
            {errors.email?.type === "required" && (
              <span className="text-danger">Email is required</span>
            )}
          </div>
          <div className="form-floating">
            <input
              type="password"
              className="form-control"
              id="floatingPassword"
              placeholder="Password"
              {...register("password", {
                required: true,
              })}
            />
            <label htmlFor="floatingPassword">Password</label>
            {errors.password?.type === "required" && (
              <span className="text-danger">Password is required</span>
            )}
          </div>
        </Modal.Body>
        <Modal.Footer>
          {!noClose && (
            <Button variant="secondary" onClick={handleClose}>
              Close
            </Button>
          )}
          <Button variant="primary" type="submit">
            Login
          </Button>
        </Modal.Footer>
      </form>
    </Modal>
  );
};
