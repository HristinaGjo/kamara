import React from "react";
import classes from "../styles/echoes.module.css"
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { Link } from "react-router-dom";
import img1 from "../assets/echoes-1.jpg"
import img2 from "../assets/echoes-2.jpg"
import img3 from "../assets/cracker-1.jpg"
import img4 from "../assets/cracker-2.jpg"
import img5 from "../assets/odyssey-1.jpg"
import img6 from "../assets/odyssey-2.jpg"
import img7 from "../assets/wasteland-1.jpg"
import img8 from "../assets/wasteland-2.jpg"
import img9 from "../assets/odyssey-2.jpg"
import DraggableScroll from "../components/DraggableScroll";



const Echoes = () => {
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

        <div className={classes.container}>
            <section className={`${classes.container} ${classes.section01}`}>
                <h1>Echoes Volume 1.0</h1>
                <span>sdhshjshdsdnsjndsjdnksdndnds
                    sndjsndjsndjnsdnskndksndsndd
                    dnjksndjsndjnsdnjsndjsnjsndjdnnd
                    sdkssdksmdskdmmsmdsmdsm
                </span>
            </section>
            <section className={`${classes.container} ${classes.section02}`}>
                <div className={classes.img}>
                <img className={`${classes.img} ${classes.img01}`} src={img1} alt="image 1"/>
                <img className={`${classes.img} ${classes.img02}`} src={img2} alt="image 2"/>
                <img className={`${classes.img} ${classes.img03}`} src={img3} alt="image 3"/>
                </div>
            </section>
            <section className={`${classes.container} ${classes.section03}`}>
            <div className={classes.img}>
                    <img className={`${classes.img} ${classes.img04}`} src={img4} alt="image 4"/>
                    <img className={`${classes.img} ${classes.img05}`} src={img5} alt="image 5"/>
                    <img className={`${classes.img} ${classes.img06}`} src={img6} alt="image 6"/>
                </div>
            </section>
            <section className={`${classes.container} ${classes.section04}`}>
            <h1>Echoes sjsjnddnsjn</h1>
                <span>sdhshjshdsdnsjndsjdnksdndnds
                    sndjsndjsndjnsdnskndksndsndd
                    dnjksndjsndjnsdnjsndjsnjsndjdnnd
                    sdkssdksmdskdmmsmdsmdsm
                </span>
            </section>

            <section className={`${classes.container} ${classes.section05}`}>
            <div className={classes.img}>
                    <img className={`${classes.img} ${classes.img07}`} src={img7} alt="image 7"/>
                    <img className={`${classes.img} ${classes.img08}`} src={img8} alt="image 8"/>
                    <img className={`${classes.img} ${classes.img09}`} src={img9} alt="image 9"/>
                </div>
            </section>
        </div>

        <div className={classes.timeline}>
            <div className={classes.scroller}>
                <span>[<span>Drag</span>]</span>
            </div>
        </div>



        </>
     );
}
 
export default Echoes;