import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { GraduationCap, Briefcase, Calendar, MapPin, Tag } from 'lucide-react';
import { useThemeLanguage } from '../context/ThemeLanguageContext';

export default function Journey() {
  const { t, lang } = useThemeLanguage();
  const [filter, setFilter] = useState('all');

  const items = t.timeline.items.filter((item) => {
    if (filter === 'all') return true;
    if (filter === 'experience') return item.type === 'experience';
    if (filter === 'education') return item.type === 'education';
    return true;
  });

  return (
    <section id="journey" className="relative py-28 px-5 sm:px-8 border-t border-white/5 dark:border-white/5 border-black/5 overflow-hidden">
      <div className="max-w-6xl mx-auto">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <p className="text-xs uppercase font-mono tracking-[0.3em] text-[#C9A96E] mb-3">
            {t.timeline.subtitle}
          </p>
          <h2 className="font-serif text-4xl sm:text-5xl font-bold tracking-tight text-[#F5F5F7] dark:text-[#F5F5F7] text-[#18181A]">
            {t.timeline.title}
          </h2>
          <div className="w-16 h-[2px] bg-gradient-to-r from-transparent via-[#C9A96E] to-transparent mx-auto mt-5" />

          {/* Filter Tabs */}
          <div className="flex items-center justify-center gap-2 mt-8 flex-wrap">
            <button
              onClick={() => setFilter('all')}
              className={`px-4 py-2 rounded-full text-xs font-mono uppercase tracking-wider transition-all ${
                filter === 'all'
                  ? 'bg-gradient-to-r from-[#ECC880] to-[#C9A96E] text-[#0A0A0A] font-bold shadow-gold-soft'
                  : 'bg-white/[0.03] dark:bg-white/[0.03] bg-black/[0.03] text-[#A1A1AA] hover:text-[#F5F5F7] border border-white/10 dark:border-white/10'
              }`}
            >
              {t.timeline.filterAll}
            </button>
            <button
              onClick={() => setFilter('experience')}
              className={`px-4 py-2 rounded-full text-xs font-mono uppercase tracking-wider transition-all flex items-center gap-1.5 ${
                filter === 'experience'
                  ? 'bg-gradient-to-r from-[#ECC880] to-[#C9A96E] text-[#0A0A0A] font-bold shadow-gold-soft'
                  : 'bg-white/[0.03] dark:bg-white/[0.03] bg-black/[0.03] text-[#A1A1AA] hover:text-[#F5F5F7] border border-white/10 dark:border-white/10'
              }`}
            >
              <Briefcase className="w-3.5 h-3.5" />
              <span>{t.timeline.filterExp}</span>
            </button>
            <button
              onClick={() => setFilter('education')}
              className={`px-4 py-2 rounded-full text-xs font-mono uppercase tracking-wider transition-all flex items-center gap-1.5 ${
                filter === 'education'
                  ? 'bg-gradient-to-r from-[#ECC880] to-[#C9A96E] text-[#0A0A0A] font-bold shadow-gold-soft'
                  : 'bg-white/[0.03] dark:bg-white/[0.03] bg-black/[0.03] text-[#A1A1AA] hover:text-[#F5F5F7] border border-white/10 dark:border-white/10'
              }`}
            >
              <GraduationCap className="w-3.5 h-3.5" />
              <span>{t.timeline.filterEdu}</span>
            </button>
          </div>
        </div>

        {/* Vertical Timeline */}
        <div className="relative">
          {/* Central Vertical Line (Desktop) / Left Line (Mobile) */}
          <div className="absolute top-0 bottom-0 left-4 md:left-1/2 -translate-x-1/2 w-[2px] bg-gradient-to-b from-transparent via-[#C9A96E]/40 to-transparent" />

          <div className="space-y-12">
            <AnimatePresence mode="popLayout">
              {items.map((item, index) => {
                const isEven = index % 2 === 0;
                return (
                  <motion.div
                    key={item.id}
                    layout
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: '-50px' }}
                    exit={{ opacity: 0, scale: 0.95 }}
                    transition={{ duration: 0.6, delay: index * 0.08 }}
                    className={`relative flex flex-col md:flex-row items-start ${
                      isEven ? 'md:flex-row-reverse' : ''
                    } gap-8`}
                  >
                    {/* Center Node Icon */}
                    <div className="absolute left-4 md:left-1/2 -translate-x-1/2 z-10 w-9 h-9 rounded-full bg-[#161619] border-2 border-[#C9A96E] flex items-center justify-center shadow-gold-soft">
                      {item.type === 'education' ? (
                        <GraduationCap className="w-4 h-4 text-[#C9A96E]" />
                      ) : (
                        <Briefcase className="w-4 h-4 text-[#C9A96E]" />
                      )}
                    </div>

                    {/* Content Card (Left or Right depending on even/odd) */}
                    <div className="ml-12 md:ml-0 md:w-1/2 md:px-8 w-full">
                      <div className="p-6 sm:p-7 rounded-2xl bg-white/[0.02] dark:bg-white/[0.02] bg-black/[0.02] backdrop-blur-md border border-white/10 dark:border-white/10 border-black/10 hover:border-[#C9A96E]/50 hover:shadow-gold-soft transition-all duration-300 group">
                        
                        {/* Header: Period & Badge */}
                        <div className="flex flex-wrap items-center justify-between gap-2 mb-3">
                          <div className="flex items-center gap-1.5 text-xs font-mono text-[#C9A96E]">
                            <Calendar className="w-3.5 h-3.5" />
                            <span>{item.period}</span>
                          </div>
                          <span
                            className={`px-2.5 py-0.5 rounded-full text-[10px] font-mono uppercase tracking-wider font-semibold ${
                              item.type === 'education'
                                ? 'bg-blue-500/10 text-blue-400 border border-blue-500/20'
                                : 'bg-[#C9A96E]/15 text-[#C9A96E] border border-[#C9A96E]/30'
                            }`}
                          >
                            {item.badge}
                          </span>
                        </div>

                        {/* Title & Organization */}
                        <h3 className="font-serif text-xl sm:text-2xl font-bold text-[#F5F5F7] dark:text-[#F5F5F7] text-[#18181A] mb-1 group-hover:text-[#C9A96E] transition-colors">
                          {item.title}
                        </h3>
                        <p className="text-xs sm:text-sm font-medium text-[#C9A96E]/90 mb-1 flex items-center gap-1.5">
                          <span>{item.organization}</span>
                        </p>
                        <p className="text-[11px] text-[#A1A1AA] flex items-center gap-1 mb-4 font-mono">
                          <MapPin className="w-3 h-3 text-[#C9A96E]/70" />
                          <span>{item.location}</span>
                        </p>

                        {/* Description */}
                        <p className="text-xs sm:text-sm text-[#A1A1AA] leading-relaxed mb-4">
                          {item.description}
                        </p>

                        {/* Bullet Highlights */}
                        {item.highlights && item.highlights.length > 0 && (
                          <ul className="space-y-1.5 mb-5 text-xs text-[#A1A1AA]">
                            {item.highlights.map((h, hIdx) => (
                              <li key={hIdx} className="flex items-start gap-2">
                                <span className="w-1.5 h-1.5 rounded-full bg-[#C9A96E] mt-1.5 shrink-0" />
                                <span>{h}</span>
                              </li>
                            ))}
                          </ul>
                        )}

                        {/* Tags */}
                        {item.tags && (
                          <div className="flex flex-wrap gap-1.5 pt-3 border-t border-white/5 dark:border-white/5 border-black/5">
                            {item.tags.map((tag, tIdx) => (
                              <span
                                key={tIdx}
                                className="px-2.5 py-1 rounded-md text-[10px] font-mono text-[#A1A1AA] bg-white/[0.03] dark:bg-white/[0.03] bg-black/[0.03] border border-white/5 hover:border-[#C9A96E]/30 transition-colors"
                              >
                                #{tag}
                              </span>
                            ))}
                          </div>
                        )}

                      </div>
                    </div>

                    {/* Spacer for other half on desktop */}
                    <div className="hidden md:block md:w-1/2" />
                  </motion.div>
                );
              })}
            </AnimatePresence>
          </div>
        </div>

      </div>
    </section>
  );
}
