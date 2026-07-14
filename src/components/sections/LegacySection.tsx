"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { TextReveal } from "@/components/TextReveal";

export function LegacySection() {
  return (
    <section id="legacy" className="py-32 bg-background relative overflow-hidden">
      <div className="container mx-auto px-6 md:px-12 flex flex-col md:flex-row items-center gap-20">
        
        {/* Left Text */}
        <div className="w-full md:w-1/2">
          <motion.h4 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="uppercase tracking-[0.3em] text-luxury-gold text-sm mb-6 font-semibold"
          >
            Our Beginning
          </motion.h4>
          
          <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl leading-tight mb-8">
            <TextReveal text="A new era of trust," delay={0.2} /> <br/>
            <TextReveal text="built for tomorrow." delay={0.8} className="italic font-light" />
          </h2>

          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 1, delay: 0.4 }}
            className="space-y-6 text-foreground/70 font-light text-lg leading-relaxed"
          >
            <p>
              Founded in 2024, Manasa Jewellers is the custodian of unmatched craftsmanship and modern elegance. What started as a passionate vision in Narasapuram has blossomed into a sanctuary of trust, where every ornament is a testament to our dedication.
            </p>
            <p>
              We do not merely create jewellery; we craft future heirlooms. Pieces that witness your grandest celebrations and are designed to be passed down as tokens of eternal love.
            </p>
          </motion.div>

          <motion.button 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.6 }}
            className="mt-12 border-b border-foreground pb-1 uppercase tracking-widest text-sm hover:text-luxury-gold hover:border-luxury-gold transition-colors duration-300"
          >
            Discover Our Story
          </motion.button>
        </div>

        {/* Right Image */}
        <div className="w-full md:w-1/2 relative h-[600px] md:h-[800px]">
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 1.5, ease: [0.16, 1, 0.3, 1] }}
            className="absolute inset-0"
          >
            <Image 
              src="/legacy_heritage.png" 
              alt="Artisan crafting jewellery" 
              fill
              className="object-cover object-center"
              sizes="(max-width: 768px) 100vw, 50vw"
            />
            {/* Soft overlay gradient */}
            <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent opacity-50"></div>
          </motion.div>
          
          {/* Floating detail box */}
          <motion.div 
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.8 }}
            className="absolute -bottom-10 md:-left-10 bg-white p-8 shadow-2xl max-w-[250px]"
          >
            <h3 className="font-serif text-3xl mb-2 text-luxury-black">2024</h3>
            <p className="uppercase tracking-widest text-xs text-luxury-black/60 font-semibold">The year our journey began</p>
          </motion.div>
        </div>

      </div>
    </section>
  );
}
