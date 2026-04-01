import { motion, useInView, PanInfo } from 'framer-motion';
import { useRef, useState } from 'react';
import { ExternalLink } from 'lucide-react';
import googleAiAdsCert from '@/assets/certificates/google-ai-ads.png';
import msElevatePowerBICourse from '@/assets/certificates/ms-elevate-powerbi-course.png';
import msElevatePowerBIInternship from '@/assets/certificates/ms-elevate-powerbi-internship.png';

const certificates = [
  { title: 'Power BI - Course Completion', issuer: 'Microsoft Elevate × AICTE', date: 'March 2026', image: msElevatePowerBICourse },
  { title: 'Power BI - Internship Completion', issuer: 'Microsoft Elevate × AICTE', date: 'March 2026', image: msElevatePowerBIInternship },
  { title: 'AI-Powered Performance Ads Certification', issuer: 'Infosys Ads', date: 'December 2025', image: googleAiAdsCert },
  { title: 'Data Analytics Certificate', issuer: 'Infosys', date: '2024', image: 'https://dishu-13.github.io/portfolio/certificate5.png' },
  { title: 'Techniques for Big Data Analytics', issuer: 'Infosys', date: '2024', image: 'https://dishu-13.github.io/portfolio/certificate3.png' },
  { title: 'Infosys Analytics Certificate', issuer: 'Infosys', date: '2024', image: 'https://dishu-13.github.io/portfolio/certificate1.png' },
  { title: 'Data Analytics Essentials', issuer: 'Microsoft', date: '2024', image: 'https://dishu-13.github.io/portfolio/certificate2.png' },
  { title: 'Data Science and Analytics', issuer: 'HP', date: '2024', image: 'https://dishu-13.github.io/portfolio/certificate4.png' },
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

  const handleDragEnd = (_: any, info: PanInfo) => {
    if (info.offset.x < -50) next();
    else if (info.offset.x > 50) prev();
  };

  return (
    <section id="achievements" className="py-24 md:py-32 px-4 relative">
      <div className="section-divider mb-24" />
      <div className="container mx-auto max-w-6xl" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          <span className="font-mono text-sm text-primary/70 tracking-widest uppercase mb-4 block">Recognition</span>
          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
            Awards & <span className="text-gradient">Certificates</span>
          </h2>
          <p className="text-muted-foreground text-lg mb-4">
            {certificates.length} certifications from Infosys, Microsoft & more
          </p>
          <div className="w-20 h-1 mx-auto rounded-full" style={{ background: 'var(--gradient-primary)' }} />
        </motion.div>

        {/* Carousel */}
        <motion.div
          className="relative flex items-center justify-center cursor-grab active:cursor-grabbing"
          style={{ minHeight: '520px', touchAction: 'pan-y' }}
          drag="x"
          dragConstraints={{ left: 0, right: 0 }}
          dragElastic={0.2}
          onDragEnd={handleDragEnd}
        >
          <div className="relative w-full flex items-center justify-center" style={{ height: '480px', perspective: '1200px' }}>
            {certificates.map((cert, index) => {
              const offset = getOffset(index);
              const absOffset = Math.abs(offset);
              const isCenter = offset === 0;
              if (absOffset > 2) return null;

              return (
                <motion.div
                  key={index}
                  className="absolute pointer-events-auto"
                  style={{ width: isCenter ? '360px' : '280px', zIndex: 10 - absOffset }}
                  animate={{
                    x: offset * 220,
                    scale: isCenter ? 1 : 0.8 - absOffset * 0.05,
                    rotateY: offset * -8,
                    opacity: isCenter ? 1 : Math.max(0.3, 0.7 - absOffset * 0.2),
                  }}
                  transition={{ duration: 0.5, ease: [0.25, 0.46, 0.45, 0.94] }}
                  onClick={() => setActive(index)}
                >
                  <div className={`rounded-2xl overflow-hidden transition-all duration-500 ${
                    isCenter ? 'card-glass-strong glow-border' : 'card-glass opacity-60'
                  }`}>
                    <div className="aspect-[4/3] overflow-hidden bg-secondary/20">
                      <img src={cert.image} alt={cert.title} className="w-full h-full object-cover" loading="lazy" />
                    </div>
                    {isCenter && (
                      <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2 }}
                        className="p-5 text-center"
                      >
                        <span className="inline-block px-3 py-1 rounded-full text-xs font-mono bg-secondary/50 text-muted-foreground mb-3 border border-border/20">
                          {cert.issuer}
                        </span>
                        <h3 className="font-display text-base font-bold text-foreground leading-tight mb-2">{cert.title}</h3>
                        <p className="text-muted-foreground text-sm font-mono mb-4">{cert.date}</p>
                        <a href={cert.image} target="_blank" rel="noopener noreferrer"
                           className="btn-outline inline-flex items-center gap-2 !px-5 !py-2 text-sm">
                          Verify <ExternalLink className="w-3.5 h-3.5" />
                        </a>
                      </motion.div>
                    )}
                  </div>
                </motion.div>
              );
            })}
          </div>
        </motion.div>
      </div>
    </section>
  );
}