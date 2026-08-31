'use client';
import { useEffect, useRef } from 'react';
import styles from './ContactCTA.module.css';

const ContactCTA = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    // Set internal resolution based on actual display size
    const rect = canvas.parentElement?.getBoundingClientRect();
    canvas.width = rect?.width || window.innerWidth;
    canvas.height = rect?.height || 400;

    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789@#$%^&*()';
    const fontSize = 14;
    const columns = canvas.width / fontSize;
    const drops: number[] = [];

    for (let x = 0; x < columns; x++) {
      drops[x] = 1;
    }

    const draw = () => {
      ctx.fillStyle = 'rgba(4, 4, 4, 0.1)'; 
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      ctx.fillStyle = 'rgba(74, 222, 128, 0.35)'; 
      ctx.font = `${fontSize}px monospace`;

      for (let i = 0; i < drops.length; i++) {
        const text = characters.charAt(Math.floor(Math.random() * characters.length));
        ctx.fillText(text, i * fontSize, drops[i] * fontSize);

        if (drops[i] * fontSize > canvas.height && Math.random() > 0.975) {
          drops[i] = 0;
        }
        drops[i]++;
      }
    };

    const interval = setInterval(draw, 50);

    const handleResize = () => {
      const rect = canvas.parentElement?.getBoundingClientRect();
      if(rect) {
        canvas.width = rect.width;
        canvas.height = rect.height;
      }
    };

    window.addEventListener('resize', handleResize);

    return () => {
      clearInterval(interval);
      window.removeEventListener('resize', handleResize);
    }
  }, []);

  return (
    <section className={styles.section} id="contact">
      <div className={styles.container}>
        <div className={styles.ctaBand}>
          <div className={styles.asciiWrapper}>
            <canvas ref={canvasRef} className={styles.canvas}></canvas>
          </div>
          <div className={styles.ctaInner}>

            <h2 className={styles.title}>
              Need a developer who builds fast with AI?
            </h2>
            <p className={styles.desc}>
              I'm currently available for freelance web projects, rapid prototyping, and creative frontend development.
            </p>
            <div className={styles.actions}>
              <a href="mailto:walimuhammadid@gmail.com?subject=Project%20Inquiry%20from%20Portfolio" className="btn btn-primary">Start a conversation</a>
              <a href="https://linkedin.com/in/wali-muhammad1" target="_blank" rel="noreferrer" className="btn btn-secondary">LinkedIn ↗</a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactCTA;
