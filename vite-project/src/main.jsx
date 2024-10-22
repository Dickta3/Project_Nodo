import { createRoot } from 'react-dom/client'
import {FetchingData} from "./components/DataList/dataList.jsx"
import {Formulario} from "./components/Form/form.jsx"
import './main.css'
import 'bulma/css/bulma.css'; 
 
const root = createRoot(document.getElementById("root"))
root.render(
  <>
    <FetchingData></FetchingData> 
  </>

)



