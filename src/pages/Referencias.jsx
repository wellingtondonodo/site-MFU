import Header from "../components/Header"
import Footer from "../components/Footer"
import { GlobalStyle } from "../styles/global"
import {PaginaReferencias} from "../styles/Referencias.styles"

export default function Referencias() {
  return (
    <PaginaReferencias>
      <Header/>
      <GlobalStyle/>
      <Footer/>
    </PaginaReferencias>
  )
}
