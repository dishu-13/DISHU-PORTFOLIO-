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

export default function About() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="about" className="py-32 px-4 relative">
      <div className="container mx-auto max-w-6xl" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="font-display text-4xl md:text-5xl font-medium mb-4">
            About <span className="text-gradient">Me</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-primary to-accent mx-auto rounded-full" />
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <p className="text-lg text-muted-foreground leading-relaxed mb-6 text-justify">
              I'm a <span className="text-foreground font-medium">detail-oriented Data Analyst</span> with a strong foundation in data analysis, data visualization, and database management. Proficient in Python, SQL and Power BI, with hands-on experience in cleaning, modeling, and analyzing large datasets.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed mb-6 text-justify">
              Adept at designing interactive dashboards, conducting statistical analyses, and deriving actionable insights to support data-driven decision-making. <span className="text-primary">Certified by Google and Microsoft</span> in data analytics. Passionate about leveraging data to solve real-world problems and delivering impactful solutions.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed mb-8 text-justify">
              I have completed <span className="text-foreground font-medium">5+ projects</span> showcasing my data analysis skills, earned <span className="text-foreground font-medium">5 certifications</span> from Google, Microsoft and HP, and gained practical experience through <span className="text-foreground font-medium">4 remote internships</span> in data analytics and business intelligence.
            </p>
            
            <div className="flex items-center gap-4">
              <div className="p-4 rounded-xl bg-secondary/50 border border-border">
                <p className="text-3xl font-display font-medium text-gradient">5+</p>
                <p className="text-sm text-muted-foreground">Projects</p>
              </div>
              <div className="p-4 rounded-xl bg-secondary/50 border border-border">
                <p className="text-3xl font-display font-medium text-gradient">5</p>
                <p className="text-sm text-muted-foreground">Certifications</p>
              </div>
              <div className="p-4 rounded-xl bg-secondary/50 border border-border">
                <p className="text-3xl font-display font-medium text-gradient">4</p>
                <p className="text-sm text-muted-foreground">Remote Internships</p>
              </div>
            </div>
          </motion.div>

          {/* Highlights Grid */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="grid grid-cols-2 gap-4"
          >
            {highlights.map((item, index) => (
              <motion.div
                key={item.label}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.5 + index * 0.1 }}
                className="group p-6 rounded-2xl card-glass hover-lift cursor-default"
              >
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                  <item.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="font-display font-medium text-foreground mb-1">{item.label}</h3>
                <p className="text-sm text-muted-foreground">{item.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}