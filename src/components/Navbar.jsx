import React from "react";
import classes from "../styles/navbar.module.css"

const Navbar = () => {
    return ( 
        <>
        <div className={`${classes.navbarCtn} ${classes.leftNavbar}`}>
            <div className={classes.navLinks}>
            <span>kamára</span>
                <span>about</span>
                <span>contact</span>
            </div>
        </div>
        <div className={`${classes.navbarCtn} ${classes.rightNavbar}`}>
        <div className={classes.navLinksRight}>
            <span>instagram</span>
                <span>&copy; 2024 kamára</span>
            </div>
        </div>
        </>
     );
}
 
export default Navbar;