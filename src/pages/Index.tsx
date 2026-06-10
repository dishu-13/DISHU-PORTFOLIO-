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
import AnimatedBackground from '@/components/AnimatedBackground';
import ShutterSplash from '@/components/ShutterSplash';
import MarqueeStrip from '@/components/MarqueeStrip';
import ScrollProgress from '@/components/ScrollProgress';
import StatsStrip from '@/components/StatsStrip';
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

      {/* Scroll Progress Bar */}
      <ScrollProgress />
      
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