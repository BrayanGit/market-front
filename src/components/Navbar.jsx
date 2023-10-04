import "../assets/css/Navbar.css";
import Button from 'react-bootstrap/Button';
import { Link, useNavigate } from "react-router-dom";
import { useContext } from "react";
import Context from "../Context";

export default function Navbar() {
  const navigate = useNavigate();
  const { usuario, setUsuario } = useContext(Context);
  const logout = () => {
    setUsuario(null);
    localStorage.removeItem("token");
    navigate("/");
  };
  return (
    <header className="head">
      <nav className="navbar">
      <span className="logo"><i class="fa-solid fa-cat"></i></span>
        <div className="opciones">
          <span className="me-3">
            <Link to="/">
              <i className="fa-solid fa-house ms-2"></i>
              <br />Inicio
            </Link>
          </span>
          {!usuario ? (
            <div>
              <Link to="/registrarse">
                <Button size="sm" variant="success">Registrarse</Button>{' '} 
              </Link>
              
              <Link to="/login">
                <Button size="sm" variant="primary">Iniciar Sesion</Button>{' '}
              </Link>
            </div>
          ) : (
            <div>
              <Link to="/carrito">
                <Button size="sm" variant="outline-info">Carrito</Button>{' '}
              </Link>
                            
              <Link to="/perfil">
                <Button size="sm" variant="outline-info">Perfil</Button>{' '}
              </Link>

              <Link to="/tienda">
                <Button size="sm" variant="outline-info">Tienda</Button>{' '}
              </Link>
              
              <Button size="sm" variant="danger" onClick={logout}>
                Salir
              </Button>{' '}
            </div>
          )}
        </div>
      </nav>
    </header>
  );
};
