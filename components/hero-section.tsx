"use client";

import { Zap, ChevronRight } from "lucide-react";

export function HeroSection() {
  return (
    <section className="relative min-h-[500px] flex items-center justify-center overflow-hidden pt-20 bg-zinc-950">
      {/* Background & Overlay */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-br from-teal-500/10 via-transparent to-transparent z-10" />
        <div className="absolute inset-0 bg-zinc-950/50 z-0" />
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-6 text-center">
        {/* Badge */}
        <div className="inline-flex items-center gap-2 bg-teal-500/10 border border-teal-500/20 px-3 py-1 rounded-full mb-6">
          <Zap className="w-3 h-3 text-teal-400 fill-teal-400" />
          <span className="text-teal-400 text-xs font-bold uppercase tracking-wider">
            ZenonStore
          </span>
        </div>

        {/* Headline */}
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 tracking-tight">
          Solusi Hosting Bot <br />
          <span className="text-teal-400">& Script Tanpa Batas</span>
        </h1>

        {/* Sub-headline */}
        <p className="text-zinc-400 text-sm md:text-lg max-w-2xl mx-auto mb-10 font-medium leading-relaxed">
          Panel Pterodactyl dengan performa tinggi untuk kebutuhan Bot WhatsApp 
          dan Game Server kamu. Aktivasi instan dalam hitungan detik!
        </p>

        {/* CTA Button */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <a
            href="#products"
            className="group inline-flex items-center gap-2 bg-teal-500 hover:bg-teal-400 text-black px-8 py-3 rounded-xl text-base font-bold transition-all shadow-lg shadow-teal-500/25"
          >
            Mulai Sekarang
            <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </a>
        </div>
      </div>
    </section>
  );
}
