import React from "react";
import Link from "next/link";
import { Plus, Edit, Trash2 } from "lucide-react";
import connectDB from "@/lib/db";
import Product from "@/models/Product";
import { deleteProduct } from "@/actions/admin";

export const dynamic = "force-dynamic";

export default async function ProductsPage() {
  await connectDB();
  const products = await Product.find({}).sort({ createdAt: -1 });

  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h1 className="text-3xl font-serif text-neutral-900 dark:text-white">
            Products
          </h1>
          <p className="text-neutral-500 mt-1 text-sm">
            Manage your inventory, collections, and pricing.
          </p>
        </div>
        <Link 
          href="/admin/products/new"
          className="inline-flex items-center justify-center px-4 py-2 bg-amber-600 hover:bg-amber-700 text-white rounded-xl transition-colors font-medium text-sm"
        >
          <Plus size={18} className="mr-2" />
          Add Product
        </Link>
      </div>

      <div className="bg-white dark:bg-[#1A1A1A] rounded-2xl border border-neutral-200 dark:border-neutral-800 overflow-hidden shadow-sm">
        <div className="overflow-x-auto">
          <table className="w-full text-left text-sm whitespace-nowrap">
            <thead className="bg-neutral-50 dark:bg-neutral-900 border-b border-neutral-200 dark:border-neutral-800">
              <tr>
                <th className="px-6 py-4 font-medium text-neutral-500">Product</th>
                <th className="px-6 py-4 font-medium text-neutral-500">Price</th>
                <th className="px-6 py-4 font-medium text-neutral-500">Collection</th>
                <th className="px-6 py-4 font-medium text-neutral-500">Status</th>
                <th className="px-6 py-4 font-medium text-neutral-500 text-right">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-neutral-200 dark:divide-neutral-800">
              {products.length === 0 ? (
                <tr>
                  <td colSpan={5} className="px-6 py-12 text-center text-neutral-500">
                    No products found. Add your first piece of jewelry.
                  </td>
                </tr>
              ) : (
                products.map((product) => (
                  <tr key={product._id.toString()} className="hover:bg-neutral-50 dark:hover:bg-neutral-800/50 transition-colors">
                    <td className="px-6 py-4">
                      <div className="flex items-center">
                        <div className="w-10 h-10 rounded-lg bg-neutral-200 dark:bg-neutral-800 overflow-hidden shrink-0 mr-3">
                          {/* eslint-disable-next-line @next/next/no-img-element */}
                          <img 
                            src={product.images[0] || "https://placehold.co/100x100?text=No+Img"} 
                            alt={product.title}
                            className="w-full h-full object-cover"
                          />
                        </div>
                        <div>
                          <div className="font-medium text-neutral-900 dark:text-white">
                            {product.title}
                          </div>
                          <div className="text-neutral-500 text-xs mt-0.5">
                            {product.category}
                          </div>
                        </div>
                      </div>
                    </td>
                    <td className="px-6 py-4 text-neutral-700 dark:text-neutral-300">
                      ₹{product.price.toLocaleString("en-IN")}
                    </td>
                    <td className="px-6 py-4">
                      <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-neutral-100 dark:bg-neutral-800 text-neutral-800 dark:text-neutral-200">
                        {product.collectionName}
                      </span>
                    </td>
                    <td className="px-6 py-4">
                      {product.inStock ? (
                        <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-emerald-100 dark:bg-emerald-950/30 text-emerald-800 dark:text-emerald-500">
                          In Stock
                        </span>
                      ) : (
                        <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-red-100 dark:bg-red-950/30 text-red-800 dark:text-red-500">
                          Out of Stock
                        </span>
                      )}
                    </td>
                    <td className="px-6 py-4 text-right space-x-2">
                      <button className="text-neutral-400 hover:text-amber-600 transition-colors">
                        <Edit size={16} />
                      </button>
                      <form action={deleteProduct.bind(null, product._id.toString())} className="inline-block">
                        <button 
                          type="submit" 
                          className="text-neutral-400 hover:text-red-600 transition-colors"
                          title="Delete"
                        >
                          <Trash2 size={16} />
                        </button>
                      </form>
                    </td>
                  </tr>
                ))
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
