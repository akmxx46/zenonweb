"use client";

import { Zap, ChevronRight } from "lucide-react";
import { motion } from "framer-motion";

export function HeroSection() {
  return (
    <section className="relative min-h-[500px] flex items-center justify-center overflow-hidden pt-20 bg-zinc-950">
      {/* Background Anime & Overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src="/images/hero-bg.jpg" 
          alt="Background"
          className="w-full h-full object-cover opacity-40" 
        />
        <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-zinc-950/60 to-transparent" />
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-6 text-center">
        {/* Badge */}
        <div className="inline-flex items-center gap-2 bg-teal-500/10 border border-teal-500/20 px-3 py-1 rounded-full mb-6">
          <Zap className="w-3 h-3 text-teal-400 fill-teal-400" />
          <span className="text-teal-400 text-[10px] font-bold uppercase tracking-wider">Zenon Store</span>
        </div>

        {/* Headline */}
        <h1 className="text-4xl md:text-7xl font-black text-white mb-4 tracking-tighter">
          NEXT-GEN <span className="text-teal-400">HOSTING</span> SOLUTIONS
        </h1>

        {/* Sub-headline */}
        <p className="text-zinc-300 text-sm md:text-lg max-w-2xl mx-auto mb-8 font-medium leading-relaxed uppercase">
          SOLUSI TERPANDU DENGAN 100+ FITUR KAMI. NO DELAY. FREE UPDATE.
        </p>

        {/* CTA Button */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <a
            href="#products"
            className="group flex items-center gap-2 px-8 py-3 bg-transparent border-2 border-teal-500/50 text-teal-400 font-bold rounded-lg hover:bg-teal-500 hover:text-black transition-all duration-300 text-sm md:text-base"
          >
            Order Sekarang <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </a>
        </div>
      </div>
    </section>
  );
}
