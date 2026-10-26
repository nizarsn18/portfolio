import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Award, CheckCircle, Calendar, GraduationCap, Sparkles, Search } from 'lucide-react';
import { useThemeLanguage } from '../context/ThemeLanguageContext';

export default function Certifications() {
  const { t, lang } = useThemeLanguage();
  const [searchTerm, setSearchTerm] = useState('');

  const filteredCerts = t.certifications.items.filter((cert) => {
    const q = searchTerm.toLowerCase();
    return (
      cert.title.toLowerCase().includes(q) ||
      cert.issuer.toLowerCase().includes(q) ||
      cert.domain.toLowerCase().includes(q)
    );
  });

  return (
    <section id="certifications" className="relative py-28 px-5 sm:px-8 border-t border-white/5 dark:border-white/5 border-black/5 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <p className="text-xs uppercase font-mono tracking-[0.3em] text-[#C9A96E] mb-3">
            {t.certifications.subtitle}
          </p>
          <h2 className="font-serif text-4xl sm:text-5xl font-bold tracking-tight text-[#F5F5F7] dark:text-[#F5F5F7] text-[#18181A]">
            {t.certifications.title}
          </h2>
          <div className="w-16 h-[2px] bg-gradient-to-r from-transparent via-[#C9A96E] to-transparent mx-auto mt-5 mb-4" />
          <p className="text-sm text-[#A1A1AA] max-w-xl mx-auto">
            {t.certifications.description}
          </p>

          {/* Search / Filter input */}
          <div className="mt-8 max-w-md mx-auto relative">
            <Search className="w-4 h-4 text-[#C9A96E] absolute left-4 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              placeholder={lang === 'fr' ? 'Rechercher une certification ou un organisme...' : 'Search certificate or issuer...'}
              className="w-full pl-11 pr-4 py-2.5 rounded-full text-xs font-sans bg-white/[0.03] dark:bg-white/[0.03] bg-black/[0.03] border border-white/10 dark:border-white/10 border-black/10 focus:border-[#C9A96E] focus:outline-none transition-colors text-[#F5F5F7] dark:text-[#F5F5F7] text-[#18181A]"
            />
          </div>
        </div>

        {/* Certifications Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-7">
          {filteredCerts.map((cert, index) => (
            <motion.div
              key={cert.id}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.5, delay: index * 0.06 }}
              whileHover={{ y: -5 }}
              className="p-6 rounded-2xl bg-white/[0.02] dark:bg-white/[0.02] bg-black/[0.02] backdrop-blur-md border border-white/10 dark:border-white/10 border-black/10 hover:border-[#C9A96E]/50 hover:shadow-gold-soft transition-all duration-300 flex flex-col justify-between group"
            >
              <div>
                {/* Header: Issuer & Verified badge */}
                <div className="flex items-start justify-between gap-3 mb-4">
                  <div className="w-9 h-9 rounded-xl bg-[#C9A96E]/10 border border-[#C9A96E]/30 flex items-center justify-center shrink-0 group-hover:scale-105 transition-transform">
                    <Award className="w-4 h-4 text-[#C9A96E]" />
                  </div>
                  <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-[10px] font-mono font-medium text-emerald-400 bg-emerald-500/10 border border-emerald-500/20">
                    <CheckCircle className="w-3 h-3" />
                    <span>{t.certifications.verifyLabel}</span>
                  </span>
                </div>

                {/* Certificate Title */}
                <h3 className="font-serif text-lg font-bold text-[#F5F5F7] dark:text-[#F5F5F7] text-[#18181A] group-hover:text-gold-gradient transition-colors mb-2 leading-snug">
                  {cert.title}
                </h3>

                {/* Issuer Organization */}
                <p className="text-xs font-medium text-[#C9A96E] mb-2 flex items-center gap-1.5 font-mono">
                  <GraduationCap className="w-3.5 h-3.5 shrink-0" />
                  <span>{cert.issuer}</span>
                </p>

                {/* Domain */}
                <p className="text-[11px] text-[#A1A1AA] mb-4">
                  {cert.domain}
                </p>
              </div>

              {/* Bottom: Date */}
              <div className="pt-3 border-t border-white/5 dark:border-white/5 border-black/5 flex items-center justify-between text-xs font-mono text-[#A1A1AA]">
                <span className="flex items-center gap-1.5">
                  <Calendar className="w-3.5 h-3.5 text-[#C9A96E]/80" />
                  <span>{cert.date}</span>
                </span>
                <span className="text-[10px] text-[#C9A96E]/80 font-mono">
                  #{index + 1} / 11
                </span>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
