"use client";

import { useState } from "react";

export default function CheckoutPage() {
  const [cart, setCart] = useState([
    { id: 1, name: "Panel Pterodactyl", price: 15000 },
    // Data produk lainnya...
  ]);

  const handleCheckout = () => {
    // 1. Tentukan nomor WhatsApp tujuan (gunakan kode negara, misal 62)
    const phoneNumber = "6285701961876"; 

    // 2. Susun format pesan otomatis
    const orderDetails = cart
      .map((item) => `- ${item.name} (Rp${item.price.toLocaleString()})`)
      .join("\n");

    const message = `Halo Admin, saya ingin membeli:\n\n${orderDetails}\n\nTotal: Rp${cart.reduce((a, b) => a + b.price, 0).toLocaleString()}\n\nMohon instruksi pembayarannya.`;

    // 3. Encode pesan agar aman untuk URL
    const encodedMessage = encodeURIComponent(message);

    // 4. Redirect ke WhatsApp
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;
    
    window.open(whatsappUrl, "_blank");
  };

  return (
    <div className="p-8">
      <h1 className="text-2xl font-bold mb-4">Checkout</h1>
      {/* Tampilan Ringkasan Belanja */}
      <button
        onClick={handleCheckout}
        className="bg-green-500 text-white px-6 py-2 rounded-lg hover:bg-green-600 transition"
      >
        Order via WhatsApp
      </button>
    </div>
  );
}
