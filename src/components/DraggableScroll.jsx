// DraggableScroll.jsx
import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { Draggable } from 'gsap/Draggable';
import classes from "../styles/echoes.module.css"

gsap.registerPlugin(Draggable);

const DraggableScroll = ({ children }) => {
  const containerRef = useRef(null);

  useEffect(() => {
    Draggable.create(containerRef.current, {
      type: 'x',
      inertia: true,
      edgeResistance: 0.5,
      bounds: containerRef.current,
      throwProps: true,
      snap: {
        x: (x) => Math.round(x / 100) * 100, // Adjust snapping to item width if necessary
      },
    });
  }, []);

  return (
    <div className={classes.draggableContainer} ref={containerRef}>
      <div className={classes.draggableContent}>
        {children}
      </div>
    </div>
  );
};

export default DraggableScroll;
