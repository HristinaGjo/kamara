import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { Draggable } from 'gsap/Draggable';
import classes from "../styles/echoes.module.css";

gsap.registerPlugin(Draggable);

const DraggableScroll = ({ children, scrollerRef }) => {
    const containerRef = useRef(null);

    useEffect(() => {
        const scrollContainer = containerRef.current.querySelector(`.${classes.scrollableContent}`);
        const scrollWidth = scrollContainer.scrollWidth - scrollContainer.clientWidth;
        const timeline = containerRef.current.querySelector(`.${classes.timeline}`);
        const scroller = scrollerRef.current;
        const timelineWidth = timeline.clientWidth;
        const scrollerWidth = scroller.clientWidth;

        Draggable.create(scroller, {
            type: 'x',
            bounds: {
                minX: 0,
                maxX: timelineWidth - scrollerWidth,
            },
            onDrag: function() {
                const progress = this.x / (timelineWidth - scrollerWidth);
                scrollContainer.scrollLeft = progress * scrollWidth;
            },
            onThrowUpdate: function() {
                const progress = this.x / (timelineWidth - scrollerWidth);
                scrollContainer.scrollLeft = progress * scrollWidth;
            }
        });

        const syncScroller = () => {
            const progress = scrollContainer.scrollLeft / scrollWidth;
            gsap.to(scroller, {
                x: progress * (timelineWidth - scrollerWidth),
                duration: 0.2,
                ease: 'power1.out',
            });
        };

        scrollContainer.addEventListener('scroll', syncScroller);

        return () => {
            scrollContainer.removeEventListener('scroll', syncScroller);
        };
    }, [scrollerRef]);

    return (
        <div className={classes.draggableContainer} ref={containerRef}>
            <div className={classes.draggableContent}>
                {children}
            </div>
        </div>
    );
};

export default DraggableScroll;
