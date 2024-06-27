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
                        <span>Isabella Thornton is a visionary photographer based in New York and known for her captivating and evocative imagery.
                             With a career spanning over a decade, Isabella has carved a niche for herself in the world of photography, 
                             blending elements of surrealism, storytelling, and raw human emotion in every frame. 
                        </span>
                        <span>Isabella’s style is a unique fusion of cyberpunk aesthetics and dystopian themes, often portraying 
                            characters in futuristic, neon-lit environments. Her signature technique involves the use of stark contrasts, 
                            vivid colors, and intricate compositions to tell compelling stories. Each photograph is meticulously crafted, 
                            often requiring elaborate sets and post-production techniques to achieve her distinctive look.
                        </span>
                    </div>
                    
        </div>
        <div className={classes.backgroundImage}> </div>
        </div>
        </>
     );
}
 
export default About;