import {React, useEffect} from "react";
import { auth } from "../firebase/Firebase";
import { useNavigate } from 'react-router-dom';
import { useState } from "react";
import { useContext } from "react";
import myContext from "../context/myContext";

const Tienda = () => {
  const [term, setTerm] = useState('');
  const {productosData, setProductosData} = useContext(myContext)
  const navigate = useNavigate();
  const [user, setUser] = useState(null);

  const setFavorito = (id) => {
    //Crea una variable que retorna un indice
    const apiIndex = productosData.findIndex((e) => e.id === id );
    productosData[apiIndex].favorito = !productosData[apiIndex].favorito;
    setProductosData([...api]);
  }

  

  useEffect( () => {
    if(auth.currentUser){
      console.log('Existe un usuario')
      setUser(auth.currentUser)
    }else{
      console.log('no existe usuario')
      navigate("/")
      
    }
  },[])

  return (
    <div className="  md:grid md:grid-cols-3 md:grid-rows-3">
      <div className="md:hidden bg-white  py-2 ">
      <input  
              value={term}
              onChange={(e) => setTerm(e.target.value)}
              type="search"
              placeholder="Buscar producto
              "
              className="text-[15px]  bg-black text-white font-bold rounded w-full h-12 mt-1 text-center "
            />
        
      </div>


      <div className="sm:hidden md:contents md:col-span-1  ">
        <div className="asideTienda  bottom-0  p-3  text-center aside">

          <div className="p-2.5 flex items-center rounded-md px-4 duration-300 cursor-pointer bg-white text-white ">
            <i className="bi bi-search text-sm"></i>
            <input
             value={term}
             onChange={(e) => setTerm(e.target.value)}
              type="search"
              placeholder="Buscar producto
              "
              className=" ml-4 w-full bg-black rounded-sm text-center p-2 focus:outline-none text-white font-bold"
            />
          </div>
         
          
          <div className="p-2.5 mt-3 flex items-center rounded-md px-4 duration-300 cursor-pointer hover:bg-yellow-50 text-white">
            <i className="bi bi-bookmark-fill"></i>
            <span onClick={() => navigate(`/publicar`)} className="text-[15px] ml-4 text-black  font-bold">
              Publicar producto
            </span>
          </div>
          <div className="my-4 bg-white h-[1px]"></div>
          <div className="p-2.5 mt-1 flex items-center">
              
              <h1 className="font-bold text-black text-[15px] ml-6">
                Categorias
              </h1>
            
            </div>
          <div
            className="p-2.5 mt-3 flex items-center rounded-md px-4 duration-300 cursor-pointer  text-white"
            onclick="dropdown()"
          >
            <i className="bi bi-chat-left-text-fill"></i>
          </div>
          <div
            className="text-left text-sm mt-2 w-4/5 mx-auto text-black font-bold"
            id="submenu"
          >
            <h1 className="cursor-pointer p-2 hover:yellow-50 rounded-md mt-1">
              Tabaco
            </h1>
            <h1 className="cursor-pointer p-2 hover:bg-yellow-50 rounded-md mt-1">
              Cigarros
            </h1>
            <h1 className="cursor-pointer p-2 hover:bg-yellow-50 rounded-md mt-1">
              Puros
            </h1>
           
          </div>
          <div className="p-2.5 mt-3 flex items-center rounded-md px-4 duration-300 cursor-pointer hover:bg-black-600 text-white">
            <i className="bi bi-box-arrow-in-right"></i>
            
          </div>
          
        </div>
      </div>

      <div className="md:col-span-2 tienda pt-2">
        <div className="md:grid md:grid-rows-2 md:grid-cols-2 mt-5">
          {
            productosData.filter(user => user.name.toLowerCase().includes(term)).map((a) => {
              return(
          <div className="cartita flex flex-col items-center mx-auto mt-5 mb-5 rounded-r-lg border-4 border-white bg-yellow-50 hover:bg-lime-50 drop-shadow-lg" key={a.id}>
            <div>
              <img
                src={a.img}
                alt="logo"
                className="logoimg mt-3"
              />
            </div>
            <div className="p-3">
              <h1>{a.name}</h1>
              <strong>{a.desc}</strong>
              <h4>Stock disponible</h4>
            </div>
            <div className="flex  justify-evenly  px-3 py-3">
              <button 
              className=" m-1 rounded-full bg-white hover:bg-green-600 focus:outline-none focus:ring focus:ring-green-800 w-20 h-10 text-zinc-100  drop-shadow-xl"
              onClick={() => navigate(`/detalle/${a.id}`)}
              >
              🔍
              </button>
              <button 
              className=" m-1 rounded-full bg-white hover:bg-red-600 focus:outline-none focus:ring focus:ring-red-800 w-20 h-10 text-zinc-100 drop-shadow-xl "
              onClick={() => navigate(`/favoritos/${a.id}`)}>
              💚
              </button>
            </div>
          </div>
              )
})
}       

          


       
        </div>
      </div>
    </div>
  );
};

export default Tienda;
