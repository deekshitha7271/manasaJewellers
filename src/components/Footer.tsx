export function Footer() {
  return (
    <footer className="bg-foreground text-background py-20 px-6 md:px-12">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-4 gap-12 border-b border-background/20 pb-16">
        <div className="md:col-span-2">
          <h2 className="font-serif text-3xl uppercase tracking-widest mb-6">Manasa</h2>
          <p className="max-w-md text-background/70 font-light leading-relaxed">
            Timeless elegance crafted to last generations. Every masterpiece tells a story of tradition, craftsmanship, and celebration.
          </p>
        </div>
        
        <div>
          <h4 className="uppercase tracking-widest text-sm mb-6 font-semibold">Explore</h4>
          <ul className="space-y-4 font-light text-background/70">
            <li><a href="#legacy" className="hover:text-luxury-gold transition-colors">Our Legacy</a></li>
            <li><a href="#collections" className="hover:text-luxury-gold transition-colors">Collections</a></li>
            <li><a href="#craftsmanship" className="hover:text-luxury-gold transition-colors">Craftsmanship</a></li>
            <li><a href="#showroom" className="hover:text-luxury-gold transition-colors">The Showroom</a></li>
          </ul>
        </div>

        <div>
          <h4 className="uppercase tracking-widest text-sm mb-6 font-semibold">Contact</h4>
          <ul className="space-y-4 font-light text-background/70">
            <li>Narasapuram,</li>
            <li>Andhra Pradesh, India</li>
            <li>+91 7658998888</li>
            <li>experience@manasajewellers.com</li>
          </ul>
        </div>
      </div>
      
      <div className="container mx-auto mt-12 flex flex-col md:flex-row justify-between items-center text-sm font-light text-background/50">
        <p>&copy; {new Date().getFullYear()} Manasa Jewellers. All Rights Reserved.</p>
        <div className="flex space-x-6 mt-4 md:mt-0">
          <a href="#" className="hover:text-luxury-gold transition-colors">Privacy Policy</a>
          <a href="#" className="hover:text-luxury-gold transition-colors">Terms of Service</a>
        </div>
      </div>
    </footer>
  );
}
