
import { useState } from 'react';
import './App.css';
import Formulario from './componentes/Formulario';
import Cita from './componentes/Cita';
import ListadoCitas from './componentes/ListadoCitas';



function App() {

  const [lista,setLista] = useState([]);
  const [idCounter,setIdCounter] = useState(0)

  /*const lista = [
    {nombre: "Boycka",
      propetario: "Bauti",
      fecha: 20/3/2005,
      hora: "20:10",
      sintomas: "le duele la panza"}
  ]*/

  const getId = ()=>{
    setIdCounter(idCounter+1)

    return idCounter;
  }

  return (
    <>
      <div id="root">
        <h1>ADMINISTRADOR DE PACIENTES</h1>
        <div class="container">
          <div class="row">
            <div class="one-half column">
              <h2>Crear mi Cita</h2>
              <Formulario setLista={setLista} lista={lista} getId={getId} />
            </div>
            
            <div class="one-half column">
              <h2>Administra tus citas</h2>
              <ListadoCitas setLista={setLista} lista={lista}/>
              
            </div>

          </div>
        </div>

      </div>

    </>

  );
}

export default App;
