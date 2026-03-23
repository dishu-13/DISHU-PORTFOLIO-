import { motion, useInView } from 'framer-motion';
import { useRef, useState } from 'react';
import { ExternalLink, ChevronLeft, ChevronRight } from 'lucide-react';
import googleAiAdsCert from '@/assets/certificates/google-ai-ads.png';
import msElevatePowerBICourse from '@/assets/certificates/ms-elevate-powerbi-course.png';
import msElevatePowerBIInternship from '@/assets/certificates/ms-elevate-powerbi-internship.png';

const certificates = [
  {
    title: 'Power BI - Course Completion',
    issuer: 'Microsoft Elevate × AICTE',
    date: 'March 2026',
    image: msElevatePowerBICourse
  },
  {
    title: 'Power BI - Internship Completion',
    issuer: 'Microsoft Elevate × AICTE',
    date: 'March 2026',
    image: msElevatePowerBIInternship
  },
  {
    title: 'AI-Powered Performance Ads Certification',
    issuer: 'Google Ads',
    date: 'December 2025',
    image: googleAiAdsCert
  },
  {
    title: 'Data Analytics Certificate',
    issuer: 'Infosys',
    date: '2024',
    image: 'https://dishu-13.github.io/portfolio/certificate5.png'
  },
  {
    title: 'Techniques for Big Data Analytics',
    issuer: 'Infosys',
    date: '2024',
    image: 'https://dishu-13.github.io/portfolio/certificate3.png'
  },
  {
    title: 'Google Analytics Certificate',
    issuer: 'Infosys',
    date: '2024',
    image: 'https://dishu-13.github.io/portfolio/certificate1.png'
  },
  {
    title: 'Data Analytics Essentials',
    issuer: 'Microsoft',
    date: '2024',
    image: 'https://dishu-13.github.io/portfolio/certificate2.png'
  },
  {
    title: 'Data Science and Analytics',
    issuer: 'HP',
    date: '2024',
    image: 'https://dishu-13.github.io/portfolio/certificate4.png'
  }
];

export default function Achievements() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [active, setActive] = useState(0);

  const prev = () => setActive((i) => (i - 1 + certificates.length) % certificates.length);
  const next = () => setActive((i) => (i + 1) % certificates.length);

  const getOffset = (index: number) => {
    let diff = index - active;
    if (diff > certificates.length / 2) diff -= certificates.length;
    if (diff < -certificates.length / 2) diff += certificates.length;
    return diff;
  };

  return (
    <section id="achievements" className="py-32 px-4 relative section-frost">
      <div className="container mx-auto max-w-6xl" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="font-display text-4xl md:text-5xl font-medium mb-4">
            Awards & <span className="text-gradient">Certificates</span>
          </h2>
          <p className="text-muted-foreground text-lg mb-4">
            {certificates.length} certifications from Google, Microsoft & more
          </p>
          <div className="w-20 h-1 bg-gradient-to-r from-primary to-accent mx-auto rounded-full" />
        </motion.div>

        {/* Carousel */}
        <div className="relative flex items-center justify-center" style={{ minHeight: '520px' }}>
          {/* Left Arrow */}
          <button
            onClick={prev}
            className="absolute left-2 md:left-8 z-30 p-3 rounded-full bg-background/80 backdrop-blur-sm border border-border/20 shadow-lg hover:bg-primary hover:text-primary-foreground transition-colors"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>

          {/* Cards */}
          <div className="relative w-full flex items-center justify-center" style={{ height: '480px', perspective: '1200px' }}>
            {certificates.map((cert, index) => {
              const offset = getOffset(index);
              const absOffset = Math.abs(offset);
              const isCenter = offset === 0;
              const visible = absOffset <= 2;

              if (!visible) return null;

              return (
                <motion.div
                  key={index}
                  className="absolute cursor-pointer"
                  style={{
                    width: isCenter ? '360px' : '280px',
                    zIndex: 10 - absOffset,
                  }}
                  animate={{
                    x: offset * 220,
                    scale: isCenter ? 1 : 0.8 - absOffset * 0.05,
                    rotateY: offset * -8,
                    opacity: isCenter ? 1 : Math.max(0.3, 0.7 - absOffset * 0.2),
                  }}
                  transition={{ duration: 0.5, ease: [0.25, 0.46, 0.45, 0.94] }}
                  onClick={() => setActive(index)}
                >
                  <div
                    className={`rounded-2xl overflow-hidden transition-all duration-500 ${
                      isCenter
                        ? 'card-glass-strong shadow-2xl ring-1 ring-primary/20'
                        : 'card-glass blur-[1px]'
                    }`}
                  >
                    {/* Certificate Image */}
                    <div className="aspect-[4/3] overflow-hidden bg-muted/10">
                      <img
                        src={cert.image}
                        alt={cert.title}
                        className="w-full h-full object-cover"
                        loading="lazy"
                      />
                    </div>

                    {/* Info - only visible on active card */}
                    {isCenter && (
                      <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2 }}
                        className="p-5 text-center"
                      >
                        <span className="inline-block px-3 py-1 rounded-full text-xs font-medium bg-muted/50 text-muted-foreground mb-3 backdrop-blur-sm border border-border/10">
                          {cert.issuer}
                        </span>
                        <h3 className="font-display text-base font-semibold text-foreground leading-tight mb-2">
                          {cert.title}
                        </h3>
                        <p className="text-muted-foreground text-sm font-mono mb-4">{cert.date}</p>
                        <a
                          href={cert.image}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-2 px-6 py-2.5 rounded-full border border-border/20 bg-muted/30 backdrop-blur-sm text-foreground font-medium text-sm hover:bg-primary hover:text-primary-foreground transition-colors"
                        >
                          Verify Credential <ExternalLink className="w-4 h-4" />
                        </a>
                      </motion.div>
                    )}
                  </div>
                </motion.div>
              );
            })}
          </div>

          {/* Right Arrow */}
          <button
            onClick={next}
            className="absolute right-2 md:right-8 z-30 p-3 rounded-full bg-background/80 backdrop-blur-sm border border-border/20 shadow-lg hover:bg-primary hover:text-primary-foreground transition-colors"
          >
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>

        {/* Counter */}
        <p className="text-center text-muted-foreground text-sm mt-6 font-mono">
          {active + 1} / {certificates.length}
        </p>
      </div>
    </section>
  );
}
