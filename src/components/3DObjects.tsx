
import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';

const ThreeDObjects = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    if (!containerRef.current) return;
    
    const cubes = containerRef.current.querySelectorAll('.cube');
    
    cubes.forEach((cube, index) => {
      // Random rotation for each cube
      gsap.set(cube, {
        rotationX: Math.random() * 360,
        rotationY: Math.random() * 360,
        rotationZ: Math.random() * 360,
      });
      
      // Continuous rotation animation
      gsap.to(cube, {
        rotationX: '+=360',
        rotationY: '+=360',
        duration: 10 + index * 2,
        ease: 'none',
        repeat: -1,
      });
      
      // Random movement
      gsap.to(cube, {
        x: Math.random() * 100 - 50,
        y: Math.random() * 100 - 50,
        duration: 20 + Math.random() * 10,
        ease: 'sine.inOut',
        repeat: -1,
        yoyo: true,
      });
    });
    
    return () => {
      gsap.killTweensOf(cubes);
    };
  }, []);

  return (
    <div 
      ref={containerRef}
      className="absolute inset-0 overflow-hidden pointer-events-none z-0"
      style={{ perspective: '1000px' }}
    >
      <div className="absolute top-1/4 left-1/4 cube w-8 h-8 md:w-12 md:h-12">
        <div className="cube-face cube-face-front bg-neon/20 border border-neon"></div>
        <div className="cube-face cube-face-back bg-neon/20 border border-neon"></div>
        <div className="cube-face cube-face-right bg-neon/20 border border-neon"></div>
        <div className="cube-face cube-face-left bg-neon/20 border border-neon"></div>
        <div className="cube-face cube-face-top bg-neon/20 border border-neon"></div>
        <div className="cube-face cube-face-bottom bg-neon/20 border border-neon"></div>
      </div>
      
      <div className="absolute bottom-1/4 right-1/4 cube w-6 h-6 md:w-10 md:h-10">
        <div className="cube-face cube-face-front bg-neon/20 border border-neon"></div>
        <div className="cube-face cube-face-back bg-neon/20 border border-neon"></div>
        <div className="cube-face cube-face-right bg-neon/20 border border-neon"></div>
        <div className="cube-face cube-face-left bg-neon/20 border border-neon"></div>
        <div className="cube-face cube-face-top bg-neon/20 border border-neon"></div>
        <div className="cube-face cube-face-bottom bg-neon/20 border border-neon"></div>
      </div>
      
      <div className="absolute top-1/2 right-1/3 cube w-5 h-5 md:w-8 md:h-8">
        <div className="cube-face cube-face-front bg-neon/20 border border-neon"></div>
        <div className="cube-face cube-face-back bg-neon/20 border border-neon"></div>
        <div className="cube-face cube-face-right bg-neon/20 border border-neon"></div>
        <div className="cube-face cube-face-left bg-neon/20 border border-neon"></div>
        <div className="cube-face cube-face-top bg-neon/20 border border-neon"></div>
        <div className="cube-face cube-face-bottom bg-neon/20 border border-neon"></div>
      </div>
    </div>
  );
};

export default ThreeDObjects;
