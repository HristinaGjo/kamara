import React, { useEffect, useRef } from "react";
import classes from "../styles/cracker.module.css"
import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";
import img1 from "../assets/cracker-1.webp"
import img2 from "../assets/cracker3.webp"
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
      }}, 20);
    }, [location]); 


    return ( 
        <>

        <div className={classes.navbarCtn}>
            <div className={classes.logo}>
                <Link to="/#home">
            <span>[kamára]</span>
            </Link>
            </div>
            <div className={classes.navbarRight}>
                <Link to="/about">
                <span>[about]</span>
                </Link>
                <Link to="/contact">
                <span>[contact]</span>
                </Link>
            </div>
        </div>

        <div className={classes.container} ref={containerRef}>
            <section className={`${classes.container} ${classes.section01}`}
             ref={section01Ref}
             id="volume01"
             >  
             <div className={classes.headline}>
                <h1>Cracker</h1>
                <h2>The Shadow of Neon Realities</h2>
                <span className={classes.textScroll}>[ scroll &rarr; ]</span>
                </div>
                <div className={classes.textSpan}>
                <span>In a dystopian future the world of Cracker comes to life through the lens 
                    of the artist who captures the gritty essence of cyberpunk. 
                    </span>
                    <span>Through Cracker, the photographer invites viewers into a realm where the lines between man and machine blur
                        and where the quest for truth is a perilous journey through darkness and light. 
                        Each image is a chapter in Cracker's story, a narrative of resilience, rebellion 
                        and the unyielding human spirit in the face of a cold, mechanized future.
                    </span>
                </div>
                <div className={classes.scrollerMobile}>
                        <span>[ scroll &rarr; ]</span>
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
                <div className={classes.headline}>
                <h1>Cracker</h1>
                <h2>The Shadow of Neon Realities</h2>
                <span className={classes.textScroll}>[ scroll &rarr; ]</span>
                </div>
                <div className={classes.textSpan}>
                <span> This series follows the journey of a lone protagonist, known only as Cracker, 
                        a rogue hacker navigating a world dominated by technology and corruption.
                </span>
                <span>Cracker is not just a portrayal of a character; 
                    it is an exploration of the cyberpunk aesthetic and the themes of 
                    rebellion, identity, and survival in a world where humanity and machinery are inextricably intertwined. 
                    Through this series, viewers are invited to delve into a realm where the boundaries of reality and digital illusion blur, 
                    and the fight for freedom and truth is fought in the shadows.
                </span>
                </div>
                <div className={classes.scrollerMobile}>
                        <span>[ scroll &rarr; ]</span>
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
                <div className={classes.headline}>
                <h1>Dystopia</h1>
                <h2>Echoes of a Fallen World</h2>
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
 
export default Cracker;
