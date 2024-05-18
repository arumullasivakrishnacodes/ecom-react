import React from 'react'
import PlpFilters from '../Components/PlpFilters/PlpFilters'
import ProductTile from '../Components/ProductTile/ProductTile'

const PLP = () => {
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
                    <ProductTile />
                </div>
            </div>
        </div>
    </div>
    
  )
}

export default PLP