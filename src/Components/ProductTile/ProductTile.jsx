import React from 'react';
import '../ProductTile/ProductTile.css'
import { Link } from 'react-router-dom';

const ProductTile = ({product}) => {

    const handleTileHover = (event) => {
        event.currentTarget.classList.add('hovered');
    }

    const handleTileHoverLeave = (event) => {
        event.currentTarget.classList.remove('hovered');
    }

    if (!product) {
        return (
            <div class="spinner-border text-primary" role="status">
                <span class="visually-hidden">Loading...</span>
            </div>
        )
    } else {
        return (
            <div className="product-tile-item" onMouseEnter={handleTileHover} onMouseLeave={handleTileHoverLeave}>
                <Link to={`/product/${product.id}`} className='prd-img'><img src={product.image} alt=""  /></Link>
                <div className="product-icons-container">
                    <div className="icon-div"><i class="bi bi-heart"></i></div>
                    <div className="icon-div"><i class="bi bi-eye"></i></div>
                    <div className="icon-div"><i class="bi bi-cart3"></i></div>
                </div>
                <div className="detail-con-div">
                    <div className="price-con">
                        <p className='prdprice'>₹ {product.sale_price} <span className="strike-through">₹ {product.list_price}</span></p>
                        <p className="rating">4.5 <i class="bi bi-star-fill"></i></p>
                    </div>

                    <div className="prd-name">{product.name}</div>
                </div>
                
            </div>
        )
    }
    
}

export default ProductTile