import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/Button';


const RoomList = () => {
    const [rooms, setRooms]= useState([]);

    useEffect(() => {
        loadData();
    }, []);

    const loadData = async () => {
        const response = await fetch('http://localhost:3001/rooms');

        const responseJSON = await response.json();

        console.log(responseJSON);
        setRooms(responseJSON);
    };

    return (
        <>
            <h1>I am user List</h1>
            <Link to="/new-rooms">New Rooms</Link>
            {/* use this styles for responsive table */}

            <Table striped bordered hover variant="dark" responsive>
            <thead>
                <tr>
                    <th>ID</th>
                    <th>NAME</th>
                    <th>PRICE PER DAY</th>
                    <th>DISCOUNTED PRICE</th>
                    <th>BED DETAIL</th>
                    <th>AMENTIES</th>
                    <th>PERSON CAPACITY</th>
                    <th>PHOTOS</th>
                    <th>THUMNAIL</th> 
                    <th>EDIT</th>
                    <th>DELETE</th>

                </tr>
                </thead>
                <tbody>
                {rooms.map((rooms)=>{
                    return <tr>
                        <td>{rooms._id}</td>
                        <td>{rooms.name}</td>
                        <td>{rooms.price_per_day}</td>
                        <td>{rooms.discounted_price}</td>
                        <td>{rooms.bed_details}</td>
                        <td>{rooms.amentites}</td>
                        <td>{rooms.person_capacity}</td>
                        <td><img src={rooms.photos} width={100} height={100} /></td>
                        {/* <td>{(new Date("" + user.created)).toDateString()}</td> */}
                        {/* <td>{new Date(user.created).toDateString()}</td> */}
                        <td>{rooms.thumnail}</td>
                        
                        <td><Link to={`/edit-rooms?id=${rooms._id}`}>Edit User</Link></td>

                        <td><Button variant="primary"
                        onClick={async () => {
                            console.log(rooms._id);
                            const requestOptions = {
                                method: 'DELETE',
                                headers: { 'Content-Type': 'application/json' },
                            };

                            const response = await fetch(`http://localhost:3001/rooms/${rooms._id}`,
                             requestOptions);

                             const responseJSON = await response.json();
                             loadData();

                             console.log(responseJSON);
                            }
                            }
                        >Delete</Button></td>

                        </tr>
                })}
               </tbody>
            </Table>

        </>
    );
};

export default RoomList;
