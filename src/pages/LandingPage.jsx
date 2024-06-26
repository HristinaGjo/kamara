import React, { useState } from "react";
import classes from "../styles/landingPage.module.css"
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import { useNavigate } from "react-router-dom";
import landingPageImg from "../assets/landingPageImg.webp"


const LandingPage = () => {

  const [activeIndex, setActiveIndex] = useState(null);
  const navigate = useNavigate();


  const handleMouseOver = (index) => {
    setActiveIndex(index)
  };

  const handleClick = (title) => {
    setActiveIndex (null);
    const route = title.toLowerCase()
    navigate(`/${route}`)
  }


  const titles = [
    {title:"Echoes",  headline:"[01] A JOURNEY INTO FUTURE REALMS", className:classes.titleLink},
    {title:"Odyssey", headline:"[02] ENCOUNTERS WITH THE UNKNOWN",className:classes.titleLink},
    {title:"Cracker", headline:"[03] THE SHADOW OF NEON REALITIES", className:classes.titleLink},
    {title:"Dystopia", headline:"[04] ECHOES OF A FALLEN WORLD", className:classes.titleLink},
  ];
  

  return ( 
    <>
    <div className={classes.pageCtn}>
      <Navbar/>
    <div className={classes.titleItems} data-active-index={activeIndex}>
      <div className={classes.titleItem}>
      <div className={classes.projects}><p className={classes.headline} >PROJECTS [04]</p></div>
       {titles.map((item,index) =>(
        <div
        key={index}
        className={item.className}
        onMouseOver={() => handleMouseOver(index)}
        onClick={() => handleClick(item.title)}
        > 
        <div className={classes.titleProjects}>
        <p className={classes.spanTitle}>{item.title}</p>
          <p className={classes.spanHeadline}>{item.headline}</p>
        </div>
        </div>
      ))}
    </div>
    <div className={classes.backgroundPattern}></div>
    <div className={classes.backgroundImage}>
     {/* <img src={landingPageImg} /> */}
    </div>
    </div>
 <Footer/>

    </div>

    </>
   );
}
 
export default LandingPage;