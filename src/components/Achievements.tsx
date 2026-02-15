import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Shield, Medal, Award, Trophy, Star, Target } from 'lucide-react';

const achievements = [
  {
    icon: Shield,
    title: 'NCC Certificate "C" - BEE Grade',
    description: 'Passed under Ministry of Defence, Government of India. Unit: 78 UK BN NCC Haldwani, Uttarakhand.',
    year: '2024',
  },
  {
    icon: Trophy,
    title: '5+ Professional Experiences',
    description: 'Worked across data analytics, digital marketing, web development, and insurance at top organizations.',
    year: '2023–Present',
  },
  {
    icon: Award,
    title: '8+ Industry Certifications',
    description: 'Certified by Google, Microsoft & HP in Analytics, SQL, Excel, Power BI, and AI-Powered Ads.',
    year: '2024–2025',
  },
  {
    icon: Target,
    title: 'Data-Driven Problem Solver',
    description: 'Built dashboards and predictive models that delivered actionable business insights across multiple domains.',
    year: 'Ongoing',
  },
  {
    icon: Star,
    title: 'Kotak Mahindra Life Insurance',
    description: 'Selected as Assistance Partner Apprentice with a 1-year contract for recruitment and training operations.',
    year: '2025',
  },
  {
    icon: Medal,
    title: 'IIT Delhi eDC Internship',
    description: 'Completed a web development internship at the entrepreneurship Development Cell of IIT Delhi.',
    year: '2024',
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.12, delayChildren: 0.2 } },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.25, 0.46, 0.45, 0.94] } },
};

export default function Achievements() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="achievements" className="py-32 px-4 relative">
      <div className="container mx-auto max-w-6xl" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="font-display text-4xl md:text-5xl font-medium mb-4">
            Key <span className="text-gradient">Achievements</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-primary to-accent mx-auto rounded-full" />
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5"
        >
          {achievements.map((item, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="group p-6 rounded-2xl card-glass hover-lift"
            >
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform duration-300">
                  <item.icon className="w-6 h-6 text-primary" />
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-center justify-between gap-2 mb-1">
                    <h3 className="font-display font-medium text-foreground text-sm leading-tight">
                      {item.title}
                    </h3>
                  </div>
                  <span className="inline-block text-xs text-primary/80 bg-primary/10 px-2 py-0.5 rounded-full mb-2">
                    {item.year}
                  </span>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
