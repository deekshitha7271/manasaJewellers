import React from "react";
import connectDB from "@/lib/db";
import Category from "@/models/Category";
import { createCategory, deleteCategory } from "@/actions/admin";
import { FolderTree, Trash2, Plus } from "lucide-react";

export default async function CategoriesPage() {
  await connectDB();
  const categories = await Category.find().sort({ createdAt: -1 });

  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <div>
          <h1 className="text-2xl font-serif text-neutral-900 dark:text-white flex items-center">
            <FolderTree className="mr-2" size={24} />
            Categories
          </h1>
          <p className="text-neutral-500 dark:text-neutral-400 mt-1">
            Manage product categories for your store.
          </p>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Add Category Form */}
        <div className="bg-white dark:bg-[#1A1A1A] rounded-2xl border border-neutral-200 dark:border-neutral-800 p-6 shadow-sm h-fit">
          <h2 className="text-lg font-medium text-neutral-900 dark:text-white mb-6">
            Add New Category
          </h2>
          <form action={createCategory} className="space-y-4">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-neutral-700 dark:text-neutral-300 mb-1">
                Category Name
              </label>
              <input 
                type="text" 
                id="name" 
                name="name" 
                required
                className="w-full px-4 py-2.5 rounded-xl border border-neutral-300 dark:border-neutral-700 bg-transparent text-neutral-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-amber-500/50 focus:border-amber-500 transition-all"
                placeholder="e.g. Necklaces"
              />
            </div>
            <div>
              <label htmlFor="description" className="block text-sm font-medium text-neutral-700 dark:text-neutral-300 mb-1">
                Description (Optional)
              </label>
              <textarea 
                id="description" 
                name="description" 
                rows={3}
                className="w-full px-4 py-2.5 rounded-xl border border-neutral-300 dark:border-neutral-700 bg-transparent text-neutral-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-amber-500/50 focus:border-amber-500 transition-all resize-none"
                placeholder="Brief description..."
              />
            </div>
            <button 
              type="submit"
              className="w-full inline-flex items-center justify-center px-6 py-2.5 bg-amber-600 hover:bg-amber-700 text-white rounded-xl transition-colors font-medium text-sm shadow-sm"
            >
              <Plus size={18} className="mr-2" />
              Add Category
            </button>
          </form>
        </div>

        {/* Categories List */}
        <div className="lg:col-span-2 space-y-4">
          {categories.length === 0 ? (
            <div className="bg-white dark:bg-[#1A1A1A] rounded-2xl border border-neutral-200 dark:border-neutral-800 p-12 text-center text-neutral-500 shadow-sm">
              <FolderTree className="mx-auto mb-4 text-neutral-400" size={48} />
              <p>No categories found.</p>
              <p className="text-sm mt-1">Create your first category using the form.</p>
            </div>
          ) : (
            categories.map((category) => (
              <div key={category._id.toString()} className="bg-white dark:bg-[#1A1A1A] rounded-2xl border border-neutral-200 dark:border-neutral-800 p-6 flex justify-between items-center shadow-sm">
                <div>
                  <h3 className="text-lg font-medium text-neutral-900 dark:text-white">
                    {category.name}
                  </h3>
                  {category.description && (
                    <p className="text-sm text-neutral-500 dark:text-neutral-400 mt-1">
                      {category.description}
                    </p>
                  )}
                </div>
                <form action={async () => {
                  "use server";
                  await deleteCategory(category._id.toString());
                }}>
                  <button 
                    type="submit"
                    className="p-2 text-red-500 hover:bg-red-50 dark:hover:bg-red-950/30 rounded-lg transition-colors"
                    title="Delete Category"
                  >
                    <Trash2 size={18} />
                  </button>
                </form>
              </div>
            ))
          )}
        </div>
      </div>
    </div>
  );
}
