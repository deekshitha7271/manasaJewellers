"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

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
      {/* Parallax & Infinite Scale Background */}
      <motion.div 
        style={{ y: backgroundY }}
        className="absolute inset-0 z-0 w-full h-[120%] -top-[10%]"
      >
        <motion.div 
          animate={{ scale: [1, 1.1] }}
          transition={{ duration: 30, ease: "linear", repeat: Infinity, repeatType: "reverse" }}
          className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-90"
          style={{ backgroundImage: "url('/hero_jewellery.png')" }}
        />
        {/* Lighter Vignette & Deep Gradient */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,rgba(10,10,10,0.5)_100%)]"></div>
        <div className="absolute inset-0 bg-gradient-to-b from-[#0a0a0a]/50 via-transparent to-[#0a0a0a]"></div>
      </motion.div>

      {/* Main Content */}
      <motion.div 
        style={{ y: textY, opacity }}
        className="relative z-10 w-full h-full flex flex-col items-center justify-center px-4 mt-10"
      >
        <div className="w-full flex flex-col items-center justify-center text-center z-20 px-4 pt-12">
          
          {/* EST 2024 Badge */}
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.5, ease: "easeOut", delay: 0.2 }}
            className="mb-12 flex flex-col items-center"
          >
            <span className="uppercase tracking-[0.5em] text-[10px] md:text-xs text-luxury-gold font-semibold">Est. 2024</span>
            <span className="block w-[1px] h-16 bg-gradient-to-b from-luxury-gold/50 to-transparent mt-6"></span>
          </motion.div>
          
          <h1 className="font-serif text-[12vw] sm:text-[9vw] md:text-[8vw] leading-none tracking-tight flex flex-row flex-wrap justify-center items-center gap-4 sm:gap-6 text-center drop-shadow-[0_0px_40px_rgba(255,255,255,0.2)]">
            <div className="overflow-hidden pb-4">
              <motion.div
                initial={{ y: "100%" }}
                animate={{ y: "0%" }}
                transition={{ duration: 1.4, ease: [0.16, 1, 0.3, 1], delay: 0.4 }}
                className="bg-clip-text text-transparent bg-gradient-to-b from-luxury-ivory via-white to-luxury-ivory/60"
              >
                MANASA
              </motion.div>
            </div>
            
            <div className="overflow-hidden pb-4">
              <motion.div
                initial={{ y: "100%" }}
                animate={{ y: "0%" }}
                transition={{ duration: 1.4, ease: [0.16, 1, 0.3, 1], delay: 0.6 }}
                className="bg-clip-text text-transparent bg-gradient-to-b from-[#FFEAA7] via-[#FFD700] to-[#B8860B] italic"
              >
                JEWELLERS
              </motion.div>
            </div>
          </h1>
        </div>

        <div className="overflow-hidden mt-16 max-w-xl text-center z-20">
          <motion.p 
            initial={{ y: "100%" }}
            animate={{ y: "0%" }}
            transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1], delay: 1 }}
            className="text-xs sm:text-sm font-light tracking-[0.3em] uppercase text-luxury-ivory/60"
          >
            The finest 1-gram gold & imitation jewellery in Narasapuram.
          </motion.p>
        </div>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.5, delay: 1.5 }}
          className="mt-16 z-20"
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
        transition={{ delay: 2, duration: 2 }}
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
