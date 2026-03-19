import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { ExternalLink } from 'lucide-react';
import googleAiAdsCert from '@/assets/certificates/google-ai-ads.png';
import msElevatePowerBICourse from '@/assets/certificates/ms-elevate-powerbi-course.png';
import msElevatePowerBIInternship from '@/assets/certificates/ms-elevate-powerbi-internship.png';

const certificates = [
  { title: 'Power BI - Course Completion', issuer: 'Microsoft Elevate × AICTE', date: 'March 2026', image: msElevatePowerBICourse },
  { title: 'Power BI - Internship Completion', issuer: 'Microsoft Elevate × AICTE', date: 'March 2026', image: msElevatePowerBIInternship },
  { title: 'AI-Powered Performance Ads Certification', issuer: 'Google Ads', date: 'December 2025', image: googleAiAdsCert },
  { title: 'Data Analytics Certificate', issuer: 'Google', date: '2024', image: 'https://dishu-13.github.io/portfolio/certificate5.png' },
  { title: 'SQL Certificate', issuer: 'Google', date: '2024', image: 'https://dishu-13.github.io/portfolio/certificate3.png' },
  { title: 'Microsoft Excel Certificate', issuer: 'Microsoft', date: '2024', image: 'https://dishu-13.github.io/portfolio/certificate1.png' },
  { title: 'Power BI Certificate', issuer: 'Microsoft', date: '2024', image: 'https://dishu-13.github.io/portfolio/certificate2.png' },
  { title: 'HP Life Certificate', issuer: 'HP', date: '2024', image: 'https://dishu-13.github.io/portfolio/certificate4.png' },
];

export default function Achievements() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="achievements" className="py-24 md:py-32 px-6 md:px-12 relative">
      <div className="container mx-auto max-w-7xl" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-4"
        >
          <div>
            <p className="text-xs font-medium uppercase tracking-[0.3em] text-primary mb-4">( Certificates )</p>
            <h2 className="font-display text-4xl md:text-6xl font-bold uppercase tracking-tight">
              Awards & <span className="text-primary">Certs</span>
            </h2>
          </div>
          <p className="text-muted-foreground text-sm">
            {certificates.length} certifications from Google, Microsoft & more
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {certificates.map((cert, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.4, delay: index * 0.06 }}
              className="group relative border border-border overflow-hidden hover:border-primary/40 transition-all duration-300"
            >
              <div className="aspect-[4/3] overflow-hidden bg-secondary">
                <img
                  src={cert.image}
                  alt={cert.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  loading="lazy"
                />
              </div>

              {/* Info overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-background via-background/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-5">
                <p className="text-foreground font-display font-bold text-sm uppercase">{cert.title}</p>
                <p className="text-muted-foreground text-xs mt-1">{cert.issuer} · {cert.date}</p>
              </div>

              <a
                href={cert.image}
                target="_blank"
                rel="noopener noreferrer"
                className="absolute top-3 right-3 p-2 border border-border bg-background/80 backdrop-blur-sm opacity-0 group-hover:opacity-100 transition-all duration-300 hover:bg-primary hover:text-primary-foreground hover:border-primary"
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
