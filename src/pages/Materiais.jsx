import Header from "../components/Header";
import Footer from "../components/Footer";
import { GlobalStyle } from "../styles/global";
import { PaginaMateriais } from "../styles/Materiais.styles";
import Arduino from "/aa.png";
import Sensor from "/cc.png";
import Placa from "/ee.png";
import Cabo from "/bb.png";
import Caixa from "/caixa.png";
import Tela from "/tt.png"
import Blut from "/ff.png"



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
      <GlobalStyle />
      <Footer />
    </PaginaMateriais>
  );
}
