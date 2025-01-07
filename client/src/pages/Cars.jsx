import React, { useState } from "react";
import Layout from "../components/Layout";
import axios from "axios";

function Cars() {
  const [make, setMake] = useState("");
  const [model, setModel] = useState("");
  const [year, setYear] = useState("");
  const [pricePerDay, setPricePerDay] = useState("");
  const [availability, setAvailability] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    const formObj = { make, model, year, pricePerDay, availability };
    console.log(formObj);

    axios
      .post("http://localhost:8000/cars/add-car", formObj)
      .then((res) => {
        console.log(res.data);
        alert("Car added successfully");
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div>
      <Layout>
        <div className="container card shadow-lg w-50 border border-5 border-primary p-5 rounded-4">
          <h1 className="text-center">Create Cars</h1>
          <form className="" onSubmit={handleSubmit}>
            <div className="form-group p-1">
              <label htmlFor="make">Make:</label>
              <input
                type="text"
                name="make"
                id="make"
                className="form-control"
                onChange={(event) => setMake(event.target.value)}
              />
            </div>
            <div className="form-group p-1">
              <label htmlFor="model">Model:</label>
              <input
                type="text"
                name="model"
                id="model"
                className="form-control"
                onChange={(event) => setModel(event.target.value)}
              />
            </div>
            <div className="form-group p-1">
              <label htmlFor="year">Year:</label>
              <input
                type="text"
                name="year"
                id="year"
                className="form-control"
                onChange={(event) => setYear(event.target.value)}
              />
            </div>
            <div className="form-group p-1">
              <label htmlFor="pricePerDay">Price Per Day:</label>
              <input
                type="text"
                name="pricePerDay"
                id="pricePerDay"
                className="form-control"
                onChange={(event) => setPricePerDay(event.target.value)}
              />
            </div>
            <div className="form-group p-1">
              <label htmlFor="availability">Availability:</label>
              <input
                type="text"
                name="availability"
                id="availability"
                className="form-control"
                onChange={(event) => setAvailability(event.target.value)}
              />
            </div>
            <div className="form-group d-flex justify-content-center p-1">
              <button type="submit" className="btn btn-primary p-3 m-3">
                Submit
              </button>
            </div>
          </form>
        </div>
      </Layout>
    </div>
  );
}

export default Cars;
