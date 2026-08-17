import React, { useEffect, useRef } from 'react';

export default function TechBackground({ theme = 'dark' }) {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    
    let animationFrameId;
    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    const handleResize = () => {
      if (!canvas) return;
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    };

    window.addEventListener('resize', handleResize);

    const particleCount = Math.floor((width * height) / 20000);
    const particles = [];

    for (let i = 0; i < particleCount; i++) {
      particles.push({
        x: Math.random() * width,
        y: Math.random() * height,
        vx: (Math.random() - 0.5) * 0.45,
        vy: (Math.random() - 0.5) * 0.45,
        radius: Math.random() * 1.8 + 0.8,
        alpha: Math.random() * 0.6 + 0.3,
      });
    }

    const render = () => {
      ctx.clearRect(0, 0, width, height);

      const isDark = theme === 'dark';

      // 1. Dynamic Background Gradient based on Theme
      const bgGradient = ctx.createLinearGradient(0, 0, width, height);
      if (isDark) {
        bgGradient.addColorStop(0, '#030914');
        bgGradient.addColorStop(0.5, '#06132b');
        bgGradient.addColorStop(1, '#0a1d3c');
      } else {
        bgGradient.addColorStop(0, '#f8fafc');
        bgGradient.addColorStop(0.5, '#f1f5f9');
        bgGradient.addColorStop(1, '#e2e8f0');
      }
      ctx.fillStyle = bgGradient;
      ctx.fillRect(0, 0, width, height);

      // 2. Update and draw floating nodes cleanly without any grid or web lines
      for (let i = 0; i < particles.length; i++) {
        let p = particles[i];
        p.x += p.vx;
        p.y += p.vy;

        if (p.x < 0 || p.x > width) p.vx *= -1;
        if (p.y < 0 || p.y > height) p.vy *= -1;

        // Draw particle node
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
        ctx.fillStyle = isDark ? `rgba(34, 211, 238, ${p.alpha})` : `rgba(2, 132, 199, ${p.alpha * 0.8})`;
        ctx.fill();
      }

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      window.removeEventListener('resize', handleResize);
      cancelAnimationFrame(animationFrameId);
    };
  }, [theme]);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 w-full h-full pointer-events-none z-0"
    />
  );
}