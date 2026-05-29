// import { api } from '@/lib/api'
import ProductCard from '@/components/ProductCard'
import React from 'react'

const page = async () => {
    let products = await fetch('https://fakestoreapi.com/products').then(res => res.json())
    console.log(products)
    console.log(products)
    return (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 p-6">
            {products.map((product) => (
                <ProductCard key={product.id} product={product} />
            ))}
        </div>
    )
}

export default page
