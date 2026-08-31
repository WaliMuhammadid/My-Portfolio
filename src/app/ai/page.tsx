
export default function AIPage() {
  return (
    <main style={{ padding: '6rem 0' }}>
      <div className="container">
        <h1 className="heading-hero">AI Engineering</h1>
        <p className="text-muted" style={{ marginTop: '1rem', fontSize: '1.2rem' }}>Building robust agentic workflows.</p>
        
        <div className="glow-border" style={{ marginTop: '4rem', padding: '2rem' }}>
          <pre style={{ color: 'var(--primary-accent)', overflowX: 'auto' }}>
            {`// System Prompt Example
{
  role: "system",
  content: "You are an autonomous agent capable of resolving complex web engineering tasks. Prioritize clean, scalable code."
}`}
          </pre>
        </div>
      </div>
    </main>
  );
}
