"use client";

import { useState, useEffect, Suspense } from "react";
import { useSearchParams } from "next/navigation";
import Link from "next/link";
import { 
  ArrowLeft, 
  CreditCard, 
  Wallet, 
  Building2, 
  QrCode,
  CheckCircle2,
  Loader2,
  MessageCircle,
  Shield,
  Zap
} from "lucide-react";

const WHATSAPP_NUMBER = "6285701961876";

// =====================================================
// KONFIGURASI PAYMENT GATEWAY
// Ganti dengan API key kamu saat sudah daftar
// =====================================================
const PAYMENT_CONFIG = {
  // Midtrans
  midtrans: {
    enabled: false,
    clientKey: "YOUR_MIDTRANS_CLIENT_KEY", // Ganti dengan Client Key Midtrans
    serverKey: "YOUR_MIDTRANS_SERVER_KEY", // Ganti dengan Server Key Midtrans
    isProduction: false, // Ubah ke true untuk production
  },
  // Tripay
  tripay: {
    enabled: false,
    apiKey: "YOUR_TRIPAY_API_KEY", // Ganti dengan API Key Tripay
    privateKey: "YOUR_TRIPAY_PRIVATE_KEY", // Ganti dengan Private Key Tripay
    merchantCode: "YOUR_TRIPAY_MERCHANT_CODE", // Ganti dengan Merchant Code
    isProduction: false,
  },
  // Xendit
  xendit: {
    enabled: false,
    publicKey: "YOUR_XENDIT_PUBLIC_KEY",
    secretKey: "YOUR_XENDIT_SECRET_KEY",
  },
  // Duitku
  duitku: {
    enabled: false,
    merchantCode: "YOUR_DUITKU_MERCHANT_CODE",
    apiKey: "YOUR_DUITKU_API_KEY",
  },
};

// Cek apakah payment gateway sudah dikonfigurasi
const isPaymentConfigured = () => {
  return (
    (PAYMENT_CONFIG.midtrans.enabled && PAYMENT_CONFIG.midtrans.clientKey !== "YOUR_MIDTRANS_CLIENT_KEY") ||
    (PAYMENT_CONFIG.tripay.enabled && PAYMENT_CONFIG.tripay.apiKey !== "YOUR_TRIPAY_API_KEY") ||
    (PAYMENT_CONFIG.xendit.enabled && PAYMENT_CONFIG.xendit.publicKey !== "YOUR_XENDIT_PUBLIC_KEY") ||
    (PAYMENT_CONFIG.duitku.enabled && PAYMENT_CONFIG.duitku.merchantCode !== "YOUR_DUITKU_MERCHANT_CODE")
  );
};

const paymentMethods = [
  { id: "qris", name: "QRIS", icon: QrCode, description: "Scan & bayar dari semua e-wallet" },
  { id: "ewallet", name: "E-Wallet", icon: Wallet, description: "OVO, GoPay, DANA, ShopeePay" },
  { id: "bank", name: "Transfer Bank", icon: Building2, description: "BCA, BNI, BRI, Mandiri, dll" },
  { id: "card", name: "Kartu Kredit", icon: CreditCard, description: "Visa, Mastercard" },
];

function formatPrice(price: number): string {
  return new Intl.NumberFormat("id-ID", {
    style: "currency",
    currency: "IDR",
    minimumFractionDigits: 0,
  }).format(price);
}

function CheckoutContent() {
  const searchParams = useSearchParams();
  const [selectedPayment, setSelectedPayment] = useState<string | null>(null);
  const [isProcessing, setIsProcessing] = useState(false);
  const [customerName, setCustomerName] = useState("");
  const [customerEmail, setCustomerEmail] = useState("");
  const [customerPhone, setCustomerPhone] = useState("");

  // Get product info from URL params
  const productType = searchParams.get("type") || "panel";
  const productName = searchParams.get("name") || searchParams.get("ram") || "";
  const productPrice = parseInt(searchParams.get("price") || "0");

  const handlePayment = async () => {
    if (!selectedPayment || !customerName || !customerEmail || !customerPhone) {
      alert("Mohon lengkapi semua data dan pilih metode pembayaran");
      return;
    }

    setIsProcessing(true);

    // Cek apakah payment gateway sudah dikonfigurasi
    if (!isPaymentConfigured()) {
      // Jika belum, redirect ke WhatsApp
      const message = `Halo, saya mau order:\n\nProduk: ${productType === "panel" ? `Panel ${productName}` : productName}\nHarga: ${formatPrice(productPrice)}\n\nNama: ${customerName}\nEmail: ${customerEmail}\nNo. HP: ${customerPhone}\n\nMetode Pembayaran: ${paymentMethods.find(p => p.id === selectedPayment)?.name}`;
      
      window.open(
        `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`,
        "_blank"
      );
      setIsProcessing(false);
      return;
    }

    // =====================================================
    // INTEGRASI PAYMENT GATEWAY
    // Uncomment dan sesuaikan kode di bawah sesuai payment gateway yang kamu gunakan
    // =====================================================

    try {
      // CONTOH: Midtrans Snap
      // if (PAYMENT_CONFIG.midtrans.enabled) {
      //   const response = await fetch("/api/payment/midtrans", {
      //     method: "POST",
      //     headers: { "Content-Type": "application/json" },
      //     body: JSON.stringify({
      //       orderId: `ORDER-${Date.now()}`,
      //       amount: productPrice,
      //       customerName,
      //       customerEmail,
      //       customerPhone,
      //       productName: productType === "panel" ? `Panel ${productName}` : productName,
      //     }),
      //   });
      //   const data = await response.json();
      //   window.snap.pay(data.token);
      // }

      // CONTOH: Tripay
      // if (PAYMENT_CONFIG.tripay.enabled) {
      //   const response = await fetch("/api/payment/tripay", {
      //     method: "POST",
      //     headers: { "Content-Type": "application/json" },
      //     body: JSON.stringify({
      //       amount: productPrice,
      //       customerName,
      //       customerEmail,
      //       customerPhone,
      //       productName: productType === "panel" ? `Panel ${productName}` : productName,
      //       paymentMethod: selectedPayment,
      //     }),
      //   });
      //   const data = await response.json();
      //   window.location.href = data.paymentUrl;
      // }

      // Sementara redirect ke WhatsApp
      const message = `Halo, saya mau order:\n\nProduk: ${productType === "panel" ? `Panel ${productName}` : productName}\nHarga: ${formatPrice(productPrice)}\n\nNama: ${customerName}\nEmail: ${customerEmail}\nNo. HP: ${customerPhone}`;
      window.open(
        `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`,
        "_blank"
      );
    } catch (error) {
      console.error("Payment error:", error);
      alert("Terjadi kesalahan. Silakan coba lagi atau hubungi admin.");
    }

    setIsProcessing(false);
  };

  return (
    <div className="min-h-screen bg-zinc-950 py-6 sm:py-8 px-3 sm:px-4 lg:px-6">
      <div className="max-w-2xl mx-auto">
        {/* Back Button */}
        <Link
          href="/#products"
          className="inline-flex items-center gap-2 text-zinc-400 hover:text-teal-400 transition-colors mb-6 text-sm"
        >
          <ArrowLeft className="w-4 h-4" />
          Kembali ke Produk
        </Link>

        {/* Header */}
        <div className="text-center mb-6 sm:mb-8">
          <h1 className="text-xl sm:text-2xl md:text-3xl font-bold text-white mb-2">Checkout</h1>
          <p className="text-zinc-400 text-sm">Lengkapi data dan pilih metode pembayaran</p>
        </div>

        {/* Order Summary */}
        <div className="bg-zinc-900/90 border border-zinc-700/80 rounded-xl p-4 sm:p-5 mb-4 sm:mb-6">
          <h2 className="text-sm font-semibold text-zinc-400 uppercase tracking-wider mb-3">Ringkasan Pesanan</h2>
          <div className="flex items-center justify-between">
            <div>
              <p className="text-white font-medium text-sm sm:text-base">
                {productType === "panel" ? `Panel WhatsApp ${productName}` : productName}
              </p>
              <p className="text-zinc-500 text-xs sm:text-sm">
                {productType === "panel" ? "Berlangganan 1 bulan" : "Pembelian script"}
              </p>
            </div>
            <p className="text-teal-400 font-bold text-lg sm:text-xl">{formatPrice(productPrice)}</p>
          </div>
        </div>

        {/* Customer Info */}
        <div className="bg-zinc-900/90 border border-zinc-700/80 rounded-xl p-4 sm:p-5 mb-4 sm:mb-6">
          <h2 className="text-sm font-semibold text-zinc-400 uppercase tracking-wider mb-4">Data Pembeli</h2>
          <div className="space-y-3 sm:space-y-4">
            <div>
              <label htmlFor="name" className="block text-xs sm:text-sm text-zinc-400 mb-1.5">Nama Lengkap</label>
              <input
                type="text"
                id="name"
                value={customerName}
                onChange={(e) => setCustomerName(e.target.value)}
                placeholder="Masukkan nama lengkap"
                className="w-full bg-zinc-800 border border-zinc-700 rounded-lg px-3 sm:px-4 py-2.5 sm:py-3 text-white text-sm placeholder-zinc-500 focus:outline-none focus:border-teal-500 focus:ring-1 focus:ring-teal-500 transition-colors"
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-xs sm:text-sm text-zinc-400 mb-1.5">Email</label>
              <input
                type="email"
                id="email"
                value={customerEmail}
                onChange={(e) => setCustomerEmail(e.target.value)}
                placeholder="contoh@email.com"
                className="w-full bg-zinc-800 border border-zinc-700 rounded-lg px-3 sm:px-4 py-2.5 sm:py-3 text-white text-sm placeholder-zinc-500 focus:outline-none focus:border-teal-500 focus:ring-1 focus:ring-teal-500 transition-colors"
              />
            </div>
            <div>
              <label htmlFor="phone" className="block text-xs sm:text-sm text-zinc-400 mb-1.5">No. WhatsApp</label>
              <input
                type="tel"
                id="phone"
                value={customerPhone}
                onChange={(e) => setCustomerPhone(e.target.value)}
                placeholder="08xxxxxxxxxx"
                className="w-full bg-zinc-800 border border-zinc-700 rounded-lg px-3 sm:px-4 py-2.5 sm:py-3 text-white text-sm placeholder-zinc-500 focus:outline-none focus:border-teal-500 focus:ring-1 focus:ring-teal-500 transition-colors"
              />
            </div>
          </div>
        </div>

        {/* Payment Methods */}
        <div className="bg-zinc-900/90 border border-zinc-700/80 rounded-xl p-4 sm:p-5 mb-4 sm:mb-6">
          <h2 className="text-sm font-semibold text-zinc-400 uppercase tracking-wider mb-4">Metode Pembayaran</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 sm:gap-3">
            {paymentMethods.map((method) => {
              const Icon = method.icon;
              return (
                <button
                  key={method.id}
                  onClick={() => setSelectedPayment(method.id)}
                  className={`flex items-center gap-3 p-3 sm:p-4 rounded-lg border transition-all text-left ${
                    selectedPayment === method.id
                      ? "border-teal-500 bg-teal-500/10 ring-1 ring-teal-500"
                      : "border-zinc-700 hover:border-zinc-600 bg-zinc-800/50"
                  }`}
                >
                  <div className={`p-2 rounded-lg ${selectedPayment === method.id ? "bg-teal-500/20" : "bg-zinc-700"}`}>
                    <Icon className={`w-5 h-5 ${selectedPayment === method.id ? "text-teal-400" : "text-zinc-400"}`} />
                  </div>
                  <div className="min-w-0 flex-1">
                    <p className={`font-medium text-sm ${selectedPayment === method.id ? "text-teal-400" : "text-white"}`}>
                      {method.name}
                    </p>
                    <p className="text-[10px] sm:text-xs text-zinc-500 truncate">{method.description}</p>
                  </div>
                  {selectedPayment === method.id && (
                    <CheckCircle2 className="w-5 h-5 text-teal-400 flex-shrink-0" />
                  )}
                </button>
              );
            })}
          </div>
        </div>

        {/* Trust Badges */}
        <div className="flex flex-wrap items-center justify-center gap-4 sm:gap-6 mb-6">
          <div className="flex items-center gap-1.5 text-zinc-500 text-xs">
            <Shield className="w-4 h-4" />
            <span>Pembayaran Aman</span>
          </div>
          <div className="flex items-center gap-1.5 text-zinc-500 text-xs">
            <Zap className="w-4 h-4" />
            <span>Proses Instan</span>
          </div>
          <div className="flex items-center gap-1.5 text-zinc-500 text-xs">
            <MessageCircle className="w-4 h-4" />
            <span>Support 24/7</span>
          </div>
        </div>

        {/* Pay Button */}
        <button
          onClick={handlePayment}
          disabled={isProcessing || !selectedPayment}
          className={`w-full py-3 sm:py-4 rounded-xl font-bold text-sm sm:text-base transition-all flex items-center justify-center gap-2 ${
            isProcessing || !selectedPayment
              ? "bg-zinc-700 text-zinc-400 cursor-not-allowed"
              : "bg-teal-500 hover:bg-teal-400 text-black shadow-lg shadow-teal-500/30"
          }`}
        >
          {isProcessing ? (
            <>
              <Loader2 className="w-5 h-5 animate-spin" />
              Memproses...
            </>
          ) : (
            <>
              Bayar {formatPrice(productPrice)}
            </>
          )}
        </button>

        {/* Info */}
        {!isPaymentConfigured() && (
          <p className="text-center text-zinc-500 text-xs mt-4">
            * Saat ini pembayaran akan diarahkan ke WhatsApp admin
          </p>
        )}
      </div>
    </div>
  );
}

export default function CheckoutPage() {
  return (
    <Suspense fallback={
      <div className="min-h-screen bg-zinc-950 flex items-center justify-center">
        <Loader2 className="w-8 h-8 text-teal-400 animate-spin" />
      </div>
    }>
      <CheckoutContent />
    </Suspense>
  );
}
