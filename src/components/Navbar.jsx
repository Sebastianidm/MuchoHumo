import React from "react";
import { NavLink } from "react-router-dom";
import { auth } from "../firebase/Firebase";
import { useNavigate } from 'react-router-dom';
const Navbar = (props) => {
  const navigate = useNavigate();

  const cerrarSesion = () => {
    auth.signOut()
    .then(() => {
      navigate("/")
    })

  }
  return (
    <div className=" bg-black text-white containerNav">
      <nav className="sm:hidden md:grid md:grid-cols-2 md:grid-rows-1 md:rounded md:rounded-b-xl md:p-2 md:h-12 md:mb-5">
        <div className="md:mx-auto">
          
          <NavLink to="/">
            <img
              src="\src\assets\img\logodark.png"
              alt="logo"
              className="logoimg"
            />
          </NavLink>
    
          
        </div>
        <div className="  md:flex md:items-center md:justify-center md:pt-12 md:m-2 ">
          {
            props.firebaseUser !== null ? (
              <button onClick={() => cerrarSesion()} className="font-semibold">
                 LOGOUT
              </button>
            ) : (
              <NavLink to="/" className="font-semibold">LOGIN /</NavLink>
  
            )
          }
          <p className="text-black">-</p>
          {
            props.firebaseUser !== null ? (
              <NavLink to="/tienda" className="font-semibold">TIENDA</NavLink>
            ) : null
          }

<p className="text-black">-</p>
    
    {
            props.firebaseUser !== null ? (
              
              <NavLink to="/perfil" className="font-semibold">PERFIL</NavLink>
            ) : null
          }
    
    <p className="text-black">-</p>
        
          {
            props.firebaseUser !== null ? (
              <NavLink to="/publicar" className="font-semibold">PUBLICAR</NavLink>
            ) : null
          }
       
        </div>
      </nav>

      {/*MOBILE  */}
      <nav className=" md:hidden ">
        <div>
          <NavLink to="/">
            <img
              src="\src\assets\img\logodark.png"
              alt="logo"
              className="logoimg mx-auto"
            />
          </NavLink>
        </div>

        <div>
          <ul className="md:hidden p-1 mb-1">
            <li className="m-2">
            {
            props.firebaseUser !== null ? (
              <button onClick={() => cerrarSesion()} className="font-semibold">
                 LOGOUT
              </button>
            ) : (
              <NavLink to="/" className="font-semibold">LOGIN /</NavLink>
  
            )
          }
            </li>
            <li className="m-2"> 
            {
            props.firebaseUser !== null ? (
              <NavLink to="/tienda" className="font-semibold">TIENDA</NavLink>
            ) : null
          }
            </li>

            <li className="m-2">
            {
            props.firebaseUser !== null ? (
              
              <NavLink to="/perfil" className="font-semibold">PERFIL</NavLink>
            ) : null
          }
            </li>
         
          
            <li className="m-2">
            {
            props.firebaseUser !== null ? (
              <NavLink to="/publicar" className="font-semibold">PUBLICAR</NavLink>
            ) : null
          }
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
