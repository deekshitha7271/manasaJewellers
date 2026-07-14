"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import Image from "next/image";
import { ArrowRight } from "lucide-react";

const collections = [
  { title: "Heritage Masterpieces", subtitle: "Echoes of a royal past", image: "/manasa jewellers collection/item-1.jpeg" },
  { title: "Bridal Elegance", subtitle: "For your most sacred day", image: "/manasa jewellers collection/item-2.jpeg" },
  { title: "Temple Ornaments", subtitle: "Divinity cast in pure gold", image: "/manasa jewellers collection/item-3.jpeg" },
  { title: "Modern Classics", subtitle: "Sophistication in every moment", image: "/manasa jewellers collection/item-4.jpeg" },
  { title: "Eternal Gold", subtitle: "Crafted for eternity", image: "/manasa jewellers collection/item-5.jpeg" },
];

export function HorizontalGallerySection() {
  const targetRef = useRef<HTMLDivElement | null>(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
  });

  // Moves the gallery horizontally as we scroll vertically
  const x = useTransform(scrollYProgress, [0, 1], ["5%", "-65%"]);

  return (
    <section ref={targetRef} id="collections" className="relative h-[300vh] bg-luxury-black">
      <div className="sticky top-0 h-screen flex flex-col md:flex-row items-center overflow-hidden">
        
        {/* Stationary Left Column */}
        <div className="w-full md:w-[35%] flex flex-col justify-center px-8 md:pl-24 z-20 shrink-0 mt-24 md:mt-0 pointer-events-none">
          <h2 className="font-serif text-5xl md:text-6xl lg:text-7xl text-white leading-tight">
            Curated <br/>
            <span className="italic font-light text-luxury-gold">Collections.</span>
          </h2>
          <p className="mt-6 uppercase tracking-[0.4em] text-xs opacity-70 text-white">Scroll to explore</p>
          
          <div className="mt-12">
            <a href="/collections" className="inline-flex items-center gap-3 border-b border-white/40 text-white pb-1 hover:text-luxury-gold hover:border-luxury-gold transition-colors uppercase tracking-widest text-xs font-semibold cursor-pointer pointer-events-auto">
              View All Collections <ArrowRight size={14} />
            </a>
          </div>
        </div>

        {/* Horizontal Track (Right Side) */}
        <div 
          className="w-full md:w-[65%] h-full flex items-center overflow-hidden"
          style={{ WebkitMaskImage: "linear-gradient(to right, transparent 0%, black 15%, black 100%)", maskImage: "linear-gradient(to right, transparent 0%, black 15%, black 100%)" }}
        >
          <motion.div style={{ x }} className="flex gap-8 md:gap-12 items-center w-max pl-4 md:pl-8 pr-24 mt-12 md:mt-0">
          {collections.map((item, index) => (
            <div 
              key={index} 
              className="group relative w-[75vw] md:w-[30vw] lg:w-[25vw] h-[50vh] md:h-[60vh] flex-shrink-0 overflow-hidden bg-[#111]"
            >
              <Image 
                src={item.image}
                alt={item.title}
                fill
                className="object-cover object-center grayscale-[20%] group-hover:grayscale-0 transition-all duration-[1s] ease-out group-hover:scale-110"
                sizes="(max-width: 768px) 75vw, (max-width: 1024px) 30vw, 25vw"
              />
              {/* Vignette Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent opacity-80 group-hover:opacity-40 transition-opacity duration-700"></div>
              
              <div className="absolute bottom-6 left-6 right-6 pointer-events-none">
                <span className="uppercase tracking-[0.2em] text-[9px] md:text-[10px] text-luxury-gold/90 mb-2 block">
                  0{index + 1} — {item.subtitle}
                </span>
                <h3 className="font-serif text-2xl md:text-3xl text-luxury-ivory drop-shadow-lg leading-snug">{item.title}</h3>
              </div>
            </div>
          ))}
        </motion.div>
        </div>
      </div>
    </section>
  );
}
