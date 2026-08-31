import { useState, useEffect, useCallback } from 'react';

const CHARACTERS = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789@#$%^&*()_+{}|[]\\;:,./<>?';

export function useTextScramble(finalText: string, active: boolean = true) {
  const [text, setText] = useState(finalText);

  const scramble = useCallback(() => {
    if (!active || !finalText) return;
    let iteration = 0;
    const maxIterations = finalText.length;
    
    const interval = setInterval(() => {
      setText(
        finalText
          .split("")
          .map((letter, index) => {
            if(index < iteration || letter === ' ') {
              return finalText[index];
            }
            return CHARACTERS[Math.floor(Math.random() * CHARACTERS.length)]
          })
          .join("")
      );
      
      if(iteration >= maxIterations) {
        clearInterval(interval);
      }
      
      iteration += 1 / 3; 
    }, 30);

    return () => clearInterval(interval);
  }, [finalText, active]);

  useEffect(() => {
    const cleanup = scramble();
    return () => {
      if(cleanup) cleanup();
    }
  }, [scramble]);

  return text;
}
