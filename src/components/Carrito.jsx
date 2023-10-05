import React, { useState } from "react";
import { useUser } from "../userContext";
import { useCarrito } from "../CarritoContext";
import { Table, Button, Alert } from "react-bootstrap";
import axios from "axios";

export default function Carrito() {
  const { carrito, eliminarDelCarrito } = useCarrito();
  const { userId } = useUser();
  const [totalPago, setTotalPago] = useState(0);
  const [mostrarAlerta, setMostrarAlerta] = useState(false);
  const [mensajeAlerta, setMensajeAlerta] = useState("");

  const eliminarProducto = (producto) => {
    eliminarDelCarrito(producto.id);
    setMensajeAlerta("Producto eliminado con éxito");
    setMostrarAlerta(true);
    setTimeout(() => {    
      setMensajeAlerta("");
      setMostrarAlerta(false);
    }, 3000);
  };

  const calcularPrecioTotal = () => {
    const precioTotal = carrito.reduce((total, producto) => total + parseFloat(producto.precio), 0);
    return precioTotal.toLocaleString("es-CL", { style: "currency", currency: "CLP" });
  };

  const carritoExito = async () => {
    const urlServer = "http://localhost:3000";
    //const apiUrl = process.env.VITE_REACT_APP_APIURL;
    const endpoint = "/carrito";

    const productosCarrito = carrito.map(producto => ({
      nombre: producto.nombre,
      categoria: producto.categoria,
      precio: producto.precio,
    }));

    try {
      const response = await axios.post(urlServer + endpoint, {
        id_usuario: userId,
        productos: productosCarrito,
      });

      setTotalPago(response.data.totalPago);
      eliminarDelCarrito(null);
      setMensajeAlerta("Compra realizada con éxito");
      setMostrarAlerta(true);
      setTimeout(() => {
        setMensajeAlerta("");
        setMostrarAlerta(false);
      }, 3000);
    } catch (error) {
      console.error("Error al realizar la compra:", error);
      setMensajeAlerta("Error al realizar la compra");
      setMostrarAlerta(true);
      setTimeout(() => {
        setMensajeAlerta("");
        setMostrarAlerta(false);
      }, 3000);
    }
  };

  return (
    <div className="galeria grid-columns-4 p-3 justify-content-center">
      <br /><br />
      <h2>Carrito de Compras</h2>
      <h3>Mi Carrito</h3>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>Nombre</th>
            <th>Categoría</th>
            <th>Precio</th>
            <th>Acciones</th>
          </tr>
        </thead>
        <tbody>
          {carrito.map((producto, index) => (
            <tr key={index}>
              <td>{producto.nombre}</td>
              <td>{producto.categoria}</td>
              <td>${producto.precio}</td>
              <td>
                <Button size="sm" variant="danger" onClick={() => eliminarProducto(producto)}>
                  Eliminar
                </Button>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
      <div>
        <h3>Total</h3>
        <p>Precio Total: {calcularPrecioTotal()}</p>
        {totalPago > 0 && (
          <p>Total Pagado: {totalPago.toLocaleString("es-CL", { style: "currency", currency: "CLP" })}</p>
        )}
        <br />
        <Button size="sm" variant="success" onClick={carritoExito}>
          Comprar
        </Button>{" "}
      </div>
      <br />
      {mostrarAlerta && <Alert variant="success">{mensajeAlerta}</Alert>}
    </div>
  );
}

