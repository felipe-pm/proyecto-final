import React from 'react'
import { NavLink } from 'react-router-dom'
import nike from '../assets/nike.png'
import logo from '../assets/logo.png'

export const Footer = () => {
  
    const activeClass = ({ isActive }) => (isActive ? "active" : "");

    return (
     <div className=''>
      <footer>
        <div className="f-left ">
            <NavLink to="/home">
                <img
                    className='logo'
                    src={logo}
                    alt="logo"
                />
            </NavLink>
        </div>'

        <div className="f-center">
            <NavLink className={activeClass} to="https://www.facebook.com/nike/" target='blank'>
                <i className="fa-brands fa-facebook"></i>       
            </NavLink>
            <NavLink className={activeClass} to="https://www.instagram.com/nike/" target='blank'>
                <i className="fa-brands fa-instagram"></i>      
            </NavLink>
            {/* <NavLink className={activeClass} to="https://cl.linkedin.com/" target='blank'>
                <i class="fa-brands fa-linkedin"></i>   
            </NavLink> */}
            <NavLink className={activeClass} to="https://twitter.com/Nike" target='blank'>
                <i className="fa-brands fa-twitter"></i>
            </NavLink>
        </div>
        
      </footer>
    </div> 

   
  )
}
