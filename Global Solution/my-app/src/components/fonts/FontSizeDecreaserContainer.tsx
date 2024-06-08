import React, { useState, useEffect } from 'react';

function FontSizeDecreaserContainer() {
  const [isFontDownEnabled, setIsFontDownEnabled] = useState(() => {
    if (typeof window !== 'undefined') {
      const storedValue = localStorage.getItem('isFontDownEnabled');
      return storedValue ? JSON.parse(storedValue) : false;
    }
    return false;
  });

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (isFontDownEnabled && event.key === 'ArrowDown') {
        const elements = document.querySelectorAll('[class^="text-"]');
        elements.forEach((element) => {
          if (element instanceof HTMLElement) {
            const computedStyle = window.getComputedStyle(element);
            const currentFontSize = parseFloat(computedStyle.fontSize);
            const newFontSize = currentFontSize - 2; // Diminui o tamanho da fonte em 2 pixels
            element.style.fontSize = `${newFontSize}px`;
          }
        });
      }
    };

    window.addEventListener('keydown', handleKeyDown);

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isFontDownEnabled]);

  return null;
}

export default FontSizeDecreaserContainer;
