import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Briefcase, MapPin, Calendar } from 'lucide-react';

const experiences = [
  {
    title: 'Microsoft Elevate Intern',
    company: 'Microsoft',
    type: 'Internship',
    period: 'Feb 2026 - Mar 2026',
    location: 'Remote',
    description: [
      'Completed 4-week internship on Emerging Technologies (Power BI, Azure, AI/ML, Copilot, Cloud)',
      'Built interactive Power BI dashboards to visualize KPIs, sales trends, and performance metrics',
      'Earned 6 co-branded certificates from Microsoft & AICTE'
    ],
  },
  {
    title: 'Campus Ambassador',
    company: 'eDC IIT Delhi',
    type: 'Internship',
    period: 'Dec 2025 - Jan 2026',
    location: 'Remote',
    description: [
      'Represented the organization and promoted events, initiatives, and programs',
      'Coordinated with students and teams to increase participation and engagement',
    ],
  },
  {
    title: 'Associate Data Analyst',
    company: 'Excelerate',
    type: 'Internship',
    period: 'Aug 2025 - Sep 2025',
    location: 'Remote',
    description: [
      'Curated, cleaned, and transformed raw datasets into actionable insights',
      'Created data visualizations and dashboards in Looker Studio for stakeholders',
    ],
  },
  {
    title: 'Back End Developer',
    company: 'Prodesk IT',
    type: 'Internship',
    period: 'Jun 2025 - Jul 2025',
    location: 'Remote',
    description: [
      'Developed backend solutions and APIs for web applications',
      'Worked with databases and server-side technologies',
    ],
  },
  {
    title: 'Data Analyst Intern',
    company: 'Oasis Infobyte',
    type: 'Internship',
    period: 'Mar 2025 - Apr 2025',
    location: 'Remote',
    description: [
      'Worked on real-world analytics projects including retail data exploration',
      'Built and fine-tuned ML models using regression, classification, and clustering',
    ],
  },
  {
    title: 'NCC Cadet',
    company: '78 UK BN NCC Haldwani',
    type: 'Training',
    period: 'Mar 2018 - Mar 2023',
    location: 'Uttarakhand, India',
    description: [
      'Developed strong discipline, leadership, and teamwork through 5 years of training',
    ],
  },
  {
    title: 'Campus Ambassador',
    company: 'TRYST, IIT Delhi',
    type: 'Internship',
    period: 'Jan 2023 - Feb 2023',
    location: 'On-site',
    description: [
      'Led promotional campaigns and outreach activities',
    ],
  },
];

export default function Experience() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  return (
    <section id="experience" className="py-16 md:py-32 px-4 relative">
      <div className="container mx-auto max-w-4xl" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <p className="text-primary font-mono text-sm mb-3">Experience</p>
          <h2 className="font-display text-3xl md:text-5xl font-bold mb-4">
            Work <span className="text-gradient">Experience</span>
          </h2>
          <div className="section-line mx-auto" />
        </motion.div>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-4 md:left-8 top-0 bottom-0 w-px bg-border" />

          <div className="space-y-6">
            {experiences.map((exp, index) => (
              <motion.div
                key={exp.title + exp.company}
                initial={{ opacity: 0, x: -20 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ delay: index * 0.08, duration: 0.5 }}
                className="relative pl-12 md:pl-20"
              >
                {/* Timeline dot */}
                <div className="absolute left-4 md:left-8 -translate-x-1/2 w-3 h-3 rounded-full bg-primary border-2 border-background mt-6" />

                <div className="p-5 md:p-6 rounded-xl card-glass hover-lift">
                  <div className="flex flex-wrap items-center gap-2 mb-3">
                    <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-medium border border-primary/20">
                      <Briefcase className="w-3 h-3" />
                      {exp.type}
                    </span>
                    <span className="flex items-center gap-1 text-xs text-muted-foreground">
                      <Calendar className="w-3 h-3" />
                      {exp.period}
                    </span>
                    <span className="flex items-center gap-1 text-xs text-muted-foreground">
                      <MapPin className="w-3 h-3" />
                      {exp.location}
                    </span>
                  </div>

                  <h3 className="font-display text-lg font-semibold text-foreground mb-1">
                    {exp.title}
                  </h3>
                  <p className="text-primary text-sm font-medium mb-3">{exp.company}</p>

                  <ul className="space-y-1.5">
                    {exp.description.map((item, i) => (
                      <li key={i} className="text-muted-foreground text-sm flex items-start gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-primary/50 mt-1.5 flex-shrink-0" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
