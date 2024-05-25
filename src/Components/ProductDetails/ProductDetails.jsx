import React, { useEffect, useState } from 'react';
import '../ProductDetails/ProductDetails.css';
import truck from '../../img/images/truck.png'
import ProductTile from '../ProductTile/ProductTile';

const ProductDetails = ({ productid }) => {  // Destructure the productid prop

    const [productData, setProductData]= useState(null)
    const [similarProducts, setSimilarProducts] = useState(null)
    const [additionaldetailsselect, setAdditionaldetSelect] = useState('ad1')

    const fetchProducts = async () => {
        await fetch(`https://ecom-api-tau.vercel.app/allproducts/${productid}`)
        .then(res => res.json())
        .then(data => setProductData(data))
    }

    const fetchSimilarProducts = async () => {
        await fetch(`https://ecom-api-tau.vercel.app/allproducts/${productid}/similar`)
        .then(res => res.json())
        .then(data => setSimilarProducts(data))
    }

    const handleAdditionalDetailsView = (e) => {
        var adddescid = e.target.dataset.id;
        setAdditionaldetSelect(adddescid)
    };
    
    

    useEffect(()=> {
        fetchProducts();
        fetchSimilarProducts();
    })

    if (!productData) {
        return (
            <div class="spinner-border text-primary" role="status">
                <span class="visually-hidden">Loading...</span>
            </div>
        )
    } else {
        return (
            <div className='productdetails-main-container'>
                <div className="row w-100 product-images-con-div">
                    <div className="col-1 d-flex flex-column mini-images-container">
                        <img src={productData.image} alt="" className='w-100' />
                        <img src={productData.image} alt="" className='w-100' />
                        <img src={productData.image} alt="" className='w-100' />
                        <img src={productData.image} alt="" className='w-100' />
                        <img src={productData.image} alt="" className='w-100' />
                        <img src={productData.image} alt="" className='w-100' />
                    </div>
                    <div className="col-5 main-image-container">
                        <img src={productData.image} alt="" className='w-100' />
                    </div>
                    <div className="col-6 d-flex flex-column justify-content-start align-items-start pdp-details-section-container">
                        <p className='productName'>{productData.name}</p>
                        <p className="productPrice">₹ {productData.sale_price} <span className="strike">₹ {productData.list_price}</span></p>
                        <p className="category">Category: <span>{productData.category}</span></p>
                        <div className="variants-container d-flex">
                            <select class="form-select" aria-label="Default select example">
                                <option selected>Colour</option>
                                <option value="1">White</option>
                                <option value="2">Black</option>
                                <option value="3">Green</option>
                                <option value="3">Yellow</option>
                                <option value="3">Beige</option>
                                <option value="3">Orange</option>
                            </select>

                            <select class="form-select" aria-label="Default select example">
                                <option selected>Size</option>
                                <option value="1">S</option>
                                <option value="2">M</option>
                                <option value="3">L</option>
                                <option value="3">XL</option>
                                <option value="3">XXL</option>
                            </select>

                            <select class="form-select" aria-label="Default select example">
                                <option selected>Qty</option>
                                <option value="1">1</option>
                                <option value="2">2</option>
                                <option value="3">3</option>
                                <option value="3">4</option>
                                <option value="3">5</option>
                            </select>
                        </div>
                        <div className="buttons-container d-flex">
                            <button className='addtowishlist'><i class="bi bi-heart"></i> Wishlist</button>
                            <button className='addtoCart'><i class="bi bi-cart3"></i> AddToCart</button>
                        </div>
                        <div className="free-shipping-container"><img src={truck} alt="truck" /> Free shipping for orders above ₹500 INR</div>
                        <div className="items-left-container">
                            <p>Hurry Up! Left <span className='stock-count'>17</span> In Stock</p>
                            <div class="progress" role="progressbar" aria-label="Basic example" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100">
                                <div class="progress-bar" style={{width: '75%'}}></div>
                            </div>
                        </div>
                        <div className="shareit-container">
                            <p>shareIt</p>
                            <div className="icons-container">
                                <i class="bi bi-whatsapp"></i>
                                <i class="bi bi-instagram"></i>
                                <i class="bi bi-twitter"></i>
                                <i class="bi bi-envelope"></i>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="product-additional-details-section">
                    <div className="product-detail-section-head">
                        <div data-id={`ad1`}  className={`head-item ${additionaldetailsselect === 'ad1' ? 'active' : ''}`} onClick={handleAdditionalDetailsView}>Description</div>
                        <div data-id={`ad2`}  className={`head-item ${additionaldetailsselect === 'ad2' ? 'active' : ''}`} onClick={handleAdditionalDetailsView}>Specifications</div>
                        <div data-id={`ad3`}  className={`head-item ${additionaldetailsselect === 'ad3' ? 'active' : ''}`} onClick={handleAdditionalDetailsView}>Size Guide</div>
                        <div data-id={`ad4`}  className={`head-item ${additionaldetailsselect === 'ad4' ? 'active' : ''}`} onClick={handleAdditionalDetailsView}>Q & A</div>
                        <div data-id={`ad5`}  className={`head-item ${additionaldetailsselect === 'ad5' ? 'active' : ''}`} onClick={handleAdditionalDetailsView}>Reviews</div>
                    </div>

                    <div className={`additional-details-item-contents-storage ${additionaldetailsselect === 'ad1' ? '' : 'd-none'}`} id='ad1'>Description</div>
                    <div className={`additional-details-item-contents-storage ${additionaldetailsselect === 'ad2' ? '' : 'd-none'}`} id='ad2'>Specifications</div>
                    <div className={`additional-details-item-contents-storage ${additionaldetailsselect === 'ad3' ? '' : 'd-none'}`} id='ad3'>Size</div>
                    <div className={`additional-details-item-contents-storage ${additionaldetailsselect === 'ad4' ? '' : 'd-none'}`} id='ad4'>Q&A</div>
                    <div className={`additional-details-item-contents-storage ${additionaldetailsselect === 'ad5' ? '' : 'd-none'}`} id='ad5'>Reviews</div>
                </div>

                <div className="similar-prds-heading">SIMILAR PRODUCTS</div>
                <div className="similar-products-main-container">
                    {
                        similarProducts && similarProducts.length > 0 ? (
                            similarProducts.slice(0,4).map((product) => {
                                return (
                                    <ProductTile key={product.id} product={product} />
                                );
                            })
                        ) : (
                            <p>No similar products available.</p>
                        )
                    }
                </div>

            </div>
        )
    }
}

export default ProductDetails
