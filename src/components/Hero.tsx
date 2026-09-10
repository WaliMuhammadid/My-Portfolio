'use client';
import { useState, useEffect } from 'react';
import Link from 'next/link';
import styles from './Hero.module.css';

const Hero = () => {
  const subtitles = [
    "I BUILD WITH AI AGENTS & PROMPT WORKFLOWS",
    "I PROTOTYPE PRODUCTS RAPIDLY",
    "I SHIP IMPACTFUL WEB & MOBILE INTERFACES"
  ];
  const [subtitleIndex, setSubtitleIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setSubtitleIndex((prev) => (prev + 1) % subtitles.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);
  return (
    <section className={styles.heroSection}>
      <div className={styles.container}>

        <div className={styles.content}>
          <div className={styles.greeting}>
            Hello, I&apos;m <span className={styles.nameHighlight}>Wali Muhammad</span>
          </div>

          <h1 className={styles.title}>
            AI-Assisted Developer<br />
            for rapid prototyping, web products,<br />
            and modern workflows.
          </h1>

          <div className={styles.subtitle} style={{ minHeight: '1.5em', display: 'flex', alignItems: 'center' }}>
            <span className={styles.textAccent}>{subtitles[subtitleIndex]}</span>
          </div>

          <p className={styles.description}>
            Computer Science student at UBIT (University of Karachi) passionate about AI-native engineering, automated software delivery, and cloud/DevOps exploration.
          </p>

          <div className={styles.actionGroup}>
            <Link href="/contact" className="btn btn-primary">Hire Me</Link>
            <a href="mailto:walimuhammadid@gmail.com?subject=Project%20Inquiry%20from%20Portfolio" className="btn btn-secondary">Email Me ↗</a>
          </div>

        </div>

        <div className={styles.visual}>
          {/* We will use a generated matrix developer image here */}
          <div className={styles.videoWrapper}>
            <div className={styles.bracketTopLeft}></div>
            <div className={styles.bracketTopRight}></div>
            <div className={styles.bracketBottomLeft}></div>
            <div className={styles.bracketBottomRight}></div>

            <div className={styles.crtOverlay}></div>

            <video
              src="/hero-video.mp4"
              autoPlay
              loop
              muted
              playsInline
              className={styles.heroVideo}
            />
            <div className={styles.codeOverlay}>
              <pre>
                <code>
                  {`// spec in, PR out
import { swarm } from "ralph-starter";

const fleet = swarm({
  agents: ["planner", "coder", "reviewer"],
  strategy: "consensus"
});

for await (const patch of fleet.run(spec)) {
  if (patch.green) {
    await patch.push(); // ship it
    break;
  }
}`}
                </code>
              </pre>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default Hero;
