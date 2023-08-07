import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from '../pages/Home'
import Detail from '../pages/Detail'
import Cart from '../pages/Cart'
import { LoginPage } from '../pages/LoginPage'
import { RegisterPage } from '../pages/RegisterPage'
import { DashboardPage } from '../pages/DashboardPage'
import { PrivateRoute } from './PrivateRoute'
import Products from '../pages/Products'
import Contact from '../pages/Contact'

const AppRouter = () => {
  return (
    <>
      <Routes>
        <Route path='/' element = {<Home />} />
          <Route path='/home' element = {<Home />} />
          <Route path='/products' element = {<Products />} />
          <Route path='/cart' element = {<Cart />} />
          <Route path='/contact' element = {<Contact />} />
          <Route path='/about' />
          <Route path='/:id' element = {<Detail />} />
          <Route path='/login' element = {<LoginPage />} />
          <Route path='/register' element = {<RegisterPage />} />
          <Route path='/dashboard' element = {
            <PrivateRoute>
              <DashboardPage />
            </PrivateRoute>
          } />
      </Routes>
    </>
  )
}

export default AppRouter
