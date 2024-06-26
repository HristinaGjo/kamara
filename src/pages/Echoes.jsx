import React, { useEffect, useRef } from "react";
import classes from "../styles/echoes.module.css";
import { Link } from "react-router-dom";
import img1 from "../assets/echoes-13.webp";
import img2 from "../assets/echoes-10.webp";
import img3 from "../assets/echoes-12.webp";
import imgNextProject from "../assets/imgNextProjectCut.webp"
import img7 from "../assets/echoes-7.jpg";
import img9 from "../assets/echoes-8.jpg";
import img8 from "../assets/echoes-14.webp";
import { useLocation } from "react-router-dom";

const Echoes = () => {

    const location = useLocation();
    const containerRef = useRef(null);
    const section01Ref = useRef(null);
  
    useEffect(() => {
      const hash = location.hash;

      setTimeout(() => {
      if (hash === "#volume01" && section01Ref.current) {
        section01Ref.current.scrollIntoView({ behavior: "smooth" });
      }}, 20);
    }, [location]); 

    return (
        <>

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

            <div className={classes.container}ref={containerRef}>
                <section className={`${classes.container} ${classes.section01}`}
                ref={section01Ref}
                id="volume01">
                    <div className={classes.headline}>
                    <h1>Echoes<br /></h1>
                    <h2>A Journey into Future Realms</h2>
                    <span className={classes.textScroll}>[ scroll &rarr; ]</span>
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
                    <div className={classes.scrollerMobile}>
                        <span>[ scroll &rarr; ]</span>
                </div> 
                </section>

                <section className={`${classes.container} ${classes.section02}`}>
                    <div className={classes.img}>
                        <img className={`${classes.img} ${classes.img07}`} src={img7} alt="image 7" />
                        <img className={`${classes.img} ${classes.img08}`} src={img8} alt="image 8" />
                        <img className={`${classes.img} ${classes.img09}`} src={img9} alt="image 9" />
                    </div>
                </section>

                <section className={`${classes.container} ${classes.section03}`}>
                <div className={classes.headline}>
                    <h1>Echoes<br /></h1>
                    <h2>A Journey into Future Realms</h2>
                    <span className={classes.textScroll}>[ scroll &rarr; ]</span>
                    </div>
                    <div className={classes.textSpan}>
                        <span> Echoes is more than a collection of images; it is a narrative of our collective journey into the future.
                            Echoes invites introspection on the human condition amidst a digital age. 
                            It explores themes of connectivity and isolation.
                        </span>
                        <span>Join us in this exploration of Echoes—a symphony of light, pixels, and aspirations—a visual testament 
                            to the boundless creativity and limitless potential of the human spirit in the age of tomorrow.
                        </span>
                    </div>
                    <div className={classes.scrollerMobile}>
                        <span>[ scroll &rarr; ]</span>
                </div> 
                </section>

                <section className={`${classes.container} ${classes.section04}`}>
                    <div className={classes.img}>
                        <img className={`${classes.img} ${classes.img01}`} src={img1} alt="image 1" />
                       <img className={`${classes.img} ${classes.img02}`} src={img2} alt="image 2" /> 
                      <img className={`${classes.img} ${classes.img03}`} src={img3} alt="image 3" />  
                    </div>
                </section>

                <section className={`${classes.container} ${classes.section05}`}>
                    <Link to="/cracker#volume01" className={classes.nextProject}>
                        <div className={classes.textNextProject}>
                            <div className={classes.headline}>  
                            <h1>Cracker</h1>
                            <h2>THE SHADOW OF NEON REALITIES</h2>
                            </div>
                            <span className={classes.textNext}> [ Next Project &rarr; ]</span>
                        </div>
                        <img className={`${classes.img} ${classes.imgNextProject}`} src={imgNextProject} alt="image 4" />
                    </Link>
                </section>
            </div>
        </>
    );
};

export default Echoes;
