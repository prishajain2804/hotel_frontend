import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/Button';


const PhotoList = () => {
    const [photos, setPhotos]= useState([]);

    useEffect(() => {
        loadData();
    }, []);

    const loadData = async () => {
        const response = await fetch('http://localhost:3001/photos');

        const responseJSON = await response.json();

        console.log(responseJSON);
        setPhotos(responseJSON);
    };

    return (
        <>
            <h1>I am Photos List</h1>
            <Link to="/adding-photo">New Photos</Link>
            {/* use this styles for responsive table */}
            
            <Table striped bordered hover variant="dark" responsive>
            <thead>
                <tr>
                    <th>ID</th>
                    <th>NAME</th>
                    <th>IMAGE</th>
                    <th>EDIT</th>
                    <th>DELETE</th>
                   
                    
                </tr>
                </thead>
                <tbody>
                {photos.map((photo)=>{
                    return <tr>
                        <td>{photo._id}</td>
                        <td>{photo.name}</td>
                        <td><img src={photo.photo} width={100} height={100}/></td>
                       <td><Link to={`/edit-photo?id=${photo._id}`}>Edit</Link></td>

                        <td><Button variant="primary"
                        onClick={async () => {
                            console.log(photo._id);
                            const requestOptions = {
                                method: 'DELETE',
                                headers: { 'Content-Type': 'application/json' },
                            };
            
                            const response = await fetch(`http://localhost:3001/photos/${photo._id}`,
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

export default PhotoList;