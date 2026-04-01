import { motion, AnimatePresence } from 'framer-motion';
import { useState, useEffect } from 'react';

export default function ShutterSplash({ onComplete }: { onComplete: () => void }) {
  const [phase, setPhase] = useState<'welcome' | 'opening' | 'done'>('welcome');

  useEffect(() => {
    const t1 = setTimeout(() => setPhase('opening'), 2500);
    const t2 = setTimeout(() => { setPhase('done'); onComplete(); }, 3600);
    return () => { clearTimeout(t1); clearTimeout(t2); };
  }, [onComplete]);

  return (
    <AnimatePresence>
      {phase !== 'done' && (
        <div className="fixed inset-0 z-[9999] pointer-events-none">
          {/* Top shutter */}
          <motion.div
            className="absolute top-0 left-0 w-full h-1/2 flex items-end justify-center"
            style={{
              background: 'linear-gradient(180deg, hsl(240 10% 4%) 0%, hsl(240 10% 6%) 100%)',
              borderBottom: '1px solid hsl(263 70% 58% / 0.4)',
            }}
            initial={{ y: 0 }}
            animate={phase === 'opening' ? { y: '-100%' } : { y: 0 }}
            transition={{ duration: 1, ease: [0.76, 0, 0.24, 1] }}
          >
            <motion.span
              className="font-display text-5xl md:text-7xl lg:text-9xl font-bold pb-1 tracking-wider select-none glow-text text-gradient"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
            >
              WELCOME
            </motion.span>
          </motion.div>

          {/* Bottom shutter */}
          <motion.div
            className="absolute bottom-0 left-0 w-full h-1/2 flex items-start justify-center"
            style={{
              background: 'linear-gradient(0deg, hsl(240 10% 4%) 0%, hsl(240 10% 6%) 100%)',
              borderTop: '1px solid hsl(263 70% 58% / 0.4)',
            }}
            initial={{ y: 0 }}
            animate={phase === 'opening' ? { y: '100%' } : { y: 0 }}
            transition={{ duration: 1, ease: [0.76, 0, 0.24, 1] }}
          >
            <motion.span
              className="font-display text-5xl md:text-7xl lg:text-9xl font-bold pt-1 tracking-wider select-none glow-text text-gradient"
              initial={{ opacity: 0, y: -30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
            >
              BACK
            </motion.span>
          </motion.div>

          {/* Center neon line */}
          <motion.div
            className="absolute top-1/2 left-0 w-full h-[2px] -translate-y-1/2"
            style={{
              background: 'linear-gradient(90deg, transparent, hsl(263 70% 58%), hsl(190 80% 50%), transparent)',
              boxShadow: '0 0 30px hsl(263 70% 58% / 0.6), 0 0 60px hsl(190 80% 50% / 0.3)',
            }}
            initial={{ scaleX: 0, opacity: 0 }}
            animate={phase === 'welcome' ? { scaleX: 1, opacity: 1 } : { scaleX: 1, opacity: 0 }}
            transition={{ duration: 1, delay: phase === 'welcome' ? 0.3 : 0, ease: [0.25, 0.46, 0.45, 0.94] }}
          />

          {/* Floating particles during splash */}
          {phase === 'welcome' && (
            <>
              {[...Array(6)].map((_, i) => (
                <motion.div
                  key={i}
                  className="absolute w-1 h-1 rounded-full"
                  style={{
                    background: i % 2 === 0 ? 'hsl(263 70% 58%)' : 'hsl(190 80% 50%)',
                    left: `${15 + i * 14}%`,
                    top: '50%',
                    boxShadow: `0 0 10px ${i % 2 === 0 ? 'hsl(263 70% 58%)' : 'hsl(190 80% 50%)'}`,
                  }}
                  initial={{ opacity: 0, scale: 0 }}
                  animate={{
                    opacity: [0, 1, 0],
                    scale: [0, 1.5, 0],
                    y: [0, -30 + Math.random() * 60],
                  }}
                  transition={{
                    duration: 2,
                    delay: 1 + i * 0.15,
                    ease: 'easeOut',
                  }}
                />
              ))}
            </>
          )}
        </div>
      )}
    </AnimatePresence>
  );
}