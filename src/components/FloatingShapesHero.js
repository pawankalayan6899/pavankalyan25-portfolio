import React, { useEffect } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import './Hero.css';

const FloatingShapesHero = () => {
    return (
        <div className='hero'>
            <Canvas>
                <ambientLight intensity={0.5} />
                <pointLight position={[10, 10, 10]} />
                <Shapes />
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

const Shapes = () => {
    return (
        <>  
            <mesh>
                <boxGeometry args={[1, 1, 1]} />
                <meshStandardMaterial color={'#ff6b6b'} />
            </mesh>
            <mesh position={[2, 0, 0]}>
                <sphereGeometry args={[0.5, 32, 32]} />
                <meshStandardMaterial color={'#6e7ff3'} />
            </mesh>
            <mesh position={[-2, 0, 0]}>
                <coneGeometry args={[0.5, 1, 32]} />
                <meshStandardMaterial color={'#a77bfa'} />
            </mesh>
        </>
    );
};

export default FloatingShapesHero;
