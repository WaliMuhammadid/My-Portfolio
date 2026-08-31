import styles from './FloatingControls.module.css';

const FloatingControls = () => {
  return (
    <>
      <div className={styles.bottomLeft}>
        <button className={styles.circleBtn} aria-label="Toggle Audio">
          <span className={styles.icon}>♪</span>
        </button>
      </div>
      
      <div className={styles.bottomRight}>
        <div className={styles.pillContainer}>
          <button className={`${styles.circleBtn} ${styles.active}`} aria-label="Accessibility Mode">
            <span className={styles.icon}>ℹ</span>
          </button>
          <button className={styles.circleBtn} aria-label="AI Mode">
            <span className={styles.icon}>🤖</span>
          </button>
        </div>
      </div>
    </>
  );
};

export default FloatingControls;
