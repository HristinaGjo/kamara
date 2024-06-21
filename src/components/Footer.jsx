import React from "react";
import classes from "../styles/footer.module.css"

const Footer = () => {
    return ( 
    <>
       <div className={classes.overlay}>
                <div className={classes.leftCtn}>
                    <span>photographer</span>
                </div>
                <div className={classes.rightCtn}>
                    <span>&copy; 2024 kamára</span>
                </div>

            </div>
    </> 
    );
}
 
export default Footer;