import React from "react";
import { useForm } from "react-hook-form";
import Button from "react-bootstrap/Button";
import axios from "axios";
import swal from "sweetalert";
import { useNavigate } from "react-router-dom";
import { NavBar } from "./NavBar";
import { useContext } from "react";
import { StoreContext } from "../context/context";


export const Login = () => {
  const navigate = useNavigate();

  const { setToken } =
    useContext(StoreContext);

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  console.log("ERRORS:", errors);

  const onSubmit = async (data) => {
    try {
      console.log("ENTRE", data);

      const response = await axios.post(
        "http://challenge-react.alkemy.org",
        data
      );
      console.log(response)
      const { token } = response.data;
      localStorage.setItem("token", token);
      setToken(token)
      reset();
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
    <div className="bg-dark min-vh-100">
      <NavBar />
      <form onSubmit={handleSubmit(onSubmit)} className="mt-5">
        <div className="w-50 mx-auto">
          <div className="h4 mb-3 text-white">
            <div>Hotel Login</div>
          </div>
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
          <div className="d-flex justify-content-end mt-3">
            <Button variant="primary" type="submit">
              Login
            </Button>
          </div>
        </div>
      </form>
    </div>
  );
};
