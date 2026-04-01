import { motion } from 'framer-motion';

const words = [
  'DATA ANALYTICS', 'PYTHON', 'SQL', 'POWER BI', 'MACHINE LEARNING',
  'VISUALIZATION', 'EXCEL', 'TABLEAU', 'STATISTICS', 'BIG DATA',
  'DATA SCIENCE', 'INSIGHTS', 'AZURE', 'SCIKIT-LEARN', 'PANDAS',
];

const strip = words.map(w => `${w}  ✦  `).join('');
const doubled = `${strip}${strip}`;

export default function MarqueeStrip() {
  return (
    <div className="w-full overflow-hidden py-5 border-y border-border/20"
         style={{ background: 'linear-gradient(90deg, hsl(240 10% 4% / 0.8), hsl(240 10% 8% / 0.6), hsl(240 10% 4% / 0.8))' }}>
      <motion.div
        className="whitespace-nowrap font-display text-sm md:text-base tracking-[0.25em] text-muted-foreground/40 font-medium uppercase"
        animate={{ x: ['0%', '-50%'] }}
        transition={{ x: { repeat: Infinity, repeatType: 'loop', duration: 30, ease: 'linear' } }}
      >
        {doubled}
      </motion.div>
    </div>
  );
}