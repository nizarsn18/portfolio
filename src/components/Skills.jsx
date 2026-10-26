import React from 'react';
import { motion } from 'framer-motion';
import { Layout, Server, Code2, Database, Layers, Terminal, Sparkles } from 'lucide-react';
import { useThemeLanguage } from '../context/ThemeLanguageContext';

function SkillBar({ skill, index }) {
  return (
    <div className="space-y-1.5">
      <div className="flex items-center justify-between text-xs font-mono">
        <span className="font-semibold text-[#F5F5F7] dark:text-[#F5F5F7] text-[#18181A]">
          {skill.name}
        </span>
        <span className="text-[#C9A96E] font-medium">{skill.level}%</span>
      </div>

      {/* Progress Track */}
      <div className="h-2 w-full rounded-full bg-white/10 dark:bg-white/10 bg-black/10 overflow-hidden relative">
        <motion.div
          initial={{ width: 0 }}
          whileInView={{ width: `${skill.level}%` }}
          viewport={{ once: true, margin: '-40px' }}
          transition={{ duration: 1.2, delay: index * 0.1, ease: [0.16, 1, 0.3, 1] }}
          className="h-full rounded-full bg-gradient-to-r from-[#ECC880] via-[#C9A96E] to-[#9B783E] relative"
        >
          {/* Subtle shimmer beam */}
          <div className="absolute inset-0 bg-white/20 animate-pulse" />
        </motion.div>
      </div>

      {skill.note && (
        <p className="text-[11px] text-[#A1A1AA] pt-0.5 font-sans leading-tight">
          {skill.note}
        </p>
      )}
    </div>
  );
}

export default function Skills() {
  const { t } = useThemeLanguage();

  const iconMap = {
    Layout: <Layout className="w-5 h-5 text-[#C9A96E]" />,
    Server: <Server className="w-5 h-5 text-[#C9A96E]" />,
    Code: <Code2 className="w-5 h-5 text-[#C9A96E]" />,
    Database: <Database className="w-5 h-5 text-[#C9A96E]" />,
    Layers: <Layers className="w-5 h-5 text-[#C9A96E]" />,
    Terminal: <Terminal className="w-5 h-5 text-[#C9A96E]" />
  };

  // Technologies for infinite marquee
  const marqueeItems = [...t.skills.technologies, ...t.skills.technologies];

  return (
    <section id="skills" className="relative py-28 px-5 sm:px-8 border-t border-white/5 dark:border-white/5 border-black/5 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <p className="text-xs uppercase font-mono tracking-[0.3em] text-[#C9A96E] mb-3">
            {t.skills.subtitle}
          </p>
          <h2 className="font-serif text-4xl sm:text-5xl font-bold tracking-tight text-[#F5F5F7] dark:text-[#F5F5F7] text-[#18181A]">
            {t.skills.title}
          </h2>
          <div className="w-16 h-[2px] bg-gradient-to-r from-transparent via-[#C9A96E] to-transparent mx-auto mt-5 mb-4" />
          <p className="text-sm text-[#A1A1AA] max-w-xl mx-auto">
            {t.skills.description}
          </p>
        </div>

        {/* Skills Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 mb-20">
          {t.skills.categories.map((category, catIndex) => (
            <motion.div
              key={catIndex}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.6, delay: catIndex * 0.08 }}
              className="p-6 sm:p-7 rounded-2xl bg-white/[0.02] dark:bg-white/[0.02] bg-black/[0.02] backdrop-blur-md border border-white/10 dark:border-white/10 border-black/10 hover:border-[#C9A96E]/40 hover:shadow-gold-soft transition-all duration-300 flex flex-col justify-between group"
            >
              <div>
                {/* Category Header */}
                <div className="flex items-center gap-3 mb-6 pb-4 border-b border-white/10 dark:border-white/10 border-black/10">
                  <div className="w-10 h-10 rounded-xl bg-[#C9A96E]/10 border border-[#C9A96E]/30 flex items-center justify-center group-hover:scale-105 transition-transform">
                    {iconMap[category.icon] || <Sparkles className="w-5 h-5 text-[#C9A96E]" />}
                  </div>
                  <h3 className="font-serif text-lg font-bold text-[#F5F5F7] dark:text-[#F5F5F7] text-[#18181A] group-hover:text-[#C9A96E] transition-colors">
                    {category.title}
                  </h3>
                </div>

                {/* Skill Bars */}
                <div className="space-y-5">
                  {category.skills.map((skill, sIdx) => (
                    <SkillBar key={sIdx} skill={skill} index={sIdx} />
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Infinite Horizontal Technology Marquee */}
        <div className="relative pt-6">
          <div className="text-center mb-6">
            <span className="text-[11px] font-mono uppercase tracking-[0.25em] text-[#C9A96E]">
              {t.skills.marqueeTitle}
            </span>
          </div>

          {/* Marquee Wrapper with fading edges (Zero compositing cost) */}
          <div className="relative w-full overflow-hidden">
            {/* Left fade overlay */}
            <div className="pointer-events-none absolute left-0 top-0 bottom-0 w-16 sm:w-24 z-10 bg-gradient-to-r from-[#0A0A0A] dark:from-[#0A0A0A] from-white to-transparent" />
            {/* Right fade overlay */}
            <div className="pointer-events-none absolute right-0 top-0 bottom-0 w-16 sm:w-24 z-10 bg-gradient-to-l from-[#0A0A0A] dark:from-[#0A0A0A] from-white to-transparent" />

            <div className="flex gap-4 w-max animate-marquee hover:[animation-play-state:paused]" style={{ willChange: 'transform' }}>
              {marqueeItems.map((tech, idx) => (
                <div
                  key={idx}
                  className="flex items-center gap-2.5 px-5 py-3 rounded-xl bg-white/[0.03] dark:bg-white/[0.03] bg-black/[0.03] border border-white/10 dark:border-white/10 border-black/10 hover:border-[#C9A96E]/60 hover:bg-[#C9A96E]/10 transition-colors duration-150 cursor-default group"
                >
                  <span className="w-2 h-2 rounded-full bg-[#C9A96E]" />
                  <span className="text-xs font-mono font-medium tracking-wide text-[#F5F5F7] dark:text-[#F5F5F7] text-[#18181A]">
                    {tech.name}
                  </span>
                  <span className="text-[10px] text-[#A1A1AA] font-mono border-l border-white/10 dark:border-white/10 pl-2">
                    {tech.category}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
