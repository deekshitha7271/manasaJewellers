"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { TextReveal } from "@/components/TextReveal";

export function HeroSection() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"]
  });

  const backgroundY = useTransform(scrollYProgress, [0, 1], ["0%", "40%"]);
  const textY = useTransform(scrollYProgress, [0, 1], ["0%", "60%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

  return (
    <section ref={ref} className="relative h-screen w-full flex items-center justify-center overflow-hidden bg-[#0a0a0a]">
      {/* Parallax Background */}
      <motion.div 
        style={{ y: backgroundY }}
        className="absolute inset-0 z-0 w-full h-[120%] -top-[10%]"
      >
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-60"
          style={{ backgroundImage: "url('/hero_jewellery.png')" }}
        />
        {/* Luxury Vignette & Deep Gradient */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,rgba(10,10,10,0.85)_100%)]"></div>
        <div className="absolute inset-0 bg-gradient-to-b from-[#0a0a0a]/50 via-transparent to-[#0a0a0a]"></div>
      </motion.div>

      {/* Main Content */}
      <motion.div 
        style={{ y: textY, opacity }}
        className="relative z-10 w-full flex flex-col items-center justify-center px-4 mt-10"
      >
        <motion.div
          initial={{ opacity: 0, y: 80, scale: 0.95 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 2, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
          className="text-center w-full flex flex-col items-center"
        >
          <motion.div 
            initial={{ opacity: 0, letterSpacing: "0em" }}
            animate={{ opacity: 1, letterSpacing: "0.4em" }}
            transition={{ duration: 2, delay: 1 }}
            className="uppercase text-luxury-gold text-xs sm:text-sm font-semibold mb-8 tracking-[0.4em]"
          >
            The Pinnacle of Purity
          </motion.div>
          
          <h1 className="font-serif text-[13vw] md:text-[11vw] leading-[0.8] tracking-tight text-luxury-ivory drop-shadow-2xl flex flex-col items-center">
            <span className="pr-4 md:pr-12"><TextReveal text="MANASA" delay={0.5} /></span>
            <span className="italic font-light text-luxury-gold pl-4 md:pl-24 mt-2 md:mt-4"><TextReveal text="JEWELLERS" delay={0.8} /></span>
          </h1>
        </motion.div>

        <motion.p 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 2, delay: 1.5 }}
          className="mt-16 text-xs sm:text-sm font-light tracking-[0.3em] uppercase text-luxury-ivory/60 max-w-xl text-center"
        >
          A new era of elegance. Crafted in Narasapuram.
        </motion.p>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.5, delay: 1.8 }}
          className="mt-16"
        >
          <a href="#collections" className="group flex flex-col items-center cursor-pointer">
            <span className="uppercase tracking-[0.2em] text-[10px] sm:text-xs text-luxury-ivory mb-3 group-hover:text-luxury-gold transition-colors duration-500">
              Enter The Collection
            </span>
            <div className="w-8 h-[1px] bg-luxury-ivory/40 group-hover:bg-luxury-gold group-hover:w-24 transition-all duration-700 ease-in-out"></div>
          </a>
        </motion.div>
      </motion.div>

      {/* Luxury Scroll Indicator */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2.5, duration: 2 }}
        className="absolute bottom-0 left-1/2 -translate-x-1/2 flex flex-col items-center z-20"
      >
        <div className="w-[1px] h-32 bg-luxury-ivory/10 relative overflow-hidden">
          <motion.div 
            animate={{ y: ["-100%", "100%"] }}
            transition={{ repeat: Infinity, duration: 2.5, ease: [0.6, 0.05, -0.01, 0.9] }}
            className="absolute top-0 left-0 w-full h-1/2 bg-gradient-to-b from-transparent via-luxury-gold to-transparent"
          />
        </div>
      </motion.div>
    </section>
  );
}
