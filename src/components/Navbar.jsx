import React from "react";
import classes from "../styles/navbar.module.css"

const Navbar = () => {
    return ( 
        <>
        <div className={`${classes.navbarCtn} ${classes.leftNavbar}`}>
            <div className={classes.navLinks}>
            <span>kamara</span>
                <span>about</span>
                <span>contact</span>
            </div>
        </div>
        <div className={`${classes.navbarCtn} ${classes.rightNavbar}`}>
        <div className={classes.navLinksRight}>
            <span>instagram</span>
                <span>facebook</span>
                <span>contact</span>
            </div>
        </div>
        </>
     );
}
 
export default Navbar;