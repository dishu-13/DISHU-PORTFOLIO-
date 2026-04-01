import { motion, useInView } from 'framer-motion';
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
    color: 'from-neon-purple to-neon-blue'
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
    color: 'from-neon-pink to-neon-purple'
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
    color: 'from-neon-cyan to-neon-blue'
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
    color: 'from-neon-blue to-neon-cyan'
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
    color: 'from-neon-cyan to-neon-purple'
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
    color: 'from-neon-blue to-neon-purple'
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
    color: 'from-neon-pink to-neon-cyan'
  }
];

export default function Experience() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  return (
    <section id="experience" className="py-24 md:py-32 px-4 relative">
      <div className="section-divider mb-24" />
      <div className="container mx-auto max-w-5xl" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, ease: [0.25, 0.46, 0.45, 0.94] }}
          className="text-center mb-16"
        >
          <span className="font-mono text-sm text-primary/70 tracking-widest uppercase mb-4 block">My Journey</span>
          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
            Work <span className="text-gradient">Experience</span>
          </h2>
          <div className="w-20 h-1 mx-auto rounded-full" style={{ background: 'var(--gradient-primary)' }} />
        </motion.div>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-px"
               style={{ background: 'linear-gradient(180deg, hsl(263 70% 58% / 0.5), hsl(190 80% 50% / 0.3), hsl(263 70% 58% / 0.1))' }} />

          <div className="space-y-8 md:space-y-12">
            {experiences.map((exp, index) => (
              <motion.div
                key={exp.title + exp.company}
                initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.1, ease: [0.25, 0.46, 0.45, 0.94] }}
                className={`relative flex flex-col md:flex-row ${
                  index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                } items-start md:items-center gap-4 md:gap-8`}
              >
                {/* Timeline dot */}
                <div className="absolute left-4 md:left-1/2 -translate-x-1/2 w-3 h-3 rounded-full z-10 mt-8 md:mt-0"
                     style={{
                       background: 'var(--gradient-primary)',
                       boxShadow: '0 0 12px hsl(263 70% 58% / 0.5)',
                     }} />

                {/* Card */}
                <div className={`w-full pl-10 md:pl-0 md:w-[calc(50%-2rem)] ${index % 2 === 0 ? 'md:pr-8' : 'md:pl-8'}`}>
                  <div className="p-5 md:p-6 card-glow glass-shine hover-lift">
                    <div className={`inline-flex items-center gap-2 px-3 py-1 rounded-full bg-gradient-to-r ${exp.color} text-white text-xs font-medium mb-3`}>
                      <Briefcase className="w-3 h-3" />
                      {exp.type}
                    </div>
                    <h3 className="text-lg md:text-xl font-display font-bold text-foreground mb-1">{exp.title}</h3>
                    <p className="text-primary font-medium text-sm mb-3">{exp.company}</p>
                    <div className="flex flex-wrap gap-3 text-xs text-muted-foreground mb-3">
                      <span className="flex items-center gap-1"><Calendar className="w-3 h-3" />{exp.period}</span>
                      <span className="flex items-center gap-1"><MapPin className="w-3 h-3" />{exp.location}</span>
                    </div>
                    <ul className="space-y-1.5">
                      {exp.description.map((item, i) => (
                        <li key={i} className="text-muted-foreground text-xs md:text-sm flex items-start gap-2">
                          <span className="w-1.5 h-1.5 rounded-full bg-primary/60 mt-1.5 flex-shrink-0" />
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className="hidden md:block w-[calc(50%-2rem)]" />
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}