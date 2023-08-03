import React, { useContext } from 'react'
import { MyContext } from '../context/MyContext';
import { NavLink } from 'react-router-dom';
import nike from '../assets/nike.png'

const Header = () => {

  const activeClass = ({ isActive }) => (isActive ? "active" : "");
  const { countProducts } = useContext(MyContext);
  const { allProducts } = useContext(MyContext);

  return (
    <div className='header-container'>
        <header>
            <div className="left">
                <NavLink to="/home">
                    <img
                        className='logo'
                        src={nike}
                        alt="logo"
                    />
                </NavLink>
            </div>

            <div className="center">
                <NavLink className={activeClass} to="/home">
                    <i class="fa-solid fa-shop"></i>Inicio
                </NavLink>
                <NavLink className={activeClass} to="/contact">
                    <i class="fa-solid fa-address-book"></i>Contacto
                </NavLink>
                <NavLink className={activeClass} to="/about">
                <i class="fa-solid fa-users"></i>Nosotros
                </NavLink>
            </div>

            <NavLink className={activeClass} to="/cart">
                <div className='right'>
                    <i class="fa-solid fa-cart-shopping"></i>
                    <p className={`cart-num ${allProducts.length == 0 ? 'hidden' : ''}`}>{countProducts}</p>
                </div>
            </NavLink>
        </header>
    </div>
  )
}

export default Header
