import Link from 'next/link';

export default function AIWebDevelopment() {
  return (
    <main style={{ padding: '8rem 2rem', maxWidth: '800px', margin: '0 auto', minHeight: '100vh' }}>
      <Link href="/#portfolio" style={{ color: 'var(--primary-accent)', textDecoration: 'none', fontWeight: 600, fontSize: '0.9rem', letterSpacing: '0.05em' }}>
        ← BACK TO SERVICES
      </Link>
      
      <h1 style={{ fontSize: '3rem', fontWeight: 800, marginTop: '2rem', marginBottom: '1rem', letterSpacing: '-0.02em', lineHeight: 1.1 }}>
        AI-Assisted Web Development
      </h1>
      
      <div style={{ display: 'flex', gap: '1rem', marginBottom: '3rem' }}>
        <span style={{ padding: '0.25rem 0.75rem', borderRadius: '100px', border: '1px solid rgba(255,255,255,0.1)', fontSize: '0.8rem', color: '#aaa' }}>React / Next.js</span>
        <span style={{ padding: '0.25rem 0.75rem', borderRadius: '100px', border: '1px solid rgba(255,255,255,0.1)', fontSize: '0.8rem', color: '#aaa' }}>AI Workflows</span>
        <span style={{ padding: '0.25rem 0.75rem', borderRadius: '100px', border: '1px solid rgba(255,255,255,0.1)', fontSize: '0.8rem', color: '#aaa' }}>Prototyping</span>
      </div>

      <div style={{ color: '#ccc', fontSize: '1.1rem', lineHeight: 1.8, display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
        <p>
          In today's fast-paced digital landscape, speed and quality are non-negotiable. My AI-Assisted Web Development service leverages cutting-edge AI tools (like GitHub Copilot, Cursor, and custom LLM scripts) to drastically reduce development time while maintaining enterprise-grade code quality.
        </p>
        <p>
          Whether you need a rapid prototype to test a market hypothesis or a robust, scalable web application built from the ground up, I combine AI efficiency with deep technical expertise in React and Next.js.
        </p>
        
        <h2 style={{ color: '#fff', fontSize: '1.5rem', marginTop: '2rem', marginBottom: '0.5rem' }}>Deliverables</h2>
        <ul style={{ listStyleType: 'disc', paddingLeft: '1.5rem', display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
          <li>Production-ready Next.js application</li>
          <li>Responsive, accessible UI components</li>
          <li>Optimized performance & SEO</li>
          <li>Clean, documented codebase generated via AI-native workflows</li>
        </ul>

        <div style={{ marginTop: '4rem', padding: '2rem', border: '1px solid rgba(255,255,255,0.1)', borderRadius: '12px', backgroundColor: 'rgba(255,255,255,0.02)', textAlign: 'center' }}>
          <h3 style={{ color: '#fff', marginBottom: '1rem', fontSize: '1.5rem' }}>Ready to accelerate your project?</h3>
          <p style={{ marginBottom: '2rem', fontSize: '0.95rem' }}>Let's discuss how we can build your idea faster and better.</p>
          <Link href="/contact" style={{ display: 'inline-block', backgroundColor: 'var(--primary-accent)', color: '#000', padding: '0.75rem 2rem', borderRadius: '4px', fontWeight: 600, textDecoration: 'none' }}>
            Book a Call
          </Link>
        </div>
      </div>
    </main>
  );
}
