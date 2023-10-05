import { useContext, useState, useEffect } from "react";
import Context from "../Context";
import axios from "axios";
import Galeria from "../components/Galeria";

export default function PerfilUsuario() {
  const { setUsuario: setUsuarioGlobal } = useContext(Context);
  const [usuario, setUsuarioLocal] = useState({});

  const getUsuarioData = async () => {
    //const urlServer = "http://localhost:3000";
    const urlServer = process.env.VITE_REACT_APP_APIURL;
    //const urlServer = import.meta.env.VITE_REACT_APP_APIURL;
    const endpoint = "/usuarios";
    const token = localStorage.getItem("token");
    
    try {
      const { data } = await axios.get(urlServer + endpoint, {
        headers: { Authorization: "Bearer " + token },
      });
      setUsuarioGlobal(data);
      setUsuarioLocal(data);
    } catch ({ response: { data: message } }) {
      alert(message + " 🙁");
      console.log(message);
    }
  };
  useEffect(() => {
    getUsuarioData();
  },[]);

  return (
    <div className="py-5">
      <h1>
        <br />
        Bienvenido <span className="fw-bold">{usuario.nombre}</span>
      </h1>
      <h3>
        Estas en tu perfil comenta sobre nuestros productos 😀
      </h3>
      <Galeria />
    </div>
  );
};
