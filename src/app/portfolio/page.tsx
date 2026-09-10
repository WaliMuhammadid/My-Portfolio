'use client';

import { useState } from 'react';
import PortfolioCard from "@/components/PortfolioCard";
import styles from "./portfolio.module.css";

export default function PortfolioPage() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [activeLanguage, setActiveLanguage] = useState("All");

  const projects = [
    {
      title: "Society Hub",
      subtitle: "Society Management System",
      description: "Modern and responsive society management application delivering an elegant user experience with mobile-optimized performance.",
      category: "App",
      tags: ["TypeScript", "React Native", "Node.js"],
      linkText: "VIEW PROJECT",
      linkUrl: "https://expo.dev/artifacts/eas/EpRux4jaS888U1GI7b7UM3YdnJHQ74FNTk77qwUvt9k.apk",
      imageUrl: "/society-hub.jpg"
    },
    {
      title: "Gym Personal Trainer",
      subtitle: "Health & Fitness / Web App",
      description: "Comprehensive fitness platform featuring 20+ exercise demonstrations, structured workout routines, and diet recommendations.",
      category: "Web",
      tags: ["TypeScript", "React", "Node.js"],
      linkText: "VIEW PROJECT",
      linkUrl: "https://astounding-crumble-4f9561.netlify.app"
    },
    {
      title: "Softadex Digital Agency",
      subtitle: "Software Studio / Agency",
      description: "Official portal showcasing digital solutions, MVP development services, and software delivery workflows.",
      category: "Web",
      tags: ["TypeScript", "Next.js", "TailwindCSS"],
      linkText: "VIEW PROJECT",
      linkUrl: "https://softadex.netlify.app"
    },
    {
      title: "DevOps-Networking Hub",
      subtitle: "DevOps / Education",
      description: "Structured educational hub for exploring foundational computer networking and DevOps pipeline concepts.",
      category: "DevOps",
      tags: ["Docker", "Kubernetes", "AWS"],
      linkText: "VIEW PROJECT",
      linkUrl: "https://devops-networking.netlify.app"
    },
    {
      title: "ABC Construction",
      subtitle: "Corporate / Enterprise Web",
      description: "Business portfolio and project showcase with clean navigation and accessibility-focused layouts.",
      category: "Web",
      tags: ["JavaScript", "HTML", "CSS"],
      linkText: "VIEW PROJECT",
      linkUrl: "https://prismatic-elf-8ef8b5.netlify.app"
    }
  ];

  const categories = ["All", "Web", "App", "DevOps"];

  // Filter projects by category
  let categoryFiltered = projects;
  if (activeCategory !== "All") {
    categoryFiltered = projects.filter(p => p.category === activeCategory);
  }

  // Get unique languages for the currently selected category
  const availableLanguages = ["All", ...Array.from(new Set(categoryFiltered.flatMap(p => p.tags)))];

  // Final filter by language
  const finalFilteredProjects = activeLanguage === "All"
    ? categoryFiltered
    : categoryFiltered.filter(p => p.tags.includes(activeLanguage));

  const handleCategoryChange = (cat: string) => {
    setActiveCategory(cat);
    setActiveLanguage("All"); // Reset language when category changes
  };

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
          
          {/* Primary Category Filters */}
          <div className={styles.tagsContainer} style={{ marginBottom: (activeCategory === "Web" || activeCategory === "App") ? '1rem' : '2rem' }}>
            {categories.map((cat, idx) => (
              <button 
                key={idx} 
                className={`${styles.tag} ${activeCategory === cat ? styles.active : ''}`}
                onClick={() => handleCategoryChange(cat)}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Secondary Language Filters (only for Web or App) */}
          {(activeCategory === "Web" || activeCategory === "App") && (
            <div className={styles.tagsContainer} style={{ marginBottom: '2rem' }}>
              {availableLanguages.map((lang, idx) => (
                <button 
                  key={idx} 
                  className={`${styles.tag} ${activeLanguage === lang ? styles.active : ''}`}
                  onClick={() => setActiveLanguage(lang)}
                  style={{ fontSize: '0.85rem', padding: '0.4rem 0.8rem' }}
                >
                  {lang}
                </button>
              ))}
            </div>
          )}
          
          <span className={styles.projectsCount}>{finalFilteredProjects.length} of {projects.length} projects</span>
        </div>
        
        <div style={{ marginTop: '4rem', display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(320px, 1fr))', gap: '2rem' }}>
          {finalFilteredProjects.map((project, idx) => (
            <PortfolioCard key={idx} {...project} />
          ))}
        </div>
      </div>
    </main>
  );
}
