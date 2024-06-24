import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { Draggable } from 'gsap/Draggable';

gsap.registerPlugin(Draggable);

const DraggableScroll = ({ containerRef }) => {
  const timelineRef = useRef(null);
  const scrollerRef = useRef(null);

  useEffect(() => {
    const timeline = timelineRef.current;
    const scroller = scrollerRef.current;
    const container = containerRef.current;

    if (!timeline || !scroller || !container) return;

    const timelineWidth = timeline.offsetWidth;
    const scrollerWidth = scroller.offsetWidth;
    const gap = parseInt(window.getComputedStyle(document.body).fontSize);

    const maxDragX = timelineWidth - scrollerWidth - 2 * gap;

    for (let i = 0; i < 50; i++) {
      const marker = document.createElement('div');
      marker.classList.add('marker');
      timeline.appendChild(marker);
    }

    Draggable.create(scroller, {
      type: 'x',
      bounds: {
        minX: gap,
        maxX: timelineWidth - scrollerWidth - gap,
      },
      onDrag: function () {
        let progress = (this.x - gap) / maxDragX;
        let containerX = -400 * (timelineWidth / 100) * progress;
        gsap.to(container, {
          x: containerX,
          duration: 1,
          ease: 'power3.out',
        });
      },
    });
  }, [containerRef]);

  return (
    <div ref={timelineRef} className="timeline">
      <div ref={scrollerRef} className="scroller">
        <span>
          [<span>Drag</span>]
        </span>
      </div>
    </div>
  );
};

export default DraggableScroll;
