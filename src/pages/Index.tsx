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

const Index = () => {
  const [splashDone, setSplashDone] = useState(false);
  const handleSplashComplete = useCallback(() => setSplashDone(true), []);

  return (
    <main className="relative min-h-screen overflow-x-hidden w-full noise-overlay">
      {!splashDone && <ShutterSplash onComplete={handleSplashComplete} />}
      <AnimatedBackground />
      <Navbar />
      <Hero />
      <MarqueeStrip />
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