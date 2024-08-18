import { Head } from "../styles/Components.styles"
import { GlobalStyle } from "../styles/global"
import { NavLink, Link } from "react-router-dom"
import { useState } from "react"
import Logo from "/Logo.png"
import Menu from "/Menu.png"

export default function Header() {
  const [active, SetActive] = useState(false);
  const ToggleActive = () => {
    SetActive(!active)
  }
  
  return (
    <Head>
        <nav>
            <NavLink to="/funcionamento" className={({ isActive }) => (isActive ? 'dentro' : '')}>Funcionamento</NavLink>
            <NavLink to="/materiais" className={({ isActive }) => (isActive ? 'dentro' : '')}>Materiais</NavLink>
            <NavLink to="/" className={({ isActive }) => (isActive ? 'dentro' : '')}><img src={Logo} alt="Logo MFU" /></NavLink>
            <NavLink to="/referencias" className={({ isActive }) => (isActive ? 'dentro' : '')}>Referencias</NavLink>
            <NavLink to="/integrantes" className={({ isActive }) => (isActive ? 'dentro' : '')}>Integrantes</NavLink>
        </nav>

        <div className={active ? 'menuActive' : 'menu'}>
          <button onClick={ToggleActive}><img src={Menu} alt="" /></button>
          <Link to="/"><img src={Logo} alt="Logo MFU" id="logo"/></Link>
        </div>

        <div className={active ? 'ativo' : 'inativo'}>
          <button onClick={ToggleActive} id="fechar">X</button>
          <NavLink to="/funcionamento" className={({ isActive }) => (isActive ? 'dentro' : '')}>Funcionamento</NavLink>
          <NavLink to="/materiais" className={({ isActive }) => (isActive ? 'dentro' : '')}>Materiais</NavLink>
          <NavLink to="/referencias" className={({ isActive }) => (isActive ? 'dentro' : '')}>Referencias</NavLink>
          <NavLink to="/integrantes" className={({ isActive }) => (isActive ? 'dentro' : '')}>Integrantes</NavLink>
        </div>

        <GlobalStyle/>
    </Head>
  )
}
