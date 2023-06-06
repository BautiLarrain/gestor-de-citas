
import React from 'react'

export default function Cita({nombre,propietario,fecha,hora,sintomas,lista,setLista}) {
  const Eliminar=(nombre)=>{
  
    /*let listaNueva
    lista.map(cita=> {
      if (cita.nombre===nombre) {
      const index = lista.indexOf(nombre);
      listaNueva = lista.splice(index, 1);
    }})
    setLista([...lista,listaNueva]);
    console.log(nombre);*/
  }
  return (
    <div class="cita">
    <p>Mascota: <span>{nombre}</span></p>
    <p>Dueño: <span>{propietario}</span></p>
    <p>Fecha: <span>{fecha}</span></p>
    <p>Hora: <span>{hora}</span></p>
    <p>Sintomas: <span>{sintomas}</span></p>
    <button class="button elimnar u-full-width" onChange={Eliminar(nombre)}>Eliminar ×</button>
  </div>
  )
}
