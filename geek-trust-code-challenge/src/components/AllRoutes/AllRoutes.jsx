import React from 'react'
import { Route, Routes } from "react-router-dom"
import { Cart } from '../../pages/Cart/Cart'
import { Products } from '../../pages/Products/Products'

export const AllRoutes = () => {
  return (
    <Routes>
        <Route path="/" element={<Products />}></Route>
        <Route path="/cart" element={<Cart />}></Route>
    </Routes>
  )
}
