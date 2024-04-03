import React, { useState } from "react";
import styles from "./SideBar.module.css";
import SideBarItem from "./SideBarItem";
import { Link, Outlet } from "react-router-dom";
import {
    CDBSidebar,
    CDBSidebarContent,
    CDBSidebarFooter,
    CDBSidebarHeader,
    CDBSidebarMenu,
    CDBSidebarMenuItem,
  } from 'cdbreact';
  import { NavLink } from 'react-router-dom';
import Header from "../Header";
import MainContent from "../MainContent";

const MENU_ITEM = ["Users", "Rooms", "Bookings"];

const SideBar =() => {
    const [closeOtherItems, setCloseOtherItems] = useState([true, true, true]);

    const closeOtherItem = (index) =>{
        console.log("Inside close otheritem" + index);
        for(var i=0; i< MENU_ITEM.length; i++){
            if(index != i){
                let temp = [...closeOtherItems];
                temp[i] = true;
                setCloseOtherItems(temp);
                }
            else {
                let temp = [...closeOtherItems];
                temp[i] = false;
                setCloseOtherItems(temp);
            }
        }
    };

    return(
    // <div className={styles["side-bar"]}>
    //     <aside>
    //         <nav>
    //             <ul className={styles["ul-aside"]}>
    //             {/* <li className={styles["li-aside"]}><a class="active" href="#home">Users</a></li>
    //             <li  className={styles["li-aside"]}><a href="#news">Products</a></li>
    //             <li  className={styles["li-aside"]}><a href="#contact">Carts</a></li> */}
    //             <SideBarItem title={MENU_ITEM[0]} closeItem={closeOtherItems[0]} closeOtherItem={closeOtherItem} index = {0} path="/user-list"></SideBarItem>
    //             <SideBarItem title={MENU_ITEM[1]} closeItem={closeOtherItems[1]} closeOtherItem={closeOtherItem} index = {1} path="/product-list"></SideBarItem>
    //             <SideBarItem title={MENU_ITEM[2]} closeItem={closeOtherItems[2]} closeOtherItem={closeOtherItem} index = {2} path="/cart-list"></SideBarItem>
    //             </ul>
    //         </nav>
    //     </aside>
    // </div>

<div style={{ display: 'flex', height: '100vh', overflow: 'scroll initial' }}>
      <CDBSidebar textColor="#fff" backgroundColor="#333">
        <CDBSidebarHeader prefix={<i className="fa fa-bars fa-large"></i>}>
          <a href="/" className="text-decoration-none" style={{ color: 'inherit' }}>
            Sidebar
          </a>
        </CDBSidebarHeader>

        <CDBSidebarContent className="sidebar-content">
          <CDBSidebarMenu>

            <NavLink exact to="/user-list" activeClassName="activeClicked">
              <CDBSidebarMenuItem icon="user">Users</CDBSidebarMenuItem>
            </NavLink>

            <NavLink exact to="/product-list" activeClassName="activeClicked">
              <CDBSidebarMenuItem icon="table">Bookings</CDBSidebarMenuItem>
            </NavLink>

            <NavLink exact to="/cart-list" activeClassName="activeClicked">
              <CDBSidebarMenuItem icon="chart-line">R0oms</CDBSidebarMenuItem>
            </NavLink>

            <NavLink exact to="/hero404" target="_blank" activeClassName="activeClicked">
              <CDBSidebarMenuItem icon="exclamation-circle">404 page</CDBSidebarMenuItem>
            </NavLink>
          </CDBSidebarMenu>
        </CDBSidebarContent>

        <CDBSidebarFooter style={{ textAlign: 'center' }}>
          <div
            style={{
              padding: '20px 5px',
            }}
          >
            Sidebar Footer
          </div>
        </CDBSidebarFooter>
      </CDBSidebar>

      <div className="SideContent" style={{width:"calc(100% )"}} >
      <Header />
      <MainContent/>
      </div>
    </div>
    
    );
};

export default SideBar;