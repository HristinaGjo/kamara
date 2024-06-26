import React from "react";
import classes from "../styles/about.module.css"
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
                <h1>Who is <br /></h1>
                <h2>behind kamára</h2>
            </div>
            <div className={classes.textSpan}>
                        <span>In the depths of the digital age, where humanity's aspirations meet the cutting edge of technology, 
                            lies the Echoes series—a photographic odyssey through realms yet uncharted, where pixels dance with 
                            imagination and reality blurs with dreams.
                        </span>
                        <span>As the series unfolds, each photograph echoes the aspirations and dilemmas of a civilization on the brink of tomorrow.
                            It challenges perceptions of what lies ahead, prompting contemplation on the ethical implications of our technological 
                            pursuits and the essence of humanity in an increasingly digital landscape.
                        </span>
                    </div>
                    
        </div>
        <div className={classes.backgroundImage}> </div>
        </div>
        </>
     );
}
 
export default About;