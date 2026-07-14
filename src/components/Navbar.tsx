"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import { MagneticButton } from "@/components/MagneticButton";

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "About", href: "#about" },
    { name: "Collections", href: "#collections" },
    { name: "Trust", href: "#trust" },
    { name: "Experience", href: "#showroom" },
  ];

  return (
    <>
      <motion.nav
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${
          scrolled ? "bg-background/80 backdrop-blur-md py-4 shadow-sm text-foreground" : "bg-transparent py-6 text-luxury-ivory"
        }`}
      >
        <div className="container mx-auto px-6 md:px-12 flex justify-between items-center">
          <a href="/" className="font-serif text-2xl tracking-widest uppercase">
            Manasa
          </a>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center space-x-12">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className={`text-sm uppercase tracking-widest transition-colors duration-300 ${scrolled ? 'hover:text-luxury-gold' : 'hover:text-luxury-gold text-luxury-ivory/80 hover:text-luxury-ivory'}`}
              >
                {link.name}
              </a>
            ))}
            <MagneticButton>
              <a href="https://wa.me/917658998888" target="_blank" rel="noopener noreferrer" className={`inline-block border px-6 py-2 text-sm uppercase tracking-widest transition-colors duration-300 ${scrolled ? 'border-foreground hover:bg-foreground hover:text-background' : 'border-luxury-ivory/50 hover:bg-luxury-ivory hover:text-black text-luxury-ivory'}`}>
                Book Consultation
              </a>
            </MagneticButton>
          </div>

          {/* Mobile Toggle */}
          <button
            className="md:hidden text-foreground"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </motion.nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="fixed inset-0 z-40 bg-background flex flex-col items-center justify-center space-y-8"
          >
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="font-serif text-3xl uppercase tracking-widest"
              >
                {link.name}
              </a>
            ))}
            <a href="https://wa.me/917658998888" target="_blank" rel="noopener noreferrer" className="border border-foreground px-8 py-3 uppercase tracking-widest mt-8 text-center block">
              Book Consultation
            </a>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
