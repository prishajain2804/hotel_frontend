import React from "react";
import UserList from "../pages/users/user-list";
import NewUser from "../pages/users/new-user";
import EditUser from "../pages/users/edit-users";
import NewProduct from "../pages/products/new-product";
import ProductList from "../pages/products/product-list";
import { BrowserRouter, Outlet, Route, Routes } from "react-router-dom";
import EditProduct from "../pages/products/edit-product";
import Layout from "./Layout";
import CartList from "../pages/carts/cart-list";
import EditCart from "../pages/carts/edit-cart";
import NewCart from "../pages/carts/new-cart";

const MainContent =() => {
    return(
    <>
            <Routes>
                <Route path="/" element={<Layout />}>
                <Route index element={<UserList />} />
                <Route path="new-user" element={<NewUser />} />
                <Route path="edit-user" element={<EditUser />} />
                <Route path="user-list" element={<UserList />} />

                <Route path="new-product" element={<NewProduct />} />
                <Route path="edit-product" element={<EditProduct />} />
                <Route path="product-list" element={<ProductList />} />

                {/* <Route path="new-cart" element={<NewCart />} />
                <Route path="edit-cart" element={<EditCart />} />
                <Route path="cart-list" element={<CartList />} /> */}
                
                </Route>
            </Routes>
            
    </>
    );
};

export default MainContent;