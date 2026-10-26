import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function Preloader({ onComplete }) {
  const [progress, setProgress] = useState(0);
  const [isLoaded, setIsLoaded] = useState(() => {
    // If already shown during this session, skip immediately
    if (typeof window !== 'undefined') {
      return sessionStorage.getItem('nizar_preloader_shown') === 'true';
    }
    return false;
  });

  useEffect(() => {
    if (isLoaded) {
      if (onComplete) onComplete();
      return;
    }

    const timer = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(timer);
          sessionStorage.setItem('nizar_preloader_shown', 'true');
          setTimeout(() => {
            setIsLoaded(true);
            if (onComplete) onComplete();
          }, 150);
          return 100;
        }
        return Math.min(prev + 25, 100);
      });
    }, 40);

    return () => clearInterval(timer);
  }, [isLoaded, onComplete]);

  if (isLoaded) return null;

  return (
    <AnimatePresence>
      {!isLoaded && (
        <motion.div
          key="preloader"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, transition: { duration: 0.35, ease: 'easeOut' } }}
          className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-[#0A0A0A] text-[#F5F5F7] select-none pointer-events-auto"
        >
          {/* Subtle Ambient Gold Glow (Static CSS) */}
          <div className="absolute w-80 h-80 rounded-full bg-[#C9A96E]/10 blur-2xl pointer-events-none" />

          {/* Luxury Monogram NS */}
          <div className="relative flex flex-col items-center">
            <div className="relative w-24 h-24 rounded-full flex items-center justify-center border border-[#C9A96E]/40 bg-[#161619] shadow-gold-soft mb-6">
              <span className="font-serif text-3xl font-bold tracking-wider text-gold-gradient">
                NS
              </span>
            </div>

            {/* Subtitle */}
            <p className="text-[11px] uppercase tracking-[0.25em] text-[#C9A96E] font-medium mb-5 font-mono">
              Nizar SNABI &bull; Portfolio
            </p>

            {/* Fine Gold Progress Bar */}
            <div className="w-48 h-[2px] bg-white/10 rounded-full overflow-hidden relative">
              <div
                className="h-full bg-gradient-to-r from-[#9B783E] via-[#C9A96E] to-[#ECC880] transition-all duration-75 ease-out"
                style={{ width: `${progress}%` }}
              />
            </div>

            {/* Percentage */}
            <div className="mt-2.5 text-[11px] tracking-widest text-[#A1A1AA] font-mono">
              {progress}%
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
