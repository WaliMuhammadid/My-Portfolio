'use client';
import { useEffect, useRef } from 'react';

export default function RadarScan({ width = 200, height = 200 }: { width?: number, height?: number }) {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let angle = 0;
    let animationId: number;

    const draw = () => {
      const centerX = width / 2;
      const centerY = height / 2;
      const radius = Math.min(centerX, centerY) - 5;

      ctx.fillStyle = 'rgba(5, 5, 5, 0.1)';
      ctx.fillRect(0, 0, width, height);

      ctx.strokeStyle = 'rgba(0, 255, 65, 0.2)';
      ctx.lineWidth = 1;
      
      ctx.beginPath();
      ctx.arc(centerX, centerY, radius, 0, 2 * Math.PI);
      ctx.stroke();
      ctx.beginPath();
      ctx.arc(centerX, centerY, radius * 0.66, 0, 2 * Math.PI);
      ctx.stroke();
      ctx.beginPath();
      ctx.arc(centerX, centerY, radius * 0.33, 0, 2 * Math.PI);
      ctx.stroke();
      
      ctx.beginPath();
      ctx.moveTo(centerX, 0);
      ctx.lineTo(centerX, height);
      ctx.stroke();
      ctx.beginPath();
      ctx.moveTo(0, centerY);
      ctx.lineTo(width, centerY);
      ctx.stroke();

      ctx.save();
      ctx.translate(centerX, centerY);
      ctx.rotate(angle);
      
      const sweepGradient = ctx.createLinearGradient(0, 0, 0, radius);
      sweepGradient.addColorStop(0, 'rgba(0, 255, 65, 0.8)');
      sweepGradient.addColorStop(1, 'rgba(0, 255, 65, 0)');
      
      ctx.beginPath();
      ctx.moveTo(0, 0);
      ctx.arc(0, 0, radius, 0, 0.2 * Math.PI);
      ctx.lineTo(0, 0);
      ctx.fillStyle = sweepGradient;
      ctx.fill();
      
      ctx.restore();

      angle += 0.05;
      animationId = requestAnimationFrame(draw);
    };

    draw();

    return () => cancelAnimationFrame(animationId);
  }, [width, height]);

  return <canvas ref={canvasRef} width={width} height={height} style={{ borderRadius: '50%', boxShadow: '0 0 20px rgba(0,255,65,0.1)' }} />;
}
