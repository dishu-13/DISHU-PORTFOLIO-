import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Briefcase, MapPin, Calendar } from 'lucide-react';

// Sorted by start date (newest first)
const experiences = [
  {
    title: 'Assistance Partner Apprentice',
    company: 'Kotak Mahindra Life Insurance',
    type: 'Apprenticeship',
    period: 'Dec 2025 - Present',
    startDate: new Date('2025-12-30'),
    location: 'KLI - Shimla, Hameer House',
    description: [
      'Assisting Partners/Employees in recruitment and training of Life Advisors (LA)',
      'Learning performance review and guidance processes',
      'Fixed term contract of 1 year with stipend of ₹12,300 + incentives'
    ],
    color: 'from-amber-500 to-orange-500'
  },
  {
    title: 'Campus Ambassador',
    company: 'eDC IIT Delhi',
    type: 'Internship',
    period: 'Dec 2025 - Jan 2026',
    startDate: new Date('2025-12-01'),
    location: 'Remote',
    description: [
      'Selected as Campus Ambassador for Entrepreneurship Development Cell, IIT Delhi',
      'Leading promotional campaigns and outreach activities for 45 days',
      'Developing project management and leadership skills'
    ],
    color: 'from-red-500 to-rose-500'
  },
  {
    title: 'Associate Data Analyst',
    company: 'Excelerate',
    type: 'Internship',
    period: 'Aug 2025 - Sep 2025',
    startDate: new Date('2025-08-01'),
    location: 'Remote',
    description: [
      'Curated, cleaned, and transformed raw datasets into actionable insights',
      'Created data visualizations and dashboards in Looker Studio for stakeholders',
      'Applied storytelling techniques to present analytical findings effectively'
    ],
    color: 'from-orange-500 to-red-500'
  },
  {
    title: 'Back End Developer',
    company: 'Prodesk IT',
    type: 'Internship',
    period: 'Jun 2025 - Jul 2025',
    startDate: new Date('2025-06-01'),
    location: 'Remote',
    description: [
      'Developed backend solutions and APIs for web applications',
      'Worked with databases and server-side technologies'
    ],
    color: 'from-blue-500 to-cyan-500'
  },
  {
    title: 'Data Analyst Intern',
    company: 'Oasis Infobyte',
    type: 'Internship',
    period: 'Mar 2025 - Apr 2025',
    startDate: new Date('2025-03-01'),
    location: 'Remote',
    description: [
      'Worked on real-world analytics projects including retail data exploration',
      'Segmented customers, analyzed sentiment, and detected fraud patterns',
      'Built and fine-tuned ML models using regression, classification, and clustering'
    ],
    color: 'from-green-500 to-emerald-500'
  },
  {
    title: 'Campus Ambassador',
    company: 'TRYST, IIT Delhi',
    type: 'Internship',
    period: 'Jan 2023 - Feb 2023',
    startDate: new Date('2023-01-01'),
    location: 'On-site',
    description: [
      'Led promotional campaigns and outreach activities',
      'Developed project management and leadership skills'
    ],
    color: 'from-purple-500 to-pink-500'
  }
];

export default function Experience() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  const itemVariants = {
    hidden: (index: number) => ({ 
      opacity: 0, 
      x: index % 2 === 0 ? -30 : 30 
    }),
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.5,
        ease: [0.25, 0.46, 0.45, 0.94],
      },
    },
  };

  return (
    <section id="experience" className="py-16 md:py-32 px-4 relative">
      <div className="container mx-auto max-w-6xl" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }}
          className="text-center mb-10 md:mb-16"
        >
          <h2 className="font-display text-3xl md:text-5xl font-medium mb-4">
            Work <span className="text-gradient">Experience</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-primary to-accent mx-auto rounded-full" />
        </motion.div>

        <div className="relative">
          {/* Timeline line - centered on desktop, left-aligned on mobile */}
          <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary via-accent to-primary" />

          <div className="space-y-6 md:space-y-12">
            {experiences.map((exp, index) => (
              <motion.div
                key={exp.title + exp.company}
                custom={index}
                initial="hidden"
                animate={isInView ? "visible" : "hidden"}
                variants={itemVariants}
                transition={{ delay: index * 0.1 }}
                className={`relative flex flex-col md:flex-row ${
                  index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                } items-start md:items-center gap-4 md:gap-8`}
              >
                {/* Timeline dot */}
                <div className="absolute left-4 md:left-1/2 -translate-x-1/2 w-3 h-3 md:w-4 md:h-4 rounded-full bg-gradient-to-r from-primary to-accent z-10 mt-8 md:mt-0" />

                {/* Content card - offset on mobile for timeline */}
                <div className={`w-full pl-10 md:pl-0 md:w-[calc(50%-2rem)] ${index % 2 === 0 ? 'md:pr-8' : 'md:pl-8'}`}>
                  <div className="p-4 md:p-6 rounded-2xl card-glass hover-lift">
                    <div className={`inline-flex items-center gap-2 px-3 py-1 rounded-full bg-gradient-to-r ${exp.color} text-white text-xs md:text-sm mb-3 md:mb-4`}>
                      <Briefcase className="w-3 h-3 md:w-4 md:h-4" />
                      {exp.type}
                    </div>
                    
                    <h3 className="text-lg md:text-xl font-display font-medium text-foreground mb-1">
                      {exp.title}
                    </h3>
                    <p className="text-primary font-medium text-sm md:text-base mb-2 md:mb-3">{exp.company}</p>
                    
                    <div className="flex flex-wrap gap-3 md:gap-4 text-xs md:text-sm text-muted-foreground mb-3 md:mb-4">
                      <span className="flex items-center gap-1">
                        <Calendar className="w-3 h-3 md:w-4 md:h-4" />
                        {exp.period}
                      </span>
                      <span className="flex items-center gap-1">
                        <MapPin className="w-3 h-3 md:w-4 md:h-4" />
                        {exp.location}
                      </span>
                    </div>
                    
                    <ul className="space-y-1.5 md:space-y-2">
                      {exp.description.map((item, i) => (
                        <li key={i} className="text-muted-foreground text-xs md:text-sm flex items-start gap-2">
                          <span className="w-1 h-1 md:w-1.5 md:h-1.5 rounded-full bg-primary mt-1.5 md:mt-2 flex-shrink-0" />
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Spacer for alternating layout */}
                <div className="hidden md:block w-[calc(50%-2rem)]" />
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
