import { createBrowserRouter, RouterProvider } from "react-router-dom"
import Inicio from "./pages/Inicio"
import Funcionamento from "./pages/Funcionamento"
import Materiais from "./pages/Materiais"
import Referencias from "./pages/Referencias"
import Integrantes from "./pages/Integrantes"


const router = createBrowserRouter([
  {
    path: '/',
    element: <Inicio/>
  },
  {
    path: '/funcionamento',
    element: <Funcionamento/>
  },
  {
    path: '/materiais',
    element: <Materiais/>
  },
  {
    path: '/referencias',
    element: <Referencias/>
  },
  {
    path: '/integrantes',
    element: <Integrantes/>
  },
  
  
  

])

export default function App() {
  return (
    <RouterProvider router={router} />
  )
}
