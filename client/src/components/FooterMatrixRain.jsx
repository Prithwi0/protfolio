import React, { useEffect } from 'react';
import '../styles/footerMatrixRain.css';

const FooterMatrixRain = () => {
    useEffect(() => {
        const footer = document.querySelector('.footer');
        if (!footer) return;

        const canvas = document.createElement('canvas');
        canvas.className = 'footer-matrix-canvas';
        footer.insertBefore(canvas, footer.firstChild);

        const ctx = canvas.getContext('2d');
        
        const updateCanvasSize = () => {
            canvas.width = footer.offsetWidth;
            canvas.height = footer.offsetHeight;
        };

        updateCanvasSize();

        // Create vertical line effect
        const draw = () => {
            // Very subtle fade
            ctx.fillStyle = 'rgba(0, 0, 0, 0.05)';
            ctx.fillRect(0, 0, canvas.width, canvas.height);

            // Draw animated vertical lines
            ctx.strokeStyle = 'rgba(0, 255, 65, 0.05)';
            ctx.lineWidth = 1;

            const time = Date.now() * 0.0002;
            
            for (let x = 0; x < canvas.width; x += 40) {
                ctx.beginPath();
                const offset = Math.sin(time + x * 0.001) * 20;
                ctx.moveTo(x + offset, 0);
                ctx.lineTo(x + offset - Math.cos(time) * 10, canvas.height);
                ctx.stroke();
            }

            // Add flowing particles
            ctx.fillStyle = 'rgba(0, 255, 65, 0.08)';
            for (let i = 0; i < 3; i++) {
                const x = (time * 100 + i * 400) % canvas.width;
                const y = canvas.height / 2;
                ctx.fillRect(x, y + Math.sin(time + i) * 20, 2, 2);
            }

            requestAnimationFrame(draw);
        };

        draw();

        const handleResize = () => {
            updateCanvasSize();
        };

        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('resize', handleResize);
            if (canvas && canvas.parentNode) {
                canvas.parentNode.removeChild(canvas);
            }
        };
    }, []);

    return null;
};

export default FooterMatrixRain;
