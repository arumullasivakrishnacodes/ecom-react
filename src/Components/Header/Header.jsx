import React from 'react';
import '../Header/Header.css';
import logo from '../../img/logo.png';

const Header = () => {

  return (
    <div className='header-component'>
        <div className="promotion-container row">
            <div className="col-3">Shopi always free delivery</div>
            <div className="col-3">New Customer Extra 50% Off</div>
            <div className="col-3">Offer Coupon Code: <span>SHOPI499</span></div>
            <div className="col-3 login-elements">

                <div class="dropdown">
                    <button class="btn btn-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                        Login/SignUp
                    </button>
                    <ul class="dropdown-menu">
                        <li><a class="dropdown-item" href="/login">Login</a></li>
                        <li><a class="dropdown-item" href="/register">Signup</a></li>
                    </ul>
                </div>

                <div class="dropdown">
                    <button class="btn btn-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                        Currency
                    </button>
                    <ul class="dropdown-menu">
                        <li><a class="dropdown-item" href="/">INR</a></li>
                        <li><a class="dropdown-item" href="/">USD</a></li>
                    </ul>
                </div>
            </div>
        </div>
        <div className="global-header-container">
            <div className="logo-container col-3">
                <img src={logo} alt="logo" />
                <p>Shopi</p>
            </div>
            <div className="col-6 header-category-container">
                <a href="/" className="home-global-head">Home</a>

                <div class="dropdown">
                    <button class="btn btn-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                        Shop
                    </button>
                    <ul class="dropdown-menu">
                        <li><a class="dropdown-item" href="/shop">Fashion</a></li>
                        <li><a class="dropdown-item" href="/shop">Footwear</a></li>
                        <li><a class="dropdown-item" href="/shop">Electronics</a></li>
                        <li><a class="dropdown-item" href="/shop">Furniture</a></li>
                        <li><a class="dropdown-item" href="/shop">Organic Groceries</a></li>
                    </ul>
                </div>

                <div class="dropdown">
                    <button class="btn btn-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                        Store
                    </button>
                    <ul class="dropdown-menu">
                        <li><a class="dropdown-item" href="/">Fashion</a></li>
                        <li><a class="dropdown-item" href="/">Footwear</a></li>
                        <li><a class="dropdown-item" href="/">Electronics</a></li>
                        <li><a class="dropdown-item" href="/">Furniture</a></li>
                        <li><a class="dropdown-item" href="/">Organic Groceries</a></li>
                    </ul>
                </div>

                <div class="dropdown">
                    <button class="btn btn-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                        Blog
                    </button>
                    <ul class="dropdown-menu">
                        <li><a class="dropdown-item" href="/">Fashion</a></li>
                        <li><a class="dropdown-item" href="/">Footwear</a></li>
                        <li><a class="dropdown-item" href="/">Electronics</a></li>
                        <li><a class="dropdown-item" href="/">Furniture</a></li>
                        <li><a class="dropdown-item" href="/">Organic Groceries</a></li>
                    </ul>
                </div>
            </div>
            <div className="col-3 header-icons">
                <div style={{position: 'relative'}}><i class="bi bi-search"></i></div>
                <div class="dropdown">
                    <button class="btn btn-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                        <i class="bi bi-person"></i>
                    </button>
                    <ul class="dropdown-menu">
                        <li><a class="dropdown-item" href="/login">Login</a></li>
                        <li><a class="dropdown-item" href="/register">Register</a></li>
                    </ul>
                </div>
                <div style={{position: 'relative'}}><i class="bi bi-heart"></i> <span>0</span></div>
                <div style={{position: 'relative'}}><i class="bi bi-cart3"></i> <span>0</span></div>
            </div>
        </div>
    </div>
  )
}

export default Header