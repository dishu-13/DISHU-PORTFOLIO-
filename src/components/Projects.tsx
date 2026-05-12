import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
import { ExternalLink, TrendingUp, Trash2, Home, Wine, ShieldAlert, BarChart3, Briefcase } from 'lucide-react';
import autohireImg from '@/assets/projects/autohire.jpg';
import retailSalesImg from '@/assets/projects/retail-sales.jpg';
import dataCleaningImg from '@/assets/projects/data-cleaning.jpg';
import housePriceImg from '@/assets/projects/house-price.jpg';
import wineQualityImg from '@/assets/projects/wine-quality.jpg';
import fraudDetectionImg from '@/assets/projects/fraud-detection.jpg';
import ecommerceDashboardImg from '@/assets/projects/ecommerce-dashboard.jpg';

const projects = [
  {
    title: 'AutoHire AI',
    description: 'AI-powered job matching app that analyzes resumes, scores resume-job fit (%), aggregates listings from multiple platforms, and delivers an end-to-end workflow with 5 modules: Jobs, Resume, Tracker, Dashboard, and Settings.',
    icon: Briefcase,
    image: autohireImg,
    tags: ['Flutter', 'Dart', 'Firebase', 'REST APIs', 'Git & GitHub'],
    color: 'from-indigo-500 to-purple-600',
    link: 'https://github.com/dishu-13/AutoHire-AI.git',
  },
  {
    title: 'Retail Sales Data',
    description: 'Analyzing retail sales data to identify purchasing trends, seasonal patterns, and performance metrics that assist businesses in optimizing inventory and increasing sales efficiency.',
    icon: TrendingUp,
    image: retailSalesImg,
    tags: ['Python', 'Pandas', 'Data Analysis'],
    color: 'from-primary to-cyan-400',
    link: 'https://github.com/dishu-13/OIBSIP/tree/3beae94f29c5a9b3477d62fcf18702c7d1ac855f/Project%201%20(retail_sales_dataset%20)',
  },
  {
    title: 'Data Cleaning',
    description: 'Clean and preprocess raw data for accurate analysis. Handling missing values, removing duplicates, correcting data types, and standardizing inconsistent entries.',
    icon: Trash2,
    image: dataCleaningImg,
    tags: ['Python', 'Data Preprocessing', 'ETL'],
    color: 'from-accent to-pink-400',
    link: 'https://github.com/dishu-13/OIBSIP/tree/3beae94f29c5a9b3477d62fcf18702c7d1ac855f/Project%202%20(%20Data%20cleaning%20)',
  },
  {
    title: 'House Price Prediction',
    description: 'Machine learning model to estimate house prices based on key features. Includes data cleaning, feature selection, model training using Scikit-learn and evaluation.',
    icon: Home,
    image: housePriceImg,
    tags: ['Python', 'Scikit-learn', 'Machine Learning'],
    color: 'from-emerald-400 to-teal-500',
    link: 'https://github.com/dishu-13/OIBSIP/tree/3beae94f29c5a9b3477d62fcf18702c7d1ac855f/Project%203%20(%20%20House%20%20Prediction%20)',
  },
  {
    title: 'Wine Quality Prediction',
    description: 'Predict wine quality based on chemical properties using machine learning. Data preprocessing, feature selection, and model training with visualization.',
    icon: Wine,
    image: wineQualityImg,
    tags: ['Python', 'NumPy', 'Matplotlib'],
    color: 'from-rose-400 to-red-500',
    link: 'https://github.com/dishu-13/OIBSIP/tree/3beae94f29c5a9b3477d62fcf18702c7d1ac855f/Project%204%20(%20Wine%20Quality%20Prediction%20)',
  },
  {
    title: 'Fraud Detection',
    description: 'Designed a machine learning model to spot fraudulent financial transactions. Tackled data challenges like imbalanced classes, leveraged Random Forest for high accuracy.',
    icon: ShieldAlert,
    image: fraudDetectionImg,
    tags: ['Python', 'Random Forest', 'Machine Learning'],
    color: 'from-amber-400 to-orange-500',
    link: 'https://github.com/dishu-13/OIBSIP',
  },
  {
    title: 'E-Commerce Sales Dashboard',
    description: 'Interactive Power BI dashboard analyzing e-commerce sales data with dynamic visualizations, KPIs, and filters to track revenue, profit, quantity, and customer trends across regions and categories.',
    icon: BarChart3,
    image: ecommerceDashboardImg,
    tags: ['Power BI', 'Data Visualization', 'DAX', 'ETL'],
    color: 'from-violet-400 to-purple-500',
    link: 'https://github.com/dishu-13/E-Commerce-Sales-PowerBI-Dashboard',
  },
];

function CircleCarousel() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start end', 'end start'],
  });
  const rotate = useTransform(scrollYProgress, [0, 1], [0, 180]);
  const counterRotate = useTransform(rotate, (r) => -r);
  const scale = useTransform(scrollYProgress, [0, 0.4, 1], [0.85, 1, 0.95]);
  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0.6]);

  const count = projects.length;
  const radius = 150;

  return (
    <div ref={containerRef} className="relative w-full flex flex-col items-center justify-center py-12 md:py-20">
      <motion.div
        style={{ rotate, scale, opacity }}
        className="relative w-[340px] h-[340px] md:w-[440px] md:h-[440px]"
      >
        {projects.map((project, i) => {
          const angle = (i / count) * 360;
          return (
            <div
              key={project.title}
              className="absolute top-1/2 left-1/2 w-20 h-20 md:w-28 md:h-28"
              style={{
                transform: `translate(-50%, -50%) rotate(${angle}deg) translateY(-${radius}px) rotate(${-angle}deg)`,
              }}
            >
              <motion.div
                style={{ rotate: counterRotate }}
                className="w-full h-full rounded-2xl overflow-hidden shadow-xl ring-1 ring-border/30"
              >
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
              </motion.div>
            </div>
          );
        })}
      </motion.div>
      <motion.p
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="mt-8 text-sm md:text-base text-muted-foreground font-light tracking-wide"
      >
        Scroll to explore each project
      </motion.p>
    </div>
  );
}

export default function Projects() {
  return (
    <section id="projects" className="py-20 md:py-32 px-4 relative section-frost">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-secondary/30 to-transparent pointer-events-none" />

      <div className="container mx-auto max-w-6xl relative">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }}
          className="text-center mb-8 md:mb-12"
        >
          <h2 className="font-display text-4xl md:text-5xl font-medium mb-4">
            My <span className="text-gradient">Projects</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-primary to-accent mx-auto rounded-full mb-6" />
          <p className="text-muted-foreground font-light max-w-2xl mx-auto">
            Explore my data analysis and machine learning projects that demonstrate my ability to extract insights and build predictive models.
          </p>
        </motion.div>

        <CircleCarousel />

        <StackedProjects />
      </div>
    </section>
  );
}

function StackedProjects() {
  const stackRef = useRef<HTMLDivElement>(null);

  return (
    <div ref={stackRef} className="relative mt-16 md:mt-24">
      {projects.map((project, i) => (
        <StackedCard key={project.title} project={project} index={i} total={projects.length} />
      ))}
    </div>
  );
}

function StackedCard({
  project,
  index,
  total,
}: {
  project: (typeof projects)[number];
  index: number;
  total: number;
}) {
  const cardRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: cardRef,
    offset: ['start 80%', 'start 20%'],
  });
  // Cards behind shrink and dim slightly as next one comes over
  const { scrollYProgress: outProgress } = useScroll({
    target: cardRef,
    offset: ['end 60%', 'end 10%'],
  });
  const scale = useTransform(outProgress, [0, 1], [1, 0.92]);
  const opacity = useTransform(outProgress, [0, 1], [1, 0.5]);
  const y = useTransform(scrollYProgress, [0, 1], [60, 0]);
  const enterOpacity = useTransform(scrollYProgress, [0, 1], [0, 1]);

  // Stagger sticky offset so cards stack with a small reveal
  const topOffset = 90 + index * 14;

  return (
    <div
      ref={cardRef}
      className="sticky"
      style={{ top: `${topOffset}px`, marginBottom: index === total - 1 ? 0 : '2rem', zIndex: index + 1 }}
    >
      <motion.a
        href={project.link}
        target="_blank"
        rel="noopener noreferrer"
        style={{ scale, opacity, y: index === 0 ? 0 : y }}
        className="group relative rounded-2xl md:rounded-3xl card-glass glass-shine overflow-hidden hover-lift cursor-pointer grid md:grid-cols-2 gap-0 will-change-transform block"
      >
        <motion.div style={{ opacity: index === 0 ? 1 : enterOpacity }} className="contents">
          <div className={`relative w-full h-56 md:h-full min-h-[14rem] overflow-hidden ${index % 2 === 1 ? 'md:order-2' : ''}`}>
            <img
              src={project.image}
              alt={`${project.title} preview`}
              loading="lazy"
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t md:bg-gradient-to-r from-card/80 via-card/20 to-transparent" />
            <div className={`absolute bottom-3 left-3 w-12 h-12 rounded-2xl bg-gradient-to-br ${project.color} flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300`}>
              <project.icon className="w-6 h-6 text-white" />
            </div>
          </div>

          <div className="relative p-6 md:p-10 flex flex-col justify-center">
            <div className={`absolute inset-0 bg-gradient-to-br ${project.color} opacity-0 group-hover:opacity-10 transition-opacity duration-500 pointer-events-none`} />
            <h3 className="font-display text-2xl md:text-3xl font-medium text-foreground mb-3 group-hover:text-primary transition-colors">
              {project.title}
            </h3>
            <p className="text-muted-foreground mb-6 font-light">{project.description}</p>
            <div className="flex flex-wrap gap-2 mb-6">
              {project.tags.map((tag) => (
                <span
                  key={tag}
                  className="px-3 py-1 text-sm rounded-full bg-card/50 backdrop-blur-sm text-muted-foreground border border-border/20"
                >
                  {tag}
                </span>
              ))}
            </div>
            <div className="flex items-center gap-2 text-primary font-normal">
              <span>View on GitHub</span>
              <ExternalLink className="w-4 h-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
            </div>
          </div>
        </motion.div>
      </motion.a>
      {/* Spacer to create scroll distance per card */}
      <div className="h-[60vh] md:h-[70vh] pointer-events-none" aria-hidden />
    </div>
  );
}

function ProjectsClosing() {
  return null;
      </div>
    </section>
  );
}
