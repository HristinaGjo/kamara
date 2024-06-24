import React from "react";
import classes from "../styles/echoes.module.css"
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { Link } from "react-router-dom";
import img1 from "../assets/echoes-1.jpg"
import img2 from "../assets/echoes-1.jpg"
import img3 from "../assets/echoes-1.jpg"
import img4 from "../assets/echoes-1.jpg"
import DraggableScroll from "../components/DraggableScroll";



const Echoes = () => {
    return ( 
        <>

        <div className={classes.pageCtn}>

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

        <div className={classes.scrollableContent}>
            <div className={classes.text}>
            <h1>Hello</h1>
            <span>djsnjsnksdmnkmkdmskdmskdmskdmskdmdmsmdmmssmdksmd
            sdjsidjsdskdmksdmksldmsdmsldmksdmksldmskmdkmskdms
            sdjsndskjnmdskjmksmksmdksmdkm
            </span>
        </div>

        <div className={classes.scrollableItem}>
            <img src={img1}/>
            </div>
            <div className={classes.scrollableItem}>
            <img src={img2}/>
            </div>
            <div className={classes.scrollableItem}>
            <img src={img3}/>
            </div>
            <div className={classes.scrollableItem}>
            <img src={img4}/>
            </div>
        </div>

      { /* <div className={classes.timeline}>
            <div className={classes.scroller}>
      
            </div>
        </div> */}

        </div>

        </>
     );
}
 
export default Echoes;