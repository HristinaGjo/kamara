import React, { useState, useEffect, useRef } from 'react';
import gsap from 'gsap';
import classes from '../styles/landingPage.module.css';

const sliderContent = [
  {
    title: "Echoes",
    images: [
      "./assets/echoes-1.jpg",
      "./assets/echoes-2.jpg"
    ]
  },
  {
    title: "Odyssey",
    images: [
      "./assets/odyssey-1.jpg",
      "./assets/odyssey-2.jpg"
    ]
  },
  {
    title: "Cracker",
    images: [
      "./assets/cracker-1.jpg",
      "./assets/cracker-2.jpg"
    ]
  },
  {
    title: "Dystopia",
    images: [
      "./assets/wasteland-1.jpg",
      "./assets/wasteland-2.jpg"
    ]
  }
];

const LandingPage = () => {
  const [loading, setLoading] = useState(true);
  const [activeSlide, setActiveSlide] = useState(0);
  const [slides, setSlides] = useState([sliderContent[0]]);
  const mainContentRef = useRef(null);
  const preloaderRef = useRef(null);
  const slideRefs = useRef([]);

  useEffect(() => {
    let percentage = 0;
    const loadingText = document.getElementById("loading-text");

    const loadingInterval = setInterval(() => {
      percentage += 1;
      loadingText.textContent = `${percentage}%`;

      if (percentage >= 100) {
        clearInterval(loadingInterval);
        showMainContent();
      }
    }, 10);

    function showMainContent() {
      const preloader = preloaderRef.current;
      const mainContent = mainContentRef.current;

      gsap.to(preloader, {
        opacity: 0,
        duration: 1,
        onComplete: () => {
          preloader.style.display = "none";
          gsap.to(mainContent, {
            opacity: 1,
            duration: 0.5,
            onStart: () => {
              mainContent.classList.remove(classes.hidden);
              setLoading(false);
              initializeSlider();
            }
          });
        }
      });
    }
  }, []);

  const initializeSlider = () => {
    const initialSlide = slideRefs.current[activeSlide];
    gsap.fromTo(initialSlide, {
      clipPath: "polygon(0% 100%, 100% 100%, 100% 100%, 0% 100%)",
    }, {
      clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
      duration: 1.5,
      ease: "power4.inOut",
      onStart: () => {
        const img1 = initialSlide.querySelector(`.${classes.slideImg1} img`);
        const img2 = initialSlide.querySelector(`.${classes.slideImg2} img`);
        gsap.to([img1, img2], {
          top: "50%",
          duration: 1.5,
          ease: "power4.inOut"
        });
      }
    });
    gsap.fromTo(initialSlide.querySelector("h1"), {
      scale: 1.5
    }, {
      scale: 1,
      duration: 1.5,
      ease: "power4.inOut"
    });
  };

  const createNewSlide = (slideData, index) => {
    const slideTheme = index % 2 ? classes.light : classes.dark;
    return (
      <div
        key={index}
        ref={el => slideRefs.current[index] = el}
        className={`${classes.slide} ${slideTheme}`}
        style={{ clipPath: 'polygon(0% 100%, 100% 100%, 100% 100%, 0% 100%)' }}
      >
        <div className={`${classes.slideImg} ${classes.slideImg1}`}>
          <img src={slideData.images[0]} style={{ top: '100%' }} alt="" />
        </div>
        <div className={classes.slideContent}>
          <h1>{slideData.title}</h1>
        </div>
        <div className={`${classes.slideImg} ${classes.slideImg2}`}>
          <img src={slideData.images[1]} style={{ top: '100%' }} alt="" />
        </div>
        <div className={classes.pagination}>
          <span className={classes.currentSlide}>{index + 1}</span>
          <div className={classes.line}><hr /></div>
          <span className={classes.totalSlides}>{sliderContent.length}</span>
        </div>
        <div className={classes.description}>
          <span>[photographer]</span>
        </div>
      </div>
    );
  };

  const handleSlideChange = () => {
    const mainContent = mainContentRef.current;
    const currentSlide = mainContent.querySelector(`.${classes.slide}:not(.${classes.exiting})`);
    const newIndex = (activeSlide + 1) % sliderContent.length;

    if (currentSlide) {
      const existingImgs = currentSlide.querySelectorAll("img");
      gsap.to(existingImgs, {
        top: "0%",
        duration: 1.5,
        ease: "power4.inOut"
      });
      currentSlide.classList.add(classes.exiting);
    }

    setActiveSlide(newIndex);
    setSlides([...slides, sliderContent[newIndex]]);
    const newSlide = slideRefs.current[newIndex];

    gsap.fromTo(newSlide, {
      clipPath: "polygon(0% 100%, 100% 100%, 100% 100%, 0% 100%)",
    }, {
      clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
      duration: 1.5,
      ease: "power4.inOut",
      onStart: () => {
        const img1 = newSlide.querySelector(`.${classes.slideImg1} img`);
        const img2 = newSlide.querySelector(`.${classes.slideImg2} img`);
        gsap.to([img1, img2], {
          top: "50%",
          duration: 1.5,
          ease: "power4.inOut"
        });
      }
    });
    gsap.fromTo(newSlide.querySelector("h1"), {
      scale: 1.5
    }, {
      scale: 1,
      duration: 1.5,
      ease: "power4.inOut"
    });
  };

  return (
    <div>
      <div ref={preloaderRef} id="preloader" className={classes.preloader}>
        <div className={classes.logo}>
          <span>kamára</span>
        </div>
        <div className={classes.loadingPercentage}>
          <span id="loading-text">0%</span>
        </div>
      </div>

      <div ref={mainContentRef} id="main-content" className={classes.hidden}>
        <div className={classes.navbarCtn}>
          <div className={classes.logo}>
            <span>kamára</span>
          </div>
          <div className={classes.rightCtn}>
            <span>about</span>
            <span>contact</span>
          </div>
        </div>

        {!loading && (
          <div onClick={handleSlideChange}>
            {slides.map((slide, index) => createNewSlide(slide, index))}
          </div>
        )}
      </div>
    </div>
  );
};

export default LandingPage;
