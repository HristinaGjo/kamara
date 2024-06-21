import React from "react";
import classes from "../styles/navbar.module.css"

const Navbar = () => {
    return ( 
        <>
        <div className={classes.navbarCtn}>
            <div className={classes.logo}>
            <span>kamára</span>
            </div>
            <div className={classes.navbarRight}>
                <span>about</span>
                <span>contact</span>
            </div>
            </div>
        </>
     );
}
 
export default Navbar;