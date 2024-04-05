import React from "react";
import UserList from "../pages/users/user-list";
import NewUser from "../pages/users/new-user";
import EditUser from "../pages/users/edit-users";
import { BrowserRouter, Outlet, Route, Routes } from "react-router-dom";
import Layout from "./Layout";
import NewBooking from "../pages/bookings/new-bookings";
import EditBooking from "../pages/bookings/edit-bookings";
import BookingList from "../pages/bookings/bookings-list";
import NewRoom from "../pages/rooms/new-room";
import EditRoom from "../pages/rooms/edit-rooms";
import RoomList from "../pages/rooms/room-list";
import PhotoList from "../pages/photos/photo-list";
import EditPhoto from "../pages/photos/edit-photo";
import AddingPhoto from "../pages/photos/adding-photos";

const MainContent =() => {
    return(
    <>
            <Routes>
                <Route path="/" element={<Layout />}>
                <Route index element={<UserList />} />
                <Route path="new-user" element={<NewUser />} />
                <Route path="edit-user" element={<EditUser />} />
                <Route path="user-list" element={<UserList />} />

                <Route path="new-booking" element={<NewBooking/>} />
                <Route path="edit-booking" element={<EditBooking />} />
                <Route path="booking-list" element={<BookingList />} />

                <Route path="new-rooms" element={<NewRoom/>} />
                <Route path="edit-rooms" element={<EditRoom />} />
                <Route path="room-list" element={<RoomList />} />

                <Route path="photo-list" element={<PhotoList/>} />
                <Route path="edit-photo" element={<EditPhoto />} />
                <Route path="adding-photo" element={<AddingPhoto />} />


                {/* <Route path="new-cart" element={<NewCart />} />
                <Route path="edit-cart" element={<EditCart />} />
                <Route path="cart-list" element={<CartList />} /> */}
                
                </Route>
            </Routes>
            
    </>
    );
};

export default MainContent;