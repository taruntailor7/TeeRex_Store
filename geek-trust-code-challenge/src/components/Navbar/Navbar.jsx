import React from 'react'
import "./Navbar.css"
import { AiOutlineShoppingCart } from 'react-icons/ai';
import {NavLink} from  "react-router-dom";


export const Navbar = () => {
  return (
    <div className='navbar'>
      <div className='nav'>
        <NavLink to="/"><p>TeeRex Store</p></NavLink>
        <div>
          <NavLink to="/"><p>Products</p></NavLink>
          <div><NavLink to="/cart"><AiOutlineShoppingCart fontSize="30px" cursor="pointer"/></NavLink></div>
        </div>
      </div>
    </div>
  )
}
