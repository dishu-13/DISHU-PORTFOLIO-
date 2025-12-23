import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Code, Layers, Wrench } from 'lucide-react';

const skillCategories = [
  {
    title: 'Languages',
    icon: Code,
    color: 'from-blue-500/20 to-blue-600/20 border-blue-500/30',
    iconColor: 'text-blue-500',
    skills: ['Python', 'SQL', 'HTML', 'CSS']
  },
  {
    title: 'Frameworks & Libraries',
    icon: Layers,
    color: 'from-purple-500/20 to-purple-600/20 border-purple-500/30',
    iconColor: 'text-purple-500',
    skills: ['Pandas', 'NumPy', 'Scikit-Learn', 'Matplotlib', 'Seaborn', 'Statistics', 'DAX']
  },
  {
    title: 'Tools',
    icon: Wrench,
    color: 'from-amber-500/20 to-amber-600/20 border-amber-500/30',
    iconColor: 'text-amber-500',
    skills: ['Power BI', 'Tableau', 'Microsoft Office']
  }
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.2
    }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: [0.25, 0.46, 0.45, 0.94]
    }
  }
};

export default function Skills() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="skills" className="py-24 px-4 md:px-6 relative">
      <div className="container mx-auto max-w-6xl" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-medium text-foreground mb-3">
            Skills & Expertise
          </h2>
          <p className="text-muted-foreground font-light">Technologies I work with</p>
        </motion.div>

        {/* Skills Categories */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-3 gap-6"
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          {skillCategories.map((category) => {
            const Icon = category.icon;
            return (
              <motion.div
                key={category.title}
                variants={itemVariants}
                whileHover={{ y: -5, scale: 1.02 }}
                className={`p-6 rounded-2xl bg-gradient-to-br ${category.color} border backdrop-blur-sm transition-all duration-300 hover:shadow-lg`}
              >
                {/* Category Header */}
                <div className="flex items-center gap-3 mb-5">
                  <div className={`w-10 h-10 rounded-lg bg-card flex items-center justify-center ${category.iconColor}`}>
                    <Icon className="w-5 h-5" />
                  </div>
                  <h3 className="font-medium text-foreground text-lg">{category.title}</h3>
                </div>

                {/* Skills Tags */}
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill) => (
                    <motion.span
                      key={skill}
                      whileHover={{ scale: 1.05 }}
                      className="px-3 py-1.5 rounded-full bg-card/80 text-foreground text-sm font-medium border border-border/50 hover:border-primary/50 hover:bg-primary/10 transition-all duration-200 cursor-default"
                    >
                      {skill}
                    </motion.span>
                  ))}
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
