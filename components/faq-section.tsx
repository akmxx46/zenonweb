"use client";

import { useState } from "react";
import { ChevronRight, HelpCircle } from "lucide-react";

const faqs = [
  {
    question: "Bagaimana cara memesan produk?",
    answer:
      "Klik tombol Order pada produk yang diinginkan, isi form checkout, lakukan pembayaran, dan produk akan segera diproses.",
  },
  {
    question: "Berapa lama pesanan diproses?",
    answer:
      "Pesanan diproses maksimal 1x24 jam setelah pembayaran dikonfirmasi. Biasanya dalam hitungan menit hingga beberapa jam.",
  },
  {
    question: "Apakah pembayaran aman?",
    answer:
      "Ya, pembayaran 100% aman. Kami menerima transfer bank, QRIS, dan e-wallet. Semua transaksi tercatat dengan baik.",
  },
  {
    question: "Bagaimana jika pesanan saya gagal atau tidak muncul?",
    answer:
      "Hubungi admin via WhatsApp dengan menyertakan bukti pembayaran. Kami akan segera membantu menyelesaikan masalah Anda.",
  },
  {
    question: "Apakah bisa refund?",
    answer:
      "Refund tersedia jika produk tidak bisa digunakan karena kesalahan dari pihak kami. Hubungi admin untuk info lebih lanjut.",
  },
  {
    question: "Apakah ada garansi produk?",
    answer:
      "Ya, semua produk bergaransi. Panel bergaransi selama masa aktif, script bergaransi support dan update.",
  },
];

export function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section id="faq" className="py-8 sm:py-10 lg:py-12 px-3 sm:px-4 lg:px-6">
      <div className="max-w-3xl mx-auto">
        {/* Section Header */}
        <div className="mb-6 sm:mb-8">
          <div className="flex items-center gap-2 mb-2">
            <HelpCircle className="w-5 h-5 text-teal-400" />
            <h2 className="text-lg sm:text-xl font-bold text-white">Pertanyaan Umum</h2>
          </div>
          <p className="text-zinc-400 text-xs sm:text-sm">Jawaban untuk pertanyaan yang sering ditanyakan</p>
        </div>

        {/* FAQ List */}
        <div className="bg-zinc-900/90 border border-zinc-700/80 rounded-xl overflow-hidden">
          {faqs.map((faq, index) => (
            <div key={index} className={index !== faqs.length - 1 ? "border-b border-zinc-700/80" : ""}>
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full flex items-center justify-between p-3 sm:p-4 text-left hover:bg-zinc-800/50 transition-colors gap-3"
              >
                <span className="flex items-center gap-2 sm:gap-3 text-xs sm:text-sm text-zinc-200 font-medium">
                  <ChevronRight
                    className={`w-3.5 h-3.5 sm:w-4 sm:h-4 text-teal-400 transition-transform flex-shrink-0 ${
                      openIndex === index ? "rotate-90" : ""
                    }`}
                  />
                  <span className="text-left">{faq.question}</span>
                </span>
              </button>
              {openIndex === index && (
                <div className="px-3 sm:px-4 pb-3 sm:pb-4 pl-8 sm:pl-11">
                  <p className="text-xs sm:text-sm text-zinc-400 leading-relaxed">
                    {faq.answer}
                  </p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
