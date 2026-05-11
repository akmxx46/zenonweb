"use client";

import React, { useEffect, useCallback } from "react";
import useEmblaCarousel from "embla-carousel-react";
import { ChevronRight, MessageCircle, Zap, Shield, Users } from "lucide-react";
import Link from "next/link";

const SLIDES = [
  {
    category: "PANEL PTERODACTYL",
    title: <>HOSTING <span className="text-teal-400">PREMIUM</span></>,
    desc: "Panel performa tinggi untuk bot & game server.",
    bg: "/images/hero-1.jpg",
    target: "#panel"
  },
  {
    category: "SCRIPT BOT WA",
    title: <>BOT <span className="text-teal-400">OTOMATIS</span></>,
    desc: "Script bot WhatsApp fitur terlengkap 24 jam.",
    bg: "/images/hero-2.jpg",
    target: "#script"
  },
  {
    category: "MOBILE APP",
    title: <>APP <span className="text-teal-400">PREMIUM</span></>,
    desc: "Aplikasi Android & iOS premium untukmu.",
    bg: "/images/hero-3.jpg",
    target: "#app"
  }
];

export function HeroSection() {
  // Pakai embla dasar tanpa plugin tambahan biar gak eror build
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true });

  // Fungsi buat geser otomatis pakai logic manual
  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext();
  }, [emblaApi]);

  useEffect(() => {
    const intervalId = setInterval(scrollNext, 4000); // Geser tiap 4 detik
    return () => clearInterval(intervalId);
  }, [scrollNext]);

  return (
    <section className="pt-16 pb-4 px-3 sm:px-6 bg-zinc-950">
      <div className="max-w-6xl mx-auto">
        
        {/* --- BANNER AREA --- */}
        <div className="relative rounded-2xl overflow-hidden border border-zinc-800 bg-zinc-950 shadow-[0_0_30px_rgba(20,184,166,0.05)] mb-3">
          
          {/* Cahaya Pemanis biar gak gelap-gelap amat */}
          <div className="absolute top-0 right-0 w-32 h-32 bg-teal-500/10 rounded-full blur-[80px] z-0" />
          
          <div className="overflow-hidden cursor-grab active:cursor-grabbing" ref={emblaRef}>
            <div className="flex">
              {SLIDES.map((slide, index) => (
                <div className="flex-[0_0_100%] min-w-0 relative h-[220px] sm:h-[300px] flex items-center p-5 sm:p-10" key={index}>
                  <img src={slide.bg} className="absolute inset-0 w-full h-full object-cover opacity-20 z-0" alt="" />
                  <div className="absolute inset-0 bg-gradient-to-r from-zinc-950 via-zinc-950/70 to-transparent z-1" />

                  <div className="relative z-10 w-full">
                    <div className="inline-flex items-center gap-1.5 bg-teal-500/10 border border-teal-500/30 rounded-md px-2 py-0.5 mb-2">
                      <div className="w-1 h-1 bg-teal-400 rounded-full animate-pulse shadow-[0_0_5px_#14b8a6]" />
                      <span className="text-[8px] text-teal-400 font-black uppercase tracking-widest italic">{slide.category}</span>
                    </div>
                    
                    <h1 className="text-3xl sm:text-4xl font-black text-white mb-1.5 italic tracking-tighter uppercase leading-none">
                      {slide.title}
                    </h1>
                    
                    <p className="text-zinc-400 text-[10px] sm:text-sm mb-5 max-w-[250px] line-clamp-1 italic font-medium">
                      {slide.desc}
                    </p>
                    
                    <div className="flex gap-2">
                      <Link href={slide.target} className="bg-teal-500 hover:bg-teal-400 text-black px-5 py-2 rounded-lg font-black text-[10px] uppercase flex items-center gap-1.5 transition-all shadow-[0_0_15px_rgba(20,184,166,0.4)]">
                        BELI <ChevronRight className="w-3.5 h-3.5" />
                      </Link>
                      <a href="https://wa.me/6285701961876" className="bg-zinc-800/80 border border-zinc-700 text-white px-5 py-2 rounded-lg font-bold text-[10px] flex items-center gap-1.5">
                        <MessageCircle className="w-3.5 h-3.5" /> CHAT
                      </a>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* --- 3 KOTAK STATS --- */}
        <div className="grid grid-cols-3 gap-2">
          <div className="bg-zinc-900/60 border border-zinc-800/80 rounded-xl py-3 text-center flex flex-col items-center justify-center min-h-[75px]">
            <Users className="w-4 h-4 text-teal-500 mb-0.5" />
            <div className="text-sm sm:text-xl font-black text-white leading-none italic">5000+</div>
            <div className="text-[8px] text-zinc-500 font-bold uppercase mt-1">Pengguna</div>
          </div>
          <div className="bg-zinc-900/60 border border-zinc-800/80 rounded-xl py-3 text-center flex flex-col items-center justify-center min-h-[75px]">
            <Zap className="w-4 h-4 text-teal-500 mb-0.5" />
            <div className="text-sm sm:text-xl font-black text-white leading-none italic">99.9%</div>
            <div className="text-[8px] text-zinc-500 font-bold uppercase mt-1">Uptime</div>
          </div>
          <div className="bg-zinc-900/60 border border-zinc-800/80 rounded-xl py-3 text-center flex flex-col items-center justify-center min-h-[75px]">
            <Shield className="w-4 h-4 text-teal-400 mb-0.5" />
            <div className="text-sm sm:text-xl font-black text-white leading-none italic">24/7</div>
            <div className="text-[8px] text-zinc-500 font-bold uppercase mt-1">Support</div>
          </div>
        </div>

      </div>
    </section>
  );
}
