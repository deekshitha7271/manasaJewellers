"use client";

import { motion } from "framer-motion";

export function MarqueeSection() {
  const marqueeText = "PREMIUM 1-GRAM GOLD • EXQUISITE IMITATION JEWELLERY • TRENDING DESIGNS • ";
  const texts = new Array(8).fill(marqueeText);

  return (
    <section className="py-4 bg-[#0a0a0a] border-y border-luxury-ivory/10 overflow-hidden flex items-center">
      <div className="flex whitespace-nowrap">
        <motion.div 
          className="flex whitespace-nowrap"
          animate={{ x: ["0%", "-50%"] }}
          transition={{ ease: "linear", duration: 30, repeat: Infinity }}
        >
          {texts.map((text, i) => (
            <span key={i} className="text-xs md:text-sm font-light px-4 uppercase tracking-[0.4em] text-luxury-ivory/40">
              {text}
            </span>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
