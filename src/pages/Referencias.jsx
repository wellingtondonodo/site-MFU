import Header from "../components/Header"
import Footer from "../components/Footer"
import { GlobalStyle } from "../styles/global"
import { PaginaReferencias } from "../styles/Referencias.styles"
import Maca from "/Maca.png"
import Banana from "/Banana.png"
import Colheita from "/Colheita.png"
import Etileno from "/Etileno.png"

export default function Referencias() {
  return (
    <PaginaReferencias>
      <Header />
      <section>
        <h2>Pesquisa baseada nos seguintes artigos:</h2>
        <div id="a1">
          <a href="https://repositorio.ufpel.edu.br/bitstream/handle/prefix/3717/dissertacao_breno_xavier_goncalves.pdf?sequence=1&isAllowed=y" target="_blank"><span>Artigo 1:</span> Ação do etileno no acúmulo diferencial de proteínas durante o amadurecimento de frutas</a>
          <img src={Maca} alt="" />
        </div>
        <div id="a2">
          <a href="https://www.researchgate.net/profile/Vanessa-Caroline-De Oliveira/publication/354993661_TECNICAS_DE_PRESERVACAO_POS COLHEITA_DE_FRUTAS_E_HORTALICAS_UMA_REVISAO_NARRATIVA/links/618e 63833068c54fa5d6c542/TECNICAS-DE-PRESERVACAO-POS-COLHEITA-DE FRUTAS-E-HORTALICAS-UMA-REVISAO-NARRATIVA.pdf" target="_blank"><span>Artigo 2:</span> Técnicas de Preservação pós colheita de frutas e hortaliças: Uma visão Narrativa</a>
          <img src={Banana} alt="" />
        </div>

        <div id="a3">
          <a href="https://www.infoteca.cnptia.embrapa.br/bitstream/doc/423865/1/Dc111.pdf" target="_blank"><span>Artigo 3:</span> Métodos de Controle do Etileno na Qualidade e Conservação Pós-Colheita de Frutas</a>
          <img src={Colheita} alt="" />
        </div>
        <div id="a4">
          <a href="https://periodicos2.uesb.br/index.php/reed/article/view/13985/8262" target="_blank"><span>Artigo 4:</span> Química orgânica: um estudo de caso voltada ao amadurecimento de frutas</a>
          <img src={Etileno} alt="" />
        </div>
      </section>
      <GlobalStyle />
      <Footer />
    </PaginaReferencias>
  )
}
