import React from "react";
import classes from "../styles/landingPage.module.css"


const LandingPage = () => {
  return ( 
    <>
    <div className={classes.titleItems}>
      <div className={classes.titleItem}>
       <div className={classes.titleLink}><h1>[Echooes]</h1></div>
        <div className={classes.titleLink}><h1>[Odyssey]</h1></div>
        <div className={classes.titleLink}><h1>[Cracker]</h1></div>
        <div className={classes.titleLink}><h1>[Dystopia]</h1></div>
    </div>
    </div>

    </>
   );
}
 
export default LandingPage;