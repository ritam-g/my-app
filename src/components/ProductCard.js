// components/ProductCard.jsx

import Link from "next/link";

export default function ProductCard({ product }) {
    return (
        <div className="border rounded-2xl p-4 shadow hover:shadow-lg transition">

            <div className="flex justify-center">
                <Link href={`/products/${product.id}`}>
                    <img
                        src={product.image}
                        alt={product.title}
                        className="h-[200px] object-contain"
                    />
                </Link>
            </div>

            <div className="mt-4">
                <h2 className="font-bold text-lg line-clamp-2">
                    {product.title}
                </h2>

                <p className="text-gray-500 text-sm mt-2 line-clamp-3">
                    {product.description}
                </p>

                <div className="flex items-center justify-between mt-4">
                    <span className="text-2xl font-bold text-green-600">
                        ${product.price}
                    </span>

                    <span className="bg-black text-white px-3 py-1 rounded-full text-xs">
                        {product.category}
                    </span>
                </div>
            </div>
        </div>
    );
}