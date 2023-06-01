
import React from 'react'

export default function Cita({nombreMascota,dueño,fecha,hora,sintomas}) {
  return (
    <div class="cita">
    <p>Mascota: <span></span>{nombreMascota}</p>
    <p>Dueño: <span>{dueño}</span></p>
    <p>Fecha: <span>{fecha}</span></p>
    <p>Hora: <span>{hora}</span></p>
    <p>Sintomas: <span>{sintomas}</span></p>
    <button class="button elimnar u-full-width">Eliminar ×</button>
  </div>
  )
}
