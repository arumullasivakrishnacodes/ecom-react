import React from 'react';
import logo from '../../img/logo.png'
import '../Login/Login.css'

const Login = () => {
    const handleLoginUser = async () => {
        let emailValidated = false;
        let passwordValidated = false;

        let email = document.getElementById('useremail').value;
        let password = document.getElementById('userpassword').value;

        var emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

        //email validation
        if (email === '') {
            document.getElementById('useremail').parentNode.querySelector('.error-msg').innerHTML = 'Please enter your email';
            document.getElementById('useremail').style.borderBottom = '1px solid var(--red)';
        } else if (!emailPattern.test(email)) {
            document.getElementById('useremail').parentNode.querySelector('.error-msg').innerHTML = 'Please enter Valid email "mailid@domain.com"';
            document.getElementById('useremail').style.borderBottom = '1px solid var(--red)';
        } else {
            document.getElementById('useremail').parentNode.querySelector('.error-msg').innerHTML = '';
            document.getElementById('useremail').style.borderBottom = '1px solid var(--light-lav)';
            emailValidated = true;
        }

        //password validation
        if (password === '') {
            document.getElementById('userpassword').parentNode.querySelector('.error-msg').innerHTML = 'Please enter your password';
            document.getElementById('userpassword').style.borderBottom = '1px solid var(--red)'; 
        } else {
            document.getElementById('userpassword').parentNode.querySelector('.error-msg').innerHTML = '';
            document.getElementById('userpassword').style.borderBottom = '1px solid var(--light-lav)';
            passwordValidated = true;
        }

        if (emailValidated && passwordValidated) {
            //run login user code
        }
    }
  return (
    <div className='login-main-container'>
        <div className="logo-container">
            <img src={logo} alt="logo" />
            <p>Shopi</p>
        </div>
        <div className="login-card-container">
            <div className="heading">Welcome to Shopi Ecommerce</div>
            <div className="input-container">
                <label htmlFor="email">Email</label>
                <input type="email" placeholder='Enter email' id='useremail' />
                <div className="error-msg"></div>
            </div>
            <div className="input-container">
                <label htmlFor="email">Password</label>
                <input type="password" placeholder='Enter password' id='userpassword' />
                <div className="error-msg"></div>
            </div>
            <button className="submit-login" onClick={handleLoginUser}>Login</button>
            <a href="/register">NewUser</a>
        </div>
    </div>
  )
}

export default Login