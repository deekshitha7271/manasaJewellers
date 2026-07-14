"use client";

import { motion } from "framer-motion";

export function AboutSection() {
  return (
    <section id="about" className="py-32 bg-[#0a0a0a] text-luxury-ivory overflow-hidden relative">
      <div className="container mx-auto px-6 md:px-12 flex flex-col items-center text-center">
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="uppercase tracking-[0.4em] text-luxury-gold text-xs sm:text-sm font-semibold mb-8"
        >
          Our Story
        </motion.div>

        <h2 className="font-serif text-4xl md:text-5xl lg:text-7xl leading-tight max-w-5xl drop-shadow-xl">
          Redefining elegance with <br className="hidden md:block"/>
          <span className="italic font-light text-luxury-gold">accessible luxury.</span>
        </h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="mt-12 text-lg md:text-xl font-light text-luxury-ivory/70 max-w-3xl leading-relaxed"
        >
          Established in 2024, Manasa Jewellers was born from a simple belief: exquisite design shouldn't be a privilege. As Narasapuram's premier destination for 1-gram gold and premium imitation jewellery, we handpick every piece in our retail collection to ensure it carries the weight, shine, and intricate detailing of pure gold—without the prohibitive cost.
        </motion.p>
        
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="mt-6 text-lg md:text-xl font-light text-luxury-ivory/70 max-w-3xl leading-relaxed"
        >
          Whether it is your wedding day or a festive celebration, our curated showroom offers an unmatched variety of styles, from deeply traditional temple ornaments to sleek, modern classics.
        </motion.p>

      </div>
    </section>
  );
}
