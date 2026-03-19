import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Calendar, MapPin, ArrowUpRight } from 'lucide-react';

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
      'Built communication and leadership skills through diverse outreach'
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
      'Applied storytelling techniques to present analytical findings effectively'
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
      'Worked with databases and server-side technologies'
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
      'Segmented customers, analyzed sentiment, and detected fraud patterns',
      'Built and fine-tuned ML models using regression, classification, and clustering'
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
      'Participated in drills, leadership exercises, and organizational events'
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
      'Developed project management and leadership skills'
    ],
  }
];

export default function Experience() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  return (
    <section id="experience" className="py-24 md:py-32 px-6 md:px-12 relative">
      <div className="container mx-auto max-w-7xl" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <p className="text-xs font-medium uppercase tracking-[0.3em] text-primary mb-4">( Experience )</p>
          <h2 className="font-display text-4xl md:text-6xl font-bold uppercase tracking-tight">
            Work <span className="text-primary">History</span>
          </h2>
        </motion.div>

        <div className="space-y-0">
          {experiences.map((exp, index) => (
            <motion.div
              key={exp.title + exp.company}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.08 }}
              className="group border-t border-border py-8 md:py-10 hover:bg-secondary/20 transition-colors duration-300 -mx-6 px-6 md:-mx-12 md:px-12"
            >
              <div className="flex flex-col md:flex-row md:items-start gap-4 md:gap-8">
                {/* Left: number + title */}
                <div className="flex items-start gap-4 md:w-1/3">
                  <span className="text-xs text-muted-foreground font-mono mt-1">
                    [{String(index + 1).padStart(2, '0')}]
                  </span>
                  <div>
                    <h3 className="font-display text-lg font-bold text-foreground group-hover:text-primary transition-colors">
                      {exp.title}
                    </h3>
                    <p className="text-primary text-sm font-medium">{exp.company}</p>
                  </div>
                </div>

                {/* Middle: meta */}
                <div className="flex flex-wrap gap-4 text-xs text-muted-foreground md:w-1/6">
                  <span className="flex items-center gap-1.5">
                    <Calendar className="w-3 h-3" />
                    {exp.period}
                  </span>
                  <span className="flex items-center gap-1.5">
                    <MapPin className="w-3 h-3" />
                    {exp.location}
                  </span>
                </div>

                {/* Right: description */}
                <div className="md:flex-1">
                  <ul className="space-y-1.5">
                    {exp.description.map((item, i) => (
                      <li key={i} className="text-muted-foreground text-sm flex items-start gap-2">
                        <span className="w-1 h-1 rounded-full bg-primary mt-2 flex-shrink-0" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Arrow */}
                <ArrowUpRight className="hidden md:block w-5 h-5 text-muted-foreground group-hover:text-primary group-hover:translate-x-1 group-hover:-translate-y-1 transition-all flex-shrink-0" />
              </div>
            </motion.div>
          ))}
          {/* Bottom border */}
          <div className="border-t border-border" />
        </div>
      </div>
    </section>
  );
}
