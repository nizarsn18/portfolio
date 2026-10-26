import React from 'react';
import { ArrowUp, Heart, ShieldCheck, Linkedin, Github } from 'lucide-react';
import { useThemeLanguage } from '../context/ThemeLanguageContext';

export default function Footer() {
  const { t, personalData, lang } = useThemeLanguage();

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <footer className="relative py-14 px-5 sm:px-8 border-t border-white/10 dark:border-white/10 border-black/10 bg-[#0A0A0A] dark:bg-[#0A0A0A] bg-white transition-colors">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-8">
        
        {/* Left: Identity */}
        <div className="flex flex-col items-center md:items-start text-center md:text-left gap-1">
          <div className="flex items-center gap-2">
            <span className="font-serif font-bold text-lg text-gold-gradient tracking-wide">
              {personalData.name}
            </span>
            <span className="text-[10px] font-mono px-2 py-0.5 rounded-full bg-[#C9A96E]/15 text-[#C9A96E] border border-[#C9A96E]/30">
              PFE 2027
            </span>
          </div>
          <p className="text-xs text-[#A1A1AA] font-mono">
            {lang === 'fr' ? 'Élève-Ingénieur Informatique & Réseaux • EMSI Rabat' : 'Computer Science & Networks Student • EMSI Rabat'}
          </p>
          <p className="text-[11px] text-[#A1A1AA]/70 italic mt-1 font-serif">
            "{t.footer.quote}"
          </p>
        </div>

        {/* Center: Quick Links & Socials */}
        <div className="flex flex-col sm:flex-row items-center gap-5 text-xs uppercase font-mono tracking-wider text-[#A1A1AA]">
          <div className="flex items-center gap-5">
            <a href="#about" className="hover:text-[#C9A96E] transition-colors">{t.nav.about}</a>
            <a href="#journey" className="hover:text-[#C9A96E] transition-colors">{t.nav.journey}</a>
            <a href="#projects" className="hover:text-[#C9A96E] transition-colors">{t.nav.projects}</a>
            <a href="#contact" className="hover:text-[#C9A96E] transition-colors">{t.nav.contact}</a>
          </div>
          <div className="flex items-center gap-3 sm:border-l sm:border-white/10 sm:dark:border-white/10 sm:border-black/10 sm:pl-5">
            <a
              href={personalData.socials.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="p-1.5 rounded-lg border border-white/10 dark:border-white/10 border-black/10 hover:border-[#C9A96E] hover:text-[#C9A96E] transition-colors"
              title="LinkedIn"
              aria-label="LinkedIn"
            >
              <Linkedin className="w-3.5 h-3.5 text-[#C9A96E]" />
            </a>
            <a
              href={personalData.socials.github}
              target="_blank"
              rel="noopener noreferrer"
              className="p-1.5 rounded-lg border border-white/10 dark:border-white/10 border-black/10 hover:border-[#C9A96E] hover:text-[#C9A96E] transition-colors"
              title="GitHub"
              aria-label="GitHub"
            >
              <Github className="w-3.5 h-3.5 text-[#C9A96E]" />
            </a>
          </div>
        </div>

        {/* Right: Back to Top Button */}
        <div className="flex flex-col items-center md:items-end gap-2">
          <button
            onClick={scrollToTop}
            className="group flex items-center gap-2 px-4 py-2 rounded-full border border-white/10 dark:border-white/10 border-black/10 hover:border-[#C9A96E] text-xs font-mono uppercase tracking-wider text-[#A1A1AA] hover:text-[#C9A96E] transition-all"
            aria-label="Back to top"
          >
            <span>{t.footer.backToTop}</span>
            <ArrowUp className="w-4 h-4 transition-transform group-hover:-translate-y-1 text-[#C9A96E]" />
          </button>
          <p className="text-[11px] font-mono text-[#A1A1AA]/60">
            &copy; {new Date().getFullYear()} {personalData.name}. {t.footer.rights}
          </p>
        </div>

      </div>
    </footer>
  );
}
