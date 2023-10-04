import "../assets/css/Tienda.css";
import React, { useState, useEffect } from "react";
import { Container, Row, Col, Card, Button, Pagination, Toast } from "react-bootstrap";
import { useCarrito } from "../CarritoContext";

export default function Tienda() {
  const [productos, setProductos] = useState([]);
  const { agregarAlCarrito } = useCarrito(); // Obtener la función para agregar al carrito
  const [currentPage, setCurrentPage] = useState(1);
  const [showToast, setShowToast] = useState(false); // Estado para mostrar/ocultar el Toast
  const [toastMessage, setToastMessage] = useState(""); // Mensaje del Toast
  const productsPerPage = 6; // Número de productos por página
  const indexOfLastProduct = currentPage * productsPerPage;
  const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
  const currentProducts = productos.slice(indexOfFirstProduct, indexOfLastProduct);
  const totalPages = Math.ceil(productos.length / productsPerPage);
  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  useEffect(() => {
    // Realiza la consulta a la API o al archivo data.js
    import("/public/data.js") 
      .then((module) => {
        setProductos(module.products);
      })
      .catch((error) => {
        console.error("Error al cargar los productos:", error);
      });
  }, []);

  const handleAgregarAlCarrito = (producto) => {
    agregarAlCarrito(producto);
    setToastMessage(`¡${producto.nombre} se ha agregado al carrito!`);
    setShowToast(true);
    // Ocultar el Toast después de 3 segundos
    setTimeout(() => {
      setShowToast(false);
    }, 3000);
  };

  return (
    <Container className="mt-2 pt-2">
      <br /><br />
      <h1 className="text-center mt-4">Tienda de Productos</h1>
      <br />
      <Row xs={1} md={3} className="g-4">
        {currentProducts.map((producto) => (
          <Col key={producto.id} md={4} className="mb-4">
            <Card className="bg-transparent targeta">
              <Card.Img src={`/img/${producto.imagen}`} alt={producto.nombre} fluid />
              <Card.Body className="cuerpo">
                <Card.Title>{producto.nombre}</Card.Title>
                <Card.Text>
                  <p>Categoría: {producto.categoria}</p>
                  <p>Descripción: {producto.descripcion}</p>
                  <p>Neto: {producto.neto}</p>
                  <p>Precio: {producto.precio}</p>
                </Card.Text>
                <Button size="sm" variant="outline-primary" onClick={() => handleAgregarAlCarrito(producto)}>
                  Agregar a carrito
                </Button> 
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
      <div className="d-flex justify-content-center">
        <Pagination>
          {Array.from({ length: totalPages }).map((_, index) => (
            <Pagination.Item
              key={index + 1}
              className={`pagination-number ${index + 1 === currentPage ? "active" : ""
                }`}
              onClick={() => paginate(index + 1)}
            >
              {index + 1}
            </Pagination.Item>
          ))}
        </Pagination>
      </div>
       {/* Toast personalizado con estilos */}
       <div
        className={`custom-toast ${showToast ? "show" : ""}`}
        style={{
          backgroundColor: "rgba(0, 0, 0, 0.7)", // Fondo oscuro translúcido
        }}
      >
        {toastMessage}
        <button className="close-button" onClick={() => setShowToast(false)}>
          X
        </button>
      </div>             
    </Container>
  );
};

