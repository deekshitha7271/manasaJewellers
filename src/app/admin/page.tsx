import React from "react";
import { Gem, Users, ShoppingBag, TrendingUp } from "lucide-react";
import connectDB from "@/lib/db";
import Product from "@/models/Product";

// Disable caching for this route so stats are always fresh
export const dynamic = "force-dynamic";

async function getStats() {
  await connectDB();
  const totalProducts = await Product.countDocuments();
  const featuredProducts = await Product.countDocuments({ isFeatured: true });

  return {
    totalProducts,
    featuredProducts,
  };
}

export default async function AdminDashboard() {
  const stats = await getStats();

  const statCards = [
    {
      title: "Total Products",
      value: stats.totalProducts.toString(),
      icon: Gem,
      trend: "+12% this month",
      trendUp: true,
    },
    {
      title: "Featured Items",
      value: stats.featuredProducts.toString(),
      icon: TrendingUp,
      trend: "Currently showcased",
      trendUp: true,
    },
    {
      title: "Total Orders",
      value: "142",
      icon: ShoppingBag,
      trend: "+8% this month",
      trendUp: true,
    },
    {
      title: "Active Customers",
      value: "84",
      icon: Users,
      trend: "+2% this month",
      trendUp: true,
    },
  ];

  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-3xl font-serif text-neutral-900 dark:text-white">
          Overview
        </h1>
        <p className="text-neutral-500 mt-2">
          Welcome back. Here is what is happening with your store today.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {statCards.map((stat, index) => {
          const Icon = stat.icon;
          return (
            <div
              key={index}
              className="bg-white dark:bg-[#1A1A1A] rounded-2xl p-6 border border-neutral-200 dark:border-neutral-800 shadow-sm hover:shadow-md transition-shadow"
            >
              <div className="flex items-center justify-between">
                <div className="p-3 bg-amber-50 dark:bg-amber-950/30 text-amber-700 dark:text-amber-500 rounded-xl">
                  <Icon size={24} strokeWidth={1.5} />
                </div>
              </div>
              <div className="mt-6">
                <h3 className="text-neutral-500 font-medium text-sm">
                  {stat.title}
                </h3>
                <p className="text-3xl font-semibold text-neutral-900 dark:text-white mt-1">
                  {stat.value}
                </p>
              </div>
              <div className="mt-4 flex items-center text-sm">
                <span className="text-emerald-600 dark:text-emerald-400 font-medium">
                  {stat.trend}
                </span>
              </div>
            </div>
          );
        })}
      </div>

      {/* Placeholder for Recent Activity or Charts */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2 bg-white dark:bg-[#1A1A1A] rounded-2xl p-6 border border-neutral-200 dark:border-neutral-800 shadow-sm h-96 flex items-center justify-center">
          <p className="text-neutral-400">Sales Chart Placeholder</p>
        </div>
        <div className="bg-white dark:bg-[#1A1A1A] rounded-2xl p-6 border border-neutral-200 dark:border-neutral-800 shadow-sm h-96 flex flex-col">
          <h3 className="font-semibold text-neutral-900 dark:text-white mb-4">
            Recent Activity
          </h3>
          <div className="flex-1 flex items-center justify-center">
            <p className="text-neutral-400">No recent activity</p>
          </div>
        </div>
      </div>
    </div>
  );
}
