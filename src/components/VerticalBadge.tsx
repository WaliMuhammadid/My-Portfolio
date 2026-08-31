import styles from './VerticalBadge.module.css';

const VerticalBadge = () => {
  return (
    <div className={styles.badgeContainer}>
      <div className={styles.logo}>W.</div>
      <div className={styles.nominee}>Nominee</div>
    </div>
  );
};

export default VerticalBadge;
