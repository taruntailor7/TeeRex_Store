import React from 'react'
import { Route, Routes } from "react-router-dom"
import { Checkout } from '../pages/Checkout'
import { Home } from '../pages/Home'

export const AllRoutes = () => {
  return (
    <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/checkout" element={<Checkout />}></Route>
    </Routes>
  )
}
