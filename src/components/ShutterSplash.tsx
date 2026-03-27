import { motion, AnimatePresence } from 'framer-motion';
import { useState, useEffect } from 'react';

export default function ShutterSplash({ onComplete }: { onComplete: () => void }) {
  const [phase, setPhase] = useState<'welcome' | 'opening' | 'done'>('welcome');

  useEffect(() => {
    const t1 = setTimeout(() => setPhase('opening'), 2500);
    const t2 = setTimeout(() => {
      setPhase('done');
      onComplete();
    }, 3500);
    return () => { clearTimeout(t1); clearTimeout(t2); };
  }, [onComplete]);

  return (
    <AnimatePresence>
      {phase !== 'done' && (
        <div className="fixed inset-0 z-[9999] pointer-events-none">
          {/* Top shutter */}
          <motion.div
            className="absolute top-0 left-0 w-full h-1/2 bg-background flex items-end justify-center"
            style={{ borderBottom: '1px solid hsl(var(--primary) / 0.3)' }}
            initial={{ y: 0 }}
            animate={phase === 'opening' ? { y: '-100%' } : { y: 0 }}
            transition={{ duration: 1.5, ease: [0.76, 0, 0.24, 1] }}
          >
            <motion.span
              className="text-gradient font-display text-5xl md:text-7xl lg:text-8xl font-bold pb-2 tracking-wider select-none"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.6 }}
            >
              WELCOME
            </motion.span>
          </motion.div>

          {/* Bottom shutter */}
          <motion.div
            className="absolute bottom-0 left-0 w-full h-1/2 bg-background flex items-start justify-center"
            style={{ borderTop: '1px solid hsl(var(--primary) / 0.3)' }}
            initial={{ y: 0 }}
            animate={phase === 'opening' ? { y: '100%' } : { y: 0 }}
            transition={{ duration: 1.5, ease: [0.76, 0, 0.24, 1] }}
          >
            <motion.span
              className="text-gradient font-display text-5xl md:text-7xl lg:text-8xl font-bold pt-2 tracking-wider select-none"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.6 }}
            >
              BACK
            </motion.span>
          </motion.div>

          {/* Center glow line */}
          <motion.div
            className="absolute top-1/2 left-0 w-full h-[2px] -translate-y-1/2"
            style={{ background: 'var(--gradient-primary)' }}
            initial={{ scaleX: 0, opacity: 0 }}
            animate={
              phase === 'welcome'
                ? { scaleX: 1, opacity: 1 }
                : { scaleX: 1, opacity: 0 }
            }
            transition={{ duration: 0.8, delay: phase === 'welcome' ? 0.5 : 0 }}
          />
        </div>
      )}
    </AnimatePresence>
  );
}
