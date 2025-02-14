import React from 'react';
import { motion } from 'framer-motion';
import { FaEnvelope, FaPhone, FaMapMarkerAlt } from 'react-icons/fa';
import { FaGithub, FaLinkedin, FaTwitter, FaInstagram, FaWhatsapp } from 'react-icons/fa';
import { FaHome, FaInfoCircle, FaBriefcase, FaWrench, FaAddressBook } from 'react-icons/fa';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <motion.div 
          className="footer-content"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <div className="footer-info">
            <div className="contact-info">
              <a href="mailto:pavankalyan.d2506@gmail.com" className="contact-link">
                <FaEnvelope /> pavankalyan.d2506@gmail.com
              </a>
              <a href="tel:+918073197069" className="contact-link">
                <FaPhone /> +91 8073197069
              </a>
              <a href="https://maps.google.com/?q=Bangalore,+Karnataka,+India" className="contact-link">
                <FaMapMarkerAlt /> Bangalore, Karnataka, India
              </a>
            </div>
          </div>

          <div className="footer-social">
            <a href="https://github.com/yourusername" target="_blank" rel="noopener noreferrer" className="social-icon">
              <FaGithub />
            </a>
            <a href="https://linkedin.com/in/yourusername" target="_blank" rel="noopener noreferrer" className="social-icon">
              <FaLinkedin />
            </a>
            <a href="https://twitter.com/yourusername" target="_blank" rel="noopener noreferrer" className="social-icon">
              <FaTwitter />
            </a>
            <a href="https://instagram.com/yourusername" target="_blank" rel="noopener noreferrer" className="social-icon">
              <FaInstagram />
            </a>
            <a href="https://wa.me/yourwhatsappnumber" target="_blank" rel="noopener noreferrer" className="social-icon">
              <FaWhatsapp />
            </a>
          </div>

          <div className="footer-navigation">
            <a href="/" className="nav-link">
              <FaHome /> Home
            </a>
            <a href="/about" className="nav-link">
              <FaInfoCircle /> About
            </a>
            <a href="/projects" className="nav-link">
              <FaBriefcase /> Projects
            </a>
            <a href="/skills" className="nav-link">
              <FaWrench /> Skills
            </a>
            <a href="/contact" className="nav-link">
              <FaAddressBook /> Contact
            </a>
          </div>

          <div className="footer-bottom">
            <p className="copyright">
              © {new Date().getFullYear()} Pavan Kalyan. All rights reserved.
            </p>
            <motion.button
              className="scroll-to-top"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            >
              ↑
            </motion.button>
          </div>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;