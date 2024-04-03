import React, { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";

const EditBooking = () => {
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

  const searchParams = new URLSearchParams(document.location.search);
  console.log(">>>>>" + searchParams.get("id"));
  const id = searchParams.get("id");

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

    fetchUser();
  }, []);

  const fetchUser = async () => {
    const response = await fetch(`http://localhost:3001/bookings/${id}`);

    const responseJSON = await response.json();

    console.log("user is", responseJSON);
    setStart_Date(responseJSON.start_date);
    setEnd_Date(responseJSON.end_date);
    setRoom_id(responseJSON.room_id);
    setRooms(responseJSON.rooms);
    setPrice(responseJSON.price);
    setTax(responseJSON.tax);
    setTotal_Price(responseJSON.total_price);
    setUser_Id(responseJSON.user_id);
    setBooking_Date(responseJSON.booking_date);
    setAdults(responseJSON.adults);
    setKids(responseJSON.kids)
  };

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
            method: "PUT",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(data),
          };
          const response = await fetch(
            `http://localhost:3001/bookings/${id}`,
            requestOptions
          );

          const responseJSON = await response.json();
          console.log("data entered", responseJSON);
        }}
      >
        <label for="start_date">Start Date</label>
        <input
          id="start_date"
          name="start_date"
          type="date"
          value={start_date}
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
          value={end_date}
          onChange={(event) => {
            setEnd_Date(event.target.value);
          }}
        />
        <br />
        <label for="room_id">Rooms Id</label>
        <input
          id="room_id"
          name="room_id"
          type="text"
          value={room_id}
          onChange={(event) => {
            setRoom_id(event.target.value);
          }}
        />
        <br />
        <label for="rooms">Rooms</label>
        <input
          id="rooms"
          name="rooms"
          type="text"
          value={rooms}
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
          value={price}
          onChange={(event) => {
            setPrice(event.target.value);
          }}
        />
        <br />
        <label for="tax">Tax</label>
        <input
          id="tax"
          name="tax"
          type="text"
          value={tax}
          onChange={(event) => {
            setTax(event.target.value);
          }}
        />
        <br />
        <label for="total_price">Total Price</label>
        <input
          id="total_price"
          name="total_price"
          type="text"
          value={total_price}
          onChange={(event) => {
            setTotal_Price(event.target.value);
          }}
        />
        <br />
        <label for="user_id">User ID</label>
        <input
          id="user_id"
          name="user_id"
          type="text"
          value={user_id}
          onChange={(event) => {
            setUser_Id(event.target.value);
          }}
        />
        <br />
        <label for="booking_date">Booking Date</label>
        <input
          id="booking_date"
          name="booking_date"
          type="date"
          value={booking_date}
          onChange={(event) => {
            setBooking_Date(event.target.value);
          }}
        />
        <br />
        <label for="adults">Adults</label>
        <input
          id="adults"
          name="adults"
          type="text"
          value={adults}
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
          value={kids}
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

export default EditBooking;
