import React from "react";
import { NavLink } from "react-router-dom";
const Navbar = () => {
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
          <NavLink to="/">LOGIN</NavLink>
          <p>/</p>
          <br />
          <NavLink to="/tienda">TIENDA</NavLink>
          <p>/</p>
          <NavLink to="/perfil">PERFIL</NavLink>
          <p>/</p>
          <NavLink to="/favoritos">FAVORITOS</NavLink>
          <p>/</p>

          <NavLink to="/detalle">DETALLE</NavLink>
          <p>/</p>
          <NavLink to="/publicar">PUBLICAR</NavLink>
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
              <NavLink to="/">LOGIN</NavLink>
            </li>
            <li className="m-2"> 
              <NavLink to="/tienda">TIENDA</NavLink>
            </li>

            <li className="m-2">
              <NavLink to="/perfil">PERFIL</NavLink>
            </li>
            <li className="m-2">
              <NavLink to="/favoritos">FAVORITOS</NavLink>
            </li>
            <li className="m-2">
              <NavLink to="/detalle">DETALLE</NavLink>
            </li>
            <li className="m-2">
              <NavLink to="/publicar">PUBLICAR</NavLink>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
