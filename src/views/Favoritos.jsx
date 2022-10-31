import React from 'react'

const Favoritos = () => {
  return (
    <div className='favorito'>
    <div className="  md:grid md:grid-cols-4 md:grid-rows-1">
    <div className="md:hidden   p-3 ">
    <input
            type="text"
            placeholder="Buscar producto
            "
            className="text-[15px]  bg-gray-600 rounded w-full h-12 mt-1 "
          />
      
    </div>
    <div className="sm:hidden md:contents md:bg-black md:col-span-1">
      <div className=" favoritoAside bottom-0  p-2  text-center bg-gray-900">

        <div className="p-2.5 flex items-center rounded-md px-4 duration-300 cursor-pointer  bg-slate-600 text-white ">
          <i className="bi bi-search text-sm"></i>
          <input
            type="text"
            placeholder="Buscar producto favorito
            "
            className=" ml-4 w-full bg-transparent focus:outline-none"
          />
        </div>
       
        <div className="p-2.5 mt-3  rounded-md px-4">
          
          <h2 className="ml-4 pb-1 text-dark block text-left">Filtrar por:</h2>
          <select type="text" className="filtrado block ml-4 text-dark font-bold " placeholder="Filtrar por">  
           <option value="text" className='text-dark'>Puros</option>
           <option value="text" className='text-dark'>Cigarros</option>
           <option value="text" className='text-dark'>Tabaco</option>
           <option value="text" className='text-dark'>Accesorios</option>
           </select>
          
          
        </div>
        <div className="p-2.5 mt-3 flex items-center rounded-md px-4 duration-300 cursor-pointer hover:bg-slate-600 text-dark">
          <i className="bi bi-bookmark-fill"></i>
          <span className="text-[15px] ml-4 text-dark font-bold">
            Publicar producto
          </span>
        </div>
        <div className="my-4 bg-white h-[1px]"></div>
        <div className="p-2.5 mt-1 flex items-center">
            
            <h1 className="font-bold text-dark text-[15px] ml-3">
              Categorias
            </h1>
          
          </div>
        <div
          className="p-2.5 mt-3 flex items-center rounded-md px-4 duration-300 cursor-pointer hover:bg-blue-600 text-white"
          onclick="dropdown()"
        >
          <i className="bi bi-chat-left-text-fill"></i>
        </div>
        <div
          className="text-left text-sm mt-2 w-4/5 mx-auto text-dark font-bold"
          id="submenu"
        >
          <h1 className="cursor-pointer p-2 hover:bg-slate-600 rounded-md mt-1">
            Tabaco
          </h1>
          <h1 className="cursor-pointer p-2 hover:bg-slate-600 rounded-md mt-1">
            Cigarros
          </h1>
          <h1 className="cursor-pointer p-2 hover:bg-slate-600 rounded-md mt-1">
            Puros
          </h1>
          <h1 className="cursor-pointer p-2 hover:bg-slate-600 rounded-md mt-1">
            Accesorios
          </h1>
        </div>
        <div className="p-2.5 mt-3 flex items-center rounded-md px-4 duration-300 cursor-pointer hover:bg-bg-slate-600 text-dark">
          <i className="bi bi-box-arrow-in-right"></i>
          <span className="text-[15px] ml-4 text-dark font-bold">
            Logout
          </span>
        </div>
      </div>
    </div>

    <div className="md:col-span-3 favorito pt-2  ">
    <h1 className='text-xl text-center text-white text-bold'> Productos Favoritos </h1>
      <div className="md:grid md:grid-rows-2 md:grid-cols-2 mt-5">
        
        <div className="cartita flex flex-col items-center mx-auto mt-5 mb-5 rounded-r-lg border-4 border-white bg-yellow-50 hover:bg-yellow-100 drop-shadow-lg">
          <div>
            <img
              src="\src\assets\img\logodark.png"
              alt="logo"
              className="logoimg mt-3"
            />
          </div>
          <div className="p-3">
            <h1>Nombre</h1>
            <strong>Precio</strong>
            <h4>Stock</h4>
          </div>
         
        </div>


        <div className="cartita cartita flex flex-col items-center mx-auto mt-5 mb-5 rounded-r-lg border-4 border-white bg-yellow-50 hover:bg-yellow-100 drop-shadow-lg">
          <div>
            <img
              src="\src\assets\img\logodark.png"
              alt="logo"
              className="logoimg mt-3"
            />
          </div>
          <div className="p-3">
            <h1>Nombre</h1>
            <strong>precio</strong>
            <h4>stock</h4>
          </div>



        </div>
        <div className=" cartita cartita flex flex-col items-center mx-auto mt-5 mb-5 rounded-r-lg border-4 border-white bg-yellow-50 hover:bg-yellow-100 drop-shadow-lg">
          <div>
            <img
              src="\src\assets\img\logodark.png"
              alt="logo"
              className="logoimg mt-3 "
            />
          </div>
          <div className="p-3">
            <h1>Nombre</h1>
            <strong>Precio</strong>
            <h4>stock</h4>
          </div>
          
        </div>


        <div className=" cartita cartita flex flex-col items-center mx-auto mt-5 mb-5 rounded-r-lg border-4 border-white bg-yellow-50 hover:bg-yellow-100 drop-shadow-lg sm:mb-3">
          <div>
            <img
              src="\src\assets\img\logodark.png"
              alt="logo"
              className="logoimg mt-3"
            />
          </div>
          <div className="p-3">
            <h1>Nombre</h1>
            <strong>Precio</strong>
            <h4>stock</h4>
          </div>
          
        </div>
      </div>
    </div>
  </div>
  </div>
  )
}

export default Favoritos