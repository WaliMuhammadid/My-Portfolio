import styles from './Timeline.module.css';

interface TimelineEvent {
  year: string;
  title: string;
  description: string;
}

export default function Timeline({ events }: { events: TimelineEvent[] }) {
  return (
    <div className={styles.timeline}>
      {events.map((e, idx) => (
        <div key={idx} className={styles.node}>
          <div className={styles.year}>[{e.year}]</div>
          <div className={styles.content}>
            <h4>{e.title}</h4>
            <p>{e.description}</p>
          </div>
        </div>
      ))}
    </div>
  );
}
