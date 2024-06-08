        import React, { useState, useEffect } from 'react';

        interface FocusableProps {
            id: string;
            tabIndex: number;
            children: any;
        }

        export default function FocusableComponent({ id, tabIndex, children }: FocusableProps) {
            const [focusedIndex, setFocusedIndex] = useState(-1);
            const focusableElements = ['text1', 'text2', 'text3', 'text4', 'text5','text6','text7', 'text8', 'text9','text10','text11','text12','text13','text14','text15','text16','text17','text18','text19','text20','text21','text22','text23','text24','text25','text26','text27','text28','text29','text30','text31','text32','text33','text34','text35','text36','text37','text38','text39','text40'];

            useEffect(() => {
                const handleKeyDown = (event: KeyboardEvent) => {
                    if (event.key === 'Tab') {
                        event.preventDefault();
                        const nextIndex = focusedIndex + 1 < focusableElements.length ? focusedIndex + 1 : 0;
                        setFocusedIndex(nextIndex);
                        document.getElementById(focusableElements[nextIndex])?.focus();
                    }
                };

                window.addEventListener('keydown', handleKeyDown);
                return () => {
                    window.removeEventListener('keydown', handleKeyDown);
                };
            }, [focusedIndex, focusableElements]);

            return (
                <div id={id} tabIndex={tabIndex} onFocus={() => setFocusedIndex(tabIndex)}>
                    {children}
                </div>
            );
        }
