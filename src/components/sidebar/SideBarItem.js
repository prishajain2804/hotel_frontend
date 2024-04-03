import React, {useState, useEffect} from "react";
import styles from "./SideBar.module.css";
import { Link } from "react-router-dom";

const SideBarItem = (props) =>{

    const [isOpen, setIsOpen] = useState(false);
    const [height, setHeight] = useState("35px");

    const expandItem =() => {
        setHeight('150px');
    };

    const collapseItem =()=> {
        setHeight('35px');
    };

    useEffect(() => {
        console.log(`index ${props.index} closeItem = ${props.closeItem}`);
    }, [props.closeItem]);

    return (
    <>
     <li className={`${styles["li-aside"]} ${styles["li-aside-item"]}`} 
     style={{height: height,
    backgroundColor: "purple",}}
    onClick={()=>{
        if(isOpen){
            collapseItem();
        } else {
            expandItem();
            props.closeOtherItem(props.index);
        }
        setIsOpen(!isOpen);
    }}
    >
        <Link to={props.path}>{props.title}</Link>
        {/* <a class="active" href="#home">{props.title}</a> */}
        </li>
     </>
     );
};

export default SideBarItem;