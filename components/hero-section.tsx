"use client";

import React from "react";
import useEmblaCarousel from "embla-carousel-react";
import { Zap, Shield, Users, ChevronRight, MessageCircle } from "lucide-react";
import Link from "next/link";

const SLIDES = [
  {
    title: <>PANEL WHATSAPP & <span className="text-teal-400">SCRIPT BOT WA</span></>,
    desc: "Platform penyedia layanan hosting bot & script premium dengan sistem otomatisasi terbaik di Indonesia.",
    bg: "/images/hero-1.jpg", // Pastikan file ini ada
  },
  {
    title: <>LAYANAN CLOUD <span className="text-teal-400">24/7 NONSTOP</span></>,
    desc: "Aktivasi instan tanpa nunggu lama. Performa tinggi dengan proteksi DDoS terbaik.",
    bg: "/images/hero-2.jpg", // Pastikan file ini ada
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
    <section className="pt-20 pb-10 px-4 lg:px-6 bg-zinc-950">
      <div className="max-w-6xl mx-auto">
        
        {/* --- MAIN CARD (EVER-STYLE) --- */}
        <div className="relative rounded-3xl overflow-hidden border border-zinc-800 bg-zinc-900/40 shadow-2xl" ref={emblaRef}>
          <div className="flex">
            {SLIDES.map((slide, index) => (
              <div 
                className="flex-[0_0_100%] min-w-0 relative h-[420px] sm:h-[520px] flex items-center p-6 sm:p-14" 
                key={index}
              >
                {/* Background Image with Fixed Ratio */}
                <img 
                  src={slide.bg} 
                  className="absolute inset-0 w-full h-full object-cover opacity-20 pointer-events-none" 
                  alt="" 
                />
                
                {/* Glow & Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-r from-zinc-950 via-zinc-950/80 to-transparent z-1" />
                <div className="absolute top-0 right-0 w-64 h-64 bg-teal-500/10 rounded-full blur-[120px] z-0" />

                <div className="relative z-10 w-full max-w-2xl">
                  {/* Badge */}
                  <div className="inline-flex items-center gap-2 bg-teal-500/10 border border-teal-500/30 rounded-full px-4 py-1.5 text-[10px] sm:text-xs text-teal-400 mb-6 font-black uppercase tracking-[0.2em]">
                    <Zap className="w-3.5 h-3.5 fill-teal-400" /> Verified Merchant
                  </div>

                  {/* Title - Bold & Italic like Evernight */}
                  <h1 className="text-4xl sm:text-6xl font-black text-white mb-4 leading-[1.05] italic tracking-tighter uppercase">
                    {slide.title}
                  </h1>

                  {/* Desc */}
                  <p className="text-zinc-400 text-sm sm:text-lg mb-10 leading-relaxed font-medium">
                    {slide.desc}
                  </p>

                  {/* Buttons */}
                  <div className="flex flex-wrap gap-4">
                    <Link href="#products" className="inline-flex items-center gap-2 bg-teal-500 hover:bg-teal-400 text-black px-8 py-3.5 rounded-2xl font-black text-sm transition-all active:scale-95 shadow-[0_0_20px_rgba(20,184,166,0.3)]">
                      DAPATKAN SEKARANG <ChevronRight className="w-5 h-5" />
                    </Link>
                    <a href="https://wa.me/6285701961876" className="inline-flex items-center gap-2 bg-zinc-800/80 hover:bg-zinc-800 border border-zinc-700 text-white px-8 py-3.5 rounded-2xl font-bold text-sm transition-all">
                      <MessageCircle className="w-5 h-5" /> KONSULTASI
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* --- RUNNING TEXT --- */}
        <div className="mt-6 py-4 bg-teal-500/[0.03] border-y border-zinc-900 overflow-hidden relative">
          <div className="flex whitespace-nowrap animate-marquee">
            {[...PRODUCTS, ...PRODUCTS].map((text, i) => (
              <div key={i} className="flex items-center gap-3 mx-10">
                <div className="w-2 h-2 bg-teal-500 rounded-full shadow-[0_0_8px_rgba(20,184,166,0.5)]" />
                <span className="text-[11px] sm:text-xs font-black text-zinc-300 uppercase tracking-widest italic">
                  {text}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* --- STATS CARDS --- */}
        <div className="grid grid-cols-3 gap-3 sm:gap-6 mt-6">
          {[
            { icon: Users, label: "5.000+", sub: "CLIENTS" },
            { icon: Zap, label: "99.9%", sub: "UPTIME" },
            { icon: Shield, label: "24/7", sub: "SUPPORT" }
          ].map((stat, i) => (
            <div key={i} className="bg-zinc-900/40 border border-zinc-800 rounded-2xl p-4 sm:p-6 text-center hover:border-teal-500/40 transition-all group">
              <stat.icon className="w-5 h-5 text-teal-500 mx-auto mb-2 group-hover:scale-110 transition-transform" />
              <div className="text-xl sm:text-3xl font-black text-white tracking-tighter italic">{stat.label}</div>
              <div className="text-[10px] sm:text-xs text-zinc-500 uppercase font-black tracking-widest mt-1">{stat.sub}</div>
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
          animation: marquee 30s linear infinite;
        }
      `}</style>
    </section>
  );
}
