"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { ScanFace } from "lucide-react";

export function VirtualTryOnSection() {
  return (
    <section className="py-32 bg-background relative overflow-hidden">
      <div className="container mx-auto px-6 md:px-12 flex flex-col lg:flex-row items-center gap-20">
        
        {/* Phone Mockup Image */}
        <div className="w-full lg:w-1/2 relative h-[700px] flex justify-center items-center">
          {/* Glowing Aura */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[600px] bg-luxury-gold/20 blur-[100px] rounded-full"></div>
          
          <motion.div 
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 1.5, ease: "easeOut" }}
            className="relative w-[320px] h-[650px] z-10"
          >
            <Image 
              src="/virtual_try_on.png" 
              alt="Virtual Try On App"
              fill
              className="object-contain"
            />

            {/* Floating UI Elements */}
            <motion.div 
              animate={{ y: [0, -10, 0] }}
              transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
              className="absolute -right-12 top-32 bg-white/80 backdrop-blur-md p-4 rounded-xl shadow-lg border border-white/40 flex items-center gap-4"
            >
              <div className="w-10 h-10 rounded-full bg-luxury-gold/10 flex items-center justify-center text-luxury-gold">
                <ScanFace size={20} />
              </div>
              <div>
                <p className="text-xs font-semibold text-luxury-black">AR Active</p>
                <p className="text-[10px] text-luxury-black/60">Scanning contour...</p>
              </div>
            </motion.div>

          </motion.div>
        </div>

        {/* Text Content */}
        <div className="w-full lg:w-1/2">
          <motion.h4 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="uppercase tracking-[0.3em] text-luxury-gold text-sm mb-6 font-semibold"
          >
            Innovation
          </motion.h4>
          
          <motion.h2 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="font-serif text-4xl md:text-5xl lg:text-6xl leading-tight mb-8"
          >
            Experience the <span className="italic font-light">Magic.</span> Anywhere.
          </motion.h2>

          <motion.p 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
            className="text-foreground/70 font-light text-lg leading-relaxed mb-12"
          >
            Discover our entire collection from the comfort of your home. Our proprietary AR Try-On experience uses advanced facial mapping to let you wear our masterpieces virtually. See the brilliance, check the fit, and fall in love before you even step into our showroom.
          </motion.p>

          <motion.button 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.6 }}
            className="bg-luxury-black text-luxury-ivory px-8 py-4 uppercase tracking-widest text-sm hover:bg-luxury-gold transition-colors duration-500"
          >
            Launch Experience
          </motion.button>
        </div>

      </div>
    </section>
  );
}
