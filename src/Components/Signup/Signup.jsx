import React, { useEffect, useState } from 'react';
import logo from '../../img/logo.png'
import '../Signup/Signup.css'

const Signup = () => {
    const [responseData, setResponseData] = useState([]);

    const handleRegisterUser = async () => {
        let namevalidated = false;
        let emailvalidated = false;
        let passwordvalidated = false;
        let confirmpasswordvalidated = false;
        var name = document.getElementById('username').value;
        var email = document.getElementById('useremail').value;
        var password = document.getElementById('userpassword').value;
        var confirmpassword = document.getElementById('userconfirmpassword').value;
        let responseData;

        var emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

        //name validation
        if (name === '') {
            document.getElementById('username').parentNode.querySelector('.error-msg').innerHTML = 'Please enter your name';
            document.getElementById('username').style.borderBottom = '1px solid var(--red)';
        } else {
            document.getElementById('username').parentNode.querySelector('.error-msg').innerHTML = '';
            document.getElementById('username').style.borderBottom = '1px solid var(--light-lav)';
            namevalidated = true;
        }

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
            emailvalidated = true;
        }

        //password validation
        if (password === '') {
            document.getElementById('userpassword').parentNode.querySelector('.error-msg').innerHTML = 'Please enter your password';
            document.getElementById('userpassword').style.borderBottom = '1px solid var(--red)'; 
        } else {
            document.getElementById('userpassword').parentNode.querySelector('.error-msg').innerHTML = '';
            document.getElementById('userpassword').style.borderBottom = '1px solid var(--light-lav)';
            passwordvalidated = true;
        }

        //confirm password validation
        if (confirmpassword === '' || password !== confirmpassword) {
            document.getElementById('userconfirmpassword').parentNode.querySelector('.error-msg').innerHTML = 'Password is not matching';
            document.getElementById('userconfirmpassword').style.borderBottom = '1px solid var(--red)';
        } else {
            document.getElementById('username').parentNode.querySelector('.error-msg').innerHTML = '';
            document.getElementById('username').style.borderBottom = '1px solid var(--light-lav)';
            confirmpasswordvalidated = true;
        }

        if (namevalidated && emailvalidated && passwordvalidated && confirmpasswordvalidated) {
            // run save user code here
            const userobj = {
                'name': name,
                'email': email,
                'password': password
            }

            await fetch('https://ecom-api-tau.vercel.app/register', {
                method: 'POST',
                headers: {
                    Accept: 'application/json',
                    'Content-Type':'application/json'
                },
                body: JSON.stringify(userobj)
            }).then((res) => res.json()).then((data) => {
                setResponseData(data)
            });
        }
    }

    useEffect(()=> {
        localStorage.setItem('loginUser', responseData.email)
    }, [responseData])

  return (
    <div className='signup-main-container'>
        <div className="logo-container">
            <img src={logo} alt="logo" />
            <p>Shopi</p>
        </div>
        <div className="login-card-container">
            <div className="heading">Welcome to Shopi Ecommerce</div>
            <div className="input-container">
                <label htmlFor="name">Name</label>
                <input type="text" placeholder='Enter FullName' id='username' />
                <div className="error-msg"></div>
            </div>
            <div className="input-container">
                <label htmlFor="email">Email</label>
                <input type="email" placeholder='Enter email' id='useremail' />
                <div className="error-msg"></div>
            </div>
            <div className="input-container">
                <label htmlFor="password">Password</label>
                <input type="password" placeholder='Enter password' id='userpassword' />
                <div className="error-msg"></div>
            </div>
            <div className="input-container">
                <label htmlFor="email">Confirm Password</label>
                <input type="password" placeholder='Re-enter password' id='userconfirmpassword' />
                <div className="error-msg"></div>
            </div>
            <button className="submit-login" onClick={handleRegisterUser}>Register</button>
            <a href="/login">Already User</a>
        </div>
    </div>
  )
}

export default Signup