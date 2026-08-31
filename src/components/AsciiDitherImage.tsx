'use client';
import { useEffect, useRef } from 'react';

// Dense to sparse ascii characters (dark to light)
const ASCII_CHARS = [' ', '.', ':', '+', '#', '@'];

interface Particle {
  x: number;
  y: number;
  ox: number;
  oy: number;
  char: string;
  brightness: number;
}

export default function AsciiDitherImage({ src, width = 300, height = 300 }: { src: string, width?: number, height?: number }) {
  const containerRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const particles = useRef<Particle[]>([]);
  const mouse = useRef({ x: -1000, y: -1000 });
  
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d', { alpha: false });
    if (!ctx) return;
    
    let animationFrameId: number;
    let isUnmounted = false;
    
    const scale = window.devicePixelRatio || 1;
    canvas.width = width * scale;
    canvas.height = height * scale;
    canvas.style.width = `${width}px`;
    canvas.style.height = `${height}px`;
    ctx.scale(scale, scale);
    
    const img = new Image();
    img.crossOrigin = 'Anonymous';
    img.src = src;
    
    img.onload = () => {
      if (isUnmounted) return;
      
      const offCanvas = document.createElement('canvas');
      const step = 6; // Grid cell size
      const cols = Math.floor(width / step);
      const rows = Math.floor(height / step);
      
      offCanvas.width = cols;
      offCanvas.height = rows;
      const offCtx = offCanvas.getContext('2d');
      if (!offCtx) return;
      
      offCtx.drawImage(img, 0, 0, cols, rows);
      const imgData = offCtx.getImageData(0, 0, cols, rows).data;
      
      const newParticles: Particle[] = [];
      
      for (let y = 0; y < rows; y++) {
        for (let x = 0; x < cols; x++) {
          const idx = (y * cols + x) * 4;
          const r = imgData[idx];
          const g = imgData[idx + 1];
          const b = imgData[idx + 2];
          
          const rawBrightness = (0.299 * r + 0.587 * g + 0.114 * b) / 255;
          
          // Radial mask: fade out edges (background) so only the center portrait remains
          const centerX = cols / 2;
          const centerY = rows / 2;
          const distToCenter = Math.sqrt(Math.pow(x - centerX, 2) + Math.pow(y - centerY, 2));
          const maxDist = Math.min(centerX, centerY);
          
          // Tighter falloff to perfectly frame a face
          const falloff = Math.max(0, 1 - (distToCenter / (maxDist * 1.1)));
          const brightness = rawBrightness * (falloff * falloff); // Quadratic falloff for smoother edges
          
          const charIdx = Math.floor(brightness * (ASCII_CHARS.length - 1));
          
          // Only add particles that have a visible character
          if (ASCII_CHARS[charIdx] !== ' ' && brightness > 0.08) {
            newParticles.push({
              x: x * step + step/2,
              y: y * step + step/2,
              ox: x * step + step/2,
              oy: y * step + step/2,
              char: ASCII_CHARS[charIdx],
              brightness
            });
          }
        }
      }
      
      particles.current = newParticles;
      animate();
    };

    const animate = () => {
      if (isUnmounted) return;
      
      // Clear background with deep black
      ctx.fillStyle = '#050505';
      ctx.fillRect(0, 0, width, height);
      
      const mx = mouse.current.x;
      const my = mouse.current.y;
      const interactionRadius = 50;
      
      ctx.font = '6px monospace';
      ctx.textAlign = 'center';
      ctx.textBaseline = 'middle';
      
      for (const p of particles.current) {
        const dx = mx - p.ox;
        const dy = my - p.oy;
        const dist = Math.sqrt(dx * dx + dy * dy);
        
        let tx = p.ox;
        let ty = p.oy;
        let color = '#22c55e'; // base green
        let shadowBlur = 0;
        
        if (dist < interactionRadius) {
          const force = (interactionRadius - dist) / interactionRadius;
          const angle = Math.atan2(dy, dx);
          
          const push = force * 12; 
          tx = p.ox - Math.cos(angle) * push;
          ty = p.oy - Math.sin(angle) * push;
          
          color = '#00ff41'; // bright neon on hover
          shadowBlur = force * 15;
        } else {
          // slight breathing/float effect
          const time = Date.now() * 0.001;
          tx = p.ox + Math.sin(time + p.oy * 0.1) * 0.5;
          ty = p.oy + Math.cos(time + p.ox * 0.1) * 0.5;
        }
        
        p.x += (tx - p.x) * 0.1;
        p.y += (ty - p.y) * 0.1;
        
        ctx.fillStyle = color;
        if (shadowBlur > 0) {
          ctx.shadowBlur = shadowBlur;
          ctx.shadowColor = '#00ff41';
        } else {
          ctx.shadowBlur = 0;
        }
        
        // Intensity based on brightness
        ctx.globalAlpha = 0.3 + p.brightness * 0.7;
        
        ctx.fillText(p.char, p.x, p.y);
      }
      
      // CRT Scanline Overlay
      ctx.shadowBlur = 0;
      ctx.globalAlpha = 0.05;
      const time = Date.now() * 0.05;
      for (let i = 0; i < height; i += 3) {
        ctx.fillStyle = '#00ff41';
        const yPos = (i + time) % height;
        ctx.fillRect(0, yPos, width, 1);
      }
      ctx.globalAlpha = 1.0;
      
      animationFrameId = requestAnimationFrame(animate);
    };

    const handleMouseMove = (e: MouseEvent) => {
      const rect = canvas.getBoundingClientRect();
      mouse.current = {
        x: e.clientX - rect.left,
        y: e.clientY - rect.top
      };
    };
    
    const handleMouseLeave = () => {
      mouse.current = { x: -1000, y: -1000 };
    };

    canvas.addEventListener('mousemove', handleMouseMove);
    canvas.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      isUnmounted = true;
      if (animationFrameId) cancelAnimationFrame(animationFrameId);
      canvas.removeEventListener('mousemove', handleMouseMove);
      canvas.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, [src, width, height]);

  return (
    <div 
      ref={containerRef}
      style={{ 
        position: 'relative', 
        width, 
        height, 
        overflow: 'hidden', 
        borderRadius: '8px',
        border: '1px solid #1a2e1c',
        backgroundColor: '#050505',
        cursor: 'crosshair',
        boxShadow: '0 0 30px rgba(0, 255, 65, 0.05)'
      }}
    >
      <canvas ref={canvasRef} style={{ display: 'block', width: '100%', height: '100%' }} />
      {/* CSS Vignette Overlay */}
      <div style={{
        position: 'absolute',
        top: 0, left: 0, right: 0, bottom: 0,
        pointerEvents: 'none',
        background: 'radial-gradient(circle, transparent 30%, rgba(5,5,5,0.9) 100%)'
      }}></div>
    </div>
  );
}
