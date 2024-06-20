import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import classes from '../styles/slide.module.css';

const Slide = ({ content, sliderContent }) => {
  const slideRef = useRef(null);

  useEffect(() => {
    if (slideRef.current) {
      const slide = slideRef.current;
      const img1 = slide.querySelector(`.${classes.slideImg1} img`);
      const img2 = slide.querySelector(`.${classes.slideImg2} img`);

      gsap.to(slide, {
        clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
        duration: 1.5,
        ease: "power4.inOut",
        onStart: () => {
          gsap.to([img1, img2], {
            top: "50%",
            duration: 1.5,
            ease: "power4.inOut"
          });
        }
      });

      gsap.fromTo(slide.querySelector("h1"), {
        scale: 1.5
      }, {
        scale: 1,
        duration: 1.5,
        ease: "power4.inOut"
      });
    }
  }, [content]);

  return (
    <div ref={slideRef} className={`${classes.slide} ${content.title.toLowerCase()}`}>
      <div className={`${classes.slideImg} ${classes.slideImg1}`}>
        <img src={content.images[0]} alt="" />
      </div>
      <div className={classes.slideContent}>
        <h1>{content.title}</h1>
      </div>
      <div className={`${classes.slideImg} ${classes.slideImg2}`}>
        <img src={content.images[1]} alt="" />
      </div>
      <div className={classes.pagination}>
        <span className={classes.currentSlide}>{sliderContent.indexOf(content) + 1}</span>
        <div className={classes.line}><hr /></div>
        <span className={classes.totalSlides}>{sliderContent.length}</span>
      </div>
      <div className={classes.description}>
        <span>[photographer]</span>
      </div>
    </div>
  );
};

export default Slide;
