import React from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import './Hero.css';

const ParticleSystemHero = () => {
    return (
        <div className='hero'>
            <Canvas>
                <ambientLight intensity={0.5} />
                <pointLight position={[10, 10, 10]} />
                <Particles />
                <OrbitControls />
            </Canvas>
            <div className='hero-content'>
                <h1 className='hero-title'>Welcome to My Portfolio</h1>
                <p className='hero-subtitle'>Crafting modern web experiences</p>
                <button className='cta-button'>Get Started</button>
            </div>
        </div>
    );
};

const Particles = () => {
    // Particle logic will go here
    return <></>;
};

export default ParticleSystemHero;
