import React, { useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ExternalLink, Github, CheckCircle2, Calendar, Building, Sparkles } from 'lucide-react';
import { useThemeLanguage } from '../context/ThemeLanguageContext';

export default function ProjectModal({ project, isOpen, onClose }) {
  const { t, lang } = useThemeLanguage();

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose();
    };
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      document.body.style.overflow = 'unset';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!project) return null;

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 md:p-10">
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/80 backdrop-blur-md"
          />

          {/* Modal Container */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            transition={{ duration: 0.3, ease: 'easeOut' }}
            className="relative w-full max-w-3xl max-h-[90vh] overflow-y-auto rounded-3xl bg-[#121214] border border-[#C9A96E]/40 shadow-2xl p-6 sm:p-8 md:p-10 z-10 text-[#F5F5F7]"
          >
            {/* Top Bar: Category & Close */}
            <div className="flex items-center justify-between gap-4 pb-4 border-b border-white/10 mb-6">
              <span className="px-3 py-1 rounded-full text-xs font-mono font-semibold uppercase tracking-wider bg-[#C9A96E]/15 text-[#C9A96E] border border-[#C9A96E]/30">
                {project.category}
              </span>
              <button
                onClick={onClose}
                className="p-2 rounded-full border border-white/10 hover:border-[#C9A96E] text-[#A1A1AA] hover:text-[#C9A96E] transition-colors"
                aria-label="Close modal"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Title & Context */}
            <h3 className="font-serif text-2xl sm:text-3xl font-bold text-gold-gradient mb-2">
              {project.title}
            </h3>

            <div className="flex flex-wrap items-center gap-4 text-xs font-mono text-[#A1A1AA] mb-6">
              <span className="flex items-center gap-1.5 text-[#C9A96E]">
                <Building className="w-3.5 h-3.5" />
                <span>{project.context}</span>
              </span>
              {project.period && (
                <span className="flex items-center gap-1.5">
                  <Calendar className="w-3.5 h-3.5" />
                  <span>{project.period}</span>
                </span>
              )}
            </div>

            {/* Summary & Description */}
            <div className="space-y-4 mb-8 text-sm sm:text-base leading-relaxed text-[#A1A1AA]">
              <p className="text-[#F5F5F7] font-medium border-l-2 border-[#C9A96E] pl-4">
                {project.summary}
              </p>
              <p>{project.description}</p>
            </div>

            {/* Key Features */}
            {project.features && (
              <div className="mb-8">
                <h4 className="font-serif text-lg font-bold text-[#F5F5F7] mb-3 flex items-center gap-2">
                  <Sparkles className="w-4 h-4 text-[#C9A96E]" />
                  <span>{lang === 'fr' ? 'Fonctionnalités & Apports majeurs' : 'Key Features & Deliverables'}</span>
                </h4>
                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                  {project.features.map((feat, fIdx) => (
                    <li
                      key={fIdx}
                      className="flex items-start gap-2.5 p-3 rounded-xl bg-white/[0.02] border border-white/5 text-xs text-[#A1A1AA]"
                    >
                      <CheckCircle2 className="w-4 h-4 text-[#C9A96E] shrink-0 mt-0.5" />
                      <span>{feat}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {/* Technologies */}
            <div className="mb-8">
              <h4 className="text-xs uppercase font-mono tracking-widest text-[#C9A96E] mb-3">
                {lang === 'fr' ? 'Technologies mobilisées' : 'Technologies Used'}
              </h4>
              <div className="flex flex-wrap gap-2">
                {project.technologies.map((tech, tIdx) => (
                  <span
                    key={tIdx}
                    className="px-3 py-1.5 rounded-lg text-xs font-mono bg-white/[0.04] border border-white/10 text-[#F5F5F7]"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            {/* Action Buttons & Notice */}
            <div className="pt-6 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4">
              {(project.demoUrl || project.githubUrl) && (
                <div className="flex items-center gap-3 w-full sm:w-auto">
                  {project.demoUrl && (
                    <a
                      href={project.demoUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 sm:flex-initial inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-full text-xs font-semibold uppercase tracking-wider text-[#0A0A0A] bg-gradient-to-r from-[#ECC880] to-[#C9A96E] hover:shadow-gold-hover transition-all"
                    >
                      <ExternalLink className="w-4 h-4" />
                      <span>{t.projects.demoBtn}</span>
                    </a>
                  )}

                  {project.githubUrl && (
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 sm:flex-initial inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-full text-xs font-semibold uppercase tracking-wider text-[#F5F5F7] border border-white/20 hover:border-[#C9A96E] hover:bg-white/5 transition-all"
                    >
                      <Github className="w-4 h-4" />
                      <span>{t.projects.githubBtn}</span>
                    </a>
                  )}
                </div>
              )}

              <p className="text-[11px] text-[#A1A1AA]/80 font-mono text-center sm:text-right">
                {t.projects.noticePlaceholder}
              </p>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
