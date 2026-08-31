'use client';
import { useEffect, useState, useRef } from 'react';
import LetterGlitch from './LetterGlitch';

export default function MouseTrail() {
  const [isMobile, setIsMobile] = useState(false);
  const [mousePos, setMousePos] = useState({ x: -1000, y: -1000 });
  const [isMoving, setIsMoving] = useState(false);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    if (window.matchMedia('(max-width: 768px)').matches) {
      setIsMobile(true);
      return;
    }

    const handleMouseMove = (e: MouseEvent) => {
      setMousePos({ x: e.clientX, y: e.clientY });
      setIsMoving(true);

      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }

      timeoutRef.current = setTimeout(() => {
        setIsMoving(false);
      }, 150);
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
    };
  }, []);

  if (isMobile) return null;

  return (
    <div 
      style={{ 
        position: 'fixed', 
        top: 0, 
        left: 0, 
        width: '100vw', 
        height: '100vh', 
        zIndex: 0, /* Ensures it sits properly in the background context */
        pointerEvents: 'none',
        opacity: isMoving ? 0.3 : 0,
        transition: 'opacity 0.2s ease-out',
        maskImage: `radial-gradient(circle 250px at ${mousePos.x}px ${mousePos.y}px, black 0%, transparent 100%)`,
        WebkitMaskImage: `radial-gradient(circle 250px at ${mousePos.x}px ${mousePos.y}px, black 0%, transparent 100%)`
      }} 
    >
      <LetterGlitch 
        glitchColors={['#00ff41', '#00cc33', '#009922']}
        glitchSpeed={50}
        smooth={true}
        outerVignette={false} 
        centerVignette={false}
      />
    </div>
  );
}
