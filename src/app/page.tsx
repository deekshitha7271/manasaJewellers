import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { HeroSection } from "@/components/sections/HeroSection";
import { AboutSection } from "@/components/sections/AboutSection";
import { HorizontalGallerySection } from "@/components/sections/HorizontalGallerySection";
import { MarqueeSection } from "@/components/sections/MarqueeSection";
import { PuritySection } from "@/components/sections/PuritySection";
import { MomentsSection } from "@/components/sections/MomentsSection";
import { ShowroomSection } from "@/components/sections/ShowroomSection";

export default function Home() {
  return (
    <main className="min-h-screen bg-background text-foreground selection:bg-luxury-gold selection:text-white">
      <Navbar />
      
      <HeroSection />
      <MarqueeSection />
      <AboutSection />
      <HorizontalGallerySection />
      <PuritySection />
      <MomentsSection />
      <ShowroomSection />
      
      {/* Final Grand Call to Action */}
      <section className="py-40 bg-luxury-black text-luxury-ivory text-center px-6">
        <h2 className="font-serif text-5xl md:text-7xl mb-12 max-w-5xl mx-auto leading-tight">
          Ready to begin your <span className="italic font-light text-luxury-gold">journey</span> with us?
        </h2>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-6 relative z-10">
          <button className="bg-luxury-gold text-luxury-black px-10 py-5 uppercase tracking-widest text-sm hover:bg-white transition-colors duration-500 w-full sm:w-auto font-semibold">
            Visit Manasa Jewellers
          </button>
          <a href="https://wa.me/917658998888" target="_blank" rel="noopener noreferrer" className="inline-block text-center border border-luxury-ivory/50 text-luxury-ivory px-10 py-5 uppercase tracking-widest text-sm hover:bg-luxury-ivory hover:text-luxury-black transition-colors duration-500 w-full sm:w-auto">
            Book Consultation
          </a>
        </div>
      </section>

      <Footer />
    </main>
  );
}
