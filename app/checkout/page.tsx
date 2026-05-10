"use client";

import { useState, Suspense } from "react";
import { useSearchParams } from "next/navigation";
import Link from "next/link";
import { 
  ArrowLeft, 
  QrCode,
  CheckCircle2,
  Loader2,
  Shield,
  Zap,
  UserCircle
} from "lucide-react";

const WHATSAPP_NUMBER = "6285701961876";

function formatPrice(price: number): string {
  return new Intl.NumberFormat("id-ID", {
    style: "currency",
    currency: "IDR",
    minimumFractionDigits: 0,
  }).format(price);
}

function CheckoutContent() {
  const searchParams = useSearchParams();
  const [isProcessing, setIsProcessing] = useState(false);
  
  // Data Pembeli
  const [customerName, setCustomerName] = useState("");
  const [customerPhone, setCustomerPhone] = useState("");
  const [panelUsername, setPanelUsername] = useState(""); 

  // Ambil info produk dari URL
  const productType = searchParams.get("type") || "panel";
  const productName = searchParams.get("name") || "";
  const productPrice = parseInt(searchParams.get("price") || "0");

  const handlePayment = async () => {
    // Validasi input
    if (!customerName || !customerPhone) {
      alert("Mohon lengkapi Nama dan No. WhatsApp!");
      return;
    }

    if (productType === "panel" && !panelUsername) {
      alert("Mohon isi Username untuk akun Panel Anda!");
      return;
    }

    setIsProcessing(true);

    // LOGIKA PENENTU LABEL KATEGORI (Agar tidak Script/App lagi)
    let categoryLabel = "Produk";
    if (productType === "panel") categoryLabel = "Panel";
    else if (productType === "script") categoryLabel = "Script";
    else if (productType === "app") categoryLabel = "Aplikasi";

    // Format Pesan WhatsApp
    const message = `Halo Admin ZenonStore,%0A%0A` +
                    `Saya ingin order *${categoryLabel}*:%0A` +
                    `- Produk: *${productName}*%0A` +
                    `- Harga: *${formatPrice(productPrice)}*%0A%0A` +
                    `*Data Pembeli:*%0A` +
                    `- Nama: ${customerName}%0A` +
                    `- No. WhatsApp: ${customerPhone}%0A` +
                    (productType === "panel" ? `- Username Panel: *${panelUsername}*%0A` : "") +
                    `%0A*Metode Pembayaran:* QRIS (All Payment)%0A%0A` +
                    `Mohon instruksi selanjutnya Min!`;

    setTimeout(() => {
      window.open(
        `https://wa.me/${WHATSAPP_NUMBER}?text=${message}`,
        "_blank"
      );
      setIsProcessing(false);
    }, 800);
  };

  return (
    <div className="min-h-screen bg-zinc-950 py-6 sm:py-8 px-3 sm:px-4 lg:px-6 text-zinc-100">
      <div className="max-w-2xl mx-auto">
        {/* Tombol Kembali */}
        <Link
          href="/#products"
          className="inline-flex items-center gap-2 text-zinc-400 hover:text-teal-400 transition-colors mb-6 text-sm"
        >
          <ArrowLeft className="w-4 h-4" />
          Kembali ke Produk
        </Link>

        <div className="text-center mb-6 sm:mb-8">
          <h1 className="text-xl sm:text-2xl md:text-3xl font-bold text-white mb-2">Checkout</h1>
          <p className="text-zinc-400 text-sm">Lengkapi data untuk pesanan Anda</p>
        </div>

        {/* Ringkasan Pesanan */}
        <div className="bg-zinc-900/90 border border-zinc-700/80 rounded-xl p-4 sm:p-5 mb-4 sm:mb-6">
          <h2 className="text-sm font-semibold text-zinc-400 uppercase tracking-wider mb-3">Ringkasan Pesanan</h2>
          <div className="flex items-center justify-between">
            <div>
              <p className="text-white font-medium text-sm sm:text-base">
                {productType === "panel" ? `Panel ${productName}` : productName}
              </p>
              <p className="text-zinc-500 text-xs sm:text-sm">
                {productType === "panel" ? "Aktivasi Panel Instan" : "Produk Digital"}
              </p>
            </div>
            <p className="text-teal-400 font-bold text-lg sm:text-xl">{formatPrice(productPrice)}</p>
          </div>
        </div>

        {/* Data Pembeli */}
        <div className="bg-zinc-900/90 border border-zinc-700/80 rounded-xl p-4 sm:p-5 mb-4 sm:mb-6">
          <h2 className="text-sm font-semibold text-zinc-400 uppercase tracking-wider mb-4">Data Pembeli</h2>
          <div className="space-y-4">
            <div>
              <label className="block text-xs sm:text-sm text-zinc-400 mb-1.5">Nama Lengkap</label>
              <input
                type="text"
                value={customerName}
                onChange={(e) => setCustomerName(e.target.value)}
                placeholder="Masukkan nama"
                className="w-full bg-zinc-800 border border-zinc-700 rounded-lg px-4 py-3 text-white text-sm focus:outline-none focus:border-teal-500 transition-colors"
              />
            </div>

            <div>
              <label className="block text-xs sm:text-sm text-zinc-400 mb-1.5">No. WhatsApp</label>
              <input
                type="tel"
                value={customerPhone}
                onChange={(e) => setCustomerPhone(e.target.value)}
                placeholder="08xxxxxxxxxx"
                className="w-full bg-zinc-800 border border-zinc-700 rounded-lg px-4 py-3 text-white text-sm focus:outline-none focus:border-teal-500 transition-colors"
              />
            </div>

            {/* Input Username (Hanya muncul jika beli panel) */}
            {productType === "panel" && (
              <div className="p-4 bg-teal-500/5 border border-teal-500/20 rounded-xl">
                <label className="flex items-center gap-2 text-xs sm:text-sm text-teal-400 mb-2 font-semibold">
                  <UserCircle className="w-4 h-4" />
                  Username Panel
                </label>
                <input
                  type="text"
                  value={panelUsername}
                  onChange={(e) => setPanelUsername(e.target.value)}
                  placeholder="Contoh: zenon_user"
                  className="w-full bg-zinc-900 border border-zinc-700 rounded-lg px-4 py-2.5 text-white text-sm focus:outline-none focus:border-teal-500 transition-colors"
                />
              </div>
            )}
          </div>
        </div>

        {/* Pembayaran QRIS */}
        <div className="bg-zinc-900/90 border border-zinc-700/80 rounded-xl p-4 sm:p-5 mb-6">
          <h2 className="text-sm font-semibold text-zinc-400 uppercase tracking-wider mb-4">Metode Pembayaran</h2>
          <div className="flex items-center gap-4 p-4 rounded-xl border border-teal-500 bg-teal-500/10 ring-1 ring-teal-500">
            <div className="p-2 rounded-lg bg-teal-500/20 text-teal-400">
              <QrCode className="w-6 h-6" />
            </div>
            <div className="flex-1">
              <p className="font-bold text-sm text-teal-400">QRIS (All Payment)</p>
              <p className="text-[10px] text-zinc-400">Scan via DANA, OVO, GoPay, ShopeePay & M-Banking</p>
            </div>
            <CheckCircle2 className="w-5 h-5 text-teal-400 flex-shrink-0" />
          </div>
        </div>

        {/* Tombol Order */}
        <button
          onClick={handlePayment}
          disabled={isProcessing}
          className={`w-full py-4 rounded-xl font-bold text-sm sm:text-base transition-all flex items-center justify-center gap-2 ${
            isProcessing
              ? "bg-zinc-700 text-zinc-400 cursor-not-allowed"
              : "bg-teal-500 hover:bg-teal-400 text-black shadow-lg shadow-teal-500/30"
          }`}
        >
          {isProcessing ? (
            <Loader2 className="w-5 h-5 animate-spin" />
          ) : (
            <>Order Sekarang ({formatPrice(productPrice)})</>
          )}
        </button>

        <div className="flex items-center justify-center gap-4 mt-6 opacity-50">
          <div className="flex items-center gap-1 text-[10px]">
            <Shield className="w-3 h-3" /> <span>Secure</span>
          </div>
          <div className="flex items-center gap-1 text-[10px]">
            <Zap className="w-3 h-3" /> <span>Fast Response</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function CheckoutPage() {
  return (
    <Suspense fallback={<div className="min-h-screen bg-zinc-950 flex items-center justify-center text-teal-400"><Loader2 className="w-8 h-8 animate-spin" /></div>}>
      <CheckoutContent />
    </Suspense>
  );
}
