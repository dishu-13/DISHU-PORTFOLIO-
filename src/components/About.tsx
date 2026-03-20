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

const codeSnippet = `const analyst = {
  name: "Dishu Daksh",
  role: "Data Analyst",
  languages: ["Python", "SQL", "HTML", "CSS"],
  tools: [
    "Power BI", "Tableau",
    "Pandas", "Scikit-Learn"
  ],
  certifications: [
    "Google Data Analytics",
    "Microsoft Power BI",
    "Microsoft Azure"
  ]
};

// Ready to analyze 🚀`;

export default function About() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="about" className="py-20 md:py-32 px-4 relative">
      <div className="container mx-auto max-w-6xl" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <p className="text-primary font-mono text-sm mb-3">&lt; About Me /&gt;</p>
          <h2 className="font-display text-3xl md:text-5xl font-bold mb-4">
            I'm Dishu Daksh, <br />
            <span className="text-gradient">a passionate Data Analyst</span>
          </h2>
          <div className="section-line mx-auto mt-4" />
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-10 items-start">
          {/* Text + Stats */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <p className="text-muted-foreground text-base md:text-lg leading-relaxed mb-5">
              I'm a <span className="text-foreground font-medium">detail-oriented Data Analyst</span> with a strong foundation in data analysis, data visualization, and database management. Proficient in Python, SQL and Power BI, with hands-on experience in cleaning, modeling, and analyzing large datasets.
            </p>
            <p className="text-muted-foreground text-base md:text-lg leading-relaxed mb-8">
              Adept at designing interactive dashboards, conducting statistical analyses, and deriving actionable insights. <span className="text-primary">Certified by Google and Microsoft</span> in data analytics, Power BI, Azure, AI/ML, and Google Ads. Currently an Intern at Microsoft Elevate.
            </p>

            {/* Stats */}
            <div className="flex gap-4 mb-8">
              {[
                { num: '5+', label: 'Projects' },
                { num: '8', label: 'Certifications' },
                { num: '7+', label: 'Work Experience' },
              ].map((stat) => (
                <div key={stat.label} className="p-4 rounded-xl bg-secondary/50 border border-border flex-1 text-center">
                  <p className="text-2xl md:text-3xl font-display font-bold text-gradient">{stat.num}</p>
                  <p className="text-xs text-muted-foreground mt-1">{stat.label}</p>
                </div>
              ))}
            </div>

            {/* Highlight cards */}
            <div className="grid grid-cols-2 gap-3">
              {highlights.map((item, i) => (
                <motion.div
                  key={item.label}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ delay: 0.4 + i * 0.1 }}
                  className="group p-4 rounded-xl card-glass hover-lift"
                >
                  <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center mb-3 group-hover:bg-primary/20 transition-colors">
                    <item.icon className="w-5 h-5 text-primary" />
                  </div>
                  <h3 className="font-display font-medium text-foreground text-sm mb-1">{item.label}</h3>
                  <p className="text-xs text-muted-foreground">{item.description}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Code snippet */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <div className="code-block">
              {/* Window dots */}
              <div className="flex gap-2 mb-4">
                <div className="w-3 h-3 rounded-full bg-destructive/60" />
                <div className="w-3 h-3 rounded-full bg-yellow-500/60" />
                <div className="w-3 h-3 rounded-full bg-primary/60" />
              </div>
              <pre className="text-muted-foreground leading-relaxed text-xs md:text-sm">
                {codeSnippet.split('\n').map((line, i) => (
                  <div key={i} className="flex">
                    <span className="text-muted-foreground/40 select-none w-8 text-right mr-4 flex-shrink-0">{i + 1}</span>
                    <span
                      dangerouslySetInnerHTML={{
                        __html: line
                          .replace(/"([^"]+)"/g, '<span class="text-primary">\"$1\"</span>')
                          .replace(/\/\/.*/g, (m) => `<span class="text-muted-foreground/60 italic">${m}</span>`)
                          .replace(/\b(const|let|var)\b/g, '<span class="text-accent">$1</span>')
                      }}
                    />
                  </div>
                ))}
              </pre>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
