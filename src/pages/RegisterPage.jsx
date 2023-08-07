import React from 'react'
import { useForm } from '../hook/useForm'
import { useNavigate } from 'react-router-dom';

export const RegisterPage = () => {

  const navigate = useNavigate()

  const { name, email, password, onInputChange, onResetForm } = 
    useForm({
      name: '',
      email: '',
      password: '',
    });

    const onRegister = (e) => {
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
    
    <div className="register-container">
      <form className='register-form' onSubmit={onRegister}>
        <h1>Registro de Usuarios</h1>

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
          <label htmlFor='name'>Nombre de usuario:</label>
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

        <button type='submit'>Registrarse</button>
        
      </form>
    </div>
  )
}
