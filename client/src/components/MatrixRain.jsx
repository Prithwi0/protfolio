import React, { useEffect } from 'react';
import '../styles/matrixRain.css';

const MatrixRain = () => {
    const chars = '> { < [ ] } ( ) > + = - * / % & | ^ ! ~ ? : ; , . " \' \\ / @#$&ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';

    useEffect(() => {
        const canvas = document.getElementById('matrix-canvas');
        if (!canvas) return;

        const ctx = canvas.getContext('2d');
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;

        const fontSize = 14;
        const columns = Math.ceil(canvas.width / fontSize);
        const drops = Array(columns).fill(0);

        const draw = () => {
            // Fade out effect
            ctx.fillStyle = 'rgba(0, 0, 0, 0.05)';
            ctx.fillRect(0, 0, canvas.width, canvas.height);

            // Green text - maximum brightness
            ctx.fillStyle = 'rgba(0, 255, 65, 0.5)';
            ctx.font = `${fontSize}px 'Courier New', monospace`;

            for (let i = 0; i < drops.length; i++) {
                const text = chars[Math.floor(Math.random() * chars.length)];
                ctx.fillText(text, i * fontSize, drops[i] * fontSize);

                // Reset drop to top
                if (drops[i] * fontSize > canvas.height) {
                    drops[i] = 0;
                } else {
                    drops[i] += Math.random() * 0.5 + 0.3;
                }
            }

            requestAnimationFrame(draw);
        };

        draw();

        const handleResize = () => {
            canvas.width = window.innerWidth;
            canvas.height = window.innerHeight;
        };

        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    return <canvas id="matrix-canvas" className="matrix-canvas"></canvas>;
};

export default MatrixRain;
