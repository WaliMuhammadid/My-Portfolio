'use client';
import { useState } from 'react';

export default function TerminalBlock({ prompt, command }: { prompt: string, command: string }) {
  const [copied, setCopied] = useState(false);

  const copyToClipboard = () => {
    navigator.clipboard.writeText(command);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="glow-border" style={{ backgroundColor: 'rgba(5, 5, 5, 0.8)', padding: '1rem', borderRadius: '4px', fontFamily: 'var(--font-mono)', margin: '1rem 0' }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '0.5rem', color: 'var(--muted)', fontSize: '0.8rem' }}>
        <span>{prompt}</span>
        <button 
          onClick={copyToClipboard}
          style={{ background: 'none', border: '1px solid var(--primary-accent)', color: 'var(--primary-accent)', padding: '0.2rem 0.5rem', borderRadius: '2px', cursor: 'pointer', transition: 'all 0.2s' }}
        >
          {copied ? 'COPIED TO CLIPBOARD [+]' : 'COPY'}
        </button>
      </div>
      <div style={{ color: 'var(--primary-accent)' }}>
        $ {command}
      </div>
    </div>
  );
}
