import { useEffect, useRef } from 'react';
import { useIsMobile } from '@/hooks/use-mobile';

export default function AnimatedBackground() {
  const isMobile = useIsMobile();
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationId: number;
    let particles: Array<{
      x: number; y: number; z: number;
      vx: number; vy: number; vz: number;
      size: number; hue: number;
    }> = [];

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    resize();
    window.addEventListener('resize', resize);

    const count = isMobile ? 25 : 60;
    for (let i = 0; i < count; i++) {
      particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        z: Math.random() * 1000,
        vx: (Math.random() - 0.5) * 0.3,
        vy: (Math.random() - 0.5) * 0.3,
        vz: (Math.random() - 0.5) * 1.5,
        size: Math.random() * 2 + 0.5,
        hue: 250 + Math.random() * 60, // purple to cyan range
      });
    }

    let mouseX = canvas.width / 2;
    let mouseY = canvas.height / 2;
    const handleMouse = (e: MouseEvent) => { mouseX = e.clientX; mouseY = e.clientY; };
    if (!isMobile) window.addEventListener('mousemove', handleMouse);

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // Radial gradient orbs (background)
      const orb1X = canvas.width * 0.2 + Math.sin(Date.now() * 0.0003) * 100;
      const orb1Y = canvas.height * 0.3 + Math.cos(Date.now() * 0.0004) * 80;
      const g1 = ctx.createRadialGradient(orb1X, orb1Y, 0, orb1X, orb1Y, 400);
      g1.addColorStop(0, 'hsla(263, 70%, 58%, 0.08)');
      g1.addColorStop(1, 'transparent');
      ctx.fillStyle = g1;
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      const orb2X = canvas.width * 0.8 + Math.cos(Date.now() * 0.0003) * 120;
      const orb2Y = canvas.height * 0.6 + Math.sin(Date.now() * 0.0005) * 100;
      const g2 = ctx.createRadialGradient(orb2X, orb2Y, 0, orb2X, orb2Y, 350);
      g2.addColorStop(0, 'hsla(190, 80%, 50%, 0.06)');
      g2.addColorStop(1, 'transparent');
      ctx.fillStyle = g2;
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      particles.sort((a, b) => b.z - a.z);

      for (const p of particles) {
        p.x += p.vx;
        p.y += p.vy;
        p.z += p.vz;
        if (p.z < 1) p.z = 1000;
        if (p.z > 1000) p.z = 1;
        if (p.x < 0) p.x = canvas.width;
        if (p.x > canvas.width) p.x = 0;
        if (p.y < 0) p.y = canvas.height;
        if (p.y > canvas.height) p.y = 0;

        const perspective = 800;
        const scale = perspective / (perspective + p.z);
        const sx = (p.x - canvas.width / 2) * scale + canvas.width / 2;
        const sy = (p.y - canvas.height / 2) * scale + canvas.height / 2;
        const r = p.size * scale;
        const alpha = Math.max(0.05, 0.5 * scale);

        // Glow
        const gradient = ctx.createRadialGradient(sx, sy, 0, sx, sy, r * 10);
        gradient.addColorStop(0, `hsla(${p.hue}, 80%, 65%, ${alpha * 0.6})`);
        gradient.addColorStop(0.5, `hsla(${p.hue}, 70%, 55%, ${alpha * 0.15})`);
        gradient.addColorStop(1, `hsla(${p.hue}, 60%, 50%, 0)`);
        ctx.fillStyle = gradient;
        ctx.beginPath();
        ctx.arc(sx, sy, r * 10, 0, Math.PI * 2);
        ctx.fill();

        // Core
        ctx.fillStyle = `hsla(${p.hue}, 90%, 75%, ${alpha * 0.8})`;
        ctx.beginPath();
        ctx.arc(sx, sy, r, 0, Math.PI * 2);
        ctx.fill();
      }

      // Connections (desktop only)
      if (!isMobile) {
        for (let i = 0; i < particles.length; i++) {
          for (let j = i + 1; j < particles.length; j++) {
            const a = particles[i], b = particles[j];
            const dx = a.x - b.x, dy = a.y - b.y;
            const dist = Math.sqrt(dx * dx + dy * dy);
            if (dist < 180 && Math.abs(a.z - b.z) < 300) {
              const sA = 800 / (800 + a.z), sB = 800 / (800 + b.z);
              const sxA = (a.x - canvas.width / 2) * sA + canvas.width / 2;
              const syA = (a.y - canvas.height / 2) * sA + canvas.height / 2;
              const sxB = (b.x - canvas.width / 2) * sB + canvas.width / 2;
              const syB = (b.y - canvas.height / 2) * sB + canvas.height / 2;
              const lineAlpha = (1 - dist / 180) * 0.12 * Math.min(sA, sB);
              ctx.strokeStyle = `hsla(263, 60%, 60%, ${lineAlpha})`;
              ctx.lineWidth = 0.5;
              ctx.beginPath();
              ctx.moveTo(sxA, syA);
              ctx.lineTo(sxB, syB);
              ctx.stroke();
            }
          }
        }

        for (const p of particles) {
          const scale = 800 / (800 + p.z);
          const sx = (p.x - canvas.width / 2) * scale + canvas.width / 2;
          const sy = (p.y - canvas.height / 2) * scale + canvas.height / 2;
          const dx = mouseX - sx, dy = mouseY - sy;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < 200) {
            const force = (1 - dist / 200) * 0.015;
            p.vx += dx * force * 0.01;
            p.vy += dy * force * 0.01;
          }
          p.vx *= 0.99;
          p.vy *= 0.99;
        }
      }

      animationId = requestAnimationFrame(animate);
    };

    animate();
    return () => {
      cancelAnimationFrame(animationId);
      window.removeEventListener('resize', resize);
      window.removeEventListener('mousemove', handleMouse);
    };
  }, [isMobile]);

  return <canvas ref={canvasRef} className="fixed inset-0 -z-10" style={{ pointerEvents: 'none' }} />;
}