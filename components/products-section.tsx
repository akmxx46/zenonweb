"use client";

import { useState } from "react";
import { Star, Check, Crown, Zap, Code, Server, Smartphone } from "lucide-react";
import Link from "next/link";

// --- 1. DATA & TYPES (TETAPKAN DI SINI) ---
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
  { ram: "Unlimited", price: 12000, label: "Ultimate", icon: Crown, isUnlimited: true },
];

const panelFeatures = [
  "Panel Full Access",
  "Auto Reply & Bot Features",
  "Technical Support 24/7",
];

// --- 2. HELPER FUNCTIONS ---
function formatPrice(price: number): string {
  return `Rp${price.toLocaleString("id-ID")}`;
}

function ScriptCard({ script }: { script: Script }) {
  return (
    <div className="bg-zinc-900/90 border border-zinc-700/80 rounded-xl overflow-hidden hover:border-teal-400/60 transition-all hover:-translate-y-1 group">
      <div className="relative aspect-[4/3] bg-zinc-800 overflow-hidden">
        <img src={script.image || "/placeholder-script.jpg"} alt={script.name} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
        <div className="absolute top-2 right-2">
          <span className={`${script.badgeColor} text-white text-[9px] font-bold px-2 py-0.5 rounded shadow-sm`}>{script.badge}</span>
        </div>
      </div>
      <div className="p-3">
        <h3 className="font-semibold text-white text-xs mb-1 line-clamp-1">{script.name}</h3>
        <div className="text-teal-400 font-bold text-sm mb-2">{formatPrice(script.price)}</div>
        <Link href={`/checkout?id=${script.id}`} className="block text-center bg-teal-500 text-black text-[10px] font-bold py-1.5 rounded-lg">Order</Link>
      </div>
    </div>
  );
}

function PanelPricing() {
  return (
    <div className="grid grid-cols-2 xs:grid-cols-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-6 gap-2">
      {pricingPlans.map((plan, index) => (
        <Link key={index} href="/checkout" className={`relative bg-zinc-900 border rounded-xl p-3 text-center transition-all ${plan.highlight ? 'border-teal-400' : 'border-zinc-800'}`}>
          <Server className="w-5 h-5 mx-auto mb-1 text-teal-400" />
          <div className="text-xl font-bold text-white">{plan.ram}</div>
          <div className="text-xs text-teal-400 font-bold mb-2">{formatPrice(plan.price)}</div>
          <div className="bg-teal-500 text-black text-[9px] font-bold py-1 rounded-md">Order</div>
        </Link>
      ))}
    </div>
  );
}

// --- 3. MAIN COMPONENT (WITH IDs) ---
export function ProductsSection() {
  const [activeCategory, setActiveCategory] = useState<Category>("semua");

  return (
    <section id="products" className="py-12 px-3 sm:px-6 bg-zinc-950">
      <div className="max-w-6xl mx-auto">
        
        {/* Filter Buttons */}
        <div className="flex flex-wrap gap-2 mb-10">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id as Category)}
              className={`px-5 py-2 rounded-lg text-xs font-semibold transition-all ${
                activeCategory === cat.id ? "bg-teal-500 text-black" : "bg-zinc-800 text-zinc-400 border border-zinc-700"
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Bagian Panel - ID: panel */}
        {(activeCategory === "semua" || activeCategory === "panel") && (
          <div id="panel" className="mb-16 scroll-mt-24">
            <h3 className="text-lg font-bold text-white mb-6 flex items-center gap-2 italic uppercase tracking-tighter">
              <Server className="w-5 h-5 text-teal-400" /> Panel Hosting
            </h3>
            <PanelPricing />
          </div>
        )}

        {/* Bagian Script - ID: script */}
        {(activeCategory === "semua" || activeCategory === "script") && (
          <div id="script" className="mb-16 scroll-mt-24">
            <h3 className="text-lg font-bold text-white mb-6 flex items-center gap-2 italic uppercase tracking-tighter">
              <Code className="w-5 h-5 text-teal-400" /> Script Bot WA
            </h3>
            <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-6 gap-3">
              {scripts.map((s) => <ScriptCard key={s.id} script={s} />)}
            </div>
          </div>
        )}

        {/* Bagian App - ID: app */}
        {(activeCategory === "semua" || activeCategory === "app") && (
          <div id="app" className="scroll-mt-24">
            <h3 className="text-lg font-bold text-white mb-6 flex items-center gap-2 italic uppercase tracking-tighter">
              <Smartphone className="w-5 h-5 text-teal-400" /> Aplikasi Premium
            </h3>
            <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-6 gap-3">
              {apps.map((a) => <ScriptCard key={a.id} script={a} />)}
            </div>
          </div>
        )}

      </div>
    </section>
  );
}
