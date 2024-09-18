import Header from "../components/Header";
import Footer from "../components/Footer";
import { GlobalStyle } from "../styles/global";
import { PaginaMateriais } from "../styles/Materiais.styles";
import Arduino from "/Arduino.png";
import Sensor from "/sensor.png";
import Placa from "/placa.png";
import Cabo from "/cabos.png";
import Caixa from "/caixa.png";
import Tela from "/display.png.png"
import Blut from "/modulo.png"

import setaD from "/seta-direita.png";
import setaE from "/seta-esquerda.png";
import React, { useEffect, useState } from 'react';

export default function Materiais() {
  const [currentImage, setCurrentImage] = useState(0);
  const images = [Arduino, Sensor, Cabo, Tela, Placa, Blut]; 

  
  const nextImage = () => {
    setCurrentImage((prevImage) => (prevImage + 1) % images.length);
  };

  const prevImage = () => {
    setCurrentImage((prevImage) => (prevImage - 1 + images.length) % images.length);
  };

  useEffect(() => {
   
    const script = document.createElement('script');
    script.src = '/src/pages/script.js'; 
    script.defer = true;
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <PaginaMateriais>
      <Header />
      <div>
      <h2>MATERIAS UTILIZADOS</h2>
      </div>
      <div>
      
        <div className="container-slider">
          <button id="prev-button" onClick={prevImage}>
            <img src={setaD} alt="prev-button" />
          </button>
          <div className="container-images">           
            {images.map((image, index) => (
              <img
                key={index}
                className={`slider ${index === currentImage ? "on" : ""}`}
                src={image}
                alt={`Imagem ${index}`}
                style={{ display: index === currentImage ? "block" : "none" }}
              />
            ))}
          </div>
          <button id="next-button" onClick={nextImage}>
            <img src={setaD} alt="next-button" />
          </button>
        </div>
      </div>
      <div className="container-text">
          <h3>Arduino Uno:</h3>
          <p>O Arduino Uno é uma placa simples para criar projetos eletrônicos interativos e aprender programação.</p>
          <h3>Valor: 54,90</h3>
      </div>
      <GlobalStyle />
      <Footer />
    </PaginaMateriais>
  );
}
