import Link from 'next/link';

export default function UIUXDesign() {
  return (
    <main style={{ padding: '8rem 2rem', maxWidth: '800px', margin: '0 auto', minHeight: '100vh' }}>
      <Link href="/#portfolio" style={{ color: 'var(--primary-accent)', textDecoration: 'none', fontWeight: 600, fontSize: '0.9rem', letterSpacing: '0.05em' }}>
        ← BACK TO SERVICES
      </Link>
      
      <h1 style={{ fontSize: '3rem', fontWeight: 800, marginTop: '2rem', marginBottom: '1rem', letterSpacing: '-0.02em', lineHeight: 1.1 }}>
        UI/UX & Vibe Coding
      </h1>
      
      <div style={{ display: 'flex', gap: '1rem', marginBottom: '3rem' }}>
        <span style={{ padding: '0.25rem 0.75rem', borderRadius: '100px', border: '1px solid rgba(255,255,255,0.1)', fontSize: '0.8rem', color: '#aaa' }}>CSS Animations</span>
        <span style={{ padding: '0.25rem 0.75rem', borderRadius: '100px', border: '1px solid rgba(255,255,255,0.1)', fontSize: '0.8rem', color: '#aaa' }}>Frontend</span>
        <span style={{ padding: '0.25rem 0.75rem', borderRadius: '100px', border: '1px solid rgba(255,255,255,0.1)', fontSize: '0.8rem', color: '#aaa' }}>Creative Dev</span>
      </div>

      <div style={{ color: '#ccc', fontSize: '1.1rem', lineHeight: 1.8, display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
        <p>
          First impressions matter. My UI/UX & Vibe Coding service is dedicated to crafting visually striking, animated, and highly interactive user interfaces that deliver a premium, modern 'vibe' to your users. 
        </p>
        <p>
          Moving beyond standard templates, I focus on micro-interactions, custom CSS animations, smooth transitions, and dark-mode aesthetics to create digital experiences that feel alive, responsive, and truly memorable.
        </p>
        
        <h2 style={{ color: '#fff', fontSize: '1.5rem', marginTop: '2rem', marginBottom: '0.5rem' }}>Deliverables</h2>
        <ul style={{ listStyleType: 'disc', paddingLeft: '1.5rem', display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
          <li>Custom, high-fidelity UI design implementation</li>
          <li>Fluid CSS and Framer Motion animations</li>
          <li>Responsive layouts tailored for all device sizes</li>
          <li>Interactive, engaging user experiences</li>
        </ul>

        <div style={{ marginTop: '4rem', padding: '2rem', border: '1px solid rgba(255,255,255,0.1)', borderRadius: '12px', backgroundColor: 'rgba(255,255,255,0.02)', textAlign: 'center' }}>
          <h3 style={{ color: '#fff', marginBottom: '1rem', fontSize: '1.5rem' }}>Ready to elevate your digital presence?</h3>
          <p style={{ marginBottom: '2rem', fontSize: '0.95rem' }}>Let's craft an interface that leaves a lasting impression.</p>
          <Link href="/contact" style={{ display: 'inline-block', backgroundColor: 'var(--primary-accent)', color: '#000', padding: '0.75rem 2rem', borderRadius: '4px', fontWeight: 600, textDecoration: 'none' }}>
            Book a Call
          </Link>
        </div>
      </div>
    </main>
  );
}
