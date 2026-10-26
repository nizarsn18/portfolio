import React, { useState } from 'react';
import { motion, useScroll } from 'framer-motion';
import { ThemeLanguageProvider } from './context/ThemeLanguageContext';
import Preloader from './components/Preloader';
import CustomCursor from './components/CustomCursor';
import BackgroundBeams from './components/BackgroundBeams';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Journey from './components/Journey';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Certifications from './components/Certifications';
import Languages from './components/Languages';
import Contact from './components/Contact';
import Footer from './components/Footer';

function PortfolioContent() {
  const [, setLoading] = useState(true);
  const { scrollYProgress } = useScroll();

  return (
    <div className="relative min-h-screen text-[#F5F5F7] selection:bg-[#C9A96E]/25 selection:text-[#C9A96E]">
      {/* Sleek Ultra-fast Preloader with Gold NS Monogram */}
      <Preloader onComplete={() => setLoading(false)} />

      {/* Gold Reading Progress Bar at the top */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-[2.5px] bg-gradient-to-r from-[#9B783E] via-[#C9A96E] to-[#ECC880] z-50 origin-left pointer-events-none"
        style={{ scaleX: scrollYProgress }}
      />

      {/* Hardware Accelerated Custom Luxury Cursor */}
      <CustomCursor />

      {/* High-Performance Pure CSS Background Lighting */}
      <BackgroundBeams />

      {/* Fixed Luxury Navbar */}
      <Navbar />

      {/* Main Sections in exact requested order */}
      <main className="relative z-10 flex flex-col">
        <Hero />
        <About />
        <Journey />
        <Skills />
        <Projects />
        <Certifications />
        <Languages />
        <Contact />
      </main>

      {/* Minimalist Luxury Footer */}
      <Footer />
    </div>
  );
}

export default function App() {
  return (
    <ThemeLanguageProvider>
      <PortfolioContent />
    </ThemeLanguageProvider>
  );
}
