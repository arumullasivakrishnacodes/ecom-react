import React from 'react'

const ProductDetails = ({ productid }) => {  // Destructure the productid prop

  return (
    <div className='productdetails-main-container'>
        {productid}
    </div>
  )
}

export default ProductDetails
