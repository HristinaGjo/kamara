import React, { useEffect, useRef } from "react";
import classes from "../styles/echoes.module.css"
import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";
import img1 from "../assets/cracker-1.webp"
import img2 from "../assets/cracker-2.webp"
import img3 from "../assets/cracker-3.webp"
import img5 from "../assets/cracker-5.webp"
import imgNextProject from "../assets/nextWl.webp"

const Cracker = () => {

    const location = useLocation();
    const containerRef = useRef(null);
    const section01Ref = useRef(null);
  
    useEffect(() => {
      const hash = location.hash;

      setTimeout(() => {
      if (hash === "#volume01" && section01Ref.current) {
        section01Ref.current.scrollIntoView({ behavior: "smooth" });
      }}, 10);
    }, [location]); 


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

        <div className={classes.container} ref={containerRef}>
            <section className={`${classes.container} ${classes.section01}`}
             ref={section01Ref}
             id="volume01"
             >
                <h1>Cracker-<br/>Encounters with the Unknown</h1>
                <div className={classes.textSpan}>
                <span>Odyssey is more than a collection of sci-fi images; it is a narrative of exploration and discovery, 
                        a visual symphony that celebrates the boundless curiosity and indomitable spirit of humanity.
                    </span>
                    <span>In the heart of the journey, Odyssey delves into the mystery of the extraterrestrial.
                    Shadows hint at the presence of beings from beyond our understanding, their forms elusive yet captivating. 
                    </span>
                </div>
                <div className={classes.scroller}>
                <span>[<span>scroll &rarr;</span>]</span>
            </div>
            </section>
            <section className={`${classes.container} ${classes.section02}`}>
                <div className={classes.img}>
               {/* <img className={`${classes.img} ${classes.img01}`} src={img1} alt="image 1"/>*/}
                    <img className={`${classes.img} ${classes.img02}`} src={img2} alt="image 2"/>
                   {/* <img className={`${classes.img} ${classes.img03}`} src={img3} alt="image 3"/> */}
          
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
                <h1>Cracker-<br/>Encounters with the Unknown</h1>
                <div className={classes.textSpan}>
                <span> Through this series, we are invited to dream, to imagine, and to embark on our own odysseys, wherever they may lead. 
                It is a testament to the fact that in the vast theater of the universe, the journey is just as important as the destination.
                    </span>
                </div>
            </section>

            <section className={`${classes.container} ${classes.section04}`}>
            <div className={classes.img}>
            <img className={`${classes.img} ${classes.img01}`} src={img3} alt="image 4"/>
                <img className={`${classes.img} ${classes.img02}`} src={img5} alt="image 5"/>
                <img className={`${classes.img} ${classes.img03}`} src={img1} alt="image 6"/>
                </div>
            </section>
            <section className={`${classes.container} ${classes.section05}`}>
          <Link to="/dystopia#volume01" className={classes.nextProject}>
              <div className={classes.textNextProject}>
                <h1>Wasteland-<br/>A Journey into Future Realms</h1>
                <span> [Next Project &rarr;]</span>
              </div>
              <img className={`${classes.img} ${classes.imgNextProject}`} src={imgNextProject} alt="image 4"/>
          </Link>
        </section> 

        </div>

        </>
     );
}
 
export default Cracker;
