import React, { useState } from "react";
import Layout from "../components/Layout";
import axios from "axios";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

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
        console.log(res.data);
        alert("Login Success");
      })
      .catch((err) => {
        console.log(err);
        alert("Login Failed");
        });
  }
  return (
    <div>
      <Layout>
        <div className="container border border-5 border-primary  rounded-5 ">
          <h1 className="text-center display-4 mt-3 p-3">Login</h1>
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
            <div className="form-group d-flex justify-content-center">
              <button
                type="submit"
                className="btn btn-primary p-3 m-3 rounded-2"
              >
                Login
              </button>
            </div>
          </form>
        </div>
      </Layout>
    </div>
  );
}

export default Login;
