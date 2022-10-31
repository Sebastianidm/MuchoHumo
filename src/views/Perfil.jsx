import React from 'react'

const Perfil = () => {
  return (
    <div className='publicar'>
      <h1 className='text-xl text-center text-white text-bold p-4'> Perfil del usuario</h1>
    <div className='flex content-center containerP '>
      
      <div className='shadow-xl rounded-xl bg-white cartaPerfil border flex flex-col   items-center  mx-auto mt-10'>
      <div>
              <img
                src="\src\assets\img\logodark.png"
                alt="logo"
                className="logoimg rounded-full mt-5"
              />
      </div>
      <h1 className='mt-5'>Nombre De Usuario</h1>
      <h2 className='mt-5'>Correo de Usuario </h2>
      <div className='mt-10'>
      <h2 className='text-center pb-3'>Redes sociales</h2>
        <ul className='flex flex-row '>
          
          <li className='m-3'>
          <i className="fa-brands fa-facebook fa-xl"></i>
          </li>
          <li className='m-3'>
          <i className="fa-brands fa-twitter fa-xl"></i>
          </li>
          <li className='m-3'>
          <i className="fa-brands fa-instagram fa-xl"></i>
          </li>
        </ul>
      </div>

      </div>
    </div>
    </div>
  )
}

export default Perfil