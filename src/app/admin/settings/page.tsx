import React from "react";
import { Save } from "lucide-react";

export default function SettingsPage() {
  return (
    <div className="max-w-4xl space-y-8">
      <div>
        <h1 className="text-3xl font-serif text-neutral-900 dark:text-white">
          Settings
        </h1>
        <p className="text-neutral-500 mt-2">
          Manage your store preferences and account settings.
        </p>
      </div>

      <div className="bg-white dark:bg-[#1A1A1A] rounded-2xl border border-neutral-200 dark:border-neutral-800 p-6 sm:p-8 shadow-sm">
        <h2 className="text-lg font-medium text-neutral-900 dark:text-white mb-6">
          General Information
        </h2>
        
        <form className="space-y-5">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            <div>
              <label htmlFor="storeName" className="block text-sm font-medium text-neutral-700 dark:text-neutral-300 mb-1">
                Store Name
              </label>
              <input 
                type="text" 
                id="storeName" 
                defaultValue="Manasa Jewellers"
                className="w-full px-4 py-2.5 rounded-xl border border-neutral-300 dark:border-neutral-700 bg-transparent text-neutral-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-amber-500/50 focus:border-amber-500 transition-all"
              />
            </div>
            
            <div>
              <label htmlFor="contactEmail" className="block text-sm font-medium text-neutral-700 dark:text-neutral-300 mb-1">
                Contact Email
              </label>
              <input 
                type="email" 
                id="contactEmail" 
                defaultValue="contact@manasajewellers.com"
                className="w-full px-4 py-2.5 rounded-xl border border-neutral-300 dark:border-neutral-700 bg-transparent text-neutral-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-amber-500/50 focus:border-amber-500 transition-all"
              />
            </div>
          </div>
          
          <div>
            <label htmlFor="storeDescription" className="block text-sm font-medium text-neutral-700 dark:text-neutral-300 mb-1">
              Store Description
            </label>
            <textarea 
              id="storeDescription" 
              rows={3}
              defaultValue="Premium jewelry store specializing in fine diamonds, gold, and bespoke pieces."
              className="w-full px-4 py-2.5 rounded-xl border border-neutral-300 dark:border-neutral-700 bg-transparent text-neutral-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-amber-500/50 focus:border-amber-500 transition-all resize-none"
            />
          </div>
          
          <div className="flex justify-end pt-4">
            <button 
              type="button"
              className="inline-flex items-center px-6 py-2.5 bg-amber-600 hover:bg-amber-700 text-white rounded-xl transition-colors font-medium text-sm shadow-sm"
            >
              <Save size={18} className="mr-2" />
              Save Changes
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
