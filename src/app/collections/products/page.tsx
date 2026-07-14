import React from 'react';
import connectDB from '@/lib/db';
import Product from '@/models/Product';
import Image from 'next/image';
import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';

// Force dynamic rendering so the page always fetches the latest products
export const dynamic = 'force-dynamic';

export default async function ProductsPage() {
  await connectDB();
  // Fetch all in-stock products
  const products = await Product.find({ inStock: true }).sort({ createdAt: -1 });

  return (
    <main className="min-h-screen bg-[#0a0a0a] text-white">
      <Navbar />
      
      <div className="pt-40 pb-24 px-6 md:px-12 container mx-auto">
        <h1 className="font-serif text-5xl md:text-7xl mb-4">
          Our <span className="italic font-light text-luxury-gold">Collections</span>
        </h1>
        <p className="text-luxury-ivory/60 uppercase tracking-[0.2em] text-xs sm:text-sm mb-16">
          Premium 1-Gram Gold & Imitation Jewellery
        </p>
        
        {products.length === 0 ? (
          <div className="py-32 text-center text-luxury-ivory/40 border border-luxury-ivory/10 rounded-2xl">
            <p className="text-lg">No products available at the moment.</p>
            <p className="text-sm mt-2">Please check back later as we update our catalog.</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-8 gap-y-12">
            {products.map((product) => (
              <div key={product._id.toString()} className="group cursor-pointer">
                <div className="relative aspect-[3/4] overflow-hidden bg-[#111] mb-6">
                  <Image 
                    src={product.images[0] || "https://placehold.co/600x800?text=No+Image"}
                    alt={product.title}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-1000 ease-out"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                  />
                  {product.isFeatured && (
                    <div className="absolute top-4 left-4 bg-luxury-gold text-black text-[10px] font-bold uppercase tracking-widest px-3 py-1 shadow-lg">
                      Featured
                    </div>
                  )}
                  {/* Hover Overlay */}
                  <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center">
                    <span className="border border-white/50 text-white px-6 py-2 uppercase tracking-widest text-xs backdrop-blur-sm">
                      View Details
                    </span>
                  </div>
                </div>
                
                <h3 className="font-serif text-xl md:text-2xl text-luxury-ivory group-hover:text-luxury-gold transition-colors line-clamp-1">
                  {product.title}
                </h3>
                <div className="flex justify-between items-center mt-3">
                  <p className="text-luxury-ivory/50 text-xs uppercase tracking-widest">
                    {product.category || product.collectionName || 'Jewellery'}
                  </p>
                  <p className="text-luxury-gold font-medium">
                    ₹{product.price.toLocaleString('en-IN')}
                  </p>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>

      <Footer />
    </main>
  );
}
