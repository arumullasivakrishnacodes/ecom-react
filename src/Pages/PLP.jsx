import React, { useEffect, useState } from 'react'
import PlpFilters from '../Components/PlpFilters/PlpFilters'
import ProductTile from '../Components/ProductTile/ProductTile'

const PLP = () => {
    const [allProducts, setAllProducts]= useState(null)

    const fetchProducts = async () => {
        await fetch('https://ecom-api-tau.vercel.app/allproducts')
        .then(res => res.json())
        .then(data => setAllProducts(data))
    }

    useEffect(()=> {
        fetchProducts();
    })

  return (
    <div className='w-100 p-5'>
        <div className='plp-main-container row'>
            <div className="filters-main-section col-3">
                <PlpFilters />
            </div>
            <div className="products-main-section col-9">
                <div className="plp-filters-section-div w-100 d-flex">
                    <div className="applied-filters">
                        <p className='heading'>Applied Filters</p>
                        <div className="applied-filter-items">
                            <div className="applied-filter-item">Trending <span><i class="bi bi-x"></i></span></div>
                            <div className="applied-filter-item">Modern <span><i class="bi bi-x"></i></span></div>
                            <div className="applied-filter-item">XL <span><i class="bi bi-x"></i></span></div>
                            <div className="applied-filter-item">Allensolly <span><i class="bi bi-x"></i></span></div>
                        </div>
                    </div>

                    <div className="products-view">
                        <button className='grid-view active'><i class="bi bi-list"></i></button>
                        <button className='list-view'><i class="bi bi-list"></i></button>
                    </div>
                </div>
                
                <div className="productTiles-container">
                    {
                        allProducts && allProducts.length > 0 ? (
                            allProducts.map((product) => {
                                return (
                                    <ProductTile key={product.id} product={product} />
                                );
                            })
                        ) : (
                            <p>No products available.</p>
                        )
                    }
                    
                </div>
            </div>
        </div>
    </div>
    
  )
}

export default PLP