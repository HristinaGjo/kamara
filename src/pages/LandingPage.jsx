import React, { useState } from "react";
import classes from "../styles/landingPage.module.css"
import Footer from "../components/Footer";
import { useNavigate } from "react-router-dom";


const LandingPage = () => {

  const [activeIndex, setActiveIndex] = useState(null);
  const navigate = useNavigate();


  const handleMouseOver = (index) => {
    setActiveIndex(index)
  };

  const handleClick = (title) => {
    setActiveIndex (null);
    const route = title.toLowerCase()
    navigate(`${route}`)
  }


  const titles = [
    {title:"Echoes", className:classes.titleLink},
    {title:"Odyssey", className:classes.titleLink},
    {title:"Cracker", className:classes.titleLink},
    {title:"Dystopia", className:classes.titleLink},
  ];
  

  return ( 
    <>
    <div className={classes.pageCtn}>
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
    <div className={classes.backgroundImage}></div>
  
    </div>
 { /*  <div className={classes.footer}>
    <div className={classes.leftCtnFooter}>
      <span>photographer</span>
      </div>
      <div className={classes.rightCtnFooter}>
      <span>kamára &copy;2024</span>
      </div>
    </div>  */}
    </div>

    </>
   );
}
 
export default LandingPage;