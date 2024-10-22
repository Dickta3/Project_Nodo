import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import {Formulario} from "./components/Form/form.jsx"
import './index.css'

const root = createRoot(document.getElementById("root"))
root.render(
  <>
    <Formulario></Formulario>
  
  </>

)



