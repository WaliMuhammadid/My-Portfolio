'use client';
import { useEffect, useRef } from 'react';

class Boid {
  x: number;
  y: number;
  vx: number;
  vy: number;
  constructor(w: number, h: number) {
    this.x = Math.random() * w;
    this.y = Math.random() * h;
    this.vx = (Math.random() - 0.5) * 4;
    this.vy = (Math.random() - 0.5) * 4;
  }
}

export default function BoidsSimulation() {
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

    const boids = Array.from({length: 120}, () => new Boid(width, height));
    
    let animationId: number;
    const render = () => {
      ctx.fillStyle = '#050505';
      ctx.fillRect(0, 0, width, height);
      
      ctx.fillStyle = '#00ff41';
      
      boids.forEach(b => {
        b.vx += (Math.random() - 0.5) * 0.8;
        b.vy += (Math.random() - 0.5) * 0.8;
        
        const speed = Math.sqrt(b.vx*b.vx + b.vy*b.vy);
        if (speed > 3) {
           b.vx = (b.vx / speed) * 3;
           b.vy = (b.vy / speed) * 3;
        }
        
        b.x += b.vx;
        b.y += b.vy;
        
        if (b.x < 0) b.x = width;
        if (b.x > width) b.x = 0;
        if (b.y < 0) b.y = height;
        if (b.y > height) b.y = 0;
        
        ctx.beginPath();
        ctx.arc(b.x, b.y, 1.5, 0, Math.PI*2);
        ctx.fill();
        
        boids.forEach(other => {
           if (b === other) return;
           const dx = b.x - other.x;
           const dy = b.y - other.y;
           const dist = dx*dx + dy*dy;
           if (dist < 4000) {
             ctx.strokeStyle = `rgba(0, 255, 65, ${1 - dist/4000})`;
             ctx.lineWidth = 0.5;
             ctx.beginPath();
             ctx.moveTo(b.x, b.y);
             ctx.lineTo(other.x, other.y);
             ctx.stroke();
           }
        });
      });
      
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
