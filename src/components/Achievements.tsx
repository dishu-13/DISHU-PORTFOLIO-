import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { ExternalLink } from 'lucide-react';
import googleAiAdsCert from '@/assets/certificates/google-ai-ads.png';
import msElevatePowerBICourse from '@/assets/certificates/ms-elevate-powerbi-course.png';
import msElevatePowerBIInternship from '@/assets/certificates/ms-elevate-powerbi-internship.png';

const certificates = [
  {
    title: 'Power BI - Course Completion',
    issuer: 'Microsoft Elevate × AICTE',
    date: 'March 2026',
    image: msElevatePowerBICourse,
  },
  {
    title: 'Power BI - Internship Completion',
    issuer: 'Microsoft Elevate × AICTE',
    date: 'March 2026',
    image: msElevatePowerBIInternship,
  },
  {
    title: 'AI-Powered Performance Ads Certification',
    issuer: 'Google Ads',
    date: 'December 2025',
    image: googleAiAdsCert,
  },
  {
    title: 'Data Analytics Certificate',
    issuer: 'Google',
    date: '2024',
    image: 'https://dishu-13.github.io/portfolio/certificate5.png',
  },
  {
    title: 'SQL Certificate',
    issuer: 'Google',
    date: '2024',
    image: 'https://dishu-13.github.io/portfolio/certificate3.png',
  },
  {
    title: 'Microsoft Excel Certificate',
    issuer: 'Microsoft',
    date: '2024',
    image: 'https://dishu-13.github.io/portfolio/certificate1.png',
  },
  {
    title: 'Power BI Certificate',
    issuer: 'Microsoft',
    date: '2024',
    image: 'https://dishu-13.github.io/portfolio/certificate2.png',
  },
  {
    title: 'HP Life Certificate',
    issuer: 'HP',
    date: '2024',
    image: 'https://dishu-13.github.io/portfolio/certificate4.png',
  },
];

export default function Achievements() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="achievements" className="py-24 md:py-32 px-4 relative">
      <div className="container mx-auto max-w-6xl" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <p className="text-primary font-mono text-sm mb-3">Certifications</p>
          <h2 className="font-display text-3xl md:text-5xl font-bold mb-4">
            Awards & <span className="text-gradient">Certificates</span>
          </h2>
          <p className="text-muted-foreground">
            {certificates.length} certifications from Google, Microsoft & more
          </p>
          <div className="section-line mx-auto mt-4" />
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {certificates.map((cert, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: index * 0.08, duration: 0.5 }}
              className="group relative rounded-xl overflow-hidden card-glass hover-lift"
            >
              <div className="aspect-[4/3] overflow-hidden">
                <img
                  src={cert.image}
                  alt={cert.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  loading="lazy"
                />
              </div>

              <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-4">
                <p className="text-foreground font-medium text-sm">{cert.title}</p>
                <p className="text-muted-foreground text-xs">{cert.issuer} · {cert.date}</p>
              </div>

              <a
                href={cert.image}
                target="_blank"
                rel="noopener noreferrer"
                className="absolute top-3 right-3 p-2 rounded-lg bg-background/80 backdrop-blur-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300 hover:bg-primary hover:text-primary-foreground"
              >
                <ExternalLink className="w-4 h-4" />
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
