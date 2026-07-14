"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";

export function Preloader() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Artificial delay to show the stunning cinematic loader
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 3000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <AnimatePresence mode="wait">
      {isLoading && (
        <motion.div
          key="preloader"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, y: "-100%" }}
          transition={{ duration: 1.5, ease: [0.76, 0, 0.24, 1] }}
          className="fixed inset-0 z-[10000] bg-luxury-black flex flex-col items-center justify-center overflow-hidden"
        >
          {/* Animated Gold Line */}
          <div className="absolute top-1/2 left-0 w-full h-[1px] bg-white/5 -translate-y-1/2 overflow-hidden z-0">
            <motion.div 
              initial={{ x: "-100%" }}
              animate={{ x: "100%" }}
              transition={{ duration: 2, ease: "easeInOut", delay: 0.5 }}
              className="w-full h-full bg-luxury-gold"
            />
          </div>

          <motion.div 
            initial={{ opacity: 0, scale: 0.9, letterSpacing: "0em" }}
            animate={{ opacity: 1, scale: 1, letterSpacing: "0.5em" }}
            transition={{ duration: 2, ease: "easeOut", delay: 0.2 }}
            className="z-10 bg-luxury-black px-8"
          >
            <h1 className="font-serif text-3xl md:text-5xl text-luxury-ivory uppercase flex items-center">
              Manasa
              <span className="italic font-light text-luxury-gold ml-4 text-xl md:text-3xl tracking-normal">Jewellers</span>
            </h1>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 1.5 }}
            className="absolute bottom-20 uppercase tracking-[0.4em] text-[10px] text-luxury-gold/50"
          >
            Awwwards Bound
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
