import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowUpRight, FolderGit2, Building2, Calendar, Sparkles } from 'lucide-react';
import { useThemeLanguage } from '../context/ThemeLanguageContext';
import ProjectModal from './ProjectModal';

export default function Projects() {
  const { t, lang } = useThemeLanguage();
  const [activeCategory, setActiveCategory] = useState('Tous');
  const [selectedProject, setSelectedProject] = useState(null);

  const categories = [
    'Tous',
    'Gestion Interne',
    lang === 'fr' ? 'Projet Personnel' : 'Personal Project',
    lang === 'fr' ? 'Web BTP' : 'Construction Web'
  ];

  const filteredProjects = t.projects.items.filter((p) => {
    if (activeCategory === 'Tous') return true;
    if (activeCategory === 'Gestion Interne') return p.category === 'Gestion Interne';
    if (activeCategory === 'Projet Personnel' || activeCategory === 'Personal Project') {
      return p.category === activeCategory;
    }
    if (activeCategory === 'Web BTP' || activeCategory === 'Construction Web') return p.category.includes('BTP') || p.category.includes('Construction');
    return true;
  });

  return (
    <section id="projects" className="relative py-28 px-5 sm:px-8 border-t border-white/5 dark:border-white/5 border-black/5 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <p className="text-xs uppercase font-mono tracking-[0.3em] text-[#C9A96E] mb-3">
            {t.projects.subtitle}
          </p>
          <h2 className="font-serif text-4xl sm:text-5xl font-bold tracking-tight text-[#F5F5F7] dark:text-[#F5F5F7] text-[#18181A]">
            {t.projects.title}
          </h2>
          <div className="w-16 h-[2px] bg-gradient-to-r from-transparent via-[#C9A96E] to-transparent mx-auto mt-5" />

          {/* Category Filter Tabs */}
          <div className="flex items-center justify-center gap-2 mt-8 flex-wrap">
            {categories.map((cat, idx) => (
              <button
                key={idx}
                onClick={() => setActiveCategory(cat)}
                className={`px-5 py-2 rounded-full text-xs font-mono uppercase tracking-wider transition-all duration-300 ${
                  activeCategory === cat
                    ? 'bg-gradient-to-r from-[#ECC880] to-[#C9A96E] text-[#0A0A0A] font-bold shadow-gold-soft'
                    : 'bg-white/[0.03] dark:bg-white/[0.03] bg-black/[0.03] text-[#A1A1AA] hover:text-[#F5F5F7] border border-white/10 dark:border-white/10'
                }`}
              >
                {cat === 'Tous' ? t.projects.filterAll : cat}
              </button>
            ))}
          </div>
        </div>

        {/* Project Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project, index) => (
              <motion.div
                key={project.id}
                layout
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-40px' }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ y: -8 }}
                onClick={() => setSelectedProject(project)}
                className="group relative rounded-3xl p-7 sm:p-8 bg-white/[0.02] dark:bg-white/[0.02] bg-black/[0.02] backdrop-blur-md border border-white/10 dark:border-white/10 border-black/10 hover:border-[#C9A96E]/50 hover:shadow-gold-hover transition-all duration-300 flex flex-col justify-between cursor-pointer"
              >
                {/* Decorative Top Accent Glow */}
                <div className="absolute top-0 right-10 w-32 h-[1px] bg-gradient-to-r from-transparent via-[#C9A96E]/40 to-transparent group-hover:via-[#C9A96E] transition-all" />

                <div>
                  {/* Top Meta: Category & Period */}
                  <div className="flex items-center justify-between gap-3 mb-4">
                    <span className="px-3 py-1 rounded-full text-[11px] font-mono uppercase tracking-wider font-semibold bg-[#C9A96E]/10 text-[#C9A96E] border border-[#C9A96E]/30">
                      {project.category}
                    </span>
                    {project.period && (
                      <span className="text-xs font-mono text-[#A1A1AA] flex items-center gap-1.5">
                        <Calendar className="w-3.5 h-3.5 text-[#C9A96E]/70" />
                        <span>{project.period}</span>
                      </span>
                    )}
                  </div>

                  {/* Title & Institutional Context */}
                  <h3 className="font-serif text-2xl font-bold text-[#F5F5F7] dark:text-[#F5F5F7] text-[#18181A] group-hover:text-gold-gradient transition-colors mb-2">
                    {project.title}
                  </h3>

                  <p className="text-xs font-mono text-[#C9A96E] flex items-center gap-1.5 mb-4">
                    <Building2 className="w-3.5 h-3.5" />
                    <span>{project.context}</span>
                  </p>

                  {/* Summary Text */}
                  <p className="text-xs sm:text-sm text-[#A1A1AA] leading-relaxed mb-6 font-sans">
                    {project.summary}
                  </p>
                </div>

                {/* Bottom Section: Tech Tags & View Button */}
                <div className="pt-5 border-t border-white/5 dark:border-white/5 border-black/5 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                  <div className="flex flex-wrap gap-1.5">
                    {project.technologies.slice(0, 4).map((tech, tIdx) => (
                      <span
                        key={tIdx}
                        className="px-2.5 py-1 rounded-md text-[10px] font-mono text-[#A1A1AA] bg-white/[0.04] dark:bg-white/[0.04] bg-black/[0.04] border border-white/10"
                      >
                        {tech}
                      </span>
                    ))}
                    {project.technologies.length > 4 && (
                      <span className="px-2 py-1 rounded-md text-[10px] font-mono text-[#C9A96E]">
                        +{project.technologies.length - 4}
                      </span>
                    )}
                  </div>

                  <div className="inline-flex items-center gap-1 text-xs font-mono font-medium text-[#C9A96E] group-hover:translate-x-1 transition-transform self-end sm:self-auto">
                    <span>{t.projects.viewDetails}</span>
                    <ArrowUpRight className="w-4 h-4" />
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        {/* Modal for Details */}
        <ProjectModal
          project={selectedProject}
          isOpen={!!selectedProject}
          onClose={() => setSelectedProject(null)}
        />

      </div>
    </section>
  );
}
