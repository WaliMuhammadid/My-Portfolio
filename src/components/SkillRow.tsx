import Image from 'next/image';
import styles from './SkillRow.module.css';

interface SkillRowProps {
  title: string;
  subtitle: string;
  description: string;
  details: { label: string; value: string }[];
  imagePath?: string;
}

export default function SkillRow({ title, subtitle, description, details, imagePath }: SkillRowProps) {
  return (
    <div className={styles.row}>
      <div className={styles.visualContainer}>
        {imagePath ? (
          <Image src={imagePath} alt={title} fill style={{ objectFit: 'cover' }} sizes="(max-width: 768px) 100vw, 250px" quality={85} />
        ) : (
          <div className={styles.graphic}>
            <div className={styles.circleGraphic}>
              <div className={styles.innerCircle}></div>
            </div>
          </div>
        )}
      </div>
      <div className={styles.content}>
        <div className={styles.subtitle}>{subtitle}</div>
        <h3 className={styles.title}>{title}</h3>
        <p className={styles.description}>{description}</p>
        <div className={styles.detailsGrid}>
          {details.map((detail, idx) => (
            <div key={idx} className={styles.detailItem}>
              <span className={styles.detailLabel}>{detail.label}</span>
              <span className={styles.detailValue}>{detail.value}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
