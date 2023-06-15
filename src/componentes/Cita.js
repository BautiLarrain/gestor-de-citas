
import React from 'react'

export default function Cita({cita,lista,setLista,eliminar}) {
  const {nombre,propietario,fecha,hora,sintomas,id} = cita;
  

  const Elim = (id) => {
    eliminar(lista,setLista,id)
   
  }
 
  return (
    <div className="cita">
    <p>Mascota: <span>{nombre}</span></p>
    <p>Dueño: <span>{propietario}</span></p>
    <p>Fecha: <span>{fecha}</span></p>
    <p>Hora: <span>{hora}</span></p>
    <p>Sintomas: <span>{sintomas}</span></p>
<button className="button eliminar u-full-width" onClick={() => Elim(id)}>Eliminar</button>  </div>
  )
}
