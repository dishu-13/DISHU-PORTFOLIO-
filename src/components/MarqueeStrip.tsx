import { motion } from 'framer-motion';
import { BarChart3, Code, Database, LayoutDashboard, Brain, LineChart, FileSpreadsheet, PieChart, TrendingUp, Server, FlaskConical, Lightbulb } from 'lucide-react';

const items = [
  { label: 'DATA ANALYTICS', icon: BarChart3 },
  { label: 'PYTHON', icon: Code },
  { label: 'SQL', icon: Database },
  { label: 'POWER BI', icon: LayoutDashboard },
  { label: 'MACHINE LEARNING', icon: Brain },
  { label: 'VISUALIZATION', icon: LineChart },
  { label: 'EXCEL', icon: FileSpreadsheet },
  { label: 'TABLEAU', icon: PieChart },
  { label: 'STATISTICS', icon: TrendingUp },
  { label: 'BIG DATA', icon: Server },
  { label: 'DATA SCIENCE', icon: FlaskConical },
  { label: 'INSIGHTS', icon: Lightbulb },
];

function ItemList() {
  return (
    <>
      {items.map((item, i) => (
        <span key={i} className="inline-flex items-center gap-2 mx-4">
          <item.icon size={16} className="text-primary/70 shrink-0" />
          <span>{item.label}</span>
        </span>
      ))}
    </>
  );
}

export default function MarqueeStrip() {
  return (
    <div className="w-full flex justify-center py-8 mt-4">
      <div className="w-1/2 overflow-hidden rounded-full border border-border/30 bg-card/30 backdrop-blur-sm py-3">
        <motion.div
          className="whitespace-nowrap font-display text-sm md:text-base tracking-[0.15em] text-muted-foreground/70 font-medium uppercase flex"
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
          <ItemList />
          <ItemList />
        </motion.div>
      </div>
    </div>
  );
}
