import React from 'react'
import { useForm } from '../hook/useForm'
import { useNavigate } from 'react-router-dom';

export const LoginPage = () => {

  const navigate = useNavigate()

  const { name, email, password, onInputChange, onResetForm } = 
    useForm({
      name: '',
      email: '',
      password: '',
    });

    const onLogin = (e) => {
      e.preventDefault()

      navigate('/dashboard' , { 
        replace: true,
        state: {
          logged: true,
          name
        }
      })

      onResetForm();
    }

  return (
    <div className="login-container">
      <form className='login-form' onSubmit={onLogin}>
        <h1>Inicio de Sesión</h1>

        <div className="input-group">
          <input 
            type='text'
            name='name' 
            id='name' 
            value={name} 
            onChange={onInputChange} 
            required 
            autoComplete='off' 
          />
          <label htmlFor='name'>Nombre de Usuario:</label>
        </div>

        <div className="input-group">
          <input 
            type='email'
            name='email' 
            id='email' 
            value={email} 
            onChange={onInputChange} 
            required 
            autoComplete='off' 
          />
          <label htmlFor='email'>Correo Electrónico:</label>
        </div>

        <div className="input-group">
          <input 
            type='password'
            name='password' 
            id='password' 
            value={password} 
            onChange={onInputChange} 
            required 
            autoComplete='off' 
          />
          <label htmlFor='password'>Contraseña:</label>
        </div>

        <button type='submit'>Iniciar Sesión</button>

      </form>
    </div>
  )
}

