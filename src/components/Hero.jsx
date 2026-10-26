import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { ArrowDown, Sparkles, FolderGit2, Mail, ExternalLink, ShieldCheck } from 'lucide-react';
import { useThemeLanguage } from '../context/ThemeLanguageContext';

export default function Hero() {
  const { t, personalData, lang } = useThemeLanguage();
  const roles = t.hero.roles;

  // Typewriter state
  const [currentRoleIndex, setCurrentRoleIndex] = useState(0);
  const [displayText, setDisplayText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentRole = roles[currentRoleIndex];
    const typingSpeed = isDeleting ? 40 : 80;

    const timeout = setTimeout(() => {
      if (!isDeleting) {
        if (displayText.length < currentRole.length) {
          setDisplayText(currentRole.slice(0, displayText.length + 1));
        } else {
          // Pause before deleting
          setTimeout(() => setIsDeleting(true), 2000);
        }
      } else {
        if (displayText.length > 0) {
          setDisplayText(currentRole.slice(0, displayText.length - 1));
        } else {
          setIsDeleting(false);
          setCurrentRoleIndex((prev) => (prev + 1) % roles.length);
        }
      }
    }, typingSpeed);

    return () => clearTimeout(timeout);
  }, [displayText, isDeleting, currentRoleIndex, roles]);

  const scrollTo = (id) => {
    const el = document.getElementById(id);
    if (el) {
      const offset = 80;
      const pos = el.getBoundingClientRect().top + window.pageYOffset - offset;
      window.scrollTo({ top: pos, behavior: 'smooth' });
    }
  };

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center pt-24 pb-16 px-5 sm:px-8 overflow-hidden"
    >
      <div className="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center z-10">
        
        {/* Left Column: Text & CTAs */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          className="lg:col-span-7 flex flex-col items-start text-left"
        >
          {/* Status Badge */}
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#C9A96E]/10 border border-[#C9A96E]/30 text-[#C9A96E] text-xs font-medium tracking-wide mb-6 shadow-sm backdrop-blur-md"
          >
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#C9A96E] opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-[#C9A96E]"></span>
            </span>
            <span>{t.hero.badge}</span>
          </motion.div>

          {/* Subheading Greeting */}
          <p className="text-xs sm:text-sm font-mono uppercase tracking-[0.3em] text-[#A1A1AA] mb-3">
            {t.hero.greeting}
          </p>

          {/* Majestic Name */}
          <h1 className="font-serif text-5xl sm:text-6xl md:text-7xl font-bold tracking-tight text-[#F5F5F7] dark:text-[#F5F5F7] text-[#18181A] mb-4">
            <span className="block">Nizar</span>
            <span className="text-gold-gradient">SNABI</span>
          </h1>

          {/* Animated Typewriter Title */}
          <div className="h-10 sm:h-12 flex items-center mb-6">
            <span className="font-sans text-xl sm:text-2xl md:text-3xl font-light text-[#E7D8BD] dark:text-[#E7D8BD] text-[#7B5D2D]">
              {displayText}
            </span>
            <span className="w-[3px] h-6 sm:h-8 bg-[#C9A96E] ml-1.5 animate-pulse" />
          </div>

          {/* Tagline */}
          <p className="text-sm sm:text-base leading-relaxed text-[#A1A1AA] max-w-xl mb-10 font-sans">
            {t.hero.tagline}
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-wrap items-center gap-4 w-full sm:w-auto">
            <button
              onClick={() => scrollTo('projects')}
              className="group relative inline-flex items-center justify-center gap-2.5 px-7 py-3.5 rounded-full text-xs sm:text-sm font-semibold uppercase tracking-wider text-[#0A0A0A] bg-gradient-to-r from-[#ECC880] via-[#C9A96E] to-[#B89253] hover:shadow-gold-hover transition-all duration-300 hover:scale-[1.02] active:scale-[0.98]"
            >
              <FolderGit2 className="w-4 h-4 transition-transform group-hover:scale-110" />
              <span>{t.hero.ctaProjects}</span>
            </button>

            <button
              onClick={() => scrollTo('contact')}
              className="group inline-flex items-center justify-center gap-2.5 px-7 py-3.5 rounded-full text-xs sm:text-sm font-semibold uppercase tracking-wider text-[#F5F5F7] dark:text-[#F5F5F7] text-[#18181A] border border-[#C9A96E]/40 hover:border-[#C9A96E] bg-white/[0.03] dark:bg-white/[0.03] bg-black/[0.03] backdrop-blur-sm hover:bg-[#C9A96E]/10 transition-all duration-300"
            >
              <Mail className="w-4 h-4 text-[#C9A96E] transition-transform group-hover:scale-110" />
              <span>{t.hero.ctaContact}</span>
            </button>
          </div>

          {/* Quick Details Badges */}
          <div className="mt-10 pt-6 border-t border-white/10 dark:border-white/10 border-black/10 flex flex-wrap items-center gap-6 text-xs text-[#A1A1AA] font-mono">
            <div className="flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-[#C9A96E]" />
              <span>EMSI Rabat (5A)</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-[#C9A96E]" />
              <span>Full Stack & Réseaux</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-[#C9A96E]" />
              <span>PFE Février 2027</span>
            </div>
          </div>
        </motion.div>

        {/* Right Column: Luxury Framed Photo */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 0.9, ease: 'easeOut', delay: 0.2 }}
          className="lg:col-span-5 flex justify-center items-center"
        >
          <div className="relative group">
            {/* Ambient Gold Aura */}
            <div className="absolute -inset-4 rounded-3xl bg-gradient-to-r from-[#ECC880]/20 via-[#C9A96E]/15 to-[#9B783E]/20 blur-2xl opacity-70 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />

            {/* Geometric Outer Border Accent */}
            <div className="absolute -top-3 -right-3 w-16 h-16 border-t-2 border-r-2 border-[#C9A96E]/60 rounded-tr-2xl pointer-events-none" />
            <div className="absolute -bottom-3 -left-3 w-16 h-16 border-b-2 border-l-2 border-[#C9A96E]/60 rounded-bl-2xl pointer-events-none" />

            {/* Photo Container with 3D Tilt on Hover */}
            <motion.div
              whileHover={{ rotateY: 4, rotateX: -4, scale: 1.02 }}
              transition={{ type: 'spring', stiffness: 200, damping: 20 }}
              style={{ transformStyle: 'preserve-3d' }}
              className="relative w-64 sm:w-80 md:w-88 aspect-[4/5] rounded-2xl overflow-hidden border border-[#C9A96E]/40 bg-[#161619] shadow-2xl"
            >
              <img
                src={personalData.photo}
                alt="Nizar SNABI — Élève Ingénieur Informatique & Réseaux"
                className="w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-105"
                loading="eager"
              />

              {/* Subtle Gold Gradient Overlay at bottom */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0A]/90 via-[#0A0A0A]/20 to-transparent pointer-events-none" />

              {/* Bottom Card Ribbon */}
              <div className="absolute bottom-4 inset-x-4 p-3.5 rounded-xl bg-[#0A0A0A]/85 backdrop-blur-md border border-[#C9A96E]/30 flex items-center justify-between">
                <div>
                  <p className="font-serif text-sm font-semibold text-[#F5F5F7]">Nizar SNABI</p>
                  <p className="text-[10px] text-[#C9A96E] font-mono tracking-wider">
                    {lang === 'fr' ? '5ème Année • EMSI Rabat' : '5th Year • EMSI Rabat'}
                  </p>
                </div>
                <div className="w-8 h-8 rounded-full bg-[#C9A96E]/15 border border-[#C9A96E]/40 flex items-center justify-center text-[#C9A96E]">
                  <ShieldCheck className="w-4 h-4" />
                </div>
              </div>
            </motion.div>
          </div>
        </motion.div>

      </div>

      {/* Animated Scroll Down Indicator */}
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1, duration: 0.8 }}
        className="absolute bottom-6 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 cursor-pointer z-10"
        onClick={() => scrollTo('about')}
      >
        <span className="text-[10px] uppercase font-mono tracking-[0.25em] text-[#A1A1AA]/80 hover:text-[#C9A96E] transition-colors">
          {t.hero.scrollDown}
        </span>
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ duration: 1.8, repeat: Infinity, ease: 'easeInOut' }}
          className="w-5 h-8 rounded-full border border-[#C9A96E]/40 flex items-start justify-center p-1"
        >
          <div className="w-1 h-2 rounded-full bg-[#C9A96E]" />
        </motion.div>
      </motion.div>
    </section>
  );
}
