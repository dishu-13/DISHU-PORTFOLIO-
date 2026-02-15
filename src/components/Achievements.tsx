import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { ExternalLink, Award, Shield, Medal } from 'lucide-react';
import googleAnalyticsCert from '@/assets/certificates/google-analytics.png';
import googleAiAdsCert from '@/assets/certificates/google-ai-ads.png';
import nccCert from '@/assets/certificates/ncc-c-certificate.jpeg';

const achievements = [
  {
    icon: Shield,
    title: 'NCC Certificate "C" - BEE Grade',
    description: 'Passed under Ministry of Defence, Government of India. Unit: 78 UK BN NCC Haldwani.',
  },
  {
    icon: Medal,
    title: '5+ Professional Internships',
    description: 'Gained hands-on experience across data analytics, digital marketing, and web development.',
  },
  {
    icon: Award,
    title: '8+ Industry Certifications',
    description: 'Certified by Google, Microsoft & HP in Analytics, SQL, Excel, Power BI, and AI Ads.',
  },
];

const certificates = [
  {
    title: 'Google Analytics Certification',
    issuer: 'Google',
    date: 'December 2025',
    image: googleAnalyticsCert,
  },
  {
    title: 'AI-Powered Performance Ads Certification',
    issuer: 'Google Ads',
    date: 'December 2025',
    image: googleAiAdsCert,
  },
  {
    title: 'NCC Certificate "C" Examination',
    issuer: 'Ministry of Defence, India',
    date: '2024',
    image: nccCert,
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

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1, delayChildren: 0.2 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: [0.25, 0.46, 0.45, 0.94] },
  },
};

export default function Achievements() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="achievements" className="py-32 px-4 relative">
      <div className="container mx-auto max-w-6xl" ref={ref}>
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="font-display text-4xl md:text-5xl font-medium mb-4">
            Achievements & <span className="text-gradient">Certificates</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-primary to-accent mx-auto rounded-full" />
        </motion.div>

        {/* Achievement Highlights */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          className="grid grid-cols-1 md:grid-cols-3 gap-5 mb-16"
        >
          {achievements.map((item, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="group p-6 rounded-2xl card-glass hover-lift text-center"
            >
              <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                <item.icon className="w-7 h-7 text-primary" />
              </div>
              <h3 className="font-display font-medium text-foreground mb-2 text-base">
                {item.title}
              </h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                {item.description}
              </p>
            </motion.div>
          ))}
        </motion.div>

        {/* Certificates Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5"
        >
          {certificates.map((cert, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="group relative rounded-2xl overflow-hidden card-glass hover-lift"
            >
              <div className="aspect-[4/3] overflow-hidden bg-secondary/30">
                <img
                  src={cert.image}
                  alt={cert.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="p-4">
                <h4 className="text-sm font-medium text-foreground leading-tight mb-1 line-clamp-2">
                  {cert.title}
                </h4>
                <p className="text-xs text-muted-foreground">
                  {cert.issuer} · {cert.date}
                </p>
              </div>
              <a
                href={cert.image}
                target="_blank"
                rel="noopener noreferrer"
                className="absolute top-3 right-3 p-2 rounded-full bg-background/80 backdrop-blur-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300 hover:bg-primary hover:text-primary-foreground"
              >
                <ExternalLink className="w-4 h-4" />
              </a>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
