import './App.css';
import Context from './Context'
import { useState } from "react"
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Navbar from "./components/Navbar"
import Home from "./views/Home"
import Tienda from "./views/Tienda"
import Registro from "./views/Registro"
import Login from "./views/Login"
import Perfil from "./views/Perfil"
import Carrito from "./components/Carrito";

function App() {
  const [usuario, setUsuario] = useState(null);
  
  return (
    <div className="App">
      
      <Context.Provider value={{ usuario, setUsuario }} >
        <BrowserRouter>
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/tienda" element={<Tienda />} />
            <Route path="/registrarse" element={<Registro />} />
            <Route path="/login" element={<Login />} />
            <Route path="/perfil" element={<Perfil />} />
            <Route path="/carrito" element={<Carrito />} />
          </Routes>
        </BrowserRouter>
      </Context.Provider>
      
    </div>
  );
}

export default App;



