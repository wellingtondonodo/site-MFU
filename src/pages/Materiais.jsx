import Header from "../components/Header"
import Footer from "../components/Footer"
import { GlobalStyle } from "../styles/global"
import {PaginaMateriais} from "../styles/Materiais.styles"

export default function Materiais() {
  return (
    <PaginaMateriais>
      <Header/>
      <GlobalStyle/>
      <Footer/>
    </PaginaMateriais>
  )
}
