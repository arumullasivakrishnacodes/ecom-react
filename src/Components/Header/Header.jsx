import React from 'react';
import '../Header/Header.css';
import logo from '../../img/logo.png';
import shopmenu from '../../img/cloth-category.jpg';
import furnituremenu from '../../img/furniture-category.jpg';
import footwearmenu from '../../img/footwear-category.jpg';
import electronicsmenu from '../../img/electronics-category.jpg';
import groceriesmenu from '../../img/groceries.jpg'

const Header = () => {

    const handleDropdown = (data) => {
        if (data === 'auth') {
            document.getElementById('login-dropdown').classList.toggle('dropdownanimate');
            document.getElementById('currency-dropdown').classList.remove('dropdownanimate');
            document.getElementById('home-dropdown-container').classList.remove('dropdownmenuanimate');
            document.getElementById('shop-dropdown-container').classList.remove('dropdownmenuanimate');
            document.getElementById('store-dropdown-container').classList.remove('dropdownmenuanimate');
        } else if (data === 'currency') {
            document.getElementById('currency-dropdown').classList.toggle('dropdownanimate');
            document.getElementById('login-dropdown').classList.remove('dropdownanimate');
            document.getElementById('home-dropdown-container').classList.remove('dropdownmenuanimate');
            document.getElementById('shop-dropdown-container').classList.remove('dropdownmenuanimate');
            document.getElementById('store-dropdown-container').classList.remove('dropdownmenuanimate');
        }
    }

    const handleMenuClick = (data) => {
        if (data === 'home') {
            document.getElementById('home-dropdown-container').classList.toggle('dropdownmenuanimate');
            document.getElementById('shop-dropdown-container').classList.remove('dropdownmenuanimate');
            document.getElementById('store-dropdown-container').classList.remove('dropdownmenuanimate');
            document.getElementById('login-dropdown').classList.remove('dropdownanimate');
            document.getElementById('currency-dropdown').classList.remove('dropdownanimate');
        } else if (data === 'shop') {
            document.getElementById('shop-dropdown-container').classList.toggle('dropdownmenuanimate');
            document.getElementById('home-dropdown-container').classList.remove('dropdownmenuanimate');
            document.getElementById('store-dropdown-container').classList.remove('dropdownmenuanimate');
            document.getElementById('login-dropdown').classList.remove('dropdownanimate');
            document.getElementById('currency-dropdown').classList.remove('dropdownanimate');
        } else if (data === 'store') {
            document.getElementById('store-dropdown-container').classList.toggle('dropdownmenuanimate');
            document.getElementById('shop-dropdown-container').classList.remove('dropdownmenuanimate');
            document.getElementById('home-dropdown-container').classList.remove('dropdownmenuanimate');
            document.getElementById('login-dropdown').classList.remove('dropdownanimate');
            document.getElementById('currency-dropdown').classList.remove('dropdownanimate');
        }
    }

  return (
    <div className='header-component'>
        <div className="promotion-container row">
            <div className="col-3">Shopi ecommerce always free delivery</div>
            <div className="col-3">New Customer Extra 50% Off</div>
            <div className="col-3">Offer Coupon Code: <span>SHOPI499</span></div>
            <div className="col-3 login-elements">
                <div className="login-con" onClick={() => handleDropdown('auth')}>Login/SignUp <span><i class="bi bi-chevron-down"></i></span></div>
                <div className="currency" onClick={() => handleDropdown('currency')}>Currency <span><i class="bi bi-chevron-down"></i></span></div>

                <div className="login-dropdown" id='login-dropdown'>
                    <div className="login" >Login</div>
                    <div className="signup">SignUp</div>
                </div>

                <div className="currency-dropdown" id='currency-dropdown'>
                    <div className="inr">INR</div>
                    <div className="usd">USD</div>
                </div>
            </div>
        </div>
        <div className="global-header-container row">
            <div className="logo-container col-3">
                <img src={logo} alt="logo" />
                <p>Shopi</p>
            </div>
            <div className="col-6 header-category-container">
                <div className="div-drop">
                    <p onClick={() => handleMenuClick('home')}>HOME <span><i class="bi bi-chevron-down"></i></span></p>
                    <div className="home-dropdown-container menu-dropdown-container" id='home-dropdown-container'>
                        <div className="category-item">
                            <img src={shopmenu} alt="shopmenu" />
                            <p>SHOP</p>
                        </div>
                        <div className="category-item">
                            <img src={furnituremenu} alt="shopmenu" />
                            <p>FURNITURE</p>
                        </div>
                        <div className="category-item">
                            <img src={footwearmenu} alt="shopmenu" />
                            <p>FOOT WEAR</p>
                        </div>
                        <div className="category-item">
                            <img src={electronicsmenu} alt="shopmenu" />
                            <p>ELECTRONICS</p>
                        </div>
                        <div className="category-item">
                            <img src={groceriesmenu} alt="shopmenu" />
                            <p>GROCERIES</p>
                        </div>
                    </div>
                </div>

                <div className="div-drop">
                    <p onClick={() => handleMenuClick('shop')}>SHOP <span><i class="bi bi-chevron-down"></i></span></p>
                    <div className="shop-dropdown-container menu-dropdown-container" id='shop-dropdown-container'>
                        <div className="category-item">
                            <img src={shopmenu} alt="shopmenu" />
                            <p>SHOP</p>
                        </div>
                        <div className="category-item">
                            <img src={furnituremenu} alt="shopmenu" />
                            <p>FURNITURE</p>
                        </div>
                        <div className="category-item">
                            <img src={footwearmenu} alt="shopmenu" />
                            <p>FOOT WEAR</p>
                        </div>
                        <div className="category-item">
                            <img src={electronicsmenu} alt="shopmenu" />
                            <p>ELECTRONICS</p>
                        </div>
                        <div className="category-item">
                            <img src={groceriesmenu} alt="shopmenu" />
                            <p>GROCERIES</p>
                        </div>
                    </div>
                </div>

                <div className="div-drop">
                    <p onClick={() => handleMenuClick('store')}>STORE <span><i class="bi bi-chevron-down"></i></span></p>
                    <div className="store-dropdown-container menu-dropdown-container" id='store-dropdown-container'>
                        <div className="category-item">
                            <img src={shopmenu} alt="shopmenu" />
                            <p>SHOP</p>
                        </div>
                        <div className="category-item">
                            <img src={furnituremenu} alt="shopmenu" />
                            <p>FURNITURE</p>
                        </div>
                        <div className="category-item">
                            <img src={footwearmenu} alt="shopmenu" />
                            <p>FOOT WEAR</p>
                        </div>
                        <div className="category-item">
                            <img src={electronicsmenu} alt="shopmenu" />
                            <p>ELECTRONICS</p>
                        </div>
                        <div className="category-item">
                            <img src={groceriesmenu} alt="shopmenu" />
                            <p>GROCERIES</p>
                        </div>
                    </div>
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