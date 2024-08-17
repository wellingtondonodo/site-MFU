import Header from "../components/Header"
import Footer from "../components/Footer"
import { GlobalStyle } from "../styles/global"
import { PaginaIntegrantes } from "../styles/Integrantes.styles"

export default function Integrantes() {
  return (
    <PaginaIntegrantes>
      <Header/>
      <GlobalStyle/>
      <Footer/>
    </PaginaIntegrantes>
  )
}
