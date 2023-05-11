import React from "react";
import Cita from "./Cita";


const ListadoCitas = ({ lista }) => {
    return (
      <ul>
        { lista.map((cita) => (
          <Cita 
          nombreMascota={cita.nombreMascota} 
          dueño={cita.dueño} 
          fecha={cita.fecha} 
          hora={cita.hora} 
          sintomas={cita.sintomas}  />
        ))}
      </ul>
    );
  };
  
   
  export default ListadoCitas