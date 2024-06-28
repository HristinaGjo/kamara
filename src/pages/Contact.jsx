import React from "react";
import classes from "../styles/contact.module.css"
import { Link } from "react-router-dom";


const About = () => {
    return ( 
        <>
        <div className={classes.pageCtn}>
        <div className={classes.navbarCtn}>
            <div className={classes.logo}>
                <Link to="/">
            <span>[ kamára ]</span>
            </Link>
            </div>
            <div className={classes.navbarRight}>
                <Link to="/about">
                <span>[ about ]</span>
                </Link>
                <Link to="/contact">
                <span>[ contact ]</span>
                </Link>
            </div>
        </div>

        <div className={classes.container}>

            <div className={classes.headline}>
                <h1>Connect<br /></h1>
                <h2>hello@ <br/>kamára.com</h2>
            </div>
            <div className={classes.textSpan}>
                        <span>social</span>
                        <span>[instagram]</span>
                        <span>[behance]</span>
                    </div>
                    
        </div>
        <div className={classes.backgroundImage}> </div>
        </div>
        </>
     );
}
 
export default About;