"use client";

import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { ShieldCheck, Gem, HeartHandshake } from "lucide-react";
import React from "react";

const TiltCard = ({ title, desc, icon: Icon }: any) => {
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const mouseXSpring = useSpring(x, { stiffness: 300, damping: 20 });
  const mouseYSpring = useSpring(y, { stiffness: 300, damping: 20 });

  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["17.5deg", "-17.5deg"]);
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-17.5deg", "17.5deg"]);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;
    const xPct = mouseX / width - 0.5;
    const yPct = mouseY / height - 0.5;
    x.set(xPct);
    y.set(yPct);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.div
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{
        rotateY,
        rotateX,
        transformStyle: "preserve-3d",
      }}
      className="relative w-full h-80 rounded-2xl bg-gradient-to-br from-[#1a1a1a] to-[#0c0c0c] border border-luxury-ivory/10 p-8 flex flex-col items-center justify-center text-center cursor-pointer group"
    >
      <div 
        style={{ transform: "translateZ(50px)" }}
        className="p-5 rounded-full bg-luxury-gold/5 text-luxury-gold mb-6 border border-luxury-gold/20 group-hover:bg-luxury-gold group-hover:text-black transition-all duration-500 shadow-[0_0_30px_rgba(212,175,55,0.1)]"
      >
        <Icon size={40} strokeWidth={1} />
      </div>
      <h3 style={{ transform: "translateZ(40px)" }} className="font-serif text-2xl text-luxury-ivory mb-3">{title}</h3>
      <p style={{ transform: "translateZ(30px)" }} className="text-luxury-ivory/60 font-light text-sm px-4">{desc}</p>
      
      {/* Dynamic Shine effect */}
      <motion.div 
        className="absolute inset-0 rounded-2xl bg-gradient-to-br from-white/5 to-transparent opacity-0 group-hover:opacity-100 pointer-events-none transition-opacity duration-500"
        style={{ transform: "translateZ(1px)" }}
      />
    </motion.div>
  );
};

export function PuritySection() {
  const cards = [
    {
      title: "Premium Quality Finish",
      desc: "Every piece is crafted with high-grade materials to ensure a long-lasting, brilliant gold-like shine.",
      icon: ShieldCheck
    },
    {
      title: "Extensive Collection",
      desc: "Curated hand-picked designs for every occasion, blending traditional elegance with modern trends.",
      icon: Gem
    },
    {
      title: "Trusted Retailer",
      desc: "Years of exceptional customer service and a commitment to quality in Narasapuram.",
      icon: HeartHandshake
    }
  ];

  return (
    <section id="trust" className="py-32 bg-luxury-black text-luxury-ivory overflow-hidden border-t border-luxury-ivory/10">
      <div className="container mx-auto px-6 md:px-12">
        <div className="text-center mb-20">
          <motion.h4 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="uppercase tracking-[0.3em] text-luxury-gold text-sm mb-6 font-semibold"
          >
            The Manasa Guarantee
          </motion.h4>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="font-serif text-4xl md:text-6xl leading-tight"
          >
            Uncompromising <br className="hidden md:block"/>
            <span className="italic font-light">Standards.</span>
          </motion.h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto perspective-1000">
          {cards.map((card, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
            >
              <TiltCard {...card} />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
