import { Link } from "react-router-dom"
import Footer from "../components/Footer"
import Header from "../components/Header"
import { GlobalStyle } from "../styles/global"
import { PaginaInicio } from "../styles/Inicio.styles"
import Cpu from "/Cpu.png"
import Coracao from "/Coracao.png"
import Folha from "/Folha.png"
import Publico from "/Publico.png"

export default function Inicio() {
  return (
    <PaginaInicio>
        <Header/>
        <div id="boas-vindas">
            <h1>Bem-vindo à <span>MFU</span></h1>
            <h3>Seu destino para frutas perfeitas.</h3>
        </div>
        <h2 id="pergunta">Por que escolher nosso produto?</h2>
        <div id="container">
            <section id="esquerda">
                <p>O produto que acelera e mantém o amadurecimento de frutas e vegetais.</p>
            </section>
            <section id="direita">
                <div><img src={Cpu} alt="" /> <p>Tecnologia</p></div>
                <div><img src={Coracao} alt="" /> <p>Saúde</p></div>
                <div><img src={Folha} alt="" /> <p>Natureza</p></div>
            </section>
        </div>
        <div id="texto1">
            <img src={Publico} alt="" />
            <div>
                <h2>Público Alvo</h2>
                <p>Famílias: Garantindo que as frutas estejam sempre prontas para o consumo, facilitando a vida das crianças e dos pais que buscam uma alimentação saudável.</p>
                <p>Cozinheiros e Chefs: Profissionais que precisam de frutas no ponto ideal para suas receitas, otimizando o sabor e a apresentação dos pratos.</p>
                <p>Amantes de Frutas: Qualquer pessoa que aprecia frutas frescas e deseja evitar o desperdício, garantindo que cada fruta atinja seu melhor momento.</p>
                <p>Estabelecimentos Comerciais: Restaurantes, cafés e mercados que desejam oferecer aos seus clientes produtos de alta qualidade e perfeitamente maduros.</p>
            </div>
        </div>
        <div className="textos2">
            <h2>Objetivo</h2>
            <p>Nosso principal objetivo é transformar a maneira como você consome frutas, proporcionando maior sabor e nutrição, redução de desperdício e praticidade no dia a dia.</p>
        </div>
        <div className="textos2" id="pedido">
            <h2>Faça Seu Pedido Hoje Mesmo!</h2>
            <p>Acelere o amadurecimento dos seus alimentos com nosso produto inovador. Compre agora na nossa loja online e ganhe em praticidade!</p>
            <a href="/funcionamento" className="botao">Pedido</a>
        </div>
        <h2>Veja Mais</h2>
        <div id="links">
            <Link to="/funcionamento" className="botao">Funcionamento</Link>
            <Link to="/materiais" className="botao">Materiais</Link>
        </div>
        <GlobalStyle/>
        <Footer/>
    </PaginaInicio>
  )
}
