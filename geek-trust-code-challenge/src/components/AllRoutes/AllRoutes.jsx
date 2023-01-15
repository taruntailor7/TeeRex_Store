import React from 'react'
import { Route, Routes } from "react-router-dom"
import { Checkout } from '../../pages/Checkout/Checkout'
import { Products } from '../../pages/Products/Products'

export const AllRoutes = () => {
  return (
    <Routes>
        <Route path="/" element={<Products />}></Route>
        <Route path="/checkout" element={<Checkout />}></Route>
    </Routes>
  )
}
