import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { ExternalLink, Github, TrendingUp, Trash2, Home, Wine, ShieldAlert } from 'lucide-react';

const projects = [
  {
    title: 'Retail Sales Data',
    description: 'Analyzing retail sales data to identify purchasing trends, seasonal patterns, and performance metrics that assist businesses in optimizing inventory and increasing sales efficiency.',
    icon: TrendingUp,
    tags: ['Python', 'Pandas', 'Data Analysis'],
    color: 'from-primary to-cyan-400',
    link: 'https://github.com/dishu-13/OIBSIP/tree/3beae94f29c5a9b3477d62fcf18702c7d1ac855f/Project%201%20(retail_sales_dataset%20)',
  },
  {
    title: 'Data Cleaning',
    description: 'Clean and preprocess raw data for accurate analysis. Handling missing values, removing duplicates, correcting data types, and standardizing inconsistent entries.',
    icon: Trash2,
    tags: ['Python', 'Data Preprocessing', 'ETL'],
    color: 'from-accent to-pink-400',
    link: 'https://github.com/dishu-13/OIBSIP/tree/3beae94f29c5a9b3477d62fcf18702c7d1ac855f/Project%202%20(%20Data%20cleaning%20)',
  },
  {
    title: 'House Price Prediction',
    description: 'Machine learning model to estimate house prices based on key features. Includes data cleaning, feature selection, model training using Scikit-learn and evaluation.',
    icon: Home,
    tags: ['Python', 'Scikit-learn', 'Machine Learning'],
    color: 'from-emerald-400 to-teal-500',
    link: 'https://github.com/dishu-13/OIBSIP/tree/3beae94f29c5a9b3477d62fcf18702c7d1ac855f/Project%203%20(%20%20House%20%20Prediction%20)',
  },
  {
    title: 'Wine Quality Prediction',
    description: 'Predict wine quality based on chemical properties using machine learning. Data preprocessing, feature selection, and model training with visualization.',
    icon: Wine,
    tags: ['Python', 'NumPy', 'Matplotlib'],
    color: 'from-rose-400 to-red-500',
    link: 'https://github.com/dishu-13/OIBSIP/tree/3beae94f29c5a9b3477d62fcf18702c7d1ac855f/Project%204%20(%20Wine%20Quality%20Prediction%20)',
  },
  {
    title: 'Fraud Detection',
    description: 'Designed a machine learning model to spot fraudulent financial transactions. Tackled data challenges like imbalanced classes, leveraged Random Forest for high accuracy.',
    icon: ShieldAlert,
    tags: ['Python', 'Random Forest', 'Machine Learning'],
    color: 'from-amber-400 to-orange-500',
    link: 'https://github.com/dishu-13/OIBSIP',
  },
];

export default function Projects() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: [0.25, 0.46, 0.45, 0.94],
      },
    },
  };

  return (
    <section id="projects" className="py-20 md:py-32 px-4 relative">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-secondary/30 to-transparent pointer-events-none" />
      
      <div className="container mx-auto max-w-6xl relative" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }}
          className="text-center mb-12 md:mb-16"
        >
          <h2 className="font-display text-4xl md:text-5xl font-medium mb-4">
            My <span className="text-gradient">Projects</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-primary to-accent mx-auto rounded-full mb-6" />
          <p className="text-muted-foreground font-light max-w-2xl mx-auto">
            Explore my data analysis and machine learning projects that demonstrate my ability to extract insights and build predictive models.
          </p>
        </motion.div>

        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8"
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          {projects.map((project) => (
            <motion.a
              key={project.title}
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              variants={itemVariants}
              className="group relative p-6 md:p-8 rounded-2xl md:rounded-3xl card-glass overflow-hidden hover-lift cursor-pointer"
            >
              {/* Gradient overlay on hover */}
              <div className={`absolute inset-0 bg-gradient-to-br ${project.color} opacity-0 group-hover:opacity-10 transition-opacity duration-500`} />
              
              {/* Icon */}
              <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${project.color} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                <project.icon className="w-7 h-7 text-white" />
              </div>
              
              {/* Content */}
              <h3 className="font-display text-2xl font-medium text-foreground mb-3 group-hover:text-primary transition-colors">
                {project.title}
              </h3>
              <p className="text-muted-foreground mb-6 line-clamp-3">
                {project.description}
              </p>
              
              {/* Tags */}
              <div className="flex flex-wrap gap-2 mb-6">
                {project.tags.map((tag) => (
                  <span 
                    key={tag} 
                    className="px-3 py-1 text-sm rounded-full bg-secondary/80 text-muted-foreground border border-border"
                  >
                    {tag}
                  </span>
                ))}
              </div>
              
              {/* Link indicator */}
              <div className="flex items-center gap-2 text-primary font-normal">
                <span>View on GitHub</span>
                <ExternalLink className="w-4 h-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
              </div>
            </motion.a>
          ))}
        </motion.div>
      </div>
    </section>
  );
}