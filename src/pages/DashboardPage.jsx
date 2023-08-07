import React from 'react'
import { useLocation, useNavigate } from 'react-router-dom';

export const DashboardPage = () => {
  
  const {state} = useLocation();
  const navigate = useNavigate();

  console.log(state)


  const activeClass = ({ isActive }) => (isActive ? "active" : "");
  
  return (
    
    




    <div className="dashboard">
      {state?.logged ? (
        <div className='user'>
          <h2>Mi Dashboard - Tienda de Zapatillas</h2>
          <div className="widgets-container">
            <div className="widget sales-widget">
              <h3>Mis Compras Recientes</h3>
              <ul>
                <li>
                  <span className="shoe-name">Zapatilla Modelo A</span>
                  <span className="purchase-date">12 de Julio, 2023</span>
                </li>
                <li>
                  <span className="shoe-name">Zapatilla Modelo B</span>
                  <span className="purchase-date">10 de Julio, 2023</span>
                </li>
              </ul>
            </div>
            <div className="widget favorites-widget">
              <h3>Mis Favoritos</h3>
              <ul>
                <li>Zapatilla Modelo C</li>
                <li>Zapatilla Modelo D</li>
              </ul>
            </div>
            <div className="widget account-widget">
              <h3>Detalles de la Cuenta</h3>
              <div className="account-details">
                <p>Nombre de Usuario: {state?.name}</p>
              </div>
            </div>
          </div>
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
    </div>
  )
}

