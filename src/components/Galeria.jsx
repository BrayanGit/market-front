import "../assets/css/Galeria.css";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Form, Button, Container, ToastContainer, Toast } from "react-bootstrap";
import axios from 'axios';

export default function Galeria() {
  const navigate = useNavigate();
  const [posteo, setPosteo] = useState({ nombre_producto: '', comentario: '' });
  const [posteos, setPosteos] = useState([]);

  useEffect(() => {
    obtenerPosteos();
  }, []);

  const obtenerPosteos = async () => {
    try {
      const response = await axios.get('/posteos');
      setPosteos(response.data);
    } catch (error) {
      console.error('Error al obtener los posteos:', error);
    }
  };

  const handleSetPosteo = ({ target: { value, name } }) => {
    const field = {};
    field[name] = value;
    setPosteo({ ...posteo, ...field });
  };

  const enviarPost = async () => {
    const urlServer = "http://localhost:3000";
    const endpoint = "/posteos";
    try {
      const response = await axios.post(urlServer + endpoint, posteo);
      if (response.status === 201) {
        alert("Posteo realizado con éxito 🎉");
        // Agrega el nuevo posteo a la lista de posteos
        setPosteos([...posteos, posteo]);
        // Limpia los campos después del posteo exitoso
        setPosteo({ nombre_producto: "", comentario: "" });
      } else {
        console.error("Error al realizar el posteo");
      }
    } catch (error) {
      alert("Algo salió mal ...");
      console.log(error);
    }
  };

  return (
    <Container>
      <div>
        <div className="toast-container">
          <br />
          {posteos.map((post, index) => (
            <ToastContainer className="d-flex justify-content-center align-items-center">
              <Toast key={index}>
                <Toast.Header>
                  <h5 className="justify-content-center">Mis Comentarios</h5>
                </Toast.Header>
                <Toast.Body>
                  <p>{post.nombre_producto}</p>
                  <p>{post.comentario}</p>
                </Toast.Body>
              </Toast>
            </ToastContainer>
          ))}
        </div>
        <br /><br />
        <Form className="text-center">
          <Form.Group className="mb-3" controlId="nombreProducto">
            <Form.Label className="mb-0">Nombre Del Producto</Form.Label>
            <br />
            <Form.Control
              type="text"
              className="mx-auto"
              style={{ maxWidth: '300px' }}
              name="nombre_producto"
              value={posteo.nombre_producto}
              onChange={handleSetPosteo}
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="comentario">
            <Form.Label className="mb-0">Agregar Comentario</Form.Label>
            <br />
            <Form.Control
              type='text'
              as="textarea"
              rows={3}
              className="mx-auto"
              style={{ maxWidth: '300px' }}
              name="comentario"
              value={posteo.comentario}
              onChange={handleSetPosteo}
            />
          </Form.Group>
          <Button variant="outline-primary" onClick={enviarPost} value="posteos">
            Enviar
          </Button>{' '}
        </Form>
      </div>
    </Container>
  );
}

/*
*/
