import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { ExternalLink, Calendar } from 'lucide-react';
import googleAnalyticsCert from '@/assets/certificates/google-analytics.png';
import googleAiAdsCert from '@/assets/certificates/google-ai-ads.png';
const certificates = [{
  title: 'Google Analytics Certification',
  issuer: 'Google',
  date: 'December 2025',
  image: googleAnalyticsCert
}, {
  title: 'AI-Powered Performance Ads Certification',
  issuer: 'Google Ads',
  date: 'December 2025',
  image: googleAiAdsCert
}, {
  title: 'Data Analytics Certificate',
  issuer: 'Google',
  date: '2024',
  image: 'https://dishu-13.github.io/portfolio/certificate5.png'
}, {
  title: 'SQL Certificate',
  issuer: 'Google',
  date: '2024',
  image: 'https://dishu-13.github.io/portfolio/certificate3.png'
}, {
  title: 'Microsoft Excel Certificate',
  issuer: 'Microsoft',
  date: '2024',
  image: 'https://dishu-13.github.io/portfolio/certificate1.png'
}, {
  title: 'Power BI Certificate',
  issuer: 'Microsoft',
  date: '2024',
  image: 'https://dishu-13.github.io/portfolio/certificate2.png'
}, {
  title: 'HP Life Certificate',
  issuer: 'HP',
  date: '2024',
  image: 'https://dishu-13.github.io/portfolio/certificate4.png'
}];
const containerVariants = {
  hidden: {
    opacity: 0
  },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2
    }
  }
};
const itemVariants = {
  hidden: {
    opacity: 0,
    y: 30
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: [0.25, 0.46, 0.45, 0.94]
    }
  }
};
export default function Achievements() {
  const ref = useRef(null);
  const isInView = useInView(ref, {
    once: true,
    margin: "-100px"
  });
  return <section id="achievements" className="py-32 px-4 relative">
      <div className="container mx-auto max-w-6xl" ref={ref}>
        <motion.div initial={{
        opacity: 0,
        y: 50
      }} animate={isInView ? {
        opacity: 1,
        y: 0
      } : {}} transition={{
        duration: 0.8
      }} className="text-center mb-16">
          <h2 className="font-display text-4xl md:text-5xl font-medium mb-4">
            Awards & <span className="text-gradient">Certificates</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-primary to-accent mx-auto rounded-full" />
        </motion.div>

        <motion.div variants={containerVariants} initial="hidden" animate={isInView ? "visible" : "hidden"} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {certificates.map((cert, index) => <motion.div key={index} variants={itemVariants} className="group relative rounded-2xl overflow-hidden card-glass hover-lift">
              <div className="aspect-[4/3] overflow-hidden">
                <img src={cert.image} alt={cert.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
              </div>
              
              <a href={cert.image} target="_blank" rel="noopener noreferrer" className="absolute top-3 right-3 p-2 rounded-full bg-background/80 backdrop-blur-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300 hover:bg-primary hover:text-primary-foreground">
                <ExternalLink className="w-4 h-4" />
              </a>
            </motion.div>)}
        </motion.div>
      </div>
    </section>;
}