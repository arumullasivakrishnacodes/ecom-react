import React, { useEffect, useState } from 'react';
import logo from '../../img/logo.png'
import '../Login/Login.css'
import { useNavigate } from 'react-router-dom';

const Login = () => {
    const [responseData, setResponseData] = useState([]);
    const [emailVal, setEmailVal] = useState('');
    const [passwordVal, setPasswordVal] = useState('');
    const navigate = useNavigate();

    const handleOnchamngeinputValue = (e) => {
        if (e.target.id === 'useremail') {
            setEmailVal(e.target.value)
        } else if (e.target.id === 'userpassword') {
            setPasswordVal(e.target.value)
        }
    }

    const handleLoginUser = async () => {
        let emailValidated = false;
        let passwordValidated = false;

        var emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

        //email validation
        if (emailVal === '') {
            document.getElementById('useremail').parentNode.querySelector('.error-msg').innerHTML = 'Please enter your email';
            document.getElementById('useremail').style.borderBottom = '1px solid var(--red)';
        } else if (!emailPattern.test(emailVal)) {
            document.getElementById('useremail').parentNode.querySelector('.error-msg').innerHTML = 'Please enter Valid email "mailid@domain.com"';
            document.getElementById('useremail').style.borderBottom = '1px solid var(--red)';
        } else {
            document.getElementById('useremail').parentNode.querySelector('.error-msg').innerHTML = '';
            document.getElementById('useremail').style.borderBottom = '1px solid var(--light-lav)';
            emailValidated = true;
        }

        //password validation
        if (passwordVal === '') {
            document.getElementById('userpassword').parentNode.querySelector('.error-msg').innerHTML = 'Please enter your password';
            document.getElementById('userpassword').style.borderBottom = '1px solid var(--red)'; 
        } else {
            document.getElementById('userpassword').parentNode.querySelector('.error-msg').innerHTML = '';
            document.getElementById('userpassword').style.borderBottom = '1px solid var(--light-lav)';
            passwordValidated = true;
        }

        if (emailValidated && passwordValidated) {
            //run login user code

            await fetch(`https://ecom-api-tau.vercel.app/users/email?email=${emailVal}`)
            .then((res) => res.json())
            .then((data) => {
                setResponseData(data)
            });
        }
    }

    useEffect(()=> {
        console.log(responseData);
        if (passwordVal !== '' && emailVal !== '' && passwordVal === responseData.password && emailVal === responseData.email) {
        
            document.getElementById('alert-message-append').innerHTML = `
                <div class="alert alert-success d-flex align-items-center" role="alert">
                    <i class="bi bi-check-circle-fill alert-icon"></i>
                    <div class='alert-message-alert'>
                    Login Successfull
                    </div>
                </div>
            `
            setTimeout(() => {
                navigate('/');
            }, 3000);

        } else if (!responseData.error && passwordVal !== '' && emailVal !== '' && (passwordVal !== responseData.password || emailVal !== responseData.email)) {
            document.getElementById('alert-message-append').innerHTML = `
                <div class="alert alert-danger d-flex align-items-center" role="alert">
                <i class="bi bi-exclamation-triangle-fill alert-icon "></i>
                <div class='alert-message-alert'>
                    Given Email and Password are not Matchnig
                </div>
            `
        } else if (responseData.error) {
            document.getElementById('alert-message-append').innerHTML = `
            <div class="alert alert-primary d-flex align-items-center" role="alert">
                <i class="bi bi-info-circle-fill alert-icon "></i>
                <div class='alert-message-alert'>
                It seems you are not registered before. Please Register to Continue
                </div>
            </div>
            `
            setTimeout(() => {
                navigate('/register');
            }, 3000);
        }
    }, [responseData])


  return (
    <div className='login-main-container'>
        <div className="alert-message-container" id='alert-message-append'></div>

        <div className="logo-container">
            <img src={logo} alt="logo" />
            <p>Shopi</p>
        </div>
        <div className="login-card-container">
            <div className="heading">Welcome to Shopi Ecommerce</div>
            <div className="input-container">
                <label htmlFor="email">Email</label>
                <input type="email" placeholder='Enter email' id='useremail' onChange={handleOnchamngeinputValue} />
                <div className="error-msg"></div>
            </div>
            <div className="input-container">
                <label htmlFor="email">Password</label>
                <input type="password" placeholder='Enter password' id='userpassword' onChange={handleOnchamngeinputValue} />
                <div className="error-msg"></div>
            </div>
            <button className="submit-login" onClick={handleLoginUser}>Login</button>
            <a href="/register">NewUser</a>
        </div>
    </div>
  )
}

export default Login