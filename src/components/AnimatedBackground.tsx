import { motion } from 'framer-motion';
import { useIsMobile } from '@/hooks/use-mobile';

export default function AnimatedBackground() {
  const isMobile = useIsMobile();

  // Simplified background for mobile - fewer elements and simpler animations
  if (isMobile) {
    return (
      <div className="fixed inset-0 -z-10 overflow-hidden">
        {/* Static gradient background for mobile */}
        <div 
          className="absolute w-72 h-72 rounded-full bg-gradient-to-br from-primary/15 to-accent/10 blur-3xl"
          style={{ top: '10%', right: '-10%' }}
        />
        <div 
          className="absolute w-64 h-64 rounded-full bg-gradient-to-tr from-accent/10 to-primary/10 blur-3xl"
          style={{ bottom: '20%', left: '-10%' }}
        />
      </div>
    );
  }

  return (
    <div className="fixed inset-0 -z-10 overflow-hidden">
      {/* Floating circles - reduced count */}
      {[...Array(4)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute rounded-full bg-primary/10 blur-xl will-change-transform"
          style={{
            width: `${100 + i * 50}px`,
            height: `${100 + i * 50}px`,
            left: `${10 + i * 20}%`,
            top: `${10 + i * 15}%`,
          }}
          animate={{
            x: [0, 30, -20, 0],
            y: [0, -40, 20, 0],
            scale: [1, 1.1, 0.95, 1],
          }}
          transition={{
            duration: 10 + i * 3,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      ))}
      
      {/* Gradient orbs */}
      <motion.div
        className="absolute w-96 h-96 rounded-full bg-gradient-to-br from-primary/20 to-accent/10 blur-3xl will-change-transform"
        style={{ top: '20%', right: '-5%' }}
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.3, 0.5, 0.3],
        }}
        transition={{
          duration: 12,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
      
      <motion.div
        className="absolute w-80 h-80 rounded-full bg-gradient-to-tr from-accent/15 to-primary/10 blur-3xl will-change-transform"
        style={{ bottom: '10%', left: '-5%' }}
        animate={{
          scale: [1, 1.15, 1],
          opacity: [0.2, 0.4, 0.2],
        }}
        transition={{
          duration: 14,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      {/* Small floating particles - reduced count */}
      {[...Array(6)].map((_, i) => (
        <motion.div
          key={`particle-${i}`}
          className="absolute w-2 h-2 rounded-full bg-primary/30 will-change-transform"
          style={{
            left: `${15 + i * 15}%`,
            top: `${20 + i * 12}%`,
          }}
          animate={{
            y: [0, -80, 0],
            opacity: [0.3, 0.7, 0.3],
          }}
          transition={{
            duration: 6 + i * 2,
            repeat: Infinity,
            delay: i * 0.5,
            ease: "easeInOut",
          }}
        />
      ))}
    </div>
  );
}
