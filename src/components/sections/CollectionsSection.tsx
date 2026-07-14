"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const collections = [
  {
    title: "Heritage Masterpieces",
    subtitle: "Echoes of a royal past",
    image: "/manasa jewellers collection/item-1.jpeg",
  },
  {
    title: "Bridal Elegance",
    subtitle: "For your most sacred day",
    image: "/manasa jewellers collection/item-2.jpeg",
  },
  {
    title: "Temple Ornaments",
    subtitle: "Divinity cast in pure gold",
    image: "/manasa jewellers collection/item-3.jpeg",
  },
  {
    title: "Modern Classics",
    subtitle: "Sophistication in every moment",
    image: "/manasa jewellers collection/item-4.jpeg",
  },
  {
    title: "Eternal Gold",
    subtitle: "Crafted for eternity",
    image: "/manasa jewellers collection/item-5.jpeg",
  },
  {
    title: "Signature Series",
    subtitle: "The pinnacle of our artistry",
    image: "/manasa jewellers collection/item-6.jpeg",
  }
];

export function CollectionsSection() {
  return (
    <section id="collections" className="py-32 bg-[#0c0c0c] text-luxury-ivory overflow-hidden">
      <div className="container mx-auto px-6 md:px-12 text-center mb-24">
        <motion.h4 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="uppercase tracking-[0.4em] text-luxury-gold text-xs mb-6 font-semibold"
        >
          Curated Collections
        </motion.h4>
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.2 }}
          className="font-serif text-5xl md:text-7xl leading-tight"
        >
          Masterpieces <br className="hidden md:block"/>
          <span className="italic font-light">of artistry.</span>
        </motion.h2>
      </div>

      <div className="container mx-auto px-6 md:px-12 max-w-7xl">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {collections.map((collection, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              className="relative group cursor-pointer"
            >
              <div className="w-full h-[500px] relative overflow-hidden bg-luxury-black mb-6">
                <Image 
                  src={collection.image} 
                  alt={collection.title}
                  fill
                  className="object-cover object-center grayscale-[20%] group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700"
                  sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                />
                {/* Dark gradient overlay for text readability if text is on image */}
                <div className="absolute inset-0 bg-gradient-to-t from-luxury-black/60 via-transparent to-transparent opacity-80 group-hover:opacity-40 transition-opacity duration-700"></div>
                
                <div className="absolute bottom-6 left-6 right-6 pointer-events-none">
                  <h4 className="uppercase tracking-[0.2em] text-luxury-gold/90 text-[9px] mb-2 font-semibold drop-shadow-md">
                    0{index + 1} — {collection.subtitle}
                  </h4>
                  <h3 className="font-serif text-2xl lg:text-3xl text-luxury-ivory drop-shadow-lg">
                    {collection.title}
                  </h3>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
        
        <div className="mt-20 flex justify-center">
          <a href="/collections" className="inline-flex border border-luxury-ivory/30 px-10 py-4 hover:bg-luxury-ivory hover:text-[#0c0c0c] transition-colors duration-500 font-semibold uppercase tracking-[0.2em] text-xs">
            View Full Archive
          </a>
        </div>
      </div>
    </section>
  );
}
