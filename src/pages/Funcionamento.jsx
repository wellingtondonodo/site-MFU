import Header from "../components/Header"
import Footer from "../components/Footer"
import { GlobalStyle } from "../styles/global"
import {PaginaFuncionamento} from "../styles/Funcionamento.styles"

export default function Funcionamento() {
  return (
    <PaginaFuncionamento>
      <Header/>
      <GlobalStyle/>
      <Footer/>
    </PaginaFuncionamento>
  )
}
