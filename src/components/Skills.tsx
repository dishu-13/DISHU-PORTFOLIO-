import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Database, FileSpreadsheet, BarChart3, Code, LineChart, GitBranch, FlaskConical, PieChart } from 'lucide-react';

const skills = [
  { 
    name: 'Python', 
    description: 'Data analysis & automation',
    icon: Code,
    color: 'bg-blue-500/10 text-blue-600'
  },
  { 
    name: 'Excel', 
    description: 'Advanced formulas & VBA',
    icon: FileSpreadsheet,
    color: 'bg-green-500/10 text-green-600'
  },
  { 
    name: 'Power BI', 
    description: 'Interactive dashboards',
    icon: BarChart3,
    color: 'bg-amber-500/10 text-amber-600'
  },
  { 
    name: 'SQL', 
    description: 'Database management',
    icon: Database,
    color: 'bg-orange-500/10 text-orange-600'
  },
  { 
    name: 'Statistical Analysis', 
    description: 'Data-driven insights',
    icon: LineChart,
    color: 'bg-purple-500/10 text-purple-600'
  },
  { 
    name: 'Data Visualization', 
    description: 'Charts & reports',
    icon: PieChart,
    color: 'bg-pink-500/10 text-pink-600'
  },
  { 
    name: 'Git', 
    description: 'Version control',
    icon: GitBranch,
    color: 'bg-red-500/10 text-red-600'
  },
  { 
    name: 'Machine Learning', 
    description: 'Predictive models',
    icon: FlaskConical,
    color: 'bg-cyan-500/10 text-cyan-600'
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
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-medium text-foreground mb-3">
            Skills & Expertise
          </h2>
          <p className="text-muted-foreground font-light">Technologies I work with</p>
        </motion.div>

        {/* Skills Cards Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
          {skills.map((skill, index) => {
            const Icon = skill.icon;
            return (
              <motion.div
                key={skill.name}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -5, scale: 1.02 }}
                className="group p-5 rounded-xl bg-card border border-border hover:border-primary/30 hover:shadow-lg transition-all duration-300"
              >
                <div className={`w-12 h-12 rounded-lg ${skill.color} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
                  <Icon className="w-6 h-6" />
                </div>
                <h3 className="font-medium text-foreground mb-1">{skill.name}</h3>
                <p className="text-sm text-muted-foreground">{skill.description}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
