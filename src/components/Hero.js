import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';
import Typewriter from 'typewriter-effect';
import './Hero.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faInstagram, faLinkedin, faWhatsapp, faGithub } from '@fortawesome/free-brands-svg-icons';
import cv from '../images/Pavan_Kalyan_D_Frontend developer_CV.pdf'; // Adjust the path as needed


const Hero = () => {
    const canvasRef = useRef(null);

    useEffect(() => {
        const scene = new THREE.Scene();
        const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
        const renderer = new THREE.WebGLRenderer({ alpha: true });
        renderer.setSize(window.innerWidth, window.innerHeight);

        if (canvasRef.current) {
            canvasRef.current.appendChild(renderer.domElement);
        }

        // Create a particle system for the space background
        const particlesCount = 5000;
        const positions = new Float32Array(particlesCount * 3);

        for (let i = 0; i < particlesCount; i++) {
            positions[i * 3] = (Math.random() - 0.5) * 100;
            positions[i * 3 + 1] = (Math.random() - 0.5) * 100;
            positions[i * 3 + 2] = (Math.random() - 0.5) * 100;
        }

        const particleGeometry = new THREE.BufferGeometry();
        particleGeometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));

        const particleMaterial = new THREE.PointsMaterial({ color: 0xffffff, size: 0.1 });
        const particles = new THREE.Points(particleGeometry, particleMaterial);
        scene.add(particles);

        const light = new THREE.AmbientLight(0xffffff, 0.5);
        scene.add(light);

        camera.position.z = 50;

        const animate = () => {
            requestAnimationFrame(animate);
            particles.rotation.y += 0.001;
            renderer.render(scene, camera);
        };
        animate();

        const handleResize = () => {
            renderer.setSize(window.innerWidth, window.innerHeight);
            camera.aspect = window.innerWidth / window.innerHeight;
            camera.updateProjectionMatrix();
        };
        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('resize', handleResize);
            if (canvasRef.current) {
                canvasRef.current.removeChild(renderer.domElement);
            }
        };
    }, []);

    return (
        <div className='hero'>
            <div className='three-js-background' ref={canvasRef}></div>
            <div className='hero-content'>
                <h1 className='hero-title'>Welcome to My Portfolio</h1>
                <p className='hero-subtitle'>Crafting unique web experiences</p>
                <p className='hero-intro'>Hello, I'm Pavan Kalyan D</p>
                <Typewriter
                    options={{
                        strings: ['Frontend Developer', 'UI Developer', 'Web Developer'],
                        autoStart: true,
                        loop: true,
                        deleteSpeed: 50,
                        pauseFor: 1000,
                    }}
                />
                <a href={cv} className='download-cv' download>Download CV</a>
                <div className='social-icons'>
                    <a href='https://www.facebook.com/pavankalyand' target='_blank'><FontAwesomeIcon icon={faFacebook} /></a>
                    <a href='https://www.instagram.com/pavankalyand' target='_blank'><FontAwesomeIcon icon={faInstagram} /></a>
                    <a href='https://www.linkedin.com/in/pavankalyand' target='_blank'><FontAwesomeIcon icon={faLinkedin} /></a>
                    <a href='https://wa.me/yourwhatsappnumber' target='_blank'><FontAwesomeIcon icon={faWhatsapp} /></a>
                    <a href='https://github.com/pavankalyand' target='_blank'><FontAwesomeIcon icon={faGithub} /></a>
                </div>
            </div>
        </div>
    );
};

export default Hero;
