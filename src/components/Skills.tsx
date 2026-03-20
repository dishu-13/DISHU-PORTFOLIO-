import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Code, Layers, Wrench } from 'lucide-react';

const skillCategories = [
  {
    title: 'Languages',
    icon: Code,
    skills: ['Python', 'SQL', 'HTML', 'CSS'],
  },
  {
    title: 'Libraries & Frameworks',
    icon: Layers,
    skills: ['Pandas', 'NumPy', 'Scikit-Learn', 'Matplotlib', 'Seaborn', 'Statistics', 'DAX'],
  },
  {
    title: 'Tools & Platforms',
    icon: Wrench,
    skills: ['Power BI', 'Tableau', 'Microsoft Office', 'Excel', 'Looker Studio'],
  },
];

export default function Skills() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="skills" className="py-24 px-4 relative">
      <div className="container mx-auto max-w-6xl" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <p className="text-primary font-mono text-sm mb-3">Skills</p>
          <h2 className="font-display text-3xl md:text-5xl font-bold mb-4">
            My <span className="text-gradient">Tech Stack</span>
          </h2>
          <div className="section-line mx-auto" />
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {skillCategories.map((category, catIdx) => {
            const Icon = category.icon;
            return (
              <motion.div
                key={category.title}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: catIdx * 0.15, duration: 0.5 }}
                className="p-6 rounded-2xl card-glass hover-lift"
              >
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                    <Icon className="w-5 h-5 text-primary" />
                  </div>
                  <h3 className="font-display font-semibold text-foreground text-lg">{category.title}</h3>
                </div>

                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill) => (
                    <motion.span
                      key={skill}
                      whileHover={{ scale: 1.05 }}
                      className="px-3 py-1.5 rounded-lg bg-secondary/60 text-foreground/80 text-sm font-medium border border-border/50 hover:border-primary/40 hover:text-primary hover:bg-primary/5 transition-all duration-200 cursor-default"
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
