
import React from 'react'

export default function Cita({cita,lista,setLista}) {
  const {nombre,propietario,fecha,hora,sintomas,id} = cita;
  
  const Eliminar=(id)=>{
    
    const listaNueva=lista.filter(Cita=>Cita.id != id)
    
    //setLista([...lista,listaNueva]);
    
  }
  return (
    <div class="cita">
    <p>Mascota: <span>{nombre}</span></p>
    <p>Dueño: <span>{propietario}</span></p>
    <p>Fecha: <span>{fecha}</span></p>
    <p>Hora: <span>{hora}</span></p>
    <p>Sintomas: <span>{sintomas}</span></p>
    <button class="button elimnar u-full-width" onChange={Eliminar(id)}>Eliminar ×</button>
  </div>
  )
}
