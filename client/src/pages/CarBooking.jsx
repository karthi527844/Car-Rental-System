import React, { useEffect, useState } from "react";
import Layout from "../components/Layout";
import "../../node_modules/bootstrap/dist/css/bootstrap.min.css";
import axios from "axios";
import { useLocation, useParams } from "react-router-dom";

function CarBooking() {
  const [cars, setCars] = useState([]);
  const { id } = useParams();
  const [name, setName] = useState("");
  const [bookingDate, setBookingDate] = useState("");
  const [endDate, setEndDate] = useState("");
  const [price, setPrice] = useState("");
  const [status, setStatus] = useState("");

  const location = useLocation();
  const { carName: passedCarName } = location.state || {};

  useEffect(() => {
    axios
      .get(`http://localhost:8000/bookings/getBookings/${id}`)
      .then((res) => {
        console.log(res.data.cars);
        setCars(res.data.cars);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [id]);

  function handleSubmit(event) {
    event.preventDefault();
    const formObj = {
      name: name,
      bookingDate: bookingDate,
      endDate: endDate,
      price: price,
      status: status,
    };
    console.log(formObj);

    axios
      .post("http://localhost:8000/bookings/create-bookings", formObj)
      .then((res) => {
        console.log(res.data);
        alert("Booked Successfully");
      })
      .catch((err) => {
        console.log(err);
        alert("backend error");
      });
  }

  return (
    <Layout>
      {console.log(cars)}
      <div className="container card shadow-lg w-50 p-4 border border-4 border-primary rounded-5">
        <h1 className="fw-light text-center mb-3 p-3">
          Booking of {passedCarName}
          {""}
        </h1>
        <form onSubmit={handleSubmit}>
          <div>
            <label htmlFor="name">Enter your name: </label>
            <input
              type="text"
              className="form-control"
              id="name"
              placeholder="Enter your name"
              onChange={(event) => setName(event.target.value)}
            />
          </div>
          <div className="form-group mb-3">
            <label htmlFor="bookingDate">From:</label>
            <input
              type="Date"
              className="form-control"
              id="bookingDate"
              placeholder="From"
              onChange={(event) => setBookingDate(event.target.value)}
            />
          </div>
          <div className="form-group mb-3">
            <label htmlFor="endDate">To:</label>
            <input
              type="Date"
              className="form-control"
              id="endDate"
              placeholder="To"
              onChange={(event) => setEndDate(event.target.value)}
            />
          </div>
          <div className="form-group mb-3">
            <label htmlFor="price">Price:</label>
            <input
              type="number"
              className="form-control"
              id="price"
              placeholder="Price"
              onChange={(event) => setPrice(event.target.value)}
            />
          </div>
          <div className="form-group mb-3">
            <label htmlFor="status">Status: </label>
            <select
              className="form-control"
              id="status"
              onChange={(event) => setStatus(event.target.value)}
            >
              <option value="" disabled selected>
                Select Status...
              </option>
              <option value="Pending">Pending</option>
              <option value="Confirmed">Confirmed</option>
              <option value="Cancelled">Cancelled</option>
              <option value="Completed">Completed</option>
            </select>
          </div>

          <div className="form-group d-flex justify-content-center mt-2">
            <input type="submit" className=" btn btn-primary p-3 m-2" />
          </div>
        </form>
      </div>
    </Layout>
  );
}

export default CarBooking;
