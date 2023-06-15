import React from "react";
import Cita from "./Cita";

const Eliminar = (lista, setLista, id) => {
  const listaNueva = lista.filter((cita) => cita.id !== id);
  setLista(listaNueva);
};

const ListadoCitas = ({ setLista, lista }) => {
  console.log(lista);

  if (!Array.isArray(lista)) {
    return <div>Loading...</div>; // or any loading indicator or null if you want to render nothing
  }

  return (
    <ul>
      {lista.map((cita) => (
        <Cita
          key={cita.id}
          idCita={cita.id}
          cita={cita}
          lista={lista}
          setLista={setLista}
          eliminar={Eliminar}
        />
      ))}
    </ul>
  );
};
  
   
  export default ListadoCitas