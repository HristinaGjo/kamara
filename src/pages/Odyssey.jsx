import React, { useEffect, useRef } from "react";
import classes from "../styles/odyssey.module.css";
import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";
import img1 from "../assets/odyssey-1.webp"
import img2 from "../assets/odyssey04.webp"
import img3 from "../assets/odyssey-3.webp"
import img4 from "../assets/odyssey-01.webp"
import img6 from "../assets/odyssey-02.webp"
import img5 from "../assets/odyssey-2.webp"
import imgNextProject from "../assets/echoes-7.jpg";


const Odyssey = () => {

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

        <div className={classes.container} ref={containerRef}>
            <section className={`${classes.container} ${classes.section01}`}
             ref={section01Ref}
             id="volume01"
             > 
             <div className={classes.headline}>
                <h1>Odyssey</h1>
                <h2>Encounters with the Unknown</h2>
                <span className={classes.textScroll}>[ scroll &rarr; ]</span>
                </div>
                <div className={classes.textSpan}>
                <span>Odyssey is more than a collection of sci-fi images; it is a narrative of exploration and discovery, 
                        a visual symphony that celebrates the boundless curiosity and indomitable spirit of humanity.
                    </span>
                    <span>In the heart of the journey, Odyssey delves into the mystery of the extraterrestrial.
                    Shadows hint at the presence of beings from beyond our understanding, their forms elusive yet captivating. 
                    </span>
                </div>
                <div className={classes.scrollerMobile}>
                        <span>[ scroll &rarr; ]</span>
                </div> 
            </section>
            <section className={`${classes.container} ${classes.section02}`}>
                <div className={classes.img}>
                <img className={`${classes.img} ${classes.img01}`} src={img1} alt="image 1"/>
                    <img className={`${classes.img} ${classes.img02}`} src={img2} alt="image 2"/>
                    <img className={`${classes.img} ${classes.img03}`} src={img3} alt="image 3"/>
          
                </div>
            </section>
            { /* <section className={`${classes.container} ${classes.section03}`}>
           <div className={classes.img}>
                    <img className={`${classes.img} ${classes.img04}`} src={img4} alt="image 4"/>
                    <img className={`${classes.img} ${classes.img05}`} src={img5} alt="image 5"/>
                    <img className={`${classes.img} ${classes.img06}`} src={img6} alt="image 6"/>
                </div>
            </section> */}
                <section className={`${classes.container} ${classes.section03}`}>
                <div className={classes.headline}>
                <h1>Odyssey</h1>
                <h2>Encounters with the Unknown</h2>
                <span className={classes.textScroll}>[ scroll &rarr; ]</span>
                </div>
                <div className={classes.textSpan}>
                <span> Through this series, we are invited to dream, to imagine, and to embark on our own odysseys, wherever they may lead. 
                It is a testament to the fact that in the vast theater of the universe, the journey is just as important as the destination.
                    </span>
                </div>
                <div className={classes.scrollerMobile}>
                        <span>[ scroll &rarr; ]</span>
                </div> 
            </section>

            <section className={`${classes.container} ${classes.section04}`}>
            <div className={classes.img}>
            <img className={`${classes.img} ${classes.img04}`} src={img4} alt="image 4"/>
                <img className={`${classes.img} ${classes.img05}`} src={img5} alt="image 5"/> 
                <img className={`${classes.img} ${classes.img06}`} src={img6} alt="image 6"/> 
                </div>
            </section>
            <section className={`${classes.container} ${classes.section05}`}>
          <Link to="/echoes#volume01" className={classes.nextProject}>
              <div className={classes.textNextProject}>
                <div className={classes.headline}>
                <h1>Echoes</h1>
                <h2>A JOURNEY INTO FUTURE REALMS</h2>
                </div>
                <span className={classes.textNext}> [ Next Project &rarr; ]</span>
              </div>
              <img className={`${classes.img} ${classes.imgNextProject}`} src={imgNextProject} alt="image 4"/>
          </Link>
        </section> 

        </div>

        </>
     );
}
 
export default Odyssey;
