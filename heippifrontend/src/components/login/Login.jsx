import React from 'react'
import './Login.css'
import logo from '../../assets/img/logo.png'

export const Login = () => {
  return (
    <>
      <div className='containerLogin'>
        <img src={logo} alt="Logo" className='Logo'/>
        <form>
          <div class="mb-4">
            <input type="email" id="form2Example1" class="form-control" placeholder='jeffersonpulido55@gmail.com'/>
            <label class="form-label" for="form2Example1">Correo Electronico</label>
          </div>
          <div class="mb-4">
            <input type="password" id="form2Example2" class="form-control" placeholder='Ingrese su contraseña...'/>
            <label class="form-label" for="form2Example2">Contraseña</label>
          </div>
          <div class="row mb-4">
            <div class="col d-flex justify-content-center">
              <div class="form-check">
                <input class="form-check-input" type="checkbox" value="" id="form2Example31" checked />
                <label class="form-check-label" for="form2Example31"> Siempre activo </label>
              </div>
            </div>
          </div>
          <button type="button" class="btn btn-primary btn-block mb-4">Iniciar Sesion</button>
          <div class="text-center">
            <p>No eres miembro? <a href="#!">Registrate</a></p>
            <p>O Inicia Sesion con:</p>
            <button type="button" class="btn btn-link btn-floating mx-1">
              <i class="fab fa-facebook-f"></i>
            </button>

            <button type="button" class="btn btn-link btn-floating mx-1">
              <i class="fab fa-google"></i>
            </button>

            <button type="button" class="btn btn-link btn-floating mx-1">
              <i class="fab fa-twitter"></i>
            </button>

            <button type="button" class="btn btn-link btn-floating mx-1">
              <i class="fab fa-github"></i>
            </button>
          </div>
        </form>
      </div>
    </>
  )
}
