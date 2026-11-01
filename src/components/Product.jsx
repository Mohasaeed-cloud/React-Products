import React from 'react'

export default function Product({product}) {
  return (
    <div style={{width:"300px"}} className='myBorder rounded-2 p-3 pt-5 
      d-flex flex-column gap-2'>
      <img className='img-fluid' src={product.thumbnail} alt="" />
      <h5 className='text-success'>{product.title}</h5>
      <p>{product.description}</p>
      <h6 className='text-success'>{product.price}</h6>
      <p className='text-success'>{product.category}</p>
      {!product.stock && <p className='text-danger'>Out Of Stock</p>}
      {/* {inStock == false ? <p className='text-danger'>Out Of Stock</p> : <p className='text-success'>In Stock</p>} */}
    </div>
  )
}