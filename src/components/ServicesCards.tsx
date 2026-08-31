import Link from 'next/link';
import styles from './ServicesCards.module.css';

const services = [
  {
    id: "01",
    title: "AI-Assisted Web Development",
    description: "Build and modernize web applications using AI tools to accelerate delivery, prototype rapidly, and maintain production-ready codebases.",
    tags: ["React / Next.js", "AI Workflows", "Prototyping"],
    link: "/services/ai-web-development"
  },
  {
    id: "02",
    title: "Fullstack Engineering",
    description: "Develop end-to-end solutions combining responsive, animated frontends with robust backend architectures and scalable databases.",
    tags: ["Node.js", "TypeScript", "Databases"],
    link: "/services/fullstack-engineering"
  },
  {
    id: "03",
    title: "UI/UX & Vibe Coding",
    description: "Craft visually striking, animated, and highly interactive user interfaces that deliver a premium, modern 'vibe' to your users.",
    tags: ["CSS Animations", "Frontend", "Creative Dev"],
    link: "/services/ui-ux-design"
  }
];

const ServicesCards = () => {
  return (
    <section className={styles.section} id="portfolio">
      <div className={styles.container}>
        <h2 className="heading-section">Hire me for</h2>
        
        <div className={styles.grid}>
          {services.map(service => (
            <div key={service.id} className={styles.card}>
              <div className={styles.cardHeader}>
                <span className={styles.icon}>🧠</span>
                <span className={styles.id}>{service.id}</span>
              </div>
              
              <h3 className={styles.cardTitle}>{service.title}</h3>
              <p className={styles.cardDescription}>{service.description}</p>
              
              <div className={styles.tags}>
                {service.tags.map(tag => (
                  <span key={tag} className={styles.tag}>{tag}</span>
                ))}
              </div>
              
              <div className={styles.cardFooter}>
                <Link href={service.link} className={styles.viewScope}>VIEW SCOPE →</Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesCards;
