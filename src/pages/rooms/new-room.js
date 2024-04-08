import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const NewRoom = () => {
  const [name, setName] = useState("");
  const [price_per_day, setPrice_Per_Day] = useState("");
  const [discounted_price, setDiscounted_Price] = useState("");
  const [bed_details, setBed_Details] = useState("");
  const [amenities, setAmenities] = useState([]);
  const [person_capacity, setPerson_Capacity] = useState("");
  const [photos, setPhotos] = useState([]);
  const [thumbnail, setThumbnail] = useState("");
  const [SelectedAmenities,setSelectedAminites] = useState([]);
  useEffect(() => {
    console.log("Name =" + name);
    console.log("Price per day" + price_per_day);
    console.log("Discount =" + discounted_price);
    console.log("Bed Detail =" + bed_details);
    console.log("Amentites =" + amenities);
    console.log("Person Capacity =" + person_capacity);
    console.log("Photos =" + photos);
    console.log("Thumbnail =" + thumbnail);
    
  }, [
    name,
    price_per_day,
    discounted_price,
    bed_details,
    amenities,
    person_capacity,
    photos,
    thumbnail,
  ]);

  useEffect(()=>{
    fetchAmenities();
  },[])
  const fetchAmenities = async () => {
    const response = await fetch(`http://localhost:3001/amenities`);

    const responseJSON = await response.json();

    console.log("Response>>", responseJSON);
    setAmenities(responseJSON);
  };

  return (
    <>
      <h1>I am new user</h1>
      <form
        onSubmit={async (event) => {
          event.preventDefault();
          console.log("Name =", name);
          console.log("Price per day", price_per_day);
          console.log("Discount =", discounted_price);
          console.log("Bed Detail =", bed_details);
          console.log("Amentites =", amenities);
          console.log("Person Capacity =", person_capacity);
          console.log("Photos =", photos);
          console.log("Thumbnail =", thumbnail);

          const data = {
            name: name,
            price_per_day: price_per_day,
            discounted_price: discounted_price,
            bed_details: bed_details,
            amenities: SelectedAmenities,
            person_capacity: person_capacity,
            photos: photos,
            thumbnail: thumbnail,
          };

          const requestOptions = {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(data),
          };

          const response = await fetch(
            "http://localhost:3001/rooms",
            requestOptions
          );

          const responseJSON = await response.json();
          console.log("data entered", responseJSON);
          // for redirectCode mean same data submit again
          window.location.replace("http://localhost:3000/room-list");
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
        <label for="price_per_day">Price per Day</label>
        <input
          id="price_per_day"
          name="price_per_day"
          type="text"
          onChange={(event) => {
            setPrice_Per_Day(event.target.value);
          }}
        />{" "}
        <br />
        <label for="discounted_price">Discount</label>
        <input
          id="discounted_price"
          name="discounted_price"
          type="text"
          onChange={(event) => {
            setDiscounted_Price(event.target.value);
          }}
        />{" "}
        <br />
        <label for="bed_details">Bed Details</label>
        <input
          id="bed_details"
          name="bed_details"
          type="text"
          onChange={(event) => {
            setBed_Details(event.target.value);
          }}
        />
        <br />
        <label for="amenities">Amenities:</label>
        <select name="amenities" id="amenities" multiple onChange={(event)=>{
          
          var options = event.target.options;
         
          var value = [];
          var tempSelectedAmenities =[];
          for (var i=0, l = options.length; i< l ; i++){
            console.log("option"+ i ,options[i].selected)
            if(options[i].selected){
              value.push(options[i].value);
              tempSelectedAmenities.push(amenities[i]);
            
            }

          }
          setSelectedAminites(tempSelectedAmenities)
          console.log("selected value=", value )
        }}>
          {amenities.map((amenity) => {
            return <option value={amenity._id}>{amenity.name}</option>;
          })}
        </select>
        <br></br>
        <label for="person_capacity">Person Capacity</label>
        <input
          id="person_capacity"
          name="person_capacity"
          type="text"
          onChange={(event) => {
            setPerson_Capacity(event.target.value);
          }}
        />{" "}
        <br />
        <label for="photos">Photos</label>
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
                    setPhotos(reader.result);
                    // setImagePreview(reader.result)

                    console.log("I am here")
                  }
                  reader.readAsDataURL(file);
                }
              
          }}
          
        />
        <br />
        <label for="thumnai">Thumbnail</label>
        <input
          id="thumbnail"
          name="thumbnail"
          type="text"
          onChange={(event) => {
            setThumbnail(event.target.value);
          }}
        />{" "}
        <br />
        <button type="submit">Submit</button>
      </form>
    </>
  );
};

export default NewRoom;
