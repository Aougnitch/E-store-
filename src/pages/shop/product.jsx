import React from 'react'

export const Product = (props) => {
    const { id, productName, price, productImg } = props.data;
  return (
    <div className='product '> <img src={productImg} />
    <div className='description'>
    <p> <br />{ productName } </p>

    <p>  €{price} </p>

    </div>
    </div>
  )
}

export default Product
