import React from "react";
import classes from "../styles/navbar.module.css"
import { Link } from "react-router-dom";

const Navbar = () => {
    return ( 
        <>
        <div className={classes.navbarCtn}>
            <div className={classes.logo}>
                <Link to="/">
            <span>kamára</span>
            </Link>
            </div>
            <div className={classes.navbarRight}>
                <Link to="/about">
                <span>about</span>
                </Link>
                <Link to="/contact">
                <span>contact</span>
                </Link>
            </div>
            </div>
        </>
     );
}
 
export default Navbar;