import React from 'react';
import { motion } from 'framer-motion';
import { FaBriefcase, FaGraduationCap } from 'react-icons/fa';
import './Experience.css';

const Experience = () => {
  const experiences = [
    {
      type: 'work',
      title: 'Software Engineer',
      company: 'RideNext Software Solutions Private Limited',
      period: 'July 2022 – Feb 2024',
      project: 'Mint Payments Application',
      client: 'Mint Payments',
      keyResponsibilities: [
        'Co-ordinated closely with the Team Lead to gather and analyze requirements, ensuring clear understanding and alignment with project goals.',
        'Developed user interfaces for both mobile platforms, ensuring a consistent and responsive user experience.',
        'Created the frontend of the web application based on design and information architecture, ensuring accurate implementation of the design vision.',
        'Performed closely with UI and database development professionals to create a dynamic and functional user experience.',
        'Facilitated team development meetings, actively listening to include all client-required website features and ensuring effective communication within the team.',
        'Troubleshot and resolved issues, maintaining website functionality and ensuring compatibility across platforms.',
        'Leveraged React.js, JavaScript, HTML5, and CSS3 to build a responsive and efficient frontend, ensuring the application is accessible and functional across various devices.'
      ]
    },
    {
      type: 'work',
      title: 'NEC 4G/5G Radio Unit Support',
      company: 'RideNext Software Solutions Private Limited',
      period: 'July 2021 - June 2022',
      project: 'Radio Unit Support',
      client: 'NEC, Mavenir, DCMS, and Rakuten',
      keyResponsibilities: [
        'Provided support for 4G/5G Open Radio Units (ORUs), handling software upgrades, VLAN configuration, and patch management.',
        'Conducted troubleshooting for ORU-related issues in lab and field environments, performing detailed log analyses for resolution.',
        'Configured certificates and call home IPs according to customer requirements, ensuring compliance with security protocols.',
        'Coordinated with stakeholders for issue resolution related to PTP configuration and network synchronization.',
        'Produced daily reports and conducted root cause analyses on technical issues to improve network reliability and performance.'
      ]
    },
    {
      type: 'education',
      title: "Bachelor's in Electronics and Communication Engineering",
      University: 'Visvesvaraya Technological University',
      College: 'Gopalan College of Engineering and Management',
      period: '2015 - 2019',
      CGPA: '6.9',
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 50, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: 'easeInOut',
      },
    },
  };

  const cgpaVariants = {
    hidden: { scale: 0, opacity: 0 },
    visible: {
      scale: 1,
      opacity: 1,
      transition: {
        duration: 0.8,
        ease: 'backInOut',
        delay: 0.5,
      },
    },
  };

  return (
    <section id="experience" className="experience">
      <motion.div
        className="experience-container"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false }}
      >
        <motion.div
          className="section-header"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false }}
          transition={{ duration: 0.7, ease: 'easeOut' }}
        >
          <h2>Experience & Education</h2>
          <p>My professional journey and academic background</p>
        </motion.div>

        <div className="timeline">
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              className="timeline-item"
              variants={itemVariants}
            >
              <div className="timeline-icon">
                {exp.type === 'work' ? <FaBriefcase /> : <FaGraduationCap />}
              </div>
              <div className="timeline-content">
                <div className="timeline-header">
                  <h3>{exp.title}</h3>
                  <span className="timeline-period">{exp.period}</span>
                </div>
                {exp.company && <h4 className="timeline-company">{exp.company}</h4>}
                {exp.project && (
                  <div>
                    <h5>Project: {exp.project}</h5>
                    <h5>Client: {exp.client}</h5>
                    <ul>
                      {exp.keyResponsibilities?.map((responsibility, i) => ( // Use optional chaining
                        <li key={i}>{responsibility}</li>
                      ))}
                    </ul>
                  </div>
                )}
                {exp.CGPA && (
                  <motion.div
                    className="cgpa-container"
                    variants={cgpaVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: false }}
                  >
                    <span className="cgpa-label">CGPA:</span>
                    <span className="cgpa-value">{exp.CGPA}</span>
                  </motion.div>
                )}
              </div>
              <motion.div
                className="timeline-line"
                initial={{ height: 0 }}
                whileInView={{ height: '100%' }}
                viewport={{ once: false }}
                transition={{ duration: 0.7, delay: 0.3, ease: 'easeInOut' }}
              />
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default Experience;