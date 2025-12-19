import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Briefcase, MapPin, Calendar } from 'lucide-react';

const experiences = [
  {
    title: 'Associate Data Analyst',
    company: 'Excelerate',
    type: 'Internship',
    period: 'Aug 2025 - Sep 2025',
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
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="experience" className="py-32 px-4 relative">
      <div className="container mx-auto max-w-6xl" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="font-display text-4xl md:text-5xl font-medium mb-4">
            Work <span className="text-gradient">Experience</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-primary to-accent mx-auto rounded-full" />
        </motion.div>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-primary via-accent to-primary hidden md:block" />

          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <motion.div
                key={exp.title + exp.company}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.15 }}
                className={`relative flex flex-col md:flex-row ${
                  index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                } items-center gap-8`}
              >
                {/* Timeline dot */}
                <div className="hidden md:block absolute left-1/2 -translate-x-1/2 w-4 h-4 rounded-full bg-gradient-to-r from-primary to-accent z-10" />

                {/* Content card */}
                <div className={`w-full md:w-[calc(50%-2rem)] ${index % 2 === 0 ? 'md:pr-8' : 'md:pl-8'}`}>
                  <div className="p-6 rounded-2xl card-glass hover-lift">
                    <div className={`inline-flex items-center gap-2 px-3 py-1 rounded-full bg-gradient-to-r ${exp.color} text-white text-sm mb-4`}>
                      <Briefcase className="w-4 h-4" />
                      {exp.type}
                    </div>
                    
                    <h3 className="text-xl font-display font-medium text-foreground mb-1">
                      {exp.title}
                    </h3>
                    <p className="text-primary font-medium mb-3">{exp.company}</p>
                    
                    <div className="flex flex-wrap gap-4 text-sm text-muted-foreground mb-4">
                      <span className="flex items-center gap-1">
                        <Calendar className="w-4 h-4" />
                        {exp.period}
                      </span>
                      <span className="flex items-center gap-1">
                        <MapPin className="w-4 h-4" />
                        {exp.location}
                      </span>
                    </div>
                    
                    <ul className="space-y-2">
                      {exp.description.map((item, i) => (
                        <li key={i} className="text-muted-foreground text-sm flex items-start gap-2">
                          <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0" />
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
