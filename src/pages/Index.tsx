import { useState, useCallback } from 'react';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Experience from '@/components/Experience';
import Projects from '@/components/Projects';
import Achievements from '@/components/Achievements';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';
import AnimatedBackground from '@/components/AnimatedBackground';
import ShutterSplash from '@/components/ShutterSplash';
import OrbitSkills from "@/components/OrbitSkills";
import { motion } from "framer-motion";

const Index = () => {
  const [splashDone, setSplashDone] = useState(false);
  const handleSplashComplete = useCallback(() => setSplashDone(true), []);

  return (
    <main className="relative min-h-screen overflow-x-hidden w-full">
      
      {/* 🔥 Shutter Splash */}
      {!splashDone && <ShutterSplash onComplete={handleSplashComplete} />}

      {/* Background */}
      <AnimatedBackground />

      {/* Navbar */}
      <Navbar />

      {/* HERO */}
      <Hero />

      {/* ABOUT (RIGHT ENTRY) */}
      <motion.div
        initial={{ x: 200, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <About />
      </motion.div>

      {/* EXPERIENCE (LEFT ENTRY) */}
      <motion.div
        initial={{ x: -200, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <Experience />
      </motion.div>

      {/* 🔥 ORBIT SKILLS (CENTER HERO SECTION) */}
      <motion.div
        initial={{ scale: 0.8, opacity: 0 }}
        whileInView={{ scale: 1, opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <OrbitSkills />
      </motion.div>

      {/* PROJECTS (RIGHT ENTRY) */}
      <motion.div
        initial={{ x: 200, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <Projects />
      </motion.div>

      {/* ACHIEVEMENTS (LEFT ENTRY) */}
      <motion.div
        initial={{ x: -200, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <Achievements />
      </motion.div>

      {/* 🔥 EXIT ANIMATION BEFORE CONTACT */}
      <motion.div
        initial={{ x: 0 }}
        whileInView={{ x: 600, opacity: 0 }}
        transition={{ duration: 1.5 }}
        className="h-[50vh]"
      />

      {/* CONTACT */}
      <Contact />

      {/* FOOTER */}
      <Footer />

    </main>
  );
};

export default Index;
