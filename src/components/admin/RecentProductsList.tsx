import { Gem } from "lucide-react";

interface Product {
  _id: string;
  title: string;
  price: number;
  category: string;
  createdAt: string;
  image: string | null;
}

interface RecentProductsListProps {
  products: Product[];
}

export function RecentProductsList({ products }: RecentProductsListProps) {
  if (!products || products.length === 0) {
    return (
      <div className="flex-1 flex items-center justify-center">
        <p className="text-neutral-400">No recently added products</p>
      </div>
    );
  }

  return (
    <div className="flex-1 overflow-y-auto pr-2 -mr-2">
      <div className="space-y-4">
        {products.map((product) => (
          <div key={product._id} className="flex items-center gap-4">
            <div className="h-12 w-12 rounded-lg bg-neutral-100 dark:bg-neutral-800 shrink-0 overflow-hidden flex items-center justify-center">
              {product.image ? (
                <img src={product.image} alt={product.title} className="h-full w-full object-cover" />
              ) : (
                <Gem className="text-neutral-400" size={20} />
              )}
            </div>
            <div className="flex-1 min-w-0">
              <p className="text-sm font-medium text-neutral-900 dark:text-white truncate">
                {product.title}
              </p>
              <p className="text-xs text-neutral-500 truncate">
                {product.category} • Added {new Date(product.createdAt).toLocaleDateString()}
              </p>
            </div>
            <div className="text-right shrink-0">
              <p className="text-sm font-semibold text-neutral-900 dark:text-white">
                ₹{product.price.toLocaleString()}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
