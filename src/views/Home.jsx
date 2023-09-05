import { Container, Carousel } from 'react-bootstrap';

export default function Home() {
  const carouselStyle = {
    maxWidth: '700px', // Ajusta el ancho máximo del carrusel 
    margin: 'auto', // Centra el carrusel horizontalmente
    marginBottom: 'auto', // Agrega margen inferior para separación
  };

  const imageStyle = {
    maxWidth: '100%',
    maxHeight: '350px', // Ajusta la altura máxima 
  };

  return (
    <Container className="py-6">
      <br />
      <h1 className="text-center">
        <br />
        Bienvenido a <span className="fw-bold">ilTichoStore</span>
      </h1>
      <h4 className="text-center">
        El lugar donde encontrarás excelentes productos en alimentos y arenas sanitarias para tu mascota 🐱🎉
      </h4>
      <h1 className="text-center mt-4">Nuestros Productos</h1>
      <Carousel style={carouselStyle}>
        <Carousel.Item>
          <img
            className="d-block mx-auto"
            style={imageStyle}
            src="/img/pollo.png"
            alt="Primera Imagen"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block mx-auto"
            style={imageStyle}
            src="/img/gatito.png"
            alt="Segunda Imagen"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block mx-auto"
            style={imageStyle}
            src="/img/champi.png"
            alt="Tercera Imagen"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block mx-auto"
            style={imageStyle}
            src="/img/pollogatitos.png"
            alt="Cuarta Imagen"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block mx-auto"
            style={imageStyle}
            src="/img/duck.webp"
            alt="Quinta Imagen"
          />
        </Carousel.Item>
        {/* más elementos Carousel.Item para más imágenes */}
      </Carousel>
    </Container>
  );
};
