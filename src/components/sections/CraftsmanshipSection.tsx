"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

const steps = [
  { step: "01", title: "Concept", desc: "Every masterpiece begins as a fleeting thought, inspired by nature, heritage, and the celebrations of life." },
  { step: "02", title: "Sketch", desc: "Our master designers translate inspiration into intricate sketches, refining every curve and detail on paper." },
  { step: "03", title: "Handcrafted", desc: "Using techniques passed down through generations, artisans mold pure gold into the envisioned form." },
  { step: "04", title: "Stone Setting", desc: "Precious stones and diamonds are meticulously set by hand, ensuring brilliance from every angle." },
  { step: "05", title: "Polishing", desc: "The final polish brings out the extraordinary luster, turning raw materials into a breathtaking heirloom." }
];

export function CraftsmanshipSection() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start center", "end center"]
  });

  const lineHeight = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  return (
    <section id="craftsmanship" ref={containerRef} className="py-32 bg-luxury-cream text-luxury-black relative">
      <div className="container mx-auto px-6 md:px-12">
        <div className="text-center mb-24">
          <motion.h4 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="uppercase tracking-[0.3em] text-luxury-gold text-sm mb-6 font-semibold"
          >
            The Journey
          </motion.h4>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="font-serif text-4xl md:text-6xl leading-tight"
          >
            From Concept <br className="hidden md:block"/>
            <span className="italic font-light">to Masterpiece.</span>
          </motion.h2>
        </div>

        <div className="max-w-3xl mx-auto relative">
          {/* Animated Line */}
          <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-[1px] bg-black/10 -translate-x-1/2"></div>
          <motion.div 
            style={{ height: lineHeight }}
            className="absolute left-4 md:left-1/2 top-0 w-[2px] bg-luxury-gold -translate-x-1/2 origin-top"
          ></motion.div>

          {/* Steps */}
          {steps.map((item, index) => (
            <div key={index} className="relative flex flex-col md:flex-row items-center justify-between mb-24 last:mb-0 pl-16 md:pl-0 group">
              
              {/* Dot */}
              <div className="absolute left-4 md:left-1/2 top-1/2 w-4 h-4 rounded-full bg-luxury-cream border-2 border-luxury-gold -translate-x-1/2 -translate-y-1/2 group-hover:bg-luxury-gold transition-colors duration-500 z-10"></div>

              {/* Left Content (Empty for odd on desktop, filled for even) */}
              <div className={`w-full md:w-5/12 ${index % 2 === 0 ? 'md:text-right md:pr-12' : 'md:order-last md:pl-12'}`}>
                <motion.div
                  initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.8 }}
                >
                  <h3 className="font-serif text-3xl mb-4 group-hover:text-luxury-gold transition-colors duration-300">
                    <span className="text-sm font-sans font-semibold tracking-widest text-luxury-gold/50 mr-4 md:hidden">{item.step}</span>
                    {item.title}
                  </h3>
                  <p className="font-light text-luxury-black/70 leading-relaxed">
                    {item.desc}
                  </p>
                </motion.div>
              </div>

              {/* Right Content (Step Number for odd, empty for even) */}
              <div className={`hidden md:block w-5/12 ${index % 2 === 0 ? 'md:pl-12 text-left' : 'md:text-right md:pr-12'}`}>
                <motion.span 
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  className="text-8xl font-serif text-black/5 select-none"
                >
                  {item.step}
                </motion.span>
              </div>

            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
