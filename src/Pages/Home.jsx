import React, { useContext } from 'react'
import Hero from '../Components/Hero/Hero'
import { ShopContext } from '../Context/ShopContext'
import ProductTile from '../Components/ProductTile/ProductTile';
import Slider from 'react-slick';
import jeanscat from '../img/images/categories/jeans.jpg';
import bagscat from '../img/images/categories/bags.jpg';
import fashioncat from '../img/images/categories/fashion.jpg';
import jacketcat from '../img/images/categories/jacket.jpg';
import tshirtcat from '../img/images/categories/t-shirts.jpg';

const Home = () => {
  const {allProducts} = useContext(ShopContext);

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1
  };

  return (
    <div className='home-page-main-container'>
      <Hero />
      <div className="new-arrivals-main-container">
        <div className="heading-sec">
          <h3>New Arrival</h3>
          <p>Our Collection</p>
        </div>
        <Slider {...settings}>
        {
            allProducts && allProducts.length > 0 ? (
                allProducts.slice(0,10).map((product) => {
                    return (
                        <ProductTile key={product.id} product={product} />
                    );
                })
            ) : (
                <div className='d-flex'>
                </div>
                
            )
        }
        </Slider>
      </div>
      
      <div className='d-flex flex-column categories-list-div'>
        <div className="heading-sec">
          <h3>Top Categories</h3>
          <p>Our Collection</p>
        </div>
        <div className="our-categories-main-section">
          <img src={jeanscat} alt="" />
          <img src={bagscat} alt="" />
          <img src={fashioncat} alt="" />
          <img src={jacketcat} alt="" />
          <img src={tshirtcat} alt="" />
        </div>
        <div className="desc-of-img">
          <p>Jeans</p>
          <p>Bags</p>
          <p>Fashion</p>
          <p>Jacket</p>
          <p>T shirts</p>
        </div>
      </div>

      <div className="deal-of-the-day-con">
        <div className="deal-item">
          <div className="offer-display-card">
            <h3>Shirt</h3>
            <p>BUY ONE GET ONE FREE</p>
          </div>
        </div>
      </div>
      
    </div>
  )
}

export default Home