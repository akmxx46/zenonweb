"use client";

import { useState } from "react";
import { Star, Check, Crown, Zap, Code, Server, Smartphone } from "lucide-react";
import Link from "next/link";

type Category = "semua" | "panel" | "script" | "app";

interface Script {
  id: number;
  name: string;
  badge: string;
  badgeColor: string;
  price: number;
  rating: number;
  reviews: number;
  description: string;
  image?: string; 
  isNew?: boolean;
}

const categories = [
  { id: "semua", label: "Semua" },
  { id: "panel", label: "Panel" },
  { id: "script", label: "Script" },
  { id: "app", label: "App" },
];

const scripts: Script[] = [
  {
    id: 1,
    name: "Script Zenon JPM",
    badge: "SCRIPT",
    badgeColor: "bg-violet-500",
    price: 15000,
    rating: 5.0,
    reviews: 64,
    image: "/images/zenon-sc.jpg", 
    description: "Script JPM fitur lumayan banyak",
    isNew: true, 
  }
];

const apps: Script[] = [
  {
    id: 101,
    name: "ALIGHT MOTION",
    badge: "APP",
    badgeColor: "bg-blue-500",
    price: 5000,
    rating: 4.9,
    reviews: 24,
    image: "/images/alightmotion.jpg",
    description: "Akun alight motion pro 1 tahun.",
    isNew: true,
  }
];

const pricingPlans = [
  { ram: "1GB", price: 1000, label: null },
  { ram: "2GB", price: 2000, label: null },
  { ram: "3GB", price: 3000, label: "Starter", icon: Zap },
  { ram: "4GB", price: 4000, label: null },
  { ram: "5GB", price: 5000, label: "Popular", icon: Star, highlight: true },
  { ram: "6GB", price: 6000, label: null },
  { ram: "7GB", price: 7000, label: "Best Value", icon: Crown },
  { ram: "8GB", price: 8000, label: null },
  { ram: "9GB", price: 9000, label: null },
  { ram: "10GB", price: 10000, label: null },
  { ram: "Unlimited", price: 12000, label: "Ultimate", icon: Crown, isUnlimited: true },
];

// 1. DAFTAR FITUR (Sudah saya hapus kata WhatsApp-nya agar bersih)
const panelFeatures = [
  "Panel Full Access",
  "Auto Reply & Bot Features",
  "Broadcast Tanpa Batas",
  "Multi Device Support",
  "Dashboard Analytics",
  "Technical Support 24/7",
];

function formatPrice(price: number): string {
  return `Rp${price.toLocaleString("id-ID")}`;
}

function ScriptCard({ script }: { script: Script }) {
  return (
    <div className="bg-zinc-900/90 border border-zinc-700/80 rounded-xl overflow-hidden hover:border-teal-400/60 transition-all hover:-translate-y-1 group">
      <div className="relative aspect-[4/3] bg-zinc-800 overflow-hidden">
        <img 
          src={script.image || "/placeholder-script.jpg"} 
          alt={script.name}
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
        />
        <div className="absolute top-2 left-2 flex gap-1">
          {script.isNew && (
            <span className="bg-rose-500 text-white text-[9px] font-bold px-1.5 py-0.5 rounded shadow-sm">BARU</span>
          )}
        </div>
        <div className="absolute top-2 right-2">
          <span className={`${script.badgeColor} text-white text-[9px] font-bold px-1.5 py-0.5 rounded shadow-sm`}>{script.badge}</span>
        </div>
      </div>
      <div className="p-3 sm:p-4">
        <h3 className="font-semibold text-white text-xs sm:text-sm mb-1 group-hover:text-teal-400 transition-colors line-clamp-1">{script.name}</h3>
        <p className="text-[10px] sm:text-xs text-zinc-400 mb-2 line-clamp-2">{script.description}</p>
        <div className="flex items-center gap-1 mb-2">
          <div className="flex">
            {[...Array(5)].map((_, i) => (<Star key={i} className="w-2.5 h-2.5 fill-amber-400 text-amber-400" />))}
          </div>
          <span className="text-[10px] text-zinc-400">{script.rating}</span>
        </div>
        <div className="flex items-center justify-between gap-2">
          <div className="text-teal-400 font-bold text-sm">{formatPrice(script.price)}</div>
          <Link
            href={`/checkout?type=${script.badge.toLowerCase()}&id=${script.id}&name=${encodeURIComponent(script.name)}&price=${script.price}`}
            className="bg-teal-500 hover:bg-teal-400 text-black text-[10px] font-bold px-2.5 py-1.5 rounded-lg transition-colors shadow-lg"
          >
            Order
          </Link>
        </div>
      </div>
    </div>
  );
}

function PanelPricing() {
  return (
    <div>
      <div className="grid grid-cols-2 xs:grid-cols-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-6 gap-2 sm:gap-3 mb-6">
        {pricingPlans.map((plan, index) => {
          const Icon = plan.icon;
          const planId = `panel-${plan.ram.toLowerCase()}`;
          const checkoutUrl = `/checkout?type=panel&id=${planId}&name=${encodeURIComponent(`RAM ${plan.ram}`)}&price=${plan.price}`;

          return (
            <Link
              key={index}
              href={checkoutUrl}
              className={`relative bg-zinc-900/90 border rounded-xl p-3 sm:p-4 text-center transition-all hover:-translate-y-1 block ${
                plan.highlight ? "border-teal-400 ring-2 ring-teal-400/30 shadow-teal-500/10" : "border-zinc-700/80 hover:border-teal-400/50"
              }`}
            >
              {plan.label && (
                <div className="absolute -top-2.5 left-1/2 -translate-x-1/2">
                  <span className={`inline-flex items-center gap-1 px-2 py-0.5 text-[8px] font-bold rounded-full whitespace-nowrap ${plan.highlight ? "bg-teal-400 text-black" : "bg-zinc-700 text-zinc-300"}`}>
                    {Icon && <Icon className="w-2 h-2 text-current" />}
                    {plan.label}
                  </span>
                </div>
              )}
              <Server className={`w-5 h-5 mx-auto mb-1.5 ${plan.highlight ? "text-teal-400" : "text-zinc-500"}`} />
              <div className={`text-xl sm:text-2xl font-bold mb-0.5 ${plan.highlight ? "text-teal-400" : "text-white"}`}>{plan.ram}</div>
              <div className="text-xs text-teal-400 font-bold mb-2">{formatPrice(plan.price)}</div>
              <span className="block text-[10px] font-bold py-1.5 rounded-lg bg-teal-500 text-black">Order</span>
            </Link>
          );
        })}
      </div>

      {/* 2. BAGIAN FITUR (SUDAH DITAMBAHKAN AGAR MUNCUL DI LAYAR) */}
      <div className="bg-zinc-900/50 border border-zinc-800/80 rounded-2xl p-5 mt-8">
        <h3 className="text-xs font-bold text-zinc-500 uppercase tracking-widest mb-4 text-center">Benefit Yang Didapat</h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
          {panelFeatures.map((feature, index) => (
            <div key={index} className="flex items-center gap-3 bg-zinc-950/50 p-3 rounded-xl border border-zinc-800/30">
              <div className="bg-teal-500/10 p-1 rounded-full">
                <Check className="w-3.5 h-3.5 text-teal-400" />
              </div>
              <span className="text-xs text-zinc-300 font-medium">{feature}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
      
export function ProductsSection() {
  const [activeCategory, setActiveCategory] = useState<Category>("semua");

  const getItemCount = () => {
    if (activeCategory === "semua") return scripts.length + pricingPlans.length + apps.length;
    if (activeCategory === "panel") return pricingPlans.length;
    if (activeCategory === "script") return scripts.length;
    if (activeCategory === "app") return apps.length;
    return 0;
  };

  return (
    <section id="products" className="py-10 px-3 sm:px-4 lg:px-6">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-wrap gap-2 mb-8">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id as Category)}
              className={`px-4 py-2 rounded-lg text-xs font-semibold transition-all ${
                activeCategory === cat.id ? "bg-teal-500 text-black" : "bg-zinc-800 border border-zinc-600 text-zinc-300"
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        <div className="mb-6">
          <h2 className="text-xs text-zinc-400 uppercase tracking-wider font-medium">
            {activeCategory === "semua" ? "Semua Produk" : activeCategory === "panel" ? "Panel" : activeCategory === "script" ? "Script Bot WA" : "Aplikasi"}{" "}
            <span className="text-teal-400">({getItemCount()})</span>
          </h2>
        </div>

        {(activeCategory === "semua" || activeCategory === "panel") && (
          <div className="mb-10">
            {activeCategory === "semua" && (
              <h3 className="text-lg font-bold text-white mb-5 flex items-center gap-2">
                <Server className="w-5 h-5 text-teal-400" />
                Panel
              </h3>
            )}
            <PanelPricing />
          </div>
        )}

        {(activeCategory === "semua" || activeCategory === "script") && (
          <div className="mb-10 text-zinc-100">
            {activeCategory === "semua" && (
              <h3 className="text-lg font-bold text-white mb-5 mt-10 flex items-center gap-2">
                <Code className="w-5 h-5 text-teal-400" />
                Script Bot WA
              </h3>
            )}
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-3 sm:gap-4">
              {scripts.map((script) => (
                <ScriptCard key={script.id} script={script} />
              ))}
            </div>
          </div>
        )}

        {(activeCategory === "semua" || activeCategory === "app") && (
          <div className="text-zinc-100">
            {activeCategory === "semua" && (
              <h3 className="text-lg font-bold text-white mb-5 mt-10 flex items-center gap-2">
                <Smartphone className="w-5 h-5 text-teal-400" />
                Aplikasi
              </h3>
            )}
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-3 sm:gap-4 text-zinc-100">
              {apps.map((app) => (
                <ScriptCard key={app.id} script={app} />
              ))}
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
