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

function App() {

  return (
   <div className="App">
   <BrowserRouter>
   <Navbar />
   <Routes>

   <Route path="/" element={<Login />} />
   <Route path="/tienda" element={<Tienda/>} />
   <Route path="/perfil" element={<Perfil/>} />
   <Route path="/favoritos" element={<Favoritos />} />
   <Route path="/detalle" element={<Detalle />} />
   <Route path="/publicar" element={<Publicar />} />
   <Route path="/*" element={<NotFound/>} />
   </Routes>
   </BrowserRouter>
   </div>
  )
}

export default App
