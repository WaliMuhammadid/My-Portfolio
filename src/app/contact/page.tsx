import TerminalBlock from "@/components/TerminalBlock";
import ContactCTA from "@/components/ContactCTA";
import ContactForm from "@/components/ContactForm";

export default function ContactPage() {
  return (
    <main style={{ padding: '6rem 0' }}>
      <div className="container">
        <h1 className="heading-hero">Contact</h1>
        <p className="text-muted" style={{ marginTop: '1rem', fontSize: '1.2rem' }}>Initiate handshake.</p>
        
        <div style={{ marginTop: '4rem', marginBottom: '4rem', display: 'flex', gap: '4rem', flexWrap: 'wrap' }}>
          
          <div style={{ flex: '1 1 400px' }}>
             <h2 style={{ marginBottom: '2rem', color: 'var(--primary-accent)', fontSize: '1.2rem' }}>// DIRECT MESSAGE</h2>
             <div className="glow-border hud-bracket" style={{ padding: '2rem' }}>
               <ContactForm />
             </div>
          </div>
          
          <div style={{ flex: '1 1 300px' }}>
            <h2 style={{ marginBottom: '2rem', color: 'var(--primary-accent)', fontSize: '1.2rem' }}>// OTHER PROTOCOLS</h2>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
              <TerminalBlock prompt="Email Protocol" command="mailto:walimuhammadid@gmail.com" />
              <TerminalBlock prompt="WhatsApp/Phone" command="+92 321 2619718" />
              <TerminalBlock prompt="GitHub Protocol" command="https://github.com/WaliMuhammadid" />
              <TerminalBlock prompt="LinkedIn Protocol" command="https://linkedin.com/in/wali-muhammad1" />
            </div>
          </div>
          
        </div>

        
        <ContactCTA />
      </div>
    </main>
  );
}
