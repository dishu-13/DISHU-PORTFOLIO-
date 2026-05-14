import { motion, useScroll, useTransform, useSpring, useMotionValue, useMotionTemplate } from 'framer-motion';
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

/* ---------- Floating ambient background ---------- */
function AmbientBackdrop() {
  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden">
      <motion.div
        aria-hidden
        className="absolute -top-32 -left-24 w-[42rem] h-[42rem] rounded-full bg-gradient-to-br from-primary/20 via-accent/10 to-transparent blur-3xl"
        animate={{ x: [0, 40, -20, 0], y: [0, 30, -10, 0], scale: [1, 1.08, 0.96, 1] }}
        transition={{ duration: 22, repeat: Infinity, ease: 'easeInOut' }}
      />
      <motion.div
        aria-hidden
        className="absolute top-1/3 -right-32 w-[36rem] h-[36rem] rounded-full bg-gradient-to-tr from-accent/15 via-primary/10 to-transparent blur-3xl"
        animate={{ x: [0, -30, 20, 0], y: [0, 20, -25, 0], scale: [1, 1.05, 0.98, 1] }}
        transition={{ duration: 26, repeat: Infinity, ease: 'easeInOut' }}
      />
      <motion.div
        aria-hidden
        className="absolute bottom-0 left-1/3 w-[30rem] h-[30rem] rounded-full bg-gradient-to-tr from-violet-400/10 via-cyan-300/10 to-transparent blur-3xl"
        animate={{ x: [0, 20, -30, 0], y: [0, -20, 15, 0], scale: [1, 1.07, 0.95, 1] }}
        transition={{ duration: 30, repeat: Infinity, ease: 'easeInOut' }}
      />
    </div>
  );
}

function CircleCarousel() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start end', 'end start'],
  });
  // Smooth inertia on scroll
  const smooth = useSpring(scrollYProgress, { stiffness: 80, damping: 20, mass: 0.4 });
  const rotate = useTransform(smooth, [0, 1], [0, 220]);
  const counterRotate = useTransform(rotate, (r) => -r);
  const scale = useTransform(smooth, [0, 0.4, 1], [0.82, 1, 0.94]);
  const opacity = useTransform(smooth, [0, 0.2, 0.8, 1], [0, 1, 1, 0.6]);
  const float = useTransform(smooth, [0, 1], [-10, 10]);

  const count = projects.length;
  const radius = 150;

  return (
    <div ref={containerRef} className="relative w-full flex flex-col items-center justify-center py-12 md:py-20">
      <motion.div
        style={{ rotate, scale, opacity, y: float }}
        className="relative w-[340px] h-[340px] md:w-[440px] md:h-[440px]"
      >
        {/* glow ring */}
        <motion.div
          aria-hidden
          className="absolute inset-0 rounded-full bg-gradient-to-br from-primary/15 via-transparent to-accent/15 blur-2xl"
          animate={{ opacity: [0.4, 0.7, 0.4] }}
          transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
        />
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
                whileHover={{ scale: 1.15, y: -4 }}
                transition={{ type: 'spring', stiffness: 260, damping: 18 }}
                className="w-full h-full rounded-2xl overflow-hidden shadow-xl ring-1 ring-border/30 group cursor-pointer"
              >
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
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
    <section id="projects" className="py-20 md:py-32 px-4 relative section-frost overflow-hidden">
      <AmbientBackdrop />
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-secondary/30 to-transparent pointer-events-none" />

      <div className="container mx-auto max-w-6xl relative">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
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
    <div ref={stackRef} className="relative mt-16 md:mt-24" style={{ perspective: '1400px' }}>
      {projects.map((project, i) => (
        <StackedCard key={project.title} project={project} index={i} total={projects.length} />
      ))}
    </div>
  );
}

function StackedCard({
  project,
  index,
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
  const { scrollYProgress: outProgress } = useScroll({
    target: cardRef,
    offset: ['end 60%', 'end 10%'],
  });

  // Smooth inertia
  const inSmooth = useSpring(scrollYProgress, { stiffness: 90, damping: 22, mass: 0.4 });
  const outSmooth = useSpring(outProgress, { stiffness: 90, damping: 22, mass: 0.4 });

  // Cinematic transitions
  const scale = useTransform(outSmooth, [0, 1], [1, 0.9]);
  const opacity = useTransform(outSmooth, [0, 1], [1, 0.4]);
  const rotateX = useTransform(outSmooth, [0, 1], [0, 6]);
  const yOut = useTransform(outSmooth, [0, 1], [0, -30]);
  const blur = useTransform(outSmooth, [0, 1], [0, 4]);
  const filter = useMotionTemplate`blur(${blur}px)`;

  // Reveal as it enters
  const yIn = useTransform(inSmooth, [0, 1], [80, 0]);
  const enterOpacity = useTransform(inSmooth, [0, 1], [0, 1]);
  const enterRotateX = useTransform(inSmooth, [0, 1], [-8, 0]);

  // Premium hover (parallax tilt)
  const mx = useMotionValue(0);
  const my = useMotionValue(0);
  const tiltX = useSpring(useTransform(my, [-0.5, 0.5], [6, -6]), { stiffness: 150, damping: 15 });
  const tiltY = useSpring(useTransform(mx, [-0.5, 0.5], [-6, 6]), { stiffness: 150, damping: 15 });
  const glowX = useTransform(mx, [-0.5, 0.5], ['0%', '100%']);
  const glowY = useTransform(my, [-0.5, 0.5], ['0%', '100%']);
  const glowBg = useMotionTemplate`radial-gradient(600px circle at ${glowX} ${glowY}, hsl(var(--primary) / 0.18), transparent 40%)`;

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    mx.set((e.clientX - rect.left) / rect.width - 0.5);
    my.set((e.clientY - rect.top) / rect.height - 0.5);
  };
  const handleMouseLeave = () => {
    mx.set(0);
    my.set(0);
  };

  const topOffset = 90 + index * 14;

  return (
    <div
      ref={cardRef}
      className="relative h-[90vh] md:h-[100vh]"
      style={{ zIndex: index + 1 }}
    >
      <div className="sticky" style={{ top: `${topOffset}px` }}>
        <motion.div
          onMouseMove={handleMouseMove}
          onMouseLeave={handleMouseLeave}
          style={{
            scale,
            opacity,
            rotateX: index === 0 ? rotateX : enterRotateX,
            y: index === 0 ? yOut : yIn,
            filter,
            transformStyle: 'preserve-3d',
            transformPerspective: 1400,
          }}
          className="group relative rounded-2xl md:rounded-3xl overflow-hidden will-change-transform border border-border/40 bg-card/80 backdrop-blur-xl shadow-2xl transition-shadow duration-500 hover:shadow-[0_30px_80px_-20px_hsl(var(--primary)/0.35)]"
        >
          {/* Cursor-follow glow */}
          <motion.div
            aria-hidden
            style={{ background: glowBg }}
            className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none z-10"
          />

          {/* Gradient hairline border on hover */}
          <div className={`absolute inset-0 rounded-2xl md:rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none bg-gradient-to-br ${project.color} blur-md -z-10`} />

          {/* macOS window chrome */}
          <div className="absolute top-4 right-4 md:top-5 md:right-5 z-20 flex items-center gap-1.5">
            <span className="w-3 h-3 rounded-full bg-[hsl(var(--destructive))]/80" />
            <span className="w-3 h-3 rounded-full bg-amber-400/80" />
            <span className="w-3 h-3 rounded-full bg-emerald-400/80" />
          </div>

          <motion.div
            style={{ opacity: index === 0 ? 1 : enterOpacity }}
            className="grid md:grid-cols-2 gap-0 relative"
          >
            {/* Left: content */}
            <div className="relative p-6 md:p-10 flex flex-col justify-center order-2 md:order-1" style={{ transform: 'translateZ(40px)' }}>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-80px' }}
                transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
                className="text-[11px] md:text-xs font-normal tracking-[0.2em] uppercase text-primary mb-4"
              >
                {project.tags.slice(0, 4).join(' · ')}
              </motion.div>
              <motion.h3
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-80px' }}
                transition={{ duration: 0.8, delay: 0.05, ease: [0.22, 1, 0.36, 1] }}
                className="font-display text-3xl md:text-4xl font-medium text-foreground mb-4 leading-tight"
              >
                {project.title}
              </motion.h3>
              <motion.p
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-80px' }}
                transition={{ duration: 0.8, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
                className="text-muted-foreground mb-6 font-light text-sm md:text-base leading-relaxed max-w-md"
              >
                {project.description}
              </motion.p>
              <motion.div
                initial={{ opacity: 0, y: 14 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-80px' }}
                transition={{ duration: 0.7, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
                className="flex flex-wrap gap-2 mb-8"
              >
                {project.tags.slice(0, 3).map((tag) => (
                  <span
                    key={tag}
                    className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs rounded-full bg-background/60 backdrop-blur-sm text-foreground/80 border border-border/40 transition-all duration-300 hover:border-primary/60 hover:bg-background/90"
                  >
                    <span className={`w-1.5 h-1.5 rounded-full bg-gradient-to-br ${project.color}`} />
                    {tag}
                  </span>
                ))}
              </motion.div>
              <motion.a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, y: 14 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-80px' }}
                transition={{ duration: 0.7, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
                whileHover={{ x: 4 }}
                className="inline-flex w-fit items-center gap-2 px-5 py-2.5 rounded-full border border-border/60 bg-background/40 hover:bg-background/80 hover:border-primary/60 text-sm font-light text-foreground transition-all duration-300 group/btn"
              >
                <span>View Case Study</span>
                <ExternalLink className="w-3.5 h-3.5 transition-transform duration-300 group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5" />
              </motion.a>
            </div>

            {/* Right: image inside mini browser frame */}
            <div className="relative p-6 md:p-8 md:pl-0 flex items-center justify-center order-1 md:order-2" style={{ transform: 'translateZ(60px)' }}>
              <motion.div
                initial={{ opacity: 0, scale: 0.94, y: 24 }}
                whileInView={{ opacity: 1, scale: 1, y: 0 }}
                viewport={{ once: true, margin: '-80px' }}
                transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
                style={{ rotateX: tiltX, rotateY: tiltY, transformStyle: 'preserve-3d' }}
                className="relative w-full rounded-xl overflow-hidden border border-border/50 bg-background/60 shadow-xl"
              >
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
                    className="w-full h-full object-cover transition-transform duration-[1200ms] ease-out group-hover:scale-110"
                  />
                </div>
                {/* sheen */}
                <div className="pointer-events-none absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-[1400ms] ease-out bg-gradient-to-r from-transparent via-white/10 to-transparent" />
              </motion.div>
              <motion.div
                aria-hidden
                animate={{ scale: [1, 1.08, 1], opacity: [0.18, 0.28, 0.18] }}
                transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
                className={`absolute -inset-2 -z-10 bg-gradient-to-br ${project.color} blur-3xl rounded-full pointer-events-none`}
              />
            </div>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
}
