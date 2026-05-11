"use client";

import React, { useCallback } from "react";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import { ChevronRight, Zap } from "lucide-react";

const SLIDES = [
  {
    title: "Script bot wa Premium Fitur",
    desc: "SCRIPT BOT PREMIUM DENGAN 1880+ FITUR STABIL, NO DELAY, FREE UPDATE.",
    bg: "/images/hero-bg-1.jpg", // Ganti dengan gambar anime kamu
    btnText: "Beli →",
  },
  {
    title: "Panel Pterodactyl VVIP",
    desc: "PANEL PTERODACTYL TERBAIK DENGAN UPTIME 99.9% UNTUK BOT & GAME.",
    bg: "/images/hero-bg-2.jpg",
    btnText: "Lihat →",
  },
];

const PRODUCTS = [
  { name: "Panel Pterodactyl 1GB", price: "Rp10.000" },
  { name: "Script Bot WA Basic", price: "Rp15.000" },
  { name: "Panel Unlimited", price: "Rp50.000" },
  { name: "Sewa Raiden Full Garansi", price: "Rp7.000" },
];

export function HeroSection() {
  const [emblaRef] = useEmblaCarousel({ loop: true }, [Autoplay({ delay: 5000 })]);

  return (
    <section className="relative pt-16 overflow-hidden bg-zinc-950">
      {/* --- SLIDER SECTION (Bisa Digeser) --- */}
      <div className="overflow-hidden" ref={emblaRef}>
        <div className="flex">
          {SLIDES.map((slide, index) => (
            <div className="flex-[0_0_100%] min-w-0 relative h-[400px] md:h-[500px]" key={index}>
              {/* Background Image */}
              <img src={slide.bg} className="absolute inset-0 w-full h-full object-cover opacity-40" alt="" />
              <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-transparent to-transparent" />
              
              {/* Content */}
              <div className="relative z-10 h-full flex flex-col justify-center px-6 md:px-12 max-w-4xl">
                <div className="flex items-center gap-2 mb-4 text-teal-400 font-bold text-xs">
                  <Zap className="w-3 h-3 fill-teal-400" />
                  <span>SC RAIDEN MULTIDEVICE</span>
                </div>
                <h1 className="text-3xl md:text-5xl font-black text-white mb-4 leading-tight">
                  {slide.title}
                </h1>
                <p className="text-zinc-300 text-xs md:text-sm max-w-xl mb-6 leading-relaxed">
                  {slide.desc}
                </p>
                <button className="w-fit px-6 py-2 bg-zinc-800/80 border border-zinc-700 text-white rounded-lg text-sm hover:bg-zinc-700 transition-all">
                  {slide.btnText}
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* --- RUNNING TEXT (Gerak ke Kiri) --- */}
      <div className="relative py-3 border-y border-zinc-800 bg-zinc-900/50 overflow-hidden">
        <div className="flex whitespace-nowrap animate-marquee group">
          {/* Ulangi array 2x biar jalannya nyambung terus */}
          {[...PRODUCTS, ...PRODUCTS].map((item, i) => (
            <div key={i} className="flex items-center mx-6 gap-2">
              <span className="w-2 h-2 rounded-full bg-teal-500" />
              <span className="text-xs font-medium text-zinc-300">
                {item.name} — <span className="text-teal-400 font-bold">{item.price}</span>
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* Custom Styles untuk Animasi Running Text */}
      <style jsx>{`
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .animate-marquee {
          animation: marquee 20s linear infinite;
        }
        .animate-marquee:hover {
          animation-play-state: paused;
        }
      `}</style>
    </section>
  );
}
