import React, { useEffect, useState } from 'react';
import Update from '../../Updat/Update';
import Product from '../Product/Product';
import './Cart.css';
const Cart = () => {
    const [products, setProduct] = useState([]);
    useEffect(() => {
        fetch('./tools.JSON')
            .then(res => res.json())
            .then(data => setProduct(data));
    }, []);
    const handleAddToCart = (product) => {
        // console.log(product);
        const newCart = [...cart, product];
        setCart(newCart);
    }
    const [cart, setCart] = useState([]);

    return (
        <div className="container">
            <div className="product-container">

                {
                    products.map(product => <Product
                        key={product.key}
                        product={product}
                        handleAddToCart={handleAddToCart}
                    ></Product>)
                }
            </div>
            <div className="cart-container">

                <Update cart={cart}></Update>
            </div>
        </div>
    );
};

export default Cart;