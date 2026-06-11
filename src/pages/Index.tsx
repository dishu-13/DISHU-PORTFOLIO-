import { useState, useCallback } from 'react';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Experience from '@/components/Experience';
import Skills from '@/components/Skills';
import Projects from '@/components/Projects';
import Achievements from '@/components/Achievements';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';
import ParallaxBackground from '@/components/ParallaxBackground';
import ShutterSplash from '@/components/ShutterSplash';
import MarqueeStrip from '@/components/MarqueeStrip';

import StatsStrip from '@/components/StatsStrip';
import CursorGlow from '@/components/CursorGlow';
import BackToTop from '@/components/BackToTop';
import { useSmoothScroll } from '@/hooks/useSmoothScroll';

const Index = () => {
  const [splashDone, setSplashDone] = useState(false);
  const handleSplashComplete = useCallback(() => setSplashDone(true), []);
  useSmoothScroll();


  return (
    <main className="relative min-h-screen overflow-x-hidden w-full">
      {/* Shutter Splash */}
      {!splashDone && <ShutterSplash onComplete={handleSplashComplete} />}

      {/* Animated Background */}
      <AnimatedBackground />

      {/* Cursor Glow (desktop only) */}
      <CursorGlow />




      {/* Back to Top */}
      <BackToTop />
      
      {/* Navigation */}
      <Navbar />
      
      {/* Main Content */}
      <Hero />
      <MarqueeStrip />
      <StatsStrip />
      <About />
      <Experience />
      <Skills />
      <Projects />
      <Achievements />
      <Contact />
      <Footer />
    </main>
  );
};

export default Index;