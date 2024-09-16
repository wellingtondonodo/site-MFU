import Header from "../components/Header"
import Footer from "../components/Footer"
import { GlobalStyle } from "../styles/global"
import {PaginaFuncionamento} from "../styles/Funcionamento.styles"
import Madura from "/Amadurecimento.png"
import Frutas from "/Frutas.png"

export default function Funcionamento() {
  return (
    <PaginaFuncionamento>
      <Header/>
      <section>
        <div id="parte1">
          <div>
            <h2>Como funciona?</h2>
            <p>Nosso amadurecedor combina temperatura controlada, umidade e ventilação para amadurecer frutas e vegetais de forma uniforme e segura. Coloque os alimentos, ajuste as configurações e aguarde o tempo necessário para que estejam prontos para o consumo.</p>
          </div>
          <img src={Madura} alt="" />
        </div>

        <div id="parte3">
          <h2>Faça seu pedido aqui:</h2>
          <a href="https://www.banasil.com.br/" target="_blank" className="botao">Pedido</a>
        </div>
      </section>
      <GlobalStyle/>
      <Footer/>
    </PaginaFuncionamento>
  )
}
