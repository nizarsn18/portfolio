import React from 'react';

export default function BackgroundBeams() {
  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden" aria-hidden="true">
      {/* Top Golden Radial Glow (Pure CSS - Zero CPU/GPU recalculations) */}
      <div 
        className="absolute -top-[20%] left-1/2 -translate-x-1/2 w-[900px] h-[550px] rounded-full pointer-events-none"
        style={{
          background: 'radial-gradient(circle, rgba(201, 169, 110, 0.12) 0%, rgba(201, 169, 110, 0.03) 45%, transparent 70%)',
          willChange: 'transform'
        }}
      />

      {/* Side Ambient Warm Glow */}
      <div 
        className="absolute top-[35%] -right-40 w-[600px] h-[600px] rounded-full pointer-events-none"
        style={{
          background: 'radial-gradient(circle, rgba(201, 169, 110, 0.08) 0%, transparent 65%)'
        }}
      />

      {/* Subtle Hairline Grid Pattern (static CSS, optimized) */}
      <div 
        className="absolute inset-0 opacity-[0.025] dark:opacity-[0.035] pointer-events-none"
        style={{
          backgroundImage: `linear-gradient(to right, #C9A96E 1px, transparent 1px), linear-gradient(to bottom, #C9A96E 1px, transparent 1px)`,
          backgroundSize: '90px 90px'
        }}
      />
    </div>
  );
}
