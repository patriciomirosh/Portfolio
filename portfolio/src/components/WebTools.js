import React, { useState } from "react";
import anal from "../sample/icontec/anal.png";
import FullStackJas from "../sample/icontec/FullStackJas.png";
import stackmelu from "../sample/icontec/stackmelu.png";
import stackpato from "../sample/icontec/stackpato.png";
import Met from "../sample/icontec/Met.JPG";
import compartir from "../sample/icontec/compartir.png";
import '../css/search.css';

import {
  Carousel,
  CarouselItem,
  CarouselControl,
  CarouselIndicators,
} from "reactstrap";

const items = [
  {
    src: anal,
    altText: "Analisis De Datos",
    tooltext: "Analisis de datos ",
    details:
      "Capacidad para Analisar y predecir tendencias en grandes conjuntos de datos",
    caracteristicas: [
      "Creacion de Algoritmos de Prediccion supervisados y no supervisados",
      "Metodologias ETL para procesamiento de datos",
      "Conocimientos de NLP",
      "Creacion de algoritmos de Redes Neuronales",
    ],

    caption: "Counter Strike",
  },
  {
    src: FullStackJas,
    altText: "Full stack Javascript",
    tooltext: "Full Stack Javascript",

    caracteristicas: [
      "Desarrollo de paginas Web de inicio a fin en JS",
      "Creacion de Aplicaciones",
      "Diseño de pagina",
      "Testeos",
    ],
    details:
      "Capacidad de adaptarnos en situaciones laborales en entornos Javascript Totales ",
  },
  {
    src: stackmelu,
    altText: "Full stack PHP",
    tooltext: "Full stack con PHP",

    caracteristicas: [
      "Desarrollo de paginas Web y conexiones en backend Usando PHP",
      "Creacion de Aplicaciones junto a React",
      "Creacion de Administradores de Archivos",
      "Conocimientos en Laravel",
    ],
    details:
      "Creacion de paginas Web Usando PHP y la posibilidad de migrar hacia laravel y symphony.",
  },
  {
    src: stackpato,
    altText: "Full stack Python ",
    tooltext: "Full stack con Python",

    caracteristicas: [
      "Creacion de aplicaciones web complejas con Django",
      "Deztreza para integrar las potentes aplicaciones de Python en Desarrollo Web",
      "Aplicaciones versatiles,rapidas y seguras",
      "Interfaz para acceso a base de datos",
    ],
    details:
      "Nos da la habilidad de poder crear aplicaciones con las ventajas de usar las potentes herramientas en python",
  },
  {
    src: Met,
    altText: "Trabajo en equipo ",
    tooltext: "Metodologias agiles y control de versiones",

    caracteristicas: [
      "Experiencia en metodologias agiles como Scrum",
      "Control de versiones con Git",
      "Almacenamiento de Proyectos de Forma remota en GitHub",
      "Almacenamiento de servidores en la nube y hosting con AWS",
    ],
    details: " Un videojuego de estrategia en tiempo real",
  },
];

const Example = (props) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [animating, setAnimating] = useState(false);

  const next = () => {
    if (animating) return;
    const nextIndex = activeIndex === items.length - 1 ? 0 : activeIndex + 1;
    setActiveIndex(nextIndex);
  };

  const previous = () => {
    if (animating) return;
    const nextIndex = activeIndex === 0 ? items.length - 1 : activeIndex - 1;
    setActiveIndex(nextIndex);
  };

  const goToIndex = (newIndex) => {
    if (animating) return;
    setActiveIndex(newIndex);
  };

  const slides = items.map((item) => {
    return (
      <CarouselItem
        style={{ border: "solid" }}
        onExiting={() => setAnimating(true)}
        onExited={() => setAnimating(false)}
        key={item.src}
        className="col sm-4"
      >
        <div className="row">
          <div className="col sm-4">
            <img
              src={item.src}
              alt={item.altText}
              width="300px"
              height="300px"
            />
          </div>
          <div className="col sm-8">
            <div className="row" id="contenedorHerram">
              <h5>{item.tooltext} <img src={compartir} alt="compartir" /></h5>
              
              </div>
            <p style={{ fontSize: "0.7em" }}>{item.details}</p>
            <ul style={{ fontSize: "0.7em", textDecoration: "default" }}>
              <li>{item.caracteristicas[0]}</li>
              <li>{item.caracteristicas[1]}</li>
              <li>{item.caracteristicas[2]}</li>
              <li>{item.caracteristicas[3]}</li>
            </ul>
          </div>
        </div>
        <hr />
      </CarouselItem>
    );
  });
  const images = items.map((item) => {
    return (
      <div className="col sm-4" key={item.src}>
        <img src={item.src} alt={item.altText} width="70px" height="70px" />
        <h5 style={{ fontSize: "0.7em" }}> {item.altText}</h5>
      </div>
    );
  });

  return (
    <div>
      <Carousel activeIndex={activeIndex} next={next} previous={previous}>
        <CarouselIndicators
          items={items}
          activeIndex={activeIndex}
          onClickHandler={goToIndex}
        />
        {slides}
        <CarouselControl
          direction="prev"
          directionText="Previous"
          onClickHandler={previous}
        />
        <CarouselControl
          direction="next"
          directionText="Next"
          onClickHandler={next}
        />
      </Carousel>
      <div className="row">{images}</div>
    </div>
  );
};

export default Example;
