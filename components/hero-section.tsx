"use client";

import React from "react";
import useEmblaCarousel from "embla-carousel-react";
import { ChevronRight, MessageCircle, Zap, Shield, Users, Rocket } from "lucide-react";
import Link from "next/link";

const SLIDES = [
  {
    category: "PANEL PTERODACTYL",
    title: <>HOSTING <span className="text-teal-400">PREMIUM</span></>,
    desc: "Panel performa tinggi untuk bot & game server tanpa delay.",
    bg: "/images/hero-1.jpg",
    target: "#panel"
  },
  {
    category: "SCRIPT BOT WA",
    title: <>BOT <span className="text-teal-400">OTOMATIS</span></>,
    desc: "Script bot WhatsApp fitur terlengkap & anti delay 24 jam.",
    bg: "/images/hero-2.jpg",
    target: "#script"
  },
  {
    category: "MOBILE APP",
    title: <>APP <span className="text-teal-400">PREMIUM</span></>,
    desc: "Aplikasi Android & iOS premium untuk kebutuhan digitalmu.",
    bg: "/images/hero-3.jpg",
    target: "#app"
  }
];

export function HeroSection() {
  const [emblaRef] = useEmblaCarousel({ loop: true });

  return (
    <section className="pt-16 pb-6 px-3 sm:px-6 bg-zinc-950">
      <div className="max-w-6xl mx-auto">
        
        {/* --- MAIN BANNER --- */}
        <div className="relative rounded-2xl overflow-hidden border border-zinc-800 bg-zinc-900/40 shadow-xl mb-4" ref={emblaRef}>
          <div className="flex">
            {SLIDES.map((slide, index) => (
              <div 
                className="flex-[0_0_100%] min-w-0 relative h-[280px] sm:h-[350px] flex items-center p-6 sm:p-12" 
                key={index}
              >
                <img src={slide.bg} className="absolute inset-0 w-full h-full object-cover opacity-20" alt="" />
                <div className="absolute inset-0 bg-gradient-to-r from-zinc-950 via-zinc-950/80 to-transparent z-1" />

                <div className="relative z-10 w-full">
                  <div className="inline-flex items-center gap-2 bg-zinc-800/80 border border-zinc-700 px-3 py-1 rounded-lg mb-4">
                    <div className="w-1.5 h-1.5 bg-teal-500 rounded-full animate-pulse" />
                    <span className="text-[10px] text-zinc-300 font-black uppercase tracking-widest italic">
                      {slide.category}
                    </span>
                  </div>

                  <h1 className="text-3xl sm:text-5xl font-black text-white mb-2 leading-tight italic tracking-tighter uppercase">
                    {slide.title}
                  </h1>

                  <p className="text-zinc-400 text-[11px] sm:text-base mb-8 max-w-md line-clamp-2">
                    {slide.desc}
                  </p>

                  <div className="flex gap-3">
                    <Link 
                      href={slide.target} 
                      className="inline-flex items-center gap-2 bg-teal-500 hover:bg-teal-400 text-black px-6 py-2.5 rounded-xl font-black text-[11px] sm:text-sm transition-all active:scale-95 shadow-lg shadow-teal-500/20"
                    >
                      BELI SEKARANG <ChevronRight className="w-4 h-4" />
                    </Link>
                    
                    <a href="https://wa.me/6285701961876" className="inline-flex items-center gap-2 bg-zinc-800/50 hover:bg-zinc-800 border border-zinc-700 text-white px-6 py-2.5 rounded-xl font-bold text-[11px] sm:text-sm transition-all">
                      <MessageCircle className="w-4 h-4" /> CHAT
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* --- 4 KOTAK INFO (STATS & PROMO) --- */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-2">
          {/* KOTAK 1: PROMO MENARIK */}
          <div className="bg-gradient-to-br from-teal-500/20 to-zinc-900 border border-teal-500/30 rounded-xl p-3 flex flex-col justify-center min-h-[80px]">
            <div className="flex items-center gap-1.5 mb-1">
              <Rocket className="w-3 h-3 text-teal-400" />
              <span className="text-[9px] font-black text-teal-400 uppercase italic">Limited Offer</span>
            </div>
            <p className="text-[10px] sm:text-xs text-white font-bold leading-tight uppercase italic">
              DISKON <span className="text-teal-400">UP TO 50%</span> KHUSUS HARI INI!
            </p>
          </div>

          {/* KOTAK 2: USERS */}
          <div className="bg-zinc-900/60 border border-zinc-800 rounded-xl p-3 flex flex-col items-center justify-center text-center">
            <Users className="w-4 h-4 text-teal-400 mb-1" />
            <div className="text-sm sm:text-lg font-black text-white italic leading-none">5000+</div>
            <div className="text-[9px] text-zinc-500 font-bold uppercase mt-1">Happy Users</div>
          </div>

          {/* KOTAK 3: UPTIME */}
          <div className="bg-zinc-900/60 border border-zinc-800 rounded-xl p-3 flex flex-col items-center justify-center text-center">
            <Zap className="w-4 h-4 text-teal-400 mb-1" />
            <div className="text-sm sm:text-lg font-black text-white italic leading-none">99.9%</div>
            <div className="text-[9px] text-zinc-500 font-bold uppercase mt-1">Real Uptime</div>
          </div>

          {/* KOTAK 4: SUPPORT */}
          <div className="bg-zinc-900/60 border border-zinc-800 rounded-xl p-3 flex flex-col items-center justify-center text-center">
            <Shield className="w-4 h-4 text-teal-400 mb-1" />
            <div className="text-sm sm:text-lg font-black text-white italic leading-none">24/7</div>
            <div className="text-[9px] text-zinc-500 font-bold uppercase mt-1">Fast Support</div>
          </div>
        </div>

      </div>
    </section>
  );
}
