import React from 'react';
import { motion } from 'framer-motion';
import reactImage from '../images/react.webp'; // Adjust the path as needed
import javascriptImage from '../images/js.png'; // Adjust the path as needed
import htmlCssImage from '../images/html.jpg'; // Adjust the path as needed
import gitImage from '../images/git.jpg'; // Adjust the path as needed
import linuxImage from '../images/linux.png'; // Adjust the path as needed
import './Skills.css';

const Skills = () => {
  const skills = [
    {
      items: [
        { name: 'React', image: reactImage, description: 'Proficient in building interactive UIs with React.' },
        { name: 'JavaScript', image: javascriptImage, description: 'Experienced in modern JavaScript development.' },
        { name: 'HTML/CSS', image: htmlCssImage, description: 'Expert in creating responsive and accessible layouts.' }
      ]
    },
    {
      items: [
        { name: 'Git', image: gitImage, description: 'Skilled in version control using Git.' },
        { name: 'Linux', image: linuxImage, description: 'Comfortable with Linux environments for development and deployment.' }
      ]
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.2,
      }
    }
  };

  const cardVariants = {
    initial: { opacity: 0, y: 50, rotateY: 0 },
    animate: { opacity: 1, y: 0, rotateY: 0, transition: { duration: 0.5 } },
    hover: {
      scale: 1.05,
      zIndex: 1,
      boxShadow: "0px 5px 20px rgba(0, 0, 0, 0.3)",
      transition: { duration: 0.2 },
    },
    tap: { scale: 0.95 },
  };

  const lightVariants = {
    animate: {
      x: ["-100%", "100%"],
      transition: {
        x: {
          repeat: Infinity,
          duration: 1.5,
          ease: "linear",
        },
      },
    },
  };

  return (
    <section id="skills" className="skills">
      <motion.div
        className="skills-container"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false }}
      >
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false }}
          transition={{ duration: 0.5 }}
          className="section-title"
        >
          My Skills
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="section-subtitle"
        >
          Technologies I work with
        </motion.p>

        <div className="skills-grid">
          {skills.map((category, categoryIndex) => (
            <div key={categoryIndex} className="skill-category">
              {category.items.map((skill, skillIndex) => (
                <motion.div
                  key={skill.name}
                  className="skill-card"
                  variants={cardVariants}
                  initial="initial"
                  whileHover="hover"
                  whileTap="tap"
                  animate="animate"
                >
                  <div className="skill-card-inner">
                    <div className="skill-card-front">
                      <div className="skill-icon">
                        <img src={skill.image} alt={skill.name} />
                      </div>
                      <div className="skill-info">
                        <h4>{skill.name}</h4>
                      </div>
                      <motion.span className="skill-light" variants={lightVariants} animate="animate" />
                    </div>
                    <div className="skill-card-back">
                      <p>{skill.description}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default Skills;