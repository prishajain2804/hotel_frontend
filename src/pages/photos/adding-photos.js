import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const AddingPhoto = () => {
  const [name, setName] = useState("");
  const [photo, setPhoto] = useState("");

  useEffect(() => {
    console.log("Name =" + name);
    console.log("Photos =" + photo);
  }, [name, photo]);

  return (
    <>
      <h1>I am new user</h1>
      <form
        onSubmit={async (event) => {
          event.preventDefault();
          console.log("Name =", name);
          console.log("Photos =", photo);

          const data = {
            name: name,
            photo: photo,
          };

          const requestOptions = {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(data),
          };

          const response = await fetch(
            "http://localhost:3001/photos",
            requestOptions
          );

          const responseJSON = await response.json();
          console.log("data entered", responseJSON);
          // for redirectCode mean same data submit again
          window.location.replace("http://localhost:3000/photo-list");
        }}
      >
        <label for="name">Name</label>
        <input
          id="name"
          name="name"
          type="text"
          onChange={(event) => {
            setName(event.target.value);
          }}
        />{" "}
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
              
          }}
          
        />
        <button type="submit">Submit</button>
      </form>
    </>
  );
};

export default AddingPhoto;
