import React, { useEffect } from 'react';
import '../styles/sectionMatrixRain.css';

const SectionMatrixRain = ({ sectionId = 'matrix-section' }) => {
    const chars = '0 1 0 1 0 1 0 1 0 1';
    const codeChars = '{ } < > [ ] ( ) @ # $ % & * + - = / \\';

    useEffect(() => {
        const container = document.getElementById(sectionId);
        if (!container) return;

        // Create canvas
        const canvas = document.createElement('canvas');
        canvas.id = `${sectionId}-canvas`;
        canvas.className = 'section-matrix-canvas';
        container.appendChild(canvas);

        const ctx = canvas.getContext('2d');
        
        const updateCanvasSize = () => {
            canvas.width = container.offsetWidth;
            canvas.height = container.offsetHeight;
        };

        updateCanvasSize();
        window.addEventListener('resize', updateCanvasSize);

        const fontSize = 12;
        const columns = Math.ceil(canvas.width / fontSize);
        const drops = Array(columns).fill(Math.random() * -100);
        const allChars = codeChars.split(' ');

        const draw = () => {
            ctx.fillStyle = 'rgba(0, 0, 0, 0.03)';
            ctx.fillRect(0, 0, canvas.width, canvas.height);

            ctx.fillStyle = 'rgba(0, 255, 65, 0.5)';
            ctx.font = `bold ${fontSize}px 'Courier New', monospace`;

            for (let i = 0; i < drops.length; i++) {
                const text = allChars[Math.floor(Math.random() * allChars.length)];
                const y = drops[i] * fontSize;
                
                if (y > 0 && y < canvas.height) {
                    ctx.fillText(text, i * fontSize, y);
                }

                if (drops[i] * fontSize > canvas.height) {
                    drops[i] = Math.random() * -50;
                } else {
                    drops[i] += Math.random() * 0.3 + 0.2;
                }
            }

            requestAnimationFrame(draw);
        };

        draw();

        return () => {
            window.removeEventListener('resize', updateCanvasSize);
            if (canvas && canvas.parentNode) {
                canvas.parentNode.removeChild(canvas);
            }
        };
    }, [sectionId]);

    return null;
};

export default SectionMatrixRain;
