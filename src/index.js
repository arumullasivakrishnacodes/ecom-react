import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../node_modules/bootstrap/dist/js/bootstrap.min.js';
import '../node_modules/slick-carousel/slick/slick-theme.css';
import '../node_modules/slick-carousel/slick/slick.css';
import '../node_modules/bootstrap-icons/font/bootstrap-icons.css'
import ShopContextProvider from './Context/ShopContext.jsx';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <ShopContextProvider>
    <App />
  </ShopContextProvider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
