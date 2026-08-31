
import Timeline from "@/components/Timeline";

export default function AboutPage() {
  const events = [
    { year: 'Sep 2025 – Dec 2025', title: 'Flutter Frontend Intern — Nativodds', description: 'Built responsive mobile user interfaces with Flutter, focusing on state handling, design consistency, and mobile UX best practices.' },
    { year: 'Feb 2024 – Present', title: 'Education — BS in Software Engineering / Computer Science', description: 'UBIT, University of Karachi. Focus: AI-assisted engineering, rapid software prototyping, cloud-native deployments, and core computer science.' }
  ];

  return (
    <main style={{ padding: '6rem 0' }}>
      <div className="container">
        <h1 className="heading-hero">About</h1>
        
        <p style={{ color: '#a0a0a0', fontSize: '1.15rem', maxWidth: '800px', lineHeight: 1.8, marginTop: '2rem' }}>
          Hi, I&apos;m <span style={{ color: 'var(--foreground)' }}>Wali Muhammad</span>, a Computer Science student at UBIT, Karachi, and an <strong>AI-Assisted Developer</strong> passionate about <em>Vibe Coding</em>. 
          I leverage modern AI tools—like Cursor, Lovable, and advanced LLM agents—to rapidly prototype and build robust fullstack web apps and stunning mobile interfaces. 
          By combining my core engineering skills in TypeScript, Python, and Flutter with a heavily automated AI workflow, I accelerate delivery cycles while keeping a sharp focus on clean code, seamless interactions, and high-quality UI/UX design.
        </p>
        
        <div style={{ marginTop: '4rem', display: 'flex', gap: '4rem', flexWrap: 'wrap' }}>
          
          <div style={{ flex: '1 1 400px' }}>
            <h2 style={{ marginBottom: '2rem' }}>Career Timeline</h2>
            <Timeline events={events} />
          </div>

          <div style={{ flex: '1 1 300px' }}>
            <div>
              <h3 style={{ color: 'var(--primary-accent)', marginBottom: '1rem' }}>{'>'} SYSTEM_SPECS</h3>
              <ul style={{ listStyleType: 'none', padding: 0, margin: 0, display: 'flex', gap: '0.5rem', flexWrap: 'wrap' }}>
                {['TypeScript', 'Python', 'Dart', 'Flutter', 'Node.js', 'Cursor AI', 'Linux'].map(skill => (
                  <li key={skill} style={{ border: '1px solid var(--primary-accent)', padding: '0.2rem 0.5rem', fontSize: '0.8rem', color: 'var(--primary-accent)' }}>
                    {skill}
                  </li>
                ))}
              </ul>
            </div>
          </div>

        </div>
      </div>
    </main>
  );
}
