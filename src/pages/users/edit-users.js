import React, { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";

const EditUser = () => {
  const [first_name, setFirst_Name] = useState("");
  const [last_name, setLast_Name] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [age, setAge] = useState("");
  const [identity_proof_number, setIdentity_Proof_Number] = useState("");
  const [identity_proof_type, setIdentity_Proof_Type] = useState("");
  const [mobile, setMobile] = useState("");
  const [address, setAddress] = useState("");
  const [email, setEmail] = useState("");

  const searchParams = new URLSearchParams(document.location.search);
  console.log(">>>>>" + searchParams.get("id"));
  const id = searchParams.get("id");

  useEffect(() => {
    console.log("firstName =" + first_name);
    console.log("LastName" + last_name);
    console.log("UserName =" + username);
    console.log("Password =" + password);
    console.log("age =" + age);
    console.log("identityProofName =" + identity_proof_type);
    console.log("identityNumber =" + identity_proof_number);
    console.log("mobile =" + mobile);
    console.log("address =" + address);
    console.log("Email =" + email);

    fetchUser();
  }, []);

  const fetchUser = async () => {
    const response = await fetch(`http://localhost:3001/users/${id}`);

    const responseJSON = await response.json();

    console.log("user is", responseJSON);
    setFirst_Name(responseJSON.first_name);
    setLast_Name(responseJSON.last_name);
    setUsername(responseJSON.username);
    setPassword(responseJSON.password);
    setAge(responseJSON.age);
    setIdentity_Proof_Number(responseJSON.identity_proof_number);
    setIdentity_Proof_Type(responseJSON.identity_proof_type);
    setMobile(responseJSON.mobile);
    setAddress(responseJSON.address);
    setEmail(responseJSON.email);
  };

  return (
    <>
      <h1>I am new user</h1>
      <form
        onSubmit={async (event) => {
          event.preventDefault();
          console.log("FirstName +", first_name);
          console.log("LastName =" , last_name);
          console.log("Username =", username);
          console.log("password =",password);
          console.log("age =",age);
          console.log("identity_type =",identity_proof_type);
          console.log("identity_number =",identity_proof_number);
          console.log("mobile =",mobile);
          console.log("address =", address);
          console.log("email =",email)

          const data = {
            first_name: first_name,
            last_name: last_name,
            username: username,
            password: password,
            age: age,
            identity_proof_type: identity_proof_type,
            identity_proof_number: identity_proof_number,
            mobile: mobile,
            address: address,
            email: email,
          };

          const requestOptions = {
            method: "PUT",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(data),
          };
          const response = await fetch(
            `http://localhost:3001/users/${id}`,
            requestOptions
          );

          const responseJSON = await response.json();
          console.log("data entered", responseJSON);
          window.location.replace("http://localhost:3000/user-list");
        }}
      >
        <label for="first_name">First Name</label>
        <input
          id="first+name"
          name="first_name"
          type="text"
          value={first_name}
          onChange={(event) => {
            setFirst_Name(event.target.value);
          }}
        />{" "}
        <br />
        <label for="last_name">Last Name</label>
        <input
          id="last_name"
          name="last_name"
          type="text"
          value={last_name}
          onChange={(event) => {
            setLast_Name(event.target.value);
          }}
        />
        <br />
        <label for="username">Username</label>
        <input
          id="username"
          name="username"
          type="text"
          value={username}
          onChange={(event) => {
            setUsername(event.target.value);
          }}
        />
        <br />
        <label for="password">Password</label>
        <input
          id="password"
          name="password"
          type="text"
          value={password}
          onChange={(event) => {
            setPassword(event.target.value);
          }}
        />
        <br />
        <label for="age">Age</label>
        <input
          id="age"
          name="age"
          type="text"
          value={age}
          onChange={(event) => {
            setAge(event.target.value);
          }}
        />
        <br />
        <label for="identity_proof_type">Identity type</label>
        <input
          id="identity_proof_type"
          name="identity_proof_type"
          type="text"
          value={identity_proof_type}
          onChange={(event) => {
            setIdentity_Proof_Type(event.target.value);
          }}
        />
        <br />
        <label for="identity_proof_number">Identity number</label>
        <input
          id="identity_proof_number"
          name="identity_proof_number"
          type="text"
          value={identity_proof_number}
          onChange={(event) => {
            setIdentity_Proof_Number(event.target.value);
          }}
        />
        <br />
        <label for="mobile">Mobile</label>
        <input
          id="mobile"
          name="mobile"
          type="text"
          value={mobile}
          onChange={(event) => {
            setMobile(event.target.value);
          }}
        />
        <br />
        <label for="address">Address</label>
        <input
          id="address"
          name="address"
          type="text"
          value={address}
          onChange={(event) => {
            setAddress(event.target.value);
          }}
        />
        <br />
        <label for="email">email</label>
        <input
          id="email"
          name="email"
          type="text"
          value={email}
          onChange={(event) => {
            setEmail(event.target.value);
          }}
        />
        <br />
        <button type="submit">Submit</button>
      </form>
    </>
  );
};

export default EditUser;
