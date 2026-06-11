import { useScroll, useTransform, motion, useReducedMotion } from 'framer-motion';
import { useIsMobile } from '@/hooks/use-mobile';

/**
 * Layered scroll-parallax background for the Midnight Indigo theme.
 * - Multiple gradient orbs at different scroll speeds
 * - Subtle animated grid that drifts
 * - Aurora streak that shifts on scroll
 * Fully GPU-accelerated (transform/opacity only).
 */
export default function ParallaxBackground() {
  const { scrollY } = useScroll();
  const isMobile = useIsMobile();
  const reduced = useReducedMotion();

  const y1 = useTransform(scrollY, [0, 2000], [0, reduced ? 0 : -300]);
  const y2 = useTransform(scrollY, [0, 2000], [0, reduced ? 0 : -600]);
  const y3 = useTransform(scrollY, [0, 2000], [0, reduced ? 0 : -180]);
  const y4 = useTransform(scrollY, [0, 2000], [0, reduced ? 0 : -450]);
  const gridY = useTransform(scrollY, [0, 2000], [0, reduced ? 0 : -120]);
  const auroraX = useTransform(scrollY, [0, 2000], [0, reduced ? 0 : 200]);

  return (
    <div aria-hidden className="fixed inset-0 -z-10 overflow-hidden pointer-events-none">
      {/* Deep base */}
      <div className="absolute inset-0 bg-background" />

      {/* Vignette gradient base */}
      <div
        className="absolute inset-0"
        style={{
          background:
            'radial-gradient(ellipse at 50% -10%, hsl(244 76% 30% / 0.5) 0%, transparent 55%), radial-gradient(ellipse at 50% 110%, hsl(260 70% 25% / 0.45) 0%, transparent 55%)',
        }}
      />

      {/* Grid overlay (slowest layer) */}
      {!isMobile && (
        <motion.div
          style={{ y: gridY }}
          className="absolute inset-0 grid-overlay opacity-[0.35]"
        />
      )}

      {/* Aurora streak */}
      <motion.div
        style={{ x: auroraX }}
        className="absolute -top-20 left-0 right-0 h-[60vh] blur-3xl opacity-60"
      >
        <div
          className="w-[140%] h-full -ml-[20%]"
          style={{
            background:
              'linear-gradient(110deg, transparent 10%, hsl(244 76% 59% / 0.35) 35%, hsl(280 80% 65% / 0.30) 50%, hsl(200 95% 60% / 0.30) 65%, transparent 90%)',
          }}
        />
      </motion.div>

      {/* Floating orbs at different scroll speeds */}
      <motion.div
        style={{ y: y1 }}
        className="absolute top-[10%] -left-32 w-[420px] h-[420px] rounded-full blur-3xl"
      >
        <div className="w-full h-full rounded-full bg-primary/30" />
      </motion.div>

      <motion.div
        style={{ y: y2 }}
        className="absolute top-[40%] -right-40 w-[520px] h-[520px] rounded-full blur-3xl"
      >
        <div className="w-full h-full rounded-full bg-accent/25" />
      </motion.div>

      <motion.div
        style={{ y: y3 }}
        className="absolute top-[80%] left-[20%] w-[360px] h-[360px] rounded-full blur-3xl"
      >
        <div className="w-full h-full rounded-full" style={{ background: 'hsl(200 95% 55% / 0.22)' }} />
      </motion.div>

      <motion.div
        style={{ y: y4 }}
        className="absolute top-[140%] right-[10%] w-[440px] h-[440px] rounded-full blur-3xl"
      >
        <div className="w-full h-full rounded-full" style={{ background: 'hsl(280 80% 60% / 0.25)' }} />
      </motion.div>

      {/* Top vignette */}
      <div className="absolute inset-0 bg-gradient-to-b from-background/0 via-background/0 to-background/60" />
    </div>
  );
}
