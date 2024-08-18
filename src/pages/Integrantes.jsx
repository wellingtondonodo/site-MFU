import Header from "../components/Header"
import Footer from "../components/Footer"
import { GlobalStyle } from "../styles/global"
import { PaginaIntegrantes } from "../styles/Integrantes.styles"
import Guilherme from "/Guilherme.png"
import Costa from "/Costa.png"
import Alves from "/Alves.png"
import Wellington from "/Wellington.png"

export default function Integrantes() {
  return (
    <PaginaIntegrantes>
      <Header/>
      <section>
        <div id="texto">
          <h2>Integrantes do projeto</h2>
          <p>Somos um grupo de pesquisadores independentes que tem o intuito de melhorar a produção de frutas e vegetais</p>
        </div>
        <div id="integrantes">
          <div>
            <img src={Guilherme} alt="" />
            <h3>Guilherme Pereira </h3>
            <h4>GuilhermePerreira@gmail.com</h4>
          </div>
          <div>
            <img src={Costa} alt="" />
            <h3>João Pedro Costa</h3>
            <h4>joao.pedro.scosta2006@gmail</h4>
          </div>
          <div>
            <img src={Alves} alt="" />
            <h3>João Pedro Alves</h3>
            <h4>Fihdospop429@gmail.com</h4>
          </div>
          <div>
            <img src={Wellington} alt="" />
            <h3>Wellington Junior</h3>
            <h4>wellingtonsoaresferreira.jr@gmail.com</h4>
          </div>
        </div>
      </section>
      <GlobalStyle/>
      <Footer/>
    </PaginaIntegrantes>
  )
}
