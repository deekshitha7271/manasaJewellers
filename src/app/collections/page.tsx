import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import Image from "next/image";

const allCollections = [
  { title: "Heritage Masterpieces", image: "/manasa jewellers collection/item-1.jpeg" },
  { title: "Bridal Elegance", image: "/manasa jewellers collection/item-2.jpeg" },
  { title: "Temple Ornaments", image: "/manasa jewellers collection/item-3.jpeg" },
  { title: "Modern Classics", image: "/manasa jewellers collection/item-4.jpeg" },
  { title: "Eternal Gold", image: "/manasa jewellers collection/item-5.jpeg" },
  { title: "Signature Series", image: "/manasa jewellers collection/item-6.jpeg" }
];

export default function CollectionsPage() {
  return (
    <main className="min-h-screen bg-[#0c0c0c] text-luxury-ivory selection:bg-luxury-gold selection:text-white">
      <Navbar />
      
      <section className="pt-40 pb-20 px-6 md:px-12 text-center max-w-4xl mx-auto">
        <h4 className="uppercase tracking-[0.4em] text-luxury-gold text-xs mb-6 font-semibold">
          The Complete Archive
        </h4>
        <h1 className="font-serif text-5xl md:text-7xl leading-tight mb-8">
          Our Full <span className="italic font-light text-luxury-gold">Collection.</span>
        </h1>
        <p className="text-luxury-ivory/60 font-light text-lg leading-relaxed">
          Explore the entirety of our masterpieces. Each piece is crafted with unparalleled dedication, ensuring that our legacy of trust and artistry lives on in your family for generations.
        </p>
      </section>

      <section className="pb-40 px-6 md:px-12 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
          {allCollections.map((item, index) => (
            <div key={index} className="group cursor-pointer">
              <div className="relative h-[500px] w-full overflow-hidden mb-6 bg-luxury-black">
                <Image 
                  src={item.image} 
                  alt={item.title}
                  fill
                  className="object-cover object-center grayscale-[20%] group-hover:grayscale-0 group-hover:scale-105 transition-all duration-1000"
                  sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                />
              </div>
              <div className="flex justify-between items-center border-b border-luxury-ivory/20 pb-4 group-hover:border-luxury-gold transition-colors duration-500">
                <h3 className="font-serif text-2xl group-hover:text-luxury-gold transition-colors duration-500">{item.title}</h3>
                <span className="text-luxury-ivory/40 text-sm font-light">0{index + 1}</span>
              </div>
            </div>
          ))}
        </div>
      </section>

      <Footer />
    </main>
  );
}
