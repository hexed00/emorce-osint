'use client';

import { motion } from 'framer-motion';

export default function Entrance({ onEnter }: { onEnter: () => void }) {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-hex-darker scanline">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_rgba(139,0,0,0.12)_0%,_transparent_70%)]" />
      <motion.div
        initial={{ opacity: 0, scale: 0.92 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
        className="relative z-10 text-center px-6 max-w-lg"
      >
        <div className="mx-auto mb-6 w-20 h-20 rounded-2xl overflow-hidden border border-hex-blood/60 shadow-[0_0_40px_rgba(139,0,0,0.5)]">
          <img
            src="https://i.pinimg.com/736x/42/de/d5/42ded506cb69f48fad09de00cdf3e54f.jpg"
            alt="emorce"
            className="w-full h-full object-cover"
          />
        </div>
        <h1 className="font-display text-4xl sm:text-5xl font-bold tracking-tight mb-2">
          <span className="text-hex-bone">emorce</span>{' '}
          <span className="text-hex-crimson glow-text">OSINT</span>
        </h1>
        <p className="text-hex-muted font-mono text-xs tracking-[0.25em] uppercase mb-8">
          full spectrum intelligence vault
        </p>
        <p className="text-sm text-hex-bone/70 mb-10 leading-relaxed">
          breaches · stealer logs · username recon · face lookup · leak engines · graph intel
        </p>
        <button
          onClick={onEnter}
          className="hex-btn px-10 py-3.5 rounded-lg font-mono text-sm tracking-widest uppercase"
        >
          enter vault
        </button>
        <p className="mt-8 text-[10px] text-hex-muted/50 font-mono">
          for the circle · built for axion
        </p>
      </motion.div>
    </div>
  );
}
