import React from 'react'
import "./Navbar.css"
import { AiOutlineShoppingCart } from 'react-icons/ai';


export const Navbar = () => {
  return (
    <div className='navbar'>
      <div className='nav'>
        <p>TeeRex Store</p>
        <div className='products'>
          <p>Products</p>
          <div><AiOutlineShoppingCart fontSize="30px" cursor="pointer"/></div>
          </div>
      </div>
    </div>
  )
}
