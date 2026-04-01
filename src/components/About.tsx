import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { TrendingUp, Database, BarChart3, Brain } from 'lucide-react';

const highlights = [
  { icon: TrendingUp, label: 'Data Analysis', description: 'Transform raw data into insights' },
  { icon: Database, label: 'Database Management', description: 'SQL & data modeling expertise' },
  { icon: BarChart3, label: 'Visualization', description: 'Power BI & dashboard design' },
  { icon: Brain, label: 'Machine Learning', description: 'Predictive modeling with Python' },
];

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: (i: number) => ({
    opacity: 1, y: 0,
    transition: { duration: 0.7, delay: i * 0.1, ease: [0.25, 0.46, 0.45, 0.94] },
  }),
};

export default function About() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="about" className="py-24 md:py-32 px-4 md:px-6 relative">
      <div className="section-divider mb-24" />
      <div className="container mx-auto max-w-6xl" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, ease: [0.25, 0.46, 0.45, 0.94] }}
          className="text-center mb-16"
        >
          <span className="font-mono text-sm text-primary/70 tracking-widest uppercase mb-4 block">Who I Am</span>
          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
            About <span className="text-gradient">Me</span>
          </h2>
          <div className="w-20 h-1 mx-auto rounded-full" style={{ background: 'var(--gradient-primary)' }} />
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 md:gap-16 items-center">
          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.25, 0.46, 0.45, 0.94] }}
          >
            <p className="text-base md:text-lg text-muted-foreground leading-relaxed mb-6">
              I'm a <span className="text-foreground font-medium">detail-oriented Data Analyst</span> with a strong foundation in data analysis, data visualization, and database management. Proficient in Python, SQL and Power BI, with hands-on experience in cleaning, modeling, and analyzing large datasets.
            </p>
            <p className="text-base md:text-lg text-muted-foreground leading-relaxed mb-8">
              Adept at designing interactive dashboards, conducting statistical analyses, and deriving actionable insights. <span className="text-primary font-medium">Certified by Google and Microsoft</span> in data analytics, Power BI, Azure, AI/ML, and Google Ads. Currently an Intern at Microsoft Elevate.
            </p>

            <div className="flex flex-wrap items-center gap-4">
              {[
                { num: '5+', label: 'Projects' },
                { num: '8', label: 'Certifications' },
                { num: '7+', label: 'Work Experience' },
              ].map((stat, i) => (
                <motion.div
                  key={stat.label}
                  custom={i + 3}
                  variants={fadeUp}
                  initial="hidden"
                  animate={isInView ? "visible" : "hidden"}
                  className="p-4 rounded-xl card-glow glass-shine flex-1 min-w-[90px] text-center"
                >
                  <p className="text-2xl md:text-3xl font-display font-bold text-gradient">{stat.num}</p>
                  <p className="text-xs md:text-sm text-muted-foreground mt-1">{stat.label}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Highlights Grid */}
          <div className="grid grid-cols-2 gap-4">
            {highlights.map((item, index) => (
              <motion.div
                key={item.label}
                custom={index}
                variants={fadeUp}
                initial="hidden"
                animate={isInView ? "visible" : "hidden"}
                className="group p-5 md:p-6 card-glow glass-shine cursor-default"
              >
                <div className="w-12 h-12 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300"
                     style={{ background: 'linear-gradient(135deg, hsl(263 70% 58% / 0.2), hsl(190 80% 50% / 0.15))' }}>
                  <item.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="font-display font-semibold text-foreground mb-1 text-sm md:text-base">{item.label}</h3>
                <p className="text-xs md:text-sm text-muted-foreground">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}