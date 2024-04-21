'use client'
import React from 'react'
import AddtoCart from './AddtoCart'

const ProductCard = () => {
    return (
        <div>
            <h1>Product Card</h1>
            <div className="card">
                <img src="https://via.placeholder.com/150" alt="Product" />
                <h2>Product Name</h2>
                <p>$100.00</p>
                <AddtoCart />
            </div>
        </div>
    )
}

export default ProductCard
