import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Download, Sun, Moon, Globe, Menu, X } from 'lucide-react';
import { useThemeLanguage } from '../context/ThemeLanguageContext';

export default function Navbar() {
  const { theme, toggleTheme, lang, toggleLanguage, t, personalData } = useThemeLanguage();
  const [activeSection, setActiveSection] = useState('hero');
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { id: 'about', label: t.nav.about },
    { id: 'journey', label: t.nav.journey },
    { id: 'skills', label: t.nav.skills },
    { id: 'projects', label: t.nav.projects },
    { id: 'certifications', label: t.nav.certifications },
    { id: 'languages', label: t.nav.languages },
    { id: 'contact', label: t.nav.contact },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 40);

      // Section spy
      const sections = ['hero', 'about', 'journey', 'skills', 'projects', 'certifications', 'languages', 'contact'];
      const scrollPos = window.scrollY + 200;

      for (const sectionId of sections) {
        const el = document.getElementById(sectionId);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPos >= top && scrollPos < top + height) {
            setActiveSection(sectionId);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id) => {
    setMobileMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      const offset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
          isScrolled
            ? 'py-3.5 bg-[#0A0A0A]/85 dark:bg-[#0A0A0A]/85 bg-white/90 backdrop-blur-md border-b border-[#C9A96E]/20 shadow-lg'
            : 'py-5 bg-transparent border-b border-transparent'
        }`}
      >
        <div className="max-w-7xl mx-auto px-5 sm:px-8 flex items-center justify-between">
          {/* Logo / Monogram */}
          <a
            href="#hero"
            onClick={(e) => {
              e.preventDefault();
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
            className="flex items-center gap-3 group"
          >
            <div className="w-10 h-10 rounded-full border border-[#C9A96E]/50 flex items-center justify-center bg-gradient-to-br from-[#161619] to-[#0A0A0A] group-hover:border-[#C9A96E] transition-colors shadow-sm">
              <span className="font-serif font-bold text-lg text-gold-gradient">
                {personalData.monogram}
              </span>
            </div>
            <div className="hidden sm:flex flex-col">
              <span className="font-serif text-lg tracking-wide font-medium group-hover:text-[#C9A96E] transition-colors">
                {personalData.name}
              </span>
              <span className="text-[10px] uppercase tracking-widest text-[#C9A96E]/80 font-mono">
                {lang === 'fr' ? 'Élève Ingénieur' : 'Engineering Student'}
              </span>
            </div>
          </a>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center gap-1 xl:gap-2">
            {navLinks.map((link) => {
              const isActive = activeSection === link.id;
              return (
                <button
                  key={link.id}
                  onClick={() => scrollToSection(link.id)}
                  className={`relative px-3 py-1.5 text-xs uppercase tracking-widest transition-colors duration-200 ${
                    isActive
                      ? 'text-[#C9A96E] font-semibold'
                      : 'text-[#A1A1AA] hover:text-[#F5F5F7] dark:hover:text-white'
                  }`}
                >
                  {link.label}
                  {isActive && (
                    <motion.div
                      layoutId="activeIndicator"
                      className="absolute bottom-0 left-2 right-2 h-[2px] bg-gradient-to-r from-transparent via-[#C9A96E] to-transparent"
                      transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                    />
                  )}
                </button>
              );
            })}
          </nav>

          {/* Action Buttons: Language, Theme, Download CV */}
          <div className="hidden sm:flex items-center gap-3">
            {/* Language Toggle */}
            <button
              onClick={toggleLanguage}
              className="flex items-center gap-1.5 px-2.5 py-1.5 rounded-full border border-white/10 dark:border-white/10 border-black/10 hover:border-[#C9A96E]/40 text-xs tracking-wider text-[#A1A1AA] hover:text-[#C9A96E] transition-all"
              title="Changer de langue / Switch language"
              aria-label="Switch Language"
            >
              <Globe className="w-3.5 h-3.5 text-[#C9A96E]" />
              <span className="uppercase font-mono font-medium">{lang}</span>
            </button>

            {/* Dark/Light Theme Toggle */}
            <button
              onClick={toggleTheme}
              className="p-2 rounded-full border border-white/10 dark:border-white/10 border-black/10 hover:border-[#C9A96E]/40 text-[#A1A1AA] hover:text-[#C9A96E] transition-all"
              title={theme === 'dark' ? 'Activer le mode clair' : 'Activer le mode sombre'}
              aria-label="Toggle Theme"
            >
              {theme === 'dark' ? (
                <Sun className="w-4 h-4 text-[#C9A96E]" />
              ) : (
                <Moon className="w-4 h-4 text-[#C9A96E]" />
              )}
            </button>

            {/* Download Resume Button */}
            <a
              href={personalData.cvPdf}
              download="CV-Nizar-Snabi.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="relative inline-flex items-center gap-2 px-4 py-2 rounded-full text-xs font-semibold uppercase tracking-wider text-[#0A0A0A] bg-gradient-to-r from-[#ECC880] via-[#C9A96E] to-[#B89253] hover:shadow-gold-hover transition-all duration-300 hover:scale-[1.02] active:scale-[0.98]"
            >
              <Download className="w-3.5 h-3.5" />
              <span>{t.nav.downloadCv}</span>
            </a>
          </div>

          {/* Mobile Right Controls */}
          <div className="flex sm:hidden items-center gap-2">
            <button
              onClick={toggleLanguage}
              className="p-2 rounded-full border border-white/10 text-xs font-mono uppercase text-[#C9A96E]"
              aria-label="Toggle Language"
            >
              {lang}
            </button>
            <button
              onClick={toggleTheme}
              className="p-2 rounded-full border border-white/10 text-[#C9A96E]"
              aria-label="Toggle Theme"
            >
              {theme === 'dark' ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
            </button>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-full border border-[#C9A96E]/30 text-[#C9A96E]"
              aria-label="Open Navigation Menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Drawer Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-x-0 top-[68px] z-30 p-6 bg-[#0A0A0A]/95 dark:bg-[#0A0A0A]/95 bg-white/95 backdrop-blur-xl border-b border-[#C9A96E]/20 shadow-2xl lg:hidden flex flex-col gap-4"
          >
            <div className="flex flex-col gap-2">
              {navLinks.map((link) => (
                <button
                  key={link.id}
                  onClick={() => scrollToSection(link.id)}
                  className={`text-left py-2.5 px-3 rounded-lg text-sm tracking-wider uppercase transition-colors ${
                    activeSection === link.id
                      ? 'bg-[#C9A96E]/10 text-[#C9A96E] font-semibold'
                      : 'text-[#A1A1AA] hover:text-[#F5F5F7]'
                  }`}
                >
                  {link.label}
                </button>
              ))}
            </div>

            <div className="pt-3 border-t border-white/10 flex flex-col gap-3">
              <a
                href={personalData.cvPdf}
                download="CV-Nizar-Snabi.pdf"
                className="w-full flex items-center justify-center gap-2 py-3 rounded-full text-xs font-semibold uppercase tracking-wider text-[#0A0A0A] bg-gradient-to-r from-[#ECC880] via-[#C9A96E] to-[#B89253]"
              >
                <Download className="w-4 h-4" />
                <span>{t.nav.downloadCv}</span>
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
