//React Router
import { BrowserRouter, Routes, Route } from "react-router-dom";

// //Componentes
import Navbar from "./components/Navbar"


//Views 
import Detalle  from "./views/Detalle";
import Publicar from "./views/Publicar";
import Favoritos from "./views/Favoritos";
import Tienda from "./views/Tienda";
import Login from "./views/Login"
import Perfil from "./views/Perfil";
import NotFound from "./views/NotFound";


import { auth } from "./firebase/Firebase";
import { useState } from "react";
import { useEffect } from "react";


import myContext from "./context/myContext";

function App() {
  const [productosData, setProductosData] = useState([]);
  
   
  const endpoint = "/tienda.json";
  const fetchData = async () => {
    const response = await fetch(endpoint);
    let data = await response.json();
    console.log(data);
    setProductosData(data);
  };

  useEffect(() => {
    fetchData();
  }, []);

  const [firebaseUser, setFirebaseUser] = useState(false)
  useEffect (() => {
    auth.onAuthStateChanged( user => {
      console.log(user)
      if(user){
        setFirebaseUser(user)
      }else{
        setFirebaseUser(null)
      }
    })
  })

  return firebaseUser !== false ? (

   <div className="App">
    <myContext.Provider
    value={{
      productosData,
      setProductosData,
    }}
    >
   <BrowserRouter>
   <Navbar firebaseUser={firebaseUser}/>
   <Routes>

   <Route path="/" element={<Login />} />
   <Route path="/tienda" element={<Tienda/>} />
   <Route path="/perfil" element={<Perfil/>} />
   <Route path="/favoritos/:id" element={<Favoritos />} />
   <Route path="/detalle/:id" element={<Detalle />} />
   <Route path="/publicar" element={<Publicar />} />
   <Route path="/*" element={<NotFound/>} />
   </Routes>
   </BrowserRouter>
   </myContext.Provider>
   </div>
  ) : (
    <p>Cargando...</p>
  )
}

export default App
