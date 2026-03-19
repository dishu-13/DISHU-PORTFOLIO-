import { motion } from 'framer-motion';
import { useIsMobile } from '@/hooks/use-mobile';

export default function AnimatedBackground() {
  const isMobile = useIsMobile();

  if (isMobile) {
    return (
      <div className="fixed inset-0 -z-10 overflow-hidden">
        <div className="absolute w-72 h-72 rounded-full bg-primary/5 blur-[120px]"
          style={{ top: '10%', right: '-10%' }} />
      </div>
    );
  }

  return (
    <div className="fixed inset-0 -z-10 overflow-hidden">
      {/* Subtle green glow orbs */}
      <motion.div
        className="absolute w-[500px] h-[500px] rounded-full bg-primary/5 blur-[150px] will-change-transform"
        style={{ top: '10%', right: '10%' }}
        animate={{ scale: [1, 1.15, 1], opacity: [0.3, 0.5, 0.3] }}
        transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute w-[400px] h-[400px] rounded-full bg-primary/3 blur-[120px] will-change-transform"
        style={{ bottom: '20%', left: '5%' }}
        animate={{ scale: [1, 1.1, 1], opacity: [0.2, 0.35, 0.2] }}
        transition={{ duration: 18, repeat: Infinity, ease: "easeInOut" }}
      />

      {/* Grid lines effect */}
      <div className="absolute inset-0 opacity-[0.015]"
        style={{
          backgroundImage: 'linear-gradient(hsl(0 0% 50%) 1px, transparent 1px), linear-gradient(90deg, hsl(0 0% 50%) 1px, transparent 1px)',
          backgroundSize: '60px 60px'
        }}
      />
    </div>
  );
}
