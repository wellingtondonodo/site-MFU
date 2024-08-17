import { Head } from "../styles/Components.styles"
import { GlobalStyle } from "../styles/global"
import { NavLink } from "react-router-dom"
import Logo from "/Logo.png"

export default function Header() {
  return (
    <Head>
        <nav>
            <NavLink to="/funcionamento" className={({ isActive }) => (isActive ? 'dentro' : '')}>Funcionamento</NavLink>
            <NavLink to="/materiais" className={({ isActive }) => (isActive ? 'dentro' : '')}>Materiais</NavLink>
            <NavLink to="/" className={({ isActive }) => (isActive ? 'dentro' : '')}><img src={Logo} alt="Logo MFU" /></NavLink>
            <NavLink to="/referencias" className={({ isActive }) => (isActive ? 'dentro' : '')}>Referencias</NavLink>
            <NavLink to="/integrantes" className={({ isActive }) => (isActive ? 'dentro' : '')}>Integrantes</NavLink>
        </nav>
        <GlobalStyle/>
    </Head>
  )
}
