import React from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import './Hero.css';

const TexturedSceneHero = () => {
    return (
        <div className='hero'>
            <Canvas>
                <ambientLight intensity={0.5} />
                <pointLight position={[10, 10, 10]} />
                <TexturedPlane />
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

const TexturedPlane = () => {
    return (
        <mesh>
            <planeGeometry args={[5, 5]} />
            <meshStandardMaterial color={'#ffffff'} />
        </mesh>
    );
};

export default TexturedSceneHero;
