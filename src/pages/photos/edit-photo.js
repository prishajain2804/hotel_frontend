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
        {/*  Name component */}
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

        {/*  photo component */}
        <img src={photo} width={100} height={100} />

          <br /><br />

          Upload Photo
          <br />
          <label for="photo">Photos</label>

          <input
              type="file"
              name="avatar"
              id="file"
              accept=".jpeg, .png, .jpg"
              onChange={(e)=>{

                  e.preventDefault();
                  const reader = new FileReader();
                  const file = e.target.files[0];
                  console.log("reader", reader)
                  console.log("file", file)
                  if (reader !== undefined && file !== undefined) {
                      reader.onloadend = () => {
                          // setFile(file)
                          // setSize(file.size);
                          // setName(file.name)
                          console.log(reader.result);
                          setPhoto(reader.result);
                          // setImagePreview(reader.result)

                          console.log("I am here")
                      }
                      reader.readAsDataURL(file);
                  }

              }} />
        <br />
          <br />

        <button type="submit">Submit</button>
      </form>
    </>
  );
};

export default EditBooking;
