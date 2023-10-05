import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Button from 'react-bootstrap/Button';
import axios from "axios";

export default function Registro() {
  const navigate = useNavigate();
  const [usuario, setUsuario] = useState({});

  const handleSetUsuario = ({ target: { value, name } }) => {
    const field = {};
    field[name] = value;
    setUsuario({ ...usuario, ...field });
  };

  const registrarUsuario = async () => {
    //const urlServer = "http://localhost:3000";
    const urlServer = import.meta.env.VITE_REACT_APP_APIURL;
    //const urlServer = process.env.REACT_APP_API_URL;
    const endpoint = "/usuarios";
    try {
      await axios.post(urlServer + endpoint, usuario);
      alert("Usuario registrado con éxito 🎉");
      navigate("/login");
    } catch (error) {
      alert("Algo salió mal ...");
      console.log(error);
    }
  };

  return (
    <div className="col-10 col-sm-6 col-md-3 m-auto mt-5">
      <h1><br /><br />Registrar nuevo usuario</h1>
      <hr />
      <div className="form-group form-group-lg mt-1">
        <label>Nombre</label>
        <input
          value={usuario.nombre}
          onChange={handleSetUsuario}
          type="text"
          name="nombre"
          className="form-control form-control-lg"
          placeholder="Enter name"
        />
      </div>
      <div className="form-group form-group-lg mt-1">
        <label>Email address</label>
        <input
          value={usuario.email}
          onChange={handleSetUsuario}
          type="email"
          name="email"
          className="form-control form-control-lg"
          placeholder="Enter email"
        />
      </div>
      <div className="form-group form-group-lg mt-1">
        <label>Password</label>
        <input
          value={usuario.password}
          onChange={handleSetUsuario}
          type="password"
          name="password"
          className="form-control form-control-lg"
          placeholder="Password"
        />
      </div>
      <Button onClick={registrarUsuario} variant="outline-success" value="usuarios">
        Registrarme
      </Button>
    </div>
  );
};
