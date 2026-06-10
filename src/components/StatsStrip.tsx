import { useEffect, useRef, useState } from 'react';
import { motion, useInView } from 'framer-motion';
import { FolderGit2, Award, Briefcase, Wrench } from 'lucide-react';

interface Stat {
  value: number;
  suffix: string;
  label: string;
  Icon: React.ComponentType<{ className?: string }>;
}

const stats: Stat[] = [
  { value: 7, suffix: '+', label: 'Projects Completed', Icon: FolderGit2 },
  { value: 8, suffix: '', label: 'Certifications', Icon: Award },
  { value: 2, suffix: '+', label: 'Internships', Icon: Briefcase },
  { value: 10, suffix: '+', label: 'Tools & Technologies', Icon: Wrench },
];

function Counter({ target, suffix, start }: { target: number; suffix: string; start: boolean }) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!start) return;
    const duration = 1500;
    const startTime = performance.now();
    let frame: number;

    const tick = (now: number) => {
      const progress = Math.min((now - startTime) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setCount(Math.round(eased * target));
      if (progress < 1) frame = requestAnimationFrame(tick);
    };

    frame = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(frame);
  }, [start, target]);

  return (
    <span className="text-3xl md:text-4xl font-light text-gradient">
      {count}
      {suffix}
    </span>
  );
}

export default function StatsStrip() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <section className="relative z-10 py-12 md:py-16">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8" ref={ref}>
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
          {stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="section-frost glass-shine rounded-2xl border border-border/20 bg-card/40 backdrop-blur-xl p-6 text-center hover:border-primary/40 transition-all duration-500 hover:-translate-y-1"
            >
              <div className="w-11 h-11 mx-auto mb-3 rounded-xl bg-primary/10 flex items-center justify-center">
                <stat.Icon className="w-5 h-5 text-primary" />
              </div>
              <Counter target={stat.value} suffix={stat.suffix} start={inView} />
              <p className="text-muted-foreground text-xs md:text-sm font-light mt-2 tracking-wide">
                {stat.label}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
