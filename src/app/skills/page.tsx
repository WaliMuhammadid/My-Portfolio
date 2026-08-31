import SkillRow from "@/components/SkillRow";

export default function SkillsPage() {
  const skills = [
    {
      title: "AI-Native & Agentic Tools",
      subtitle: "AUTOMATION / LLM",
      description: "Proficient in utilizing AI agents and prompt engineering to automate workflows and accelerate development cycles.",
      imagePath: "/images/ai-tools.jpg",
      details: [
        { label: "Primary Stack", value: "Antigravity, Google AI Studio, Cursor AI, Lovable Cursor" },
        { label: "LLM Systems", value: "Codex, ChatGPT, Replit AI" }
      ]
    },
    {
      title: "Languages & Frameworks",
      subtitle: "FULLSTACK ENGINEERING",
      description: "Building responsive, high-performance web and mobile applications using modern frameworks and strongly-typed languages.",
      imagePath: "/images/languages-frameworks.jpg",
      details: [
        { label: "Core Languages", value: "JavaScript, TypeScript, Dart, Python, HTML, CSS" },
        { label: "Frameworks", value: "React, Next.js, Node.js, Flutter, Bootstrap" }
      ]
    },
    {
      title: "Databases & DevOps Tools",
      subtitle: "INFRASTRUCTURE & DELIVERY",
      description: "Managing data storage, version control, and development environments for robust and automated software delivery.",
      imagePath: "/images/databases-devops.jpg",
      details: [
        { label: "Databases & OS", value: "MySQL, Linux (Ubuntu/Debian)" },
        { label: "DevOps & Tooling", value: "Git, GitHub Actions, VS Code" }
      ]
    }
  ];

  const coreDomainsCount = skills.length;
  
  const totalTechnologiesCount = skills.reduce((total, skill) => {
    return total + skill.details.reduce((subTotal, detail) => {
      const items = detail.value.split(',').filter(s => s.trim().length > 0);
      return subTotal + items.length;
    }, 0);
  }, 0);

  const formattedDomains = coreDomainsCount < 10 ? `0${coreDomainsCount}` : `${coreDomainsCount}`;
  const formattedTech = `${totalTechnologiesCount}+`;

  return (
    <main style={{ padding: '6rem 0' }}>
      <div className="container">
        
        <div style={{ marginBottom: '4rem' }}>
          <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.8rem', color: 'var(--primary-accent)', textTransform: 'uppercase', letterSpacing: '0.1em' }}>
            System Specs
          </span>
          <h1 className="heading-hero" style={{ marginTop: '1rem', marginBottom: '2rem' }}>
            Technical Capabilities
          </h1>
          <p style={{ color: '#a0a0a0', fontSize: '1.1rem', maxWidth: '600px', lineHeight: 1.6 }}>
            A structured breakdown of my core technical competencies, spanning from AI-native tooling to traditional fullstack frameworks.
          </p>
        </div>

        <div style={{ display: 'flex', gap: '4rem', paddingBottom: '3rem', borderBottom: '1px solid #1a2e1c', marginBottom: '1rem', flexWrap: 'wrap' }}>
          <div>
            <div style={{ fontSize: '2.5rem', color: 'var(--primary-accent)', fontWeight: 700, letterSpacing: '-0.02em', marginBottom: '0.5rem' }}>{formattedDomains}</div>
            <div style={{ fontFamily: 'var(--font-mono)', fontSize: '0.8rem', color: '#888', textTransform: 'uppercase', letterSpacing: '0.1em' }}>Core Domains</div>
          </div>
          <div>
            <div style={{ fontSize: '2.5rem', color: 'var(--primary-accent)', fontWeight: 700, letterSpacing: '-0.02em', marginBottom: '0.5rem' }}>{formattedTech}</div>
            <div style={{ fontFamily: 'var(--font-mono)', fontSize: '0.8rem', color: '#888', textTransform: 'uppercase', letterSpacing: '0.1em' }}>Technologies</div>
          </div>
          <div>
            <div style={{ fontSize: '2.5rem', color: 'var(--primary-accent)', fontWeight: 700, letterSpacing: '-0.02em', marginBottom: '0.5rem' }}>~100%</div>
            <div style={{ fontFamily: 'var(--font-mono)', fontSize: '0.8rem', color: '#888', textTransform: 'uppercase', letterSpacing: '0.1em' }}>AI-Assisted</div>
          </div>
        </div>
        
        <div style={{ display: 'flex', flexDirection: 'column' }}>
          {skills.map((skill, idx) => (
            <SkillRow key={idx} {...skill} />
          ))}
        </div>
      </div>
    </main>
  );
}
