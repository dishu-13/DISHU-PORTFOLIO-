import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';

const skills = [
  { 
    name: 'Python', 
    level: 90,
    color: 'from-[#3776AB] to-[#FFD43B]',
    icon: '🐍'
  },
  { 
    name: 'Excel', 
    level: 95,
    color: 'from-[#217346] to-[#33C481]',
    icon: '📊'
  },
  { 
    name: 'Power BI', 
    level: 88,
    color: 'from-[#F2C811] to-[#E9A627]',
    icon: '📈'
  },
  { 
    name: 'SQL', 
    level: 92,
    color: 'from-[#00758F] to-[#F29111]',
    icon: '🗄️'
  },
];

const tools = [
  'Pandas', 'NumPy', 'Scikit-learn', 'Matplotlib', 
  'Seaborn', 'Jupyter', 'Git', 'Statistical Analysis'
];

export default function Skills() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="skills" className="py-32 px-4 relative">
      <div className="container mx-auto max-w-6xl" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="font-display text-4xl md:text-5xl font-bold mb-4">
            My <span className="text-gradient">Skills</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-primary to-accent mx-auto rounded-full" />
        </motion.div>

        {/* Main Skills */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {skills.map((skill, index) => (
            <motion.div
              key={skill.name}
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 + index * 0.1 }}
              className="group p-6 rounded-2xl card-glass hover-lift"
            >
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-3">
                  <span className="text-3xl">{skill.icon}</span>
                  <h3 className="font-display text-xl font-semibold text-foreground">{skill.name}</h3>
                </div>
                <span className="text-lg font-medium text-primary">{skill.level}%</span>
              </div>
              
              {/* Progress bar */}
              <div className="h-3 rounded-full bg-secondary overflow-hidden">
                <motion.div
                  initial={{ width: 0 }}
                  animate={isInView ? { width: `${skill.level}%` } : {}}
                  transition={{ duration: 1.2, delay: 0.5 + index * 0.1, ease: "easeOut" }}
                  className={`h-full rounded-full bg-gradient-to-r ${skill.color}`}
                />
              </div>
            </motion.div>
          ))}
        </div>

        {/* Additional Tools */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="text-center"
        >
          <h3 className="font-display text-2xl font-semibold text-foreground mb-8">
            Additional Tools & Technologies
          </h3>
          <div className="flex flex-wrap justify-center gap-4">
            {tools.map((tool, index) => (
              <motion.span
                key={tool}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={isInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.4, delay: 0.8 + index * 0.05 }}
                whileHover={{ scale: 1.1, y: -5 }}
                className="px-5 py-3 rounded-full bg-secondary/60 border border-border text-foreground font-medium cursor-default hover:border-primary hover:bg-primary/10 transition-all duration-300"
              >
                {tool}
              </motion.span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}