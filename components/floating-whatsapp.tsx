"use client";

import { MessageCircle } from "lucide-react";
import { motion, useAnimation, PanInfo } from "framer-motion";
import { useRef, useEffect, useState } from "react";

const WHATSAPP_NUMBER = "6285701961876";

export function FloatingWhatsApp() {
  const controls = useAnimation();
  const [isMounted, setIsMounted] = useState(false);

  // Pastikan window sudah tersedia (Client Side)
  useEffect(() => {
    setIsMounted(true);
  }, []);

  const handleDragEnd = (_: any, info: PanInfo) => {
    const width = window.innerWidth;
    // info.point.x adalah posisi kursor di layar saat dilepas
    const endX = info.point.x;

    // Jarak aman dari pinggir layar
    const edgeOffset = 20;
    const buttonWidth = 48; 

    let targetX = 0;

    // Logika Snap ke pinggir terdekat
    if (endX > width / 2) {
      // Kembali ke posisi kanan asli (right-5)
      targetX = 0;
    } else {
      // Lompat ke sisi kiri layar
      targetX = -(width - (edgeOffset * 2) - buttonWidth);
    }

    controls.start({
      x: targetX,
      transition: { 
        type: "spring", 
        stiffness: 250, 
        damping: 25 
      },
    });
  };

  // Cegah error "window is not defined" saat build
  if (!isMounted) return null;

  return (
    <motion.a
      href={`https://wa.me/${WHATSAPP_NUMBER}?text=Halo, saya mau tanya tentang produk`}
      target="_blank"
      rel="noopener noreferrer"
      
      // KONFIGURASI DRAG
      drag
      dragSnapToOrigin={false} 
      dragElastic={0} // 0 supaya nempel banget di jari
      dragMomentum={false} // Supaya tidak meluncur sendiri saat dilepas
      animate={controls}
      onDragEnd={handleDragEnd}
      
      // Batasi area geser vertikal agar tidak keluar layar
      dragConstraints={{
        top: -window.innerHeight + 100,
        bottom: 50,
        left: -window.innerWidth + 100,
        right: 50
      }}

      whileDrag={{ scale: 1.1 }}
      className="fixed bottom-5 right-5 z-50 w-12 h-12 bg-[#25D366] rounded-full flex items-center justify-center shadow-2xl cursor-grab active:cursor-grabbing touch-none"
    >
      <MessageCircle className="w-6 h-6 text-white" />
      <span className="absolute inset-0 rounded-full bg-[#25D366] animate-ping opacity-30 pointer-events-none" />
    </motion.a>
  );
}
