import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from '../pages/Home'
import Detail from '../pages/Detail'
import Cart from '../pages/Cart'

const AppRouter = () => {
  return (
    <>
      <Routes>
        <Route path='/home' element = {<Home />} />
        <Route path='/cart' element = {<Cart />} />
        <Route path='/contact' />
        <Route path='/about' />
        <Route path='/:id' element = {<Detail />} />
      </Routes>
    </>
  )
}

export default AppRouter
