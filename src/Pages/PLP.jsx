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
                            <>
                                <div class="card w-100" aria-hidden="true">
                                    <div class="card-img-top"></div>
                                    <div class="card-body">
                                        <h5 class="card-title placeholder-glow">
                                        <span class="placeholder col-6"></span>
                                        </h5>
                                        <p class="card-text placeholder-glow">
                                        <span class="placeholder col-7"></span>
                                        <span class="placeholder col-4"></span>
                                        <span class="placeholder col-4"></span>
                                        <span class="placeholder col-6"></span>
                                        <span class="placeholder col-8"></span>
                                        </p>
                                        <a class="btn btn-primary disabled placeholder col-6" aria-disabled="true"></a>
                                    </div>
                                </div>
                                <div class="card w-100" aria-hidden="true">
                                    <div class="card-img-top"></div>
                                    <div class="card-body">
                                        <h5 class="card-title placeholder-glow">
                                        <span class="placeholder col-6"></span>
                                        </h5>
                                        <p class="card-text placeholder-glow">
                                        <span class="placeholder col-7"></span>
                                        <span class="placeholder col-4"></span>
                                        <span class="placeholder col-4"></span>
                                        <span class="placeholder col-6"></span>
                                        <span class="placeholder col-8"></span>
                                        </p>
                                        <a class="btn btn-primary disabled placeholder col-6" aria-disabled="true"></a>
                                    </div>
                                </div>
                                <div class="card w-100" aria-hidden="true">
                                    <div class="card-img-top"></div>
                                    <div class="card-body">
                                        <h5 class="card-title placeholder-glow">
                                        <span class="placeholder col-6"></span>
                                        </h5>
                                        <p class="card-text placeholder-glow">
                                        <span class="placeholder col-7"></span>
                                        <span class="placeholder col-4"></span>
                                        <span class="placeholder col-4"></span>
                                        <span class="placeholder col-6"></span>
                                        <span class="placeholder col-8"></span>
                                        </p>
                                        <a class="btn btn-primary disabled placeholder col-6" aria-disabled="true"></a>
                                    </div>
                                </div>
                                <div class="card w-100" aria-hidden="true">
                                    <div class="card-img-top"></div>
                                    <div class="card-body">
                                        <h5 class="card-title placeholder-glow">
                                        <span class="placeholder col-6"></span>
                                        </h5>
                                        <p class="card-text placeholder-glow">
                                        <span class="placeholder col-7"></span>
                                        <span class="placeholder col-4"></span>
                                        <span class="placeholder col-4"></span>
                                        <span class="placeholder col-6"></span>
                                        <span class="placeholder col-8"></span>
                                        </p>
                                        <a class="btn btn-primary disabled placeholder col-6" aria-disabled="true"></a>
                                    </div>
                                </div>
                                <div class="card w-100" aria-hidden="true">
                                    <div class="card-img-top"></div>
                                    <div class="card-body">
                                        <h5 class="card-title placeholder-glow">
                                        <span class="placeholder col-6"></span>
                                        </h5>
                                        <p class="card-text placeholder-glow">
                                        <span class="placeholder col-7"></span>
                                        <span class="placeholder col-4"></span>
                                        <span class="placeholder col-4"></span>
                                        <span class="placeholder col-6"></span>
                                        <span class="placeholder col-8"></span>
                                        </p>
                                        <a class="btn btn-primary disabled placeholder col-6" aria-disabled="true"></a>
                                    </div>
                                </div>
                                <div class="card w-100" aria-hidden="true">
                                    <div class="card-img-top"></div>
                                    <div class="card-body">
                                        <h5 class="card-title placeholder-glow">
                                        <span class="placeholder col-6"></span>
                                        </h5>
                                        <p class="card-text placeholder-glow">
                                        <span class="placeholder col-7"></span>
                                        <span class="placeholder col-4"></span>
                                        <span class="placeholder col-4"></span>
                                        <span class="placeholder col-6"></span>
                                        <span class="placeholder col-8"></span>
                                        </p>
                                        <a class="btn btn-primary disabled placeholder col-6" aria-disabled="true"></a>
                                    </div>
                                </div>
                                <div class="card w-100" aria-hidden="true">
                                    <div class="card-img-top"></div>
                                    <div class="card-body">
                                        <h5 class="card-title placeholder-glow">
                                        <span class="placeholder col-6"></span>
                                        </h5>
                                        <p class="card-text placeholder-glow">
                                        <span class="placeholder col-7"></span>
                                        <span class="placeholder col-4"></span>
                                        <span class="placeholder col-4"></span>
                                        <span class="placeholder col-6"></span>
                                        <span class="placeholder col-8"></span>
                                        </p>
                                        <a class="btn btn-primary disabled placeholder col-6" aria-disabled="true"></a>
                                    </div>
                                </div>
                                <div class="card w-100" aria-hidden="true">
                                    <div class="card-img-top"></div>
                                    <div class="card-body">
                                        <h5 class="card-title placeholder-glow">
                                        <span class="placeholder col-6"></span>
                                        </h5>
                                        <p class="card-text placeholder-glow">
                                        <span class="placeholder col-7"></span>
                                        <span class="placeholder col-4"></span>
                                        <span class="placeholder col-4"></span>
                                        <span class="placeholder col-6"></span>
                                        <span class="placeholder col-8"></span>
                                        </p>
                                        <a class="btn btn-primary disabled placeholder col-6" aria-disabled="true"></a>
                                    </div>
                                </div>
                                <div class="card w-100" aria-hidden="true">
                                    <div class="card-img-top"></div>
                                    <div class="card-body">
                                        <h5 class="card-title placeholder-glow">
                                        <span class="placeholder col-6"></span>
                                        </h5>
                                        <p class="card-text placeholder-glow">
                                        <span class="placeholder col-7"></span>
                                        <span class="placeholder col-4"></span>
                                        <span class="placeholder col-4"></span>
                                        <span class="placeholder col-6"></span>
                                        <span class="placeholder col-8"></span>
                                        </p>
                                        <a class="btn btn-primary disabled placeholder col-6" aria-disabled="true"></a>
                                    </div>
                                </div>
                                <div class="card w-100" aria-hidden="true">
                                    <div class="card-img-top"></div>
                                    <div class="card-body">
                                        <h5 class="card-title placeholder-glow">
                                        <span class="placeholder col-6"></span>
                                        </h5>
                                        <p class="card-text placeholder-glow">
                                        <span class="placeholder col-7"></span>
                                        <span class="placeholder col-4"></span>
                                        <span class="placeholder col-4"></span>
                                        <span class="placeholder col-6"></span>
                                        <span class="placeholder col-8"></span>
                                        </p>
                                        <a class="btn btn-primary disabled placeholder col-6" aria-disabled="true"></a>
                                    </div>
                                </div>
                                <div class="card w-100" aria-hidden="true">
                                    <div class="card-img-top"></div>
                                    <div class="card-body">
                                        <h5 class="card-title placeholder-glow">
                                        <span class="placeholder col-6"></span>
                                        </h5>
                                        <p class="card-text placeholder-glow">
                                        <span class="placeholder col-7"></span>
                                        <span class="placeholder col-4"></span>
                                        <span class="placeholder col-4"></span>
                                        <span class="placeholder col-6"></span>
                                        <span class="placeholder col-8"></span>
                                        </p>
                                        <a class="btn btn-primary disabled placeholder col-6" aria-disabled="true"></a>
                                    </div>
                                </div>
                                <div class="card w-100" aria-hidden="true">
                                    <div class="card-img-top"></div>
                                    <div class="card-body">
                                        <h5 class="card-title placeholder-glow">
                                        <span class="placeholder col-6"></span>
                                        </h5>
                                        <p class="card-text placeholder-glow">
                                        <span class="placeholder col-7"></span>
                                        <span class="placeholder col-4"></span>
                                        <span class="placeholder col-4"></span>
                                        <span class="placeholder col-6"></span>
                                        <span class="placeholder col-8"></span>
                                        </p>
                                        <a class="btn btn-primary disabled placeholder col-6" aria-disabled="true"></a>
                                    </div>
                                </div>
                                <div class="card w-100" aria-hidden="true">
                                    <div class="card-img-top"></div>
                                    <div class="card-body">
                                        <h5 class="card-title placeholder-glow">
                                        <span class="placeholder col-6"></span>
                                        </h5>
                                        <p class="card-text placeholder-glow">
                                        <span class="placeholder col-7"></span>
                                        <span class="placeholder col-4"></span>
                                        <span class="placeholder col-4"></span>
                                        <span class="placeholder col-6"></span>
                                        <span class="placeholder col-8"></span>
                                        </p>
                                        <a class="btn btn-primary disabled placeholder col-6" aria-disabled="true"></a>
                                    </div>
                                </div>
                                <div class="card w-100" aria-hidden="true">
                                    <div class="card-img-top"></div>
                                    <div class="card-body">
                                        <h5 class="card-title placeholder-glow">
                                        <span class="placeholder col-6"></span>
                                        </h5>
                                        <p class="card-text placeholder-glow">
                                        <span class="placeholder col-7"></span>
                                        <span class="placeholder col-4"></span>
                                        <span class="placeholder col-4"></span>
                                        <span class="placeholder col-6"></span>
                                        <span class="placeholder col-8"></span>
                                        </p>
                                        <a class="btn btn-primary disabled placeholder col-6" aria-disabled="true"></a>
                                    </div>
                                </div>
                            </>
                            
                        )
                    }
                    
                </div>
            </div>
        </div>
    </div>
    
  )
}

export default PLP