import React from 'react';
import '../Hero/Hero.css'
import herobanner1 from '../../img/herobanner/s-1.jpg';
import herobanner2 from '../../img/herobanner/s-2.jpg';
import offer1 from '../../img/herobanner/offer1.jpg';
import offer2 from '../../img/herobanner/offer2.jpg';
import offer3 from '../../img/herobanner/offer3.jpg';

const Hero = () => {
  return (
    <div className='hero-banner-component-container'>
        <div id="carouselExampleIndicators" class="carousel slide">
            <div class="carousel-indicators">
                <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
                <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
            </div>
            <div class="carousel-inner">
                <div class="carousel-item active">
                    <div className="row hero-banner-item-container">
                        <div className="col-4 hero-banner-item-details">
                            <h1 className='prd-name'>V-Neck</h1>
                            <div className="rating">
                                <i class="bi bi-star-fill"></i>
                                <i class="bi bi-star-fill"></i>
                                <i class="bi bi-star-fill"></i>
                                <i class="bi bi-star-fill"></i>
                                <i class="bi bi-star-half"></i>
                            </div>
                            <div className="prd-price">₹ 4999 <span className="stike-through">₹ 5999</span></div>
                            <div className="prd-variations d-flex">
                                <div class="dropdown">
                                    <button class="btn btn-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                                        Size
                                    </button>
                                    <ul class="dropdown-menu">
                                        <li><a class="dropdown-item" href="#">S</a></li>
                                        <li><a class="dropdown-item" href="#">M</a></li>
                                        <li><a class="dropdown-item" href="#">XL</a></li>
                                        <li><a class="dropdown-item" href="#">XXL</a></li>
                                    </ul>
                                </div>

                                <div class="dropdown">
                                    <button class="btn btn-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                                        Colour
                                    </button>
                                    <ul class="dropdown-menu">
                                        <li><a class="dropdown-item" href="#">Black</a></li>
                                        <li><a class="dropdown-item" href="#">Olive</a></li>
                                        <li><a class="dropdown-item" href="#">Beach</a></li>
                                        <li><a class="dropdown-item" href="#">Red</a></li>
                                        <li><a class="dropdown-item" href="#">Smoke</a></li>
                                    </ul>
                                </div>

                                <div class="dropdown">
                                    <button class="btn btn-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                                        Qty
                                    </button>
                                    <ul class="dropdown-menu">
                                        <li><a class="dropdown-item" href="#">1</a></li>
                                        <li><a class="dropdown-item" href="#">2</a></li>
                                        <li><a class="dropdown-item" href="#">3</a></li>
                                        <li><a class="dropdown-item" href="#">4</a></li>
                                        <li><a class="dropdown-item" href="#">5</a></li>
                                    </ul>
                                </div>
                            </div>
                            <div className="button-container">
                                <button>Add To Cart</button>
                                <button><i class="bi bi-heart-fill"></i></button>
                            </div>
                            <p className="sharewith">Share with <span><i class="bi bi-whatsapp"></i></span> <span><i class="bi bi-instagram"></i></span> <span><i class="bi bi-twitter"></i></span></p>
                        </div>
                        <div className="col-8 hero-banner-item-large-image">
                            <img src={herobanner1} class="d-block w-100" alt="..." />
                        </div>
                    </div>
                </div>
                <div class="carousel-item">
                    <div className="row hero-banner-item-container">
                    <div className="col-4 hero-banner-item-details">
                        <h1 className='prd-name'>Allensolly</h1>
                        <div className="rating">
                            <i class="bi bi-star-fill"></i>
                            <i class="bi bi-star-fill"></i>
                            <i class="bi bi-star-fill"></i>
                            <i class="bi bi-star-fill"></i>
                            <i class="bi bi-star-half"></i>
                        </div>
                        <div className="prd-price">₹ 8999 <span className="stike-through">₹ 9999</span></div>
                        <div className="prd-variations d-flex">
                            <div class="dropdown">
                                <button class="btn btn-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    Size
                                </button>
                                <ul class="dropdown-menu">
                                    <li><a class="dropdown-item" href="#">S</a></li>
                                    <li><a class="dropdown-item" href="#">M</a></li>
                                    <li><a class="dropdown-item" href="#">XL</a></li>
                                    <li><a class="dropdown-item" href="#">XXL</a></li>
                                </ul>
                            </div>

                            <div class="dropdown">
                                <button class="btn btn-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    Colour
                                </button>
                                <ul class="dropdown-menu">
                                    <li><a class="dropdown-item" href="#">Black</a></li>
                                    <li><a class="dropdown-item" href="#">Olive</a></li>
                                    <li><a class="dropdown-item" href="#">Beach</a></li>
                                    <li><a class="dropdown-item" href="#">Red</a></li>
                                    <li><a class="dropdown-item" href="#">Smoke</a></li>
                                </ul>
                            </div>

                            <div class="dropdown">
                                <button class="btn btn-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    Qty
                                </button>
                                <ul class="dropdown-menu">
                                    <li><a class="dropdown-item" href="#">1</a></li>
                                    <li><a class="dropdown-item" href="#">2</a></li>
                                    <li><a class="dropdown-item" href="#">3</a></li>
                                    <li><a class="dropdown-item" href="#">4</a></li>
                                    <li><a class="dropdown-item" href="#">5</a></li>
                                </ul>
                            </div>
                        </div>
                        <div className="button-container">
                            <button>Add To Cart</button>
                            <button><i class="bi bi-heart-fill"></i></button>
                        </div>
                        <p className="sharewith">Share with <span><i class="bi bi-whatsapp"></i></span> <span><i class="bi bi-instagram"></i></span> <span><i class="bi bi-twitter"></i></span></p>
                    </div>
                        <div className="col-8 hero-banner-item-large-image">
                            <img src={herobanner2} class="d-block w-100" alt="..." />
                        </div>
                    </div>
                </div>
            </div>
            <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
                <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                <span class="visually-hidden">Previous</span>
            </button>
            <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
                <span class="carousel-control-next-icon" aria-hidden="true"></span>
                <span class="visually-hidden">Next</span>
            </button>
        </div>

        <div className="offer-banner-container">
            <div className="offer-item-container">
                <div className="icon-offer-container">
                    <i class="bi bi-heart"></i>
                    <p>15% Off</p>
                </div>
                <div className="offer-detail-container">
                    <div className="offer-detail">
                        <h1>AllenSolly</h1>
                        <p>BUY ONE GET ONE</p>
                    </div>
                </div>
            </div>
            <div className="offer-item-container">
                <div className="icon-offer-container">
                    <i class="bi bi-heart"></i>
                    <p>15% Off</p>
                </div>
                <div className="offer-detail-container">
                    <div className="offer-detail">
                        <h1>V - Neck</h1>
                        <p>BUY ONE GET ONE</p>
                    </div>
                </div>
            </div>
            <div className="offer-item-container">
                <div className="icon-offer-container">
                    <i class="bi bi-heart"></i>
                    <p>15% Off</p>
                </div>
                <div className="offer-detail-container">
                    <div className="offer-detail">
                        <h1>T - Shirts</h1>
                        <p>BUY ONE GET ONE</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Hero