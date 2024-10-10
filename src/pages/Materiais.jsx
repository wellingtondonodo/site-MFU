import Header from "../components/Header"
import Footer from "../components/Footer";
import { GlobalStyle } from "../styles/global";
import { PaginaMateriais } from "../styles/Materiais.styles";
import Arduino from "/ardu.jpeg";
import Sensor from "/sensor.jpeg";
import Placa from "/placa.png";
import Cabo from "/cabos.jpeg";
import Caixa from "/caixa.png";
import Tela from "/tela.jpeg"
import Blut from "/blutu.jpeg";
import setaD from "/seta-direita.png";
import setaE from "/seta-esquerda.png";
import React, { useEffect, useState } from 'react';




export default function Materiais() {

  const [currentIndex, setCurrentIndex] = useState(0);

  const data = [
    {
      title: "Arduino Uno:",
      image: Arduino,
      description: "O Arduino Uno é uma placa simples para criar projetos eletrônicos interativos e aprender programação.",
      price: "Valor: R$54,90"
    },
    {
      title: "Sensor (DHT22)",
      image: Sensor,
      description: "O DHT22 é um sensor que mede temperatura e umidade, ideal para projetos de monitoramento.",
      price: "Valor: R$34,90"
    },
    {
      title: "Jumpers variados (fios)",
      image: Cabo,
      description: "Jumpers no Arduino conectam componentes à placa, transmitindo sinais elétricos e montando circuitos facilmente.",
      price: "Valor: R$12,90"
    },
    {
      title: "Display LCD",
      image: Tela,
      description: "O display LCD no Arduino exibe textos e números, permitindo mostrar informações de forma clara em projetos.",
      price: "Valor: R$18,90"
    },
    {
      title: "Protoboard",
      image: Placa,
      description: "O protoboard no Arduino é uma placa para montar circuitos sem solda, facilitando conexões temporárias.",
      price: "Valor: R$12,90"
    },
    {
      title: "Módulo Bluetooth",
      image: Blut,
      description: "O módulo Bluetooth do Arduino permite comunicação sem fio com dispositivos Bluetooth.",
      price: "Valor: R$62,90"
    },
  ];
  
  const nextItem = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % data.length);
  };

  const prevItem = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + data.length) % data.length);
  };

  useEffect(() => {
    const script = document.createElement('script');
    script.src = '/src/pages/script.js'; 
    script.defer = true;


   
  }, []);

  return (
    <PaginaMateriais>
      <Header/>
      <section>
        <div className="container-slider">
          <button id="prev-button" onClick={prevItem}>
            <img src={setaE} alt="prev-button" />
          </button>
          
          <div className="content">
            <h2>{data[currentIndex].title}</h2>
            <img className="Carrosel" src={data[currentIndex].image} alt={data[currentIndex].title} />
            <p>{data[currentIndex].description}</p> {/* Exibe a descrição */}
            <p><strong>{data[currentIndex].price}</strong></p> {/* Exibe o preço */}
          </div>
          
          <button id="next-button" onClick={nextItem}>
            <img src={setaD} alt="next-button" />
          </button>
        </div>
      </section>
      <GlobalStyle/>
      <Footer/>
    </PaginaMateriais>
  );
}