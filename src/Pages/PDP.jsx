import React from 'react'
import ProductDetails from '../Components/ProductDetails/ProductDetails'
import { useParams } from 'react-router-dom'

const PDP = () => {
    const { id } = useParams()  // Destructure the id from useParams
    return (
        <div className='pdp-main-container'>
            <ProductDetails productid={id} />
        </div>
    )
}

export default PDP
