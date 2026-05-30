// components/ProductCard.jsx

import Link from "next/link";

export default function ProductCard({ product }) {
  return (
    <div className="rounded-2xl border bg-card text-card-foreground p-4 shadow-sm hover:shadow-lg transition-all duration-300">
      <div className="flex justify-center">
        <Link href={`/products/${product.id}`}>
          <img
            src={product.image}
            alt={product.title}
            className="h-[200px] object-contain hover:scale-105 transition-transform duration-300"
          />
        </Link>
      </div>

      <div className="mt-4">
        <h2 className="font-semibold text-lg line-clamp-2">
          {product.title}
        </h2>

        <p className="text-muted-foreground text-sm mt-2 line-clamp-3">
          {product.description}
        </p>

        <div className="flex items-center justify-between mt-4">
          <span className="text-2xl font-bold">
            ${product.price}
          </span>

          <span className="rounded-full border px-3 py-1 text-xs bg-secondary text-secondary-foreground">
            {product.category}
          </span>
        </div>
      </div>
    </div>
  );
}