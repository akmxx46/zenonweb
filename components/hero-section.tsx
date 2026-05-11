"use client";

import React from "react";
import useEmblaCarousel from "embla-carousel-react";
import { Zap, Shield, Users, ChevronRight, MessageCircle } from "lucide-react";
import Link from "next/link";

const SLIDES = [
  {
    title: <>PANEL WA & <span className="text-teal-400">SCRIPT BOT</span></>,
    desc: "Hosting bot & script premium otomatis 24 jam.",
    bg: "/images/hero-1.jpg",
  },
  {
    title: <>CLOUD <span className="text-teal-400">NONSTOP</span></>,
    desc: "Performa tinggi dengan proteksi DDoS terbaik.",
    bg: "/images/hero-2.jpg",
  }
];

const PRODUCTS = [
  "Panel 1GB - Rp10rb",
  "Script Basic - Rp15rb",
  "Panel Unlimited - Rp50rb",
  "Sewa Bot - Rp7rb"
];

export function HeroSection() {
  const [emblaRef] = useEmblaCarousel({ loop: true });

  return (
    <section className="pt-16 pb-6 px-3 sm:px-6 bg-zinc-950">
      <div className="max-w-6xl mx-auto">
        
        {/* --- MAIN CARD (SLIM VERSION) --- */}
        <div className="relative rounded-2xl overflow-hidden border border-zinc-800 bg-zinc-900/40" ref={emblaRef}>
          <div className="flex">
            {SLIDES.map((slide, index) => (
              <div 
                className="flex-[0_0_100%] min-w-0 relative h-[280px] sm:h-[400px] flex items-center p-5 sm:p-10" 
                key={index}
              >
                <img src={slide.bg} className="absolute inset-0 w-full h-full object-cover opacity-20" alt="" />
                <div className="absolute inset-0 bg-gradient-to-r from-zinc-950 via-zinc-950/70 to-transparent z-1" />

                <div className="relative z-10 w-full">
                  <div className="inline-flex items-center gap-1.5 bg-teal-500/10 border border-teal-500/30 rounded-full px-3 py-1 text-[9px] text-teal-400 mb-3 font-bold uppercase tracking-wider">
                    <Zap className="w-3 h-3 fill-teal-400" /> Verified
                  </div>

                  <h1 className="text-2xl sm:text-4xl font-black text-white mb-2 leading-tight italic tracking-tighter uppercase">
                    {slide.title}
                  </h1>

                  <p className="text-zinc-400 text-[11px] sm:text-base mb-6 max-w-md line-clamp-2">
                    {slide.desc}
                  </p>

                  <div className="flex gap-3">
                    <Link href="#products" className="inline-flex items-center gap-1.5 bg-teal-500 text-black px-4 py-2 rounded-xl font-black text-[11px] sm:text-sm transition-all active:scale-95">
                      BELI <ChevronRight className="w-4 h-4" />
                    </Link>
                    <a href="https://wa.me/6285701961876" className="inline-flex items-center gap-1.5 bg-zinc-800 border border-zinc-700 text-white px-4 py-2 rounded-xl font-bold text-[11px] sm:text-sm">
                      <MessageCircle className="w-4 h-4" /> WA
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* --- RUNNING TEXT (SLIM) --- */}
        <div className="mt-3 py-2 bg-zinc-900/30 border-y border-zinc-900 overflow-hidden">
          <div className="flex whitespace-nowrap animate-marquee">
            {[...PRODUCTS, ...PRODUCTS].map((text, i) => (
              <div key={i} className="flex items-center gap-2 mx-5">
                <div className="w-1 h-1 bg-teal-500 rounded-full" />
                <span className="text-[10px] font-black text-zinc-400 uppercase italic">
                  {text}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* --- STATS (SMALL CARDS) --- */}
        <div className="grid grid-cols-3 gap-2 mt-3">
          {[
            { icon: Users, label: "5K+", sub: "CLIENTS" },
            { icon: Zap, label: "99%", sub: "UPTIME" },
            { icon: Shield, label: "24/7", sub: "HELP" }
          ].map((stat, i) => (
            <div key={i} className="bg-zinc-900/40 border border-zinc-800 rounded-xl p-2 sm:p-4 text-center">
              <stat.icon className="w-3.5 h-3.5 text-teal-500 mx-auto mb-1" />
              <div className="text-sm sm:text-xl font-black text-white italic leading-none">{stat.label}</div>
              <div className="text-[8px] text-zinc-500 uppercase font-black mt-1 tracking-tighter">{stat.sub}</div>
            </div>
          ))}
        </div>

      </div>

      <style jsx>{`
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .animate-marquee {
          display: flex;
          animation: marquee 20s linear infinite;
        }
      `}</style>
    </section>
  );
}
