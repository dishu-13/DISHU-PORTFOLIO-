import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { Code, Layers, Wrench } from 'lucide-react';

const skillCategories = [
  {
    title: 'Languages',
    icon: Code,
    gradient: 'from-neon-purple to-neon-blue',
    skills: ['Python', 'SQL', 'HTML', 'CSS']
  },
  {
    title: 'Frameworks & Libraries',
    icon: Layers,
    gradient: 'from-neon-blue to-neon-cyan',
    skills: ['Pandas', 'NumPy', 'Scikit-Learn', 'Matplotlib', 'Seaborn', 'Statistics', 'DAX']
  },
  {
    title: 'Tools',
    icon: Wrench,
    gradient: 'from-neon-cyan to-neon-purple',
    skills: ['Power BI', 'Tableau', 'Microsoft Office']
  }
];

export default function Skills() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="skills" className="py-24 md:py-32 px-4 md:px-6 relative">
      <div className="section-divider mb-24" />
      <div className="container mx-auto max-w-6xl" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          <span className="font-mono text-sm text-primary/70 tracking-widest uppercase mb-4 block">Tech Stack</span>
          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
            Skills & <span className="text-gradient">Expertise</span>
          </h2>
          <div className="w-20 h-1 mx-auto rounded-full" style={{ background: 'var(--gradient-primary)' }} />
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {skillCategories.map((category, catIdx) => {
            const Icon = category.icon;
            return (
              <motion.div
                key={category.title}
                initial={{ opacity: 0, y: 40 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: catIdx * 0.15, ease: [0.25, 0.46, 0.45, 0.94] }}
                whileHover={{ y: -8, scale: 1.02 }}
                className="card-glow glass-shine p-6"
              >
                <div className="flex items-center gap-3 mb-6">
                  <div className={`w-11 h-11 rounded-xl bg-gradient-to-br ${category.gradient} flex items-center justify-center`}>
                    <Icon className="w-5 h-5 text-white" />
                  </div>
                  <h3 className="font-display font-bold text-foreground text-lg">{category.title}</h3>
                </div>

                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill, i) => (
                    <motion.span
                      key={skill}
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={isInView ? { opacity: 1, scale: 1 } : {}}
                      transition={{ delay: catIdx * 0.15 + i * 0.05 + 0.3 }}
                      whileHover={{ scale: 1.08, borderColor: 'hsl(263 70% 58% / 0.5)' }}
                      className="px-3 py-1.5 rounded-full bg-secondary/50 text-foreground text-sm font-medium border border-border/30 hover:bg-primary/10 transition-all duration-200 cursor-default"
                    >
                      {skill}
                    </motion.span>
                  ))}
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}