import React from "react";
import Link from "next/link";
import { ArrowLeft, Upload, Save } from "lucide-react";
import { createProduct } from "@/actions/admin";

export default function NewProductPage() {
  return (
    <div className="max-w-4xl mx-auto space-y-6">
      <div className="flex items-center space-x-4">
        <Link 
          href="/admin/products"
          className="p-2 rounded-full hover:bg-neutral-100 dark:hover:bg-neutral-800 transition-colors text-neutral-500"
        >
          <ArrowLeft size={20} />
        </Link>
        <div>
          <h1 className="text-2xl font-serif text-neutral-900 dark:text-white">
            Add New Product
          </h1>
        </div>
      </div>

      <form action={createProduct} className="space-y-8">
        <div className="bg-white dark:bg-[#1A1A1A] rounded-2xl border border-neutral-200 dark:border-neutral-800 p-6 sm:p-8 shadow-sm">
          <h2 className="text-lg font-medium text-neutral-900 dark:text-white mb-6">
            Basic Information
          </h2>
          
          <div className="space-y-5">
            <div>
              <label htmlFor="title" className="block text-sm font-medium text-neutral-700 dark:text-neutral-300 mb-1">
                Product Title
              </label>
              <input 
                type="text" 
                id="title" 
                name="title" 
                required
                className="w-full px-4 py-2.5 rounded-xl border border-neutral-300 dark:border-neutral-700 bg-transparent text-neutral-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-amber-500/50 focus:border-amber-500 transition-all"
                placeholder="e.g. Diamond Solitaire Ring"
              />
            </div>

            <div>
              <label htmlFor="description" className="block text-sm font-medium text-neutral-700 dark:text-neutral-300 mb-1">
                Description
              </label>
              <textarea 
                id="description" 
                name="description" 
                rows={4}
                required
                className="w-full px-4 py-2.5 rounded-xl border border-neutral-300 dark:border-neutral-700 bg-transparent text-neutral-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-amber-500/50 focus:border-amber-500 transition-all resize-none"
                placeholder="Detailed description of the jewelry piece..."
              />
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              <div>
                <label htmlFor="price" className="block text-sm font-medium text-neutral-700 dark:text-neutral-300 mb-1">
                  Price (₹)
                </label>
                <input 
                  type="number" 
                  id="price" 
                  name="price"
                  min="0"
                  step="0.01" 
                  required
                  className="w-full px-4 py-2.5 rounded-xl border border-neutral-300 dark:border-neutral-700 bg-transparent text-neutral-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-amber-500/50 focus:border-amber-500 transition-all"
                  placeholder="0.00"
                />
              </div>
              
              <div>
                <label htmlFor="category" className="block text-sm font-medium text-neutral-700 dark:text-neutral-300 mb-1">
                  Category
                </label>
                <select 
                  id="category" 
                  name="category"
                  required
                  defaultValue=""
                  className="w-full px-4 py-2.5 rounded-xl border border-neutral-300 dark:border-neutral-700 bg-transparent text-neutral-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-amber-500/50 focus:border-amber-500 transition-all"
                >
                  <option value="" disabled>Select category...</option>
                  <option value="Rings">Rings</option>
                  <option value="Necklaces">Necklaces</option>
                  <option value="Earrings">Earrings</option>
                  <option value="Bracelets">Bracelets</option>
                </select>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-white dark:bg-[#1A1A1A] rounded-2xl border border-neutral-200 dark:border-neutral-800 p-6 sm:p-8 shadow-sm">
          <h2 className="text-lg font-medium text-neutral-900 dark:text-white mb-6">
            Organization & Status
          </h2>
          
          <div className="space-y-5">
            <div>
              <label htmlFor="collectionName" className="block text-sm font-medium text-neutral-700 dark:text-neutral-300 mb-1">
                Collection
              </label>
              <select 
                id="collectionName" 
                name="collectionName"
                required
                defaultValue=""
                className="w-full px-4 py-2.5 rounded-xl border border-neutral-300 dark:border-neutral-700 bg-transparent text-neutral-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-amber-500/50 focus:border-amber-500 transition-all"
              >
                <option value="" disabled>Select collection...</option>
                <option value="Bridal">Bridal</option>
                <option value="Everyday">Everyday</option>
                <option value="Temple">Temple Jewellery</option>
                <option value="Kundan">Kundan</option>
              </select>
            </div>

            <div className="flex items-center justify-between py-2">
              <div>
                <label htmlFor="inStock" className="text-sm font-medium text-neutral-700 dark:text-neutral-300">
                  In Stock
                </label>
                <p className="text-xs text-neutral-500 mt-0.5">Is this item currently available?</p>
              </div>
              <label className="relative inline-flex items-center cursor-pointer">
                <input type="checkbox" id="inStock" name="inStock" defaultChecked className="sr-only peer" />
                <div className="w-11 h-6 bg-neutral-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-amber-300 dark:peer-focus:ring-amber-800 rounded-full peer dark:bg-neutral-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-amber-600"></div>
              </label>
            </div>

            <div className="flex items-center justify-between py-2">
              <div>
                <label htmlFor="isFeatured" className="text-sm font-medium text-neutral-700 dark:text-neutral-300">
                  Featured Product
                </label>
                <p className="text-xs text-neutral-500 mt-0.5">Show this item on the homepage.</p>
              </div>
              <label className="relative inline-flex items-center cursor-pointer">
                <input type="checkbox" id="isFeatured" name="isFeatured" className="sr-only peer" />
                <div className="w-11 h-6 bg-neutral-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-amber-300 dark:peer-focus:ring-amber-800 rounded-full peer dark:bg-neutral-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-amber-600"></div>
              </label>
            </div>
          </div>
        </div>

        <div className="bg-white dark:bg-[#1A1A1A] rounded-2xl border border-neutral-200 dark:border-neutral-800 p-6 sm:p-8 shadow-sm">
          <h2 className="text-lg font-medium text-neutral-900 dark:text-white mb-6">
            Media
          </h2>
          
          <div>
            <label htmlFor="images" className="block text-sm font-medium text-neutral-700 dark:text-neutral-300 mb-1">
              Image URLs (Comma separated)
            </label>
            <textarea 
              id="images" 
              name="images" 
              rows={3}
              className="w-full px-4 py-2.5 rounded-xl border border-neutral-300 dark:border-neutral-700 bg-transparent text-neutral-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-amber-500/50 focus:border-amber-500 transition-all resize-none"
              placeholder="https://example.com/image1.jpg, https://example.com/image2.jpg"
            />
            <p className="text-xs text-neutral-500 mt-2">
              For now, paste image URLs separated by commas. We can add direct uploads later.
            </p>
          </div>
        </div>

        <div className="flex justify-end pt-4">
          <Link 
            href="/admin/products"
            className="px-6 py-2.5 text-sm font-medium text-neutral-600 dark:text-neutral-400 hover:text-neutral-900 dark:hover:text-white transition-colors mr-4"
          >
            Cancel
          </Link>
          <button 
            type="submit"
            className="inline-flex items-center px-6 py-2.5 bg-amber-600 hover:bg-amber-700 text-white rounded-xl transition-colors font-medium text-sm shadow-sm"
          >
            <Save size={18} className="mr-2" />
            Save Product
          </button>
        </div>
      </form>
    </div>
  );
}
