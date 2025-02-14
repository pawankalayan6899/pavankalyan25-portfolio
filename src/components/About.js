import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import './About.css';

const About = () => {
  const containerRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start end', 'end start'],
  });

  const textX = useTransform(scrollYProgress, [0, 1], ['0%', '50%']);

  return (
    <section id="about" className="about" ref={containerRef}>
      <motion.div
        className="about-container"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: false }}
        transition={{ duration: 0.7 }}
      >
        <div className="about-content">
          <motion.div
            className="about-text"
            style={{ x: textX }}
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -50 }}
            viewport={{ once: false }}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            <h2>About Me</h2>
            <div className="text-box">
              <p>
                As a passionate Frontend Developer, I excel at transforming design visions into engaging and user-friendly web applications using ReactJS, JavaScript, and modern UI technologies, ensuring a seamless and responsive experience across all platforms.
              </p>
            </div>
            <div className="text-box">
              <p>
                "Got a clunky UI? A slow-loading website? I'm a frontend fixer, specializing in diagnosing and resolving UX bottlenecks. I wield ReactJS, JavaScript, and CSS like a surgeon, ensuring a smooth, responsive experience for every user."
              </p>
            </div>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
};

export default About;