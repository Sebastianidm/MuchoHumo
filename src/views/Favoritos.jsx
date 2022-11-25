import React from 'react'
import { useContext } from 'react';
import { useParams } from "react-router-dom";
import myContext from '../context/myContext';

const Favoritos = () => {

  const { id } = useParams();
  const { productosData, setProductosData } = useContext(myContext);
  const list = productosData.filter((register) => register.id === id);
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
       
        
        <div className="p-2.5 mt-3 flex items-center rounded-md px-4 duration-300 cursor-pointer hover:bg-slate-600 text-dark">
          <i className="bi bi-bookmark-fill"></i>
          <span  onClick={() => navigate(`/publicar`)} className="text-[15px] ml-4 text-dark font-bold">
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
    <h1 className='text-xl text-center text-white font-bold'> Productos Favoritos </h1>
      <div className="md:grid md:grid-rows-2 md:grid-cols-2 mt-5">
       
        <div 
        key={list[0].id}
        className="cartita flex flex-col items-center mx-auto mt-5 mb-5 rounded-r-lg border-4 border-white bg-yellow-50 hover:bg-yellow-100 drop-shadow-lg">
          <div>
            <img
              src={list[0].img}
              alt="logo"
              className="logoimg mt-3"
            />
          </div>
          <div className="p-3">
            <h1>{list[0].name}</h1>
            <strong>{list[0].desc}</strong>
          </div>
         
        </div>


       

    </div>
  </div>
  </div>
  </div>
  )
      }


export default Favoritos