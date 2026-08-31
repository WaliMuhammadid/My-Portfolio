import Link from 'next/link';

export default function FullstackEngineering() {
  return (
    <main style={{ padding: '8rem 2rem', maxWidth: '800px', margin: '0 auto', minHeight: '100vh' }}>
      <Link href="/#portfolio" style={{ color: 'var(--primary-accent)', textDecoration: 'none', fontWeight: 600, fontSize: '0.9rem', letterSpacing: '0.05em' }}>
        ← BACK TO SERVICES
      </Link>
      
      <h1 style={{ fontSize: '3rem', fontWeight: 800, marginTop: '2rem', marginBottom: '1rem', letterSpacing: '-0.02em', lineHeight: 1.1 }}>
        Fullstack Engineering
      </h1>
      
      <div style={{ display: 'flex', gap: '1rem', marginBottom: '3rem' }}>
        <span style={{ padding: '0.25rem 0.75rem', borderRadius: '100px', border: '1px solid rgba(255,255,255,0.1)', fontSize: '0.8rem', color: '#aaa' }}>Node.js</span>
        <span style={{ padding: '0.25rem 0.75rem', borderRadius: '100px', border: '1px solid rgba(255,255,255,0.1)', fontSize: '0.8rem', color: '#aaa' }}>TypeScript</span>
        <span style={{ padding: '0.25rem 0.75rem', borderRadius: '100px', border: '1px solid rgba(255,255,255,0.1)', fontSize: '0.8rem', color: '#aaa' }}>Databases</span>
      </div>

      <div style={{ color: '#ccc', fontSize: '1.1rem', lineHeight: 1.8, display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
        <p>
          A great user interface means nothing without a robust, scalable backend to support it. My Fullstack Engineering service covers the entire spectrum of application development, from database schema design and secure API creation to seamless frontend integration.
        </p>
        <p>
          I specialize in the modern TypeScript ecosystem (Node.js, Express, Next.js API routes) to build highly performant, type-safe architectures that are easy to maintain and scale as your user base grows.
        </p>
        
        <h2 style={{ color: '#fff', fontSize: '1.5rem', marginTop: '2rem', marginBottom: '0.5rem' }}>Deliverables</h2>
        <ul style={{ listStyleType: 'disc', paddingLeft: '1.5rem', display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
          <li>Secure REST or GraphQL APIs</li>
          <li>Optimized database schemas (SQL or NoSQL)</li>
          <li>Authentication and authorization flows</li>
          <li>Seamless integration between frontend and backend systems</li>
        </ul>

        <div style={{ marginTop: '4rem', padding: '2rem', border: '1px solid rgba(255,255,255,0.1)', borderRadius: '12px', backgroundColor: 'rgba(255,255,255,0.02)', textAlign: 'center' }}>
          <h3 style={{ color: '#fff', marginBottom: '1rem', fontSize: '1.5rem' }}>Need a complete solution?</h3>
          <p style={{ marginBottom: '2rem', fontSize: '0.95rem' }}>Let's build a robust architecture for your next big idea.</p>
          <Link href="/contact" style={{ display: 'inline-block', backgroundColor: 'var(--primary-accent)', color: '#000', padding: '0.75rem 2rem', borderRadius: '4px', fontWeight: 600, textDecoration: 'none' }}>
            Book a Call
          </Link>
        </div>
      </div>
    </main>
  );
}
