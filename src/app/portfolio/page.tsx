'use client';

import { useState } from 'react';
import PortfolioCard from "@/components/PortfolioCard";
import styles from "./portfolio.module.css";

export default function PortfolioPage() {
  const [activeFilter, setActiveFilter] = useState("All");

  const projects = [
    {
      title: "Luxe Beauty",
      subtitle: "E-Commerce / Web",
      description: "Modern and responsive beauty & cosmetics web application delivering an elegant user experience with mobile-optimized performance.",
      tags: ["TypeScript", "Node.js", "E-Commerce"],
      linkText: "VIEW PROJECT",
      linkUrl: "https://luxebeauti.netlify.app"
    },
    {
      title: "Gym Personal Trainer",
      subtitle: "Health & Fitness / Web App",
      description: "Comprehensive fitness platform featuring 20+ exercise demonstrations, structured workout routines, and diet recommendations.",
      tags: ["TypeScript", "Node.js", "Health & Fitness"],
      linkText: "VIEW PROJECT",
      linkUrl: "https://astounding-crumble-4f9561.netlify.app"
    },
    {
      title: "Softadex Digital Agency",
      subtitle: "Software Studio / Agency",
      description: "Official portal showcasing digital solutions, MVP development services, and software delivery workflows.",
      tags: ["TypeScript", "Node.js", "Agency"],
      linkText: "VIEW PROJECT",
      linkUrl: "https://softadex.netlify.app"
    },
    {
      title: "DevOps-Networking Hub",
      subtitle: "DevOps / Education",
      description: "Structured educational hub for exploring foundational computer networking and DevOps pipeline concepts.",
      tags: ["TypeScript", "Node.js", "DevOps"],
      linkText: "VIEW PROJECT",
      linkUrl: "https://devops-networking.netlify.app"
    },
    {
      title: "ABC Construction",
      subtitle: "Corporate / Enterprise Web",
      description: "Business portfolio and project showcase with clean navigation and accessibility-focused layouts.",
      tags: ["TypeScript", "Node.js", "Corporate"],
      linkText: "VIEW PROJECT",
      linkUrl: "https://prismatic-elf-8ef8b5.netlify.app"
    }
  ];

  const filteredProjects = activeFilter === "All" 
    ? projects 
    : projects.filter(p => p.tags.includes(activeFilter));

  const tags = [
    { name: "All", count: 5 },
    { name: "TypeScript", count: 5 },
    { name: "Node.js", count: 5 },
    { name: "E-Commerce", count: 1 },
    { name: "Health & Fitness", count: 1 },
    { name: "Agency", count: 1 },
    { name: "DevOps", count: 1 },
    { name: "Corporate", count: 1 }
  ];

  return (
    <main style={{ padding: '6rem 0' }}>
      <div className="container">
        
        <div className={styles.headerSection}>
          <span className={styles.topLabel}>
            <span className={styles.topLabelHighlight}>01 /</span> SELECTED WORK
          </span>
          
          <h1 className={styles.mainHeading}>
            Products, systems, and interfaces shipped in production.
          </h1>
          
          <p className={styles.description}>
            A curated record of AI systems, agent infrastructure, web products, interactive experiences, and the engineering decisions behind them.
          </p>
          
          <div className={styles.seeAlso}>
            see also: <a href="#" className={styles.seeAlsoLink}>AI Agents →</a> the fleet behind the recent work
          </div>
          
          <div className={styles.tagsContainer}>
            {tags.map((tag, idx) => (
              <button 
                key={idx} 
                className={`${styles.tag} ${activeFilter === tag.name ? styles.active : ''}`}
                onClick={() => setActiveFilter(tag.name)}
              >
                {tag.name} <span className={styles.tagCount}>{tag.count}</span>
              </button>
            ))}
          </div>
          
          <span className={styles.projectsCount}>{filteredProjects.length} of {projects.length} projects</span>
        </div>
        
        <div style={{ marginTop: '4rem', display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(320px, 1fr))', gap: '2rem' }}>
          {filteredProjects.map((project, idx) => (
            <PortfolioCard key={idx} {...project} />
          ))}
        </div>
      </div>
    </main>
  );
}
