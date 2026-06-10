import { useEffect, useRef } from 'react';

export default function CursorGlow() {
  const glowRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const isFinePointer = window.matchMedia('(pointer: fine)').matches;
    const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (!isFinePointer || prefersReduced) return;

    let mouseX = window.innerWidth / 2;
    let mouseY = window.innerHeight / 2;
    let x = mouseX;
    let y = mouseY;
    let frame: number;

    const onMove = (e: MouseEvent) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
    };

    const tick = () => {
      x += (mouseX - x) * 0.12;
      y += (mouseY - y) * 0.12;
      if (glowRef.current) {
        glowRef.current.style.transform = `translate(${x - 250}px, ${y - 250}px)`;
      }
      frame = requestAnimationFrame(tick);
    };

    window.addEventListener('mousemove', onMove, { passive: true });
    frame = requestAnimationFrame(tick);

    return () => {
      window.removeEventListener('mousemove', onMove);
      cancelAnimationFrame(frame);
    };
  }, []);

  return (
    <div
      ref={glowRef}
      aria-hidden="true"
      className="fixed top-0 left-0 w-[500px] h-[500px] rounded-full pointer-events-none z-0 hidden md:block"
      style={{
        background:
          'radial-gradient(circle, hsl(var(--primary) / 0.06) 0%, hsl(var(--accent) / 0.04) 35%, transparent 70%)',
        willChange: 'transform',
      }}
    />
  );
}
