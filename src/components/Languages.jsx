import React from 'react';
import { motion } from 'framer-motion';
import { Globe2, MessageSquareQuote } from 'lucide-react';
import { useThemeLanguage } from '../context/ThemeLanguageContext';

export default function Languages() {
  const { t } = useThemeLanguage();

  return (
    <section id="languages" className="relative py-28 px-5 sm:px-8 border-t border-white/5 dark:border-white/5 border-black/5 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <p className="text-xs uppercase font-mono tracking-[0.3em] text-[#C9A96E] mb-3">
            {t.languages.subtitle}
          </p>
          <h2 className="font-serif text-4xl sm:text-5xl font-bold tracking-tight text-[#F5F5F7] dark:text-[#F5F5F7] text-[#18181A]">
            {t.languages.title}
          </h2>
          <div className="w-16 h-[2px] bg-gradient-to-r from-transparent via-[#C9A96E] to-transparent mx-auto mt-5 mb-4" />
          <p className="text-sm text-[#A1A1AA] max-w-xl mx-auto">
            {t.languages.description}
          </p>
        </div>

        {/* Languages Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {t.languages.items.map((langItem, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -6 }}
              className="p-6 rounded-2xl bg-white/[0.02] dark:bg-white/[0.02] bg-black/[0.02] backdrop-blur-md border border-white/10 dark:border-white/10 border-black/10 hover:border-[#C9A96E]/50 hover:shadow-gold-soft transition-all duration-300 flex flex-col justify-between group"
            >
              <div>
                {/* Header: Badge & CEFR Level */}
                <div className="flex items-center justify-between gap-2 mb-4">
                  <span className="px-2.5 py-1 rounded-full text-[10px] font-mono uppercase tracking-wider font-semibold bg-[#C9A96E]/10 text-[#C9A96E] border border-[#C9A96E]/30">
                    {langItem.badge}
                  </span>
                  <span className="text-xs font-mono font-bold text-[#A1A1AA] bg-white/[0.05] px-2 py-0.5 rounded">
                    {langItem.cefr}
                  </span>
                </div>

                {/* Language Name */}
                <h3 className="font-serif text-2xl font-bold text-[#F5F5F7] dark:text-[#F5F5F7] text-[#18181A] group-hover:text-gold-gradient transition-colors mb-1">
                  {langItem.name}
                </h3>

                {/* Level Label */}
                <p className="text-xs font-medium text-[#C9A96E] mb-4 font-mono">
                  {langItem.level}
                </p>

                {/* Details Description */}
                <p className="text-xs text-[#A1A1AA] leading-relaxed mb-6 font-sans">
                  {langItem.details}
                </p>
              </div>

              {/* Progress Bar */}
              <div>
                <div className="flex justify-between items-center text-[10px] font-mono text-[#A1A1AA] mb-1.5">
                  <span>Aisance</span>
                  <span className="text-[#C9A96E]">{langItem.scale}%</span>
                </div>
                <div className="h-1.5 w-full rounded-full bg-white/10 dark:bg-white/10 bg-black/10 overflow-hidden">
                  <motion.div
                    initial={{ width: 0 }}
                    whileInView={{ width: `${langItem.scale}%` }}
                    viewport={{ once: true }}
                    transition={{ duration: 1.2, delay: index * 0.1 }}
                    className="h-full rounded-full bg-gradient-to-r from-[#ECC880] to-[#C9A96E]"
                  />
                </div>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
