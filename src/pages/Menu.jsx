import React, { useState } from "react";
import classes from "../styles/landingPage.module.css"
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import { useNavigate } from "react-router-dom";



const LandingPage = () => {

  const [activeIndex, setActiveIndex] = useState(null);
  const navigate = useNavigate();


  const handleMouseOver = (index) => {
    setActiveIndex(index)
  };

  const handleClick = (title) => {
    setActiveIndex (null);
    let route

    if (title.includes (" ")) {
      route = title.split(" ")[1].toLowerCase()
    } else{
      route = title.toLowerCase()
    }
    navigate(`${route}`)
  }


  const titles = [
    {title:"01 Work", className:classes.titleLink},
    {title:"02 About", className:classes.titleLink},
    {title:"Contact", className:classes.titleLink},
  ];
  

  return ( 
    <>
    <div className={classes.pageCtn}>
    {/*  <Navbar/> */}
    <div className={classes.titleItems} data-active-index={activeIndex}>
      <div className={classes.titleItem}>
       {titles.map((item,index) =>(
        <div
        key={index}
        className={item.className}
        onMouseOver={() => handleMouseOver(index)}
        onClick={() => handleClick(item.title)}
        > 
        <h1>{item.title}</h1>
        </div>
      ))}
    </div>
    <div className={classes.backgroundPattern}></div>
    <div className={classes.backgroundImage}>
      <img />
    </div>
    </div>
{ /* <Footer/> */}

    </div>

    </>
   );
}
 
export default LandingPage;