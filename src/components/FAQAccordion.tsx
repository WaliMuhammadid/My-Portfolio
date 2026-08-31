'use client';
import { useState } from 'react';
import styles from './FAQAccordion.module.css';

const faqs = [
  {
    question: "What kind of work can I hire Wali Muhammad for?",
    answer: "I specialize in AI-assisted web development, rapid prototyping, and fullstack engineering. I build web apps, mobile interfaces, and integrate modern AI workflows."
  },
  {
    question: "What does 'Vibe Coder' and 'AI-Assisted' mean?",
    answer: "As an AI-Assisted Developer, I use LLMs and agentic tools to write, refactor, and deploy code at incredible speed. 'Vibe Coding' means focusing heavily on aesthetics, animations, and the 'feel' of the user experience."
  },
  {
    question: "Is Wali available for new projects?",
    answer: "Yes! I am based in Karachi, Pakistan, currently studying Computer Science at UBIT. I am open to freelance projects, collaborations, and part-time roles."
  },
  {
    question: "How should a team start a conversation?",
    answer: "You can reach out via the email on my Contact page, or connect with me on LinkedIn. Send a brief message about your project and we can take it from there."
  }
];

const FAQAccordion = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className={styles.section} id="faq">
      <div className={styles.container}>
        <div className={styles.header}>

          <h2 className={styles.title}>What agents and teams usually ask.</h2>
          <p className={styles.desc}>Direct answers about services, availability, and collaboration.</p>
        </div>

        <div className={styles.accordion}>
          {faqs.map((faq, index) => (
            <div key={index} className={styles.item}>
              <button 
                className={styles.question} 
                onClick={() => toggle(index)}
              >
                {faq.question}
                <span className={styles.icon}>{openIndex === index ? '−' : '+'}</span>
              </button>
              <div 
                className={`${styles.answer} ${openIndex === index ? styles.open : ''}`}
              >
                <div className={styles.answerInner}>
                  {faq.answer}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQAccordion;
