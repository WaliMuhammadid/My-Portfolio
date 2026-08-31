'use client';
import { useState, useEffect } from 'react';
import { useTextScramble } from '@/hooks/useTextScramble';

export default function ScrambleHeading({ text, className = "heading-hero" }: { text: string, className?: string }) {
  const [active, setActive] = useState(true);
  const scrambled = useTextScramble(text, active);

  useEffect(() => {
    // Turn off active after a short delay so it can be re-triggered by hover
    const timer = setTimeout(() => setActive(false), 2000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <h1 
      className={className}
      onMouseEnter={() => setActive(true)}
      onMouseLeave={() => setActive(false)}
    >
      {active ? scrambled : text}
    </h1>
  );
}
