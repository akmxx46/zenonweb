"use client";

import React from "react";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import { ChevronRight, Zap } from "lucide-react";

const SLIDES = [
  {
    title: "NEXT-GEN HOSTING SOLUTIONS",
    desc: "SOLUSI TERPANDU DENGAN 100+ FITUR KAMI. NO DELAY. FREE UPDATE.",
    bg: "/images/hero-1.jpg", // Pastikan gambar ini ada di folder public/images
    label: "Zenon"
  },
  {
    title: "SCRIPT BOT WA PREMIUM",
    desc: "FITUR LENGKAP V7.2 - HARGA TERJANGKAU - FULL GARANSI.",
    bg: "/images/hero-2.jpg",
    label: "Premium"
  }
];

const RUNNING_PRODUCTS = [
  { name: "Panel Pterodactyl 1GB", price: "Rp10.000" },
  { name: "Script Bot WA Basic", price: "Rp15.000" },
  { name: "Panel Unlimited", price: "Rp50.000" },
  { name: "Sewa Bot Raiden", price: "Rp7.000" }
];

export function HeroSection() {
  // Inisialisasi Carousel dengan Autoplay (Ganti slide tiap 4 detik)
  const [emblaRef] = useEmblaCarousel({ loop: true }, [Autoplay({ delay: 4000 })]);

  return (
    <section className="relative pt-16 overflow-hidden bg-zinc-950">
      {/* --- SLIDER AREA --- */}
      <div className="overflow-hidden cursor-grab active:cursor-grabbing" ref={emblaRef}>
        <div className="flex">
          {SLIDES.map((slide, index) => (
            <div className="flex-[0_0_100%] min-w-0 relative h-[450px] md:h-[550px]" key={index}>
              {/* Background Image & Overlay */}
              <img src={slide.bg} className="absolute inset-0 w-full h-full object-cover opacity-50" alt="" />
              <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-zinc-950/40 to-transparent" />
              
              {/* Content Center */}
              <div className="relative z-10 h-full flex flex-col justify-center items-center text-center px-6">
                <div className="inline-flex items-center gap-2 bg-teal-500/20 border border-teal-500/30 px-3 py-1 rounded-full mb-4">
                  <Zap className="w-3 h-3 text-teal-400 fill-teal-400" />
                  <span className="text-teal-400 text-[10px] font-bold uppercase tracking-widest">{slide.label}</span>
                </div>
                
                <h1 className="text-4xl md:text-7xl font-black text-white mb-4 tracking-tighter leading-none">
                  {slide.title}
                </h1>
                
                <p className="text-zinc-300 text-xs md:text-sm max-w-lg mb-8 font-medium">
                  {slide.desc}
                </p>
                
                <a href="#products" className="group flex items-center gap-2 bg-transparent border-2 border-teal-500/50 text-teal-400 px-6 py-2.5 rounded-lg font-bold text-sm hover:bg-teal-500 hover:text-black transition-all">
                  Order Sekarang <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* --- RUNNING TEXT AREA (Marquee) --- */}
      <div className="relative py-4 border-y border-zinc-800 bg-zinc-900/30 overflow-hidden">
        <div className="flex whitespace-nowrap animate-marquee">
          {/* Loop Produk 2x supaya nyambung terus */}
          {[...RUNNING_PRODUCTS, ...RUNNING_PRODUCTS].map((item, i) => (
            <div key={i} className="flex items-center mx-8 gap-3">
              <div className="w-1.5 h-1.5 rounded-full bg-teal-500 shadow-[0_0_8px_rgba(20,184,166,0.8)]" />
              <p className="text-[11px] md:text-xs font-semibold text-zinc-300">
                {item.name} <span className="text-teal-400 ml-1">[{item.price}]</span>
              </p>
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
          animation: marquee 25s linear infinite;
        }
      `}</style>
    </section>
  );
}
