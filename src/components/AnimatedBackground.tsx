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

    const count = isMobile ? 18 : 45;

    for (let i = 0; i < count; i++) {
      particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        z: Math.random() * 1000,
        vx: (Math.random() - 0.5) * 0.5,
        vy: (Math.random() - 0.5) * 0.5,
        vz: (Math.random() - 0.5) * 2,
        size: Math.random() * 2 + 1,
        hue: 200 + Math.random() * 40,
      });
    }

    let mouseX = canvas.width / 2;
    let mouseY = canvas.height / 2;

    const handleMouse = (e: MouseEvent) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
    };
    if (!isMobile) window.addEventListener('mousemove', handleMouse);

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // Sort by z for depth
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

        // 3D perspective projection
        const perspective = 800;
        const scale = perspective / (perspective + p.z);
        const screenX = (p.x - canvas.width / 2) * scale + canvas.width / 2;
        const screenY = (p.y - canvas.height / 2) * scale + canvas.height / 2;
        const r = p.size * scale;

        const alpha = Math.max(0.05, 0.6 * scale);

        // Glow
        const gradient = ctx.createRadialGradient(screenX, screenY, 0, screenX, screenY, r * 8);
        gradient.addColorStop(0, `hsla(${p.hue}, 80%, 65%, ${alpha})`);
        gradient.addColorStop(0.4, `hsla(${p.hue}, 70%, 55%, ${alpha * 0.3})`);
        gradient.addColorStop(1, `hsla(${p.hue}, 60%, 50%, 0)`);
        ctx.fillStyle = gradient;
        ctx.beginPath();
        ctx.arc(screenX, screenY, r * 8, 0, Math.PI * 2);
        ctx.fill();

        // Core dot
        ctx.fillStyle = `hsla(${p.hue}, 90%, 75%, ${alpha})`;
        ctx.beginPath();
        ctx.arc(screenX, screenY, r, 0, Math.PI * 2);
        ctx.fill();
      }

      // Lightweight mouse attraction (desktop only, no O(n²) connections)
      if (!isMobile) {
        for (const p of particles) {
          const scale = 800 / (800 + p.z);
          const sx = (p.x - canvas.width / 2) * scale + canvas.width / 2;
          const sy = (p.y - canvas.height / 2) * scale + canvas.height / 2;
          const dx = mouseX - sx, dy = mouseY - sy;
          const distSq = dx * dx + dy * dy;
          if (distSq < 40000) {
            const force = (1 - Math.sqrt(distSq) / 200) * 0.0002;
            p.vx += dx * force;
            p.vy += dy * force;
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

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 -z-10"
      style={{ pointerEvents: 'none' }}
    />
  );
}
