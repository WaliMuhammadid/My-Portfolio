import TerminalBlock from "@/components/TerminalBlock";

export default function AgentsPage() {
  return (
    <main style={{ padding: '6rem 0' }}>
      <div className="container">
        <h1 className="heading-hero">Agents</h1>
        <p className="text-muted" style={{ marginTop: '1rem', fontSize: '1.2rem' }}>Machine-readable endpoints for autonomous agents.</p>
        
        <div style={{ marginTop: '4rem' }}>
          <TerminalBlock prompt="Fetch MCP Spec" command="curl https://WaliMuhammad.dev/mcp.json" />
          <TerminalBlock prompt="Agent Capabilities" command="curl -H 'Accept: application/vnd.agent+json' https://WaliMuhammad.dev/capabilities" />
        </div>
      </div>
    </main>
  );
}
