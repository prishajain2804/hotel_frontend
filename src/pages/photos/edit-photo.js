import React, { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";

const EditBooking = () => {
   const[photo,setPhoto] = useState("");
   const[name,setName] = useState("")
 
  const searchParams = new URLSearchParams(document.location.search);
  console.log(">>>>>" + searchParams.get("id"));
  const id = searchParams.get("id");

  useEffect(() => {
   
    console.log("Name =" + name);
    console.log("Photo =" + photo);

    fetchUser();
  }, []);

  const fetchUser = async () => {
    const response = await fetch(`http://localhost:3001/photos/${id}`);

    const responseJSON = await response.json();

    console.log("user is", responseJSON);
    setName(responseJSON.name);
    setPhoto(responseJSON.photo);
  
  };

  return (
    <>
      <h1>I am new user</h1>
      <form
        onSubmit={async (event) => {
          event.preventDefault();
          console.log("Name =", name);
          console.log("Photo", photo);
          


          const data = {
            name: name,
            photo: photo,
            
          };

          const requestOptions = {
            method: "PUT",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(data),
          };
          const response = await fetch(
            `http://localhost:3001/photos/${id}`,
            requestOptions
          );

          const responseJSON = await response.json();
          console.log("data entered", responseJSON);

          window.location.replace("http://localhost:3000/photo-list");
        }}

       
      >
        <label for="name">Name</label>
        <input
          id="name"
          name="name"
          type="text"
          value={name}
          onChange={(event) => {
            setName(event.target.value);
          }}
        />{" "}
        <br />
        <label for="photo">Photos</label>
        <input
          id="photo"
          name="photo"
          type="file"
          value={photo}
          onChange={(event) => {
            setPhoto(event.target.value);
          }}
        />
        <br />
       
        <button type="submit">Submit</button>
      </form>
    </>
  );
};

export default EditBooking;
