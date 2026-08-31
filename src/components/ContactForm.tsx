'use client';
import { useState } from 'react';
import styles from './ContactForm.module.css';

export default function ContactForm() {
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success'>('idle');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('submitting');
    
    const name = (document.getElementById('name') as HTMLInputElement).value;
    const email = (document.getElementById('email') as HTMLInputElement).value;
    const message = (document.getElementById('message') as HTMLTextAreaElement).value;
    
    try {
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json'
        },
        body: JSON.stringify({
          access_key: '6810a6f6-aca4-49cb-9977-aea2eb1fe3b2',
          name: name,
          email: email,
          message: message,
          subject: `New Portfolio Inquiry from ${name}`
        })
      });

      const result = await response.json();
      
      if (result.success) {
        setStatus('success');
        (e.target as HTMLFormElement).reset();
        setTimeout(() => setStatus('idle'), 3000);
      } else {
        console.error('Error submitting form', result);
        setStatus('idle');
        alert('Failed to send message. Please try again.');
      }
    } catch (error) {
      console.error('Error submitting form', error);
      setStatus('idle');
      alert('Something went wrong. Please try again.');
    }
  };

  return (
    <form className={styles.form} onSubmit={handleSubmit}>
      <div className={styles.inputGroup}>
        <label htmlFor="name">IDENTIFIER</label>
        <input type="text" id="name" required placeholder="GUEST_USER" />
      </div>
      <div className={styles.inputGroup}>
        <label htmlFor="email">COMMLINK_ADDRESS</label>
        <input type="email" id="email" required placeholder="user@node.net" />
      </div>
      <div className={styles.inputGroup}>
        <label htmlFor="message">PAYLOAD</label>
        <textarea id="message" required rows={5} placeholder="Enter transmission..." />
      </div>
      
      <button 
        type="submit" 
        className={styles.submitBtn} 
        disabled={status !== 'idle'}
      >
        {status === 'idle' ? '[ TRANSMIT DATA ]' : status === 'submitting' ? 'UPLOADING...' : 'TRANSMISSION SUCCESS'}
      </button>
    </form>
  );
}
