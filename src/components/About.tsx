import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { TrendingUp, Database, BarChart3, Brain } from 'lucide-react';

const highlights = [
  { icon: TrendingUp, label: 'Data Analysis', description: 'Transform raw data into insights' },
  { icon: Database, label: 'Database Management', description: 'SQL & data modeling expertise' },
  { icon: BarChart3, label: 'Visualization', description: 'Power BI & dashboard design' },
  { icon: Brain, label: 'Machine Learning', description: 'Predictive modeling with Python' },
];

const stats = [
  { value: '5+', label: 'Projects' },
  { value: '8', label: 'Certifications' },
  { value: '7+', label: 'Work Experience' },
];

export default function About() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="about" className="py-24 md:py-32 px-6 md:px-12 relative">
      <div className="container mx-auto max-w-7xl" ref={ref}>
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <p className="text-xs font-medium uppercase tracking-[0.3em] text-primary mb-4">( About )</p>
          <h2 className="font-display text-4xl md:text-6xl font-bold uppercase tracking-tight">
            Who I <span className="text-primary">Am</span>
          </h2>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20">
          {/* Content */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <p className="text-muted-foreground leading-relaxed mb-6">
              I'm a <span className="text-foreground font-medium">detail-oriented Data Analyst</span> with a strong foundation in data analysis, data visualization, and database management. Proficient in Python, SQL and Power BI, with hands-on experience in cleaning, modeling, and analyzing large datasets.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-10">
              Adept at designing interactive dashboards, conducting statistical analyses, and deriving actionable insights. <span className="text-primary font-medium">Certified by Google and Microsoft</span> in data analytics, Power BI, Azure, AI/ML, and Google Ads. Currently an Intern at Microsoft Elevate.
            </p>

            {/* Stats */}
            <div className="flex gap-8 pt-8 border-t border-border">
              {stats.map((stat) => (
                <div key={stat.label}>
                  <p className="text-3xl md:text-4xl font-display font-bold text-primary">{stat.value}</p>
                  <p className="text-xs uppercase tracking-widest text-muted-foreground mt-1">{stat.label}</p>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Highlights Grid */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="grid grid-cols-2 gap-4"
          >
            {highlights.map((item, index) => (
              <motion.div
                key={item.label}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.4, delay: 0.5 + index * 0.1 }}
                className="group p-6 border border-border hover:border-primary/40 transition-all duration-300 cursor-default"
              >
                <div className="w-10 h-10 flex items-center justify-center mb-4 text-primary">
                  <item.icon className="w-6 h-6" />
                </div>
                <h3 className="font-display font-bold text-foreground text-sm uppercase tracking-wide mb-1">{item.label}</h3>
                <p className="text-xs text-muted-foreground">{item.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
