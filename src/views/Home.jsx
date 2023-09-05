import { Container, Carousel } from 'react-bootstrap';

export default function Home() {
  return (
    <div>
      <h1>
        <br />
        <br />
        Bienvenido a <span className="fw-bold">ilTichoStore</span>
      </h1>
      <h4>
        El lugar donde encontraras exelentes productos<br />en alimentos y arenas sanitarias para tu mascota 🐱🎉
      </h4><br /><br />
      <Container>
      <h1 className="text-center">Nuestros Productos</h1>
      <br />
      <Carousel>
        <Carousel.Item>
          <img
            className="d-block w-100 mx-auto"
            style={{ maxWidth: '350px', maxHeight: '450px' }}
            src="/img/pollo.png" // la ruta de tu primera imagen
            alt="Primera Imagen"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100 mx-auto"
            style={{ maxWidth: '400px', maxHeight: '450px' }}
            src="/img/gatito.png"
            alt="Segunda Imagen"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100 mx-auto"
            style={{ maxWidth: '400px', maxHeight: '450px' }}
            src="/img/champi.png" 
            alt="Tercera Imagen"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100 mx-auto"
            style={{ maxWidth: '400px', maxHeight: '450px' }}
            src="/img/pollogatitos.png" 
            alt="Cuarta Imagen"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100 mx-auto"
            style={{ maxWidth: '400px', maxHeight: '450px' }}
            src="/img/duck.webp" 
            alt="Quinta Imagen"
          />
        </Carousel.Item>
        {/* Agrega más elementos Carousel.Item para más imágenes */}
      </Carousel>
    </Container>
    </div>
  );
};
