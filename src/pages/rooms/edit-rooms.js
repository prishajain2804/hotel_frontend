import React, { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";

const EditRoom = () => {
    const [name, setName] = useState("");
    const [price_per_day, setPrice_Per_Day] = useState("");
    const [discounted_price, setDiscounted_Price] = useState("");
    const [bed_details, setBed_Details] = useState("");
    const [amentites, setAmentites] = useState("");
    const [person_capacity, setPerson_Capacity] = useState("");
    const [photos, setPhotos] = useState([]);
    const [thumbnail, setThumbnail] = useState("");

  const searchParams = new URLSearchParams(document.location.search);
  console.log(">>>>>" + searchParams.get("id"));
  const id = searchParams.get("id");

  useEffect(() => {
    console.log("Name =" + name);
    console.log("Price per day" + price_per_day);
    console.log("Discount =" + discounted_price);
    console.log("Bed Detail =" + bed_details);
    console.log("Amentites =" + amentites);
    console.log("Person Capacity =" + person_capacity);
    console.log("Photos =" + photos);
    console.log("Thumbnail =" + thumbnail);

    fetchUser();
  }, []);

  const fetchUser = async () => {
    const response = await fetch(`http://localhost:3001/rooms/${id}`);

    const responseJSON = await response.json();

    console.log("user is", responseJSON);
    setName(responseJSON.name);
    setPrice_Per_Day(responseJSON.price_per_day);
    setDiscounted_Price(responseJSON.discounted_price);
    setBed_Details(responseJSON.bed_details);
    setAmentites(responseJSON.amentites);
    setPerson_Capacity(responseJSON.person_capacity);
    setPhotos(responseJSON.photos);
    setThumbnail(responseJSON.thumbnail);
  };

  return (
    <>
      <h1>I am new user</h1>
      <form
        onSubmit={async (event) => {
          event.preventDefault();
          console.log("Name =" ,name);
          console.log("Price per day" , price_per_day);
          console.log("Discount =" , discounted_price);
          console.log("Bed Detail =" , bed_details);
          console.log("Amentites =" , amentites);
          console.log("Person Capacity =" , person_capacity);
          console.log("Photos =" , photos);
          console.log("Thumbnail =" , thumbnail);



          const data = {
            name: name,
            price_per_day: price_per_day,
            discounted_price: discounted_price,
            bed_details: bed_details,
            amentites: amentites,
            person_capacity: person_capacity,
            photos: photos,
            thumbnail: thumbnail,
          };

          const requestOptions = {
            method: "PUT",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(data),
          };
          const response = await fetch(
            `http://localhost:3001/rooms/${id}`,
            requestOptions
          );

          const responseJSON = await response.json();
          console.log("data entered", responseJSON);

          window.location.replace("http://localhost:3000/room-list");
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
        <label for="price_per_day">Price Per Day</label>
        <input
          id="price_per_day"
          name="price_per_day"
          type="text"
          value={price_per_day}
          onChange={(event) => {
            setPrice_Per_Day(event.target.value);
          }}
        />
        <br />
        <label for="discounted_price">Discount</label>
        <input
          id="discounted_price"
          name="discounted_price"
          type="text"
          value={discounted_price}
          onChange={(event) => {
            setDiscounted_Price(event.target.value);
          }}
        />
        <br />
        <label for="bed_details">Bed Details</label>
        <input
          id="bed_details"
          name="bed_details"
          type="text"
          value={bed_details}
          onChange={(event) => {
            setBed_Details(event.target.value);
          }}
        />
        <br />
        <label for="amentites">Amentites</label>
        <input
          id="amentites"
          name="amentites"
          type="text"
          value={amentites}
          onChange={(event) => {
            setAmentites(event.target.value);
          }}
        />
        <br />
        <label for="person_capacity">Person Capacity</label>
        <input
          id="person_capacity"
          name="person_capacity"
          type="text"
          value={person_capacity}
          onChange={(event) => {
            setPerson_Capacity(event.target.value);
          }}
        />
        <br />
          {photos.map(photo=>{
              return <img src={photo.image_data} width={100} height = {100}/>
          })}

          <label htmlFor="photo">Photos</label>

          <input
              type="file"
              name="avatar"
              id="file"
              accept=".jpeg, .png, .jpg"
              onChange={(e) => {

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

                          setPhotos(prevState => {
                              return [...prevState, {image_data:reader.result}]
                          });
                          // setPhoto(reader.result);
                          // setImagePreview(reader.result)

                          console.log("I am here")
                      }
                      reader.readAsDataURL(file);
                  }

              }}

          />
        <br />
        <label for="thumbnail">Thumbnail</label>
        <input
          id="thumbnail"
          name="thumbnail"
          type="text"
          value={thumbnail}
          onChange={(event) => {
            setThumbnail(event.target.value);
          }}
        />
        <br />

        <button type="submit">Submit</button>
      </form>
    </>
  );
};

export default EditRoom;
