import RadarScan from "@/components/canvas/RadarScan";
import FlowField from "@/components/canvas/FlowField";
import MatrixRain from "@/components/canvas/MatrixRain";
import BoidsSimulation from "@/components/canvas/BoidsSimulation";

export default function LabPage() {
  return (
    <main style={{ padding: '6rem 0' }}>
      <div className="container">
        <h1 className="heading-hero">Lab</h1>
        <p className="text-muted" style={{ marginTop: '1rem', fontSize: '1.2rem' }}>Canvas and WebGL experiments.</p>
        
        <div style={{ marginTop: '4rem', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '2rem' }}>
          
          <div className="glow-border hud-bracket" style={{ padding: '2rem', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
            <h3 style={{ marginBottom: '2rem', color: 'var(--primary-accent)', fontSize: '0.9rem', letterSpacing: '0.1em' }}>[ SECTOR SCAN ]</h3>
            <RadarScan width={250} height={250} />
          </div>
          
          <div className="glow-border hud-bracket" style={{ padding: '2rem', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
            <h3 style={{ marginBottom: '2rem', color: 'var(--primary-accent)', fontSize: '0.9rem', letterSpacing: '0.1em' }}>[ FLOW FIELD ]</h3>
            <div style={{ width: '100%', height: 250 }}>
              <FlowField />
            </div>
          </div>
          
          <div className="glow-border hud-bracket" style={{ padding: '2rem', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
            <h3 style={{ marginBottom: '2rem', color: 'var(--primary-accent)', fontSize: '0.9rem', letterSpacing: '0.1em' }}>[ GLYPH RAIN ]</h3>
            <div style={{ width: '100%', height: 250 }}>
              <MatrixRain />
            </div>
          </div>
          
          <div className="glow-border hud-bracket" style={{ padding: '2rem', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
            <h3 style={{ marginBottom: '2rem', color: 'var(--primary-accent)', fontSize: '0.9rem', letterSpacing: '0.1em' }}>[ BOIDS FLOCK ]</h3>
            <div style={{ width: '100%', height: 250 }}>
              <BoidsSimulation />
            </div>
          </div>

        </div>
      </div>
    </main>
  );
}
