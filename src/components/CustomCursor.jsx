import React, { useEffect, useRef } from 'react';

export default function CustomCursor() {
  const cursorRef = useRef(null);
  const dotRef = useRef(null);

  useEffect(() => {
    // Only enable for desktop devices with fine pointer (mouse)
    const hasPointer = window.matchMedia('(hover: hover) and (pointer: fine)').matches;
    if (!hasPointer) return;

    const cursor = cursorRef.current;
    const dot = dotRef.current;
    if (!cursor || !dot) return;

    let mouseX = -100;
    let mouseY = -100;
    let cursorX = -100;
    let cursorY = -100;
    let isHovered = false;
    let rafId = null;

    const onMouseMove = (e) => {
      mouseX = e.clientX;
      mouseY = e.clientY;

      // Immediate 1:1 hardware update for the dot (zero latency)
      dot.style.transform = `translate3d(${mouseX - 4}px, ${mouseY - 4}px, 0)`;
      dot.style.opacity = '1';
      cursor.style.opacity = '1';
    };

    // Smooth lerp for follower ring only, completely outside React render cycle
    const loop = () => {
      const ease = 0.22;
      cursorX += (mouseX - 16 - cursorX) * ease;
      cursorY += (mouseY - 16 - cursorY) * ease;

      cursor.style.transform = `translate3d(${cursorX}px, ${cursorY}px, 0) scale(${isHovered ? 1.5 : 1})`;
      rafId = requestAnimationFrame(loop);
    };

    const onMouseOver = (e) => {
      const target = e.target;
      if (
        target.closest('a') ||
        target.closest('button') ||
        target.closest('input') ||
        target.closest('textarea') ||
        target.closest('[role="button"]') ||
        target.closest('.cursor-pointer')
      ) {
        if (!isHovered) {
          isHovered = true;
          cursor.style.borderColor = '#C9A96E';
          cursor.style.backgroundColor = 'rgba(201, 169, 110, 0.12)';
        }
      } else {
        if (isHovered) {
          isHovered = false;
          cursor.style.borderColor = 'rgba(201, 169, 110, 0.45)';
          cursor.style.backgroundColor = 'transparent';
        }
      }
    };

    const onMouseLeave = () => {
      dot.style.opacity = '0';
      cursor.style.opacity = '0';
    };

    window.addEventListener('mousemove', onMouseMove, { passive: true });
    document.addEventListener('mouseover', onMouseOver, { passive: true });
    document.addEventListener('mouseleave', onMouseLeave, { passive: true });
    rafId = requestAnimationFrame(loop);

    return () => {
      window.removeEventListener('mousemove', onMouseMove);
      document.removeEventListener('mouseover', onMouseOver);
      document.removeEventListener('mouseleave', onMouseLeave);
      if (rafId) cancelAnimationFrame(rafId);
    };
  }, []);

  return (
    <>
      {/* Outer Follower Ring (GPU transform3d) */}
      <div
        ref={cursorRef}
        aria-hidden="true"
        className="fixed top-0 left-0 pointer-events-none z-[9999] w-8 h-8 rounded-full border border-[#C9A96E]/45 transition-[background-color,border-color] duration-150 opacity-0"
        style={{ willChange: 'transform' }}
      />

      {/* Inner Precision Dot (Direct 1:1 hardware tracking) */}
      <div
        ref={dotRef}
        aria-hidden="true"
        className="fixed top-0 left-0 pointer-events-none z-[9999] w-2 h-2 rounded-full bg-[#C9A96E] opacity-0"
        style={{ willChange: 'transform' }}
      />
    </>
  );
}
