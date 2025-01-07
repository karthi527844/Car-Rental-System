import React, { useState } from "react";
import Layout from "../components/Layout";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");

  const Navigate = useNavigate();

  function handleSubmit(event) {
    event.preventDefault();

    const formObj = {
      email,
      password,
    };
    console.log(formObj);

    axios
      .post("http://localhost:8000/users/login-user", formObj)
      .then((res) => {
        console.log(res);
        alert("Login Success");
        Navigate("/home");
      })
      .catch((err) => {
        if (err.response && err.response.data && err.response.data.message) {
          setMessage(err.response.data.message);
        } else {
          console.log("Error", err);
          alert("Login Failed,please try again later");
        }
      });
  }
  return (
    <div>
      <Layout>
        <div className="container card shadow-lg w-50 border border-5 border-primary  rounded-5 ">
          <h1 className="text-center display-4 mb-3 p-3">Login</h1>
          <form onSubmit={handleSubmit}>
            <div className="form-group p-3">
              <label htmlFor="email">E-mail: </label>
              <input
                type="email"
                id="email"
                name="email"
                className="form-control"
                placeholder="Enter your email"
                onChange={(event) => {
                  setEmail(event.target.value);
                }}
                required
              />
            </div>
            <div className="form-group  p-3">
              <label htmlFor="password">Password: </label>
              <input
                type="password"
                id="password"
                name="password"
                className="form-control"
                placeholder="Enter your password"
                onChange={(event) => {
                  setPassword(event.target.value);
                }}
                required
              />
            </div>
            {message && (
              <div className="alert alert-danger bg-danger text-white mt-2 p-2 ">
                {message}
              </div>
            )}
            <div className="form-group d-flex justify-content-center mt-2">
              <button
                type="submit"
                className="btn btn-primary p-3 m-3 rounded-2"
              >
                Login
              </button>
              <div className="form-group ms-5  mt-4 p-2">
                If not registered <Link to={`/sign-up`}>click here</Link>
              </div>
            </div>
          </form>
        </div>
      </Layout>
    </div>
  );
}

export default Login;
