import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { ExternalLink, TrendingUp, Trash2, Home, Wine, ShieldAlert, BarChart3 } from 'lucide-react';

const projects = [
  {
    title: 'Retail Sales Data',
    description: 'Analyzing retail sales data to identify purchasing trends, seasonal patterns, and performance metrics.',
    icon: TrendingUp,
    tags: ['Python', 'Pandas', 'Data Analysis'],
    link: 'https://github.com/dishu-13/OIBSIP/tree/3beae94f29c5a9b3477d62fcf18702c7d1ac855f/Project%201%20(retail_sales_dataset%20)',
  },
  {
    title: 'Data Cleaning',
    description: 'Clean and preprocess raw data for accurate analysis. Handling missing values and standardizing entries.',
    icon: Trash2,
    tags: ['Python', 'Data Preprocessing', 'ETL'],
    link: 'https://github.com/dishu-13/OIBSIP/tree/3beae94f29c5a9b3477d62fcf18702c7d1ac855f/Project%202%20(%20Data%20cleaning%20)',
  },
  {
    title: 'House Price Prediction',
    description: 'ML model to estimate house prices. Data cleaning, feature selection, model training using Scikit-learn.',
    icon: Home,
    tags: ['Python', 'Scikit-learn', 'ML'],
    link: 'https://github.com/dishu-13/OIBSIP/tree/3beae94f29c5a9b3477d62fcf18702c7d1ac855f/Project%203%20(%20%20House%20%20Prediction%20)',
  },
  {
    title: 'Wine Quality Prediction',
    description: 'Predict wine quality based on chemical properties using machine learning with visualization.',
    icon: Wine,
    tags: ['Python', 'NumPy', 'Matplotlib'],
    link: 'https://github.com/dishu-13/OIBSIP/tree/3beae94f29c5a9b3477d62fcf18702c7d1ac855f/Project%204%20(%20Wine%20Quality%20Prediction%20)',
  },
  {
    title: 'Fraud Detection',
    description: 'ML model to spot fraudulent financial transactions. Tackled imbalanced classes with Random Forest.',
    icon: ShieldAlert,
    tags: ['Python', 'Random Forest', 'ML'],
    link: 'https://github.com/dishu-13/OIBSIP',
  },
  {
    title: 'E-Commerce Sales Dashboard',
    description: 'Interactive Power BI dashboard analyzing e-commerce sales with dynamic KPIs and regional filters.',
    icon: BarChart3,
    tags: ['Power BI', 'DAX', 'ETL'],
    link: 'https://github.com/dishu-13/E-Commerce-Sales-PowerBI-Dashboard',
  },
];

export default function Projects() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  return (
    <section id="projects" className="py-24 md:py-32 px-6 md:px-12 relative">
      <div className="container mx-auto max-w-7xl" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-4"
        >
          <div>
            <p className="text-xs font-medium uppercase tracking-[0.3em] text-primary mb-4">( Work )</p>
            <h2 className="font-display text-4xl md:text-6xl font-bold uppercase tracking-tight">
              Selected <span className="text-primary">Projects</span>
            </h2>
          </div>
          <p className="text-muted-foreground text-sm max-w-sm">
            Data analysis and ML projects demonstrating insights extraction and predictive modeling.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {projects.map((project, index) => (
            <motion.a
              key={project.title}
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.08 }}
              className="group relative p-6 md:p-8 border border-border hover:border-primary/40 transition-all duration-300 cursor-pointer overflow-hidden"
            >
              {/* Hover glow */}
              <div className="absolute inset-0 bg-primary/[0.03] opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

              <div className="relative z-10">
                {/* Header */}
                <div className="flex items-start justify-between mb-6">
                  <div className="w-12 h-12 border border-border flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-300">
                    <project.icon className="w-6 h-6" />
                  </div>
                  <ExternalLink className="w-5 h-5 text-muted-foreground group-hover:text-primary group-hover:translate-x-1 group-hover:-translate-y-1 transition-all" />
                </div>

                {/* Content */}
                <h3 className="font-display text-xl font-bold text-foreground mb-2 group-hover:text-primary transition-colors uppercase tracking-wide">
                  {project.title}
                </h3>
                <p className="text-muted-foreground text-sm mb-6 line-clamp-2">
                  {project.description}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-2.5 py-1 text-[10px] font-medium uppercase tracking-widest border border-border text-muted-foreground"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}
