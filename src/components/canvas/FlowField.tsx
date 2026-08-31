'use client';
import { useEffect, useRef } from 'react';

export default function FlowField() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let width = canvas.offsetWidth;
    let height = canvas.offsetHeight;
    canvas.width = width;
    canvas.height = height;

    const particles: {x: number, y: number, vx: number, vy: number, age: number}[] = [];
    const numParticles = 400;
    
    for (let i = 0; i < numParticles; i++) {
      particles.push({
        x: Math.random() * width,
        y: Math.random() * height,
        vx: 0,
        vy: 0,
        age: Math.random() * 100
      });
    }

    let time = 0;
    let animationId: number;

    const render = () => {
      ctx.fillStyle = 'rgba(5, 5, 5, 0.05)';
      ctx.fillRect(0, 0, width, height);
      
      ctx.strokeStyle = 'rgba(0, 255, 65, 0.5)';
      ctx.lineWidth = 1.5;
      
      ctx.beginPath();
      particles.forEach(p => {
        ctx.moveTo(p.x, p.y);
        
        // Pseudo-noise flow field using sine waves
        const angle = Math.sin(p.x * 0.005 + time) * Math.cos(p.y * 0.005 + time) * Math.PI * 2;
        p.vx = Math.cos(angle) * 2.5;
        p.vy = Math.sin(angle) * 2.5;
        
        p.x += p.vx;
        p.y += p.vy;
        p.age++;
        
        ctx.lineTo(p.x, p.y);
        
        if (p.x < 0 || p.x > width || p.y < 0 || p.y > height || p.age > 150) {
          p.x = Math.random() * width;
          p.y = Math.random() * height;
          p.age = 0;
        }
      });
      ctx.stroke();
      
      time += 0.005;
      animationId = requestAnimationFrame(render);
    };
    render();

    const handleResize = () => {
      width = canvas.offsetWidth;
      height = canvas.offsetHeight;
      canvas.width = width;
      canvas.height = height;
    };
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
      cancelAnimationFrame(animationId);
    };
  }, []);

  return <canvas ref={canvasRef} style={{ width: '100%', height: '100%', display: 'block', borderRadius: '4px' }} />;
}
