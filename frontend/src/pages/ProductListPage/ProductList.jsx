import React, { useState, useEffect } from 'react'
import './ProductList.scss'

const ProductList = () => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        fetch("http://localhost:5000/products")
            .then((res) => res.json())
            .then((data) => setProducts(data))
            .catch((error) => console.log(error));
    }, []);

    return (
        <>
            <div>
                <h1>Product List</h1>
                <div>
                    {products.map(product => (
                        <li key={product.PRODUCT_ID}>{product.PRODUCT_ID} {product.BRAND} {product.SIZE}</li>
                    ))}
                </div>
            </div>
        </>
    );
}

export default ProductList