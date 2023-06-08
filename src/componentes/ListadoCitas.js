import React from "react";
import Cita from "./Cita";


const ListadoCitas = ({setLista,lista }) => {
    return (
      <ul>
        { lista.map((cita) => (
          
          <Cita 
          cita={cita}
          lista={lista}
          setLista={setLista}  />
   
        ))}

      </ul>
      
    );
  };
  
   
  export default ListadoCitas