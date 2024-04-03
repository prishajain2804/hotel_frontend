import React, { useEffect, useState } from "react";

const NewBooking = () => {
  const [start_date, setStart_Date] = useState("");
  const [end_date, setEnd_Date] = useState("");
  const [room_id, setRoom_id] = useState("");
  const [rooms, setRooms] = useState("");
  const [price, setPrice] = useState("");
  const [tax, setTax] = useState("");
  const [total_price, setTotal_Price] = useState("");
  const [user_id, setUser_Id] = useState("");
  const [booking_date, setBooking_Date] = useState("");
  const [adults, setAdults] = useState("");
  const [kids, setKids] = useState("");

  useEffect(() => {
    console.log("Start Date =" + start_date);
    console.log("End DAte" + end_date);
    console.log("Room Id =" + room_id);
    console.log("Rooms =" + rooms);
    console.log("Price =" + price);
    console.log("Tax =" + tax);
    console.log("Total_price =" + total_price);
    console.log("User Id =" + user_id);
    console.log("Booking Date =" + booking_date);
    console.log("Adults =" + adults);
    console.log("Kids =" + kids);
  }, [
    start_date,
    end_date,
    room_id,
    rooms,
    price,
    tax,
    total_price,
    user_id,
    booking_date,
    adults,
    kids,
  ]);

  return (
    <>
      <h1>I am new user</h1>
      <form
        onSubmit={async (event) => {
          event.preventDefault();
          console.log("Start Date =", start_date);
          console.log("End DAte", end_date);
          console.log("Room Id =", room_id);
          console.log("Rooms =", rooms);
          console.log("Price =", price);
          console.log("Tax =", tax);
          console.log("Total_price =", total_price);
          console.log("User Id =", user_id);
          console.log("Booking Date =", booking_date);
          console.log("Adults =", adults);
          console.log("Kids =", kids);

          const data = {
            start_date: start_date,
            end_date: end_date,
            room_id: room_id,
            rooms: rooms,
            price: price,
            tax: tax,
            total_price: total_price,
            user_id: user_id,
            booking_date: booking_date,
            adults: adults,
            kids: kids,
          };

          const requestOptions = {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(data),
          };

          const response = await fetch(
            "http://localhost:3001/bookings",
            requestOptions
          );

          const responseJSON = await response.json();
          console.log("data entered", responseJSON);
          // for redirectCode mean same data submit again
          window.location.replace("http://localhost:3000/booking-list");
        }}
      >
        <label for="start_date">Start Date</label>
        <input
          id="start_date"
          name="start_date"
          type="date"
          onChange={(event) => {
            setStart_Date(event.target.value);
          }}
        />{" "}
        <br />
        <label for="end_date">End Date</label>
        <input
          id="end_date"
          name="end_date"
          type="date"
          onChange={(event) => {
            setEnd_Date(event.target.value);
          }}
        />{" "}
        <br />
        <label for="rooms_id">Rooms Id</label>
        <input
          id="rooms_id"
          name="rooms_id"
          type="text"
          onChange={(event) => {
            setRoom_id(event.target.value);
          }}
        />{" "}
        <br />
        <label for="rooms">Rooms</label>
        <input
          id="rooms"
          name="rooms"
          type="text"
          onChange={(event) => {
            setRooms(event.target.value);
          }}
        />
        <br />
        <label for="price">Price</label>
        <input
          id="price"
          name="price"
          type="text"
          onChange={(event) => {
            setPrice(event.target.value);
          }}
        />{" "}
        <br />
        <label for="tax">Tax</label>
        <input
          id="tax"
          name="tax"
          type="text"
          onChange={(event) => {
            setTax(event.target.value);
          }}
        />{" "}
        <br />
        <label for="total_price">Total Price</label>
        <input
          id="total_price"
          name="total_price"
          type="text"
          onChange={(event) => {
            setTotal_Price(event.target.value);
          }}
        />{" "}
        <br />
        <label for="user_id">User Id</label>
        <input
          id="user_id"
          name="user_id"
          type="text"
          onChange={(event) => {
            setUser_Id(event.target.value);
          }}
        />{" "}
        <br />
        <label for="booking_date">Booking Date</label>
        <input
          id="booking_date"
          name="booking_date"
          type="date"
          onChange={(event) => {
            setBooking_Date(event.target.value);
          }}
        />{" "}
        <br />
        <label for="adults">Adults</label>
        <input
          id="adults"
          name="adults"
          type="text"
          onChange={(event) => {
            setAdults(event.target.value);
          }}
        />
        <br />
        <label for="kids">Kids</label>
        <input
          id="kids"
          name="kids"
          type="text"
          onChange={(event) => {
            setKids(event.target.value);
          }}
        />
        <br />
        <button type="submit">Submit</button>
      </form>
    </>
  );
};

export default NewBooking;
