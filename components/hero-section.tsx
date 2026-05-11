"use client";

import React from "react";
import useEmblaCarousel from "embla-carousel-react";
import { Zap, Shield, Users, ChevronRight } from "lucide-react";
import Link from "next/link";

const SLIDES = [
  {
    title: <>Panel WhatsApp & <span className="text-teal-400">Script Bot WA</span></>,
    desc: "Beli produk premium untuk kebutuhan hosting anda secara otomatis & murah meriah.",
    bg: "/images/hero-1.jpg",
  },
  {
    title: <>Layanan <span className="text-teal-400">24/7 Nonstop</span></>,
    desc: "Aktivasi instan tanpa nunggu lama. Panel Pterodactyl kualitas terbaik.",
    bg: "/images/hero-2.jpg",
  }
];

const PRODUCTS = [
  "Panel Pterodactyl 1GB - Rp10.000",
  "Script Bot WA Basic - Rp15.000",
  "Panel Unlimited - Rp50.000",
  "Sewa Bot Raiden - Rp7.000"
];

export function HeroSection() {
  const [emblaRef] = useEmblaCarousel({ loop: true });

  return (
    <section className="pt-16 sm:pt-20 pb-8 sm:pb-10 px-3 sm:px-4 lg:px-6">
      <div className="max-w-6xl mx-auto">
        
        {/* --- CAROUSEL BANNER (DENGAN TINGGI DIKUNCI) --- */}
        <div className="relative rounded-xl sm:rounded-2xl overflow-hidden border border-zinc-700/80 bg-zinc-950" ref={emblaRef}>
          <div className="flex">
            {SLIDES.map((slide, index) => (
              <div 
                className="flex-[0_0_100%] min-w-0 relative h-[380px] sm:h-[480px] flex items-center" 
                key={index}
              >
                {/* Gambar dikunci dengan object-cover agar tidak gepeng/berubah ukuran */}
                <img 
                  src={slide.bg} 
                  className="absolute inset-0 w-full h-full object-cover object-center opacity-30 z-0" 
                  alt="" 
                />
                
                {/* Overlay agar teks tetap kebaca */}
                <div className="absolute inset-0 bg-gradient-to-r from-zinc-950 via-zinc-950/70 to-transparent z-1" />

                <div className="relative z-10 w-full p-6 sm:p-12">
                  <div className="inline-flex items-center gap-1.5 bg-teal-400/15 border border-teal-400/40 rounded-full px-3 py-1 text-[10px] sm:text-xs text-teal-400 mb-4 font-bold uppercase">
                    <Zap className="w-3 h-3" /> Geser untuk promo
                  </div>
                  <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black text-white mb-4 leading-[1.1] italic uppercase tracking-tighter">
                    {slide.title}
                  </h1>
                  <p className="text-zinc-300 text-sm sm:text-lg max-w-xl mb-8 leading-relaxed font-medium">
                    {slide.desc}
                  </p>
                  <Link href="#products" className="inline-flex items-center gap-2 bg-teal-500 text-black px-6 py-3 rounded-xl font-bold text-sm transition-all active:scale-95 shadow-lg shadow-teal-500/20">
                    Order Sekarang <ChevronRight className="w-4 h-4" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* --- RUNNING TEXT --- */}
        <div className="mt-4 py-3 bg-zinc-900/50 border-y border-zinc-800 overflow-hidden relative rounded-lg">
          <div className="flex whitespace-nowrap animate-marquee-simple">
            {[...PRODUCTS, ...PRODUCTS].map((text, i) => (
              <span key={i} className="text-[10px] sm:text-xs font-bold text-teal-400/80 mx-8 uppercase tracking-widest flex items-center gap-2">
                <span className="w-1.5 h-1.5 bg-teal-500 rounded-full" /> {text}
              </span>
            ))}
          </div>
        </div>

        {/* --- STATS SECTION --- */}
        <div className="grid grid-cols-3 gap-2 sm:gap-4 mt-4">
          {[{ icon: Users, label: "5000+", sub: "User" }, { icon: Zap, label: "99.9%", sub: "Uptime" }, { icon: Shield, label: "24/7", sub: "Support" }].map((stat, i) => (
            <div key={i} className="bg-zinc-900/90 border border-zinc-700/80 rounded-lg p-3 sm:p-5 text-center">
              <stat.icon className="w-4 h-4 text-teal-400 mx-auto mb-1" />
              <div className="text-lg sm:text-2xl font-black text-white">{stat.label}</div>
              <div className="text-[9px] sm:text-[10px] text-zinc-500 uppercase font-bold tracking-wider">{stat.sub}</div>
            </div>
          ))}
        </div>

      </div>

      <style jsx>{`
        @keyframes marqueeSimple {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .animate-marquee-simple {
          display: flex;
          animation: marqueeSimple 25s linear infinite;
        }
      `}</style>
    </section>
  );
}
