import React, { useEffect, useRef } from "react";
import classes from "../styles/echoes.module.css";
import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";
import img1 from "../assets/dystopia-1.webp"
import img2 from "../assets/dystopia-3.webp"
import img3 from "../assets/dystopia-2.webp"
import img4 from "../assets/wl4.webp"
import img6 from "../assets/wl5.webp"
import img5 from "../assets/wl6.webp"
import imgNextProject from "../assets/backHomeCut.webp"


const Dystopia = () => {

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
                        <h1>Dystopia</h1>
                        <h2>Echoes of a Fallen World</h2>
                        <span className={classes.textScroll}>[ scroll &rarr; ]</span>
                    </div>
                <div className={classes.textSpan}>
                <span>In a world where the future has unraveled into chaos, Dystopia tells the story of survival and 
                    rebellion against the backdrop of a fallen society. This series explores the lives of two protagonists who navigate 
                    the neon-lit ruins of their civilization.
                    </span>
                    <span>The two characters, rebels in their own right, use neon sticks as both weapons and beacons, 
                        symbols of defiance against the encroaching darkness. The neon fire they ignite serves as a reminder of 
                        the power they hold, a flickering hope in an otherwise bleak reality. 
                        Their journey is one of resilience and determination, as they fight to carve out a space for humanity amidst the ruins.
                    </span>
                </div>
                <div className={classes.scrollerMobile}>
                        <span>[ scroll &rarr; ]</span>
                </div> 
            </section>

            <section className={`${classes.container} ${classes.section02}`}>
            <div className={classes.img}>
            <img className={`${classes.img} ${classes.img01}`} src={img1} alt="image 4"/>
                <img className={`${classes.img} ${classes.img02}`} src={img2} alt="image 5"/>
                <img className={`${classes.img} ${classes.img03}`} src={img3} alt="image 6"/>
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
                        <h1>Dystopia</h1>
                        <h2>Echoes of a Fallen World</h2>
                        <span className={classes.textScroll}>[ scroll &rarr; ]</span>
                    </div>
                <div className={classes.textSpan}>
                <span> Through their eyes, Dystopia reveals a world where the lines between past and future blur,
                     where every shadow holds a story, and every burst of neon light signals a moment of defiance. 
                     This series invites viewers to witness the stark contrasts of this new reality—where technology's 
                     remnants clash with the raw force of nature, and where the human spirit endures against all odds.
                    </span>
                    <span>
                    Dystopia is more than a collection of images; it is a narrative of survival, resistance 
                    and the enduring human drive to find light in the darkest of times.
                    </span>
                </div>
                <div className={classes.scrollerMobile}>
                        <span>[ scroll &rarr; ]</span>
                </div> 
            </section>

            <section className={`${classes.container} ${classes.section04}`}>
            <div className={classes.img}>
            <img className={`${classes.img} ${classes.img01}`} src={img4} alt="image 4"/>
                <img className={`${classes.img} ${classes.img02}`} src={img5} alt="image 5"/>
                <img className={`${classes.img} ${classes.img03}`} src={img6} alt="image 6"/> 
                </div>
            </section>
            <section className={`${classes.container} ${classes.section05}`}>
          <Link to="/" className={classes.nextProject}>
              <div className={classes.textNextProject}>
                <div className={classes.headline}>
                <h1>Return </h1>
                <h2>to the beginning...</h2>
                </div>
                <span className={classes.textNext}> [ Back to Home Page &rarr; ]</span>
              </div>
              <img className={`${classes.img} ${classes.imgNextProject}`} src={imgNextProject} alt="image 4"/>
          </Link>
        </section> 

        </div>

        </>
     );
}
 
export default Dystopia;
