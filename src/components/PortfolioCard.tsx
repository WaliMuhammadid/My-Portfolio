'use client';
import { useState } from 'react';
import styles from './PortfolioCard.module.css';

interface PortfolioCardProps {
  title: string;
  subtitle: string;
  description: string;
  tags: string[];
  linkText: string;
  linkUrl?: string;
  imageUrl?: string;
}

export default function PortfolioCard({ title, subtitle, description, tags, linkText, linkUrl, imageUrl }: PortfolioCardProps) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <a 
      href={linkUrl || "#"}
      target="_blank"
      rel="noopener noreferrer"
      style={{ textDecoration: 'none' }}
      className={styles.card}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className={styles.bracketTopLeft}></div>
      <div className={styles.bracketBottomRight}></div>
      
      <div className={styles.crtOverlay}></div>

      <div className={styles.imageContainer}>
        <div className={styles.scanlineBeam}></div>
        {imageUrl ? (
          <img src={imageUrl} alt={title} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
        ) : (
          <div className={styles.placeholderGraphic}>
            <div className={styles.swirl}></div>
          </div>
        )}
        
        <div className={styles.badge}>[!]</div>
      </div>

      <div className={styles.content}>
        <h2 className={styles.title}>{title}</h2>
        <div className={styles.subtitle}>{subtitle}</div>
        <p className={styles.description}>{description}</p>
        
        <div className={styles.tags}>
          {tags.map(tag => (
            <span key={tag} className={styles.tag}>{tag}</span>
          ))}
        </div>

        <div className={styles.footer}>
          <span className={styles.linkText}>{linkText} <span className={styles.arrow}>→</span></span>
        </div>
      </div>
    </a>
  );
}
