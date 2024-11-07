import Header from "../components/Header"
import Footer from "../components/Footer"
import {PaginaVideos} from  "../styles/Videos.styles"

export default function Videos() {
    return (
      <PaginaVideos>
        <Header/>
        <NavLink to="/Vídeos" className={({ isActive }) => (isActive ? 'dentro' : '')}><img src="/youtube.png"/></NavLink>
        <NavLink to="/Vídeos" className={({ isActive }) => (isActive ? 'dentro' : '')}>Vídeos</NavLink>
      
        <GlobalStyle/>
        <Footer/>
      </PaginaVideos>
    )
  }