import React, { useEffect, useState, useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Award, Briefcase, Languages, GraduationCap, CheckCircle2 } from 'lucide-react';
import { useThemeLanguage } from '../context/ThemeLanguageContext';

function AnimatedCounter({ value, suffix = '', duration = 1.6 }) {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-50px' });

  useEffect(() => {
    if (!isInView) return;

    let start = 0;
    const end = parseInt(value, 10);
    if (start === end) {
      setCount(end);
      return;
    }

    const totalSteps = 40;
    const stepTime = (duration * 1000) / totalSteps;
    const increment = end / totalSteps;

    const timer = setInterval(() => {
      start += increment;
      if (start >= end) {
        setCount(end);
        clearInterval(timer);
      } else {
        setCount(Math.floor(start));
      }
    }, stepTime);

    return () => clearInterval(timer);
  }, [isInView, value, duration]);

  return (
    <span ref={ref} className="font-serif font-bold text-4xl sm:text-5xl text-gold-gradient">
      {count}{suffix}
    </span>
  );
}

export default function About() {
  const { t, personalData, lang } = useThemeLanguage();

  const statIcons = [
    <Briefcase className="w-5 h-5 text-[#C9A96E]" />,
    <Award className="w-5 h-5 text-[#C9A96E]" />,
    <Languages className="w-5 h-5 text-[#C9A96E]" />,
    <GraduationCap className="w-5 h-5 text-[#C9A96E]" />,
  ];

  return (
    <section id="about" className="relative py-28 px-5 sm:px-8 border-t border-white/5 dark:border-white/5 border-black/5 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <p className="text-xs uppercase font-mono tracking-[0.3em] text-[#C9A96E] mb-3">
            {t.about.subtitle}
          </p>
          <h2 className="font-serif text-4xl sm:text-5xl font-bold tracking-tight text-[#F5F5F7] dark:text-[#F5F5F7] text-[#18181A]">
            {t.about.title}
          </h2>
          <div className="w-16 h-[2px] bg-gradient-to-r from-transparent via-[#C9A96E] to-transparent mx-auto mt-5" />
        </div>

        {/* Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Column: Framed Portrait */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-5 flex justify-center"
          >
            <div className="relative group max-w-sm w-full">
              {/* Outer Golden Glow */}
              <div className="absolute -inset-2 rounded-2xl bg-[#C9A96E]/15 blur-xl group-hover:bg-[#C9A96E]/25 transition-all duration-500" />

              {/* Decorative Corner Borders */}
              <div className="absolute -top-3 -left-3 w-12 h-12 border-t-2 border-l-2 border-[#C9A96E]/60 rounded-tl-xl pointer-events-none" />
              <div className="absolute -bottom-3 -right-3 w-12 h-12 border-b-2 border-r-2 border-[#C9A96E]/60 rounded-br-xl pointer-events-none" />

              {/* Card Container */}
              <motion.div
                whileHover={{ y: -6, rotate: -0.5 }}
                transition={{ duration: 0.4 }}
                className="relative rounded-2xl overflow-hidden border border-[#C9A96E]/40 bg-[#161619] shadow-2xl p-2.5"
              >
                <div className="relative rounded-xl overflow-hidden aspect-[4/5]">
                  <img
                    src={personalData.photo}
                    alt="Nizar SNABI Portrait"
                    className="w-full h-full object-cover object-top filter grayscale-[15%] group-hover:grayscale-0 transition-all duration-700"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0A]/80 via-transparent to-transparent pointer-events-none" />
                </div>

                {/* Subtitle Badge */}
                <div className="py-3 px-2 text-center">
                  <p className="font-serif font-bold text-sm tracking-wide text-[#F5F5F7]">Nizar SNABI</p>
                  <p className="text-[11px] text-[#C9A96E] font-mono tracking-wider">
                    {lang === 'fr' ? 'Élève-Ingénieur Informatique & Réseaux' : 'Computer Science & Networks Student'}
                  </p>
                </div>
              </motion.div>
            </div>
          </motion.div>

          {/* Right Column: Bio Paragraphs & Highlights */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-7 flex flex-col gap-6"
          >
            <div className="space-y-4 text-sm sm:text-base text-[#A1A1AA] leading-relaxed">
              <p className="border-l-2 border-[#C9A96E] pl-4 font-medium text-[#F5F5F7] dark:text-[#F5F5F7] text-[#18181A]">
                {t.about.bio1}
              </p>
              <p>
                {t.about.bio2}
              </p>
              <p>
                {t.about.bio3}
              </p>
            </div>

            {/* Highlights Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-4">
              {t.about.highlights.map((item, idx) => (
                <div
                  key={idx}
                  className="p-4 rounded-xl bg-white/[0.02] dark:bg-white/[0.02] bg-black/[0.02] border border-white/10 dark:border-white/10 border-black/10 hover:border-[#C9A96E]/40 transition-colors"
                >
                  <div className="flex items-center gap-2 mb-2 text-[#C9A96E]">
                    <CheckCircle2 className="w-4 h-4" />
                    <span className="text-xs font-semibold tracking-wider uppercase font-mono">
                      {item.label}
                    </span>
                  </div>
                  <p className="text-xs text-[#A1A1AA] leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              ))}
            </div>

          </motion.div>

        </div>

        {/* Animated Interactive Counters */}
        <div className="mt-20 pt-16 border-t border-white/10 dark:border-white/10 border-black/10">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 sm:gap-8">
            {t.about.stats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                className="flex flex-col items-center text-center p-6 rounded-2xl bg-white/[0.02] dark:bg-white/[0.02] bg-black/[0.02] border border-white/10 dark:border-white/10 border-black/10 hover:border-[#C9A96E]/40 hover:shadow-gold-soft transition-all duration-300 group"
              >
                <div className="w-12 h-12 rounded-full mb-4 flex items-center justify-center bg-[#C9A96E]/10 border border-[#C9A96E]/30 group-hover:scale-110 transition-transform">
                  {statIcons[index]}
                </div>
                <div className="mb-2">
                  <AnimatedCounter value={stat.value} suffix={stat.suffix} />
                </div>
                <span className="text-xs sm:text-sm text-[#A1A1AA] font-sans font-medium">
                  {stat.label}
                </span>
              </motion.div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
