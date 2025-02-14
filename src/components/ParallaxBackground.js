import React, { useEffect, useRef } from 'react';
import { motion, useScroll, useTransform, useSpring } from 'framer-motion';
import './ParallaxBackground.css';

const ParallaxBackground = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"]
  });

  const springConfig = { stiffness: 100, damping: 30, restDelta: 0.001 };
  
  const y1 = useSpring(
    useTransform(scrollYProgress, [0, 1], [0, -150]),
    springConfig
  );
  const y2 = useSpring(
    useTransform(scrollYProgress, [0, 1], [0, -300]),
    springConfig
  );
  const y3 = useSpring(
    useTransform(scrollYProgress, [0, 1], [0, -450]),
    springConfig
  );

  const shapes = [
    { y: y1, className: 'shape shape-1' },
    { y: y2, className: 'shape shape-2' },
    { y: y3, className: 'shape shape-3' },
  ];

  return (
    <div ref={ref} className="parallax-container">
      {shapes.map((shape, index) => (
        <motion.div
          key={index}
          className={shape.className}
          style={{ y: shape.y }}
        />
      ))}
    </div>
  );
};

export default ParallaxBackground;
