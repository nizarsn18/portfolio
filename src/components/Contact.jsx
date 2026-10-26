import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Mail, Phone, MapPin, Send, Linkedin, Github, CheckCircle, Copy, Check, Sparkles } from 'lucide-react';
import confetti from 'canvas-confetti';
import { useThemeLanguage } from '../context/ThemeLanguageContext';

export default function Contact() {
  const { t, personalData, lang } = useThemeLanguage();

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [copiedEmail, setCopiedEmail] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(personalData.email);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2000);
  };

  const handleChange = (e) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate sending / Trigger mailto fallback & confetti
    setTimeout(() => {
      // Confetti effect in luxury gold and champagne
      try {
        confetti({
          particleCount: 80,
          spread: 70,
          origin: { y: 0.6 },
          colors: ['#ECC880', '#C9A96E', '#9B783E', '#FAF6EF']
        });
      } catch (err) {
        // Fallback silently if confetti fails
      }

      // Mailto fallback so user request is guaranteed to reach Nizar
      const mailtoUrl = `mailto:${personalData.email}?subject=${encodeURIComponent(
        formData.subject || 'Contact via Portfolio'
      )}&body=${encodeURIComponent(
        `Nom: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`
      )}`;
      
      window.location.href = mailtoUrl;

      setIsSubmitting(false);
      setIsSubmitted(true);
    }, 800);
  };

  return (
    <section id="contact" className="relative py-28 px-5 sm:px-8 border-t border-white/5 dark:border-white/5 border-black/5 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <p className="text-xs uppercase font-mono tracking-[0.3em] text-[#C9A96E] mb-3">
            {t.contact.subtitle}
          </p>
          <h2 className="font-serif text-4xl sm:text-5xl font-bold tracking-tight text-[#F5F5F7] dark:text-[#F5F5F7] text-[#18181A]">
            {t.contact.title}
          </h2>
          <div className="w-16 h-[2px] bg-gradient-to-r from-transparent via-[#C9A96E] to-transparent mx-auto mt-5 mb-4" />
          <p className="text-sm text-[#A1A1AA] max-w-xl mx-auto">
            {t.contact.description}
          </p>
        </div>

        {/* Contact Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          
          {/* Left Column: Direct Info & Socials */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-5 space-y-6"
          >
            <div className="p-8 rounded-3xl bg-white/[0.02] dark:bg-white/[0.02] bg-black/[0.02] backdrop-blur-md border border-white/10 dark:border-white/10 border-black/10 hover:border-[#C9A96E]/40 transition-colors">
              <h3 className="font-serif text-2xl font-bold text-[#F5F5F7] dark:text-[#F5F5F7] text-[#18181A] mb-6">
                {t.contact.infoTitle}
              </h3>

              <div className="space-y-6">
                {/* Email Item */}
                <div className="flex items-start justify-between gap-4">
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-xl bg-[#C9A96E]/10 border border-[#C9A96E]/30 flex items-center justify-center shrink-0">
                      <Mail className="w-5 h-5 text-[#C9A96E]" />
                    </div>
                    <div>
                      <p className="text-[11px] font-mono uppercase tracking-wider text-[#A1A1AA]">
                        {t.contact.emailLabel}
                      </p>
                      <a
                        href={`mailto:${personalData.email}`}
                        className="text-sm sm:text-base font-medium text-[#F5F5F7] dark:text-[#F5F5F7] text-[#18181A] hover:text-[#C9A96E] transition-colors break-all"
                      >
                        {personalData.email}
                      </a>
                    </div>
                  </div>
                  <button
                    onClick={handleCopyEmail}
                    className="p-2 rounded-lg border border-white/10 hover:border-[#C9A96E] text-[#A1A1AA] hover:text-[#C9A96E] transition-colors shrink-0"
                    title="Copier l'adresse email"
                    aria-label="Copy email"
                  >
                    {copiedEmail ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4" />}
                  </button>
                </div>

                {/* Phone Item */}
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-[#C9A96E]/10 border border-[#C9A96E]/30 flex items-center justify-center shrink-0">
                    <Phone className="w-5 h-5 text-[#C9A96E]" />
                  </div>
                  <div>
                    <p className="text-[11px] font-mono uppercase tracking-wider text-[#A1A1AA]">
                      {t.contact.phoneLabel}
                    </p>
                    <a
                      href={`tel:${personalData.phone.replace(/\s+/g, '')}`}
                      className="text-sm sm:text-base font-medium text-[#F5F5F7] dark:text-[#F5F5F7] text-[#18181A] hover:text-[#C9A96E] transition-colors font-mono"
                    >
                      {personalData.phone}
                    </a>
                  </div>
                </div>

                {/* Location Item */}
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-[#C9A96E]/10 border border-[#C9A96E]/30 flex items-center justify-center shrink-0">
                    <MapPin className="w-5 h-5 text-[#C9A96E]" />
                  </div>
                  <div>
                    <p className="text-[11px] font-mono uppercase tracking-wider text-[#A1A1AA]">
                      {t.contact.locationLabel}
                    </p>
                    <p className="text-sm sm:text-base font-medium text-[#F5F5F7] dark:text-[#F5F5F7] text-[#18181A]">
                      {personalData.location}
                    </p>
                  </div>
                </div>
              </div>

              {/* Social Links */}
              <div className="mt-8 pt-6 border-t border-white/10">
                <p className="text-xs uppercase font-mono tracking-widest text-[#C9A96E] mb-4">
                  {t.contact.socialsLabel}
                </p>
                <div className="flex items-center gap-3">
                  <a
                    href={personalData.socials.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-4 py-2 rounded-xl bg-white/[0.03] border border-white/10 hover:border-[#C9A96E] hover:text-[#C9A96E] text-xs font-mono transition-all group"
                  >
                    <Linkedin className="w-4 h-4 text-[#C9A96E]" />
                    <span>LinkedIn</span>
                  </a>

                  <a
                    href={personalData.socials.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-4 py-2 rounded-xl bg-white/[0.03] border border-white/10 hover:border-[#C9A96E] hover:text-[#C9A96E] text-xs font-mono transition-all group"
                  >
                    <Github className="w-4 h-4 text-[#C9A96E]" />
                    <span>GitHub</span>
                  </a>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right Column: Interactive Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-7"
          >
            <div className="p-8 sm:p-10 rounded-3xl bg-white/[0.02] dark:bg-white/[0.02] bg-black/[0.02] backdrop-blur-md border border-white/10 dark:border-white/10 border-black/10 relative">
              <AnimatePresence mode="wait">
                {isSubmitted ? (
                  <motion.div
                    key="submitted"
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0 }}
                    className="py-12 flex flex-col items-center text-center space-y-4"
                  >
                    <div className="w-16 h-16 rounded-full bg-emerald-500/10 border-2 border-emerald-500/40 flex items-center justify-center text-emerald-400 mb-2">
                      <CheckCircle className="w-8 h-8" />
                    </div>
                    <h3 className="font-serif text-2xl sm:text-3xl font-bold text-gold-gradient">
                      {t.contact.form.successTitle}
                    </h3>
                    <p className="text-sm text-[#A1A1AA] max-w-md">
                      {t.contact.form.successDesc}
                    </p>
                    <button
                      onClick={() => setIsSubmitted(false)}
                      className="mt-6 px-6 py-2.5 rounded-full text-xs font-mono uppercase tracking-wider text-[#C9A96E] border border-[#C9A96E]/40 hover:bg-[#C9A96E]/10 transition-colors"
                    >
                      {lang === 'fr' ? 'Envoyer un autre message' : 'Send another message'}
                    </button>
                  </motion.div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-5">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                      {/* Name Field */}
                      <div>
                        <label className="block text-xs font-mono uppercase tracking-wider text-[#A1A1AA] mb-2">
                          {t.contact.form.nameLabel} *
                        </label>
                        <input
                          type="text"
                          name="name"
                          required
                          value={formData.name}
                          onChange={handleChange}
                          placeholder={t.contact.form.namePlaceholder}
                          className="w-full px-4 py-3 rounded-xl bg-white/[0.03] dark:bg-white/[0.03] bg-black/[0.03] border border-white/10 dark:border-white/10 border-black/10 focus:border-[#C9A96E] focus:outline-none transition-colors text-sm text-[#F5F5F7] dark:text-[#F5F5F7] text-[#18181A]"
                        />
                      </div>

                      {/* Email Field */}
                      <div>
                        <label className="block text-xs font-mono uppercase tracking-wider text-[#A1A1AA] mb-2">
                          {t.contact.form.emailLabel} *
                        </label>
                        <input
                          type="email"
                          name="email"
                          required
                          value={formData.email}
                          onChange={handleChange}
                          placeholder={t.contact.form.emailPlaceholder}
                          className="w-full px-4 py-3 rounded-xl bg-white/[0.03] dark:bg-white/[0.03] bg-black/[0.03] border border-white/10 dark:border-white/10 border-black/10 focus:border-[#C9A96E] focus:outline-none transition-colors text-sm text-[#F5F5F7] dark:text-[#F5F5F7] text-[#18181A]"
                        />
                      </div>
                    </div>

                    {/* Subject Field */}
                    <div>
                      <label className="block text-xs font-mono uppercase tracking-wider text-[#A1A1AA] mb-2">
                        {t.contact.form.subjectLabel} *
                      </label>
                      <input
                        type="text"
                        name="subject"
                        required
                        value={formData.subject}
                        onChange={handleChange}
                        placeholder={t.contact.form.subjectPlaceholder}
                        className="w-full px-4 py-3 rounded-xl bg-white/[0.03] dark:bg-white/[0.03] bg-black/[0.03] border border-white/10 dark:border-white/10 border-black/10 focus:border-[#C9A96E] focus:outline-none transition-colors text-sm text-[#F5F5F7] dark:text-[#F5F5F7] text-[#18181A]"
                      />
                    </div>

                    {/* Message Field */}
                    <div>
                      <label className="block text-xs font-mono uppercase tracking-wider text-[#A1A1AA] mb-2">
                        {t.contact.form.messageLabel} *
                      </label>
                      <textarea
                        name="message"
                        required
                        rows="5"
                        value={formData.message}
                        onChange={handleChange}
                        placeholder={t.contact.form.messagePlaceholder}
                        className="w-full px-4 py-3 rounded-xl bg-white/[0.03] dark:bg-white/[0.03] bg-black/[0.03] border border-white/10 dark:border-white/10 border-black/10 focus:border-[#C9A96E] focus:outline-none transition-colors text-sm text-[#F5F5F7] dark:text-[#F5F5F7] text-[#18181A] resize-none"
                      />
                    </div>

                    {/* Submit Button */}
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full py-4 rounded-xl text-xs sm:text-sm font-semibold uppercase tracking-wider text-[#0A0A0A] bg-gradient-to-r from-[#ECC880] via-[#C9A96E] to-[#B89253] hover:shadow-gold-hover transition-all duration-300 hover:scale-[1.01] active:scale-[0.99] flex items-center justify-center gap-2 disabled:opacity-50"
                    >
                      <Send className="w-4 h-4" />
                      <span>{isSubmitting ? t.contact.form.sendingBtn : t.contact.form.submitBtn}</span>
                    </button>

                    <p className="text-[11px] text-[#A1A1AA]/70 font-mono text-center pt-2">
                      {t.contact.form.notice}
                    </p>
                  </form>
                )}
              </AnimatePresence>
            </div>
          </motion.div>

        </div>

      </div>
    </section>
  );
}
