import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Code, Layers, Wrench } from 'lucide-react';

const skillCategories = [
  {
    title: 'Languages',
    icon: Code,
    skills: ['Python', 'SQL', 'HTML', 'CSS']
  },
  {
    title: 'Frameworks & Libraries',
    icon: Layers,
    skills: ['Pandas', 'NumPy', 'Scikit-Learn', 'Matplotlib', 'Seaborn', 'Statistics', 'DAX']
  },
  {
    title: 'Tools',
    icon: Wrench,
    skills: ['Power BI', 'Tableau', 'Microsoft Office']
  }
];

export default function Skills() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="skills" className="py-24 md:py-32 px-6 md:px-12 relative">
      <div className="container mx-auto max-w-7xl" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <p className="text-xs font-medium uppercase tracking-[0.3em] text-primary mb-4">( Skills )</p>
          <h2 className="font-display text-4xl md:text-6xl font-bold uppercase tracking-tight">
            Tools & <span className="text-primary">Tech</span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {skillCategories.map((category, catIndex) => {
            const Icon = category.icon;
            return (
              <motion.div
                key={category.title}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: catIndex * 0.15 }}
                className="p-6 md:p-8 border border-border hover:border-primary/30 transition-all duration-300 group"
              >
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-10 h-10 border border-border flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-300">
                    <Icon className="w-5 h-5" />
                  </div>
                  <h3 className="font-display font-bold text-foreground uppercase text-sm tracking-wider">{category.title}</h3>
                </div>

                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill) => (
                    <span
                      key={skill}
                      className="px-3 py-1.5 text-xs font-medium uppercase tracking-wider border border-border text-muted-foreground hover:border-primary hover:text-primary transition-all duration-200 cursor-default"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Marquee of skills */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ delay: 0.6 }}
          className="mt-16 overflow-hidden border-t border-b border-border py-6"
        >
          <div className="flex animate-marquee whitespace-nowrap">
            {[...skillCategories.flatMap(c => c.skills), ...skillCategories.flatMap(c => c.skills)].map((skill, i) => (
              <span key={i} className="mx-8 text-2xl md:text-4xl font-display font-bold text-secondary uppercase tracking-wider">
                {skill}
              </span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
