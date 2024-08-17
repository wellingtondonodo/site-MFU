import Header from "../components/Header"
import Footer from "../components/Footer"
import { GlobalStyle } from "../styles/global"
import {PaginaMateriais} from "../styles/Materiais.styles"
import Arduino from "/Arduino.png"

export default function Materiais() {
  return (
    <PaginaMateriais>
      <Header/>
      <section>
        <div id="texto">
          <h2>Materiais utilizados</h2>
          <div>
            <p>Caixa Organizadora de Plástico</p>
            <p>Arduino Uno</p>
            <p>Jumpers variados (fios)</p>
            <p>Monitor LCD   Protoboard 830 pontos</p>
            <p>Sensor de temperatura NTC</p>
            <p>Resistor</p>
            <p>Álcool Etílico</p>
            <p>Botão</p>
            <p>Módulo Bluetooth HC-05</p>
            <p>Silicone</p>
          </div>
        </div>
        <img src={Arduino} alt="Arduino Uno" />
      </section>
      <GlobalStyle/>
      <Footer/>
    </PaginaMateriais>
  )
}
