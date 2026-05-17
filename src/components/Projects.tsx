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
  const rotateY = useTransform(scrollYProgress, [0, 1], [0, 360]);
  const scale = useTransform(scrollYProgress, [0, 0.4, 1], [0.85, 1, 0.95]);
  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0.6]);

  const count = projects.length;
  const radius = 260;

  return (
    <div ref={containerRef} className="relative w-full flex flex-col items-center justify-center py-16 md:py-24">
      {/* Reflective floor */}
      <div
        aria-hidden
        className="absolute inset-x-0 bottom-10 md:bottom-16 h-40 md:h-56 pointer-events-none"
        style={{
          background:
            'radial-gradient(ellipse at center, hsl(var(--primary) / 0.18), transparent 60%)',
          filter: 'blur(20px)',
        }}
      />
      <div
        className="relative"
        style={{ perspective: '1400px', perspectiveOrigin: '50% 30%' }}
      >
        <motion.div
          style={{
            rotateY,
            scale,
            opacity,
            transformStyle: 'preserve-3d',
            rotateX: 18,
          }}
          className="relative w-[320px] h-[320px] md:w-[460px] md:h-[460px]"
        >
          {projects.map((project, i) => {
            const angle = (i / count) * 360;
            return (
              <div
                key={project.title}
                className="absolute top-1/2 left-1/2 w-24 h-28 md:w-36 md:h-44 -ml-12 -mt-14 md:-ml-[72px] md:-mt-[88px]"
                style={{
                  transform: `rotateY(${angle}deg) translateZ(${radius}px)`,
                  transformStyle: 'preserve-3d',
                }}
              >
                <div className="relative w-full h-full rounded-xl overflow-hidden shadow-[0_20px_50px_-15px_hsl(var(--primary)/0.5)] ring-1 ring-white/10 bg-card">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background/40 to-transparent" />
                </div>
                {/* mirrored reflection */}
                <div
                  aria-hidden
                  className="absolute left-0 right-0 top-full mt-1 h-full rounded-xl overflow-hidden opacity-30"
                  style={{ transform: 'scaleY(-1)', maskImage: 'linear-gradient(to bottom, black, transparent 70%)', WebkitMaskImage: 'linear-gradient(to bottom, black, transparent 70%)' }}
                >
                  <img src={project.image} alt="" className="w-full h-full object-cover" />
                </div>
              </div>
            );
          })}
        </motion.div>
      </div>
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
  return (
    <div className="relative mt-16 md:mt-24">
      {projects.map((project, i) => (
        <StackedCard key={project.title} project={project} index={i} total={projects.length} />
      ))}
      <div className="h-[40vh]" />
    </div>
  );
}

const COLLAPSED_PX = 64;

function StackedCard({
  project,
  index,
  total,
}: {
  project: (typeof projects)[number];
  index: number;
  total: number;
}) {
  const wrapperRef = useRef<HTMLDivElement>(null);
  const stagger = 14;
  const topOffset = 96 + index * stagger;
  const isLast = index === total - 1;

  const { scrollYProgress } = useScroll({
    target: wrapperRef,
    offset: ['start end', 'start start'],
  });

  const height = useTransform(
    scrollYProgress,
    [0, 1],
    [`${COLLAPSED_PX}px`, '82vh']
  );
  const contentOpacity = useTransform(scrollYProgress, [0.55, 0.95], [0, 1]);
  const collapsedOpacity = useTransform(scrollYProgress, [0.4, 0.85], [1, 0]);

  return (
    <div
      ref={wrapperRef}
      style={{
        height: '85vh',
        marginTop: index === 0 ? 0 : `-${85 - (COLLAPSED_PX / window.innerHeight) * 100 - 2}vh`,
      }}
    >
      <div
        className="sticky w-full"
        style={{ top: `${topOffset}px`, zIndex: index + 1 }}
      >
        <motion.div
          style={{ height: isLast ? '82vh' : height }}
          className="group relative w-full rounded-2xl md:rounded-3xl overflow-hidden will-change-[height] border border-border/40 bg-card/95 backdrop-blur-xl shadow-[0_30px_80px_-20px_hsl(var(--primary)/0.35)]"
        >
          {/* macOS window chrome */}
          <div className="absolute top-4 right-4 md:top-5 md:right-5 z-20 flex items-center gap-1.5">
            <span className="w-3 h-3 rounded-full bg-[hsl(var(--destructive))]/80" />
            <span className="w-3 h-3 rounded-full bg-amber-400/80" />
            <span className="w-3 h-3 rounded-full bg-emerald-400/80" />
          </div>

          {/* Collapsed state: tag line on the left, visible when card is in collapsed strip */}
          {!isLast && (
            <motion.div
              style={{ opacity: collapsedOpacity }}
              className="absolute top-0 left-0 right-0 h-[64px] flex items-center px-6 md:px-10 pointer-events-none"
            >
              <div className="text-[11px] md:text-xs font-normal tracking-[0.2em] uppercase text-primary">
                {project.tags.slice(0, 4).join(' · ')}
              </div>
            </motion.div>
          )}

          <motion.div
            style={{ opacity: isLast ? 1 : contentOpacity }}
            className="grid md:grid-cols-2 gap-0 h-full"
          >
            {/* Left: content */}
            <div className="relative p-6 md:p-10 flex flex-col justify-center order-2 md:order-1">
              <div className="text-[11px] md:text-xs font-normal tracking-[0.2em] uppercase text-primary mb-4">
                {project.tags.slice(0, 4).join(' · ')}
              </div>
              <h3 className="font-display text-3xl md:text-4xl font-medium text-foreground mb-4 leading-tight">
                {project.title}
              </h3>
              <p className="text-muted-foreground mb-6 font-light text-sm md:text-base leading-relaxed max-w-md">
                {project.description}
              </p>
              <div className="flex flex-wrap gap-2 mb-8">
                {project.tags.slice(0, 3).map((tag) => (
                  <span
                    key={tag}
                    className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs rounded-full bg-background/60 backdrop-blur-sm text-foreground/80 border border-border/40"
                  >
                    <span className={`w-1.5 h-1.5 rounded-full bg-gradient-to-br ${project.color}`} />
                    {tag}
                  </span>
                ))}
              </div>
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex w-fit items-center gap-2 px-5 py-2.5 rounded-full border border-border/60 bg-background/40 hover:bg-background/70 hover:border-primary/60 text-sm font-light text-foreground transition-all duration-300"
              >
                <span>View Case Study</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            </div>

            {/* Right: image inside mini browser frame */}
            <div className="relative p-6 md:p-8 md:pl-0 flex items-center justify-center order-1 md:order-2">
              <div className="relative w-full rounded-xl overflow-hidden border border-border/50 bg-background/60 shadow-xl">
                <div className="flex items-center gap-1.5 px-3 py-2 bg-background/80 border-b border-border/40">
                  <span className="w-2.5 h-2.5 rounded-full bg-[hsl(var(--destructive))]/70" />
                  <span className="w-2.5 h-2.5 rounded-full bg-amber-400/70" />
                  <span className="w-2.5 h-2.5 rounded-full bg-emerald-400/70" />
                </div>
                <div className="aspect-[16/10] overflow-hidden">
                  <img
                    src={project.image}
                    alt={`${project.title} preview`}
                    loading="lazy"
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                </div>
              </div>
              <div className={`absolute -inset-2 -z-10 bg-gradient-to-br ${project.color} opacity-20 blur-3xl rounded-full pointer-events-none`} />
            </div>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
}



