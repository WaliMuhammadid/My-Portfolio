'use client';
import { useState } from 'react';
import styles from './Marquee.module.css';
import { useTextScramble } from '@/hooks/useTextScramble';

const MarqueeItem = ({ text }: { text: string }) => {
  const [isHovered, setIsHovered] = useState(false);
  const scrambled = useTextScramble(text, isHovered);

  return (
    <div 
      className={styles.marqueeItem}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <span className={styles.dot}></span>
      {isHovered ? scrambled : text}
    </div>
  );
};

const Marquee = () => {
  const items = [
    "BASED IN KARACHI", "AI-ASSISTED DEVELOPER", "VIBE CODER", "AVAILABLE FOR PROJECTS", "UBIT CS"
  ];

  return (
    <div className={styles.marqueeContainer}>
      <div className={styles.marqueeTrack}>
        {[...items, ...items, ...items].map((item, index) => (
          <MarqueeItem key={index} text={item} />
        ))}
      </div>
    </div>
  );
};

export default Marquee;
