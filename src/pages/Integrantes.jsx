import Header from "../components/Header"
import Footer from "../components/Footer"
import { GlobalStyle } from "../styles/global"
import { PaginaIntegrantes } from "../styles/Integrantes.styles"
import Guilherme from "/Guilherme.png"
import Costa from "/Costa.png"
import Alves from "/Alves.png"
import Wellington from "/Wellington.png"
import GuilhermeC from "/Guilherme.p.jpeg"

export default function Integrantes({ darkMode }) {
  return (
    <PaginaIntegrantes className={darkMode ? 'dark' : ''}>
      <Header darkMode={darkMode} />
      <section>
        <div id="texto">
          <h2>Integrantes do projeto</h2>
          <p>Somos um grupo de pesquisadores independentes que tem o intuito de melhorar a produção de frutas e vegetais.</p>
        </div>
        <div id="integrantes">
          <div>
          <img src={Wellington} alt="Wellington Junior" />
            <h3>Wellington Junior</h3>
            <h4>wellingtonsoaresferreira.jr@gmail.com</h4>
          </div>
          <div>
            <img src={Costa} alt="João Pedro Costa" />
            <h3>João Pedro Costa</h3>
            <h4>joao.pedro.scosta2006@gmail.com</h4>
          </div>
          <div>
            <img src={Alves} alt="João Pedro Alves" />
            <h3>João Pedro Alves</h3>
            <h4>Fihdospop429@gmail.com</h4>
          </div>
          <div>
          <img src={GuilhermeC} alt="Guilherme Pereira" />
            <h3>Guilherme Pereira</h3>
            <h4>GuilhermePerreira@gmail.com</h4>
          </div>
        </div>
      </section>
      <GlobalStyle />
      <Footer />
    </PaginaIntegrantes>
  )
}
