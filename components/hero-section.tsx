"use client";

import React from "react";
import useEmblaCarousel from "embla-carousel-react";
import { Zap, Shield, Users, ChevronRight, MessageCircle, Server, Code, Smartphone } from "lucide-react";
import Link from "next/link";

const SLIDES = [
  {
    category: "PANEL PTERODACTYL",
    title: <>HOSTING <span className="text-teal-400">PREMIUM</span></>,
    desc: "Panel performa tinggi untuk bot & game server.",
    bg: "/images/hero-1.jpg",
    target: "#panel" // Arahkan ke ID section panel
  },
  {
    category: "SCRIPT BOT WA",
    title: <>BOT <span className="text-teal-400">OTOMATIS</span></>,
    desc: "Script bot WhatsApp fitur terlengkap & anti delay.",
    bg: "/images/hero-2.jpg",
    target: "#script" // Arahkan ke ID section script
  },
  {
    category: "MOBILE APP",
    title: <>APP <span className="text-teal-400">PREMIUM</span></>,
    desc: "Aplikasi Android & iOS untuk kebutuhan digitalmu.",
    bg: "/images/hero-3.jpg",
    target: "#app" // Arahkan ke ID section app
  }
];

export function HeroSection() {
  const [emblaRef] = useEmblaCarousel({ loop: true });

  return (
    <section className="pt-16 pb-6 px-3 sm:px-6 bg-zinc-950">
      <div className="max-w-6xl mx-auto">
        
        {/* --- MAIN CARD --- */}
        <div className="relative rounded-2xl overflow-hidden border border-zinc-800 bg-zinc-900/40" ref={emblaRef}>
          <div className="flex">
            {SLIDES.map((slide, index) => (
              <div 
                className="flex-[0_0_100%] min-w-0 relative h-[280px] sm:h-[380px] flex items-center p-5 sm:p-10" 
                key={index}
              >
                <img src={slide.bg} className="absolute inset-0 w-full h-full object-cover opacity-20" alt="" />
                <div className="absolute inset-0 bg-gradient-to-r from-zinc-950 via-zinc-950/70 to-transparent z-1" />

                <div className="relative z-10 w-full">
                  {/* Kategori di Kiri Atas (Ganti Verified) */}
                  <div className="absolute top-[-20px] sm:top-[-40px] left-0 flex items-center gap-2 bg-zinc-800/80 border border-zinc-700 px-3 py-1 rounded-br-xl rounded-tl-xl">
                    <div className="w-1.5 h-1.5 bg-teal-500 rounded-full animate-pulse" />
                    <span className="text-[9px] sm:text-[10px] text-zinc-300 font-black uppercase tracking-widest italic">
                      {slide.category}
                    </span>
                  </div>

                  <h1 className="text-3xl sm:text-5xl font-black text-white mb-2 leading-tight italic tracking-tighter uppercase">
                    {slide.title}
                  </h1>

                  <p className="text-zinc-400 text-[11px] sm:text-base mb-6 max-w-md line-clamp-2">
                    {slide.desc}
                  </p>

                  <div className="flex gap-2">
                    {/* Link diarahkan sesuai target slide */}
                    <Link 
                      href={slide.target} 
                      className="inline-flex items-center gap-1.5 bg-teal-500 hover:bg-teal-400 text-black px-5 py-2 rounded-xl font-black text-[11px] sm:text-sm transition-all active:scale-95"
                    >
                      BELI SEKARANG <ChevronRight className="w-4 h-4" />
                    </Link>
                    <a href="https://wa.me/6285701961876" className="inline-flex items-center gap-1.5 bg-zinc-800 border border-zinc-700 text-white px-4 py-2 rounded-xl font-bold text-[11px] sm:text-sm">
                      <MessageCircle className="w-4 h-4" /> CHAT
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* --- STATS MINI --- */}
        <div className="grid grid-cols-3 gap-2 mt-3">
          <div className="bg-zinc-900/40 border border-zinc-800 rounded-xl p-2.5 text-center flex flex-col items-center">
            <Server className="w-3.5 h-3.5 text-teal-500 mb-1" />
            <div className="text-[11px] sm:text-sm font-black text-white leading-none uppercase italic">Panel</div>
          </div>
          <div className="bg-zinc-900/40 border border-zinc-800 rounded-xl p-2.5 text-center flex flex-col items-center">
            <Code className="w-3.5 h-3.5 text-teal-400 mb-1" />
            <div className="text-[11px] sm:text-sm font-black text-white leading-none uppercase italic">Script</div>
          </div>
          <div className="bg-zinc-900/40 border border-zinc-800 rounded-xl p-2.5 text-center flex flex-col items-center">
            <Smartphone className="w-3.5 h-3.5 text-teal-300 mb-1" />
            <div className="text-[11px] sm:text-sm font-black text-white leading-none uppercase italic">App</div>
          </div>
        </div>

      </div>
    </section>
  );
}
