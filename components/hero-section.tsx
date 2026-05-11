"use client";

import { motion } from "framer-motion";
import { Zap, ChevronRight } from "lucide-react";

export function HeroSection() {
  return (
    <section className="relative min-h-[600px] flex items-center justify-center overflow-hidden pt-20">
      {/* 1. BACKGROUND IMAGE (Karakter Anime) */}
      <div className="absolute inset-0 z-0">
        <img 
          src="/images/hero-bg.jpg" // Ganti dengan gambar anime pilihanmu
          alt="Background"
          className="w-full h-full object-cover opacity-40" 
        />
        {/* Overlay Gradient agar teks tetap terbaca */}
        <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-zinc-950/60 to-transparent" />
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-6 text-center">
        {/* 2. BADGE ZENON */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          className="inline-flex items-center gap-2 bg-teal-500/10 border border-teal-500/20 px-3 py-1 rounded-full mb-6"
        >
          <Zap className="w-3 h-3 text-teal-400" />
          <span className="text-teal-400 text-xs font-bold uppercase tracking-wider">Zenon</span>
        </motion.div>

        {/* 3. MAIN TITLE */}
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-4xl md:text-7xl font-black text-white mb-4 tracking-tighter"
        >
          NEXT-GEN <span className="text-teal-400">HOSTING</span> SOLUTIONS
        </motion.h1>

        {/* 4. DESCRIPTION */}
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="text-zinc-300 text-sm md:text-lg max-w-2xl mx-auto mb-8 font-medium leading-relaxed"
        >
          SOLUSI TERPANDU DENGAN 100+ FITUR KAMI. NO DELAY. FREE UPDATE.
        </motion.p>

        {/* 5. CTA BUTTON */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <a
            href="#products"
            className="group relative px-8 py-3 bg-transparent border-2 border-teal-500/50 text-teal-400 font-bold rounded-lg overflow-hidden hover:bg-teal-500 hover:text-black transition-all duration-300"
          >
            <span className="relative z-10 flex items-center gap-2 text-sm md:text-base">
              Order Sekarang <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </span>
          </a>
        </motion.div>
      </div>

      {/* 6. RUNNING TEXT (Pita Harga di Bawah) */}
      <div className="absolute bottom-0 w-full bg-teal-500/5 border-y border-teal-500/10 py-2 overflow-hidden whitespace-nowrap">
        <div className="flex animate-marquee gap-8 text-[10px] md:text-xs font-bold text-teal-400/80 uppercase">
          <span>Panel Pterodactyl 1GB - Rp10.000</span>
          <span>•</span>
          <span>Script Bot WA Basic - Rp15.000</span>
          <span>•</span>
          <span>Panel Pterodactyl Unlimited - Rp50.000</span>
          <span>•</span>
          {/* Ulangi teks agar loop terlihat sempurna */}
        </div>
      </div>
    </section>
  );
}
