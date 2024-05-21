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

  var countDownDate = new Date('Jun 29, 2024 00:00:00').getTime();
  var x = setInterval(() => {
    var now = new Date().getTime();
    var distance = countDownDate - now;

    if (distance <= 0) {
        clearInterval(x);

        // Set all countdown elements to zero
        document.getElementById('days-count').innerHTML = '00';
        document.getElementById('hours-count').innerHTML = '00';
        document.getElementById('minutes-count').innerHTML = '00';
        document.getElementById('seconds-count').innerHTML = '00';
    } else {
        var days = Math.floor(distance / (1000 * 60 * 60 * 24));
        var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        var seconds = Math.floor((distance % (1000 * 60)) / 1000);

        document.getElementById('days-count').innerHTML = days;
        document.getElementById('hours-count').innerHTML = hours;
        document.getElementById('minutes-count').innerHTML = minutes;
        document.getElementById('seconds-count').innerHTML = seconds;
    }
  }, 1000);


  

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
          <div className="deal-of-the-day-countdown">
            <h3>DEAL OF THE DAY</h3>
            <p>AllenSolly</p>
            <div className="count-down-container">
              <div className="days">
                <div className="count" id='days-count'>00</div>
                <div className="label-ofcount">Days</div>
              </div>
              <div className="days">
                <div className="count" id='hours-count'>00</div>
                <div className="label-ofcount">Hours</div>
              </div>
              <div className="days">
                <div className="count" id='minutes-count'>00</div>
                <div className="label-ofcount">Minutes</div>
              </div>
              <div className="days">
                <div className="count" id='seconds-count'>00</div>
                <div className="label-ofcount">Seconds</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="offers-for-you-container">
        <div className="heading-sec">
          <h3>New Offers</h3>
          <p>Just For You</p>
        </div>
        <div className="row w-100 h-100">
          <div className="col-6 men-offer h-100 d-flex justify-content-end align-items-center">
            <div className="d-flex flex-column justify-content-end align-items-center offer-details-div">
              <h3>AllenSolly</h3>
              <p className='text-end'>₹ 2999</p>
              <div className="shop ml-auto">Shop Now</div>
            </div>
          </div>
          <div className="col-6 h-100">
            <div className="col-12 jeans-offer h-50 d-flex justify-content-start align-items-center">
            <div className="d-flex flex-column justify-content-end align-items-center offer-details-div" style={{marginLeft:'18px', }}>
              <h3>V - Neck</h3>
              <p className='text-start'>₹ 1999</p>
              <div className="shop shop2">Shop Now</div>
            </div>
            </div>
            <div className="col-12 w-100 h-50 d-grid" style={{columnGap: '12px', gridTemplateColumns:'1fr 1fr'}}>
              <div className="tshirts-offer h-100 d-flex justify-content-center align-items-end">
              <div className="offer-display-card">
                <h3>T SHIRT</h3>
                <p>BUY ONE GET ONE FREE</p>
              </div>
              </div>
              <div className="hoodie-offer h-100 d-flex justify-content-center align-items-end">
              <div className="offer-display-card">
                <h3>HOODIE</h3>
                <p>BUY ONE GET ONE FREE</p>
              </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
    </div>
  )
}

export default Home