import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { ExternalLink, TrendingUp, Trash2, Home, Wine, ShieldAlert, BarChart3 } from 'lucide-react';

const projects = [
  {
    title: 'Retail Sales Data',
    description: 'Analyzing retail sales data to identify purchasing trends, seasonal patterns, and performance metrics.',
    icon: TrendingUp,
    tags: ['Python', 'Pandas', 'Data Analysis'],
    gradient: 'from-neon-purple to-neon-blue',
    link: 'https://github.com/dishu-13/OIBSIP/tree/3beae94f29c5a9b3477d62fcf18702c7d1ac855f/Project%201%20(retail_sales_dataset%20)',
  },
  {
    title: 'Data Cleaning',
    description: 'Clean and preprocess raw data for accurate analysis. Handling missing values, removing duplicates, and standardizing entries.',
    icon: Trash2,
    tags: ['Python', 'Data Preprocessing', 'ETL'],
    gradient: 'from-neon-pink to-neon-purple',
    link: 'https://github.com/dishu-13/OIBSIP/tree/3beae94f29c5a9b3477d62fcf18702c7d1ac855f/Project%202%20(%20Data%20cleaning%20)',
  },
  {
    title: 'House Price Prediction',
    description: 'ML model to estimate house prices based on key features. Includes data cleaning, feature selection, and model evaluation.',
    icon: Home,
    tags: ['Python', 'Scikit-learn', 'ML'],
    gradient: 'from-neon-cyan to-neon-blue',
    link: 'https://github.com/dishu-13/OIBSIP/tree/3beae94f29c5a9b3477d62fcf18702c7d1ac855f/Project%203%20(%20%20House%20%20Prediction%20)',
  },
  {
    title: 'Wine Quality Prediction',
    description: 'Predict wine quality based on chemical properties using machine learning with data preprocessing and visualization.',
    icon: Wine,
    tags: ['Python', 'NumPy', 'Matplotlib'],
    gradient: 'from-neon-purple to-neon-pink',
    link: 'https://github.com/dishu-13/OIBSIP/tree/3beae94f29c5a9b3477d62fcf18702c7d1ac855f/Project%204%20(%20Wine%20Quality%20Prediction%20)',
  },
  {
    title: 'Fraud Detection',
    description: 'ML model to spot fraudulent financial transactions. Tackled imbalanced classes with Random Forest for high accuracy.',
    icon: ShieldAlert,
    tags: ['Python', 'Random Forest', 'ML'],
    gradient: 'from-neon-blue to-neon-cyan',
    link: 'https://github.com/dishu-13/OIBSIP',
  },
  {
    title: 'E-Commerce Sales Dashboard',
    description: 'Interactive Power BI dashboard with dynamic visualizations, KPIs, and filters to track revenue and customer trends.',
    icon: BarChart3,
    tags: ['Power BI', 'DAX', 'ETL'],
    gradient: 'from-neon-cyan to-neon-purple',
    link: 'https://github.com/dishu-13/E-Commerce-Sales-PowerBI-Dashboard',
  },
];

export default function Projects() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  return (
    <section id="projects" className="py-24 md:py-32 px-4 relative">
      <div className="section-divider mb-24" />
      <div className="container mx-auto max-w-6xl relative" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          <span className="font-mono text-sm text-primary/70 tracking-widest uppercase mb-4 block">Portfolio</span>
          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
            My <span className="text-gradient">Projects</span>
          </h2>
          <div className="w-20 h-1 mx-auto rounded-full mb-6" style={{ background: 'var(--gradient-primary)' }} />
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Data analysis and machine learning projects demonstrating my ability to extract insights and build predictive models.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {projects.map((project, index) => (
            <motion.a
              key={project.title}
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1, ease: [0.25, 0.46, 0.45, 0.94] }}
              className="group card-glow glass-shine p-6 md:p-8 hover-lift cursor-pointer relative overflow-hidden"
            >
              {/* Hover gradient overlay */}
              <div className={`absolute inset-0 bg-gradient-to-br ${project.gradient} opacity-0 group-hover:opacity-[0.05] transition-opacity duration-500`} />

              {/* Icon */}
              <div className={`relative w-14 h-14 rounded-2xl bg-gradient-to-br ${project.gradient} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}
                   style={{ boxShadow: '0 0 20px hsl(263 70% 58% / 0.2)' }}>
                <project.icon className="w-7 h-7 text-white" />
              </div>

              {/* Content */}
              <h3 className="relative font-display text-xl md:text-2xl font-bold text-foreground mb-3 group-hover:text-primary transition-colors">
                {project.title}
              </h3>
              <p className="relative text-muted-foreground mb-6 text-sm line-clamp-2">{project.description}</p>

              {/* Tags */}
              <div className="relative flex flex-wrap gap-2 mb-6">
                {project.tags.map((tag) => (
                  <span key={tag} className="px-3 py-1 text-xs rounded-full bg-secondary/50 text-muted-foreground border border-border/20 font-mono">
                    {tag}
                  </span>
                ))}
              </div>

              {/* Link */}
              <div className="relative flex items-center gap-2 text-primary text-sm font-medium">
                <span>View on GitHub</span>
                <ExternalLink className="w-4 h-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}