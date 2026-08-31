'use client';
import { useEffect, useState, useRef } from 'react';

export default function Counter({ end, duration = 2000, suffix = "" }: { end: number, duration?: number, suffix?: string }) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          let startTime: number;
          const animate = (time: number) => {
            if (!startTime) startTime = time;
            const progress = (time - startTime) / duration;
            
            if (progress < 1) {
              setCount(Math.floor(end * progress));
              requestAnimationFrame(animate);
            } else {
              setCount(end);
            }
          };
          requestAnimationFrame(animate);
          observer.disconnect();
        }
      },
      { threshold: 0.5 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, [end, duration]);

  return <span ref={ref} className="text-accent" style={{ textShadow: "0 0 10px rgba(0, 255, 65, 0.5)" }}>{count}{suffix}</span>;
}
