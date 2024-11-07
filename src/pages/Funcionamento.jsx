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
          <video width="600" controls autoPlay muted>
            <source src="/TimeBanana.mp4" type="video/mp4" />
          </video>
        </div>

        <div id="parte3">
          <h2>Vídeos</h2>
          <video width="600" height="550" controls autoPlay muted>
          <source src="/funcionando.mp4" type="video/mp4" />
          </video>
          
          <video width="600"  controls autoPlay muted>
            <source src="/Jogo.TCC.mp4" type="video/mp4" />
          </video>
          

        </div>
      </section>
      <GlobalStyle/>
      <Footer/>
    </PaginaFuncionamento>
  )
}
<a href="https://www.banasil.com.br/" target="_blank" className="botao">Pedido</a>