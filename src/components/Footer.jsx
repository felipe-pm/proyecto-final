import React from 'react'
import { NavLink } from 'react-router-dom'
import nike from '../assets/nike.png'

export const Footer = () => {
  
    const activeClass = ({ isActive }) => (isActive ? "active" : "");

    return (
    <div className='footer-container'>
      <footer>
        <div className="f-left">
            <NavLink to="/home">
                <img
                    className='logo'
                    src={nike}
                    alt="logo"
                />
            </NavLink>
        </div>

        <div className="f-center">
            <NavLink className={activeClass} to="https://www.facebook.com/">
                <i class="fa-brands fa-facebook"></i>       
            </NavLink>
            <NavLink className={activeClass} to="https://www.instagram.com/">
                <i class="fa-brands fa-instagram"></i>      
            </NavLink>
            <NavLink className={activeClass} to="https://cl.linkedin.com/">
                <i class="fa-brands fa-linkedin"></i>   
            </NavLink>
            <NavLink className={activeClass} to="https://twitter.com/?lang=es">
                <i class="fa-brands fa-twitter"></i>
            </NavLink>
        </div>
        
      </footer>
    </div>
  )
}
