
import './App.css';
import Formulario from './componentes/Formulario';
import Cita from './componentes/Cita';
import ListadoCitas from './componentes/ListadoCitas';
import { useState } from 'react/ts5.0';


function App() {

  const lista = [
    {nombre: "Boycka",
      propetario: "Bauti",
      fecha: 20/3/2005,
      hora: "20:10",
      sintomas: "le duele la panza"}
  ]
  return (
    <>
      <div id="root">
        <h1>ADMINISTRADOR DE PACIENTES</h1>
        <div class="container">
          <div class="row">
            <div class="one-half column">
              <h2>Crear mi Cita</h2>
              <Formulario />
            </div>
            
            <div class="one-half column">
              <h2>Administra tus citas</h2>
              <ListadoCitas lista={lista}/>
              
            </div>

          </div>
        </div>

      </div>

    </>

  );
}

export default App;
