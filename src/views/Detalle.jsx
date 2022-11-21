import React from "react";
import { useContext } from "react";
import { useParams } from "react-router-dom";
import myContext from "../context/myContext";

const Detalle = () => {
  const { id } = useParams();
  const { productosData, setProductosData } = useContext(myContext);
  const list = productosData.filter((register) => register.id === id);

  return (
    <div className="  sm:grid sm:grid-cols-1 sm:grid-rows-1 sm:bg-black  ">
      <div className="mx-auto mt-5 mb-5 
      ">
        <div
          key={list[0].id}
          className="block mx-auto rounded-r-lg border-4 border-white bg-yellow-50 hover:bg-yellow-100 drop-shadow-lg"
        >
          <div>
            <img src={list[0].img} alt={list[0].name} className=" h-auto " />
          </div>
          <div className="p-3">
            <h1>{list[0].name}</h1>
            <strong>{list[0].desc}</strong>
            <p>{list[0].details}</p>

             <strong><h2>Contactar al vendedor </h2>
             </strong> 
            <ul>
              <li>📲</li>
              <li><i className="fa-brands fa-instagram fa-xl"></i></li>
            </ul>
            
          </div>
        </div>
      </div>
    </div>
  );
};

export default Detalle;
