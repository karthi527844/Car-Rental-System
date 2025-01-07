import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "../pages/Home";
import About from "../pages/About";
import Cars from "../pages/Cars";
import Login from "../pages/Login";
import SignUp from "../pages/SignUp";
import CarBooking from "../pages/CarBooking";
import MyCars from "../pages/MyCars";

function navRoutes() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/home" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/login" element={<Login />} />
          <Route path="/sign-up" element={<SignUp />} />
          <Route path="/MyCars" element={<MyCars />} />
          <Route path="/cars" element={<Cars />} />
          <Route path="/cars/:id" element={<CarBooking />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default navRoutes;
