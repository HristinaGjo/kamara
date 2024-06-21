import React, { useState } from "react";
import classes from "../styles/landingPage.module.css"
import Footer from "../components/Footer";


const LandingPage = () => {

  const [activeIndex, setActiveIndex] = useState(null);

  const handleMouseOver = (index) => {
    setActiveIndex(index)
  };

  const handleClick = (index) => {
    setActiveIndex(index)
  }

  const titles = [
    {title:"Echoes", className:classes.titleLink},
    {title:"Odyssey", className:classes.titleLink},
    {title:"Cracker", className:classes.titleLink},
    {title:"Dystopia", className:classes.titleLink},
  ];
  

  return ( 
    <>
    <div className={classes.titleItems} data-active-index={activeIndex}>
      <div className={classes.titleItem}>
       {titles.map((item,index) =>(
        <div
        key={index}
        className={item.className}
        onMouseOver={() => handleMouseOver(index)}
        onClick={() => handleClick(index)}
        > 
        <h1>{item.title}</h1>
        </div>
      ))}
    </div>
    <div className={classes.backgroundPattern}></div>
    <div className={classes.backgroundImage}></div>
    </div>
    </>
   );
}
 
export default LandingPage;