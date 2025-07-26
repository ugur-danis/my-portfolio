'use client';

import { useEffect, useRef } from 'react';

export const MatrixRainBackground = () => {
    const canvasRef = useRef<HTMLCanvasElement>(null);

    useEffect(() => {
        const canvas = canvasRef.current!;
        const ctx = canvas.getContext('2d')!;
        let width = canvas.width = window.innerWidth;
        let height = canvas.height = window.innerHeight;

        const fontSize = 14;
        const columns = Math.floor(width / fontSize);
        const drops: number[] = Array(columns).fill(1);

        const characters = 'アァイィウヴカガキギクグケゲコゴサザシジスズセゼソゾタチツナニヌネノハヒフヘホマミムメモヤユヨラリルレロワヲンABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789'.split('');

        const draw = () => {
            // Saydam siyah arka planla eski karakterleri "sildir"
            ctx.fillStyle = '#111';
            ctx.fillRect(0, 0, width, height);

            ctx.fillStyle = '#0F0'; // Yeşil renk
            ctx.font = `${fontSize}px monospace`;

            for (let i = 0; i < drops.length; i++) {
                const text = characters[Math.floor(Math.random() * characters.length)];
                const x = i * fontSize;
                const y = drops[i] * fontSize;

                ctx.fillText(text, x, y);

                if (y > height && Math.random() > 0.975) {
                    drops[i] = 0;
                }

                drops[i]++;
            }

            requestAnimationFrame(draw);
        };

        draw();

        const handleResize = () => {
            width = canvas.width = window.innerWidth;
            height = canvas.height = window.innerHeight;
        };

        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    return (
        <canvas
            ref={canvasRef}
            className="fixed top-0 left-0 w-full h-full z-[-1] bg-black"
        />
    );
};
