import React, { useEffect, useRef } from 'react';
import { motion, useTransform, useScroll } from 'framer-motion';
import './Projects.css';
import project1 from '../images/port.png';
import project2 from '../images/ecommerce.jpg';
import project3 from '../images/task.jpg';

const Projects = () => {
  const projects = [
    {
      title: "Portfolio Website",
      description: "A modern portfolio website built with React and CSS animations",
      image: project1,
      tags: ["React", "CSS", "Framer Motion"],
      liveLink: "#",
      githubLink: "#"
    },
    {
      title: "E-commerce Platform",
      description: "Full-stack e-commerce platform with payment integration",
      image: project2,
      tags: ["Next.js", "Node.js", "MongoDB"],
      liveLink: "#",
      githubLink: "#"
    },
    {
      title: "Task Management App",
      description: "A collaborative task management application",
      image: project3,
      tags: ["React", "Firebase", "Material-UI"],
      liveLink: "#",
      githubLink: "#"
    }
  ];

  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], [-300, 300]); // Adjust these values for the parallax intensity

  return (
    <section className="projects">
      <div className="projects-container" ref={containerRef}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="projects-header"
          style={{y}}
        >
          <h2 className="section-title">My Projects</h2>
          <p className="section-subtitle">Here are some of my recent works</p>
        </motion.div>

        <div className="projects-grid">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              className="project-card"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2, ease: "easeOut" }}
              viewport={{ once: true, amount: 0.2 }} // Trigger once the card is partially visible
            >
              <div className="project-image-container">
                <img src={project.image} alt={project.title} className="project-image" />
              </div>
              <div className="project-content">
                <h3 className="project-title">{project.title}</h3>
                <p className="project-description">{project.description}</p>
                <div className="project-tags">
                  {project.tags.map((tag, tagIndex) => (
                    <span key={tagIndex} className="project-tag">{tag}</span>
                  ))}
                </div>
                <div className="project-links">
                  <a href={project.liveLink} className="btn-primary" target="_blank" rel="noopener noreferrer">
                    Live Demo
                  </a>
                  <a href={project.githubLink} className="btn-secondary" target="_blank" rel="noopener noreferrer">
                    GitHub
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;