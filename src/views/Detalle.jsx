import React from 'react'

const Detalle = () => {
  return (
    <div className='  publicar '>
    <div className="p-14 m-10">
      <h1 className='text-xl text-center text-white text-bold'> Detalles del producto</h1>
    <div className="sm:p-10 sm:m-4 md:detalleCard md:flex md:content-center md:justify-center  lg:max-w-full lg:flex">
      <div className="h-48 md:h-auto md:w-48 flex-none  rounded-t md:rounded-t-none lg:rounded-l text-center overflow-hidden bg-[url('C:\Users\sebas\OneDrive\Escritorio\marketplace\marketplace\src\assets\img\puros.jpg')] bg-cover bg-center"  title="Puros">
      </div>
      <div className="border-r border-b border-l border-dark lg:border-l-0 lg:border-t lg:border-gray-400 bg-white rounded-b lg:rounded-b-none lg:rounded-r p-4 flex flex-col justify-between leading-normal">
        <div className="mb-8">
          <p className="text-sm text-gray-600 flex items-center">
            <svg className="fill-current text-gray-500 w-3 h-3 mr-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
              <path d="M4 8V6a6 6 0 1 1 12 0v2h1a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2v-8c0-1.1.9-2 2-2h1zm5 6.73V17h2v-2.27a2 2 0 1 0-2 0zM7 6v2h6V6a3 3 0 0 0-6 0z" />
            </svg>
            Solo Miembros
          </p>
          <div className="text-gray-900 font-bold text-xl mb-2">Nombre del producto</div>
          <p className="text-gray-700 text-base">Descripcion del producto</p>
        </div>
        <div className="flex items-center">
          <img className="w-10 h-10 rounded-full mr-4" src="\src\assets\img\logodark.png"alt="Avatar of Writer" />
          <div className="text-sm">
            <p className="text-gray-900 leading-none">Usuario Vendedor</p>
            <p className="text-gray-600">Numero de contacto</p>
          </div>
        </div>
      </div>
    </div>
  </div>
  </div>

    
  )
}

export default Detalle