import React from 'react';
import '../NotFound/NotFound.css';
import NotFoundImg from '../../img/404.png'
import { Link } from 'react-router-dom';

const NotFound = () => {
  return (
    <div className='notfound-main-container'>
        <img src={NotFoundImg} alt="" />
        <h1>Page Not Found</h1>
        <p>The page you are looking for doesn't exist or an other error occurred. Go back, or head over to choose a new direction.</p>
        <Link to='/'>Back To HomePage</Link>
    </div>
  )
}

export default NotFound