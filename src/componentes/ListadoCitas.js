import React from "react";
import Cita from "./Cita";


const ListadoCitas = ({setLista,lista }) => {
    return (
      <ul>
        { lista.map((cita) => (
          
          <Cita 
          nombre={cita.nombre} 
          propietario={cita.propietario} 
          fecha={cita.fecha} 
          hora={cita.hora} 
          sintomas={cita.sintomas}
          lista={lista}
          setLista={setLista}  />
        ))}
      </ul>
    );
  };
  
   
  export default ListadoCitas