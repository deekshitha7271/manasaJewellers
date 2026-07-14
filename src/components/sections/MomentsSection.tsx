"use client";

import { motion } from "framer-motion";

const moments = [
  "Weddings",
  "Engagements",
  "Anniversaries",
  "Milestones"
];

export function MomentsSection() {
  return (
    <section className="py-32 bg-luxury-cream text-luxury-black overflow-hidden relative">
      <div className="container mx-auto px-6 md:px-12">
        <div className="flex flex-col items-center text-center">
          <motion.h4 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="uppercase tracking-[0.3em] text-luxury-gold text-sm mb-6 font-semibold"
          >
            Moments That Matter
          </motion.h4>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="font-serif text-4xl md:text-5xl lg:text-7xl leading-tight mb-16 max-w-4xl"
          >
            Because some moments deserve more than words. <br/>
            <span className="italic font-light">They deserve a legacy.</span>
          </motion.h2>

          {/* Staggered list */}
          <div className="flex flex-wrap justify-center gap-x-12 gap-y-8 mt-12">
            {moments.map((moment, i) => (
              <motion.div
                key={moment}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.4 + i * 0.1 }}
                className="group cursor-pointer relative"
              >
                <h3 className="text-3xl md:text-5xl font-serif text-black/40 hover:text-luxury-black transition-colors duration-500">
                  {moment}
                </h3>
                <div className="absolute -bottom-4 left-0 w-0 h-[1px] bg-luxury-gold group-hover:w-full transition-all duration-500"></div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
