"use client";

import { MessageCircle } from "lucide-react";
import { motion } from "framer-motion";

const WHATSAPP_NUMBER = "6285701961876";

export function FloatingWhatsApp() {
  return (
    <motion.a
      href={`https://wa.me/${WHATSAPP_NUMBER}?text=Halo, saya mau tanya tentang produk`}
      target="_blank"
      rel="noopener noreferrer"
      
      // FITUR GESER (DRAG)
      drag // Mengaktifkan fitur drag
      dragConstraints={{ 
        left: -300,  // Batas geser ke kiri
        right: 0,    // Batas geser ke kanan
        top: -500,   // Batas geser ke atas
        bottom: 0    // Batas geser ke bawah
      }}
      dragElastic={0.1} // Efek membal saat kena batas
      whileDrag={{ scale: 1.2, cursor: "grabbing" }} // Efek saat digeser
      
      className="fixed bottom-5 right-5 z-50 w-12 h-12 bg-[#25D366] rounded-full flex items-center justify-center shadow-lg hover:scale-110 transition-transform cursor-grab active:cursor-grabbing"
    >
      <MessageCircle className="w-6 h-6 text-white" />
      <span className="absolute inset-0 rounded-full bg-[#25D366] animate-ping opacity-30 pointer-events-none" />
    </motion.a>
  );
}
