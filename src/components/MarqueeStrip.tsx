import { motion } from 'framer-motion';

const words = [
  'DATA ANALYTICS',
  '•',
  'PYTHON',
  '•',
  'SQL',
  '•',
  'POWER BI',
  '•',
  'MACHINE LEARNING',
  '•',
  'VISUALIZATION',
  '•',
  'EXCEL',
  '•',
  'TABLEAU',
  '•',
  'STATISTICS',
  '•',
  'BIG DATA',
  '•',
  'DATA SCIENCE',
  '•',
  'INSIGHTS',
  '•',
];

const strip = words.join('  ');
const doubled = `${strip}  ${strip}`;

export default function MarqueeStrip() {
  return (
    <div className="w-full overflow-hidden py-4 border-y border-border/30 bg-card/30 backdrop-blur-sm">
      <motion.div
        className="whitespace-nowrap font-display text-sm md:text-base tracking-[0.3em] text-muted-foreground/70 font-medium uppercase"
        animate={{ x: ['0%', '-50%'] }}
        transition={{
          x: {
            repeat: Infinity,
            repeatType: 'loop',
            duration: 25,
            ease: 'linear',
          },
        }}
      >
        {doubled}
      </motion.div>
    </div>
  );
}
