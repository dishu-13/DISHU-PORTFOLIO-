import { motion } from 'framer-motion';
import { useIsMobile } from '@/hooks/use-mobile';

export default function AnimatedBackground() {
  const isMobile = useIsMobile();

  if (isMobile) {
    return (
      <div className="fixed inset-0 -z-10 overflow-hidden">
        <div
          className="absolute w-72 h-72 rounded-full bg-primary/5 blur-[100px]"
          style={{ top: '10%', right: '-10%' }}
        />
        <div
          className="absolute w-64 h-64 rounded-full bg-accent/5 blur-[100px]"
          style={{ bottom: '20%', left: '-10%' }}
        />
      </div>
    );
  }

  return (
    <div className="fixed inset-0 -z-10 overflow-hidden">
      {/* Large gradient orbs */}
      <motion.div
        className="absolute w-[500px] h-[500px] rounded-full bg-primary/5 blur-[150px] will-change-transform"
        style={{ top: '10%', right: '-5%' }}
        animate={{ scale: [1, 1.15, 1], opacity: [0.3, 0.5, 0.3] }}
        transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute w-[400px] h-[400px] rounded-full bg-accent/5 blur-[150px] will-change-transform"
        style={{ bottom: '10%', left: '-5%' }}
        animate={{ scale: [1, 1.1, 1], opacity: [0.2, 0.35, 0.2] }}
        transition={{ duration: 18, repeat: Infinity, ease: "easeInOut" }}
      />

      {/* Small floating particles */}
      {[...Array(5)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-1.5 h-1.5 rounded-full bg-primary/20 will-change-transform"
          style={{ left: `${15 + i * 18}%`, top: `${20 + i * 14}%` }}
          animate={{ y: [0, -60, 0], opacity: [0.2, 0.5, 0.2] }}
          transition={{ duration: 8 + i * 2, repeat: Infinity, delay: i * 0.8, ease: "easeInOut" }}
        />
      ))}
    </div>
  );
}
