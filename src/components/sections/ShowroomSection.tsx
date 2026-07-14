"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { MapPin, Clock, Phone, MessageCircle } from "lucide-react";

export function ShowroomSection() {
  return (
    <section id="showroom" className="relative py-32 bg-luxury-black text-luxury-ivory overflow-hidden">
      
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <Image 
          src="/showroom_interior.png" 
          alt="Luxury Showroom Interior"
          fill
          className="object-cover object-center opacity-30"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-luxury-black via-luxury-black/80 to-transparent"></div>
      </div>

      <div className="container mx-auto px-6 md:px-12 relative z-10">
        
        <div className="text-center mb-20">
          <motion.h4 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="uppercase tracking-[0.3em] text-luxury-gold text-sm mb-6 font-semibold"
          >
            The Destination
          </motion.h4>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="font-serif text-4xl md:text-6xl leading-tight"
          >
            Step Into <br className="hidden md:block"/>
            <span className="italic font-light">Elegance.</span>
          </motion.h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 max-w-5xl mx-auto">
          
          {/* Contact Details */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
            className="bg-background/5 backdrop-blur-md border border-luxury-ivory/10 p-10 lg:p-14"
          >
            <h3 className="font-serif text-3xl mb-10">Visit Us</h3>
            
            <div className="space-y-8 font-light text-luxury-ivory/80">
              <div className="flex gap-6 items-start">
                <MapPin className="text-luxury-gold shrink-0" />
                <div>
                  <p className="font-semibold text-white uppercase tracking-widest text-xs mb-2">Address</p>
                  <p>Manasa Jewellers<br/>Narasapuram, Andhra Pradesh, India</p>
                </div>
              </div>

              <div className="flex gap-6 items-start">
                <Clock className="text-luxury-gold shrink-0" />
                <div>
                  <p className="font-semibold text-white uppercase tracking-widest text-xs mb-2">Hours</p>
                  <p>Mon - Sat: 10:30 AM - 8:00 PM<br/>Sunday: By Appointment Only</p>
                </div>
              </div>

              <div className="flex gap-6 items-start">
                <Phone className="text-luxury-gold shrink-0" />
                <div>
                  <p className="font-semibold text-white uppercase tracking-widest text-xs mb-2">Contact</p>
                  <p>+91 7658998888</p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Action Area */}
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.6 }}
            className="flex flex-col justify-center gap-6"
          >
            <p className="text-2xl font-serif leading-relaxed mb-6">
              Our experts await to guide you through a curated experience of our finest collections.
            </p>
            
            <button className="bg-luxury-gold text-luxury-black px-8 py-4 uppercase tracking-widest text-sm hover:bg-white transition-colors duration-500 w-full text-center font-semibold">
              Book Appointment
            </button>
            
            <a 
              href="https://chat.whatsapp.com/DlPxBpUz6tb4bEtWUnz1OI"
              target="_blank"
              rel="noopener noreferrer"
              className="border border-luxury-ivory/30 text-luxury-ivory px-8 py-4 uppercase tracking-widest text-sm hover:bg-luxury-ivory hover:text-luxury-black transition-colors duration-500 w-full text-center flex items-center justify-center gap-3"
            >
              <MessageCircle size={18} />
              Join WhatsApp Group
            </a>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
