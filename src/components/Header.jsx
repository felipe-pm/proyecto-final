import React, { useContext } from 'react'
import { MyContext } from '../context/MyContext';
import { NavLink, useLocation, useNavigate } from 'react-router-dom';
import nike from '../assets/nike.png'

const Header = () => {

  const {state} = useLocation();
  const navigate = useNavigate();


  console.log(state)

  const onLogout = () => {
      navigate('/login',{
        replace: true,
      });
  }

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
                <NavLink className={activeClass} to="/products">
                    <i class="fa-solid fa-gift"></i>Productos
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
            
            


            {state?.logged ? (
                <div className='user'>
                    <span className='username'>Bienvenido {state?.name}</span>
                    <button className='btn-logout' onClick={onLogout}>Cerrar Sesión</button>
                </div>
            ) : (
                <>
                    <NavLink className={activeClass} to="/login">
                        <div className='right-center'>
                            <i class="fa-solid fa-right-to-bracket"></i><h1>Iniciar Sesión</h1>
                        </div>
                    </NavLink>
                    <NavLink className={activeClass} to="/register">
                        <div className='right-right'>
                            <i class="fa-solid fa-address-card"></i><h1>Registro Usuario</h1>
                        </div>
                    </NavLink>
                </>
                
            )}
            

        </header>
    </div>
  )
}

export default Header
