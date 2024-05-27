import React, { useContext } from 'react';
import '../Wishlist/Wishlist.css'
import { ShopContext } from '../../Context/ShopContext';

const Wishlist = () => {

    const {allProducts} = useContext(ShopContext)

  return (
    <div className='wishlist-page-main-container'>
        <div className="heading">Wishlist</div>
        <div className="wishlist-items-grid-container">
        {
            allProducts && allProducts.length > 0 ? (
                allProducts.map((product) => {
                    return (
                        <div className='wishlist-item-container'>
                            <img src={product.image} alt="" className='productImage'/>
                            <p className="productName">{product.name}</p>
                            <p className="producCategory">{product.category}</p>
                            <p className="productPrice">₹ {product.sale_price}</p>
                            <p className="product-Variant">XL</p>
                            <button className="addtoCart"><i class="bi bi-cart3"></i></button>
                            <button className="remove-wishlist"><i class="bi bi-x-lg"></i></button>
                        </div>
                    );
                })
            ) : (
                <p>Fetching Details...</p>
            )
        }
            
        </div>
    </div>
  )
}

export default Wishlist