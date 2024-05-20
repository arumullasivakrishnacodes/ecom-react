import React, { createContext, useEffect, useState } from "react";

export const ShopContext = createContext(null);

const ShopContextProvider = (props) => {
    const [allProducts, setAllProducts]= useState(null)

    const fetchProducts = async () => {
        await fetch('https://ecom-api-tau.vercel.app/allproducts')
        .then(res => res.json())
        .then(data => setAllProducts(data))
    }

    useEffect(()=> {
        fetchProducts();
    })

    
    const productsData = {allProducts};

    return (
        <ShopContext.Provider value={productsData}>
            {props.children}
        </ShopContext.Provider>
    )
    
}

export default ShopContextProvider;